
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebaseClient';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Simpan data user ke Firestore (misal: role admin)
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role: 'admin',
      });
      setSuccess('Registrasi berhasil!');
    } catch (err) {
      setError('Registrasi gagal: ' + (err.message || 'Cek email/password.'));
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-6xl mx-auto p-7 m-7 rounded-sm shadow-2xl border border-gray-200 bg-white flex flex-col justify-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-4">Register Admin</h2>
      {error && <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-center text-sm">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-3 py-2 rounded mb-2 text-center text-sm">{success}</div>}
      <div className="flex flex-col gap-2">
        <label className="block text-gray-700 mb-1 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          placeholder="admin@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-base md:text-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-gray-700 mb-1 font-semibold">Password</label>
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-base md:text-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-linear-to-r from-teal-500 to-cyan-500 text-white font-bold py-2 md:py-3 rounded shadow hover:from-teal-600 hover:to-cyan-600 transition flex items-center justify-center gap-2 text-base md:text-lg"
      >
        Register
      </button>
    </form>
  );
}
