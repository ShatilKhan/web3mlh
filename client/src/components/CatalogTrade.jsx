import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Trade = styled.div`
height: 20%;
width: 20%;
background-color: grey;
margin-bottom: 3%;
display: flex;
flex-direction: column;
padding: 3%;
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

const CatalogTrade = ({ trade, setSelectedTrade, setCurrentPage }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get('https://pixabay.com/api/', {
        params: {
          key: '38018581-c02d3e8b0aa0771ff57be2c88',
          q: trade.img,
          type: 'png',
          safesearch: 'true',
        }
      })
      .then((res) => {
        console.log(res.data.hits[0]);
        setImage(res.data.hits[0].largeImageURL);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [trade]);

  return (
    <Trade onClick={() => {
      setSelectedTrade({
        name: trade.name,
        img: image,
        description: trade.description,
      });
      setCurrentPage('selected trade');
    }}>
      <ImageBox>
      <img src={image} alt="Trade" style={{
        width: '100%',
      }} />
      </ImageBox>
      <ItemDescription>
        <div>{trade.name}</div>
        <div>{trade.description}</div>
      </ItemDescription>
    </Trade>
  );
};

export default CatalogTrade;