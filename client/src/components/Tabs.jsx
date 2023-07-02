import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.button`

`

const Tabs = ({ setCurrentPage }) => {

  return (
  <Bar>
    <Tab onClick={() => { setCurrentPage('home page'); }}>
      Home Page
    </Tab>
    <Tab onClick={() => { setCurrentPage('profile'); }}>
      Profile
    </Tab>
  </Bar>
  )

};

export default Tabs