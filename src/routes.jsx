import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { useEffect } from 'react';
function TitleManager() {
  const location = useLocation();
  useEffect(() => {
    let title = 'Rekayasa Perangkat Lunak';
    switch (location.pathname) {
      case '/':
        title = 'Beranda | Rekayasa Perangkat Lunak'; break;
      case '/about':
        title = 'Tentang | Rekayasa Perangkat Lunak'; break;
      case '/faq':
        title = 'FAQ | Rekayasa Perangkat Lunak'; break;
      case '/gallery':
        title = 'Galeri | Rekayasa Perangkat Lunak'; break;
      case '/guru':
        title = 'Guru | Rekayasa Perangkat Lunak'; break;
      case '/blog':
        title = 'Blog | Rekayasa Perangkat Lunak'; break;
      case '/register':
        title = 'Register | Rekayasa Perangkat Lunak'; break;
      default:
        if (location.pathname.startsWith('/admin')) title = 'Admin | Rekayasa Perangkat Lunak';
        else if (location.pathname.startsWith('/blog/')) title = 'Detail Blog | Rekayasa Perangkat Lunak';
        break;
    }
    document.title = title;
  }, [location.pathname]);
  return null;
}
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import Navbar from './components/navbar.jsx';
import FooterComponents from './components/footer.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import GuruPage from './pages/GuruPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import BlogManagement from './components/admin/BlogManagement.jsx';
import GalleryManagement from './components/admin/GalleryManagement.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import LoginPage from './components/auth/FuturisticLoginForm.jsx'

function AppRoutesInner() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin') || location.pathname.startsWith('/blog/') || location.pathname === '/register' || location.pathname === '/login';
  const hideFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/blog/') || location.pathname === '/register' || location.pathname === '/login';
  return (
    <AuthProvider>
      <TitleManager />
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/guru" element={<GuruPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Admin protected routes */}
        <Route path="/admin" element={<AdminDashboardPage />}>
          <Route path="blogs" element={<BlogManagement />} />
          <Route path="gallery" element={<GalleryManagement />} />
        </Route>
      </Routes>
      {!hideFooter && <FooterComponents />}
    </AuthProvider>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppRoutesInner />
    </BrowserRouter>
  );
}
