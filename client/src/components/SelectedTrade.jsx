import React, { useState } from 'react';
import styled from 'styled-components';
import yourItems from './mockData/yourItems.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from './CarouselItem.jsx';
import SendRequest from './SendRequest.jsx';

const Trade = styled.div`
  height: 40%;
  width: 50%;
  background-color: grey;
  flex-direction: column;
  display: flex;
  padding: 5%;
  align-items: center;
`;

const ImageBox = styled.div`
height: 40%;
width: 100%;
padding: 10%;
`

const ItemDescription = styled.div`
  height: 40%;
  width: 100%;
`;

const SelectedTrade = ({ selectedTrade, setCurrentPage }) => {

  const [page, setPage] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(yourItems[0]);

  return (
    <>
    {(page === 'overview') && (
      <>
    <Trade>
      <ImageBox>
        <img src={selectedTrade.img} alt="Trade" style={{
          width: '50%',
        }}/>
      </ImageBox>
      <ItemDescription>
        <div>
          {selectedTrade.name}
        </div>
        <div>
          {selectedTrade.description}
        </div>
      </ItemDescription>
    </Trade>
    <button onClick={() => { setPage('trading') }}>Trade</button>
    </>
    )}
    {(page === 'trading') && (
      <>
            <Trade>
      <ImageBox>
        <img src={selectedTrade.img} alt="Trade" style={{
          width: '50%',
        }}/>
      </ImageBox>
      <ItemDescription>
        <div>
          {selectedTrade.name}
        </div>
        <div>
          {selectedTrade.description}
        </div>
      </ItemDescription>
    </Trade>
    <div>Your Items to Trade</div>
        <Carousel onChange={(e) => { setSelectedItem(yourItems[e]) }}>
          {
            yourItems.map((item, index) => (
              <CarouselItem item={item} key={index}/>
            ))
          }
        </Carousel>
        <button onClick={() => { setShowModal(true); }}>Select</button>
        {(showModal) && (<SendRequest selectedItem={selectedItem} selectedTrade={selectedTrade} setCurrentPage={(e) => { setCurrentPage(e); }}/>)}
    </>
    )}
    </>
  )
}

export default SelectedTrade