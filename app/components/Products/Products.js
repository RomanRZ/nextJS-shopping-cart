import React from 'react';
import Link from 'next/link';

const Products = ({ products, addProductHandler, selectProductHandler }) => {
  return (
    <div className='products'>
      {products.map(product => {
        const { title, description, price, id } = product;
        return (
          <div onClick={() => selectProductHandler(product)} className='product' key={id}>
            <Link href='/selectedProduct'>
              <div>
                <h3>{title}</h3>
                <div>{description}</div>
                <h4>Price: {price}</h4>
              </div>
            </Link>
            <button onClick={() => addProductHandler(product)}>Add product</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
