import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDoctors from './components/FeaturedDoctors';
import WhyChooseUs from './components/WhyChooseUs';
import PopularSpecialties from './components/PopularSpecialties';

import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDoctors />
        <WhyChooseUs />
        <PopularSpecialties />
      </main>
    </>
  )
}

export default App
