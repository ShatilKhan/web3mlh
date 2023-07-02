import React, { useState } from 'react';
import styled from 'styled-components';
import yourItems from './mockData/yourItems.js';
import { Carousel } from 'react-responsive-carousel';

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

const CarouselItem = styled.div`
background-color: grey;
width: 100px;
height: 100px;
margin: 5%;
`

const SelectedTrade = ({ selectedTrade }) => {

  const [page, setPage] = useState('overview');

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
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
    </>
    )}
    </>
  )
}

export default SelectedTrade