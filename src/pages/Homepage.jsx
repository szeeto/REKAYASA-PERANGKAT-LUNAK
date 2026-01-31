import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Homepage() {
  return (
    <>
      <div>
        <section
          className="lg:grid lg:h-screen lg:place-content-center bg-cover bg-center relative"
          style={{ backgroundImage: 'url(/src/assets/hero-icon.jpg)' }}
        >
          <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-white/15 rounded-sm">
            <div className="mx-auto max-w-prose text-center">
              <div className="flex flex-row justify-center items-center mt-[25%]">
                <TypeAnimation
                  sequence={[
                    'Selamat Datang Di',
                    500,
                    'Rekayasa Perangkat Lunak',
                    500,
                    'SMK NEGERI 1 BUKIT SUNDI',
                    500,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="text-4xl inline-block text-red-700 font-bold"
                />
              </div>

              <p className="mt-4 text-2xl text-pretty text-black-700 sm:text-lg/relaxed">
                Unggul dalam Kompetensi, Kuat dalam Karakter
                SMK Negeri 1 Bukit Sundi – Sekolah Pencetak Tenaga Profesional di Bidang Rekayasa Perangkat Lunak.
              </p>

              <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                <a className="inline-block rounded border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700" href="#about">
                  Tentang RPL 💻
                </a>
                <a className="inline-block rounded border border-indigo-200 px-5 py-3 font-medium text-black-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="#faq">
                  Apa Itu RPL ❓
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

{/* About */}
      <div className="p-3">
         <h2 className='text-center p-7 m-7 text-2xl font-bold'>Tentang Rekayasa Perangkat Lunak (RPL)</h2>
      <div className="rounded-lg shadow-md bg-white flex flex-row items-center" id='about'>
        {/* Bagian kiri (teks) */}
        <div className="basis-[60%] p-4">
          <h2 className="text-2xl font-bold mb-2">Tentang RPL</h2>
          <p className="text-base text-gray-700">Jurusan Rekayasa Perangkat Lunak (RPL) membekali siswa dengan keterampilan membuat aplikasi, website, dan software profesional. Siswa belajar dari dasar hingga mahir, siap kerja dan siap kuliah.</p>
        </div>
        {/* Bagian kanan (gambar) */}
        <div className="basis-[40%] flex justify-end p-4">
          <img src="/src/assets/hero-icon.jpg" alt="About RPL" className="w-full h-auto max-w-xl rounded-lg" />
        </div>
      </div>
      </div>
{/* About */}

{/* Faq */}
      <div className="bg-indigo-200 rounded-lg shadow-md" id='faq'>
        <h2 className='text-center p-7 m-7 text-2xl font-bold'>Pertanyaan Yang Sering Ditanyakan</h2>
        <div className='p-3 m-3 text-bold'>
          <div class="space-y-2">
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apa itu jurusan Rekayasa Perangkat Lunak (RPL)?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Rekayasa Perangkat Lunak (RPL) adalah jurusan yang mempelajari cara merancang, membuat, mengembangkan, dan memelihara aplikasi atau sistem berbasis teknologi, seperti website, aplikasi mobile, dan software komputer.
                </p>
              </div>
            </details>

            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apakah jurusan RPL di SMK cocok untuk pemula?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Jurusan RPL sangat cocok bagi siswa yang belum memiliki pengalaman di bidang pemrograman. Proses pembelajaran dimulai dari dasar sehingga siswa dapat memahami konsep secara bertahap. Dengan bimbingan guru dan praktik yang berkelanjutan, siswa akan mampu mengembangkan keterampilan secara mandiri.
                </p>
              </div>
            </details>

            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apakah jurusan RPL harus pintar matematika?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Jurusan RPL tidak menuntut siswa harus unggul dalam matematika. Yang lebih dibutuhkan adalah kemampuan berpikir logis, ketelitian, dan kemauan untuk terus belajar. Matematika dasar digunakan sebagai pendukung dalam memahami alur dan logika pemrograman.
                </p>
              </div>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apa peluang kerja lulusan RPL SMK?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Lulusan RPL SMK memiliki peluang kerja yang luas di bidang teknologi informasi. Mereka dapat bekerja sebagai web developer, software developer, IT support, admin sistem, maupun tenaga IT di berbagai instansi. Selain bekerja di perusahaan, lulusan RPL juga memiliki peluang besar untuk berwirausaha atau menjadi freelancer.
                </p>
              </div>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apakah siswa RPL SMK mendapatkan praktik kerja industri (PKL)?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Ya, siswa jurusan RPL di SMK akan mengikuti Praktik Kerja Lapangan (PKL) di dunia usaha dan dunia industri. Melalui PKL, siswa mendapatkan pengalaman kerja nyata, memahami budaya kerja profesional, serta meningkatkan kesiapan untuk terjun langsung ke dunia kerja setelah lulus.
                </p>
              </div>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Apakah lulusan RPL SMK bisa melanjutkan pendidikan ke perguruan tinggi?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Lulusan RPL SMK memiliki kesempatan yang sama untuk melanjutkan pendidikan ke perguruan tinggi, khususnya di bidang teknologi dan informatika. Bekal keterampilan dan pengetahuan yang diperoleh di SMK menjadi dasar yang kuat untuk melanjutkan studi ke jenjang yang lebih tinggi.
                </p>
              </div>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
                <span>Mengapa memilih jurusan RPL di SMK?</span>

                <svg class="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>

              <div class="p-4">
                <p class="text-black-700 text-base font-medium rounded shadow-md shadow-emerald-500 m-2 p-2">
                  Jurusan RPL di SMK menjadi pilihan tepat bagi siswa yang ingin memiliki keterampilan siap kerja di bidang teknologi. Pembelajaran yang berbasis praktik, dukungan fasilitas, serta keterkaitan dengan dunia industri menjadikan lulusan RPL lebih siap bersaing di dunia kerja maupun melanjutkan pendidikan.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};