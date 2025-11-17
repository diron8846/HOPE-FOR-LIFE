import React from 'react';

const Card = ({ title, children, icon = "📦" }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <span className="text-3xl md:text-4xl" aria-hidden="true">{icon}</span>
      <div>
        <h3 className="font-semibold text-neutral-dark text-lg mb-1">{title}</h3>
        <p className="text-base text-gray-600">{children}</p>
      </div>
    </div>
  );
};

export default Card;