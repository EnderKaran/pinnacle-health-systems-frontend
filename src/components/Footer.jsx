// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheckCircle } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Hızlı Bağlantılar',
    links: [
      { name: 'Ana Sayfa', to: '/' },
      { name: 'Doktor Bul', to: '/doktor-bul' },
      { name: 'Hakkımızda', to: '/hakkimizda' },
      { name: 'İletişim', to: '/iletisim' },
    ]
  },
  {
    title: 'Kurumsal',
    links: [
      { name: 'Hakkımızda', to: '/hakkimizda' },
      { name: 'Kariyer', to: '/kariyer' }, //yeni yapılan sayfa
      { name: 'Basın', to: '/basin' }, //yeni yapılan sayfa
      { name: 'Ortaklarımız', to: '/ortaklarimiz' }, //yeni yapılan sayfa
    ]
  },
  {
    title: 'Destek',
    links: [
      { name: 'Yardım Merkezi', to: '#' },
      { name: 'Sık Sorulan Sorular', to: '/sık-sorulan-sorular' }, //yeni yapılan sayfa
      { name: 'Gizlilik Politikası', to: '/gizlilik-politikasi' }, //yeni yapılan sayfa
      { name: 'Kullanım Koşulları', to: '/kullanim-kosullari' },
    ]
  }
];

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#1D2B3A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Sütun 1: Logo ve Sosyal Medya */}
          <div className="space-y-4">
            {/* 3. Logo için 'a' etiketini 'Link' ile değiştiriyoruz */}
            <Link to="/" className="flex items-center space-x-2">
              <FaStethoscope className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Pinnacle</span>
            </Link>
            <p className="text-gray-400">
              Türkiye'nin en güvenilir online randevu platformu. Sağlığınız için doğru uzmanı bulmanın en kolay yolu.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {/* 4. Linkler için 'a' etiketini 'Link' ile değiştiriyoruz */}
                    {link.to === '#' ? (
                      <a href={link.to} className="text-gray-400 hover:text-white transition-colors cursor-not-allowed">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Sütun 4: Destek Hattı */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek Hattı</h3>
            <div className="space-y-3">
              <p className="text-2xl font-bold">0850 123 45 67</p>
              <p className="text-gray-400">7/24 Müşteri Hizmetleri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım - Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Pinnacle. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-green-500" />
              <span>SSL Korumalı</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-green-500" />
              <span>Güvenilir Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;