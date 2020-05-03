import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import data from '../../utils/data.json';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
  const [jobs, setJobs] = useState(data);

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('Value: ', value);
  };

  return (
    <div className='wrapper'>
      <Header />
      <SearchField handleChange={handleChange} />
      <Cards data={jobs} />
    </div>
  );
}

export default App;
