import React from 'react';

import './Filters.css';

const Filters = ({ role, level, languages, tools }) => {
  const filtersList = [role, level, ...(languages || []), ...(tools || [])];

  const filtersView = filtersList.map((filter, index) => {
    return (
      <div key={index} className='tags__item'>
        <p>{filter}</p>
      </div>
    );
  });

  return <div className='tags'>{filtersView}</div>;
};

export default Filters;
