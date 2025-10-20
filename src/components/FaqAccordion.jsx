// src/components/FaqAccordion.jsx

import { Disclosure, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "Pinnacle Health üzerinden nasıl randevu alabilirim?",
    answer: "Ana sayfamızdaki arama çubuğunu kullanarak veya 'Doktor Bul' sayfasından uzmanlık alanı ve şehir seçerek doktorları listeleyebilirsiniz. Profilini incelediğiniz doktorun takviminden size uygun bir tarih ve saat seçerek randevunuzu kolayca oluşturabilirsiniz."
  },
  {
    question: "Online konsültasyon hizmeti sunuyor musunuz?",
    answer: "Evet, birçok doktorumuz online konsültasyon hizmeti vermektedir. Doktor profillerinde 'Online Görüşme' ikonunu gördüğünüz uzmanlardan video görüşme randevusu alabilirsiniz."
  },
  {
    question: "Randevumu iptal edebilir veya tarihini değiştirebilir miyim?",
    answer: "Evet, kullanıcı panelinize giriş yaparak 'Randevularım' bölümünden mevcut randevularınızı yönetebilirsiniz. Randevu saatinden en az 24 saat öncesine kadar ücretsiz iptal veya değişiklik yapma hakkınız bulunmaktadır."
  },
  {
    question: "Ödeme işlemleri güvenli mi?",
    answer: "Kesinlikle. Platformumuzdaki tüm ödeme işlemleri SSL sertifikası ile korunmakta ve uluslararası güvenlik standartlarına sahip ödeme altyapıları üzerinden gerçekleştirilmektedir. Kart bilgileriniz hiçbir şekilde sistemimizde saklanmaz."
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="w-full mx-auto divide-y-2 divide-gray-200 rounded-2xl">
          {faqData.map((faq) => (
            <Disclosure as="div" className="py-4" key={faq.question}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="group flex w-full items-center justify-between text-left">
                    <span className="text-lg font-medium text-gray-800 group-hover:text-cyan-600">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`h-5 w-5 text-gray-500 group-hover:text-cyan-600 transition-transform duration-300 ${
                        open ? 'transform rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  
                  {/* Açılıp kapanan panel için animasyon */}
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="mt-4 pr-12 text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;