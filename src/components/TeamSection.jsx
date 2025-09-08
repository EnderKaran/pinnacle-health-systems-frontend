import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurIn from './magicui/blur-in';

//uzmanlık alanlaru
const specialties = [
    "Kardiyoloji Uzmanı",
  "Ortopedi Uzmanı",
  "Dermatoloji Uzmanı",
  "Nöroloji Uzmanı",
  "Pediatri Uzmanı",
  "Gastroenteroloji Uzmanı"
];

//animasyon varyantları
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function TeamSection() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6&nat=tr');
        const data = await response.json();
        
        // Gelen veriye uzmanlık alanlarını ekliyoruz.
        const membersWithSpecialties = data.results.map((user, index) => ({
          ...user,
          specialty: specialties[index % specialties.length] 
        }));

        setTeamMembers(membersWithSpecialties);
      } catch (error) {
        console.error("Ekip verileri çekilirken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []); // Boş dependency array, component yüklendiğinde bir kez çalışmasını sağlar.

  return (
    <section className='bg-gray-50 py-16 lg:py-20'>
        <div className='container mx-auto px-4'>

            {/* Başlık Bölümü */}
            <div className='text-center mb-12'>
                <BlurIn
                    word={"Ekibimiz"}
                    className={"text-4xl md:text-5xl font-bold text-gray-800"}
                />

                <BlurIn
                    word="Alanında uzman ve deneyimli profesyonellerden oluşan ekibimizle tanışın."
                    className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
                    duration={0.7}
                />

                {/* Yüklenme Durumu */}
                {loading && <div className="text-center text-gray-500">Ekip üyeleri yükleniyor...</div>}

                {/* Ekip Üyeleri Grid'i */}
                {!loading && (
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {teamMembers.map((member) => (
                        <motion.div
                            key={member.login.uuid}
                            className="text-center flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <img
                            src={member.picture.large}
                            alt={`Dr. ${member.name.first} ${member.name.last}`}
                            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-4 border-white transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                            />
                            <h3 className="text-xl font-bold text-gray-800">
                            Dr. {member.name.first} {member.name.last}
                            </h3>
                            <p className="text-gray-500">{member.specialty}</p>
                        </motion.div>
                        ))}
                    </motion.div>
                    )}
                
            </div>
        </div>
    </section>
  )
}

export default TeamSection