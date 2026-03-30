
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes.jsx';
import Navbar from './components/navbar.jsx'; 
import './index.css';
import './Apps.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-out-cubic',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);