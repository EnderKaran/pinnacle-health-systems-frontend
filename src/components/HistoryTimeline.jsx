// src/components/HistoryTimeline.jsx

import React from 'react';
import { motion } from 'framer-motion';

import BlurIn from './magicui/blur-in';

const timelineData = [
  
  {
    year: "2010",
    title: "Kuruluş",
    description: "Pinnacle Health, hasta odaklı bir yaklaşımla sağlık hizmeti sunmak üzere kuruldu.",
  },
  {
    year: "2012",
    title: "İlk Büyük Başarı",
    description: "Bölgedeki ilk robotik cerrahi merkezini açarak teknolojik bir atılım gerçekleştirdik.",
  },
  {
    year: "2015",
    title: "Yeni Hastane Açılışı",
    description: "Artan talebi karşılamak ve hizmet ağımızı genişletmek için ikinci hastanemizi açtık.",
  },
  {
    year: "2020",
    title: "Uluslararası Akreditasyon",
    description: "Kalite standartlarımızı uluslararası düzeyde kanıtlayarak JCI akreditasyonunu aldık.",
  },
  {
    year: "2023",
    title: "Dijital Dönüşüm",
    description: "Hastalarımıza daha iyi hizmet vermek için online randevu ve teletıp hizmetlerimizi başlattık.",
  }
];

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const HistoryTimeline = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <BlurIn
            word="Tarihçemiz"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Kuruluşumuzdan günümüze, sağlık hizmetlerindeki yolculuğumuzu ve önemli kilometre taşlarımızı keşfedin."
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>

       
        <div className="relative max-w-4xl mx-auto">
          {/* Dikey Çizgi */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 flex items-center w-full ${
                index % 2 !== 0 ? 'flex-row-reverse' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={index % 2 === 0 ? rightVariant : leftVariant}
            >
              {/* Boşluk Bırakan Kısım */}
              <div className="w-1/2"></div>

              {/* Nokta */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white z-10"></div>
              
              {/* Kart */}
              <div className="w-1/2 px-4">
                <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${
                  index % 2 !== 0 ? 'text-right' : ''
                }`}>
                  <p className="font-bold text-cyan-600 text-lg mb-1">{item.year}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;