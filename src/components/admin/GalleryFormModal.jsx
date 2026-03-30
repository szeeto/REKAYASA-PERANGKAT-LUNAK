import React, { useState, useRef } from "react";

const GalleryFormModal = ({ open, onClose, item }) => {
  const [form, setForm] = useState({
    title: item?.title || "",
    description: item?.description || "",
    image_url: item?.image_url || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    const filePath = `${Date.now()}_${file.name}`;
    // TODO: Implement file upload with new backend
    setError('Upload file belum diimplementasikan.');
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // TODO: Implement gallery save logic with new backend
      setError('Simpan gallery belum diimplementasikan.');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.name === "AbortError") {
        setError("Request dibatalkan, coba ulangi.");
      } else {
        setError(err.message || "Gagal menyimpan data.");
      }
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
