import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 text-white text-left">
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </nav>
    </div>
  );
}
