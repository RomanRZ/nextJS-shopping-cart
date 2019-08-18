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
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Total amount:", totalAmount));
};

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ })

})
//# sourceMappingURL=basket.js.04097c95def9a4a58a54.hot-update.js.map