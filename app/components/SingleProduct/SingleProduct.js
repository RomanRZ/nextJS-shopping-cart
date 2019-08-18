import React from 'react';
import './SingleProduct.scss';

const SingleProduct = ({ selectedProduct, selectedProduct: { title, description, price }, addProductHandler }) => {
  return (
    <div className='single-product'>
      <h3 className='single-product__title'>{title}</h3>
      <div className='single-product__description'>{description}</div>
      <h4 className='single-product__price'>Price: {price}</h4>
      <button className='single-product__btn btn' onClick={() => addProductHandler(selectedProduct)}>
        Add product
      </button>
    </div>
  );
};

export default SingleProduct;
