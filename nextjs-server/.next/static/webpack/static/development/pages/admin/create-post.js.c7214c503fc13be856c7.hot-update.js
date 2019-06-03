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
  if (!document.getElementById('dirtyWayToInjectLoginComponent')) {
    document.body.style.overflow = 'hidden';
    var el = document.createElement('div');
    el.setAttribute('id', 'dirtyWayToInjectLoginComponent');
    react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoginComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), document.body.appendChild(el));
  }
};
/**
 *
 * @param {Function|Boolean} callback - Option.
 */


var hide = function hide() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
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

/***/ }),

/***/ "./components/login/style.css":
/*!************************************!*\
  !*** ./components/login/style.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("#wrapped-login.jsx-2401120041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,0.9);position:fixed;top:0;left:0;bottom:0;right:0;z-index:99999;}#login.jsx-2401120041{width:350px;}h2.jsx-2401120041{color:#6D7781;font-family:'Sofia',cursive;font-size:3.5em;font-weight:bold;text-align:center;margin-bottom:20px;}a.jsx-2401120041{color:#435160;-webkit-text-decoration:none;text-decoration:none;}input[type=\"text\"].jsx-2401120041,input[type=\"password\"].jsx-2401120041,input[type=\"email\"].jsx-2401120041{width:350px;padding:20px 0;background:transparent !important;border:0;border-bottom:1px solid #435160;outline:none;color:#6D7781;font-size:16px;}.social.jsx-2401120041{position:relative;}.social.jsx-2401120041:after{content:'OR';font-size:17px;color:#435160;position:absolute;top:20px;font-family:'Sofia',cursive;}.social.jsx-2401120041 span.jsx-2401120041{font-size:24px;padding:9px;margin:0 5px;}.social.jsx-2401120041 .facebook.jsx-2401120041{color:#e4e2b8;}.social.jsx-2401120041 .twitter.jsx-2401120041{color:#e4e2b8;}.social.jsx-2401120041 .google-plus.jsx-2401120041{color:#e4e2b8;}.social.jsx-2401120041 .youtube.jsx-2401120041{color:#e4e2b8;}.forgot.jsx-2401120041{margin-top:30px;display:block;font-size:11px;text-align:center;font-weight:bold;}.forgot.jsx-2401120041:hover{margin-top:30px;display:block;font-size:11px;text-align:center;font-weight:bold;color:#6D7781;}.jsx-2401120041::-webkit-input-placeholder{color:#435160;font-size:12px;}input[type=\"submit\"].jsx-2401120041{background:#3A5059;border:0;width:350px;height:40px;border-radius:3px;color:#fff;font-size:12px;cursor:pointer;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}input[type=\"submit\"].jsx-2401120041:hover{background:#35566b;-webkit-animation-name:shake-jsx-2401120041;animation-name:shake-jsx-2401120041;}@-webkit-keyframes shake-jsx-2401120041{0%,100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);-ms-transform:translateX(-10px);transform:translateX(-10px);}20%,40%,60%,80%{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}}@keyframes shake-jsx-2401120041{0%,100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);-ms-transform:translateX(-10px);transform:translateX(-10px);}20%,40%,60%,80%{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}}");

_defaultExport.__hash = "2401120041";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./services/axios.service.js":
/*!***********************************!*\
  !*** ./services/axios.service.js ***!
  \***********************************/
/*! exports provided: axiosInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosInstance", function() { return axiosInstance; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie.service */ "./services/cookie.service.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login */ "./components/login/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _express_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./express_api.service */ "./services/express_api.service.js");







/**
 *
 * @param req - if request come from Nextjs server, we've merely pass this params
 * @returns {AxiosInstance}
 */

var axiosInstance = function axiosInstance(req) {
  var token;

  if (req) {
    token = _cookie_service__WEBPACK_IMPORTED_MODULE_2__["default"].serverGetCookieByName(req, 'token');
  } else {
    token = _cookie_service__WEBPACK_IMPORTED_MODULE_2__["default"].clientGetCookieByName('token');
  }

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    timeout: 9000
  });
  axiosInstance.defaults.headers.common['Authorization'] = "Bearer ".concat(token);
  /**
   * Add a request interceptor to verify before send request
   * Request never sent if token is invalid
   */

  axiosInstance.interceptors.request.use(function (config) {
    // Hàm này được gọi trước khi request được gửi đi.
    // Do something before request is sent, if it's ok, you must be return "config" otherwise request never be sent
    var userProfile = _cookie_service__WEBPACK_IMPORTED_MODULE_2__["default"].verifyJWT(token);

    if (!userProfile && config.url !== _express_api_service__WEBPACK_IMPORTED_MODULE_6__["express_api"].webLoginTraditionalUrl) {
      // Ném ra 1 lỗi và sẽ được bắt ở catch khi gửi request. Giống như việc request trả về status khác 200.
      // Catch trong mỗi request sẽ chạy khi status response khác 200,
      // hoặc then ném ra 1 lỗi, hoặc ở đây (trước khi request) ném ra 1 lỗi
      // throw new Error('token error');
      _components_login__WEBPACK_IMPORTED_MODULE_4__["LoginComponentEvolution"].show();
      return;
    }

    return config;
  }, function (error) {
    // Không biết hàm này trigger khi nào
    // Do something with request error
    console.log('axios handle request error: ', error);
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  }); // Add a response interceptor

  axiosInstance.interceptors.response.use(function (response) {
    // Hàm này chạy khi có response trả về với status = 200, hàm này chạy trước rồi đến then.
    // Do something with response data
    return response;
  }, function (error) {
    // Hàm này được gọi khi request trả về status khác 200 tức là response lỗi.
    // Sau khi hàm này chạy, catch mới chạy. Catch cũng bắt lỗi với các response có status khác 200.
    // Do something with response error
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  return axiosInstance;
};

/***/ })

})
//# sourceMappingURL=create-post.js.c7214c503fc13be856c7.hot-update.js.map