import React from 'react';
import BasketItem from './BasketItem/BasketItem';
import BasketForm from './BasketForm/BasketFormContainer';
import './Basket.scss';

const Basket = ({ basket, incrementProductHandler, subtractProductHandler, deleteProductHandler }) => {
  const totalAmount = basket.reduce((amount, product) => {
    return amount + product.price * product.quantity;
  }, 0);

  return (
    <div className='basket'>
      <BasketForm/>
      {basket.map(({ title, description, price, id, quantity }) => {
        return (
          <BasketItem
            key={id}
            title={title}
            description={description}
            price={price}
            id={id}
            quantity={quantity}
            subtractProductHandler={subtractProductHandler}
            incrementProductHandler={incrementProductHandler}
            deleteProductHandler={deleteProductHandler}
          />
        );
      })}
      <div>Total amount:{totalAmount}</div>
    </div>
  );
};

export default Basket;
