import React, { useState } from 'react';
import Tabs from './Tabs.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import MyText from './MyText.jsx';
import SelectedTrade from './SelectedTrade.jsx';
import RegisterItem from './RegisterItem.jsx';

const Pages = ({ link, text }) => {
  const [currentPage, setCurrentPage] = useState('home page');
  const [selectedTrade, setSelectedTrade] = useState({});

  return (
  <div>
    <MyText link={link} text={text}/>
    <Tabs setCurrentPage={(e) => { setCurrentPage(e); }}/>
    {(currentPage === 'home page') && (<HomePage setSelectedTrade={(e) => { setSelectedTrade(e); }} setCurrentPage={(e) => {setCurrentPage(e);}} />)}
    {(currentPage === 'profile') && (<Profile />)}
    {(currentPage === 'selected trade') && (<SelectedTrade selectedTrade={selectedTrade}/>)}
    {(currentPage === 'register item') && (<RegisterItem />)}
  </div>
  )
};

export default Pages;