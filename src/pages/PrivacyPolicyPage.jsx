// src/pages/PrivacyPolicyPage.jsx

import React from 'react';
import BlurIn from '../components/magicui/blur-in';

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Hero Bölümü */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <BlurIn
            word="Gizlilik Politikası"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Verilerinizin güvenliği ve gizliliği bizim için en önemli önceliktir."
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>
      </section>

      {/* Politika İçeriği */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <article className="prose prose-lg max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
            <h2>1. Veri Sorumlusu</h2>
            <p>
              Pinnacle Health olarak, kişisel verilerinizin işlenmesinden biz sorumluyuz. Bu politika, hangi verileri neden topladığımızı ve bu verilerle ne yaptığımızı açıklamaktadır.
            </p>

            <h2>2. Topladığımız Kişisel Veriler</h2>
            <p>
              Platformumuzu kullandığınızda aşağıdaki türde verileri toplayabiliriz:
            </p>
            <ul>
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası.</li>
              <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres.</li>
              <li><strong>Sağlık Verileri:</strong> Randevu geçmişi, seçilen uzmanlık alanı, reçete bilgileri (sadece yetkili doktor ve sizin tarafınızdan görülebilir).</li>
              <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, çerez bilgileri.</li>
            </ul>

            <h2>3. Verilerinizi Nasıl Kullanıyoruz?</h2>
            <p>
              Topladığımız verileri şu amaçlarla kullanırız:
            </p>
            <ul>
              <li>Randevu oluşturma, hatırlatma ve yönetme süreçlerini yürütmek.</li>
              <li>Hizmet kalitemizi artırmak ve platformu kişiselleştirmek.</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
              <li>Güvenliği sağlamak ve sahtekarlığı önlemek.</li>
            </ul>
            
            <h2>4. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için SSL şifrelemesi dahil olmak üzere endüstri standardı teknik ve idari güvenlik önlemleri alıyoruz. Verileriniz, yetkisiz erişime, değişikliğe ve ifşaya karşı korunmaktadır.
            </p>
            
            <h2>5. Politikadaki Değişiklikler</h2>
            <p>
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Yapılan önemli değişiklikler hakkında sizi bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi tavsiye ederiz.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;