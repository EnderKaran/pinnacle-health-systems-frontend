// src/components/Navbar.jsx

import { useState } from 'react';
import { FaStethoscope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/hakkimizda", label: "Hakkımızda" },
    { to: "/doktor-bul", label: "Doktor Bul" },
    { to: "/iletisim", label: "İletişim" },
  ];

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <> 
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
         
          <Link to="/" className="flex items-center space-x-2" onClick={isMenuOpen ? closeMobileMenu : undefined}>
            <FaStethoscope className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Pinnacle</span>
          </Link>

          <ul className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-100 text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger Menü İkonu (mobil) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <HiMenu className="w-8 h-8 text-gray-700" />
            </button>
          </div>
        </nav>
      </header>

      {/* 2. Arka Plan Katmanı (Overlay) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* 3. Yandan Kayan Mobil Menü Paneli */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Menü Başlığı ve Kapatma Butonu */}
        <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Menü</h2>
            <button onClick={closeMobileMenu}>
                <HiX className="w-8 h-8 text-gray-700" />
            </button>
        </div>

        <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => 
                    `block w-full text-left py-3 px-3 rounded-lg text-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`
                  }
                  // 3. Linke tıklandığında mobil menüyü kapat
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;