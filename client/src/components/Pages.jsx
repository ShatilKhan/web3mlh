import React, { useState } from 'react';
import Tabs from './Tabs.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';

const Pages = () => {
  const [currentPage, setCurrentPage] = useState('home page');

  return (
  <div>
    <Tabs setCurrentPage={(e) => { setCurrentPage(e); }}/>
    {(currentPage === 'home page') && (<HomePage />)}
    {(currentPage === 'profile') && (<Profile />)}
  </div>
  )
};

export default Pages;