import React from 'react';

const AddBtn = ({ addProductHandler, product }) => {
  return <button onClick={() => addProductHandler(product)}>Add product</button>;
};

export default AddBtn;
