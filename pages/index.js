import React from 'react';
import Navbar from '../app/components/Navbar/Navbar';

import { connect } from 'react-redux';
// import { startClock, serverRenderClock } from '../store';
import ProductsContainer from '../app/components/Products/ProductsContainer';

export default class index extends React.Component {
  // static getInitialProps ({ reduxStore, req }) {
  //   const isServer = !!req
  //   // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  //   reduxStore.dispatch(serverRenderClock(isServer))

  //   return {}
  // }

  render() {
    return (
      <>
        <Navbar />
        <ProductsContainer />;
      </>
    );
  }
}
// const mapDispatchToProps = { startClock };
// export default connect(
//   null,
//   mapDispatchToProps
// )(Index);
