import React from 'react';

import Card from '../../components/Card/Card';
import './Cards.css';

const Cards = ({ data, searchTerm }) => {
  const searchList = [];
  searchList.push(searchTerm.toLowerCase());

  console.log('List: ', searchList);

  const filters = searchList[0].split(' ');
  console.log('Filters: ', filters);

  const filteredJobs = searchTerm
    ? data.filter((job) => job.role.toLowerCase() === filters[0])
    : data;

  console.log('FiltersJOBS: ', filteredJobs);

  const cardsView = filteredJobs.map((job) => {
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
