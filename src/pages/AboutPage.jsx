import React from 'react'

export default function AboutPage() {
  return (
    <div className=' rounded-sm shadow-2xl'>
      <h2 className="text-3xl font-bold text-center pt-12 mt-7">Tentang Rekayasa Perangkat Lunak (RPL)</h2>
      <div className="rounded-lg shadow-md bg-white flex flex-row items-center m-3 p-3 pt-0.5" id='about'>
        <>
          <div className="basis-[60%] p-7 m-7">
            <h2 className="text-2xl font-bold mb-2">Tentang RPL</h2>
            <p className="text-base text-gray-700 mb-4">
                Rekayasa Perangkat Lunak (RPL) adalah salah satu jurusan di bidang teknologi informasi yang berfokus pada pengembangan perangkat lunak, baik aplikasi desktop, web, maupun mobile. RPL mengajarkan siswa untuk memahami seluruh siklus hidup pengembangan perangkat lunak, mulai dari analisis kebutuhan, perancangan, implementasi, pengujian, hingga pemeliharaan aplikasi.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Di jurusan RPL, siswa akan mempelajari berbagai bahasa pemrograman seperti Java, Python, JavaScript, dan PHP, serta teknologi pendukung seperti database, framework, dan tools pengembangan modern. Selain itu, siswa juga dibekali dengan pengetahuan tentang desain antarmuka pengguna (UI/UX), keamanan aplikasi, dan manajemen proyek perangkat lunak.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Proses pembelajaran di RPL tidak hanya bersifat teori, tetapi juga sangat menekankan pada praktik langsung melalui berbagai proyek, tugas kelompok, dan magang di industri. Siswa akan terbiasa bekerja dalam tim, memecahkan masalah nyata, dan menghasilkan produk perangkat lunak yang dapat digunakan oleh masyarakat luas.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Lulusan RPL memiliki prospek karir yang sangat luas, mulai dari menjadi software developer, web developer, mobile app developer, system analyst, UI/UX designer, hingga project manager di perusahaan teknologi. Selain itu, lulusan RPL juga dapat melanjutkan pendidikan ke jenjang yang lebih tinggi di bidang informatika, sistem informasi, atau ilmu komputer.
              </p>
              <p className="text-base text-gray-700">
                Dengan perkembangan teknologi yang pesat, kebutuhan akan tenaga ahli di bidang perangkat lunak semakin meningkat. Jurusan RPL hadir untuk menjawab tantangan tersebut dan mempersiapkan generasi muda yang siap bersaing di era digital, berinovasi, dan berkontribusi dalam kemajuan teknologi di Indonesia maupun dunia.
              </p>
            </div>
            <div className="basis-[40%] flex justify-end p-4">
              <img src="/src/assets/hero-icon.jpg" alt="About RPL" className="w-full  max-w-xl rounded-lg" />
            </div>
        </>
      </div>
    </div>
  )
}
