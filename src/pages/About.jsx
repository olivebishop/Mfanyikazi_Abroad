import React, { useState } from "react";
import hero from "../assets/hero.jpg";

const AboutUs = () => {
  const faqData = [
    {
      question: "What is your company's mission?",
      answer:
        "Our mission is to protect Kenyan workers who plan to work abroad especially Middle East Countries.",
    },
    {
      question: "How long has your company been in operation?",
      answer: "We have lauched our company this year 2023.",
    },
    {
      question: "Where are your offices located?",
      answer: "Our offices are currently located in Kenya.",
    },
    // Add more FAQ items here
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto mt-16 md:mt-10 lg:mt-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={hero} alt="About" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-3">
          <h1 className="text-3xl font-bold mb-8">About Us</h1>
          <p className="mb-8">
          <strong>MFanyikazi Abroad:</strong> Ensuring Kenyan workers' safety in the Middle East. Our system safeguards against rogue employers and agents, protecting those seeking employment abroad
          </p>
          <h2 className="text-xl font-bold mb-4">FAQ</h2>
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center bg-gray-100 p-4 rounded cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-bold">{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="bg-gray-200 p-4 rounded mt-2">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
