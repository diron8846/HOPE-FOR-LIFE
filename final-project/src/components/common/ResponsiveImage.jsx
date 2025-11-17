import React from 'react';

const ResponsiveImage = ({ src, alt = '', className = '', ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full h-auto object-cover ${className}`}
      {...props}
    />
  );
};

export default ResponsiveImage;
