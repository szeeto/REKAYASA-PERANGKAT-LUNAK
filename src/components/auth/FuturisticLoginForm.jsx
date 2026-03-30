import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { FaUser, FaLock } from 'react-icons/fa';


export default function FuturisticLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Login gagal: ' + (err.message || 'Cek email/password.'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] p-4">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-linear-to-tr from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide drop-shadow-lg">Login Admin</h2>
        {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-center text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-6 mb-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl" />
            <input
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-cyan-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base transition shadow-sm"
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-cyan-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base transition shadow-sm"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl focus:outline-none"
              tabIndex={-1}
              onClick={() => setShowPassword(v => !v)}
              aria-label={showPassword ? 'Sembunyikan password' : 'Lihat password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 tracking-wide"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
