webpackHotUpdate("static\\development\\pages\\basket.js",{

/***/ "./app/components/Basket/Basket.js":
/*!*****************************************!*\
  !*** ./app/components/Basket/Basket.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasketItem_BasketItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketItem/BasketItem */ "./app/components/Basket/BasketItem/BasketItem.js");
/* harmony import */ var _Basket_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basket.scss */ "./app/components/Basket/Basket.scss");
/* harmony import */ var _Basket_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Basket_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\Basket\\Basket.js";




var Basket = function Basket(_ref) {
  var basket = _ref.basket,
      incrementProductHandler = _ref.incrementProductHandler,
      subtractProductHandler = _ref.subtractProductHandler,
      deleteProductHandler = _ref.deleteProductHandler;
  var totalAmount = basket.reduce(function (amount, product) {
    return amount + product.price * product.quantity;
  }, 0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, basket.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description,
        price = _ref2.price,
        id = _ref2.id,
        quantity = _ref2.quantity;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasketItem_BasketItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      title: title,
      description: description,
      price: price,
      id: id,
      quantity: quantity,
      subtractProductHandler: subtractProductHandler,
      incrementProductHandler: incrementProductHandler,
      deleteProductHandler: deleteProductHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }) // <div key={id}>
    //   <h3>{title}</h3>
    //   <div>{description}</div>
    //   <h4>Price: {price}</h4>
    //   <h4>Quantity: {quantity}</h4>
    //   <button onClick={() => subtractProductHandler(id)}>-</button>
    //   <button
    //     onClick={() => {
    //       incrementProductHandler(id);
    //     }}
    //   >
    //     +
    //   </button>
    //   <button onClick={() => deleteProductHandler(id)}>Delete product</button>
    // </div>
    ;
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Total amount:", totalAmount));
};

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

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
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\Basket\\BasketItem\\BasketItem.js";


var BasketItem = function BasketItem(_ref) {
  var title = _ref.title,
      quantity = _ref.quantity,
      description = _ref.description,
      price = _ref.price,
      subtractProductHandler = _ref.subtractProductHandler,
      incrementProductHandler = _ref.incrementProductHandler,
      deleteProductHandler = _ref.deleteProductHandler;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Price: ", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Quantity: ", quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return subtractProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      incrementProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return deleteProductHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Delete product"));
};

/* harmony default export */ __webpack_exports__["default"] = (BasketItem);

/***/ })

})
//# sourceMappingURL=basket.js.c39acef57ed7beba5abd.hot-update.js.map