webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_confirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/confirm */ "./components/confirm/index.js");
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/spinner */ "./components/spinner/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/cookie.service */ "./services/cookie.service.js");
/* harmony import */ var _components_wrapped_user_pages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/wrapped_user_pages */ "./components/wrapped_user_pages/index.js");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/axios.service */ "./services/axios.service.js");
/* harmony import */ var _services_express_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/express_api.service */ "./services/express_api.service.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../redux_store */ "./redux_store.js");









var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/pages/_app.js";








 // Component WrappedAdminPagesComponent sẽ chỉ chạy trên client bao gồm cả phần import ở đầu trang
// That mean: When refresh (F5) Admin page, server does not return HTML

var WrappedAdminPagesComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/wrapped_admin_pages */ "./components/wrapped_admin_pages/index.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/wrapped_admin_pages */ "./components/wrapped_admin_pages/index.js")];
    },
    modules: ['../components/wrapped_admin_pages']
  }
});





var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          userProfile = _this$props.userProfile,
          reduxStore = _this$props.reduxStore;
      var isAdminPages = this.props.router.route.startsWith('/admin'); // Token is expired in 8 days, before that 7 day, we will refresh token if user still working on my system.
      // If user doesn't on my system in 7 days, next time visiting must be login

      if (userProfile && typeof window !== 'undefined') {
        if (userProfile.expMillisecond - _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default()() < 7 * 24 * 60 * 60 * 1000) {
          Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_18__["axiosInstance"])().post(_services_express_api_service__WEBPACK_IMPORTED_MODULE_19__["express_api"].webRefreshTokenTraditionalUrl).then(function (result) {
            // Set cookie client
            _services_cookie_service__WEBPACK_IMPORTED_MODULE_16__["default"].clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond);
          }).catch(function (error) {
            console.log(error.message);
          });
        }
      }

      if (isAdminPages) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_20__["Provider"], {
          store: reduxStore,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(WrappedAdminPagesComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "4171419237",
          __self: this
        }, "body,#__next{min-height:100vh;}.cursor-pointer{cursor:pointer;}a:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94dWFuZGlldS9EZXNrdG9wL2V4cHJlc3MtbmV4dC1pY2hpL25leHRqcy1zZXJ2ZXIvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWlDLEFBR2tDLEFBSUYsQUFJaUIsZUFIbEMsRUFKQSx1REFRQSIsImZpbGUiOiIvVXNlcnMveHVhbmRpZXUvRGVza3RvcC9leHByZXNzLW5leHQtaWNoaS9uZXh0anMtc2VydmVyL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCwge0NvbnRhaW5lcn0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHtBbGVydENvbXBvbmVudEV2b2x1dGlvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydCc7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnRFdm9sdXRpb259IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybSc7XG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnRFdm9sdXRpb259IGZyb20gJy4uL2NvbXBvbmVudHMvc3Bpbm5lcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi9zZXJ2aWNlcy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgV3JhcHBlZFVzZXJQYWdlc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3dyYXBwZWRfdXNlcl9wYWdlcyc7XG4vLyBDb21wb25lbnQgV3JhcHBlZEFkbWluUGFnZXNDb21wb25lbnQgc+G6vSBjaOG7iSBjaOG6oXkgdHLDqm4gY2xpZW50IGJhbyBn4buTbSBj4bqjIHBo4bqnbiBpbXBvcnQg4bufIMSR4bqndSB0cmFuZ1xuLy8gVGhhdCBtZWFuOiBXaGVuIHJlZnJlc2ggKEY1KSBBZG1pbiBwYWdlLCBzZXJ2ZXIgZG9lcyBub3QgcmV0dXJuIEhUTUxcbmNvbnN0IFdyYXBwZWRBZG1pblBhZ2VzQ29tcG9uZW50ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL3dyYXBwZWRfYWRtaW5fcGFnZXMnKSxcbiAge1xuICAgIHNzcjogZmFsc2VcbiAgfVxuKTtcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSAnLi4vc2VydmljZXMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQge2V4cHJlc3NfYXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzX2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9yZWR1eF9zdG9yZSc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgLy8gSW4gcGFnZSBhcyBsb2dpbi5qcywgcmVnaXN0ZXIuanMsIGhlbGwgaXMgZGlmZmVyZW50IHdpdGggY3R4XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoaGVsbCkge1xuICAgIGNvbnN0IHtDb21wb25lbnQsIGN0eH0gPSBoZWxsO1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBsZXQgdXNlclByb2ZpbGUgPSB7fTtcbiAgICBcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cbiAgICBcbiAgICAvLyB1c2VyUHJvZmlsZSBpcyBmYWxzZSBpZiB1c2VyIGRvZXNuJ3QgbG9nZ2VkIGluIGJlZm9yZSBvciB0b2tlbiBleHBpcmVkLiBPdGhlcndpc2UsIHVzZXJQcm9maWxlIGlzIG9iamVjdCBjb250YWlucyB1c2VyIGRhdGFcbiAgICAvLyBJZiB1c2VyUHJvZmlsZSBpcyBub3QgZmFsc2UgPT4gdG9rZW4gaXMgdHJ1dGguIFJlZnJlc2ggdG9rZW4gYmVmb3JlIGV4cGlyZS5cbiAgICBpZiAoY3R4LnJlcykge1xuICAgICAgdXNlclByb2ZpbGUgPSBjb29raWUudmVyaWZ5SldUKGNvb2tpZS5zZXJ2ZXJHZXRDb29raWVCeU5hbWUoY3R4LnJlcSwgJ3Rva2VuJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyUHJvZmlsZSA9IGNvb2tpZS52ZXJpZnlKV1QoY29va2llLmNsaWVudEdldENvb2tpZUJ5TmFtZSgndG9rZW4nKSk7XG4gICAgfVxuICAgIGlmICh1c2VyUHJvZmlsZSkge1xuICAgICAgaGVsbC5jdHgucmVkdXhTdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTQVZFX1VTRVJfSU5GTycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2F2ZSB1c2VyIGluZm9ybWF0aW9uIHdoZW4gdXNlciBsb2dpbiBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgZGF0YTogdXNlclByb2ZpbGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3BhZ2VQcm9wcywgdXNlclByb2ZpbGV9O1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCB1c2VyUHJvZmlsZSwgcmVkdXhTdG9yZX0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIGxldCBpc0FkbWluUGFnZXMgPSAodGhpcy5wcm9wcy5yb3V0ZXIucm91dGUuc3RhcnRzV2l0aCgnL2FkbWluJykpO1xuICAgIFxuICAgIC8vIFRva2VuIGlzIGV4cGlyZWQgaW4gOCBkYXlzLCBiZWZvcmUgdGhhdCA3IGRheSwgd2Ugd2lsbCByZWZyZXNoIHRva2VuIGlmIHVzZXIgc3RpbGwgd29ya2luZyBvbiBteSBzeXN0ZW0uXG4gICAgLy8gSWYgdXNlciBkb2Vzbid0IG9uIG15IHN5c3RlbSBpbiA3IGRheXMsIG5leHQgdGltZSB2aXNpdGluZyBtdXN0IGJlIGxvZ2luXG4gICAgaWYgKHVzZXJQcm9maWxlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoKHVzZXJQcm9maWxlLmV4cE1pbGxpc2Vjb25kIC0gRGF0ZS5ub3coKSkgPCA3ICogMjQgKiA2MCAqIDYwICogMTAwMCkge1xuICAgICAgICBheGlvc0luc3RhbmNlKCkucG9zdChleHByZXNzX2FwaS53ZWJSZWZyZXNoVG9rZW5UcmFkaXRpb25hbFVybCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIC8vIFNldCBjb29raWUgY2xpZW50XG4gICAgICAgICAgY29va2llLmNsaWVudFNldENvb2tpZSgndG9rZW4nLCByZXN1bHQuZGF0YS5kYXRhLnRva2VuLCByZXN1bHQuZGF0YS5kYXRhLmV4cE1pbGxpc2Vjb25kKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGlzQWRtaW5QYWdlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgICAgICAgPFdyYXBwZWRBZG1pblBhZ2VzQ29tcG9uZW50PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgYm9keSwgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jdXJzb3ItcG9pbnRlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvV3JhcHBlZEFkbWluUGFnZXNDb21wb25lbnQ+XG4gICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICAgICAgICA8V3JhcHBlZFVzZXJQYWdlc0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICBib2R5LCAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmN1cnNvci1wb2ludGVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9XcmFwcGVkVXNlclBhZ2VzQ29tcG9uZW50PlxuICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApO1xuIl19 */\n/*@ sourceURL=/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/pages/_app.js */"))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_11__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_20__["Provider"], {
          store: reduxStore,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_wrapped_user_pages__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "4171419237",
          __self: this
        }, "body,#__next{min-height:100vh;}.cursor-pointer{cursor:pointer;}a:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94dWFuZGlldS9EZXNrdG9wL2V4cHJlc3MtbmV4dC1pY2hpL25leHRqcy1zZXJ2ZXIvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR2lDLEFBR2tDLEFBSUYsQUFJaUIsZUFIbEMsRUFKQSx1REFRQSIsImZpbGUiOiIvVXNlcnMveHVhbmRpZXUvRGVza3RvcC9leHByZXNzLW5leHQtaWNoaS9uZXh0anMtc2VydmVyL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCwge0NvbnRhaW5lcn0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHtBbGVydENvbXBvbmVudEV2b2x1dGlvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydCc7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnRFdm9sdXRpb259IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybSc7XG5pbXBvcnQge1NwaW5uZXJDb21wb25lbnRFdm9sdXRpb259IGZyb20gJy4uL2NvbXBvbmVudHMvc3Bpbm5lcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi9zZXJ2aWNlcy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgV3JhcHBlZFVzZXJQYWdlc0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3dyYXBwZWRfdXNlcl9wYWdlcyc7XG4vLyBDb21wb25lbnQgV3JhcHBlZEFkbWluUGFnZXNDb21wb25lbnQgc+G6vSBjaOG7iSBjaOG6oXkgdHLDqm4gY2xpZW50IGJhbyBn4buTbSBj4bqjIHBo4bqnbiBpbXBvcnQg4bufIMSR4bqndSB0cmFuZ1xuLy8gVGhhdCBtZWFuOiBXaGVuIHJlZnJlc2ggKEY1KSBBZG1pbiBwYWdlLCBzZXJ2ZXIgZG9lcyBub3QgcmV0dXJuIEhUTUxcbmNvbnN0IFdyYXBwZWRBZG1pblBhZ2VzQ29tcG9uZW50ID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL3dyYXBwZWRfYWRtaW5fcGFnZXMnKSxcbiAge1xuICAgIHNzcjogZmFsc2VcbiAgfVxuKTtcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSAnLi4vc2VydmljZXMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQge2V4cHJlc3NfYXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9leHByZXNzX2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9yZWR1eF9zdG9yZSc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgLy8gSW4gcGFnZSBhcyBsb2dpbi5qcywgcmVnaXN0ZXIuanMsIGhlbGwgaXMgZGlmZmVyZW50IHdpdGggY3R4XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoaGVsbCkge1xuICAgIGNvbnN0IHtDb21wb25lbnQsIGN0eH0gPSBoZWxsO1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBsZXQgdXNlclByb2ZpbGUgPSB7fTtcbiAgICBcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cbiAgICBcbiAgICAvLyB1c2VyUHJvZmlsZSBpcyBmYWxzZSBpZiB1c2VyIGRvZXNuJ3QgbG9nZ2VkIGluIGJlZm9yZSBvciB0b2tlbiBleHBpcmVkLiBPdGhlcndpc2UsIHVzZXJQcm9maWxlIGlzIG9iamVjdCBjb250YWlucyB1c2VyIGRhdGFcbiAgICAvLyBJZiB1c2VyUHJvZmlsZSBpcyBub3QgZmFsc2UgPT4gdG9rZW4gaXMgdHJ1dGguIFJlZnJlc2ggdG9rZW4gYmVmb3JlIGV4cGlyZS5cbiAgICBpZiAoY3R4LnJlcykge1xuICAgICAgdXNlclByb2ZpbGUgPSBjb29raWUudmVyaWZ5SldUKGNvb2tpZS5zZXJ2ZXJHZXRDb29raWVCeU5hbWUoY3R4LnJlcSwgJ3Rva2VuJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyUHJvZmlsZSA9IGNvb2tpZS52ZXJpZnlKV1QoY29va2llLmNsaWVudEdldENvb2tpZUJ5TmFtZSgndG9rZW4nKSk7XG4gICAgfVxuICAgIGlmICh1c2VyUHJvZmlsZSkge1xuICAgICAgaGVsbC5jdHgucmVkdXhTdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTQVZFX1VTRVJfSU5GTycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2F2ZSB1c2VyIGluZm9ybWF0aW9uIHdoZW4gdXNlciBsb2dpbiBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgZGF0YTogdXNlclByb2ZpbGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3BhZ2VQcm9wcywgdXNlclByb2ZpbGV9O1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCB1c2VyUHJvZmlsZSwgcmVkdXhTdG9yZX0gPSB0aGlzLnByb3BzO1xuICAgIFxuICAgIGxldCBpc0FkbWluUGFnZXMgPSAodGhpcy5wcm9wcy5yb3V0ZXIucm91dGUuc3RhcnRzV2l0aCgnL2FkbWluJykpO1xuICAgIFxuICAgIC8vIFRva2VuIGlzIGV4cGlyZWQgaW4gOCBkYXlzLCBiZWZvcmUgdGhhdCA3IGRheSwgd2Ugd2lsbCByZWZyZXNoIHRva2VuIGlmIHVzZXIgc3RpbGwgd29ya2luZyBvbiBteSBzeXN0ZW0uXG4gICAgLy8gSWYgdXNlciBkb2Vzbid0IG9uIG15IHN5c3RlbSBpbiA3IGRheXMsIG5leHQgdGltZSB2aXNpdGluZyBtdXN0IGJlIGxvZ2luXG4gICAgaWYgKHVzZXJQcm9maWxlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoKHVzZXJQcm9maWxlLmV4cE1pbGxpc2Vjb25kIC0gRGF0ZS5ub3coKSkgPCA3ICogMjQgKiA2MCAqIDYwICogMTAwMCkge1xuICAgICAgICBheGlvc0luc3RhbmNlKCkucG9zdChleHByZXNzX2FwaS53ZWJSZWZyZXNoVG9rZW5UcmFkaXRpb25hbFVybCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIC8vIFNldCBjb29raWUgY2xpZW50XG4gICAgICAgICAgY29va2llLmNsaWVudFNldENvb2tpZSgndG9rZW4nLCByZXN1bHQuZGF0YS5kYXRhLnRva2VuLCByZXN1bHQuZGF0YS5kYXRhLmV4cE1pbGxpc2Vjb25kKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGlzQWRtaW5QYWdlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgICAgICAgPFdyYXBwZWRBZG1pblBhZ2VzQ29tcG9uZW50PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgYm9keSwgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jdXJzb3ItcG9pbnRlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvV3JhcHBlZEFkbWluUGFnZXNDb21wb25lbnQ+XG4gICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICAgICAgICA8V3JhcHBlZFVzZXJQYWdlc0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICBib2R5LCAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmN1cnNvci1wb2ludGVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9XcmFwcGVkVXNlclBhZ2VzQ29tcG9uZW50PlxuICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApO1xuIl19 */\n/*@ sourceURL=/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/pages/_app.js */"))));
      }
    }
  }], [{
    key: "getInitialProps",
    // In page as login.js, register.js, hell is different with ctx
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hell) {
        var Component, ctx, pageProps, userProfile;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = hell.Component, ctx = hell.ctx;
                pageProps = {};
                userProfile = {};

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                pageProps = _context.sent;

              case 7:
                // userProfile is false if user doesn't logged in before or token expired. Otherwise, userProfile is object contains user data
                // If userProfile is not false => token is truth. Refresh token before expire.
                if (ctx.res) {
                  userProfile = _services_cookie_service__WEBPACK_IMPORTED_MODULE_16__["default"].verifyJWT(_services_cookie_service__WEBPACK_IMPORTED_MODULE_16__["default"].serverGetCookieByName(ctx.req, 'token'));
                } else {
                  userProfile = _services_cookie_service__WEBPACK_IMPORTED_MODULE_16__["default"].verifyJWT(_services_cookie_service__WEBPACK_IMPORTED_MODULE_16__["default"].clientGetCookieByName('token'));
                }

                if (userProfile) {
                  hell.ctx.reduxStore.dispatch({
                    type: 'SAVE_USER_INFO',
                    description: 'Save user information when user login successfully.',
                    data: userProfile
                  });
                }

                return _context.abrupt("return", {
                  pageProps: pageProps,
                  userProfile: userProfile
                });

              case 10:
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

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_store__WEBPACK_IMPORTED_MODULE_21__["default"])(MyApp));

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
    }

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
//# sourceMappingURL=_app.js.8bea05da1cadd687da6d.hot-update.js.map