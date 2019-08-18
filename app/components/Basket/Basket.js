import React from 'react';

const Basket = ({ basket, incrementProductHandler, subtractProductHandler }) => {
  const totalAmount = basket.reduce((amount, product) => {
    return amount + product.price * product.quantity;
  }, 0);

  return (
    <div className='basket'>
      {basket.map(({ title, description, price, id, quantity }) => {
        console.log(id);
        return (
          <div key={id}>
            <h3>{title}</h3>
            <div>{description}</div>
            <h4>Price: {price}</h4>
            <h4>Quantity: {quantity}</h4>
            <button onClick={() => subtractProductHandler(id)}>-</button>
            <button
              onClick={() => {
                incrementProductHandler(id);
              }}
            >
              +
            </button>
            <button>Delete product</button>
          </div>
        );
      })}
      <div>Total amount:{totalAmount}</div>
    </div>
  );
};

export default Basket;
