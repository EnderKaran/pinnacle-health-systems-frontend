// src/pages/DoctorsPage.jsx

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const specialties = ["Kardiyoloji", "Ortopedi", "Dermatoloji", "Nöroloji", "Pediatri", "Gastroenteroloji", "Endokrinoloji", "Psikiyatri"];
const cities = ["İstanbul", "Ankara", "İzmir"];

// Arama ve Filtreleme Çubuğu Bileşeni
const DoctorSearch = ({ filters, setFilters }) => (
  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
      <div className="relative md:col-span-2">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Uzmanlık, hastalık veya doktor adı"
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={filters.query}
          onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
        />
      </div>
      <select
        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        value={filters.city}
        onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
      >
        <option value="all">Tüm Şehirler</option>
        {cities.map(city => <option key={city} value={city}>{city}</option>)}
      </select>
      <select
        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        value={filters.specialty}
        onChange={(e) => setFilters(prev => ({ ...prev, specialty: e.target.value }))}
      >
        <option value="all">Tüm Uzmanlık Alanları</option>
        {specialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
      </select>
    </div>
  </div>
);

// Tek bir Doktor Kartı Bileşeni
const DoctorCard = ({ doctor }) => {
  const handleAppointment = () => {
    alert(`Dr. ${doctor.name} için randevu alındı!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300">
      <div>
        <img
          src={doctor.picture}
          alt={`Dr. ${doctor.name}`}
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
        />
        <h3 className="text-xl font-bold text-gray-800">
          Dr. {doctor.name}
        </h3>
        <p className="text-gray-500 mb-4">{doctor.specialty}</p>
      </div>
      <button 
        onClick={handleAppointment}
        className="w-full px-4 py-2.5 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Randevu Al
      </button>
    </div>
  );
};

// Sayfalama (Pagination) Bileşeni
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;
    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <nav className="flex justify-center items-center mt-8 space-x-2">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 rounded-lg bg-white border disabled:opacity-50">&lt;</button>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => onPageChange(number)} className={`px-4 py-2 rounded-lg border ${currentPage === number ? 'bg-cyan-600 text-white' : 'bg-white'}`}>{number}</button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 rounded-lg bg-white border disabled:opacity-50">&gt;</button>
        </nav>
    );
};

const DoctorsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  
 
  const [filters, setFilters] = useState({
    query: searchParams.get('query') || '',
    city: searchParams.get('city') || 'all',
    specialty: 'all'
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;

  
  useEffect(() => {
    const generateDoctors = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=32&nat=tr&gender=female,male');
        const { results } = await response.json();

        const generatedData = results.map((user, index) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          specialty: specialties[index % specialties.length],
          city: cities[index % cities.length],
          picture: user.picture.large,
        }));

        setAllDoctors(generatedData);
      } catch (error) {
        console.error("Doktor verileri oluşturulurken hata:", error);
      } finally {
        setLoading(false);
      }
    };
    generateDoctors();
  }, []);

  
  useEffect(() => {
    
    if (allDoctors.length === 0) return;

    let result = allDoctors.filter(doctor => {
      const cityMatch = filters.city === 'all' || doctor.city === filters.city;
      const specialtyMatch = filters.specialty === 'all' || doctor.specialty === filters.specialty;
      const queryMatch = !filters.query || 
                         doctor.name.toLowerCase().includes(filters.query.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(filters.query.toLowerCase());
      return cityMatch && specialtyMatch && queryMatch;
    });

    setFilteredDoctors(result);
    setCurrentPage(1); // Filtre değiştiğinde her zaman ilk sayfaya dön
  }, [filters, allDoctors]);
  
  // 3. Adım: Sayfalama için mevcut sayfadaki doktorları hesapla
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <DoctorSearch filters={filters} setFilters={setFilters} />

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Arama Sonuçları ({filteredDoctors.length})</h2>

        {loading ? (
          <div className="text-center py-10">Doktorlar yükleniyor...</div>
        ) : currentDoctors.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
          </>
        ) : (
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600">Aradığınız kriterlere uygun doktor bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;