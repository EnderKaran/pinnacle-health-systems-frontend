// src/pages/FaqPage.jsx

import React from 'react';
import BlurIn from '../components/magicui/blur-in';
import FaqAccordion from '../components/FaqAccordion';

// Sayfanın en üstündeki hero bölümü
const FaqHero = () => {
  return (
    <section className="bg-gray-50 py-20 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <BlurIn
          word="Sık Sorulan Sorular"
          className="text-4xl md:text-5xl font-bold text-gray-800"
        />
        <BlurIn
          word="Platformumuz ve hizmetlerimiz hakkında merak ettiğiniz her şeyi burada bulabilirsiniz."
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          duration={0.7}
        />
      </div>
    </section>
  );
};

// Sayfanın kendisi
function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqAccordion />
    </>
  );
}

export default FaqPage;