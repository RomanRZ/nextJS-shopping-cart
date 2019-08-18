webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\Products\\Products.js";




var Products = function Products(_ref) {
  var products = _ref.products,
      addProductHandler = _ref.addProductHandler,
      selectProductHandler = _ref.selectProductHandler;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, products.map(function (product) {
    var title = product.title,
        description = product.description,
        price = product.price,
        id = product.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: function onClick() {
        return selectProductHandler(product);
      },
      className: "products__item",
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: title,
      description: description,
      price: price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "products__btn btn",
      onClick: function onClick() {
        return addProductHandler(product);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Add product"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.766b40575a96ec9c6faf.hot-update.js.map