webpackHotUpdate("static\\development\\pages\\basket.js",{

/***/ "./app/actions/actions.js":
/*!********************************!*\
  !*** ./app/actions/actions.js ***!
  \********************************/
/*! exports provided: addProduct, incrementProduct, subtractProduct, deleteProduct, selectProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProduct", function() { return incrementProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractProduct", function() { return subtractProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProduct", function() { return selectProduct; });
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/types */ "./app/types/types.js");

var addProduct = function addProduct(product) {
  product.quantity = 1;
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCT"],
    payload: product
  };
};
var incrementProduct = function incrementProduct(id) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_PRODUCT"],
    payload: id
  };
};
var subtractProduct = function subtractProduct(id) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["SUBTRACT_PRODUCT"],
    payload: id
  };
};
var deleteProduct = function deleteProduct(product) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_PRODUCT"],
    payload: product
  };
};
var selectProduct = function selectProduct(id) {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["SELECT_PRODUCT"],
    payload: id
  };
};

/***/ }),

/***/ "./app/types/types.js":
/*!****************************!*\
  !*** ./app/types/types.js ***!
  \****************************/
/*! exports provided: ADD_PRODUCT, INCREMENT_PRODUCT, SUBTRACT_PRODUCT, DELETE_PRODUCT, SELECT_PRODUCT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT", function() { return ADD_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_PRODUCT", function() { return INCREMENT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBTRACT_PRODUCT", function() { return SUBTRACT_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT", function() { return DELETE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT", function() { return SELECT_PRODUCT; });
var ADD_PRODUCT = 'ADD_PRODUCT';
var INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
var SUBTRACT_PRODUCT = 'SUBTRACT_PRODUCT';
var DELETE_PRODUCT = 'DELETE_PRODUCT';
var SELECT_PRODUCT = 'SELECT_PRODUCT';

/***/ })

})
//# sourceMappingURL=basket.js.ac891b8ebc47c448936f.hot-update.js.map