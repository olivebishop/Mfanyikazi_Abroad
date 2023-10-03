// import React, { useState, useEffect } from 'react';
// import CoursesTable from './coursesTable';

// const ViewCourses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch course data from your database here
//     fetchDataFromDatabase();
//   }, []);

//   const fetchDataFromDatabase = async () => {
//     try {
//       // Replace 'your_api_endpoint_for_courses' with your actual API endpoint for courses
//       const response = await fetch('http://localhost:9000/api/v1/users'); // Make sure the URL is correct
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const coursesData = await response.json();
//       setCourses(coursesData); // Update the state with fetched course data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4 mt-5">View Courses</h1>
//       <CoursesTable data={courses} /> {/* Use the CoursesTable component */}
//     </div>
//   );
// };

// export default ViewCourses;
import React from 'react'

function ViewCourses() {
  return (
    <div>
      <h1 className='mt-16'>View courses</h1>
    </div>
  )
}

export default ViewCourses