import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import Navbar from './components/navbar.jsx';
import Footer from './components/footeer.jsx';
import GuruPage from './pages/GuruPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import { AuthProvider } from './contexts/AuthContext';
import GalleryPage from './pages/GalleryPage.jsx';


function AppRoutesInner() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin/dashboard');
  return (
    <AuthProvider>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/guru" element={<GuruPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes>
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
