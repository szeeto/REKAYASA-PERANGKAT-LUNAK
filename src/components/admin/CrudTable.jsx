import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function CrudTable({ tableName, columns }) {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase.from(tableName).select('*').order('id', { ascending: false });
    setData(data || []);
    setLoading(false);
  };

  useEffect(() => {
    const fetch = async () => {
      await fetchData();
    };
    fetch();
    // eslint-disable-next-line
  }, [tableName]);

  const handleChange = (e, col) => {
    setForm({ ...form, [col.key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validasi field kosong
    for (const col of columns) {
      if (!col.readOnly && col.key !== 'image_url' && !form[col.key]) {
        alert(`Field ${col.label} tidak boleh kosong!`);
        return;
      }
    }
    if (editing) {
      await supabase.from(tableName).update(form).eq('id', editing);
    } else {
      await supabase.from(tableName).insert([form]);
    }
    setForm({});
    setEditing(null);
    fetchData();
  };

  const handleEdit = (row) => {
    setForm(row);
    setEditing(row.id);
  };

  const handleDelete = async (id) => {
    // Jika gallery, hapus juga file dari storage
    if (tableName === 'gallery') {
      const { data: row } = await supabase.from('gallery').select('image_url').eq('id', id).single();
      if (row && row.image_url) {
        // Ekstrak nama file dari publicUrl
        const urlParts = row.image_url.split('/');
        const fileName = urlParts[urlParts.length - 1].split('?')[0];
        await supabase.storage.from('gallery').remove([fileName]);
      }
    }
    await supabase.from(tableName).delete().eq('id', id);
    fetchData();
  };

  return (
    <div className="mb-8">
      {/* Form modern grid */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-end max-w-3xl mx-auto">
        {columns.filter(col => !col.readOnly && col.key !== 'image_url').map(col => (
          <div key={col.key} className="flex flex-col">
            <label className="text-xs font-medium mb-1 text-gray-600 tracking-wide uppercase">{col.label}</label>
            {col.type === 'textarea' ? (
              <textarea
                className="border border-slate-300 rounded-lg p-2 min-w-[180px] focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none"
                value={form[col.key] || ''}
                onChange={e => handleChange(e, col)}
                required
                rows={3}
              />
            ) : (
              <input
                className="border border-slate-300 rounded-lg p-2 min-w-[180px] focus:ring-2 focus:ring-blue-200 focus:outline-none"
                type={col.type}
                value={form[col.key] || ''}
                onChange={e => handleChange(e, col)}
                required
              />
            )}
          </div>
        ))}
        <div className="flex gap-2 mt-2 md:col-span-2">
          <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition text-base">
            {editing ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            )}
            {editing ? 'Update' : 'Add'}
          </button>
          {editing && (
            <button type="button" onClick={() => { setForm({}); setEditing(null); }} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition">Cancel</button>
          )}
        </div>
      </form>
      {/* Tabel modern */}
      <div className="overflow-x-auto rounded-xl shadow border border-slate-200 bg-white">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col.key} className="px-3 py-2 bg-slate-50 text-left font-semibold text-gray-700 border-b border-slate-200 uppercase tracking-wider">{col.label}</th>
                ))}
                <th className="px-3 py-2 bg-slate-50 border-b border-slate-200">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id} className="hover:bg-slate-50 transition">
                  {columns.map(col => (
                    <td key={col.key} className="px-3 py-2 border-b border-slate-100 align-top">
                      {tableName === 'gallery' && col.key === 'image_url' && row[col.key] ? (
                        <img src={row[col.key]} alt="preview" className="w-20 h-20 object-cover rounded shadow border mx-auto" />
                      ) : col.type === 'textarea' ? (
                        <div className="max-w-xs whitespace-pre-line text-gray-800">{row[col.key]}</div>
                      ) : (
                        <span className="text-gray-800">{row[col.key]}</span>
                      )}
                    </td>
                  ))}
                  <td className="px-3 py-2 border-b border-slate-100 whitespace-nowrap">
                    <button onClick={() => handleEdit(row)} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold px-2 py-1 rounded transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6v-6H3v6z" /></svg>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 font-semibold px-2 py-1 rounded transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}