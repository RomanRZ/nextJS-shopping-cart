import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = ({ currentProduct }) => {
  return {
    currentProduct
  };
};

const ProductContainer = connect(mapStateToProps)(Product);
export default ProductContainer;
