
import React, { useState, useEffect } from "react";
import GalleryFormModal from "./GalleryFormModal";
import { db } from '../../firebase/firebaseClient';
import { collection, getDocs } from 'firebase/firestore';

const GalleryManagement = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [notif, setNotif] = useState(null);

  const fetchGallery = async () => {
    setLoading(true);
    setNotif(null);
    try {
      const querySnapshot = await getDocs(collection(db, 'gallery'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGallery(items);
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal mengambil data galeri: ' + (err.message || err) });
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGallery();
    };
    fetchData();
    // Optionally: subscribe to realtime changes
  }, []);

  const handleAdd = () => {
    setEditItem(null);
    setModalOpen(true);
  };
  const handleEdit = (item) => {
    setEditItem(item);
    setModalOpen(true);
  };
  const handleDelete = async (item) => {
    if (!window.confirm("Delete this image?")) return;
    setNotif(null);
    setLoading(true);
    try {
      // Delete image from Firebase Storage
      if (item.image_url) {
        // Extract path from URL
        const url = item.image_url;
        const matches = url.match(/%2F(.+?)\?/);
        const filePath = matches ? decodeURIComponent(matches[1]) : null;
        if (filePath) {
          const { ref: storageRef } = await import('firebase/storage');
          const { deleteObject } = await import('firebase/storage');
          const { storage } = await import('../../firebase/firebaseClient');
          await deleteObject(storageRef(storage, filePath));
        }
      }
      // Delete Firestore document
      const { doc, deleteDoc } = await import('firebase/firestore');
      const { db } = await import('../../firebase/firebaseClient');
      await deleteDoc(doc(db, 'gallery', item.id));
      setNotif({ type: 'success', message: 'Gambar berhasil dihapus.' });
      await fetchGallery();
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal menghapus galeri: ' + (err.message || err) });
    }
    setLoading(false);
  };
  const handleModalClose = (refresh, msg) => {
    setModalOpen(false);
    setEditItem(null);
    if (refresh) fetchGallery();
    if (msg) setNotif(msg);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Image</button>
      </div>
      {notif && (
        <div className={`mb-4 p-2 rounded ${notif.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{notif.message}</div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Image</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="p-4 text-center">Loading...</td></tr>
            ) : gallery.length === 0 ? (
              <tr><td colSpan="4" className="p-4 text-center">No images found.</td></tr>
            ) : gallery.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2"><img src={item.image_url} alt={item.title} className="h-16 w-24 object-cover rounded" /></td>
                <td className="p-2 font-medium">{item.title}</td>
                <td className="p-2">{item.description}</td>
                <td className="p-2 space-x-2">
                  <button onClick={() => handleEdit(item)} className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">Edit</button>
                  <button onClick={() => handleDelete(item)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <GalleryFormModal
          open={modalOpen}
          onClose={handleModalClose}
          item={editItem}
        />
      )}
    </div>
  );
};

export default GalleryManagement;
