import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Modal = styled.div`
background-color: purple;
position: fixed;
height: 80%;
width: 80%;
z-index: 2;
top: 10%;
left: 10%;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 5%;
`;

const Trades = styled.div`
height: 80%;
width: 94%;
left: 3%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Trade = styled.div`
height: 70%;
width: 30%;
background-color: #1B8FAA;
display: flex;
flex-direction: column;
padding: 3%;
align-items: center;
margin: 5%;
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

const confirmButton = styled.div`
  width: 60%;
    align-self: center;
    height: 5%;
`;

const SendRequest = ({ selectedItem, selectedTrade, setCurrentPage }) => {
  const [image, setImage] = useState('');

    useEffect(() => {
      axios
        .get('https://pixabay.com/api/', {
          params: {
            key: '38018581-c02d3e8b0aa0771ff57be2c88',
            q: selectedItem.img,
            type: 'png',
            safesearch: 'true',
          }
        })
        .then((res) => {
          console.log(selectedItem);
          setImage(res.data.hits[0].largeImageURL);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [selectedItem]);

  return (
    <Modal>
      <Trades>
        <Trade>
          <ImageBox>
          <img src={selectedTrade.img} alt="Trade" style={{
        width: '100%',
      }} />
          </ImageBox>
      <ItemDescription>
        <div>{selectedTrade.name}</div>
        <div>{selectedTrade.description}</div>
      </ItemDescription>
        </Trade>
        <Trade>
          <ImageBox>
          <img src={image} alt="Trade" style={{
        width: '100%',
      }} />
          </ImageBox>
      <ItemDescription>
        <div>{selectedItem.name}</div>
        <div>{selectedItem.description}</div>
      </ItemDescription>
        </Trade>
      </Trades>
      <confirmButton onClick={() => { setCurrentPage('home page') }}>confirm</confirmButton>
    </Modal>
  )
}

export default SendRequest;