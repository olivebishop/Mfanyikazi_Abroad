import React from "react";
import CountUp from "react-countup";

const StatisticsSection = () => {
  return (
    <section className="statistics-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Statistics and Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={10000} duration={3} separator="," />
            </h3>
            <p className="text-gray-600">Targeted Users</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={4} duration={3} separator="," />
            </h3>
            <p className="text-gray-600">Partners</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={500000} duration={3} separator="," />
            </h3>
            <p className="text-gray-600">Targeted Job Postings</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={95} duration={3} suffix="%" />
            </h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
