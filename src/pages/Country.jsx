import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const Country = () => {
  const countries = [
    {
      name: "Saudi Arabia",
      image: hero,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada consectetur velit, a consectetur metus commodo eu.",
    },
    {
      name: "UAE",
      image: hero,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada consectetur velit, a consectetur metus commodo eu.",
    },
    {
      name: "Israel",
      image: hero,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada consectetur velit, a consectetur metus commodo eu.",
    },
    {
      name: "Lebanon",
      image: null,
      info: "Coming Soon",
    },
    {
      name: "Lebanon",
      image: null,
      info: "Coming Soon",
    },
    {
      name: "Lebanon",
      image: null,
      info: "Coming Soon",
    },
    // Add more countries here
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white mt-12">
      <h1 className="text-4xl font-bold mb-8 mt-6">Our App </h1>
      <h1 className="text-4xl font-bold mb-8">
        Is soon coming to your Country
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            {country.image ? (
              <img
                src={country.image}
                alt={country.name}
                className="h-32 w-full object-contain mb-4"
              />
            ) : (
              <div className="h-32 w-full bg-gray-600 flex items-center justify-center">
                <p className="text-xl font-bold">Coming Soon</p>
              </div>
            )}
            <h2 className="text-xl font-bold mb-2">{country.name}</h2>
            <p className="text-sm">{country.info}</p>
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 block text-center"
            >
              View Jobs
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
