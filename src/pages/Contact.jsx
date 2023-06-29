import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for handling form submission here
    // You can access form data using e.target elements
  };

  return (
    <div className="container mx-auto mt-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8 flex flex-col justify-center">
        {/* Contact Information */}
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex items-center mb-4">
          <a href="https://www.facebook.com">
            <FaFacebook className="mr-2 text-blue-600 cursor-pointer" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter className="mr-2 text-blue-400 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="mr-2 text-pink-600 cursor-pointer" />
          </a>
          <a href="https://www.whatsapp.com">
            <FaWhatsapp className="mr-2 text-green-600 cursor-pointer" />
          </a>
          <a href="mailto:example@example.com">
            <FaEnvelope className="mr-2 text-red-600 cursor-pointer" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
        {/* Map */}
        <div className="h-64 md:h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.774650763905!2d36.8144229!3d-1.2583468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0c93c9560e1d%3A0x26441bc7799fd6c3!2sParklands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1659242975452!5m2!1sen!2ske"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Map of Nairobi, Kenya (Parklands)"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
