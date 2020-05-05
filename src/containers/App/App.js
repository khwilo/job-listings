import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import data from '../../utils/data.json';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
  const [jobs] = useState(data);
  const [filters, setFilters] = useState([]);

  const selected = (items) => {
    setFilters(items);
  };

  return (
    <div className='wrapper'>
      <Header />
      <SearchField selected={selected} />
      <Cards data={jobs} filters={filters} />
    </div>
  );
}

export default App;
