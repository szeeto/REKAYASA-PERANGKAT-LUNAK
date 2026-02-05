import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, role } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user && role === 'admin') navigate('/admin/dashboard');
    if (user && role !== 'admin') setError('Akses hanya untuk admin.');
  }, [user, role, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      setError('Login gagal: ' + loginError.message);
      setLoading(false);
      return;
    }
    // Tunggu AuthContext update user & role
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">Login Admin</h2>
      {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-center text-sm">{error}</div>}
      <div>
        <label className="block text-gray-700 mb-1 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          placeholder="admin@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1 font-semibold">Password</label>
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-2 rounded shadow hover:from-teal-600 hover:to-cyan-600 transition disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading && (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        )}
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}