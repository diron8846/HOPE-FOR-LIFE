import React from 'react';

const Button = ({ children, variant = "primary", size = "md", className = "" }) => {
  const baseClasses = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition shadow-sm inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white focus:ring-primary",
    secondary: "bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary",
    outline: "border border-gray-300 text-neutral-dark bg-white hover:bg-gray-50 focus:ring-gray-300",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;