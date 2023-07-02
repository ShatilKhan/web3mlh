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
  background-color: #1B8FAA;
  flex-direction: column;
  display: flex;
  padding: 5%;
  align-items: center;
  border-radius: 5%;
`;

const ImageBox = styled.div`
height: 40%;
width: 100%;
padding: 10%;
`

const ItemDescription = styled.div`
  height: 40%;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 5%;
`;

const CarouselContainer = styled.div`
width: 50%;
border: solid;
border-color: grey;
background-color: grey;
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
    <CarouselContainer>
        <Carousel onChange={(e) => { setSelectedItem(yourItems[e]) }} >
          {
            yourItems.map((item, index) => (
              <CarouselItem item={item} key={index}/>
            ))
          }
        </Carousel>
    </CarouselContainer>
        <button onClick={() => { setShowModal(true); }}>Select</button>
        {(showModal) && (<SendRequest selectedItem={selectedItem} selectedTrade={selectedTrade} setCurrentPage={(e) => { setCurrentPage(e); }}/>)}
    </>
    )}
    </>
  )
}

export default SelectedTrade