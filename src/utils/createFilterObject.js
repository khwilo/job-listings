const createFilterObject = (filters) => {
  const filterObject = {
    role: '',
    level: '',
    contract: '',
    location: '',
    languages: [],
    tools: [],
  };

  filters.forEach((value) => {
    if (value === 'Frontend' || value === 'Fullstack' || value === 'Backend') {
      filterObject['role'] = value;
    } else if (
      value === 'Senior' ||
      value === 'Midweight' ||
      value === 'Junior'
    ) {
      filterObject.level = value;
    } else if (
      value === 'Full Time' ||
      value === 'Part Time' ||
      value === 'Contract'
    ) {
      filterObject['contract'] = value;
    } else if (
      value === 'USA Only' ||
      value === 'Remote' ||
      value === 'Worldwide' ||
      value === 'UK Only'
    ) {
      filterObject['location'] = value;
    } else if (
      value === 'HTML' ||
      value === 'CSS' ||
      value === 'JavaScript' ||
      value === 'Python'
    ) {
      filterObject['languages'] = [...filterObject['languages'], value];
    } else if (
      value === 'React' ||
      value === 'Sass' ||
      value === 'Ruby' ||
      value === 'RoR' ||
      value === 'Vue' ||
      value === 'Django'
    ) {
      filterObject['tools'] = [...filterObject['tools'], value];
    }
  });

  return filterObject;
};

export default createFilterObject;
