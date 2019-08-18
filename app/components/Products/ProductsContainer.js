import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addProduct } from '../../actions/actions';

class ProductsContainer extends Component {
  addProductHandler = product => {
    this.props.addProduct(product);
  };

  render() {
    const { products } = this.props;
    return <Products products={products} addProductHandler={this.addProductHandler} />;
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: id => dispatch(addProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
