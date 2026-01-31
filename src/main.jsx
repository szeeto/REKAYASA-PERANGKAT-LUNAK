import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes.jsx';
import Navbar from './components/navbar.jsx'; 
import './index.css';
import './Apps.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);