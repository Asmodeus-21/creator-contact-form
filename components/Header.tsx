
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-20">
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8 overflow-hidden bg-white">
        <img
          src="/instagram-profile.png"
          alt="Maya's Instagram Profile Screenshot"
          className="w-full h-auto object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
        Create. Collaborate. Grow.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
        I'm Maya, and I'm looking for ambitious female creators in Kolkata to build something amazing together.
      </p>
    </header>
  );
};

export default Header;
