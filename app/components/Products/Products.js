import React from 'react';
import Product from './Product/Product';
import '../../styles/styles.scss';

const Products = ({ products, addProductHandler, selectProductHandler }) => {
  console.log(products)
  return (
    <div className='products'>
      {products.map(product => {
        const { title, description, price, id } = product;
        return (
          <div onClick={() => selectProductHandler(product)} className='products__item' key={id}>
            <Product title={title} description={description} price={price} />
            <button className='products__btn btn' onClick={() => addProductHandler(product)}>
              Add product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
