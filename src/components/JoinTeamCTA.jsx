// src/components/JoinTeamCTA.jsx

import React from 'react';
import { motion } from 'framer-motion';
import BlurIn from './magicui/blur-in';

const JoinTeamCTA = () => {
  return (
    <section className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>
        <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <BlurIn
          word="Ekibimize Katılın"
          className="text-4xl md:text-5xl font-bold"
        />
        <BlurIn
          word="Pinnacle Health ailesine katılmak ve sağlık alanında kariyer yapmak için açık pozisyonlarımızı inceleyin."
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-200"
          duration={0.7}
        />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          
          <button
            type="button"
            className="mt-8 inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
          >
            Kariyer Fırsatları
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default JoinTeamCTA;