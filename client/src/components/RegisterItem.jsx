import React from 'react';

const RegisterItem = () => {
return (
  <>
      <form id="registerForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/><br/><br/>

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea><br/><br/>

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity"/><br/><br/>

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price"/><br/><br/>

        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo"/><br/><br/>

        <button type="submit">Register</button>
    </form>

    <h2>Items for Trade</h2>
    <div id="itemsList"></div>
  </>
)
};

export default RegisterItem;