import React from 'react';
import BlurIn from '../components/magicui/blur-in';
import JobListings from '../components/JobListings';

// Sayfanın en üstündeki hero bölümü
const CareerHero = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <BlurIn
          word="Kariyer Fırsatları"
          className="text-4xl md:text-5xl font-bold text-gray-800"
        />
        <BlurIn
          word="Pinnacle Health ailesine katılarak sağlık sektörünün geleceğini şekillendirmeye yardımcı olun. Açık pozisyonlarımızı inceleyin."
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
          duration={0.7}
        />
      </div>
    </section>
  );
};

// Sayfanın kendisi
function CareerPage() {
  return (
    <>
      <CareerHero />
      <JobListings />
    </>
  );
}

export default CareerPage;