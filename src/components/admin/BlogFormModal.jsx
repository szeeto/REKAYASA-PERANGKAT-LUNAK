
import React, { useState } from "react";
import { db } from '../../firebase/firebaseClient';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const BlogFormModal = ({ open, onClose, blog }) => {
  const [form, setForm] = useState({
    title: blog?.title || "",
    content: blog?.content || "",
    thumbnail: blog?.thumbnail || "",
    date: blog?.date || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (blog && blog.id) {
        // Edit mode
        await updateDoc(doc(db, 'blogs', blog.id), form);
        onClose(true, { type: 'success', message: 'Blog berhasil diupdate.' });
      } else {
        // Add mode
        await addDoc(collection(db, 'blogs'), form);
        onClose(true, { type: 'success', message: 'Blog berhasil ditambahkan.' });
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || "Gagal menyimpan data.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => onClose(false)}>&times;</button>
        <h3 className="text-xl font-bold mb-4">{blog ? "Edit Blog" : "Add Blog"}</h3>
        {error && <div className="mb-2 text-red-600">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input name="title" value={form.title} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea name="content" value={form.content} onChange={handleChange} required className="w-full border rounded px-3 py-2 min-h-20" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Thumbnail URL</label>
            <input name="thumbnail" value={form.thumbnail} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => onClose(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {loading ? "Saving..." : blog ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogFormModal;
