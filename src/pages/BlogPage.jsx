import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
  const navigate = useNavigate();
  const dummyBlogs = [
    {
      id: 1,
      title: "Teknologi AI di Dunia Pendidikan",
      content: `Teknologi kecerdasan buatan (AI) kini merevolusi dunia pendidikan secara global dengan kemampuan analisis data canggih dan personalisasi pembelajaran yang mendalam. Tutor AI berfungsi sebagai asisten real-time untuk menjelaskan konsep sulit seperti matematika atau fisika melalui interaksi interaktif, sementara chatbot pendidikan menyediakan informasi instan mengenai jadwal, pendaftaran, dan bantuan administratif, sehingga mengurangi beban kerja guru dan staf sekolah. Sistem penilaian otomatis memungkinkan pembuatan kuis dengan umpan balik langsung, menganalisis kekuatan serta kelemahan siswa secara akurat, dan di Indonesia, platform adaptif telah meningkatkan pemahaman matematika hingga 40% di berbagai sekolah.

      Keunggulan utama AI terletak pada pembelajaran personalisasi, di mana algoritma menyesuaikan kecepatan, gaya, dan konten belajar berdasarkan data individu, sangat bermanfaat bagi siswa berkebutuhan khusus seperti konversi teks ke audio untuk tunanetra atau bahasa isyarat digital untuk tunarungu. Aplikasi global seperti Duolingo dan Khan Academy menerapkan gamifikasi dengan forum virtual dan persiapan ujian personal, sementara di Indonesia, chatbot tutor meningkatkan keterlibatan siswa hingga 30% dan mendeteksi kesulitan dini dengan akurasi 50%. AI juga menghapus hambatan geografis melalui pendidikan daring yang aksesibel, memungkinkan daerah terpencil mengikuti kelas berkualitas tinggi, serta mengotomatisasi tugas administratif seperti analisis data dengan tools seperti Gradescope untuk penilaian esai.

      Namun, tantangan seperti privasi data, kesenjangan akses di pedesaan, dan risiko plagiarisme dari generator teks AI memerlukan regulasi ketat, pelatihan etika, enkripsi data, serta audit berkala, dengan kolaborasi seperti Intel menekankan perlindungan siber. Di Indonesia, Universitas Airlangga memanfaatkan AI untuk pembelajaran ramah lingkungan tanpa kertas, sementara BINUS @Bekasi memproyeksikan transformasi pada 2025, dan UINSSC membahas adaptasi etis. Menuju 2026, AI akan mengintegrasikan realitas virtual untuk kelas hybrid imersif, didukung Kemendikbud guna mencapai SDGs pendidikan berkualitas, menjadikan Indonesia kompetitif dengan investasi infrastruktur dan SDM, sehingga membentuk generasi cerdas yang siap masa depan.`,
      excerpt: "Teknologi kecerdasan buatan (AI) kini merevolusi dunia pendidikan secara global dengan kemampuan analisis data canggih dan personalisasi pembelajaran yang mendalam",
      image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Tips Sukses Belajar Online",
      content: "Belajar online membutuhkan disiplin dan manajemen waktu yang baik. Berikut beberapa tips agar belajar online tetap produktif dan menyenangkan.",
      excerpt: "Tips agar belajar online tetap produktif...",
      image_url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Pentingnya Soft Skill untuk Siswa RPL",
      content: "Selain kemampuan teknis, siswa RPL juga perlu mengasah soft skill seperti komunikasi, teamwork, dan problem solving untuk sukses di dunia kerja.",
      excerpt: "Soft skill penting untuk siswa RPL...",
      image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-7 m-7 rounded-sm shadow-2xl">
      <h1 className="text-3xl font-bold text-center p-7 mb-7">Blog & Artikel</h1>
      <div className="grid gap-8 md:grid-cols-3 p-3 m-3">
        {dummyBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300">
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
