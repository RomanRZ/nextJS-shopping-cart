import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import { addProduct } from '../../actions/actions';

class SingleProductContainer extends Component {
  addProductHandler = product => {
    const newProduct = { ...product, quantity: 1 };
    this.props.addProduct(newProduct);
  };

  render() {
    const { selectedProduct } = this.props;
    return <SingleProduct selectedProduct={selectedProduct} addProductHandler={this.addProductHandler} />;
  }
}

const mapStateToProps = ({ selectedProduct }) => {
  return {
    selectedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
