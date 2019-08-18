import React, { Component } from 'react';
import AddBtn from '../sharedUI/AddBtn/AddBtn';

const Products = ({ products, addProductHandler }) => {
  return (
    <div className='products'>
      {products.map(product => {
        const { title, description, price, id } = product;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <div>{description}</div>
            <h4>Price: {price}</h4>
            <AddBtn product={product} addProductHandler={addProductHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
