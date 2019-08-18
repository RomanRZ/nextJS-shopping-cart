import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addProduct, selectProduct } from '../../actions/actions';
import './Products.scss';

class ProductsContainer extends Component {
  addProductHandler = product => {
    const newProduct = { ...product, quantity: 1 };
    this.props.addProduct(newProduct);
  };

  selectProductHandler = product => {
    this.props.selectProduct(product);
  };

  render() {
    const { products } = this.props;
    return (
      <Products
        products={products}
        addProductHandler={this.addProductHandler}
        selectProductHandler={this.selectProductHandler}
      />
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product)),
    selectProduct: id => dispatch(selectProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
