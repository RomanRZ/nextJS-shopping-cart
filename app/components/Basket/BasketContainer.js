import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { incrementProduct, subtractProduct, deleteProduct } from '../../actions/actions';

class BasketContainer extends Component {
  incrementProductHandler = id => {
    this.props.incrementProduct(id);
  };
  subtractProductHandler = id => {
    this.props.subtractProduct(id);
  };
  deleteProductHandler = id => {
    this.props.deleteProduct(id);
  };

  render() {
    const { basket } = this.props;
    return (
      <Basket
        basket={basket}
        incrementProductHandler={this.incrementProductHandler}
        subtractProductHandler={this.subtractProductHandler}
        deleteProductHandler={this.deleteProductHandler}
      />
    );
  }
}

const mapStateToProps = ({ basket }) => {
  return {
    basket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementProduct: id => dispatch(incrementProduct(id)),
    subtractProduct: id => dispatch(subtractProduct(id)),
    deleteProduct: id => dispatch(deleteProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketContainer);
