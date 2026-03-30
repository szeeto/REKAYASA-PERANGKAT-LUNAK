import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextUtils.js';
import { signInWithEmailAndPassword, sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { FaUser, FaLock } from 'react-icons/fa';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [magicSent, setMagicSent] = useState(false);
  const { user, role, authError } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && role === 'admin') {
      navigate('/admin');
    } else if (user && role && role !== 'admin') {
      setError('Akses hanya untuk admin.');
    }
  }, [user, role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // AuthContext akan update user otomatis
    } catch (err) {
      setError('Login gagal: ' + (err.message || 'Cek email/password.'));
    }
  };

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setError('');
    setMagicSent(false);
    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.origin + '/login',
        handleCodeInApp: true,
      });
      setMagicSent(true);
    } catch (err) {
      setError('Magic link gagal: ' + (err.message || 'Cek email.'));
    }
    // Jangan navigate di sini, tunggu user klik link di email dan AuthContext update
  };

  // LoginForm removed
}


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextUtils.js';
import { signInWithEmailAndPassword, sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { FaUser, FaLock } from 'react-icons/fa';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [magicSent, setMagicSent] = useState(false);
  const { user, role, authError } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && role === 'admin') {
      navigate('/admin');
    } else if (user && role && role !== 'admin') {
      setError('Akses hanya untuk admin.');
    }
  }, [user, role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // AuthContext akan update user otomatis
    } catch (err) {
      setError('Login gagal: ' + (err.message || 'Cek email/password.'));
    }
  };

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setError('');
    setMagicSent(false);
    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.origin + '/login',
        handleCodeInApp: true,
      });
      setMagicSent(true);
    } catch (err) {
      setError('Magic link gagal: ' + (err.message || 'Cek email.'));
    }
    // Jangan navigate di sini, tunggu user klik link di email dan AuthContext update
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Login Admin</h2>
        {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-center text-sm">{error}</div>}
        {authError && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-center text-sm">{authError}</div>}
        <form onSubmit={handleLogin} className="space-y-4 mb-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-500 text-sm">atau</span>
        </div>
        <form onSubmit={handleMagicLink} className="space-y-3">
          <h3 className="text-base font-semibold text-center mb-2">Login dengan Magic Link</h3>
          {magicSent && <div className="bg-green-100 text-green-700 px-3 py-2 rounded mb-2 text-center text-sm">Magic link telah dikirim ke email Anda. Silakan cek inbox!</div>}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-800 transition"
          >
            Kirim Magic Link
          </button>
        </form>
      </div>
    </div>
  );
}