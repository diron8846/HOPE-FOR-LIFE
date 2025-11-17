import React from 'react';

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      <a href="#" className="text-neutral-dark hover:text-primary transition">Home</a>
      <a href="#" className="text-neutral-dark hover:text-primary transition">About</a>
      <a href="#" className="text-neutral-dark hover:text-primary transition">Features</a>
      <a href="#" className="text-neutral-dark hover:text-primary transition">Contact</a>
    </nav>
  );
};

export default Navigation;