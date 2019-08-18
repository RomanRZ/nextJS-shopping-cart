webpackHotUpdate("static\\development\\pages\\selectedProduct.js",{

/***/ "./app/components/SingleProduct/SingleProduct.js":
/*!*******************************************************!*\
  !*** ./app/components/SingleProduct/SingleProduct.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.scss */ "./app/components/SingleProduct/SingleProduct.scss");
/* harmony import */ var _SingleProduct_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SingleProduct_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\SingleProduct\\SingleProduct.js";



var SingleProduct = function SingleProduct(_ref) {
  var selectedProduct = _ref.selectedProduct,
      _ref$selectedProduct = _ref.selectedProduct,
      title = _ref$selectedProduct.title,
      description = _ref$selectedProduct.description,
      price = _ref$selectedProduct.price,
      addProductHandler = _ref.addProductHandler;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "single-product__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-product__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "single-product__price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Price: ", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "single-product__btn btn",
    onClick: function onClick() {
      return addProductHandler(selectedProduct);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Add product"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

/***/ })

})
//# sourceMappingURL=selectedProduct.js.9b96e9c303efedd7c4db.hot-update.js.map