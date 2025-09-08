import React from 'react'
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import HistoryTimeline from '../components/HistoryTimeline'; 

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
        <HistoryTimeline />
    </>
  )
}

export default AboutPage