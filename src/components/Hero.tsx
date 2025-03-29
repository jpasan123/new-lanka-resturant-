import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/VWsj545X/449707389-1007247541407300-5062556902177494644-n.jpg')"
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <img 
          src="https://i.ibb.co/bgn77Rtk/449714562-1007247384740649-5361919209415570505-n.jpg"
          alt="New Lanka Restaurant Logo"
          className="w-32 md:w-48 h-32 md:h-48 mb-6 md:mb-8 rounded-full shadow-lg"
        />
        <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 text-center">NEW LANKA RESTAURANT</h1>
        <p className="text-xl md:text-3xl mb-6 md:mb-8 text-center">Your destination for an authentic sri Lankan culinary experience</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto px-4">
          <ScrollLink 
            to="menu" 
            smooth={true} 
            duration={500} 
            className="btn-secondary text-center w-full sm:w-auto"
          >
            View Menu
          </ScrollLink>
          <a 
            href="/menu.pdf" 
            download 
            className="btn-primary text-center w-full sm:w-auto"
          >
            Download Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;