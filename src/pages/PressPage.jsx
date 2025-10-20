// src/pages/PressPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import BlurIn from '../components/magicui/blur-in';
import MediaKitCTA from '../components/MediaKitCTA';

// Örnek basın bülteni verileri
const pressData = [
  {
    id: 1,
    title: "Pinnacle Health, 2024 Dijital Sağlık Ödülleri'nde 'Yılın Platformu' seçildi",
    category: "Ödül",
    date: "15 Ekim 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    description: "Yenilikçi yaklaşımımız ve hasta odaklı hizmetlerimiz sayesinde prestijli bir ödüle layık görüldük."
  },
  {
    id: 2,
    title: "Yeni Teletıp Hizmetimizle Sağlığa Erişimi Kolaylaştırıyoruz",
    category: "Duyuru",
    date: "02 Eylül 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    description: "Artık hastalarımız, evlerinin konforunda uzman doktorlarımızla online görüşmeler yapabilecek."
  },
  {
    id: 3,
    title: "Ankara'daki Yeni Hastane Kompleksimiz Hizmete Açıldı",
    category: "Haber",
    date: "20 Temmuz 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    description: "Başkent'teki yeni tesisimiz, son teknoloji ekipmanlar ve modern mimariyle hizmet vermeye başladı."
  }
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };


const PressPage = () => {
  return (
    <>
      {/* Hero Bölümü */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <BlurIn
            word="Basında Pinnacle Health"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Sağlık sektöründeki yenilikçi adımlarımız, başarılarımız ve hakkımızdaki en son haberler."
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>
      </section>

      {/* Bültenler Grid'i */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pressData.map(item => (
              <motion.div key={item.id} variants={itemVariants}>
                <div className="card bg-base-100 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <figure>
                    <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                        <div className="badge badge-primary">{item.category}</div>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <h2 className="card-title mt-2 text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-ghost text-primary">Devamını Oku</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Medya Kiti CTA */}
      <MediaKitCTA />
    </>
  );
};

export default PressPage;