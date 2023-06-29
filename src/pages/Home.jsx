import React from "react";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import NewsletterSection from "../components/NewsletterSection";
import PartnerSection from "../components/PartnerSection";
import StatisticsSection from "../components/StatisticsSection";
import DownloadApp from "../components/Downloadapp"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <PricingSection />

      <DownloadApp />
      
      <PartnerSection />
      
      <StatisticsSection />

    

      <NewsletterSection />
      
      {/* Add more sections and components for your homepage */}
    </div>
  );
};

export default HomePage;
