import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import Navbar from './components/navbar.jsx';
import Footer from './components/footeer.jsx';
import BlogPage from './pages/BlogPage.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
