
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaGlobe, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-pink-100/80 border-t-2 border-blue-300/40 shadow-lg shadow-blue-100/40 backdrop-blur-xl text-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow">Rekayasa Perangkat Lunak</h2>
            <p className="text-base font-medium text-gray-600">Membangun Masa Depan Digital</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link to="/" className="px-3 py-1 rounded-lg font-semibold text-blue-700 hover:bg-blue-100 hover:scale-105 transition-all">Home</Link>
            <Link to="/about" className="px-3 py-1 rounded-lg font-semibold text-purple-700 hover:bg-purple-100 hover:scale-105 transition-all">About</Link>
            <Link to="/faq" className="px-3 py-1 rounded-lg font-semibold text-pink-700 hover:bg-pink-100 hover:scale-105 transition-all">FAQ</Link>
            <Link to="/gallery" className="px-3 py-1 rounded-lg font-semibold text-indigo-700 hover:bg-indigo-100 hover:scale-105 transition-all">Gallery</Link>
            <Link to="/blog" className="px-3 py-1 rounded-lg font-semibold text-cyan-700 hover:bg-cyan-100 hover:scale-105 transition-all">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/rplsmkn1bukitsundi?igsh=MXExenU0NHM1am81YQ==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-all"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-all"><FaFacebook /></a>
            <a href="mailto:rplsmkn1bukitsundii@gmail.com" className="text-emerald-600 hover:text-emerald-800 transition-all"><FaEnvelope /></a>
            <a href="https://smkn1bukitsundi.sch.id" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-all"><FaGlobe /></a>
          </div>
          <div className="text-center md:text-right text-gray-600 text-sm">
            Jalan Solok - Muaro Paneh Km. 7, Nagari Muaro Paneh, Kecamatan Bukit Sundi, Kabupaten Solok, Sumatera Barat
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-2">
          &copy; {new Date().getFullYear()} Dibuat Oleh <span className="font-bold text-blue-700">Patra Sawali XII RPL 2  </span>
        </p>
      </div>
    </footer>
  );
}
