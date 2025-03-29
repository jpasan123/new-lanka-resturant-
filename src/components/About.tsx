import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Us</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-8">
          New Lanka Restaurant, based in Melbourne, brings the authentic tastes of Sri Lankan cuisine to the local Australian dining scene. 
          Whether you're dining in, ordering takeaway, or catering for an event, we offer diverse flavors crafted with fresh ingredients and traditional spices.
          Experience warm hospitality in a vibrant atmosphere that celebrates both tradition and innovation.
          Your culinary journey begins here!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Quality Food</h3>
              <p>Fresh ingredients and authentic recipes prepared with care</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Fast Service</h3>
              <p>Quick and efficient takeaway service for your convenience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Catering</h3>
              <p>Professional catering services for all your special events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;