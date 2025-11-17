import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-dark via-primary to-accent text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-36 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Thoughtfully Crafted Furniture for Comfortable Living
          </h1>
          <p className="text-neutral-light text-lg md:text-xl max-w-xl">
            Willow Home blends modern design with lasting comfort — handcrafted pieces curated for homes that welcome life. Discover quality furniture that grows with you.
          </p>
          <div className="flex items-center gap-6">
            <Button variant="accent" size="lg" className="shadow-lg">Shop Collection</Button>
            <Button variant="outline" size="md">View Story</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
            alt="Modern living room with gray sofa"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-accent"
          />
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <img
              src="/src/assets/images/lamp.jpg"
              alt="Lamp"
              className="w-16 h-32 opacity-70"
            />
          </div>
          <div className="absolute -right-4 top-1/4 transform -translate-y-1/2 hidden md:block">
            <img
              src="/src/assets/images/plant.jpg"
              alt="Plant"
              className="w-24 h-48 opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary py-8 mt-12 rounded-xl shadow-lg">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">7</span>
            <span className="text-xs uppercase tracking-wider">Year Experience</span>
          </div>
          <div className="flex flex-col items-center border-l border-teal-600">
            <span className="text-2xl font-bold">2</span>
            <span className="text-xs uppercase tracking-wider">Opened in the country</span>
          </div>
          <div className="flex flex-col items-center border-l border-teal-600">
            <span className="text-2xl font-bold">10k+</span>
            <span className="text-xs uppercase tracking-wider">Furniture sold</span>
          </div>
          <div className="flex flex-col items-center border-l border-teal-600">
            <span className="text-2xl font-bold">260+</span>
            <span className="text-xs uppercase tracking-wider">Variant Furniture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;