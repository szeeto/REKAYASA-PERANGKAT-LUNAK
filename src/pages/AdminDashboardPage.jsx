import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import CrudTable from '../components/admin/CrudTable';
import GalleryUploadForm from '../components/admin/GalleryUploadForm';
import LogoutButton from '../components/auth/LogoutButton';

const TABS = [
  { key: 'gallery', label: 'Gallery' },
  { key: 'blog', label: 'Blog' },
];

const TABLE_CONFIG = {
  gallery: {
    table: 'gallery',
    columns: [
      { key: 'id', label: 'ID', type: 'text', readOnly: true },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'image_url', label: 'Image URL', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
    ],
  },
  blog: {
    table: 'blog',
    columns: [
      { key: 'id', label: 'ID', type: 'text', readOnly: true },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'content', label: 'Content', type: 'textarea' },
      { key: 'author', label: 'Author', type: 'text' },
      { key: 'published_at', label: 'Published At', type: 'date' },
    ],
  },
};

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('gallery');
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow flex items-center px-6 md:px-12 py-4 justify-between sticky top-0 z-20 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl font-bold shadow-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0v2m0 4h.01" /></svg>
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-tight">Admin Dashboard</h1>
          </div>
          <LogoutButton />
        </header>
        <main className="flex-1 flex flex-col items-center py-8 px-2">
          <div className="w-full max-w-5xl">
            {/* Tab Navigation */}
            <div className="flex gap-2 md:gap-6 mb-8 border-b-2 border-slate-200">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-6 py-3 font-semibold rounded-t-lg transition-all duration-200 focus:outline-none
                    ${activeTab === tab.key
                      ? 'bg-white shadow text-blue-700 border-b-4 border-blue-600 -mb-1 z-10'
                      : 'bg-slate-100 text-gray-500 hover:text-blue-600 hover:bg-white border-b-4 border-transparent'}
                  `}
                  style={{ minWidth: 120 }}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 rounded-b-lg"></span>
                  )}
                </button>
              ))}
            </div>
            {/* Card Container */}
            {/* Floating upload card for gallery */}
            {activeTab === 'gallery' && (
              <div className="flex justify-center mb-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 w-full max-w-2xl -mt-20 z-20 relative">
                  <GalleryUploadForm onUpload={() => {}} />
                </div>
              </div>
            )}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 mb-12 transition-all duration-300 hover:shadow-2xl border border-slate-100">
              <CrudTable
                tableName={TABLE_CONFIG[activeTab].table}
                columns={TABLE_CONFIG[activeTab].columns}
              />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}