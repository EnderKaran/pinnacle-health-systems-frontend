// src/App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DoctorsPage from './pages/DoctorsPage';
import FaqPage from './pages/FaqPage';
import CareerPage from './pages/CareerPage';
import PressPage from './pages/PressPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import './App.css';

// 1. Tüm sayfalarda ortak olacak yerleşim bileşeni
const Layout = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

// 2. Rota tanımlarını yapan ana App bileşeni
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<HomePage />} /> 
        
        <Route path="hakkimizda" element={<AboutPage />} />

        <Route path="iletisim" element={<ContactPage />} />

        <Route path="doktor-bul" element={<DoctorsPage />} />

        <Route path="sık-sorulan-sorular" element={<FaqPage />} />

        <Route path="kariyer" element={<CareerPage />} />

        <Route path="basin" element={<PressPage />} />

        <Route path="ortaklarimiz" element={<PartnersPage />} />

        <Route path="gizlilik-politikasi" element={<PrivacyPolicyPage />} />

        <Route path="kullanim-kosullari" element={<TermsOfServicePage />} />
        
      </Route>
    </Routes>
  );
}

export default App;