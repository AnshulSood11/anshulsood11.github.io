import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  console.log(about.split('\n'))
  return (
    <Section title="About Me">
      <div className="mb-6">
      {about.split('\n').map((entry, i) => (
        <p key={i}>{entry}</p>
      ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
