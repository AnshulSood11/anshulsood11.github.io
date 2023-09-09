import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
      {about.split('\n').map((entry, i) => (
        <p key={i}>{entry}<br/></p>
      ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
