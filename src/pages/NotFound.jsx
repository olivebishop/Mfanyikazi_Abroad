import React from "react";
import notFound from "../assets/notFound.gif";

const NotFound = () => {
  return (
    <div className="container mx-auto mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <img
        src={notFound}
        alt="Not Found"
        className="max-w-full h-auto mb-4"
      />
      <p className="text-lg">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
