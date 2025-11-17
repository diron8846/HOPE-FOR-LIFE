import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">W</div>
          <div>
            <div className="text-lg font-bold text-neutral-dark">Willow Home</div>
            <div className="text-xs text-gray-500">Design & Comfort</div>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;