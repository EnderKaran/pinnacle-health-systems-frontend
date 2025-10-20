// src/components/MediaKitCTA.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import BlurIn from './magicui/blur-in';

const MediaKitCTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <BlurIn
          word="Basın Kiti"
          className="text-3xl font-bold"
        />
        <BlurIn
          word="Pinnacle Health markasıyla ilgili logo, görsel ve kurumsal kimlik materyallerine buradan ulaşabilirsiniz."
          className="mt-4 max-w-xl mx-auto text-lg text-white/90"
          duration={0.7}
        />
        <div className="mt-8">
          <button className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100">
            <FaDownload className="mr-2" />
            Medyayı Kitini İndir
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaKitCTA;