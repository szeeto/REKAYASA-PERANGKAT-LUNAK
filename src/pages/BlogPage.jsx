
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebaseClient';
import { collection, getDocs } from 'firebase/firestore';

export default function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogsData);
      } catch (err) {
        setBlogs([]);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-cyan-300/60 bg-white shadow-cyan-200/60">
      <h1 className="text-3xl font-bold text-center p-7 mb-7" id='blog' data-aos="fade-up">Blog & Artikel</h1>
      <div className="grid gap-8 md:grid-cols-3 p-3 m-3">
        {loading ? (
          <div className="col-span-3 text-center">Loading...</div>
        ) : blogs.length === 0 ? (
          <div className="col-span-3 text-center">Belum ada blog.</div>
        ) : blogs.map((blog, idx) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={100 * (idx + 1)}
            data-aos-duration="800"
          >
            {blog.image_url && (
              <img src={blog.image_url} alt={blog.title} className="h-48 w-full object-cover" />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4 flex-1">
                {blog.excerpt}
              </p>
              <button
                onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}
                className="mt-auto px-4 py-2 rounded transition bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
