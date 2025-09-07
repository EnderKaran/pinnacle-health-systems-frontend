// src/components/Testimonials.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// 1. VERİ DİZİSİ: Yorumları burada yönetiyoruz
const testimonialsData = [
  {
    name: 'Ayşe Kaya',
    location: 'İstanbul',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: '"RandevuAL sayesinde çok hızlı bir şekilde kardiyolog randevusu alabildim. Platform çok kullanışlı ve doktor profillerindeki bilgiler çok detaylı. Kesinlikle tavsiye ederim."'
  },
  {
    name: 'Mehmet Demir',
    location: 'Ankara',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: '"Online konsültasyon özelliği harika! Evden çıkmadan doktorumla görüştüm ve reçetemi dijital olarak aldım. Gerçekten çok pratik bir sistem."'
  },
  {
    name: 'Fatma Özkan',
    location: 'İzmir',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    comment: '"Çocuk doktoru aramak çok zordu ama RandevuAL ile en yakınımdaki uzmanı hemen buldum. Randevu alma süreci çok kolay ve hızlı."'
  }
];

// 2. YARDIMCI BİLEŞEN: Yıldızları dinamik olarak oluşturur
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

// Framer Motion için animasyon varyantları (önceki bileşenden aynı)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  const totalReviews = 25847;

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hastalarımız Ne Diyor?</h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce memnun hasta RandevuAL deneyimlerini paylaşıyor. Siz de bu mutlu ailede yerinizi alın.
          </p>
        </div>

        {/* Yorum Kartları */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="mt-6 text-gray-600 italic flex-grow">
                {testimonial.comment}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Özet Kartı */}
        <motion.div 
          className="mt-12 mx-auto max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaStar className="w-7 h-7 text-yellow-400" />
          <span className="text-2xl font-bold text-gray-800">4.9 <span className="text-lg font-normal text-gray-500">/ 5.0</span></span>
          <div className="border-l border-gray-200 h-8 mx-2"></div>
          <span className="text-xl font-semibold text-gray-800">
            {totalReviews.toLocaleString('tr-TR')} <span className="text-base font-normal text-gray-500">değerlendirme</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;