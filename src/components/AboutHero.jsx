import React from 'react';
import AboutHeroImage from '../assets/about-hero-background.png';

const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-32 text-white"
      style={{ backgroundImage: `url(${AboutHeroImage})` }}
    >
      <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Hakkımızda
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Pinnacle Health olarak, sağlık hizmetlerinde mükemmelliği hedefliyoruz. 
          Hastalarımızın ihtiyaçlarına odaklanarak, güvenilir ve kaliteli hizmet sunuyoruz.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;