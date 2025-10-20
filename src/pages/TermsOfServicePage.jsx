// src/pages/TermsOfServicePage.jsx

import React from 'react';
import BlurIn from '@/components/magicui/blur-in';

const TermsOfServicePage = () => {
  return (
    <>
      {/* Hero Bölümü */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <BlurIn
            word="Kullanım Koşulları"
            className="text-4xl md:text-5xl font-bold text-gray-800"
          />
          <BlurIn
            word="Platformumuzu kullanarak bu koşulları kabul etmiş sayılırsınız."
            className="mt-4 max-w-2xl mx-auto text-lg text-gray-600"
            duration={0.7}
          />
        </div>
      </section>

      {/* Koşullar İçeriği */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <article className="prose prose-lg max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
            <h2>1. Taraflar ve Tanımlar</h2>
            <p>
              Bu belge, Pinnacle Health ("Platform", "Biz") ile platformu kullanan ("Kullanıcı", "Siz") arasındaki yasal anlaşmayı teşkil eder. Platform, online doktor randevusu ve ilgili sağlık hizmetleri sunan bir aracı hizmet sağlayıcısıdır.
            </p>

            <h2>2. Hizmetlerin Kullanımı</h2>
            <p>
              Platformu kullanarak şunları kabul etmiş olursunuz:
            </p>
            <ul>
              <li>Yalnızca yasal amaçlarla hareket edeceğinizi.</li>
              <li>Verdiğiniz tüm bilgilerin doğru, güncel ve eksiksiz olduğunu.</li>
              <li>Hesap güvenliğinizden sorumlu olduğunuzu ve şifrenizi üçüncü kişilerle paylaşmayacağınızı.</li>
              <li>Platformun, doktorlar tarafından sunulan tıbbi tavsiyelerin doğruluğundan sorumlu olmadığını. Biz yalnızca randevu almanızı sağlayan bir teknoloji platformuyuz.</li>
            </ul>

            <h2>3. Fikri Mülkiyet</h2>
            <p>
              Platformda yer alan tüm metinler, grafikler, logolar ve yazılımlar Pinnacle Health'e aittir ve telif hakkı yasalarıyla korunmaktadır. İzinsiz kullanılamaz, kopyalanamaz veya dağıtılamaz.
            </p>
            
            <h2>4. Sorumluluğun Sınırlandırılması</h2>
            <p>
              Pinnacle Health, platformun kesintisiz veya hatasız olacağını garanti etmez. Doktorlar tarafından sağlanan hizmetlerin kalitesinden veya olası tıbbi hatalardan platform sorumlu tutulamaz. Herhangi bir sağlık sorunu için nihai karar ve sorumluluk, size ve danıştığınız sağlık profesyoneline aittir.
            </p>
            
            <h2>5. Koşulların Değiştirilmesi</h2>
            <p>
              Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler platformda yayınlandığı anda yürürlüğe girer. Platformu kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;