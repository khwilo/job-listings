import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='banner'
        srcSet='images/bg-header-mobile.svg 375w, images/bg-header-desktop.svg 1366w'
        src='images/bg-header-mobile.svg'
        alt='cyan pattern banner'
      />
    </header>
  );
};

export default Header;
