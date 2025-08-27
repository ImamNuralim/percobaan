import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HeadProvider } from "react-head";
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";


import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import About from './pages/About.jsx';
import { Service } from './pages/Service.jsx';
import Project from './pages/Project.jsx';
import DetailProject from './pages/DetailProject.jsx';

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>   
      <BrowserRouter>
      <ScrollToHashElement />
        <Preloader />
        <Navbar />
        <div className="overflow-x-hidden">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project/:slug" element={<DetailProject />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);
