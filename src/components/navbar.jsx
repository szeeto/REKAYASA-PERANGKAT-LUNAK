
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/faq', label: 'FAQ' },
    { to: '/guru', label: 'GURU' },
    { to: '/gallery', label: 'GALLERY' },
    { to: '/blog', label: 'BLOG' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="h-14 w-auto max-w-20" src="/src/assets/logo.png" alt="Logo" />
            </a>
          </div>

          <nav className="block">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="text-white rounded-sm bg-emerald-600 px-4 py-2 hover:bg-emerald-700 transition"
              onClick={() => navigate('/login')}
            >
              Login
            </button>

            <button
              className="md:hidden rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-in" onClick={e => e.stopPropagation()}>
            <button
              className="self-end mb-4 text-gray-500 hover:text-emerald-600"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col gap-4 text-lg font-semibold">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "text-teal-600 font-bold" : "text-gray-700 transition hover:text-gray-700"
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="mt-4 w-full text-white rounded-sm bg-emerald-600 px-4 py-2 hover:bg-emerald-700 transition"
              onClick={() => { setMenuOpen(false); navigate('/login'); }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
