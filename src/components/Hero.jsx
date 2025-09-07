import React from 'react';
import HeroImage from '../assets/hero-background.png';
// İkonlar
import { FaSearch, FaMapMarkerAlt, FaUserMd, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      className="relative w-full bg-cover bg-center py-24 sm:py-32" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-gray-700/20 md:bg-gradient-to-r md:from-white/90 md:via-white/70 md:to-transparent"></div>

      <div className="relative container mx-auto px-4 flex flex-col justify-center items-center text-center md:items-start md:text-left">
        {/* Başlık ve Alt Başlık */}
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white md:text-gray-800 leading-tight">
          Sağlığınız için <br className="hidden sm:inline-block" /> doğru uzmanı bulun
        </h1>
       
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 md:text-gray-600 max-w-lg px-2 sm:px-0">
          Türkiye'nin dört bir yanındaki binlerce uzman doktora anında ulaşın ve online randevu alın.
        </p>

        
        <div className="mt-6 p-3 sm:p-4 bg-white rounded-xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row items-center gap-3 sm:gap-4">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Uzmanlık, hastalık veya doktor adı" className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="relative w-full md:w-80">
            <FaMapMarkerAlt className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="">Şehir seçin...</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
            </select>
          </div>
          <button className="w-full md:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity">
            Randevu Al
          </button>
        </div>

        {/* Bilgi Kartları */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center w-full max-w-sm sm:max-w-4xl">
          <div className="flex flex-col items-center p-3 sm:p-0"> 
            <div className="p-3 sm:p-4 bg-blue-100/70 rounded-full"><FaUserMd className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" /></div>
            {/* RENK DEĞİŞİKLİĞİ: Mobil için text-white, md ve sonrası için text-gray-800 */}
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white md:text-gray-800">10,000+ Uzman Doktor</h3>
            {/* RENK DEĞİŞİKLİĞİ: Mobil için text-gray-200, md ve sonrası için text-gray-600 */}
            <p className="mt-1 text-sm sm:text-base text-gray-200 md:text-gray-600 px-2">Türkiye'nin her yerinden uzman doktorlarla buluşun.</p>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-0">
            <div className="p-3 sm:p-4 bg-teal-100/70 rounded-full"><FaCalendarCheck className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" /></div>
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white md:text-gray-800">Anında Randevu</h3>
            <p className="mt-1 text-sm sm:text-base text-gray-200 md:text-gray-600 px-2">24/7 online randevu alma imkanı.</p>
          </div>
          <div className="flex flex-col items-center p-3 sm:p-0">
            <div className="p-3 sm:p-4 bg-green-100/70 rounded-full"><FaShieldAlt className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" /></div>
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white md:text-gray-800">Güvenli Platform</h3>
            <p className="mt-1 text-sm sm:text-base text-gray-200 md:text-gray-600 px-2">Kişisel verileriniz tamamen güvende.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;