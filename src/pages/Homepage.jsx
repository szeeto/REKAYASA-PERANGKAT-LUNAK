import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import GalleryPage from './GalleryPage';
import GuruPage from './GuruPage';
import FaqPage from './FaqPage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';

export default function Homepage() {
  return (
    <>
      <div>
        <section
          className="relative w-full h-screen min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: 'url(/src/assets/hero-icon.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-white/10 rounded-sm">
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

              <p className="mt-4 text-2xl text-pretty text-white sm:text-lg/relaxed">
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

      <AboutPage />
      <FaqPage />
      <GuruPage />
      <GalleryPage />
      <BlogPage />
    </>
  );
};