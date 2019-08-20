import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addProduct, selectProduct,fetchProducts } from '../../actions/actions';
import './Products.scss';

class ProductsContainer extends Component {
  addProductHandler = product => {
    const newProduct = { ...product, quantity: 1 };
    this.props.addProduct(newProduct);
  };

  selectProductHandler = product => {
    this.props.selectProduct(product);
  };

  componentDidMount() {
    this.props.fetchProducts("http://192.168.88.72:8081/api/product")
  }

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
    selectProduct: id => dispatch(selectProduct(id)),
    fetchProducts: (url) => dispatch(fetchProducts(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
