// src/components/PopularSpecialties.jsx

import React from 'react';
import { motion } from 'framer-motion';
// İkonlar
import { FaHeartbeat, FaBrain, FaBone, FaEye, FaTeeth, FaLungs, FaFemale, FaBaby } from 'react-icons/fa';

// Veri dizimizi oluşturuyoruz
const specialtiesData = [
  { icon: FaHeartbeat, name: 'Kardiyoloji', count: 1240, color: { bg: 'bg-red-100', text: 'text-red-500' } },
  { icon: FaBrain, name: 'Nöroloji', count: 856, color: { bg: 'bg-purple-100', text: 'text-purple-500' } },
  { icon: FaBone, name: 'Ortopedi', count: 1120, color: { bg: 'bg-blue-100', text: 'text-blue-500' } },
  { icon: FaEye, name: 'Göz Hastalıkları', count: 740, color: { bg: 'bg-green-100', text: 'text-green-500' } },
  { icon: FaTeeth, name: 'Dahiliye', count: 1580, color: { bg: 'bg-teal-100', text: 'text-teal-500' } },
  { icon: FaFemale, name: 'Jinekoloji', count: 920, color: { bg: 'bg-pink-100', text: 'text-pink-500' } },
  { icon: FaBaby, name: 'Çocuk Doktoru', count: 1100, color: { bg: 'bg-yellow-100', text: 'text-yellow-500' } },
  { icon: FaLungs, name: 'Kulak Burun Boğaz', count: 680, color: { bg: 'bg-orange-100', text: 'text-orange-500' } },
];

// Framer Motion için animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const PopularSpecialties = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Popüler Uzmanlık Alanları</h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            En çok tercih edilen uzmanlık alanlarında binlerce doktor ile hemen randevunuzu alın.
          </p>
        </div>

        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Ekrana girince animasyonu başlat
          viewport={{ once: true, amount: 0.2 }} // Animasyon bir kere çalışsın
        >
          {specialtiesData.map((specialty) => (
            <motion.div
              key={specialty.name}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center gap-4"
              variants={itemVariants}
            >
              <div className={`p-4 rounded-xl self-start ${specialty.color.bg}`}>
                <specialty.icon className={`w-7 h-7 ${specialty.color.text}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{specialty.name}</h3>
                <p className="text-gray-500">{specialty.count} uzman doktor</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSpecialties;