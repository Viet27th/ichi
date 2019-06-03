webpackHotUpdate("static/development/pages/login.js",{

/***/ "./scenes/login/index.js":
/*!*******************************!*\
  !*** ./scenes/login/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ "./scenes/login/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/axios.service */ "./services/axios.service.js");
/* harmony import */ var _services_regex_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/regex.service */ "./services/regex.service.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/spinner */ "./components/spinner/index.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/cookie.service */ "./services/cookie.service.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../middleware */ "./middleware/index.js");
/* harmony import */ var _services_express_api_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/express_api.service */ "./services/express_api.service.js");









var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/scenes/login/index.js";













var LoginScene =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LoginScene, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginScene, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = ctx.query; // If user logged in successfully, can't visit login page. Auto redirect to root url.

                if (!_middleware__WEBPACK_IMPORTED_MODULE_19__["default"].redirectIfNotAuthenticated(ctx)) {
                  if (ctx.res) {
                    ctx.res.writeHead(303, {
                      Location: '/'
                    });
                    ctx.res.end();
                  } else {
                    next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/');
                  }
                }

                return _context.abrupt("return", {
                  query: query
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function LoginScene(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoginScene);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginScene).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      var target = e.target;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function () {
      if (!Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_15__["regexEmail"])(_this.state.email) || _this.state.email.trim() === '') {
        _components_alert__WEBPACK_IMPORTED_MODULE_16__["AlertComponentEvolution"].show('Email không chính xác.');
      } else if (_this.state.password.trim() === '') {
        _components_alert__WEBPACK_IMPORTED_MODULE_16__["AlertComponentEvolution"].show('Password không được để trống.');
      } else {
        _components_spinner__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponentEvolution"].show();
        Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_14__["axiosInstance"])().post(_services_express_api_service__WEBPACK_IMPORTED_MODULE_20__["express_api"].webLoginTraditionalUrl, {
          email: _this.state.email,
          password: _this.state.password
        }, {
          handlerEnabled: false
        }).then(function (result) {
          _components_spinner__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponentEvolution"].hide();

          if (result.data.requestSuccessfully) {
            // Set cookie client
            _services_cookie_service__WEBPACK_IMPORTED_MODULE_18__["default"].clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond); // After logged in successfully, redirect to previous url

            if (_this.props.query.previousUrl) {
              next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(_this.props.query.previousUrl);
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/');
            }
          } else {
            _components_alert__WEBPACK_IMPORTED_MODULE_16__["AlertComponentEvolution"].show(result.data.message);
          }
        }).catch(function (error) {
          _components_spinner__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponentEvolution"].hide();
          console.log(error);
        });
      }
    });

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginScene, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "wrapped-login",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "login",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "email",
        placeholder: "Email",
        type: "text",
        value: this.state.email,
        onChange: this.handleChange,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "password",
        placeholder: "Password",
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'social pt-5 pb-3 d-flex justify-content-center align-items-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'twitter cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'facebook cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "fab fa-facebook-f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'google-plus cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "fab fa-google-plus-g",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'youtube cursor-pointer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "submit",
        value: "Login",
        onClick: this.handleSubmit,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + 'forgot',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Don't have an account?"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_11__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_11__["default"]));
    }
  }]);

  return LoginScene;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginScene);

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
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie.service */ "./services/cookie.service.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login */ "./components/login/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _express_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./express_api.service */ "./services/express_api.service.js");








/**
 *
 * @param req - if request come from Nextjs server, we've merely pass this params
 * @returns {AxiosInstance}
 */

var axiosInstance = function axiosInstance(req) {
  var token;

  if (req) {
    token = _cookie_service__WEBPACK_IMPORTED_MODULE_3__["default"].serverGetCookieByName(req, 'token');
  } else {
    token = _cookie_service__WEBPACK_IMPORTED_MODULE_3__["default"].clientGetCookieByName('token');
  }

  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
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
    var userProfile = _cookie_service__WEBPACK_IMPORTED_MODULE_3__["default"].verifyJWT(token); // Gọi mội refresh token nếu token của user sắp hết hạn.
    // Hành động này config ở 2 nơi:
    // 1: Xảy ra khi gọi request
    // 2: Xảy ra khi chuyển trang, đã config trong _app.js
    // Token is expired in 8 days, before that 7 day, we will refresh token if user still working on my system.
    // If user doesn't on my system in 7 days, next time visiting must be login

    if (userProfile && typeof window !== 'undefined') {
      if (userProfile.expMillisecond - _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() < 7 * 24 * 60 * 60 * 1000) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_express_api_service__WEBPACK_IMPORTED_MODULE_7__["express_api"].webRefreshTokenTraditionalUrl, {}, {
          headers: {
            'Authorization': "Bearer ".concat(token)
          }
        }).then(function (result) {
          // Set cookie client
          _cookie_service__WEBPACK_IMPORTED_MODULE_3__["default"].clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond);
        }).catch(function (error) {
          console.log(error.message);
        });
      }
    } //
    // Thường thì khi gửi request sẽ cần login => noNeedLogin = false or undefined.


    if (!userProfile && config.url !== _express_api_service__WEBPACK_IMPORTED_MODULE_7__["express_api"].webLoginTraditionalUrl) {
      // Ném ra 1 lỗi và sẽ được bắt ở catch khi gửi request. Giống như việc request trả về status khác 200.
      // Catch trong mỗi request sẽ chạy khi status response khác 200,
      // hoặc then ném ra 1 lỗi, hoặc ở đây (trước khi request) ném ra 1 lỗi
      // throw new Error('token error');
      _components_login__WEBPACK_IMPORTED_MODULE_5__["LoginComponentEvolution"].show();
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
//# sourceMappingURL=login.js.c143c4fdeab59b2bf55e.hot-update.js.map