import React from "react";
import cotu from "../assets/cotu.jpg";
import humanRight from "../assets/humanRight.jpg";
import humanTraffiking from "../assets/humanTraffiking.jpg";
import kenya from "../assets/kenya.jpg";

const PartnersSection = () => {
  return (
    <section className="partners-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2 md:w-1/4 text-center p-4">
            <img src={cotu} alt="COTU" className="mx-auto h-16 mb-4" />
            <p className="text-gray-600">COTU</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center p-4">
            <img src={humanRight} alt="Human Rights" className="mx-auto h-16 mb-4" />
            <p className="text-gray-600">Human Rights</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center p-4">
            <img src={humanTraffiking} alt="Partner 1" className="mx-auto h-16 mb-4" />
            <p className="text-gray-600">HAART</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center p-4">
            <img src={kenya} alt="Partner 2" className="mx-auto h-16 mb-4" />
            <p className="text-gray-600">GOK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
