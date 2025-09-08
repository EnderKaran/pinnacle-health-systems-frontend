import React from 'react';
import BlurIn from './magicui/blur-in';
import { FaClock, FaMapMarkerAlt, FaStar, FaVideo, FaBell, FaFileMedicalAlt } from 'react-icons/fa';

const featuresData = [
  
  {
    icon: FaClock,
    title: "Hızlı Randevu",
    description: "Sadece birkaç tıkla istediğiniz doktora randevu alabilirsiniz. Uzun kuyruklar ve telefon beklemelerine son.",
    color: { bg: 'bg-blue-100', text: 'text-blue-600' }
  },
  {
    icon: FaMapMarkerAlt,
    title: "Konum Bazlı Arama",
    description: "Size en yakın doktorları bulun. Mesafe, ulaşım ve konum bilgileriyle en uygun seçeneği keşfedin.",
    color: { bg: 'bg-teal-100', text: 'text-teal-600' }
  },
  {
    icon: FaStar,
    title: "Doktor Değerlendirmeleri",
    description: "Gerçek hasta yorumları ve değerlendirmeleri ile doktorlar hakkında detaylı bilgi edinin.",
    color: { bg: 'bg-green-100', text: 'text-green-600' }
  },
  {
    icon: FaVideo,
    title: "Online Konsültasyon",
    description: "Video görüşme ile doktorlarınızla online konsültasyon yapabilir, evden çıkmadan sağlık hizmeti alabilirsiniz.",
    color: { bg: 'bg-purple-100', text: 'text-purple-600' }
  },
  {
    icon: FaBell,
    title: "Akıllı Hatırlatıcılar",
    description: "Randevu saatinizden önce SMS ve e-posta ile hatırlatma alın. Hiçbir randevunuzu kaçırmayın.",
    color: { bg: 'bg-orange-100', text: 'text-orange-600' }
  },
  {
    icon: FaFileMedicalAlt,
    title: "Dijital Sağlık Dosyası",
    description: "Tüm sağlık geçmişinizi, raporlarınızı ve reçetelerinizi dijital ortamda güvenle saklayın.",
    color: { bg: 'bg-red-100', text: 'text-red-600' }
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BlurIn 
            word="Neden Pinnacle?" 
            className="text-3xl md:text-4xl font-bold text-gray-800"
          />
          <BlurIn 
            word="Sağlık hizmetlerine erişimde devrim yaratan platformumuzla, doktor randevusu almanın en kolay yolunu keşfedin."
            className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            duration={0.7}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className={`p-3 rounded-full self-start ${feature.color.bg}`}>
                <feature.icon className={`w-6 h-6 ${feature.color.text}`} />
              </div>
              
              <BlurIn 
                word={feature.title}
                className="mt-5 text-xl font-semibold text-gray-800 text-left"
              />
               <BlurIn 
                word={feature.description}
                className="mt-2 text-gray-600 flex-grow font-normal text-base text-left leading-relaxed"
                duration={0.7}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;