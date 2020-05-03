import React from 'react';

import './SearchField.css';

const SearchField = ({ value, handleChange }) => {
  return (
    <div className='searchField container'>
      <div className='searchFieldWrapper'>
        <input
          className='searchInput'
          type='text'
          value={value}
          onChange={handleChange}
        />
        {/* <button className='clearBtn'>clear</button> */}
      </div>
    </div>
  );
};

export default SearchField;
