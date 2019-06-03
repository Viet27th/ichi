webpackHotUpdate("static/development/pages/admin/create-post.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _express_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./express_api.service */ "./services/express_api.service.js");






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
    // Do something before request is sent, if it's ok, you must be return "config" otherwise request never be sent
    var userProfile = _cookie_service__WEBPACK_IMPORTED_MODULE_2__["default"].verifyJWT(token);

    if (!userProfile && config.url !== _express_api_service__WEBPACK_IMPORTED_MODULE_5__["express_api"].webLoginTraditionalUrl) {
      // Ném ra 1 lỗi và sẽ được bắt ở catch khi gửi request. Giống như việc request trả về status khác 200.
      throw new Error('token error');
    }

    return config;
  }, function (error) {
    // Do something with request error
    console.log(2);
    console.log('axios handle request error: ', error);
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  }); // Add a response interceptor

  axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    console.log(1); // Do something with response error

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  return axiosInstance;
};

/***/ })

})
//# sourceMappingURL=create-post.js.d757c373ecc041b93d2a.hot-update.js.map