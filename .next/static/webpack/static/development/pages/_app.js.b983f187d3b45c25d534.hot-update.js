webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./app/reducers/basketReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/basketReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./app/actions/actions.js");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/types */ "./app/types/types.js");




var initialState = [];

var basketReducer = function basketReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_types__WEBPACK_IMPORTED_MODULE_3__["ADD_PRODUCT"]:
      var found = state.find(function (product) {
        return product.id === action.payload.id;
      });

      if (found) {
        return state;
      }

      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [action.payload]);

    case types.INCREMENT_PRODUCT:
      var newState = state.map(function (product) {
        if (product.id === action.payload.id) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product, {
            quantity: product.quantity + 1
          });
        }

        return product;
      });
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (basketReducer);

/***/ })

})
//# sourceMappingURL=_app.js.b983f187d3b45c25d534.hot-update.js.map