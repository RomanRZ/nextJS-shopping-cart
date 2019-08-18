import React from 'react';
import './BasketItem.scss';

const BasketItem = ({
  title,
  quantity,
  description,
  price,
  id,
  subtractProductHandler,
  incrementProductHandler,
  deleteProductHandler
}) => {
  return (
    <div className='basket-item'>
      <h3 className='basket-item__title'>{title}</h3>
      <div className='basket-item__description'>{description}</div>
      <h4 className='basket-item__price'>Price: {price}</h4>
      <h4 className='basket-item__quantity'>Quantity: {quantity}</h4>
      <button className='basket-item__btn btn basket-item__btn--quantity' onClick={() => subtractProductHandler(id)}>
        -
      </button>
      <button
        className='basket-item__btn btn basket-item__btn--quantity'
        onClick={() => {
          incrementProductHandler(id);
        }}
      >
        +
      </button>
      <button className='basket-item__btn btn' onClick={() => deleteProductHandler(id)}>
        Delete product
      </button>
    </div>
  );
};

export default BasketItem;
