// src/components/AboutContent.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaShieldAlt } from 'react-icons/fa';
import BlurIn from '../components/magicui/blur-in'; // magicui bileşenini import ediyoruz

// 1. Değerleri bir veri dizisinde yönetmek kodu daha temiz yapar.
const valuesData = [
  {
    icon: FaHeart,
    title: "Hasta Odaklılık",
    description: "Hastalarımızın sağlığı ve mutluluğu her zaman önceliğimizdir. Onların ihtiyaçlarına uygun, kişiye özel çözümler sunarız.",
    color: "cyan"
  },
  {
    icon: FaUsers,
    title: "Ekip Çalışması",
    description: "Farklı uzmanlıklara sahip profesyonellerden oluşan ekibimiz, hastalarımıza en iyi hizmeti sunmak için birlikte çalışır.",
    color: "blue"
  },
  {
    icon: FaShieldAlt,
    title: "Güvenilirlik",
    description: "Hastalarımızın bize olan güvenini korumak için şeffaflık, dürüstlük ve etik değerlere bağlı kalırız.",
    color: "teal"
  }
];

// 2. Kartların kademeli olarak belirmesi için animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Kartlar arasında 0.2s gecikme
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

const AboutContent = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20"> {/* Arka plan rengi */}
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <BlurIn
            word="Değerlerimiz"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Pinnacle Health olarak, sağlık hizmetlerinde mükemmelliği hedefliyoruz. Hastalarımızın ihtiyaçlarına odaklanarak, güvenilir ve kaliteli hizmet sunuyoruz."
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>

        {/* Değer Kartları */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {valuesData.map((value) => (
            <motion.div
              key={value.title}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className={`mb-6 p-4 bg-${value.color}-100 rounded-full`}>
                <value.icon className={`w-8 h-8 text-${value.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;