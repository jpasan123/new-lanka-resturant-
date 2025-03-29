import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      name: "Malay Beef Curry",
      price: "$17.50",
      description: "Tender beef slow-cooked in aromatic Malay spices",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chicken Kottu",
      price: "$16.90",
      description: "Shredded roti stir-fried with chicken and vegetables",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fish Curry",
      price: "$18.50",
      description: "Fresh fish cooked in traditional Ceylon spices",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Vegetable Rice & Curry",
      price: "$15.90",
      description: "Assorted vegetables with aromatic rice",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Lamb Curry",
      price: "$19.90",
      description: "Tender lamb pieces in rich Ceylon curry sauce",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "String Hoppers",
      price: "$14.90",
      description: "Traditional rice noodle pancakes",
      image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="menu" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 sm:h-56">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">{item.description}</p>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;