import React from 'react';
import catalogTrades from './mockData/catalogTrades';
import CatalogTrade from './CatalogTrade.jsx';

const TradeCatalog = ({setSelectedTrade, setCurrentPage}) => {

  return (
    <>
      {catalogTrades.map((trade, index) => (
        <CatalogTrade trade={trade} key={index} setSelectedTrade={(e) => {setSelectedTrade(e)}} setCurrentPage={(e) => {setCurrentPage(e);}}/>
      ))}
    </>
  );
};

export default TradeCatalog;