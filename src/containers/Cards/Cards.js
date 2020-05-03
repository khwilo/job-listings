import React from 'react';

import Card from '../../components/Card/Card';
import './Cards.css';

const Cards = ({ data }) => {
  const cardsView = data.map((job) => {
    return (
      <Card
        key={job.id}
        logo={job.logo}
        company={job.company}
        isNew={job.new}
        isFeatured={job.featured}
        position={job.position}
        postedAt={job.postedAt}
        contract={job.contract}
        location={job.location}
        role={job.role}
        level={job.level}
        languages={job.languages}
        tools={job.tools}
      />
    );
  });
  return (
    <section className='cards'>
      <div className='container'>{cardsView}</div>
    </section>
  );
};

export default Cards;
