import React, { Component } from 'react';

const Product = ({ currentProduct: { title, description, price } }) => {
  return (
    <div>
      <h3>Product title: {title}</h3>
      <div>{description}</div>
      <h4>{price}</h4>
    </div>
  );
};

export default Product;
