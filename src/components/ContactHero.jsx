import React from 'react';
import BlurIn from './magicui/blur-in';

const ContactHero = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <BlurIn
          word="İletişim" // Görseldeki metin
          className="text-4xl md:text-5xl font-bold text-gray-800"
        />
        <BlurIn
          word="Yardımcı olmak için buradayız. Herhangi bir sorunuz veya endişeniz varsa bize ulaşın." // Görseldeki metin
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
          duration={0.7}
        />
      </div>
    </section>
  );
};

export default ContactHero;