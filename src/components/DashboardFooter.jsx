import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mfanyikazi Abroad. All rights reserved.
        </p>
        <p className="text-sm">
          Designed by Olive
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
