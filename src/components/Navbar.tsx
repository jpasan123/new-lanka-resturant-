import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-white font-bold whitespace-nowrap"
          >
            <span className="text-lg md:text-2xl lg:text-3xl">NEW LANKA RESTAURANT</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <a href="#" className="nav-link whitespace-nowrap">HOME</a>
            <a href="#about" className="nav-link whitespace-nowrap">ABOUTUS</a>
            <a href="#menu" className="nav-link whitespace-nowrap">MENU</a>
            <a href="#gallery" className="nav-link whitespace-nowrap">GALLERY</a>
            <a href="#contact" className="nav-link whitespace-nowrap">CONTACTUS</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-primary">
            <div className="flex flex-col py-2">
              <a href="#" className="mobile-nav-link" onClick={closeMenu}>HOME</a>
              <a href="#about" className="mobile-nav-link" onClick={closeMenu}>ABOUTUS</a>
              <a href="#menu" className="mobile-nav-link" onClick={closeMenu}>MENU</a>
              <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>GALLERY</a>
              <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>CONTACTUS</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;