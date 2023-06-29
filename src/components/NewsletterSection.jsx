import React from "react";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest news and receive exclusive offers!
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="w-full sm:w-auto p-2 border border-gray-300 rounded mb-2 sm:mr-2"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full sm:ml-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
