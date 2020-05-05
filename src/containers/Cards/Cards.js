import React from 'react';

import Card from '../../components/Card/Card';
import './Cards.css';

const Cards = ({ data, filters }) => {
  const filterObj = {
    role: '',
    level: '',
    contract: '',
    location: '',
    languages: [],
    tools: [],
  };

  filters.forEach((value) => {
    if (value === 'Frontend' || value === 'Fullstack' || value === 'Backend') {
      filterObj['role'] = value;
    }

    if (value === 'Senior' || value === 'Midweight' || value === 'Junior') {
      filterObj.level = value;
    } else if (
      value === 'Full Time' ||
      value === 'Part Time' ||
      value === 'Contract'
    ) {
      filterObj['contract'] = value;
    } else if (
      value === 'USA Only' ||
      value === 'Remote' ||
      value === 'Worldwide' ||
      value === 'UK Only'
    ) {
      filterObj['location'] = value;
    } else if (
      value === 'HTML' ||
      value === 'CSS' ||
      value === 'JavaScript' ||
      value === 'Python'
    ) {
      filterObj['languages'] = [...filterObj['languages'], value];
    } else if (
      value === 'React' ||
      value === 'Sass' ||
      value === 'Ruby' ||
      value === 'RoR' ||
      value === 'Vue' ||
      value === 'Django'
    ) {
      filterObj['tools'] = [...filterObj['tools'], value];
    }
  });

  const filteredJobs =
    filters.length !== 0
      ? data.filter((job) => {
          let result = false;
          for (let key in job) {
            if (filterObj[key] && job[key] === filterObj[key]) {
              result = true;
            }
          }
          return result;
        })
      : data;

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
