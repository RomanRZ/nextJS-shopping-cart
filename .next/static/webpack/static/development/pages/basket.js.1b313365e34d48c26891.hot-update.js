webpackHotUpdate("static\\development\\pages\\basket.js",{

/***/ "./app/components/Basket/BasketItem/BasketItem.js":
/*!********************************************************!*\
  !*** ./app/components/Basket/BasketItem/BasketItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasketItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketItem.scss */ "./app/components/Basket/BasketItem/BasketItem.scss");
/* harmony import */ var _BasketItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BasketItem_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\Basket\\BasketItem\\BasketItem.js";



var BasketItem = function BasketItem(_ref) {
  var title = _ref.title,
      quantity = _ref.quantity,
      description = _ref.description,
      price = _ref.price,
      id = _ref.id,
      subtractProductHandler = _ref.subtractProductHandler,
      incrementProductHandler = _ref.incrementProductHandler,
      deleteProductHandler = _ref.deleteProductHandler;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "basket-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "basket-item__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "basket-item__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "basket-item__price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Price: ", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "basket-item__quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Quantity: ", quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "basket-item__btn btn basket-item__btn--quantity",
    onClick: function onClick() {
      return subtractProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "basket-item__btn btn basket-item__btn--quantity",
    onClick: function onClick() {
      incrementProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "basket-item__btn btn",
    onClick: function onClick() {
      return deleteProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Delete product"));
};

/* harmony default export */ __webpack_exports__["default"] = (BasketItem);

/***/ })

})
//# sourceMappingURL=basket.js.1b313365e34d48c26891.hot-update.js.map