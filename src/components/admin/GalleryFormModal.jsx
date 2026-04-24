
import React, { useState, useRef, useEffect } from "react";
import { db, storage } from '../../firebase/firebaseClient';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const GalleryFormModal = ({ open, onClose, item }) => {
  const [form, setForm] = useState({
    title: item?.title || "",
    description: item?.description || "",
    image_url: item?.image_url || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newFile, setNewFile] = useState(null); // track if new file uploaded
  const fileRef = useRef();

  useEffect(() => {
    setForm({
      title: item?.title || "",
      description: item?.description || "",
      image_url: item?.image_url || "",
    });
    setNewFile(null);
    setError(null);
  }, [item, open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Upload file to Firebase Storage and get URL
  const uploadFile = async (file) => {
    const filePath = `gallery/${Date.now()}_${file.name}`;
    const storageRefObj = ref(storage, filePath);
    await uploadBytes(storageRefObj, file);
    return await getDownloadURL(storageRefObj);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const url = await uploadFile(file);
      setForm(f => ({ ...f, image_url: url }));
      setNewFile(file); // mark new file uploaded
    } catch (err) {
      setError('Gagal upload gambar: ' + (err.message || err));
    }
    setLoading(false);
  };

  // Fungsi untuk menghapus gambar lama dari storage
  const deleteOldImage = async (oldUrl) => {
    if (!oldUrl) return;
    try {
      // Extract path from URL
      const matches = oldUrl.match(/%2F(.+?)\?/);
      const filePath = matches ? decodeURIComponent(matches[1]) : null;
      if (filePath) {
        const storageRefObj = ref(storage, filePath);
        await deleteObject(storageRefObj);
      }
    } catch (err) {
      // ignore error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!form.title || !form.description || !form.image_url) {
        setError('Semua field wajib diisi dan gambar harus diupload.');
        setLoading(false);
        return;
      }
      if (item) {
        // Edit mode
        // Jika ada gambar baru, hapus gambar lama
        if (newFile && item.image_url && form.image_url !== item.image_url) {
          await deleteOldImage(item.image_url);
        }
        await updateDoc(doc(db, 'gallery', item.id), {
          title: form.title,
          description: form.description,
          image_url: form.image_url,
        });
        setLoading(false);
        onClose(true, { type: 'success', message: 'Galeri berhasil diupdate.' });
      } else {
        // Add mode
        await addDoc(collection(db, 'gallery'), {
          title: form.title,
          description: form.description,
          image_url: form.image_url,
        });
        setLoading(false);
        onClose(true, { type: 'success', message: 'Galeri berhasil ditambahkan.' });
      }
    } catch (err) {
      console.error('Error saving gallery:', err);
      setError(err.message || "Gagal menyimpan data.");
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => onClose(false)}>&times;</button>
        <h3 className="text-xl font-bold mb-4">{item ? "Edit Image" : "Add Image"}</h3>
        {error && <div className="mb-2 text-red-600">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input name="title" value={form.title} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border rounded px-3 py-2 min-h-15" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Image</label>
            <input type="file" accept="image/*" ref={fileRef} onChange={handleFileChange} className="w-full" />
            {form.image_url && <img src={form.image_url} alt="preview" className="h-24 mt-2 rounded" />}
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => onClose(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {loading ? "Saving..." : item ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryFormModal;
