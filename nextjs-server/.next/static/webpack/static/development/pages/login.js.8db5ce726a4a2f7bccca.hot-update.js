webpackHotUpdate("static/development/pages/login.js",{

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
    // 2: Xảy ra khi chuyển router, đã config trong _app.js
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
    // Thường thì khi gửi request sẽ không cần login => config.needLogin = false or undefined.
    // Nếu request nào cần login thì phải gửi thêm config trong request một tham số là needLogin = true.


    if (config.needLogin) {
      if (userProfile) {
        return config;
      } else {
        // Ném ra 1 lỗi và sẽ được bắt ở catch khi gửi request. Giống như việc request trả về status khác 200.
        // Catch trong mỗi request sẽ chạy khi status response khác 200,
        // hoặc then ném ra 1 lỗi, hoặc ở đây (trước khi request) ném ra 1 lỗi
        // throw new Error('token error');
        _components_login__WEBPACK_IMPORTED_MODULE_5__["LoginComponentEvolution"].show();
      }
    } else {
      return config;
    }
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
//# sourceMappingURL=login.js.8db5ce726a4a2f7bccca.hot-update.js.map