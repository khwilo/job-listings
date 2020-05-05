import React, { useState, useEffect } from 'react';

import './SearchField.css';

const SearchField = ({ value, selected }) => {
  const [filters, setFilters] = useState([]);

  const addFilters = (event) => {
    if (event.target.value !== '' && !filters.includes(event.target.value)) {
      setFilters([...filters, event.target.value]);
      selected([...filters, event.target.value]);
      event.target.value = '';
    }
  };

  const removeFilter = (indexToRemove) => {
    setFilters(filters.filter((_, index) => index !== indexToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    selected(filters);
  }, [filters, selected]);

  return (
    <div className='searchField container'>
      <div className='filters'>
        <ul className='filters__list'>
          {filters.map((filter, index) => {
            return (
              <li key={index} className='filters__item'>
                <span className='filter'>{filter}</span>
                <button
                  className='closeBtn'
                  onClick={() => removeFilter(index)}
                >
                  <i className='fa fa-times' aria-hidden='true'></i>
                </button>
              </li>
            );
          })}
        </ul>
        <input
          className='searchInput'
          type='text'
          value={value}
          placeholder='Press enter to add filters'
          onKeyUp={(event) =>
            event.key === 'Enter' ? addFilters(event) : null
          }
        />
        <button
          className='clearBtn'
          onClick={clearFilters}
          disabled={filters.length === 0}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchField;
