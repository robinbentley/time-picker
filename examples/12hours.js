webpackJsonp([7],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_time_picker_luxon_assets_index_less__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_time_picker_luxon_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_time_picker_luxon_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_luxon__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_luxon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_time_picker_luxon__ = __webpack_require__(9);
/* eslint no-console:0 */










var format = 'h:mm a';

var now = __WEBPACK_IMPORTED_MODULE_3_luxon__["DateTime"].fromObject({ hour: 0, minute: 0 });

function onChange(value) {
  console.log(value && value.toFormat(format));
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_time_picker_luxon__["a" /* default */], {
  showSecond: false,
  defaultValue: now,
  className: 'xxx',
  onChange: onChange,
  format: format,
  use12Hours: true,
  inputReadOnly: true
}), document.getElementById('__react-content'));

/***/ })

},[166]);
//# sourceMappingURL=12hours.js.map