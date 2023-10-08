import React from "react";
import  '../../../../components/css/DashboardFooter.css'

const DashboardFooter = () => {
  return (
    <footer className=" text-black py-4 px-6 content-container">
      <div className="container mx-auto flex items-center justify-between mt-80">
        <p className="text-sm text-center font-bold">
          &copy; {new Date().getFullYear()} Mfanyikazi Abroad. All rights reserved.
        </p>
        <p className="text-sm font-bold">
          Designed by Olive🦉
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
