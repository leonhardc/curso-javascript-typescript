/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/modules/Login.js"
/*!***********************************!*\
  !*** ./frontend/modules/Login.js ***!
  \***********************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Login = exports["default"] = /*#__PURE__*/function () {
  function Login(formClass) {
    _classCallCheck(this, Login);
    this.form = document.querySelector(formClass);
  }
  return _createClass(Login, [{
    key: "init",
    value: function init() {
      this.events();
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;
      if (!this.form) return;
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        _this.validate(e);
      });
    }
  }, {
    key: "validate",
    value: function validate(e) {
      var el = e.target;
      var emailInput = el.querySelector('input[name="email"]');
      var passwordInput = el.querySelector('input[name="password"]');
      var error = false;
      if (!this.validateEmail(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        error = true;
      } else {
        emailInput.style.borderColor = '';
      }
      if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
        passwordInput.style.borderColor = 'red';
        error = true;
      } else {
        passwordInput.style.borderColor = '';
      }
      if (!error) el.submit();
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }]);
}();

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/


var _Login = _interopRequireDefault(__webpack_require__(/*! ./modules/Login */ "./frontend/modules/Login.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var login = new _Login["default"]('.form-login');
login.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map