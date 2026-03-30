import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

// Dummy blogs fallback
const dummyBlogs = [
  {
    id: '1',
    title: "Teknologi AI di Dunia Pendidikan",
    content: "Artificial Intelligence (AI) kini mulai diterapkan di berbagai bidang pendidikan untuk membantu proses belajar mengajar menjadi lebih efektif dan efisien.",
    excerpt: "AI mulai diterapkan di pendidikan...",
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: '2',
    title: "Tips Sukses Belajar Online",
    content: "Belajar online membutuhkan disiplin dan manajemen waktu yang baik. Berikut beberapa tips agar belajar online tetap produktif dan menyenangkan.",
    excerpt: "Tips agar belajar online tetap produktif...",
    image_url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: '3',
    title: "Pentingnya Soft Skill untuk Siswa RPL",
    content: "Selain kemampuan teknis, siswa RPL juga perlu mengasah soft skill seperti komunikasi, teamwork, dan problem solving untuk sukses di dunia kerja.",
    excerpt: "Soft skill penting untuk siswa RPL...",
    image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  }
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!location.state?.blog);

  useEffect(() => {
    if (!blog) {
      const found = dummyBlogs.find(b => b.id === id || b.id === Number(id));
      setBlog(found || null);
      setLoading(false);
    }
  }, [id, blog]);


  if (loading) return <div className="max-w-6xl mx-auto p-8">Loading...</div>;
  if (!blog) return <div className="max-w-6xl mx-auto p-8">Artikel tidak ditemukan.</div>;

  return (
    <div className="max-w-6xl mx-auto bg-white p-10 mt-10 mb-10 rounded-xl shadow-2xl border-2 border-cyan-300/60 shadow-cyan-200/60">
      <button onClick={() => navigate(-1)} className="mb-6 py-2 px-4 bg-gray-100/20 rounded hover:bg-gray-300 text-xl">⬅️ Kembali</button>
      <h1 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">{blog.title}</h1>
      <div className="w-full flex flex-col items-center">
        {blog.image_url && (
          <img src={blog.image_url} alt={blog.title} className="w-full max-h-[400px] object-cover rounded mb-8 mx-auto" data-aos="fade-right" />
        )}
        <div className="text-lg whitespace-pre-line leading-relaxed text-gray-800 w-full" data-aos="fade-left">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
