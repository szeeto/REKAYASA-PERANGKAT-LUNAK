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
      title: " Tips Sukses Belajar Online ",
      content: `Belajar online sekarang sudah menjadi bagian penting dalam dunia pendidikan karena memberikan kemudahan untuk belajar kapan saja dan di mana saja. Namun, agar belajar online benar-benar efektif, dibutuhkan strategi yang tepat supaya tidak mudah terdistraksi atau kehilangan semangat. Salah satu kunci sukses belajar online adalah memiliki tujuan yang jelas, seperti ingin meningkatkan nilai, menguasai skill baru, atau mempersiapkan ujian. Dengan tujuan yang terarah, proses belajar akan terasa lebih bermakna dan tidak sekadar ikut-ikutan.

      Selain itu, konsistensi juga sangat penting dalam belajar online. Karena sistemnya fleksibel, banyak orang justru sering menunda-nunda, sehingga perlu dibuat jadwal belajar yang rutin setiap hari meskipun hanya sebentar. Tempat belajar juga berpengaruh besar, karena lingkungan yang nyaman dan minim gangguan dapat membantu meningkatkan fokus. Saat mengikuti kelas online, sebaiknya juga aktif bertanya dan ikut berdiskusi agar pemahaman lebih cepat berkembang dan tidak hanya menjadi pendengar pasif.

      Teknologi juga bisa dimanfaatkan untuk mendukung proses belajar, seperti menggunakan aplikasi catatan, kalender belajar, atau media latihan soal. Namun, penting untuk menghindari multitasking seperti membuka media sosial saat belajar karena dapat mengurangi konsentrasi. Agar materi lebih melekat, lakukan evaluasi dan ulang pelajaran secara berkala melalui rangkuman atau latihan. Terakhir, menjaga semangat dan tidak mudah menyerah adalah hal yang paling utama, karena belajar online membutuhkan disiplin dan proses yang berkelanjutan. Dengan strategi yang tepat dan konsistensi, belajar online bisa menjadi cara terbaik untuk berkembang dan mencapai tujuan.
      `,
      excerpt: "Belajar online sekarang sudah menjadi bagian penting dalam dunia pendidikan karena memberikan kemudahan untuk belajar kapan saja dan di mana saja",
      image_url: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Pentingnya Soft Skill untuk Siswa RPL",
      content: `Pentingnya soft skill untuk siswa RPL sangat besar karena dunia kerja di bidang teknologi tidak hanya membutuhkan kemampuan teknis seperti coding atau membuat aplikasi, tetapi juga kemampuan berinteraksi dan bekerja sama dengan orang lain. Soft skill seperti komunikasi, kerja tim, manajemen waktu, dan problem solving menjadi bekal utama agar siswa mampu beradaptasi dalam lingkungan kerja yang profesional. Seorang programmer atau developer tidak bekerja sendirian, melainkan harus berkolaborasi dengan tim, memahami kebutuhan klien, serta menyampaikan ide dan solusi dengan jelas.

      Selain itu, soft skill juga membantu siswa RPL menjadi lebih percaya diri dan siap menghadapi tantangan di industri IT yang terus berkembang. Kemampuan berpikir kritis, kreatif, serta sikap disiplin dan tanggung jawab sangat dibutuhkan ketika mengerjakan proyek atau tugas besar. Dengan memiliki soft skill yang baik, siswa RPL tidak hanya unggul dalam aspek teknis, tetapi juga memiliki nilai tambah yang membuat mereka lebih kompetitif dan mudah diterima di dunia kerja maupun saat melanjutkan pendidikan ke jenjang yang lebih tinggi.
      
      Oleh karena itu, pengembangan soft skill harus menjadi bagian integral dari kurikulum pendidikan RPL. Melalui berbagai kegiatan seperti presentasi, kerja kelompok, simulasi proyek, dan pelatihan komunikasi, siswa dapat belajar dan melatih soft skill mereka secara praktis. Dengan kombinasi antara hard skill dan soft skill yang seimbang, siswa RPL akan lebih siap menghadapi dunia profesional dan berkontribusi secara efektif dalam industri teknologi yang dinamis.`,
      excerpt: "Pentingnya soft skill untuk siswa RPL sangat besar karena dunia kerja di bidang teknologi tidak hanya membutuhkan kemampuan teknis seperti coding atau membuat aplikasi, tetapi juga kemampuan berinteraksi dan bekerja sama dengan orang lain.",
      image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-7 m-7 rounded-xl shadow-2xl border-2 border-cyan-300/60 bg-white shadow-cyan-200/60">
      <h1 className="text-3xl font-bold text-center p-7 mb-7" id='blog' data-aos="fade-up">Blog & Artikel</h1>
      <div className="grid gap-8 md:grid-cols-3 p-3 m-3">
        {dummyBlogs.map((blog, idx) => (
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
