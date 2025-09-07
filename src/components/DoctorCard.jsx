import React from 'react';
import { FaStar } from 'react-icons/fa';

// Rastgele bir yorum sayısı ve puan oluşturan basit bir fonksiyon
const generateRandomReview = () => {
    const rating = (Math.random() * (5 - 4.5) + 4.5).toFixed(1); // 4.5 ile 5.0 arası
    const reviewCount = Math.floor(Math.random() * (400 - 50) + 50); // 50 ile 400 arası
    return { rating, reviewCount };
}

function DoctorCard({ doctor }) {
    
    const { rating, reviewCount } = generateRandomReview();

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center m-2 border border-gray-100 h-full">
            <div className="relative">
                <img 
                    src={doctor.picture.large} 
                    alt={`${doctor.name.first} ${doctor.name.last}`}
                    className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                />
                {/* Online göstergesi */}
                <span className="absolute top-1 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            
            <h3 className="mt-4 text-xl font-bold text-gray-800">
                Dr. {doctor.name.first} {doctor.name.last}
            </h3>
            <p className="mt-1 text-gray-500">{doctor.specialty || "Kardiyoloji Uzmanı"}</p>

            <div className="flex items-center mt-3 space-x-1">
                <FaStar className="text-yellow-400" />
                
                <span className="font-bold text-gray-800">{rating}</span>
                <span className="text-gray-500">({reviewCount} yorum)</span>
            </div>
            
            <button className="mt-6 w-full px-4 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Randevu Al
            </button>
        </div>
    )
}

export default DoctorCard;