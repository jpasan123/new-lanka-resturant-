
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FoodVideo from './components/FoodVideo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <FoodVideo />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;