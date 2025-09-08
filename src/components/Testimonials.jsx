// src/components/Testimonials.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// 1. STATİK VERİ DİZİSİ: Yorum kartları için geri ekledik.
const testimonialsData = [
  {
    name: 'Ayşe Kaya',
    location: 'İstanbul',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: '"Pinnacle sayesinde çok hızlı bir şekilde kardiyolog randevusu alabildim. Platform çok kullanışlı ve doktor profillerindeki bilgiler çok detaylı. Kesinlikle tavsiye ederim."'
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
    comment: '"Çocuk doktoru aramak çok zordu ama Pinnacle ile en yakınımdaki uzmanı hemen buldum. Randevu alma süreci çok kolay ve hızlı."'
  }
];

// 2. YARDIMCI BİLEŞEN: StarRating (Değişiklik yok, hem statik hem interaktif çalışabiliyor)
const StarRating = ({ rating, onRate }) => {
  const [hover, setHover] = useState(0);
  const isInteractive = onRate !== undefined;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`cursor-${isInteractive ? 'pointer' : 'default'} transition-colors`}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={isInteractive ? () => setHover(ratingValue) : undefined}
            onMouseLeave={isInteractive ? () => setHover(0) : undefined}
            onClick={isInteractive ? () => onRate(ratingValue) : undefined}
          />
        );
      })}
    </div>
  );
};

// Animasyon varyantları
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

const Testimonials = () => {
  // --- LOCALSTORAGE DESTEKLİ STATE'LER (Aynı) ---
  const [averageRating, setAverageRating] = useState(() => parseFloat(localStorage.getItem('pinnacleAverageRating')) || 4.9);
  const [totalReviews, setTotalReviews] = useState(() => parseInt(localStorage.getItem('pinnacleTotalReviews')) || 25847);
  const [userRating, setUserRating] = useState(() => parseInt(localStorage.getItem('pinnacleUserRating')) || 0);

  // --- OYLAMAYI YÖNETEN FONKSİYON (Aynı) ---
  const handleUserRating = (newRating) => {
    if (userRating > 0) return;
    const newTotalReviews = totalReviews + 1;
    const newAverage = (averageRating * totalReviews + newRating) / newTotalReviews;
    const roundedAverage = parseFloat(newAverage.toFixed(1));

    localStorage.setItem('pinnacleAverageRating', roundedAverage);
    localStorage.setItem('pinnacleTotalReviews', newTotalReviews);
    localStorage.setItem('pinnacleUserRating', newRating);

    setAverageRating(roundedAverage);
    setTotalReviews(newTotalReviews);
    setUserRating(newRating);
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü (Orijinal haliyle geri geldi) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hastalarımız Ne Diyor?</h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce memnun hasta Pinnacle deneyimlerini paylaşıyor. Siz de bu mutlu ailede yerinizi alın.
          </p>
        </div>

        {/* Yorum Kartları (Geri geldi) */}
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
                {/* Buradaki StarRating sadece gösterme amaçlı, bu yüzden 'onRate' prop'u yok */}
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="mt-6 text-gray-600 italic flex-grow">
                {testimonial.comment}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Özet ve İnteraktif Oylama Kartı */}
        <motion.div 
          className="mt-16 mx-auto max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">Genel Değerlendirme</h3>
          <div className='transform scale-125'>
            {/* Bu StarRating interaktif, bu yüzden 'onRate' prop'u var */}
            <StarRating 
              rating={userRating > 0 ? userRating : averageRating} 
              onRate={handleUserRating}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500 min-h-[20px]">
            {userRating > 0 ? "Oyunuz için teşekkürler!" : "Genel memnuniyeti oylayın!"}
          </p>

          <div className="flex items-center justify-center gap-4 mt-2">
            <span className="text-2xl font-bold text-gray-800">{averageRating.toFixed(1)} <span className="text-lg font-normal text-gray-500">/ 5.0</span></span>
            <div className="border-l border-gray-200 h-8 mx-2"></div>
            <span className="text-xl font-semibold text-gray-800">
              {totalReviews.toLocaleString('tr-TR')} <span className="text-base font-normal text-gray-500">değerlendirme</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;