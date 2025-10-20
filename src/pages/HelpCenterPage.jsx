// src/pages/HelpCenterPage.jsx

import React from 'react';
import BlurIn from '@/components/magicui/blur-in';
import { FaSearch, FaUserCog, FaCalendarCheck, FaCreditCard, FaQuestionCircle } from 'react-icons/fa';

// Yardım konuları için veri ve ikonlar
const helpCategoriesData = [
  {
    icon: FaUserCog,
    title: "Hesap Yönetimi",
    description: "Profilinizi güncelleme, şifre sıfırlama ve hesap ayarları hakkında bilgi alın.",
    color: { bg: 'bg-blue-100', text: 'text-blue-600' }
  },
  {
    icon: FaCalendarCheck,
    title: "Randevular",
    description: "Nasıl randevu alacağınızı, mevcut randevularınızı nasıl yöneteceğinizi veya iptal edeceğinizi öğrenin.",
    color: { bg: 'bg-teal-100', text: 'text-teal-600' }
  },
  {
    icon: FaCreditCard,
    title: "Ödeme ve Faturalandırma",
    description: "Ödeme yöntemleri, fatura detayları ve geri ödeme politikaları hakkında sıkça sorulan sorular.",
    color: { bg: 'bg-green-100', text: 'text-green-600' }
  },
  {
    icon: FaQuestionCircle,
    title: "Genel Sorular",
    description: "Platformun nasıl çalıştığı, hizmetlerimiz ve diğer genel konular hakkında bilgi edinin.",
    color: { bg: 'bg-purple-100', text: 'text-purple-600' }
  }
];

const HelpCenterPage = () => {
  return (
    <>
      {/* 1. Etkileşimli Hero ve Arama Bölümü */}
      <section className="bg-white py-20 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <BlurIn
            word="Nasıl yardımcı olabiliriz?"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Aklınızdaki soruyu arayın veya popüler konulara göz atın."
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
          <form className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 h-5 w-5" />
              </div>
              <input
                type="search"
                placeholder="Örn: Şifremi nasıl sıfırlarım?"
                className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
          </form>
        </div>
      </section>

      {/* 2. Kategori Kartları Bölümü */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Konulara Göz Atın</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {helpCategoriesData.map((category) => (
              <div key={category.title} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start">
                <div className={`p-3 rounded-full ${category.color.bg}`}>
                  <category.icon className={`w-7 h-7 ${category.color.text}`} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-800">{category.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{category.description}</p>
                <a href="#" className="mt-6 font-semibold text-cyan-600 hover:text-cyan-800 transition-colors">
                  Daha Fazla Bilgi &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Destek Kanalı CTA'sı */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Aradığınızı Bulamadınız mı?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Endişelenmeyin, destek ekibimiz size yardımcı olmak için burada. Bize bir mesaj gönderin, en kısa sürede size geri dönüş yapalım.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary btn-lg">Destek Ekibiyle İletişime Geç</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenterPage;