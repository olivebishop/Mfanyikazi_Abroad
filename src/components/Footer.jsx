import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SITEMAP = [
  {
    title: "Company",
    links: ["About", "FAQ", "Services", "Sign Up"],
  },
  {
    title: "Help Center",
    links: ["Facebook", "Instagram", "Twitter", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Partnerships", "Newsletter", "Statistics", "Subscription & Plan"],
  },
  {
    title: "Countries",
    links: ["UAE", "Israel", "Lebanon", "Saudi Arabia"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key}>
              <h4 className="text-white uppercase font-bold opacity-50 mb-4">{title}</h4>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <li key={key} className="text-white font-normal">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105 no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p className="text-white text-center font-normal mb-4 md:mb-0">
            &copy; {currentYear} <a href="#" className="text-white no-underline">Mfanyikazi Abroad</a>. All Rights Reserved.
          </p>
          <div className="flex space-x-4 ">
            <a href="#" className="text-white no-underline">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white no-underline">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white no-underline">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <p className="text-white text-center mt-4">
          <a href="https://olivebishop.vercel.app/" className="text-white no-underline">Designed by Olive&#129417;</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
