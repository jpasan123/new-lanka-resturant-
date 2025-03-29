import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom TikTok Icon since Lucide doesn't have one
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-2.638H10.5v10.564a2.54 2.54 0 0 1-2.54 2.54 2.54 2.54 0 0 1-2.54-2.54 2.54 2.54 0 0 1 2.54-2.54c.141 0 .278.012.412.034V6.002a6.15 6.15 0 0 0-.412-.014 6.223 6.223 0 0 0-6.221 6.224A6.223 6.223 0 0 0 7.96 18.434a6.223 6.223 0 0 0 6.222-6.222v-4.8a9.63 9.63 0 0 0 5.139 1.537V5.562z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">NEW LANKA RESTAURANT</h3>
            <p className="mb-4">Authentic Sri Lankan cuisine served with love and tradition. Experience the rich flavors of Ceylon in every bite.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/100063661898454/videos/843781697602274" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.tiktok.com/@newlanka" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-yellow-300 transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>+01 234 567 890</span>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>info@newlankarestaurant.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Street Name, City, Country</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/20" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} New Lanka Restaurant. All Rights Reserved.</p>
          <p className="mt-2">Designed with <span className="text-red-500">♥</span> for authentic Sri Lankan cuisine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;