import React from 'react';
import Card from '../common/Card';

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-light via-white to-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Modern wooden chair"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-primary"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Elevate Your Space with Willow Home</h2>
            <p className="text-neutral-dark text-lg md:text-xl mb-6">
              Our curated furniture collection blends timeless design and modern comfort. Each piece is crafted to bring warmth, style, and function to your home.
            </p>
            <div className="space-y-6">
              <Card title="Personalized Design" icon="🎨">
                Work with our designers to create furniture that fits your lifestyle and vision.
              </Card>
              <Card title="Sustainable Materials" icon="🌱">
                We use responsibly sourced wood and eco-friendly fabrics for lasting quality.
              </Card>
              <Card title="Fast Delivery" icon="🚚">
                Enjoy quick, reliable delivery and white-glove setup in your home.
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;