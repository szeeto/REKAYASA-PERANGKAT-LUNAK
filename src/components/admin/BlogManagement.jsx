import React, { useState, useEffect } from "react";

import BlogFormModal from "./BlogFormModal";
import { db } from '../../firebase/firebaseClient';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [notif, setNotif] = useState(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogsData);
      setNotif(null);
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal mengambil data blog.' });
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBlogs();
    };
    fetchData();
    // Optionally: subscribe to realtime changes
  }, []);

  const handleAdd = () => {
    setEditBlog(null);
    setModalOpen(true);
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setNotif({ type: "success", message: 'Blog berhasil dihapus.' });
      fetchBlogs();
    } catch (err) {
      setNotif({ type: "error", message: 'Gagal menghapus blog.' });
    }
  };

  const handleModalClose = (refresh, msg) => {
    setModalOpen(false);
    setEditBlog(null);
    if (refresh) fetchBlogs();
    if (msg) setNotif(msg);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Blog</button>
      </div>
      {notif && (
        <div className={`mb-4 p-2 rounded ${notif.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{notif.message}</div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Thumbnail</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="p-4 text-center">Loading...</td></tr>
            ) : blogs.length === 0 ? (
              <tr><td colSpan="4" className="p-4 text-center">No blogs found.</td></tr>
            ) : blogs.map((blog) => (
              <tr key={blog.id} className="border-b">
                <td className="p-2 font-medium">{blog.title}</td>
                <td className="p-2">{blog.date || blog.created_at?.slice(0,10)}</td>
                <td className="p-2"><img src={blog.thumbnail} alt="thumb" className="h-12 w-20 object-cover rounded" /></td>
                <td className="p-2 space-x-2">
                  <button onClick={() => handleEdit(blog)} className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">Edit</button>
                  <button onClick={() => handleDelete(blog.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <BlogFormModal
          open={modalOpen}
          onClose={handleModalClose}
          blog={editBlog}
        />
      )}
    </div>
  );
};

export default BlogManagement;
