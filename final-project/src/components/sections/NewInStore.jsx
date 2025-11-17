import React from 'react';

const NewInStore = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-light via-white to-accent">
      <div className="container">
        <h2 className="text-4xl font-bold text-accent mb-10 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-secondary">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Modern wooden chair"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Oak Lounge Chair</h3>
              <p className="text-gray-600 text-base">Handcrafted from sustainable oak, designed for comfort and style.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-secondary">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              alt="Minimalist sofa"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Minimalist Sofa</h3>
              <p className="text-gray-600 text-base">A sleek, modern sofa with plush cushions and a timeless silhouette.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-secondary">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              alt="Designer lamp"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Designer Lamp</h3>
              <p className="text-gray-600 text-base">Brighten your space with our signature lamp, crafted for elegance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInStore;
