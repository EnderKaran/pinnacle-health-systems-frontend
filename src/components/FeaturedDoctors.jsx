// src/components/FeaturedDoctors.jsx

import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

// Swiper bileşenleri ve stilleri
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

function FeaturedDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchDoctors = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=8&nat=tr', { signal });
                const data = await response.json();
                
                const specialties = ["Kardiyoloji Uzmanı", "Cildiye Uzmanı", "Ortopedi Uzmanı", "Pediatri Uzmanı", "Nöroloji Uzmanı", "Göz Hastalıkları Uzmanı"];
                const doctorsWithSpecialties = data.results.map(user => ({
                    ...user,
                    specialty: specialties[Math.floor(Math.random() * specialties.length)]
                }));
                
                setDoctors(doctorsWithSpecialties);

            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
} else {
                    console.error("Doktor verileri çekilirken hata oluştu:", error);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchDoctors();

        return () => {
            controller.abort(); 
        };

    }, []);

    if (loading) {
        return <div className="text-center py-16">Doktorlar Yükleniyor...</div>;
    }

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Öne Çıkan Uzmanlar</h2>
                    {/* Bu metni geri ekledim */}
                    <p className="mt-2 text-base md:text-lg text-gray-600">
                        Hastalarımızın en çok tercih ettiği uzman doktorlarımızla tanışın
                    </p>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="px-4 sm:px-10"
                >
                    {doctors.map((doctor) => (
                        <SwiperSlide key={doctor.login.uuid}>
                            <DoctorCard doctor={doctor} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-8 md:mt-12">
                              <Link
                                to="/doktor-bul" 
                                className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                              >
                                Tüm Doktorları Görüntüle
                              </Link>                          
                </div>
            </div>
        </section>
    );
}

export default FeaturedDoctors;