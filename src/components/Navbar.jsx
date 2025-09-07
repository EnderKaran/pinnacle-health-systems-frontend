import { useState } from 'react';
import { FaStethoscope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //nav linkleri
  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/doktor-bul", label: "Doktor Bul" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <>
      {/* 1. Navbar'ın kendisi */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Kısmı */}
          <a href="/" className="flex items-center space-x-2">
            <FaStethoscope className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Pinnacle</span>
          </a>

          {/* Masaüstü Menü Linkleri */}
          <ul className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="px-4 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  {link.label}
                </a>
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
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* 3. Yandan Kayan Mobil Menü Paneli */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Menü Başlığı ve Kapatma Butonu */}
        <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Menü</h2>
            <button onClick={() => setIsMenuOpen(false)}>
                <HiX className="w-8 h-8 text-gray-700" />
            </button>
        </div>

        {/* Mobil Menü Linkleri */}
        <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block w-full text-left py-3 px-3 rounded-lg text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;