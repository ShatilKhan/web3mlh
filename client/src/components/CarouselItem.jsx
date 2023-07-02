import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Item = styled.div`
background-color: #1B8FAA;
width: 300px;
margin: 5%;
display: flex;
flex-direction: column;
align-content: center;
border-radius: 5%;
`
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

const CarouselItem = ({ item }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get('https://pixabay.com/api/', {
        params: {
          key: '38018581-c02d3e8b0aa0771ff57be2c88',
          q: item.img,
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
  }, [item]);

  return (
    <Item>
      <ImageBox>
      <img src={image} alt="Trade" style={{
        width: '100%',
      }} />
      </ImageBox>
      <ItemDescription>
        <div>item.name</div>
        <div>item.description</div>
      </ItemDescription>
    </Item>
  )
}

export default CarouselItem;