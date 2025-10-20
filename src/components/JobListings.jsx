import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

// Örnek iş ilanı verileri
const jobsData = [
  { id: 1, title: 'Kıdemli Frontend Geliştirici', department: 'Teknoloji', location: 'İstanbul', type: 'Tam Zamanlı' },
  { id: 2, title: 'Kardiyoloji Uzmanı', department: 'Tıp', location: 'Ankara', type: 'Tam Zamanlı' },
  { id: 3, title: 'UI/UX Tasarımcısı', department: 'Tasarım', location: 'İzmir', type: 'Uzaktan' },
  { id: 4, title: 'Hasta İlişkileri Sorumlusu', department: 'İdari', location: 'İstanbul', type: 'Tam Zamanlı' },
  { id: 5, title: 'Veri Bilimcisi', department: 'Teknoloji', location: 'Ankara', type: 'Uzaktan' },
  { id: 6, title: 'Çocuk Doktoru (Pediatrist)', department: 'Tıp', location: 'İzmir', type: 'Tam Zamanlı' },
];

const departments = ['Tümü', 'Teknoloji', 'Tıp', 'Tasarım', 'İdari'];

// Animasyon varyantları
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

const JobListings = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filteredJobs = activeFilter === 'Tümü'
    ? jobsData
    : jobsData.filter(job => job.department === activeFilter);

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Filtreleme Butonları */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map(dep => (
            <button
              key={dep}
              onClick={() => setActiveFilter(dep)}
              className={`btn btn-sm md:btn-md rounded-full transition-all duration-300 ${
                activeFilter === dep ? 'btn-primary text-white' : 'btn-ghost'
              }`}
            >
              {dep}
            </button>
          ))}
        </div>

        {/* İş İlanları Listesi */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredJobs.map(job => (
            <motion.div
              key={job.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
            >
              <div className="card-body">
                <div className="flex justify-end gap-2">
                  <div className="badge badge-primary badge-outline">{job.department}</div>
                  <div className="badge badge-secondary badge-outline">{job.type}</div>
                </div>
                <h2 className="card-title text-xl text-gray-800">{job.title}</h2>
                <div className="flex items-center gap-2 text-gray-500 mt-2">
                  <FaMapMarkerAlt />
                  <span>{job.location}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary w-full sm:w-auto">Detayları İncele</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobListings;