webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./app/actions/actions.js":
/*!********************************!*\
  !*** ./app/actions/actions.js ***!
  \********************************/
/*! exports provided: addProduct, incrementProduct, deleteProduct, selectProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProduct", function() { return incrementProduct; });
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
  console.log('id:', id);
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_PRODUCT"],
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

/***/ })

})
//# sourceMappingURL=index.js.05193189c67d7387c635.hot-update.js.map