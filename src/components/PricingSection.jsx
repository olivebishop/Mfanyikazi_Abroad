import React from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section className="pricing-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscription Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-gray-600 mb-4">
                Free service with real-time safety monitoring, secure communication channel & access to support
              </p>
              <p className="text-3xl font-bold mb-4">Ksh1500/year</p>
              <ul className="text-sm mb-4">
                <li>👉Real-time safety monitoring.</li>
                <li>👉Secure communication channel.</li>
                <li>👉Access to support.</li>
              </ul>
              <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full no-underline">
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-gray-600 mb-4">
                Added features i.e. cultural awareness training, courses & enhanced customer service
              </p>
              <p className="text-3xl font-bold mb-4">Ksh3000/year</p>
              <ul className="text-sm mb-4">
                <li>👉Cultural awareness training.</li>
                <li>👉Enhanced customer service.</li>
                <li>👉Courses</li>
              </ul>
              <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full no-underline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            * All prices are in Kenyan Shillings (Ksh) per year.
          </p>
          <p className="text-gray-600">
            Recruitment agencies partnership available. Contact us for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
