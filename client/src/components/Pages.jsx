import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import MyText from './MyText.jsx';
import SelectedTrade from './SelectedTrade.jsx';
import RegisterItem from './RegisterItem.jsx';

const PagesWrapper = styled.div`
  margin-top: 20px;
`;

const Pages = ({ link, text }) => {
  const [currentPage, setCurrentPage] = useState('home page');
  const [selectedTrade, setSelectedTrade] = useState({});

  return (
    <PagesWrapper>
      <MyText link={link} text={text} />
      <Tabs setCurrentPage={(e) => setCurrentPage(e)} />
      {currentPage === 'home page' && (
        <HomePage
          setSelectedTrade={(e) => setSelectedTrade(e)}
          setCurrentPage={(e) => setCurrentPage(e)}
        />
      )}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'selected trade' && (
        <SelectedTrade
          selectedTrade={selectedTrade}
          setCurrentPage={(e) => setCurrentPage(e)}
        />
      )}
      {currentPage === 'register item' && <RegisterItem />}
    </PagesWrapper>
  );
};

export default Pages;