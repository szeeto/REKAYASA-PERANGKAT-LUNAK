import React from 'react';
import RegisterForm from '../components/auth/RegisterForm.jsx';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md" data-aos="fade-right">
        <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">Daftar Akun</h2>
        <RegisterForm />
        <p className="mt-4 text-center">
          Sudah punya akun?{' '}
          {/* Login link removed */}
        </p>
      </div>
    </div>
  );
}
