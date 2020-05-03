import React from 'react';

import jobs from '../../utils/data.json';

import Header from '../../components/Header/Header';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Cards data={jobs} />
    </div>
  );
}

export default App;
