import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  info: 'text-md text-gray-600 font-light',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, info, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.info}>{info}</p>
      {description.split('\n').map((entry, i) => (
        <p key={i} className={classes.description}>{entry}</p>
      ))}
    </div>
  );
};

export default SummaryItem;
