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
var _jsxFileName = "F:\\Programming\\TEST-TASKS\\theadmasters\\admasters\\app\\components\\Basket\\Basket.js";


var Basket = function Basket(_ref) {
  var basket = _ref.basket,
      incrementProductHandler = _ref.incrementProductHandler;
  var totalAmount = basket.reduce(function (amount, product) {
    return amount + product.price * product.quantity;
  }, 0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, basket.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description,
        price = _ref2.price,
        id = _ref2.id,
        quantity = _ref2.quantity;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Price: ", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Quantity: ", quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick(e) {
        e.persist();
        incrementProductHandler(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Delete product"));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Total amount:", totalAmount));
};

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ })

})
//# sourceMappingURL=basket.js.a5c3a3e070c46de2480d.hot-update.js.map