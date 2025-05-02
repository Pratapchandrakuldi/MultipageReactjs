// src/pages/Home.jsx
import HeroSection from '../components/sections/HeroSection';
import VideoSection from '../components/sections/VideoSection';
import VisionMission from '../components/sections/VissionMission';
// import FeaturesSection from '../components/sections/FeaturesSection';
// import ResearchAreas from '../components/sections/ResearchAreas';
// import Publications from '../components/sections/Publications';
// import GlobalImpact from '../components/sections/GlobalImpact';
// import ContactSection from '../components/sections/ContactSection';


export default function Home() {
  return (
    <>
      <VideoSection />
      <HeroSection />
      <VisionMission />
      {/* <FeaturesSection /> */}
      {/* <ResearchAreas />
      <Publications />
      <GlobalImpact /> */}
      {/* <ContactSection /> */}
    </>
  );
}