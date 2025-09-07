// src/components/CTA.jsx

import React from 'react';
import { AnimatedCounter } from './magicui/animated-counter'; 


const statsData = [
  { value: 10, suffix: 'K+', label: 'Uzman Doktor' },
  { value: 500, suffix: 'K+', label: 'Mutlu Hasta' },
  { value: 1, suffix: 'M+', label: 'Başarılı Randevu' }
];

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Sağlığınızı Ertelemeyin</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
          Bugün hemen kaydolun ve binlerce uzman doktora anında erişim kazanın. İlk randevunuzu ücretsiz alın!
        </p>

        {/* Buton Grubu */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="border-2 border-white/80 text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
            Doktor Bul
          </button>
        </div>

        {/* İstatistikler Bölümü */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsData.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-bold flex justify-center items-baseline">
                <AnimatedCounter to={stat.value} />
                <span>{stat.suffix}</span>
              </p>
              <p className="mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;