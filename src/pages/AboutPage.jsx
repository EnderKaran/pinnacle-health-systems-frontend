import React from 'react'
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import HistoryTimeline from '../components/HistoryTimeline';
import TeamSection from '../components/TeamSection';

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
        <HistoryTimeline />
        <TeamSection />
    </>
  )
}

export default AboutPage