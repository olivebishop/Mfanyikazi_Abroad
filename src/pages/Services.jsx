import React from "react";
import hero from "../assets/hero.jpg";
import uae from "../assets/uae.jpg";

const OurServices = () => {
  const servicesData = [
    {
      title: "Pre-Employment Screening",
      description:
        "Thorough background checks and verification of job offers and contracts.",
      image: hero,
    },
    {
      title: "Orientation and Training",
      description:
        "Providing essential information and training to prepare workers for overseas employment.",
      image: uae,
    },
    {
      title: "Monitoring and Support",
      description:
        "Regular monitoring of workers' welfare and provision of necessary support throughout their employment.",
      image: hero,
    },
    {
      title: "Dispute Resolution",
      description:
        "Assistance in resolving any disputes or issues that arise during the employment period.",
      image: hero,
    },
    {
      title: "Repatriation Assistance",
      description:
        "Guidance and support in facilitating the safe return of workers to Kenya upon completion of their contracts.",
      image: hero,
    },
    {
      title: "Government & Agencies",
      description:
        "We partner with agencies and government officials to ensure safe working conditions for Kenyans who plan to work abroad.",
      image: hero,
    },
  ];

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow mt-4 md:mt-0"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
