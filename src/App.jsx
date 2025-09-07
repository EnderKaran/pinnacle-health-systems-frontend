import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDoctors from './components/FeaturedDoctors';
import WhyChooseUs from './components/WhyChooseUs';
import PopularSpecialties from './components/PopularSpecialties';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

import './App.css'

function App() {
 

  return (
    <>
      <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDoctors />
        <WhyChooseUs />
        <PopularSpecialties />
        <Testimonials />
        <CTA />
      </main>
      </div>
    </>
  )
}

export default App
