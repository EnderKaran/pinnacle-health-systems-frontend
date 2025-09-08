import React from 'react'
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import HistoryTimeline from '../components/HistoryTimeline';
import TeamSection from '../components/TeamSection';
import JoinTeamCTA from '../components/JoinTeamCTA';

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
        <HistoryTimeline />
        <TeamSection />
        <JoinTeamCTA />
    </>
  )
}

export default AboutPage