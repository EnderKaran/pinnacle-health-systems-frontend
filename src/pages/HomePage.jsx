import React from 'react';
import Hero from '../components/Hero';
import FeaturedDoctors from '../components/FeaturedDoctors';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularSpecialties from '../components/PopularSpecialties';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

function HomePage() {
  return (
    <>
        <Hero />
      <FeaturedDoctors />
      <WhyChooseUs />
      <PopularSpecialties />
      <Testimonials />
      <CTA />
    </>
  )
}

export default HomePage