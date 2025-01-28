import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-2">NewsHub</h2>
            <p className="text-gray-400">Stay updated with the latest news from around the world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@newshub.com</p>
            <p className="text-gray-400">Phone: +1 123-456-7890</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-500">© 2025 NewsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
