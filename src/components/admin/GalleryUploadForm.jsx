import React, { useRef, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function GalleryUploadForm({ onUpload }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef();

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    if (f) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from('gallery').upload(fileName, file);
    if (uploadError) {
      alert('Upload gagal: ' + uploadError.message);
      setLoading(false);
      return;
    }
    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(fileName);
    const { error: dbError } = await supabase.from('gallery').insert([
      { title, description, image_url: publicUrl }
    ]);
    setLoading(false);
    setTitle('');
    setDescription('');
    setFile(null);
    setPreview(null);
    fileInput.current.value = '';
    if (onUpload) onUpload();
    if (dbError) alert('Gagal simpan ke database: ' + dbError.message);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end border border-slate-100">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold mb-1 text-gray-500 tracking-wide uppercase">Judul</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          placeholder="Judul gambar..."
          className="p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base placeholder-gray-400 bg-slate-50 shadow-sm transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold mb-1 text-gray-500 tracking-wide uppercase">Deskripsi</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          placeholder="Deskripsi singkat..."
          className="p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base placeholder-gray-400 bg-slate-50 shadow-sm transition resize-none"
          rows={3}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-xs font-semibold mb-1 text-gray-500 tracking-wide uppercase">Gambar</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleFileChange}
          required
          className="p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-50 shadow-sm transition"
        />
        {preview && (
          <div className="mt-3 flex flex-col items-center">
            <img src={preview} alt="Preview" className="rounded-xl shadow max-h-56 object-contain border border-slate-200" />
            <span className="text-xs text-gray-400 mt-1">Preview gambar sebelum upload</span>
          </div>
        )}
      </div>
      <div className="flex gap-2 md:col-span-2 mt-2 justify-end">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {loading && (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
          )}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          {loading ? 'Mengupload...' : 'Upload'}
        </button>
      </div>
    </form>
  );
}
