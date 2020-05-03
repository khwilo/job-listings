import React from 'react';

import Card from '../../components/Card/Card';
import './Cards.css';

const Cards = ({ data }) => {
  const cardsView = data.map(
    (
      {
        logo,
        company,
        position,
        postedAt,
        contract,
        location,
        role,
        level,
        languages,
        tools,
      },
      index
    ) => {
      return (
        <Card
          key={index}
          logo={logo}
          company={company}
          position={position}
          postedAt={postedAt}
          contract={contract}
          location={location}
          role={role}
          level={level}
          languages={languages}
          tools={tools}
        />
      );
    }
  );
  return (
    <section className='cards'>
      <div className='container'>{cardsView}</div>
    </section>
  );
};

export default Cards;
