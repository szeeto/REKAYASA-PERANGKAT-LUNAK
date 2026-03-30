
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
  <header className="fixed top-0 left-0 w-full z-50  bg-white shadow">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img className="h-20 w-auto max-w-20" src="/src/assets/logo.png" alt="Logo" />
        </a>
      </div>

      <div className="md:block sm:hidden ">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/guru" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>GURU</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>GALLERY</NavLink>
            </li>
                        <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "text-teal-600 font-bold" : "text-gray-500 transition hover:text-gray-700"}>BLOG</NavLink>
            </li>
          </ul>   
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="text-white rounded-sm bg-emerald-600 px-4 py-2 hover:bg-emerald-700 transition"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <div className="lg:hidden">
          <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  );
}
