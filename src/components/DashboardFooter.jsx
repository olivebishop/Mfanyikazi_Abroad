import React from "react";

const DashboardFooter = () => {
  return (
    <footer className=" text-black py-4 px-6">
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
