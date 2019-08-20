webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/components/Products/Products.js":
/*!*********************************************!*\
  !*** ./app/components/Products/Products.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product/Product */ "./app/components/Products/Product/Product.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/styles.scss */ "./app/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/Desktop/rabcheniuk/nextJS-shopping-cart/app/components/Products/Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Products = function Products(_ref) {
  var products = _ref.products,
      addProductHandler = _ref.addProductHandler,
      selectProductHandler = _ref.selectProductHandler;
  console.log(products);
  return __jsx("div", {
    className: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, products.map(function (product) {
    var title = product.title,
        description = product.description,
        price = product.price,
        id = product.id;
    return __jsx("div", {
      onClick: function onClick() {
        return selectProductHandler(product);
      },
      className: "products__item",
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: title,
      description: description,
      price: price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("button", {
      className: "products__btn btn",
      onClick: function onClick() {
        return addProductHandler(product);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Add product"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.bc926804437881474f58.hot-update.js.map