import React from 'react';
import three from '../assets/three.jpg';
import './css/DownloadApp.css';

const DownloadApp = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8 mb-6">
            <img src={three} alt="Mobile App" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="text-slate-500 flex flex-col h-full justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Our App is Now Available</h2>
              <p className="text-2xl font-bold mb-4 text-center">Stay connected on the go with our mobile app.</p>
              <div className="flex justify-center">
                <a href="#" className="beeping-button">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
