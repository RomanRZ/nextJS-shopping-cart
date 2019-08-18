import React from 'react';
import Link from 'next/link';
import './Product.scss';

const Product = ({ title, description, price }) => {
  return (
    <Link href='/selectedProduct'>
      <div className='product'>
        <h3 className='product__title'>{title}</h3>
        <div className='product__description'>{description}</div>
        <h4 className='product__price'>Price: {price}</h4>
      </div>
    </Link>
  );
};

export default Product;
