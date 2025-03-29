import React from 'react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://i.ibb.co/JWhJzHzG/R-2.jpg",
    "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;