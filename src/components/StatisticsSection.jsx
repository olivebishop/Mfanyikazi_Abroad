import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const StatisticsSection = () => {
  const [userData, setUserData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data
    fetch("http://localhost:9000/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch job data
    fetch("http://localhost:9000/api/v1/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobData(data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });

    // Set loading to false when both requests are complete
    Promise.all([fetch("http://localhost:9000/api/v1/users"), fetch("http://localhost:9000/api/v1/jobs")])
      .then((responses) => Promise.all(responses.map((response) => response.json())))
      .then(([userData, jobData]) => {
        setUserData(userData);
        setJobData(jobData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="statistics-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Statistics and Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={4} duration={30} separator="," />
            </h3>
            <p className="text-gray-600">Targeted Partners</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={userData.length} duration={30} separator="," />
            </h3>
            <p className="text-gray-600">Registered Users</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={jobData.length} duration={30} separator="," />
            </h3>
            <p className="text-gray-600">Jobs Available</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold mb-2">
              <CountUp end={95} duration={30} suffix="%" />
            </h3>
            <p className="text-gray-600">Users Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
