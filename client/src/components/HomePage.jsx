import React from 'react';
import TradeCatalog from './TradeCatalog.jsx';

const HomePage = ({ setSelectedTrade, setCurrentPage }) => {
  return (
    <>
    <h1>
      Home Page
    </h1>
    <TradeCatalog setSelectedTrade={(e) => {setSelectedTrade(e)}} setCurrentPage={(e) => {setCurrentPage(e);}} />
    </>
  );
}

export default HomePage