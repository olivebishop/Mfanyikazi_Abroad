import React, { useState, useEffect } from "react";
import { FaUsers, FaGlobe, FaBook, FaBriefcase } from "react-icons/fa";
import CountUp from "react-countup";
import  '../../../css/content.css'

const Content = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);

  useEffect(() => {
    // Fetch data from your database here and update the state
    fetchDataFromDatabase();
  }, []); // The empty dependency array means this effect runs only once, similar to componentDidMount

  // Define a function to fetch data from your database
  const fetchDataFromDatabase = async () => {
    try {
      // Fetch users data
      const usersResponse = await fetch("http://localhost:9000/api/v1/users");
      const usersData = await usersResponse.json();
      setUsersCount(usersData.length);

      // Fetch countries data
      const countriesResponse = await fetch("http://localhost:9000/api/v1/countries");
      const countriesData = await countriesResponse.json();
      setCountriesCount(countriesData.length);

      // Fetch courses data
      const coursesResponse = await fetch("http://localhost:9000/api/v1/courses");
      const coursesData = await coursesResponse.json();
      setCoursesCount(coursesData.length);

      // Fetch jobs data
      const jobsResponse = await fetch("http://localhost:9000/api/v1/jobs");
      const jobsData = await jobsResponse.json();
      setJobsCount(jobsData.length);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="p-4 md:p-8 lg:p-10 xl:p-12 mt-16 content-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
        {/* Users Widget */}
        <div className="bg-white rounded-lg shadow-lg p-4 border-t-2 border-blue-500"> 
          <div className="flex items-center justify-center mb-1"> 
            <FaUsers className="text-3xl text-blue-500" /> 
          </div>
          <h3 className="text-base font-bold mb-1">Users</h3> 
          <CountUp start={0} end={usersCount} duration={2} separator="," prefix="" suffix="" className="text-lg font-bold text-center" /> 
          <div className="w-1/4 h-1 bg-blue-500 mx-auto mt-1"></div> 
       
        </div>

        {/* Countries Widget */}
        <div className="bg-white rounded-lg shadow-lg p-4 border-t-2 border-green-500"> 
          <div className="flex items-center justify-center mb-1"> 
            <FaGlobe className="text-3xl text-green-500" /> 
          </div>
          <h3 className="text-base font-bold mb-1">Countries</h3> 
          <CountUp start={0} end={countriesCount} duration={2} separator="," prefix="" suffix="" className="text-lg font-bold text-center" /> 
          <div className="w-1/4 h-1 bg-green-500 mx-auto mt-1"></div> 
          
        </div>

        {/* Courses Widget */}
        <div className="bg-white rounded-lg shadow-lg p-4 border-t-2 border-purple-500">  
          <div className="flex items-center justify-center mb-1"> 
            <FaBook className="text-3xl text-purple-500" /> 
          </div>
          <h3 className="text-base font-bold mb-1">Courses</h3> 
          <CountUp start={0} end={coursesCount} duration={2} separator="," prefix="" suffix="" className="text-lg font-bold text-center" /> 
          <div className="w-1/4 h-1 bg-purple-500 mx-auto mt-1"></div>
        </div>

        {/* Jobs Widget */}
        <div className="bg-white rounded-lg shadow-lg p-4 border-t-2 border-orange-500"> 
          <div className="flex items-center justify-center mb-1"> 
          <FaBriefcase  className="text-3xl text-orange-500" /> 
          </div>
          <h3 className="text-base font-bold mb-1">Jobs</h3> 
          <CountUp start={0} end={jobsCount} duration={2} separator="," prefix="" suffix="" className="text-lg font-bold text-center" /> 
          <div className="w-1/4 h-1 bg-orange-500 mx-auto mt-1"></div>
        
        </div>
      </div>
    </section>
  );
};

export default Content;
