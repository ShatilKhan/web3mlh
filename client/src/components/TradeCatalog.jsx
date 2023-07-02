import React from 'react';
import catalogTrades from './mockData/catalogTrades';
import CatalogTrade from './CatalogTrade.jsx';

const TradeCatalog = () => {

  return (
    <>
      {catalogTrades.map((trade) => (
        <CatalogTrade trade={trade} key={trade.id} />
      ))}
    </>
  );
};

export default TradeCatalog;