
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-neutral-800 mb-6 pb-2 border-b-2 border-neutral-200">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
