import React from 'react';
import TradeCatalog from './TradeCatalog.jsx';

const HomePage = ({ setSelectedTrade, setCurrentPage }) => {
  return (
    <>
    <div>
      This is the Home Page
    </div>
    <TradeCatalog setSelectedTrade={(e) => {setSelectedTrade(e)}} setCurrentPage={(e) => {setCurrentPage(e);}} />
    </>
  );
}

export default HomePage