
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextUtils.js';

export default function ProtectedRoute({ children }) {
  const { user, role, loading } = useAuth();
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  if (!user || role !== 'admin') {
    return null;
  }
  return children;
}