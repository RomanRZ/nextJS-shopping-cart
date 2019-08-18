import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { incrementProduct, subtractProduct } from '../../actions/actions';

class BasketContainer extends Component {
  incrementProductHandler = id => {
    this.props.incrementProduct(id);
  };
  subtractProductHandler = id => {
    this.props.subtractProduct(id);
  };

  render() {
    const { basket } = this.props;
    return (
      <Basket
        basket={basket}
        incrementProductHandler={this.incrementProductHandler}
        subtractProductHandler={this.subtractProductHandler}
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
    incrementProduct: id => {
      dispatch(incrementProduct(id));
    },
    subtractProduct: id => {
      dispatch(subtractProduct(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketContainer);
