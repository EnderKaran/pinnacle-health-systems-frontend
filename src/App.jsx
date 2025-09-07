import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDoctors from './components/FeaturedDoctors';

import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDoctors />
      </main>
    </>
  )
}

export default App
