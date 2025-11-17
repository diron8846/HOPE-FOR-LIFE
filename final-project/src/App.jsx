import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import NewInStore from './components/sections/NewInStore';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <NewInStore />
      </main>
      <Footer />
    </div>
  );
}

export default App;