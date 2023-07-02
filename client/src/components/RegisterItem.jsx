import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 420px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
`;

const Heading1 = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #fff;
`;

const Heading3 = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #fff;
`;

const InputBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 30px 0;
`;

const Input = styled.input`
  width: 800%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Icon = styled.i`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
`;

const RegisterLink = styled.div`
  font-size: 14.5px;
  text-align: center;
  margin-top: 20px 0 15px;

  p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Heading1>Item Marketplace</Heading1>
        <Heading3>Register Item</Heading3>
        <InputBox>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputBox>
        <InputBox>
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </InputBox>
        <InputBox>
          <Input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </InputBox>
        <InputBox>
          <Input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputBox>
        <InputBox>
          <Input type="file" placeholder="choose file" required />
        </InputBox>
        <Button type="submit">Register</Button>
      </form>
      <RegisterLink>
        <p>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Register Link
          </a>
        </p>
      </RegisterLink>
    </Wrapper>
  );
};

export default RegisterItem;