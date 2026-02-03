
import React from 'react';
import InstagramProfile from './InstagramProfile';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-20">
      <InstagramProfile
        username="ciaostardus"
        name="Maya Saha"
        pronouns="sey/xier"
        bio="She loves pink 🩵"
        posts="630"
        followers="139K"
        following="0"
        music="Hasta la Raíz · Natalia Lafourcade"
        imageUrl="/maya-new-screenshot.jpg"
      />
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
