import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js";
import axios from "axios";
import  '../../../../pages/AdminChart.css'

const EmployeeChart = () => {
  const chartRef1 = useRef(null); // Reference for the job chart
  const chartRef2 = useRef(null); // Reference for the user chart
  const [jobData, setJobData] = useState(null); // Data for the job chart
  const [userData, setUserData] = useState(null); // Data for the user chart

  useEffect(() => {
    // Fetch job data from your API
    axios
      .get("http://localhost:9000/api/v1/jobs")
      .then((response) => {
        const jobData = response.data;

        // Process job data to count the number of each job type
        const jobTypes = new Map();
        jobData.forEach((job) => {
          const type = job.type;
          if (type) { // Check if the job type is defined
            if (jobTypes.has(type)) {
              jobTypes.set(type, jobTypes.get(type) + 1);
            } else {
              jobTypes.set(type, 1);
            }
          }
        });

        // Filter out empty or undefined job types
        const filteredJobTypes = Array.from(jobTypes.keys()).filter((type) => type);

        // Format the data for the job chart
        const formattedJobData = {
          labels: filteredJobTypes, // Use the filtered job types as labels
          datasets: [
            {
              data: filteredJobTypes.map((type) => jobTypes.get(type)),
              backgroundColor: ["#362e2e", "#6b6666", "#159e0e"], // Customize colors
            },
          ],
        };

        setJobData(formattedJobData); // Update jobData with data for the job chart
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });

    // Fetch user data from your API
    axios
      .get("http://localhost:9000/api/v1/applications")
      .then((response) => {
        const applicationData = response.data;

        // Count the number of unique usernames and unique emails
        const names = new Set();
        const emails = new Set();

        applicationData.forEach((application) => {
          names.add(application.name);
          emails.add(application.email);
        });

        // Format the data for the user chart
        const formattedUserData = {
          labels: ["Unique names", "Unique Emails"],
          datasets: [
            {
              data: [names.size, emails.size],
              backgroundColor: ["#362e2e", "#159e0e"], // Customize colors
            },
          ],
        };

        setUserData(formattedUserData); // Update userData with data for the user chart
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  useEffect(() => {
    // Create the job chart when jobData changes
    if (jobData) {
      if (chartRef1.current) {
        chartRef1.current.destroy();
      }

      const ctx1 = document.getElementById("job-chart");
      chartRef1.current = new ChartJS(ctx1, {
        type: "doughnut",
        data: jobData,
        options: {
          responsive: true,
          aspectRatio: 0.5, // Reduce the size by adjusting aspectRatio
        },
      });
    }

    // Create the user chart when userData changes
    if (userData) {
      if (chartRef2.current) {
        chartRef2.current.destroy();
      }

      const ctx2 = document.getElementById("user-chart");
      chartRef2.current = new ChartJS(ctx2, {
        type: "doughnut",
        data: userData,
        options: {
          responsive: true,
          aspectRatio: 0.5, // Reduce the size by adjusting aspectRatio
        },
      });
    }
  }, [jobData, userData]);

  return (
    <div className="mt-2 bg-white p-4 rounded-lg content-container">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
          <div className="bg-white p-4 rounded-lg" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <h6 className="text-right">Job Stats</h6>
            <canvas id="job-chart" className="w-full" style={{ maxWidth: "300px", maxHeight: "300px" }} />
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
          <div className="bg-white p-4 rounded-lg" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <h6 className="text-right">Applications Stats</h6>
            <canvas id="user-chart" className="w-full" style={{ maxWidth: "300px", maxHeight: "300px" }} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {/* Add any additional content here */}
      </div>
    </div>
  );
};

export default EmployeeChart;
