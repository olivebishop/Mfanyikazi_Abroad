import React from 'react';
import { BeatLoader } from 'react-spinners';
import './css/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <BeatLoader
        color="#ffffff" // Change the color of the spinner here
        size={15} // Specify the size of the spinner here
      />
    </div>
  );
};

export default Preloader;
