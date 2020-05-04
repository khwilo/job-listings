import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import data from '../../utils/data.json';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
  const [jobs, updateJobs] = useState(data);
  const [searchTerm, updateSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    updateSearchTerm(value);
  };

  return (
    <div className='wrapper'>
      <Header />
      <SearchField handleChange={handleChange} />
      <Cards data={jobs} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
