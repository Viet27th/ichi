webpackHotUpdate("static/development/pages/admin/create-post.js",{

/***/ "./components/login/index.js":
/*!***********************************!*\
  !*** ./components/login/index.js ***!
  \***********************************/
/*! exports provided: LoginComponentEvolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentEvolution", function() { return LoginComponentEvolution; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./components/login/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/axios.service */ "./services/axios.service.js");
/* harmony import */ var _services_regex_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/regex.service */ "./services/regex.service.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/spinner */ "./components/spinner/index.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/cookie.service */ "./services/cookie.service.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../middleware */ "./middleware/index.js");
/* harmony import */ var _services_express_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/express_api.service */ "./services/express_api.service.js");







var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/login/index.js";














var LoginComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginComponent, _React$Component);

  function LoginComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginComponent).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      var target = e.target;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      if (!Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_14__["regexEmail"])(_this.state.email) || _this.state.email.trim() === '') {
        _components_alert__WEBPACK_IMPORTED_MODULE_15__["AlertComponentEvolution"].show('Email không chính xác.');
      } else if (_this.state.password.trim() === '') {
        _components_alert__WEBPACK_IMPORTED_MODULE_15__["AlertComponentEvolution"].show('Password không được để trống.');
      } else {
        _components_spinner__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponentEvolution"].show();
        Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_13__["axiosInstance"])().post(_services_express_api_service__WEBPACK_IMPORTED_MODULE_19__["express_api"].webLoginTraditionalUrl, {
          email: _this.state.email,
          password: _this.state.password
        }).then(function (result) {
          _components_spinner__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponentEvolution"].hide();

          if (result.data.requestSuccessfully) {
            // Set cookie client
            _services_cookie_service__WEBPACK_IMPORTED_MODULE_17__["default"].clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond);
            var el = document.getElementById('dirtyWayToInjectLoginComponent');

            if (el) {
              document.body.style.overflow = null;
              react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(el);
              document.body.removeChild(el);
            }
          } else {
            _components_alert__WEBPACK_IMPORTED_MODULE_15__["AlertComponentEvolution"].show(result.data.message);
          }
        }).catch(function (error) {
          _components_spinner__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponentEvolution"].hide();
          console.log(error);
          _components_alert__WEBPACK_IMPORTED_MODULE_15__["AlertComponentEvolution"].show(error.message);
        });
      }
    });

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "wrapped-login",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "login",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        name: "email",
        placeholder: "Email",
        type: "text",
        value: this.state.email,
        onChange: this.handleChange,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        name: "password",
        placeholder: "Password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + 'social pt-5 pb-3 d-flex justify-content-center align-items-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + 'twitter cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + 'facebook cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "fab fa-facebook-f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + 'google-plus cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "fab fa-google-plus-g",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + 'youtube cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "submit",
        value: "Login",
        onClick: this.handleSubmit,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_10__["default"]));
    }
    /**
     * Refer: https://medium.freecodecamp.org/what-i-wish-i-knew-when-i-started-to-work-with-react-js-3ba36107fd13
     * @param e
     */

  }]);

  return LoginComponent;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/**
 *
 */


var show = function show() {
  // if (!document.getElementById('dirtyWayToInjectLoginComponent')) {
  document.body.style.overflow = 'hidden';
  var el = document.createElement('div');
  el.setAttribute('id', 'dirtyWayToInjectLoginComponent');
  react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoginComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), document.body.appendChild(el)); // }
};
/**
 *
 * @param {Function|Boolean} callback - Option.
 */


var hide = function hide() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  console.log(1, document.getElementById('dirtyWayToInjectLoginComponent'));
  var el = document.getElementById('dirtyWayToInjectLoginComponent');

  if (el) {
    document.body.style.overflow = null;
    react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(el);
    document.body.removeChild(el);

    if (typeof callback === 'function') {
      callback();
    }
  }
};

var LoginComponentEvolution = {
  show: show,
  hide: hide
};

/***/ })

})
//# sourceMappingURL=create-post.js.f407ddeb8c087aaa8937.hot-update.js.map