import React from 'react';

const Product = ({ selectedProduct, selectedProduct: { title, description, price }, addProductHandler }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <h4>Price: {price}</h4>
      <button onClick={() => addProductHandler(selectedProduct)}>Add product</button>
    </div>
  );
};

export default Product;
