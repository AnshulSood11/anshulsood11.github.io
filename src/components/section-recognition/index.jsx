import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionRecongnition = ({ recognition }) => {
  if (!recognition.length) return null;
  return (
    <Section title="Awards and Achievements">
      {recognition.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          info={item.info}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionRecongnition;
