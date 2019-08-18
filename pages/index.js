import React from 'react';
import Navbar from '../app/components/Navbar/Navbar';
import ProductsContainer from '../app/components/Products/ProductsContainer';

export default class index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <ProductsContainer />;
      </>
    );
  }
}
