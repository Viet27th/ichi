(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/wrapped_admin_pages/components/breadcrumb/index.js":
/*!***********************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/breadcrumb/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/breadcrumb/style.css");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/components/breadcrumb/index.js";








var BreadcrumbComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BreadcrumbComponent, _React$Component);

  function BreadcrumbComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreadcrumbComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BreadcrumbComponent).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "generateBreadcrumb", function (pathSplit) {
      var tempArr = [];
      var originUrl = window.location.origin;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(pathSplit), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var path = _step.value;
          var tempObj = {};

          if (path) {
            tempObj.name = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.startCase(path);
            tempObj.path = "".concat(originUrl, "/").concat(path);
            tempArr.push(tempObj);
          } else {
            tempObj.name = 'Home';
            tempObj.path = originUrl;
            tempArr.push(tempObj);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return tempArr;
    });

    _this.state = {
      pathSplit: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BreadcrumbComponent, [{
    key: "render",
    value: function render() {
      var pathSplit = this.props.router.pathname.split('/');
      var breadcrumb = this.generateBreadcrumb(pathSplit);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ol", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "breadcrumb pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, breadcrumb.map(function (item, index) {
        if (index === breadcrumb.length - 1) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            key: index,
            className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "breadcrumb-item active",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, item.name);
        } else {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
            key: index,
            className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "breadcrumb-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            prefetch: true,
            href: {
              pathname: item.path
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
            className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, item.name)));
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, pathSplit[pathSplit.length - 1] === 'admin' ? 'Dashboard' : breadcrumb[breadcrumb.length - 1].name, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash) + " " + "ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "header small text goes here...")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_10__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_10__["default"]));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(new URL(window.location.href).pathname);
    }
  }]);

  return BreadcrumbComponent;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(BreadcrumbComponent));

/***/ }),

/***/ "./components/wrapped_admin_pages/components/breadcrumb/style.css":
/*!************************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/breadcrumb/style.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("");

_defaultExport.__hash = "2085888330";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/wrapped_admin_pages/components/footer/index.js":
/*!*******************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/footer/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/footer/style.css");





var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/components/footer/index.js";




var FooterComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FooterComponent, _React$Component);

  function FooterComponent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FooterComponent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        id: "admin-footer",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + 'text-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "\u24B8 Design by Xuan Viet", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
  }]);

  return FooterComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FooterComponent);

/***/ }),

/***/ "./components/wrapped_admin_pages/components/footer/style.css":
/*!********************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/footer/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("#admin-footer.jsx-3260304743{position:fixed;bottom:0;width:100vw;height:50px;line-height:50px;}");

_defaultExport.__hash = "3260304743";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/wrapped_admin_pages/components/header/index.js":
/*!*******************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/header/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/header/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/cookie.service */ "./services/cookie.service.js");





var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/components/header/index.js";








var HeaderComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderComponent, _React$Component);

  function HeaderComponent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderComponent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderComponent, [{
    key: "render",
    value: function render() {
      var user_data = this.props.state.rootScreen.userInfo.user_data;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "header",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "header navbar-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "TooLazy"), " TobeCool")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        onClick: HeaderComponent.toggleLeftSidebar,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-toggle cursor-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-nav navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "navbar-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        placeholder: "Enter keyword",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "btn btn-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        "data-toggle": "dropdown",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-toggle f-s-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "5")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-menu media-list dropdown-menu-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "NOTIFICATIONS (5)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-bug media-object bg-silver-darker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Server Error Reports ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-exclamation-circle text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "text-muted f-s-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "3 minutes ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/img/default_admin_avatar.jpg",
        alt: "",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-object",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fab fa-facebook-messenger text-primary media-object-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "John Smith"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Quisque pulvinar tellus sit amet sem scelerisque tincidunt."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "text-muted f-s-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "25 minutes ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/img/default_admin_avatar.jpg",
        alt: "",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-object",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fab fa-facebook-messenger text-primary media-object-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Olivia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Quisque pulvinar tellus sit amet sem scelerisque tincidunt."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "text-muted f-s-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "35 minutes ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-plus media-object bg-silver-darker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " New User Registered"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "text-muted f-s-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "1 hour ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-envelope media-object bg-silver-darker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fab fa-google text-warning media-object-icon f-s-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "media-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " New Email From John"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "text-muted f-s-11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "2 hour ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-footer text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "View more")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown navbar-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        "data-toggle": "dropdown",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: user_data.avatar,
        alt: "",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "d-none d-md-inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, user_data.name), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "caret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-menu dropdown-menu-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Edit Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "badge badge-danger pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "2"), " Inbox"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Calendar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Setting"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: HeaderComponent.logoutClicked,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "dropdown-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Log Out")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
  }], [{
    key: "toggleLeftSidebar",
    value: function toggleLeftSidebar() {
      $('.js-page-container').toggleClass('page-sidebar-toggled');
    }
  }, {
    key: "logoutClicked",
    value: function logoutClicked() {
      // Clear token in cookie
      _services_cookie_service__WEBPACK_IMPORTED_MODULE_11__["default"].clientSetCookie('token', '', 0);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/login?previousUrl=".concat(encodeURIComponent(window.location.pathname)));
    }
  }]);

  return HeaderComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderComponent));

/***/ }),

/***/ "./components/wrapped_admin_pages/components/header/style.css":
/*!********************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/header/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("");

_defaultExport.__hash = "2085888330";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/wrapped_admin_pages/components/left-sidebar/index.js":
/*!*************************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/left-sidebar/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/left-sidebar/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/components/left-sidebar/index.js";







var LeftSidebarComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LeftSidebarComponent, _React$Component);

  function LeftSidebarComponent(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LeftSidebarComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LeftSidebarComponent).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftSidebarComponent, [{
    key: "render",
    value: function render() {
      var user_data = this.props.state.rootScreen.userInfo.user_data;
      var pathname = this.props.router.pathname;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "sidebar",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        onClick: LeftSidebarComponent.expandProfile,
        "data-target": "#v-profile",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "nav-profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "cover with-shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: user_data.meta_data.left_sidebar_background,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + 'w-100',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: user_data.avatar,
        alt: "",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "caret pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), user_data.name, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, user_data.email)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        id: "v-profile",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "nav nav-profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), " Settings")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-pencil-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), " Send Feedback")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-question-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), " Helps"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "nav-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Navigation"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((pathname === '/admin' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-th-large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Dashboard")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((pathname === '/admin/media' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/admin/media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Media")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        onClick: this.handleDropdown,
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "has-sub ".concat(pathname === '/admin/create-post' || pathname === '/admin/posts' ? 'active' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "caret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-gem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Posts")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sub-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((pathname === '/admin/posts' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/admin/posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "All Post"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((pathname === '/admin/create-post' ? 'active' : '') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/admin/create-post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Add New ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-paper-plane text-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "has-sub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "caret pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "badge pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-hdd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Email ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "label label-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sub-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Inbox")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Compose")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Detail", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-paper-plane text-theme ml-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-".concat(_style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _style_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
        __self: this
      }, _style_css__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
    /**
     * Mở rộng profile của user
     * @param e
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tree();
    }
  }, {
    key: "handleDropdown",
    value: function handleDropdown(e) {}
    /**
     * Tạo drop down cho Tree Menu
     * Có class has-sub đi cùng active sẽ mở ra.
     */

  }, {
    key: "tree",
    value: function tree() {
      'use strict';

      var Default = {
        animationSpeed: 279
      };
      var ClassName = {
        active: 'active'
      };
      var Selector = {
        trigger: '.has-sub > a',
        hasSub: '.has-sub',
        subMenu: '.sub-menu'
      };
      $(Selector.trigger).each(function () {
        $(this).on('click', function (e) {
          var parentLi = $(this).parent();
          var isOpen = parentLi.hasClass(ClassName.active);

          if (isOpen) {
            parentLi.children(Selector.subMenu).slideUp(Default.animationSpeed, function () {
              parentLi.removeClass(ClassName.active);
            }); // Khi close <li> cha, đóng các <li> con nếu là multiple level

            parentLi.find(Selector.hasSub).removeClass(ClassName.active);
          } else {
            parentLi.children(Selector.subMenu).toggle(Default.animationSpeed, function () {
              parentLi.addClass(ClassName.active);
              parentLi.children(Selector.subMenu).removeAttr('style');
            });
          }
        });
      });
    }
  }], [{
    key: "expandProfile",
    value: function expandProfile(e) {
      var el = e.currentTarget;
      $($(el).data('target')).toggle(279, function () {
        if ($(el).hasClass('active')) {
          $(el).removeClass('active');
        } else {
          $(el).addClass('active');
        }
      });
    }
  }]);

  return LeftSidebarComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(LeftSidebarComponent)));

/***/ }),

/***/ "./components/wrapped_admin_pages/components/left-sidebar/style.css":
/*!**************************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/left-sidebar/style.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("#sidebar.jsx-105922339{position:absolute !important;}#sidebar.jsx-105922339 ul.jsx-105922339:not(:first-child){background-color:#2d353c;}");

_defaultExport.__hash = "105922339";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/wrapped_admin_pages/components/right-sidebar/index.js":
/*!**************************************************************************!*\
  !*** ./components/wrapped_admin_pages/components/right-sidebar/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/components/right-sidebar/index.js";


var RightSidebarComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RightSidebarComponent, _React$Component);

  function RightSidebarComponent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RightSidebarComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RightSidebarComponent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RightSidebarComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "theme-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: RightSidebarComponent.expandThemePanel,
        className: "theme-collapse-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-cog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "theme-panel-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        className: "m-t-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Color Theme"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "theme-list clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-green",
        "data-theme": "default",
        "data-theme-file": "../assets/css/default/theme/default.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-red",
        "data-theme": "red",
        "data-theme-file": "../assets/css/default/theme/red.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-blue",
        "data-theme": "blue",
        "data-theme-file": "../assets/css/default/theme/blue.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-purple",
        "data-theme": "purple",
        "data-theme-file": "../assets/css/default/theme/purple.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Purple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-orange",
        "data-theme": "orange",
        "data-theme-file": "../assets/css/default/theme/orange.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Orange",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "bg-black",
        "data-theme": "black",
        "data-theme-file": "../assets/css/default/theme/black.css",
        "data-click": "theme-selector",
        "data-toggle": "tooltip",
        "data-trigger": "hover",
        "data-container": "body",
        "data-title": "Black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label double-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Header Styling"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "header-styling",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "default"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "inverse")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Header"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "header-fixed",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "fixed"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "default")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label double-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Sidebar Styling"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "sidebar-styling",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "default"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "grid")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Sidebar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "sidebar-fixed",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "fixed"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "default")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label double-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Sidebar Gradient"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "content-gradient",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "disabled"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "enabled")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 control-label double-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Content Styling"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        name: "content-styling",
        className: "form-control form-control-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "default"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "black")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row m-t-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "btn btn-inverse btn-block btn-sm",
        "data-click": "reset-local-storage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Reset Local Storage")))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
    /**
     * Toggle theme panel
     * @param e
     */

  }], [{
    key: "expandThemePanel",
    value: function expandThemePanel(e) {
      $(e.currentTarget).parent().toggleClass('active');
    }
  }]);

  return RightSidebarComponent;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RightSidebarComponent);

/***/ }),

/***/ "./components/wrapped_admin_pages/index.js":
/*!*************************************************!*\
  !*** ./components/wrapped_admin_pages/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.global.css */ "./components/wrapped_admin_pages/style.global.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header */ "./components/wrapped_admin_pages/components/header/index.js");
/* harmony import */ var _components_left_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/left-sidebar */ "./components/wrapped_admin_pages/components/left-sidebar/index.js");
/* harmony import */ var _components_right_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/right-sidebar */ "./components/wrapped_admin_pages/components/right-sidebar/index.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/breadcrumb */ "./components/wrapped_admin_pages/components/breadcrumb/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer */ "./components/wrapped_admin_pages/components/footer/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/components/wrapped_admin_pages/index.js";










var WrappedAdminPagesComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WrappedAdminPagesComponent, _React$Component);

  function WrappedAdminPagesComponent() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WrappedAdminPagesComponent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WrappedAdminPagesComponent).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WrappedAdminPagesComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "page-container",
        className: "jsx-".concat(_style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "js-page-container page-container page-sidebar-fixed page-header-fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_left_sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "content",
        className: "jsx-".concat(_style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), this.props.children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_right_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: WrappedAdminPagesComponent.scrollTop,
        "data-click": "scroll-top",
        className: "jsx-".concat(_style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "btn btn-icon btn-circle btn-success btn-scroll-to-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "jsx-".concat(_style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "fa fa-angle-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
        __self: this
      }, _style_global_css__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
  }], [{
    key: "scrollTop",
    value: function scrollTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 279);
    }
  }]);

  return WrappedAdminPagesComponent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(WrappedAdminPagesComponent));

/***/ }),

/***/ "./components/wrapped_admin_pages/style.global.css":
/*!*********************************************************!*\
  !*** ./components/wrapped_admin_pages/style.global.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String("body,html{height:100%;}body{background:#d9e0e7;font-size:12px;font-family:'Open Sans',\"Helvetica Neue\",Helvetica,Arial,sans-serif;color:#707478;line-height:1.42857143;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.ie8 body{font-family:Arial,sans-serif;}h1,h2,h3,h4,h5,h6{font-weight:600;color:#242a30;}.h1,h1{font-size:36px;}.h2,h2{font-size:30px;}.h3,h3{font-size:24px;}.h4,h4{font-size:18px;}.h5,h5{font-size:14px;}.h6,h6{font-size:12px;}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-size:60%;font-weight:normal;color:#6a7786;}a{color:#348ee3;-webkit-transition:color 100ms ease-in-out;transition:color 100ms ease-in-out;}a:focus{outline:none;}b,strong{font-weight:bold;}label{color:#242a30;font-weight:600;}hr{border:none;height:1px;background:#f1f3f5;}.fc button .fc-icon,.datepicker th.prev,.datepicker th.next,.top-menu li>a .caret,.gallery .rating span.star,.wysihtml5-toolbar .glyphicon,.editable-buttons .glyphicon,.input-append .icon-eye-open,.input-prepend .icon-eye-open,.tagit .ui-icon-close:before,.sidebar li>a .caret:before,.attached-document>li:before,.float-sub-menu li>a .caret:before,.combobox-container .glyphicon-remove,.combobox-container .icon-remove:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after,.bootstrap-datetimepicker-widget .glyphicon,.bootstrap-calendar .calendar .icon-arrow-right,.bootstrap-calendar .calendar .icon-arrow-left,.theme-panel .theme-list>li.active>a:before,.sw-main>ul.step-anchor.nav-tabs>li.done>a .number:before,.simplecolorpicker.glyphicons span.color[data-selected]:after,.simplecolorpicker.fontawesome span.color[data-selected]:after,.jstree-default .jstree-checked>.jstree-checkbox:after,.jstree-default.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:after{font-family:Font Awesome\\ 5 Free !important;font-weight:900;font-style:normal;font-variant:normal;text-rendering:auto;}.page-header-fixed{padding-top:50px;}.page-header-fixed #header{position:fixed;}.page-header-fixed.has-scroll #header{box-shadow:0 0 24px rgba(0,0,0,0.15);}.page-sidebar-fixed .sidebar{position:fixed;}.page-without-sidebar .content{margin-left:0;}.page-with-right-sidebar .sidebar,.page-with-right-sidebar .sidebar-bg{left:auto;right:0;}.page-with-right-sidebar .content{margin-left:0;margin-right:220px;}.page-with-right-sidebar .footer{margin-left:30px;margin-right:250px;}.page-with-two-sidebar.page-sidebar-fixed .sidebar.sidebar-right{position:fixed;}.page-with-two-sidebar .sidebar.sidebar-right,.page-with-two-sidebar .sidebar-bg.sidebar-right{right:0;left:auto;}.page-with-two-sidebar .content{margin-right:220px;}.page-with-two-sidebar.page-sidebar-minified .sidebar.sidebar-right,.page-with-two-sidebar.page-sidebar-minified .sidebar-bg.sidebar-right{width:220px;}.page-with-two-sidebar.page-right-sidebar-collapsed .sidebar.sidebar-right,.page-with-two-sidebar.page-right-sidebar-collapsed .sidebar-bg.sidebar-right{right:-220px;}.page-with-two-sidebar.page-right-sidebar-collapsed .content{margin-right:0;}.page-with-two-sidebar.page-right-sidebar-collapsed.page-with-wide-sidebar .sidebar-bg.sidebar-right,.page-with-two-sidebar.page-right-sidebar-collapsed.page-with-wide-sidebar .sidebar.sidebar-right{right:-250px;}.page-with-two-sidebar.page-right-sidebar-collapsed .content,.page-with-two-sidebar.page-right-sidebar-collapsed.page-with-wide-sidebar .content{margin-right:0;}.boxed-layout{background-image:url(images/cover-pattern.png);}.boxed-layout .top-menu,.boxed-layout .pace{width:1080px;left:50%;margin-left:-540px;}.boxed-layout .page-container{width:1080px;margin:0 auto;box-shadow:0 0px 30px rgba(0,0,0,0.5);min-height:100%;background:#d9e0e7;overflow:hidden;position:relative;}.boxed-layout .page-container #header,.boxed-layout .page-container .sidebar,.boxed-layout .page-container .sidebar-bg{left:auto;}.boxed-layout .page-container #header{width:1080px;right:auto;}.boxed-layout .pace .pace-progress,.boxed-layout .pace .pace-activity,.boxed-layout .page-with-top-menu .top-menu{position:absolute;}.boxed-layout .page-sidebar-minified .sidebar,.boxed-layout .page-with-top-menu.page-sidebar-minified .sidebar{position:relative;float:left;padding-top:0;}#page-loader{position:fixed;top:0;left:0;bottom:0;right:0;background:#E6E8EC;z-index:9999;}#page-loader.fade{display:none;}#page-loader.fade.in,#page-loader.fade.show{display:block;}@-webkit-keyframes rotation{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);}}@-webkit-keyframes rotation{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}@keyframes rotation{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(359deg);-ms-transform:rotate(359deg);transform:rotate(359deg);}}.spinner,.spinner-small{height:40px;width:40px;margin:0px auto;position:absolute;top:50%;left:50%;margin:-20px 0 0 -20px;border:2px solid rgba(0,0,0,0.5);border-top:2px solid #fff;border-radius:100%;}.fade.in .spinner,.fade.in .spinner-small,.fade.show .spinner,.fade.show .spinner-small{-webkit-animation:rotation .6s infinite linear;-webkit-animation:rotation .6s infinite linear;animation:rotation .6s infinite linear;}.spinner-small{border:2px solid rgba(0,0,0,0.05);border-top:2px solid #24B498;height:30px;width:30px;margin:-15px 0 0 -15px;}.header{position:relative;top:0;left:0;right:0;z-index:1020;margin-bottom:0;padding:0;-webkit-transition:box-shadow .2s linear;transition:box-shadow .2s linear;}.header:before,.header:after{content:'';display:table;clear:both;}.header .navbar-toggle{position:relative;float:right;padding:10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:none;border-radius:4px;outline:none;}.header .navbar-toggle:hover,.header .navbar-toggle:focus{background:none !important;opacity:0.6;}.header .navbar-toggle.pull-left{margin-left:15px;margin-right:0;}.header .navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px;}.header .navbar-toggle .icon-bar+.icon-bar{margin-top:4px;}.header .navbar-header:before,.header .navbar-header:after{content:'';display:table;clear:both;}.header .navbar-brand{float:left;margin-right:10px;padding:10px 20px;height:50px;width:220px;font-weight:100;font-size:18px;line-height:30px;-webkit-text-decoration:none;text-decoration:none;}.header .navbar-logo{float:left;margin-right:10px;margin-top:5px;background:#00acac;border:10px solid transparent;border-color:rgba(0,0,0,0) rgba(0,0,0,0.15) rgba(0,0,0,0.3);position:relative;overflow:hidden;border-radius:4px;}.header .navbar{border:none;border-radius:0;box-shadow:none;}.header .navbar-nav{list-style-type:none;margin:0;padding:0;display:block;}.header .navbar-nav>li{float:left;position:relative;}.header .navbar-nav>li.divider{height:34px;margin-top:10px;background:#e2e7eb;width:1px;}.header .navbar-nav>li>a{display:block;-webkit-text-decoration:none;text-decoration:none;line-height:20px;padding:15px;}.header .navbar-nav>li>a:hover,.header .navbar-nav>li>a:focus{opacity:0.6;}.header .navbar-nav>li>a .label{position:absolute;top:8px;right:5px;display:block;background:#00acac;line-height:12px;font-weight:600;color:#fff;padding:.3em .6em .3em;border-radius:20px;}.header .navbar-nav>li>a>i{top:1px;position:relative;font-size:16px;}.header .navbar-nav>li>a.icon i{font-size:24px;height:24px;margin:-2px 0;display:block;}.header .navbar-nav>.open>a,.header .navbar-nav>.open>a:hover,.header .navbar-nav>.open>a:focus{background:none !important;color:#333;opacity:1.0;}.header .navbar-nav .dropdown-toggle:after{display:none;}.header .navbar-nav>li>.dropdown-menu{margin-top:0;border-top:1px solid #f2f3f4;box-shadow:0 13px 25px -2px rgba(0,0,0,0.2);border-top-left-radius:0;border-top-right-radius:0;}.header .navbar-nav>li>.dropdown-menu.media-list .media-heading{font-weight:600;margin:0;line-height:16px;font-size:12px;}.header .navbar-form{padding:0 15px;margin:9px 0;}.header .navbar-form .form-group{margin:0;}.header .navbar-form .btn-search{position:absolute;right:15px;top:9px;height:32px;padding-top:5px;padding-bottom:5px;border:none;background:none;border-radius:0 30px 30px 0;}.header .navbar-form .btn-search>i[class*=ion-]{font-size:22px;display:block;}.header .navbar-form .form-control{width:220px;padding:5px 15px;height:32px;background:#f2f3f4;border-color:#f2f3f4;border-radius:30px;}@-webkit-keyframes expand{from{width:220px;}to{width:300px;}}@keyframes expand{from{width:220px;}to{width:300px;}}@-webkit-keyframes expand{from{width:220px;}to{width:300px;}}.header .navbar-form .form-control:focus{width:300px;border-color:#f2f3f4;box-shadow:none;-webkit-animation:expand .2s;-webkit-animation:expand .2s;animation:expand .2s;}.fade .navbar-form .form-control{-webkit-animation:none;}.header .navbar-user img{float:left;width:30px;height:30px;margin:-5px 10px 0 0;border-radius:30px;}.navbar-header.navbar-header-without-bg .navbar-brand{background:none !important;}.navbar-language .flag-icon{font-size:15px;margin:2px 7px 0;float:left;}.header.navbar-default{background:#fff;}.header.navbar-default .brand,.header.navbar-default .navbar-brand{color:#333;}.header.navbar-default .navbar-toggle .icon-bar{background:#2d353c;}.header.navbar-default .navbar-nav>li>a{color:#585663;}.header.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#333;}.header.navbar-inverse{background:#1a2229;}.header.navbar-inverse .navbar-toggle .icon-bar{background:#585d61;}.header.navbar-inverse .navbar-brand,.header.navbar-inverse .navbar-nav>li>a{color:#a8acb1;}.header.navbar-inverse .navbar-nav>li.divider{background:#3F4B55;}.header.navbar-inverse .navbar-form{margin:10px 0;}.header.navbar-inverse .navbar-form .form-control,.header.navbar-inverse .navbar-form .form-control:focus{background:#585d62;border-color:#585d62;color:#fff;height:30px;}.header.navbar-inverse .navbar-form .form-control::-webkit-input-placeholder{color:#a8acb1;}.header.navbar-inverse .navbar-form .form-control::-moz-placeholder{color:#a8acb1;}.header.navbar-inverse .navbar-form .form-control:-ms-input-placeholder{color:#a8acb1;}.header.navbar-inverse .navbar-form .form-control:-moz-placeholder{color:#a8acb1;}.header.navbar-inverse .navbar-form .btn-search{color:#a8acb1;}.dropdown.dropdown-lg,.header .dropdown.dropdown-lg{position:static;}.dropdown-menu.dropdown-menu-lg{left:20px;right:20px;padding:20px;}.dropdown-header{font-size:14px;font-weight:bold;color:#242a30;padding:0;margin:0 0 10px;}.dropdown-menu.dropdown-menu-lg .nav>li>a{padding:0;background:none;line-height:24px;}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active.open>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{background:#f4f6f7 !important;opacity:1.0;}.sidebar{width:220px;position:absolute;left:0;top:0;bottom:0;padding-top:50px;background:#2d353c;z-index:1010;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.sidebar-bg{background:#2d353c;position:fixed;top:0;left:0;bottom:0;width:220px;z-index:1000;}.sidebar .nav{display:block;}.sidebar .nav>li{position:relative;}.sidebar .nav>li>a{padding:7px 20px;line-height:20px;color:#a8acb1;display:block;-webkit-text-decoration:none;text-decoration:none;}.sidebar .nav>li>a:hover,.sidebar .nav>li>a:focus{background:none;color:#fff;}.sidebar .nav>li:before,.sidebar .nav>li:after,.sidebar .nav>li>a:before,.sidebar .nav>li>a:after{content:'';clear:both;display:table;}.sidebar .nav>li>a i{float:left;margin-right:10px;width:14px;text-align:center;line-height:20px;font-size:14px;}.sidebar .nav>li>a i[class^=\"ion-\"]{margin-right:8px;width:18px;font-size:18px;margin-left:-2px;}.sidebar .nav>li>a .icon-img{float:left;margin-right:10px;margin-top:3px;width:14px;height:14px;overflow:hidden;border-radius:3px;}.sidebar .nav>li>a .icon-img img{max-width:100%;max-height:100%;display:block;}.sidebar .nav>li>a .badge{margin-top:1px;padding:3px 8px;background:#1b1f24;font-weight:600;font-size:10px;}.sidebar .nav>li.active>a{position:relative;z-index:10;}.sidebar .nav>li.active>a,.sidebar .nav>li.active>a:hover,.sidebar .nav>li.active>a:focus{color:#fff;background:#242a31;}.sidebar .nav>li.active>a i{color:#00acac;}.sidebar .nav>li.active>a .label.label-success,.sidebar .nav>li.active>a .badge.badge-success{background:#008a8a;}.sidebar .nav>li.nav-header{margin:0;padding:15px 20px 3px;line-height:20px;font-size:11px;color:#889097;font-weight:600;}.sidebar .nav>li.nav-header a{padding:0;margin:0;display:inline;}.sidebar .nav>li.nav-header a:hover,.sidebar .nav>li.nav-header a:focus{background:none;color:#fff;}.sidebar .nav>li.nav-header a i{float:none;margin:0;}.sidebar .nav>li.nav-profile{padding:20px;color:#fff;background:#1a2229;overflow:hidden;}.sidebar .nav>li.nav-profile a{padding:0;}.sidebar .nav>li.nav-profile>a{margin:-20px;padding:20px;display:block;color:#fff;}.sidebar .nav>li.nav-profile .image{width:34px;height:34px;margin-bottom:10px;overflow:hidden;border-radius:50%;position:relative;}.sidebar .nav>li.nav-profile .image img{max-width:100%;max-height:100%;}.sidebar .nav>li.nav-profile .info{font-size:14px;position:relative;}.sidebar .nav>li.nav-profile .info .caret{margin-top:2px;}.sidebar .nav>li.nav-profile .info small{display:block;color:rgba(255,255,255,0.75);font-size:12px;margin-bottom:-5px;}.sidebar .nav>li.nav-profile .cover{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;background-size:cover;}.sidebar .nav>li.nav-profile .cover.with-shadow:before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transition:all .2s linear;transition:all .2s linear;background:rgba(26,34,41,0.75);}.sidebar .nav>li.nav-profile a:hover .cover.with-shadow:before,.sidebar .nav>li.nav-profile a:focus .cover.with-shadow:before{opacity:0.75;}.sidebar .nav>li.nav-widget{padding:10px 20px;}.sidebar .nav>li.nav-widget i{margin-right:auto;}.sidebar .nav.nav-profile{padding:0;border-bottom:1px solid #242a31;padding-bottom:5px;display:none;}.sidebar .nav.nav-profile.active{display:block;}.sidebar.sidebar-grid .nav>li>a{border-bottom:1px solid #46505a;border-top:1px solid #46505a;}.sidebar.sidebar-grid .nav>li.active>a{border-color:#242a31;z-index:10;}.sidebar.sidebar-grid .nav>li.expanding>a,.sidebar.sidebar-grid .nav>li.expand>a{border-bottom-color:transparent;}.sidebar.sidebar-grid .nav>li+li{margin-top:-1px;}.gradient-enabled .sidebar .nav>li.active>a .label.label-theme,.gradient-enabled .sidebar .nav>li.active>a .badge{background:rgba(0,0,0,0.4);}.sidebar li>a .caret,.float-sub-menu li>a .caret{display:block;float:right;width:20px;height:20px;line-height:20px;text-align:center;font-size:11px;border:none;}.sidebar li>a .caret:before,.float-sub-menu li>a .caret:before{content:'\\f054';display:block;text-align:center;-webkit-transition:all .2s linear;transition:all .2s linear;opacity:0.5;}.sidebar li.active>a .caret:before,.sidebar li.expanding>a .caret:before,.sidebar li.expand>a .caret:before,.float-sub-menu li.active>a .caret:before,.float-sub-menu li.expanding>a .caret:before,.float-sub-menu li.expand>a .caret:before{opacity:1.0;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.sidebar li.closing>a .caret:before,.sidebar li.closed>a .caret:before,.float-sub-menu li.closing>a .caret:before,.float-sub-menu li.closed>a .caret:before{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}.sidebar .sub-menu{list-style-type:none;padding:5px 0 10px 39px;margin:0;position:relative;display:none;}.sidebar .sub-menu>li{position:relative;}.sidebar .sub-menu>li:before{content:'';position:absolute;left:-13px;top:0;bottom:0;width:2px;}.sidebar .sub-menu>li:after{content:'';position:absolute;left:0;width:6px;height:6px;border:1px solid #889097;top:11px;border-radius:4px;margin-top:-2px;z-index:10;background:#2d353c;}.sidebar .sub-menu>li:first-child:before{top:-14px;}.sidebar .sub-menu>li:first-child:last-child:before{height:27px;}.sidebar .sub-menu>li:last-child:before{bottom:auto;height:13px;}.sidebar .sub-menu>li:before,.sidebar .sub-menu>li>a:after,.sidebar .sub-menu>li.has-sub>a:before{background:#242a31;}.sidebar .sub-menu>li.active:after{border-color:#00acac;}.sidebar .sub-menu>li>a{padding:3px 20px 3px 15px;display:block;color:#889097;-webkit-text-decoration:none;text-decoration:none;position:relative;}.sidebar .sub-menu>li>a:hover,.sidebar .sub-menu>li>a:focus,.sidebar .sub-menu>li.active>a,.sidebar .sub-menu>li.active>a:hover,.sidebar .sub-menu>li.active>a:focus{color:#fff;}.sidebar .sub-menu>li>a:after{content:'';position:absolute;left:-11px;top:11px;width:11px;height:2px;}.sidebar .sub-menu>li.has-sub>a:before{content:'';position:absolute;left:2px;top:11px;bottom:11px;width:2px;}.sidebar .sub-menu .sub-menu{padding:0 0 0 15px;background:none;}.sidebar .nav>li li.has-sub.active>a{color:#889097;}.sidebar .has-sub.active>.sub-menu{display:block;}.sidebar .nav .sub-menu>li>a .caret{margin-top:-1px;left:-5px;color:#a3a7ac;}.page-sidebar-minified .sidebar{width:60px;position:absolute;}.page-sidebar-minified .sidebar-bg{width:60px;}.page-sidebar-minified .content{margin-left:60px;}.page-sidebar-minified .footer{margin-left:85px;}.page-sidebar-minified.page-sidebar-fixed .sidebar{position:fixed;}.page-sidebar-minified:not(.page-sidebar-fixed) .sidebar .slimScrollDiv,.page-sidebar-minified:not(.page-sidebar-fixed) .sidebar .slimScrollDiv>div{overflow:visible !important;height:auto !important;}.page-sidebar-minified .sidebar.sidebar-right .slimScrollDiv,.page-sidebar-minified .sidebar.sidebar-right .slimScrollDiv>div,.page-sidebar-minified.page-sidebar-fixed .sidebar .slimScrollDiv,.page-sidebar-minified.page-sidebar-fixed .sidebar .slimScrollDiv>div{overflow:hidden !important;}.page-sidebar-minified .sidebar .nav>li>a{padding:10px 20px;}.page-sidebar-minified .sidebar .nav-profile,.page-sidebar-minified .sidebar .nav-header,.page-sidebar-minified .sidebar .nav>li>a>span{display:none;}.page-sidebar-minified .sidebar .caret{position:absolute;top:10px;right:5px;}.page-sidebar-minified .sidebar .caret:before,.page-sidebar-minified .sidebar li.active .caret:before,.page-sidebar-minified .sidebar li.expanding .caret:before,.page-sidebar-minified .sidebar li.expand .caret:before{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}.page-sidebar-minified .sidebar .nav>li>a>i{margin:0;}.page-sidebar-minified .sidebar .nav li.has-sub>.sub-menu{position:absolute;left:100%;top:0;width:220px;display:none;padding:10px 0 10px 30px;margin:0;background:#242a31;}.page-sidebar-minified .sidebar-minify-btn i:before{content:'\\f101';}.page-sidebar-minified.page-with-right-sidebar .content{margin-right:60px;margin-left:0;}.page-sidebar-minified.page-with-right-sidebar .footer{margin-right:90px;margin-left:30px;}.page-sidebar-minified.page-with-right-sidebar .sub-menu{left:auto !important;right:100%;}.page-sidebar-minified.page-with-right-sidebar .nav>li.has-sub>a .caret{position:absolute;left:0;}.page-sidebar-minified.page-with-right-sidebar .nav>li.has-sub>a .caret:before{content:'\\f104';}.page-sidebar-minified.page-with-right-sidebar .sidebar .sub-menu .caret{left:0;top:2px;border-left:4px solid transparent !important;border-right:4px solid !important;}.page-sidebar-minified.page-with-right-sidebar .sidebar .nav li.has-sub>.sub-menu{padding:10px 30px 10px 0;}.page-sidebar-minified.page-with-right-sidebar .sidebar .sub-menu:before{right:26px;left:auto;}.page-sidebar-minified.page-with-right-sidebar .sidebar .sub-menu>li>a:before{right:0;left:auto;margin-right:-6px;margin-left:0;}.page-sidebar-minified.page-with-right-sidebar .sidebar-minify-btn i:before{content:'\\f100';}.page-sidebar-minified .sidebar .slimScrollBar,.page-sidebar-minified .sidebar .slimScrollRail{display:none !important;}.page-sidebar-minified .sidebar.sidebar-right .slimScrollBar{display:block !important;}.sidebar-minify-btn{margin:10px 0;float:right;padding:5px 20px 5px 10px !important;background:#1b1f24;color:#fff;border-radius:20px 0 0 20px;}.sidebar-minify-btn:hover,.sidebar-minify-btn:focus{background:#575d63 !important;}.sidebar-minify-btn i{margin:0 !important;color:#fff;}.page-with-light-sidebar .sidebar,.page-with-light-sidebar .sidebar-bg{background:#fff;}.page-with-light-sidebar .sidebar .nav>li>a,.flat-black .page-with-light-sidebar .sidebar .nav>li>a{color:#575d63;font-weight:600;}.page-with-light-sidebar .sidebar .nav>li.nav-profile a,.page-with-light-sidebar .sidebar .nav>li.nav-profile.active a,.page-with-light-sidebar .sidebar .nav>li.nav-profile.active a:hover,.page-with-light-sidebar .sidebar .nav>li.nav-profile.active a:focus{color:#fff;}.page-with-light-sidebar .sidebar .nav>li .sub-menu,.page-sidebar-minified.page-with-light-sidebar .sidebar .nav li.has-sub>.sub-menu,.page-sidebar-minified.page-with-light-sidebar .sidebar .nav>li.has-sub:focus>a,.page-sidebar-minified.page-with-light-sidebar .sidebar .nav>li.has-sub:hover>a{background:none;color:#2d353c;}.page-with-light-sidebar .sidebar .nav>li.active>a{color:#fff;}.page-with-light-sidebar .sidebar .nav.nav-profile{border-bottom:1px solid #B1B9C0;}.page-with-light-sidebar .sidebar .nav>li .sub-menu:before{background:#B1B9C0;}.page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn,.page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn:hover,.page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn:focus,.page-with-light-sidebar .sidebar .nav>li.active.expand>a,.page-with-light-sidebar .sidebar .nav>li.active>a,.page-with-light-sidebar .sidebar .nav>li.active>a:hover,.page-with-light-sidebar .sidebar .nav>li.active>a:focus,.page-with-light-sidebar.page-sidebar-minified .sidebar .nav>li.active>a,.page-with-light-sidebar.page-sidebar-minified .sidebar .nav>li.active:hover>a,.page-with-light-sidebar.page-sidebar-minified .sidebar .nav>li.active:focus>a{color:#2d353c;background:#E6E9EA;font-weight:600;}.flat-black .page-with-light-sidebar .sidebar .nav>li.active>a,.flat-black .page-with-light-sidebar .sidebar .nav>li.active>a:hover,.flat-black .page-with-light-sidebar .sidebar .nav>li.active>a:focus,.flat-black .page-with-light-sidebar .sidebar .nav>li.active.expand>a,.flat-black .page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn,.flat-black .page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn:hover,.flat-black .page-with-light-sidebar .sidebar .nav>li .sidebar-minify-btn:focus{background:#e0e0e0;}.page-with-light-sidebar .sidebar .nav>li.expand>a,.page-with-light-sidebar .sidebar .nav>li>a:hover,.page-with-light-sidebar .sidebar .nav>li>a:focus{background:none;}.page-with-light-sidebar .sidebar .nav>li .sub-menu>li.active>a:before{color:#575d63;}.page-with-light-sidebar .sidebar .sub-menu>li>a{font-weight:normal;}.page-with-light-sidebar .sidebar .sub-menu>li.active>a{font-weight:600;}.page-with-light-sidebar .sidebar .sub-menu>li>a:focus,.page-with-light-sidebar .sidebar .sub-menu>li>a:hover,.page-with-light-sidebar .sidebar .sub-menu>li.active>a,.page-with-light-sidebar .sidebar .sub-menu>li.active>a:focus,.page-with-light-sidebar .sidebar .sub-menu>li.active>a:hover,.flat-black .page-with-light-sidebar .sidebar .sub-menu>li.active>a{color:#333;}.flat-black .page-with-light-sidebar .sidebar .sub-menu,.flat-black .page-with-light-sidebar .sidebar .nav>li.nav-profile,.flat-black .page-with-light-sidebar.page-sidebar-minified .sidebar .nav li.has-sub>.sub-menu{background:#f5f5f5;}.page-with-light-sidebar .sidebar .sub-menu>li:before,.page-with-light-sidebar .sidebar .sub-menu>li>a:after,.page-with-light-sidebar .sidebar .sub-menu>li.has-sub>a:before{background:#e7e9ea;}.page-with-light-sidebar .sidebar .sub-menu>li:after{background:#fff;}.page-with-light-sidebar .sidebar .slimScrollBar{background:#000 !important;}.page-with-wide-sidebar .sidebar,.page-with-wide-sidebar .sidebar+.sidebar-bg,.page-with-wide-sidebar.page-sidebar-minified .sidebar.sidebar-right,.page-with-wide-sidebar.page-sidebar-minified .sidebar-bg.sidebar-right{width:250px;}.page-with-wide-sidebar .content{margin-left:250px;}.page-with-wide-sidebar.page-with-right-sidebar:not(.page-sidebar-minified) .content{margin-right:250px;margin-left:0;}.page-with-wide-sidebar.page-with-two-sidebar .content{margin-left:250px;margin-right:250px;}.page-with-wide-sidebar.page-sidebar-minified .sidebar,.page-with-wide-sidebar.page-sidebar-minified .sidebar+.sidebar-bg{width:60px;}.page-with-wide-sidebar.page-sidebar-minified:not(.page-with-right-sidebar) .content{margin-left:60px;}.page-with-wide-sidebar .footer{margin-left:280px;}.page-with-wide-sidebar.page-with-right-sidebar:not(.page-sidebar-minified) .footer{margin-left:30px;margin-right:280px;}.sidebar.sidebar-transparent{background:none;}.sidebar.sidebar-transparent .nav>li.nav-profile,.sidebar.sidebar-transparent .nav>li.nav-profile.active{background:rgba(0,0,0,0.25);}.sidebar.sidebar-transparent .nav>li.nav-profile a:hover,.sidebar.sidebar-transparent .nav>li.nav-profile a:focus,.sidebar.sidebar-transparent .nav>li.nav-profile .cover,.sidebar.sidebar-transparent .nav>li.nav-profile .cover.with-shadow:before{background:none;}.sidebar.sidebar-transparent .sub-menu{background:none;}.page-sidebar-toggled.page-sidebar-minified .sidebar.sidebar-transparent+.sidebar-bg,.sidebar.sidebar-transparent+.sidebar-bg{background:url(images/cover-sidebar.jpg);background-size:cover;}.sidebar.sidebar-transparent+.sidebar-bg:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(45,53,60,0.75);}.page-sidebar-minified .sidebar.sidebar-transparent .nav>li.has-sub .sub-menu{background:rgba(26,34,41,0.85);}.sidebar.sidebar-transparent .nav>li.nav-header{color:#fff;}.page-sidebar-minified .sidebar.sidebar-transparent .nav>li.has-sub:hover>a,.page-sidebar-minified .sidebar.sidebar-transparent .nav>li.has-sub:focus>a,.sidebar.sidebar-transparent .nav>li.expand>a,.sidebar.sidebar-transparent .nav>li>a:focus,.sidebar.sidebar-transparent .nav>li>a:hover{background:none;color:#fff;}.sidebar.sidebar-transparent .has-sub.active>.sub-menu{overflow:hidden;}.sidebar.sidebar-transparent .nav>li.active>a,.sidebar.sidebar-transparent .nav>li.active>a:hover,.sidebar.sidebar-transparent .nav>li.active>a:focus{background:rgba(0,0,0,0.3);}.sidebar.sidebar-transparent .sub-menu>li:before,.sidebar.sidebar-transparent .sub-menu>li>a:after,.sidebar.sidebar-transparent .sub-menu>li.has-sub>a:before{background:rgba(0,0,0,0.3);}.page-with-right-sidebar .sidebar{text-align:right;}.page-with-right-sidebar .sidebar .nav>li>a .icon-img,.page-with-right-sidebar .sidebar .nav>li>a i{float:right;margin-left:10px;margin-right:0;}.page-with-right-sidebar .sidebar .sub-menu{padding-left:0;padding-right:39px;}.page-with-right-sidebar .sidebar .sub-menu>li:before{left:auto;right:-13px;}.page-with-right-sidebar .sidebar .sub-menu>li:after{left:auto;right:0;}.page-with-right-sidebar .sidebar .sub-menu>li>a{padding-left:20px;padding-right:15px;}.page-with-right-sidebar .sidebar .sub-menu>li>a:after{left:auto;right:-11px;}.page-with-right-sidebar .sidebar .nav>li.nav-profile .image{margin-left:auto;margin-right:0;}.page-with-right-sidebar .sidebar .sub-menu .sub-menu{padding-left:0;padding-right:15px;}.page-with-right-sidebar.page-sidebar-minified .sidebar li>a .caret{margin-left:5px;}.page-with-right-sidebar.page-sidebar-minified .sidebar li>a .caret:before{-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}.page-with-right-sidebar .float-sub-menu-line,.page-with-right-sidebar .float-sub-menu-arrow,.page-with-right-sidebar .float-sub-menu li:after{left:auto;right:0;}.page-with-right-sidebar .sidebar li.active>a .caret:before,.page-with-right-sidebar .sidebar li.expanding>a .caret:before,.page-with-right-sidebar .sidebar li.expand>a .caret:before,.page-with-right-sidebar .float-sub-menu li.active>a .caret:before,.page-with-right-sidebar .float-sub-menu li.expanding>a .caret:before,.page-with-right-sidebar .float-sub-menu li.expand>a .caret:before{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}.page-with-right-sidebar .float-sub-menu{padding-left:0;padding-right:39px;text-align:right;}.page-with-right-sidebar .float-sub-menu li>a{padding-left:15px;padding-right:20px;}.page-with-right-sidebar .float-sub-menu li>a .caret,.page-with-right-sidebar .sidebar li>a .caret{float:left;margin-left:-5px;margin-right:2px;font-size:16px;}.page-with-right-sidebar .float-sub-menu .sub-menu{padding-left:0;padding-right:15px;}.page-with-right-sidebar .float-sub-menu li>a .caret:before,.page-with-right-sidebar .sidebar li>a .caret:before{content:'\\f104';}.page-with-right-sidebar .float-sub-menu li:before{right:-13px;left:auto;}.page-with-right-sidebar .float-sub-menu li>a:after{right:-11px;left:auto;}.float-sub-menu-container{position:fixed;width:220px;margin:0;background:#242a31;z-index:1020;}.float-sub-menu{padding:9px 0 9px 39px;margin:0;list-style-type:none;}.float-sub-menu .sub-menu{display:none;list-style-type:none;}.float-sub-menu .active>.sub-menu{display:block;}.float-sub-menu li{position:relative;}.float-sub-menu li:first-child:before{top:-14px;}.float-sub-menu>li:first-child:before{top:11px;}.float-sub-menu-arrow{position:absolute;top:20px;left:0;width:28px;height:2px;background:#2e353c;}.float-sub-menu-line{position:absolute;top:20px;left:26px;width:2px;background:#2e353c;}.float-sub-menu .float-sub-menu-arrow:before,.float-sub-menu .float-sub-menu-arrow:after{display:none !important;}.float-sub-menu li:before,.float-sub-menu li>a:after,.float-sub-menu li.has-sub>a:before{background:#2d353c;}.float-sub-menu li:before{content:'';position:absolute;left:-13px;top:0;bottom:0;width:2px;}.float-sub-menu li:last-child:before{bottom:auto;height:13px;}.float-sub-menu>li:first-child:last-child:before{height:0px !important;}.float-sub-menu li:first-child:last-child:before{height:27px;}.float-sub-menu li:after{content:'';position:absolute;left:0;width:6px;height:6px;border:1px solid #889097;top:11px;border-radius:4px;margin-top:-2px;z-index:10;background:#242a31;}.float-sub-menu li.has-sub>a:before{content:'';position:absolute;left:2px;top:11px;bottom:11px;width:2px;}.float-sub-menu li>a:after{content:'';position:absolute;left:-11px;top:11px;width:11px;height:2px;}.float-sub-menu .sub-menu{padding:0 0 0 15px;background:none;}.float-sub-menu li>a{line-height:18px;padding:3px 20px 3px 15px;display:block;color:#889097;-webkit-text-decoration:none;text-decoration:none;position:relative;}.float-sub-menu li>a:hover,.float-sub-menu li>a:focus,.float-sub-menu li.active>a,.float-sub-menu li.active>a:hover,.float-sub-menu li.active>a:focus{color:#fff;}.float-sub-menu li.active:after{border-color:#00acac;}.float-sub-menu li>a .caret{margin-top:-1px;color:#a3a7ac;}.content{margin-left:220px;padding:20px 30px 50px;}.content.content-full-width{padding:0;}.content.content-full-width .page-header{margin:20px;}.content.content-full-width .breadcrumb{margin:0 20px 0 0;}.content.content-inverse-mode h1,.content.content-inverse-mode h2,.content.content-inverse-mode h3,.content.content-inverse-mode h4,.content.content-inverse-mode h5,.content.content-inverse-mode h6,.content.content-inverse-mode .page-header,.content.content-inverse-mode .breadcrumb a{color:#fff;}.content.content-inverse-mode .breadcrumb>li,.content.content-inverse-mode .page-header small{color:rgba(255,255,255,0.75);}.content.content-full-width .page-header,.content.content-full-width .breadcrumb{position:relative;z-index:10;}.content.content-full-width .breadcrumb{z-index:20;}.page-content-full-height .content{position:absolute;left:0;top:50px;right:0;bottom:0;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.page-header{font-size:24px;margin:0 0 15px;padding:0;border:none;line-height:32px;font-weight:500;}.page-header small{line-height:20px;}.breadcrumb{padding:0;margin:0;background:none;}.breadcrumb>li{line-height:32px;}.ie8 .breadcrumb>li{display:inline;}.breadcrumb>li a{color:#333;}.breadcrumb-item+.breadcrumb-item::before{color:#ccc;}.footer{z-index:1020;padding:10px 0;margin:0 30px 0 250px;border-top:1px solid #CAD0D6;line-height:20px;}.page-with-top-menu{padding-top:90px;}.page-with-top-menu .sidebar{padding-top:90px;}.top-menu{background:#2d353c;height:40px;position:fixed;top:50px;left:0;right:0;z-index:1015;}.top-menu .nav{white-space:nowrap;display:block;}.top-menu .nav>li{display:inline-block;position:relative;}.top-menu .nav>li+li{margin-left:-3px;}.top-menu .nav>li>a{padding:10px 20px;color:#a8acb1;display:block;line-height:20px;-webkit-text-decoration:none;text-decoration:none;}.top-menu li>a .caret{display:block;float:right;width:20px;height:20px;line-height:20px;text-align:center;font-size:11px;border:none;}.top-menu li>a .caret:before{content:'\\f107';display:block;text-align:center;-webkit-transition:all .2s linear;transition:all .2s linear;opacity:0.5;}.top-menu .nav>li>a .badge,.top-menu .nav>li>a .label{margin-left:5px;}.top-menu .nav>li>a .badge{background:#1b1f24;}.top-menu .nav>li>a .icon-img{float:left;margin-right:7px;width:20px;height:20px;margin-left:-3px;overflow:hidden;border-radius:4px;}.top-menu .nav>li>a .icon-img img{max-width:100%;max-height:100%;display:block;}.top-menu .nav>li>a .badge.pull-right,.top-menu .nav>li>a .label.pull-right{margin-top:1px;}.top-menu .nav>li.active>a .label.label-theme,.top-menu .nav>li.active>a .badge{background:rgba(0,0,0,0.4);}.top-menu .nav>li>a i{float:left;font-size:14px;margin-right:10px;line-height:20px;width:14px;text-align:center;}.top-menu .nav>li>a .caret.pull-right{margin-top:8px;margin-left:5px;}.top-menu .nav>li:hover>a,.top-menu .nav>li:focus>a,.top-menu .nav>li>a:hover,.top-menu .nav>li>a:focus{background:none;color:#fff;}.top-menu .nav .sub-menu{display:none;position:absolute;left:0;width:220px;top:100%;background:#1a2229;list-style-type:none;margin:0;padding:10px 0;}.top-menu .sub-menu>li>a{padding:5px 20px;display:block;color:#8a8f94;-webkit-text-decoration:none;text-decoration:none;position:relative;}.top-menu .nav .sub-menu>li>a .caret{margin-top:-1px;}.top-menu .sub-menu .sub-menu{background:rgba(0,0,0,0.2);position:relative;left:0;top:0;}.top-menu .sub-menu>li>a:hover,.top-menu .sub-menu>li>a:focus,.top-menu .sub-menu>li.active>a,.top-menu .sub-menu>li.active>a:hover,.top-menu .sub-menu>li.active>a:focus{color:#fff;}.top-menu .nav>li.has-sub:hover>.sub-menu{display:block;}.top-menu .nav>li.active>a,.top-menu .nav>li.active>a:hover,.top-menu .nav>li.active>a:focus{background:#242a31;color:#fff;}.top-menu .nav>li.menu-control{position:absolute;top:0;width:40px;background:#2d353c;height:40px;margin:0;}.top-menu .nav>li.menu-control>a{padding:0;text-align:center;line-height:40px;}.top-menu .nav>li.menu-control>a i{float:none;margin:0;font-size:18px;display:block;line-height:40px;color:#fff;width:auto;}.top-menu .nav>li.menu-control.menu-control-left{left:-50px;}.top-menu .nav>li.menu-control.menu-control-right{right:-50px;}@-webkit-keyframes slideInLeft{from{left:-50px;}to{left:0;}}@keyframes slideInLeft{from{left:-50px;}to{left:0;}}@-webkit-keyframes slideInLeft{from{left:-50px;}to{left:0;}}@-webkit-keyframes slideInRight{from{right:-50px;}to{right:0;}}@keyframes slideInRight{from{right:-50px;}to{right:0;}}@-webkit-keyframes slideInRight{from{right:-50px;}to{right:0;}}.top-menu .nav>li.menu-control.menu-control-left.show{-webkit-animation:slideInLeft .2s;-webkit-animation:slideInLeft .2s;animation:slideInLeft .2s;left:0;}.top-menu .nav>li.menu-control.menu-control-right.show{-webkit-animation:slideInRight .2s;-webkit-animation:slideInRight .2s;animation:slideInRight .2s;right:0;}.top-menu .nav>li.menu-control.menu-control-left>a{box-shadow:5px 0 8px -3px rgba(0,0,0,0.5);}.top-menu .nav>li.menu-control.menu-control-right>a{box-shadow:-5px 0 8px -3px rgba(0,0,0,0.5);}.form-control{border:1px solid #d3d8de;box-shadow:none;font-size:12px;line-height:1.42857143;height:34px;padding:6px 12px;}.form-control:focus,.form-control.focus,.form-control.input-white:focus,.form-control.input-white.focus{border-color:#5db0ff;outline:0;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3);}.form-control.form-control-with-bg,.form-control-with-bg .form-control{background:#f2f3f4;}.form-control.input-lg,.form-control.form-control-lg{font-size:14px;}.form-control.input-xs{height:20px;}.form-control.input-inline{display:inline;width:auto;padding:0 7px;}.form-control.input-white{background:#fff;border-color:#fff;}.form-control.inverse-mode{background:url(images/transparent/white-0.2.png);background:rgba(255,255,255,0.2);color:#fff;}.form-control.inverse-mode{border-color:transparent;}.form-control.inverse-mode:focus{border-color:transparent;box-shadow:0 0 0 0.125rem rgba(255,255,255,0.5);}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background:#e5e9ed;opacity:0.6;}.form-control[disabled]:focus,.form-control[readonly]:focus,fieldset[disabled] .form-control:focus{box-shadow:none;border:1px solid #ccd0d4;}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{opacity:0.6;}.form-control-plaintext{display:block;width:100%;height:30px;margin-bottom:0;line-height:1.42857143;padding:6px 0;background-color:transparent;border:solid transparent;border-width:1px 0;}select.form-control:not([size]):not([multiple]){height:34px;}select[multiple],select[size],textarea.form-control{height:auto;}.col-form-label,.row.form-group>.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text,select.form-control-lg:not([size]):not([multiple]){height:46px;padding:10px 16px;line-height:1.3333333;border-radius:6px;}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text,select.form-control-sm:not([size]):not([multiple]){height:30px;padding:5px 10px;line-height:1.5;border-radius:3px;font-size:12px;}.input-group .form-control:last-child,.input-group-addon:first-child,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0;}.input-group-addon:last-child,.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{font-size:14px;}.form-horizontal .control-label,.form-horizontal .col-form-label{padding-top:7px;margin-bottom:0;text-align:left;}.form-horizontal.form-horizontal-text-right .control-label,.form-horizontal.form-horizontal-text-right .col-form-label{text-align:right;}.form-horizontal [class*=\"col-\"]{position:initial;}.form-horizontal.form-bordered .form-group{border-bottom:1px solid #eee;margin:0;}.form-horizontal.form-bordered .form-group:last-child{border-bottom:0;}.form-horizontal.form-bordered .form-group>.control-label,.form-bordered .form-group>.col-form-label{padding:22px 15px 15px;}.form-horizontal.form-bordered .form-group>div{padding:15px;}.form-horizontal.form-bordered .form-group>div{border-left:1px solid #eee;}.form-horizontal.form-bordered .form-group>.control-label{border-right:1px solid #eee;margin-right:-1px;}.form-horizontal.form-bordered .has-feedback .form-control-feedback{top:15px;}.form-check{padding-top:7px;}.form-inline .form-check{padding-top:0;}.form-check-input{margin-top:2px;}.form-check-input:disabled~.form-check-label{color:#7b7f83;}.valid-feedback,.invalid-feedback{font-size:90%;}.valid-tooltip,.invalid-tooltip{font-size:12px;}.valid-feedback,.has-success .col-form-label,.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success .form-control-feedback,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label,.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#008a8a;}.valid-tooltip{background:rgba(0,172,172,0.8);}.has-success .form-control,.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#00acac;box-shadow:none;}.has-success .form-control:focus,.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#008a8a;outline:0;box-shadow:0 0 0 0.125rem rgba(0,172,172,0.3);}.has-success .input-group-addon{color:#025656;background-color:#b3e6e6;border-color:#00acac;}.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label,.has-warning .col-form-label,.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning .form-control-feedback{color:#c47d15;}.has-warning .form-control{border-color:#f59c1a;box-shadow:none;}.has-warning .form-control:focus{border-color:#c47d15;outline:0;box-shadow:0 0 0 0.125rem rgba(245,156,26,0.3);}.has-warning .input-group-addon{background-color:#fce1ba;color:#7b4e0e;}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error .form-control-feedback,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label,.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label,.invalid-feedback{color:#cc4946;}.has-error .form-control,.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#ff5b57;box-shadow:none;}.has-error .form-control:focus,.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#cc4946;outline:0;box-shadow:0 0 0 0.125rem rgba(204,73,70,0.3);}.invalid-tooltip{background:rgba(255,91,87,0.8);}.has-error .input-group-addon{background-color:#ffcdcc;color:#802d2b;}.form-control-feedback{line-height:34px;}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;color:#555;text-align:center;border-radius:4px;}.input-group-addon:focus{outline:none !important;}.input-group-addon .glyphicon{position:relative;top:1px;}.input-group-addon,.input-group-text{background-color:#d3d8df;border:none;}.input-group-text{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:0;}legend{padding-bottom:3px;border-bottom:1px solid #e2e7eb;}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373;}.dropdown-menu{border:none;box-shadow:0 5px 30px 0px rgba(0,0,0,0.25);font-size:12px;}.dropdown-menu>li>a,.dropdown-item{display:block;padding:5px 15px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap;-webkit-text-decoration:none;text-decoration:none;}.dropdown-item:hover,.dropdown-item:focus,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{background:#f2f3f4;}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{background:#348fe2;color:#fff;}.dropdown-menu .divider,.dropdown-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5;}.dropdown-menu .divider{border-color:#e5e5e5;}.dropdown-menu.media-list{max-width:360px;padding:0;}.dropdown-menu.media-list p{text-overflow:ellipsis;overflow:hidden;margin-bottom:5px;line-height:16px;max-width:270px;color:#585c61;}.dropdown-menu.media-list .dropdown-header{padding:10px 15px !important;background:#f2f3f4;font-size:10px;color:#585c61;}.dropdown-menu.media-list .dropdown-header+.media{margin-top:-10px;}.dropdown-menu.media-list>.media{margin-top:0;border-top:1px solid #f2f3f4;border-bottom:1px solid #f2f3f4;margin-bottom:-1px;}.dropdown-menu.media-list>.media>a{display:block;padding:10px 15px !important;clear:both;white-space:nowrap;}.dropdown-menu.media-list>.media>a:hover,.dropdown-menu.media-list>.media>a:focus{background:#f9f9f9;}.dropdown-menu.media-list>.media .media-left{padding-right:10px;}.dropdown-menu.media-list>.media .media-right{padding-left:10px;}.dropdown-menu.media-list>.media .media-object{height:48px;width:48px;line-height:48px;font-size:18px;color:#fff;text-align:center;border-radius:6px;}.dropdown-menu.media-list>.media .media-object-icon{position:absolute;margin-left:30px;border:2px solid #fff;border-radius:40px;background:#fff;margin-top:-11px;display:block;width:22px;height:22px;text-align:center;font-size:18px;line-height:18px;}.dropdown-footer{padding:10px 15px;}.dropdown-menu>li.dropdown-footer>a{padding:0 !important;display:inline !important;}.dropdown-menu>li.dropdown-footer>a:hover,.dropdown-menu>li.dropdown-footer>a:focus{background:none !important;-webkit-text-decoration:underline !important;text-decoration:underline !important;}.dropdown-toggle:after{vertical-align:1px;border-width:4px;}.dropdown-toggle.no-caret:after{display:none;}.tooltip-inner{font-size:12px;padding:4px 10px;border-radius:3px;}.alert{border:none;padding:15px;}.alert.alert-success{background:#b3e6e6;color:#025656;}.alert.alert-info{background:#c8e9f3;color:#255b6c;}.alert.alert-danger{background:#ffcdcc;color:#802d2b;}.alert.alert-warning{background:#fce1ba;color:#7b4e0e;}.alert.alert-primary{background:#c2ddf7;color:#1a4772;}.alert.alert-dark{background:#c0c2c4;color:#5b6165;}.alert.alert-secondary{background:#e9edef;color:#5b6165;}.alert.alert-light{background:#fff;color:#62686d;}.alert.alert-purple{background:#d4d7e9;color:#393e5b;}.alert.alert-yellow{background:#fff4b2;color:#806d00;}.alert.alert-lime{background:#ddefc9;color:#486626;}.alert.alert-success .alert-link{color:#012b2b;}.alert.alert-info .alert-link{color:#122e36;}.alert.alert-danger .alert-link{color:#401716;}.alert.alert-warning .alert-link{color:#3d2707;}.alert.alert-primary .alert-link{color:#0d2439;}.alert.alert-dark .alert-link{color:#2e3132;}.alert.alert-secondary .alert-link{color:#2e3132;}.alert.alert-light .alert-link{color:#2e353c;}.alert.alert-purple .alert-link{color:#1d1f2e;}.alert.alert-yellow .alert-link{color:#403600;}.alert.alert-lime .alert-link{color:#243313;}.note{margin-bottom:20px;padding:15px;border-left:3px solid;position:relative;border-radius:4px;}.panel>.note{border-radius:0;}.note h1,.note h2,.note h3,.note h4,.note h5,.note h6{color:inherit;}.note .note-icon{position:absolute;top:0;left:0;bottom:0;width:80px;font-size:56px;line-height:56px;text-align:center;}.note .note-icon>i{position:absolute;left:0;right:0;top:50%;margin-top:-28px;}.note .note-icon+.note-content{margin-left:85px;}.note.note-with-right-icon{border-left:none;border-right:3px solid;}.note.note-with-right-icon .note-icon{left:auto;right:0;}.note.note-with-right-icon .note-content{margin-left:0;margin-right:85px;}.note.note-danger{border-color:#ff5b57;background:#ffcdcc;color:#802d2b;}.note.note-danger .note-icon{background:#ff5b57;}.note.note-warning{border-color:#f59c1a;background:#fce1ba;color:#7b4e0e;}.note.note-warning .note-icon{background:#f59c1a;}.note.note-yellow{border-color:#ffd900;background:#fff4b2;color:#806d00;}.note.note-yellow .note-icon{background:#ffd900;}.note.note-lime{border-color:#90ca4b;background:#ddefc9;color:#486626;}.note.note-lime .note-icon{background:#90ca4b;}.note.note-success{border-color:#00acac;background:#b3e6e6;color:#025656;}.note.note-success .note-icon{background:#00acac;}.note.note-primary{border-color:#348fe2;background:#c2ddf7;color:#1a4772;}.note.note-primary .note-icon{background:#348fe2;}.note.note-info{border-color:#49b6d6;background:#c8e9f3;color:#255b6c;}.note.note-info .note-icon{background:#49b6d6;}.note.note-purple{border-color:#727cb6;background:#d4d7e9;color:#393e5b;}.note.note-purple .note-icon{background:#727cb6;}.note.note-dark,.note.note-inverse{border-color:#2d353c;background:#c0c2c4;color:#5b6165;}.note.note-dark .note-icon,.note.note-inverse .note-icon{background:#2d353c;}.note.note-secondary,.note.note-default{border-color:#b6c2c9;background:#e9edef;color:#5b6165;}.note.note-secondary .note-icon,.note.note-default .note-icon{background:#b6c2c9;}.note.note-light{border-color:#f2f3f4;background:#fff;color:#62686d;}.note.note-light .note-icon{background:#f2f3f4;}.badge{font-size:75%;line-height:1.25;font-weight:600;display:inline-block;min-width:10px;padding:3px 7px;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px;}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:600;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em;}.badge.badge-square{border-radius:0;}.badge.badge-default,.label.label-default{background:#f2f3f4;color:#2d353c;}.badge.badge-danger,.label.label-danger{background:#ff5b57;}.badge.badge-warning,.label.label-warning{background:#f59c1a;}.badge.badge-success,.label.label-success{background:#00acac;}.badge.badge-info,.label.label-info{background:#49b6d6;}.badge.badge-primary,.label.label-primary{background:#348fe2;}.badge.badge-secondary,.label.label-secondary{background:#b6c2c9;}.badge.badge-lime,.label.label-lime{background:#90ca4b;}.badge.badge-yellow,.label.label-yellow{background:#ffd900;color:#000;}.badge.badge-purple,.label.label-purple{background:#727cb6;}.badge.badge-light,.label.label-light{background:#fff;color:#62686d;}.badge.badge-inverse,.label.label-inverse,.badge.badge-dark,.label.label-dark{background:#2d353c;}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none;}.pager:before,.pager:after{content:'';display:table;clear:both;}.pager li{display:inline;}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px;-webkit-text-decoration:none;text-decoration:none;}.pager li>a,.pager li>span,.pagination>li>a{border-color:#dadfe2;color:#242a30;}.pager .previous>a,.pager .previous>span{float:left;}.pager .next>a,.pager .next>span{float:right;}.pager.pager-without-border li>a,.pager.pager-without-border li>span,.pagination.pagination-without-border>li>a{border-color:#fff;}.pager>.disabled>span,.pager>.disabled>a,.pager>.disabled>a:hover,.pager>.disabled>a:focus,.pagination>.disabled>a,.pagination>.disabled>a:hover,.pagination>.disabled>a:focus,.pagination>.disabled>span,.pagination>.disabled>span:hover,.pagination>.disabled>span:focus{opacity:0.6;border-color:#ddd;background:#fff;cursor:not-allowed;}.pagination>li>a{display:inline-block;color:#242a30;margin-left:5px;padding:6px 12px;line-height:1.42857143;border:1px solid #ddd;-webkit-text-decoration:none;text-decoration:none;border-radius:6px !important;}.pagination>li:first-child>a{margin-left:0;}.pagination-sm>li>a,.pagination-sm>li>span,.pagination-sm .page-link{font-size:10px;margin-left:4px;padding:5px 10px;line-height:1.5;}.pagination-lg>li>a,.pagination-lg>li>span,.pagination-lg .page-link{font-size:14px;margin-left:6px;padding:10px 16px;line-height:1.3333333;}.pager li>a:hover,.pager li>a:focus,.pager li>span:hover,.pager li>span:focus,.pagination>li>a:hover,.pagination>li>a:focus{color:#242a30;background:#f2f3f4;border-color:#dadfe2;}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{background:#348ee3 !important;border-color:#348ee3 !important;color:#fff;}.progress{box-shadow:none;background:#e2e7eb;}.progress-bar{background-color:#348fe2;box-shadow:none;}.progress-xs{height:5px;}.progress-sm{height:10px;}.progress-lg{height:30px;}.progress-xs .progress-bar{line-height:5px;}.progress-sm .progress-bar{line-height:10px;}.progress-lg .progress-bar{line-height:30px;}.nav>li>a{color:#6e7179;}.nav>li>a:hover,.nav>li>a:focus{color:#333;background:#fafafa;}.nav-tabs{background:#c1ccd1;border-radius:5px 5px 0 0;}.nav-tabs-inverse>.nav-tabs,.nav-tabs.nav-tabs-inverse{background:#242a30;}.nav-tabs .nav-link{padding:10px 15px;}.nav-tabs>li>a{margin-right:5px;line-height:20px;}.nav-tabs.nav-justified>li>a{border-radius:3px 3px 0 0;}.nav-tabs,.nav-tabs>li>a,.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus,.nav-tabs.nav-justified>li>a,.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:none !important;}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus,.nav-tabs .nav-link.active,.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus,.nav-tabs .nav-item.show .nav-link,.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{color:#242a30;}.nav-tabs.nav-tabs-inverse>li.active>a,.nav-tabs.nav-tabs-inverse>li.active>a:hover,.nav-tabs.nav-tabs-inverse>li.active>a:focus,.nav-tabs.nav-tabs-inverse .nav-link.active,.nav-tabs.nav-tabs-inverse .nav-link.active:hover,.nav-tabs.nav-tabs-inverse .nav-link.active:focus,.nav-tabs.nav-tabs-inverse .nav-item.show .nav-link{color:#242a30;background:#fff;}.nav-tabs.nav-tabs-inverse>li>a:hover,.nav-tabs.nav-tabs-inverse>li>a:focus,.nav-tabs.nav-tabs-inverse .nav-link:hover,.nav-tabs.nav-tabs-inverse .nav-link:focus{color:#fff;background:none;}.nav-tabs .nav-item,.nav-tabs>li,.nav-tabs.nav-justified>li{margin-bottom:0;}.nav-pills{margin-bottom:10px;}.nav-pills>li>a.active,.nav-pills>li>a.active:focus,.nav-pills>li>a.active:hover{background:#242a30;color:#fff;}.nav-pills>li>a,.nav-pills .nav-link{padding:10px 15px;border-radius:3px;}.nav-pills .nav-link.active,.nav-pills .show>.nav-link,.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{background:#242a30;color:#fff;}.nav.nav-pills.nav-sm>li{margin:0 0 3px;}.nav.nav-pills.nav-sm>li a{padding:8px 10px;line-height:1.5;}.nav-pills>li+li{margin-left:5px;}.nav-stacked>li+li{margin-left:0;margin-top:5px;}.tab-content{padding:15px;margin-bottom:20px;background:#fff;border-radius:3px;}.nav-tabs+.tab-content{border-radius:0 0 3px 3px;}.panel-title a{display:block;}.panel-title>a:hover,.panel-title>a:focus{-webkit-text-decoration:none;text-decoration:none;}.btn{font-size:12px;font-weight:600;line-height:20px;padding:6px 12px;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out;outline:none !important;box-shadow:none !important;}.btn:focus,.btn:active:focus,.btn.active:focus{outline:none;}.btn:active,.btn.active{box-shadow:inset 0 3px 5px rgba(0,0,0,0.1);}.btn-block{padding-left:12px;padding-right:12px;}.btn.btn-sm{font-size:12px;line-height:16px;padding:5px 10px;}.btn.btn-xs{font-size:12px;line-height:18px;padding:1px 5px;}.btn[class*=\"btn-gradient-\"]{-webkit-transition:background .1s linear;transition:background .1s linear;}.btn.btn-lg,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-prepend>.btn{font-size:16px;line-height:24px;padding:10px 16px;}.btn-icon,.btn.btn-icon{display:inline-block;width:28px;height:28px;padding:0;border:none;line-height:28px;text-align:center;font-size:14px;}.btn-circle,.btn.btn-circle{border-radius:100px;}.btn-icon.btn-xs{width:16px;height:16px;font-size:8px;line-height:16px;}.btn-icon.btn-sm{width:22px;height:22px;font-size:11px;line-height:22px;}.btn.btn-icon.btn-lg{width:34px;height:34px;font-size:17px;line-height:34px;}.btn-scroll-to-top{position:fixed;bottom:20px;right:25px;z-index:1020;}.page-with-right-sidebar .btn-scroll-to-top{left:25px;right:auto;}.btn>.pull-left,.btn>.pull-right{line-height:1.428571429;}.input-group-prepend .btn{border-right:1px solid;}.input-group-append .btn{border-left:1px solid;}.btn.btn-default,.btn.btn-default.disabled,.btn.btn-default.disabled:hover,.btn.btn-default.disabled:focus,.btn.btn-default[disabled],.btn.btn-default[disabled]:hover,.btn.btn-default[disabled]:focus{color:#2e353c;background:#f2f3f4;border-color:#f2f3f4;}.btn-default:hover,.btn-default:focus,.btn-default:active,.btn-default.active,.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.show>.btn-default.dropdown-toggle,.open>.dropdown-toggle.btn-default,.open>.dropdown-toggle.btn-default:hover,.open>.dropdown-toggle.btn-default:focus,.btn-default:not(:disabled):not(.disabled) .active,.btn-default:not(:disabled):not(.disabled):active{background:#c5ced4;border-color:#c5ced4;}.input-group-append .btn.btn-default,.btn-group .btn.btn-default:not(.active)+.btn.btn-default,.input-group-btn .btn.btn-default:not(.active)+.btn.btn-default{border-left-color:#c5ced4;}.input-group-prepend .btn.btn-default{border-right-color:#c5ced4;}.btn.btn-white,.btn.btn-white.disabled,.btn.btn-white.disabled:hover,.btn.btn-white.disabled:focus,.btn.btn-white[disabled],.btn.btn-white[disabled]:hover,.btn.btn-white[disabled]:focus{color:#2d353c;background:#fff;border-color:#d9dfe3;}.btn.btn-white.btn-white-without-border{border-color:#fff;}.btn.btn-white.btn-white-without-border.active,.btn.btn-white.btn-white-without-border.active:hover,.btn.btn-white.btn-white-without-border.active:focus{border-color:#d9dfe3;}.btn.btn-white.btn-white-without-border:hover,.btn.btn-white.btn-white-without-border:focus{border-color:#d9dfe3;}.btn-white:hover,.btn-white:focus,.btn-white:active,.btn-white.active,.btn-white.active.focus,.btn-white.active:focus,.btn-white.active:hover,.btn-white:active.focus,.btn-white:active:focus,.btn-white:active:hover,.show>.btn-white.dropdown-toggle,.open>.dropdown-toggle.btn-white,.open>.dropdown-toggle.btn-white:hover,.open>.dropdown-toggle.btn-white:focus,.btn-white:not(:disabled):not(.disabled) .active,.btn-white:not(:disabled):not(.disabled):active{background:#e2e7eb;border-color:#d9dfe3;}.input-group-append .btn.btn-white,.btn-group .btn.btn-white:not(.active)+.btn.btn-white,.input-group-btn .btn.btn-white:not(.active)+.btn.btn-white{border-left-color:#d9dfe3;}.input-group-prepend .btn.btn-white{border-right-color:#d9dfe3;}.btn.btn-inverse,.btn.btn-inverse.disabled,.btn.btn-inverse.disabled:hover,.btn.btn-inverse.disabled:focus,.btn.btn-inverse[disabled],.btn.btn-inverse[disabled]:hover,.btn.btn-inverse[disabled]:focus{color:#fff;background:#2d353c;border-color:#2d353c;}.btn-inverse:hover,.btn-inverse:focus,.btn-inverse:active,.btn-inverse.active,.btn-inverse.active.focus,.btn-inverse.active:focus,.btn-inverse.active:hover,.btn-inverse:active.focus,.btn-inverse:active:focus,.btn-inverse:active:hover,.show>.btn-inverse.dropdown-toggle,.open>.dropdown-toggle.btn-inverse,.open>.dropdown-toggle.btn-inverse:hover,.open>.dropdown-toggle.btn-inverse:focus,.btn-inverse:not(:disabled):not(.disabled) .active,.btn-inverse:not(:disabled):not(.disabled):active{background:#242a30;border-color:#242a30;}.input-group-append .btn,.btn-group .btn.btn-inverse:not(.active)+.btn.btn-inverse,.input-group-btn .btn.btn-inverse:not(.active)+.btn.btn-inverse{border-left-color:#242a30;}.input-group-prepend .btn{border-right-color:#242a30;}.btn.btn-primary,.btn.btn-primary.disabled,.btn.btn-primary.disabled:hover,.btn.btn-primary.disabled:focus,.btn.btn-primary[disabled],.btn.btn-primary[disabled]:hover,.btn.btn-primary[disabled]:focus{color:#fff;background:#348fe2;border-color:#348fe2;}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.show>.btn-primary.dropdown-toggle,.open>.dropdown-toggle.btn-primary,.open>.dropdown-toggle.btn-primary:hover,.open>.dropdown-toggle.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled) .active,.btn-primary:not(:disabled):not(.disabled):active{background:#2a72b5;border-color:#2a72b5;}.input-group-append .btn.btn-primary,.btn-group .btn.btn-primary:not(.active)+.btn.btn-primary,.input-group-btn .btn.btn-primary:not(.active)+.btn.btn-primary{border-left-color:#2a72b5;}.input-group-prepend .btn.btn-primary{border-right-color:#2a72b5;}.btn.btn-success,.btn.btn-success.disabled,.btn.btn-success.disabled:hover,.btn.btn-success.disabled:focus,.btn.btn-success[disabled],.btn.btn-success[disabled]:hover,.btn.btn-success[disabled]:focus{color:#fff;background:#00acac;border-color:#00acac;}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.show>.btn-success.dropdown-toggle,.open>.dropdown-toggle.btn-success,.open>.dropdown-toggle.btn-success:hover,.open>.dropdown-toggle.btn-success:focus,.btn-success:not(:disabled):not(.disabled) .active,.btn-success:not(:disabled):not(.disabled):active{background:#008a8a;border-color:#008a8a;}.input-group-append .btn.btn-success,.btn-group .btn.btn-success:not(.active)+.btn.btn-success,.input-group-btn .btn.btn-success:not(.active)+.btn.btn-success{border-left-color:#008a8a;}.input-group-prepend .btn.btn-success{border-right-color:#008a8a;}.btn.btn-warning,.btn.btn-warning.disabled,.btn.btn-warning.disabled:hover,.btn.btn-warning.disabled:focus,.btn.btn-warning[disabled],.btn.btn-warning[disabled]:hover,.btn.btn-warning[disabled]:focus{color:#fff;background:#f59c1a;border-color:#f59c1a;}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.show>.btn-warning.dropdown-toggle,.open>.dropdown-toggle.btn-warning,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover,.btn-warning:not(:disabled):not(.disabled) .active,.btn-warning:not(:disabled):not(.disabled):active{background:#c47d15;border-color:#c47d15;}.input-group-append .btn.btn-warning,.btn-group .btn.btn-warning:not(.active)+.btn.btn-warning,.input-group-btn .btn.btn-warning:not(.active)+.btn.btn-warning{border-left-color:#c47d15;}.input-group-prepend .btn.btn-warning{border-right-color:#c47d15;}.btn.btn-danger,.btn.btn-danger.disabled,.btn.btn-danger.disabled:hover,.btn.btn-danger.disabled:focus,.btn.btn-danger[disabled],.btn.btn-danger[disabled]:hover,.btn.btn-danger[disabled]:focus{color:#fff;background:#ff5b57;border-color:#ff5b57;}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.show>.btn-danger.dropdown-toggle,.open>.dropdown-toggle.btn-danger,.open>.dropdown-toggle.btn-danger:hover,.open>.dropdown-toggle.btn-danger:focus,.btn-danger:not(:disabled):not(.disabled) .active,.btn-danger:not(:disabled):not(.disabled):active{background:#cc4946;border-color:#cc4946;}.input-group-append .btn.btn-danger,.btn-group .btn.btn-danger:not(.active)+.btn.btn-danger,.input-group-btn .btn.btn-danger:not(.active)+.btn.btn-danger{border-left-color:#cc4946;}.input-group-prepend .btn.btn-danger{border-right-color:#cc4946;}.btn.btn-info,.btn.btn-info.disabled,.btn.btn-info.disabled:hover,.btn.btn-info.disabled:focus,.btn.btn-info[disabled],.btn.btn-info[disabled]:hover,.btn.btn-info[disabled]:focus{color:#fff;background:#49b6d6;border-color:#49b6d6;}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.show>.btn-info.dropdown-toggle,.open>.dropdown-toggle.btn-info,.open>.dropdown-toggle.btn-info:hover,.open>.dropdown-toggle.btn-info:focus,.btn-info:not(:disabled):not(.disabled) .active,.btn-info:not(:disabled):not(.disabled):active{background:#3a92ab;border-color:#3a92ab;}.input-group-append .btn.btn-info,.btn-group .btn.btn-info:not(.active)+.btn.btn-info,.input-group-btn .btn.btn-info:not(.active)+.btn.btn-info{border-left-color:#3a92ab;}.input-group-prepend .btn.btn-info{border-right-color:#3a92ab;}.btn.btn-purple,.btn.btn-purple.disabled,.btn.btn-purple.disabled:hover,.btn.btn-purple.disabled:focus,.btn.btn-purple[disabled],.btn.btn-purple[disabled]:hover,.btn.btn-purple[disabled]:focus{color:#fff;background:#727cb6;border-color:#727cb6;}.btn-purple:hover,.btn-purple:focus,.btn-purple:active,.btn-purple.active,.btn-purple.active.focus,.btn-purple.active:focus,.btn-purple.active:hover,.btn-purple:active.focus,.btn-purple:active:focus,.btn-purple:active:hover,.show>.btn-purple.dropdown-toggle,.open>.dropdown-toggle.btn-purple,.open>.dropdown-toggle.btn-purple:hover,.open>.dropdown-toggle.btn-purple:focus,.btn-purple:not(:disabled):not(.disabled) .active,.btn-purple:not(:disabled):not(.disabled):active{background:#555d88;border-color:#555d88;}.input-group-append .btn.btn-purple,.btn-group .btn.btn-purple:not(.active)+.btn.btn-purple,.input-group-btn .btn.btn-purple:not(.active)+.btn.btn-purple{border-left-color:#555d88;}.input-group-prepend .btn.btn-purple{border-right-color:#555d88;}.btn.btn-yellow,.btn.btn-yellow.disabled,.btn.btn-yellow.disabled:hover,.btn.btn-yellow.disabled:focus,.btn.btn-yellow[disabled],.btn.btn-yellow[disabled]:hover,.btn.btn-yellow[disabled]:focus{color:#000;background:#ffd900;border-color:#ffd900;}.btn-yellow:hover,.btn-yellow:focus,.btn-yellow:active,.btn-yellow.active,.btn-yellow.active.focus,.btn-yellow.active:focus,.btn-yellow.active:hover,.btn-yellow:active.focus,.btn-yellow:active:focus,.btn-yellow:active:hover,.show>.btn-yellow.dropdown-toggle,.open>.dropdown-toggle.btn-yellow,.open>.dropdown-toggle.btn-yellow:hover,.open>.dropdown-toggle.btn-yellow:focus,.btn-yellow:not(:disabled):not(.disabled) .active,.btn-yellow:not(:disabled):not(.disabled):active{background:#bfa300;border-color:#bfa300;}.input-group-append .btn.btn-yellow,.btn-group .btn.btn-yellow:not(.active)+.btn.btn-yellow,.input-group-btn .btn.btn-yellow:not(.active)+.btn.btn-yellow{border-left-color:#bfa300;}.input-group-prepend .btn.btn-yellow{border-right-color:#bfa300;}.btn.btn-grey,.btn.btn-grey.disabled,.btn.btn-grey.disabled:hover,.btn.btn-grey.disabled:focus,.btn.btn-grey[disabled],.btn.btn-grey[disabled]:hover,.btn.btn-grey[disabled]:focus{color:#fff;background:#b6c2c9;border-color:#b6c2c9;}.btn-grey:hover,.btn-grey:focus,.btn-grey:active,.btn-grey.active,.btn-grey.active.focus,.btn-grey.active:focus,.btn-grey.active:hover,.btn-grey:active.focus,.btn-grey:active:focus,.btn-grey:active:hover,.show>.btn-grey.dropdown-toggle,.open>.dropdown-toggle.btn-grey,.open>.dropdown-toggle.btn-grey:hover,.open>.dropdown-toggle.btn-grey:focus,.btn-grey:not(:disabled):not(.disabled) .active,.btn-grey:not(:disabled):not(.disabled):active{background:#889197;border-color:#889197;}.input-group-append .btn.btn-grey,.btn-group .btn.btn-grey:not(.active)+.btn.btn-grey,.input-group-btn .btn.btn-grey:not(.active)+.btn.btn-grey{border-left-color:#889197;}.input-group-prepend .btn.btn-grey{border-right-color:#889197;}.btn.btn-lime,.btn.btn-lime.disabled,.btn.btn-lime.disabled:hover,.btn.btn-lime.disabled:focus,.btn.btn-lime[disabled],.btn.btn-lime[disabled]:hover,.btn.btn-lime[disabled]:focus{color:#fff;background:#90ca4b;border-color:#90ca4b;}.btn-lime:hover,.btn-lime:focus,.btn-lime:active,.btn-lime.active,.btn-lime.active.focus,.btn-lime.active:focus,.btn-lime.active:hover,.btn-lime:active.focus,.btn-lime:active:focus,.btn-lime:active:hover,.show>.btn-lime.dropdown-toggle,.open>.dropdown-toggle.btn-lime,.open>.dropdown-toggle.btn-lime:hover,.open>.dropdown-toggle.btn-lime:focus,.btn-lime:not(:disabled):not(.disabled) .active,.btn-lime:not(:disabled):not(.disabled):active{background:#6c9738;border-color:#6c9738;}.input-group-append .btn.btn-lime,.btn-group .btn.btn-lime:not(.active)+.btn.btn-lime,.input-group-btn .btn.btn-lime:not(.active)+.btn.btn-lime{border-left-color:#6c9738;}.input-group-prepend .btn.btn-lime{border-right-color:#6c9738;}.panel{margin-bottom:20px;background-color:#fff;border:none;box-shadow:none;border-radius:3px;}.panel .tab-content{border-radius:0 0 3px 3px;}.panel>.table,.panel>.tab-content{margin-bottom:0;}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0;}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0;}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px;}.panel-heading{padding:10px 15px;border:none;border-top-left-radius:3px;border-top-right-radius:3px;}.panel-heading+.table,.panel-heading+.slimScrollDiv{border-top:1px solid #eee;}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit;}.panel-title>a,.panel-title>small,.panel-title>small>a,.panel-title>.small,.panel-title>.small>a{color:inherit;}.panel-heading-btn{float:right;}.panel-heading-btn>a{margin-left:8px;}.panel-heading .btn-group .btn{margin-top:-7px;}.panel-heading .btn-group .btn.btn-sm{margin-top:-5px;}.panel-heading .btn-group .btn.btn-xs{margin-top:-1px;}.panel-heading .label.pull-left,.panel-heading .label.pull-right{line-height:15px;}.panel-heading .progress.pull-left,.panel-heading .progress.pull-right{width:40%;min-width:120px;}.panel-heading+.alert{margin-bottom:0;border-radius:0;}.panel-heading .nav-tabs{margin-top:-10px;margin-right:-15px;}.panel-heading .nav-tabs>li>a{padding:10px 15px;line-height:20px;}.panel-with-tabs.panel-default .panel-heading{background:#c1ccd1;color:#333;}.panel-title{line-height:20px;font-size:12px;}.panel-title .pull-right{line-height:20px;}.panel-title .accordion-toggle{margin:-10px -15px;padding:10px 15px;}.panel-title .accordion-toggle.accordion-toggle-styled .fa:before{content:'\\f056';}.panel-title .accordion-toggle.accordion-toggle-styled.collapsed .fa:before{content:'\\f055';}.panel-toolbar{border-top:1px solid #eee;border-bottom:1px solid #eee;padding:10px 15px;background:#fff;}.panel-toolbar+.form-control{margin:-1px 0 0;border-right:none;border-left:none;}.panel-group .panel{margin-bottom:0;border-radius:3px;}.panel-group .panel+.panel{margin-top:5px;}.panel-body{padding:15px;}.panel-body:before,.panel-body:after{content:'';display:table;clear:both;}.panel-body[class^=\"bg-\"]{border-radius:0 0 3px 3px;}.panel-body.no-border{border:none !important;}.panel-body.panel-form,.panel-body.no-padding,.panel-body.panel-table,.panel-body.panel-full-width{padding:0 !important;}.panel-body.with-table>.table{border:0;margin:0;}.panel-body.with-table>.table tr:last-child th,.panel-body.with-table>.table tr:last-child td{border-bottom:0;}.panel-footer{background:#fff;border-top:1px solid #eee;padding:10px 15px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;}.form-control+.panel-footer{border-top:none;}.panel-default>.panel-heading{background:#fafafa;}.panel-default>.panel-heading+.panel-collapse .panel-body{border-top:1px solid #eee;}.panel-info>.panel-heading,.panel-danger>.panel-heading,.panel-inverse>.panel-heading,.panel-success>.panel-heading,.panel-warning>.panel-heading,.panel-primary>.panel-heading{color:#fff;}.panel-inverse>.panel-heading{background:#242a30;}.panel-success>.panel-heading{background:#008a8a;}.panel-warning>.panel-heading{background:#c47d15;}.panel-danger>.panel-heading{background:#cc4946;}.panel-primary>.panel-heading{background:#2a72b5;}.panel-info>.panel-heading{background:#3a92ab;}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0;}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0;}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0;}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0;}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0;}.panel.panel-no-rounded-corner .panel-body,.panel.panel-no-rounded-corner .panel-footer,.panel.panel-no-rounded-corner .panel-heading{border-radius:0 !important;}.panel.panel-hover-icon .panel-heading .panel-heading-btn .btn i{visibility:hidden;}.panel.panel-hover-icon .panel-heading:hover .panel-heading-btn .btn i,.panel.panel-hover-icon .panel-heading:focus .panel-heading-btn .btn i{visibility:visible;}.panel.panel-expand{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;overflow-x:scroll;z-index:1080;}.panel-expand .header,.panel-expand .sidebar,.panel-expand .sidebar-bg{z-index:0;}.panel.panel-expand,.panel.panel-expand>.panel-body,.panel.panel-expand>.panel-heading{border-radius:0;}.panel-expand .height-xs,.panel-expand .height-sm,.panel-expand .height-md,.panel-expand .height-lg,.panel-expand .height-full{height:100% !important;}.panel.panel-expand>.panel-heading{position:fixed;top:0;left:0;right:0;z-index:1020;}.panel.panel-expand>.panel-heading+div{margin-top:40px;}.panel.panel-expand>.panel-heading .fa.fa-expand:before{content:'\\f066';}.panel.panel-expand>.panel-footer{position:absolute;left:0;right:0;bottom:0;}.panel-expand .content .row [class^=\"col-\"]{position:inherit;}.panel-expand .content .panel.panel-expand .row>[class^=\"col-\"]{position:relative;}.panel-expand .vertical-box .vertical-box-column{display:table-cell;}.panel-expand .page-content-full-height .content{-webkit-transform:none;-webkit-transform:none;-ms-transform:none;transform:none;}.panel.panel-loading .panel-body{position:relative;z-index:0;}@-webkit-keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeIn{from{opacity:0;}to{opacity:1;}}.panel.panel-loading .panel-body .panel-loader{position:absolute;left:0;right:0;top:0;bottom:0;background:#fff;opacity:0.9;-webkit-animation:fadeIn .2s;-webkit-animation:fadeIn .2s;animation:fadeIn .2s;z-index:1020;border-radius:0 0 4px 4px;}.modal-content{border:none;box-shadow:0 5px 15px rgba(0,0,0,0.3);border-radius:3px;}.modal-header{padding:12px 15px;border-bottom-color:#e2e7eb;}.modal-header .close{margin:-12px -15px -12px 0;padding:12px 15px;line-height:27px;}.modal-body{padding:15px;}.modal-footer{border-top-color:#e2e7eb;padding:14px 15px 15px;}.modal-message .modal-dialog{width:100%;max-width:100%;margin-left:0;margin-right:0;}.modal-message .modal-content{border-radius:0;}.modal-message .modal-body,.modal-message .modal-header,.modal-message .modal-footer{width:60%;border:none;margin:0 auto;}.modal-backdrop.fade.in{opacity:0.5;}.media,.media-body{overflow:hidden;zoom:1;}.media+.media{margin-top:15px;}.media-heading{margin-top:0;margin-bottom:5px;}.media-list{padding-left:0;list-style:none;}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top;}.media-body{width:10000px;}.media .media-object{width:128px;}.media.media-lg .media-object{width:256px;}.media.media-sm .media-object{width:64px;}.media.media-xs .media-object{width:32px;}.media>.pull-left,.media>.media-left{padding-right:15px;}.media>.pull-right,.media>.media-right{padding-left:15px;}.media a:not(.btn):hover,.media a:not(.btn):focus,.media a:not(.btn):hover .media-heading,.media a:not(.btn):focus .media-heading,.media a:not(.btn) .media-heading:hover,.media a:not(.btn) .media-heading:focus{color:#242a30;-webkit-text-decoration:none;text-decoration:none;}.media-list.media-list-with-divider>li+li{border-top:1px solid #eee;padding-top:20px;}.table{border-color:#e2e7eb;border-radius:3px;background:none;}.table.table-inverse{background:none;}.table thead th,.table>thead>tr>th{color:#242a30;font-weight:600;border-bottom:1px solid #b6c2c9 !important;}.table>thead>tr>th,.table>tbody>tr>th,.table>tfoot>tr>th,.table>thead>tr>td,.table>tbody>tr>td,.table>tfoot>tr>td{border-color:#e2e7eb;padding:10px 15px;}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>tbody>tr>td,.table-condensed>tfoot>tr>td{padding:7px 15px;}.table-hover>tbody>tr:hover>td,.table-hover>tbody>tr:hover>th{background:#e2e7ec !important;}.table-striped>tbody>tr:nth-child(odd)>td,.table-striped>tbody>tr:nth-child(odd)>th{background:#f2f3f4;}.table.table-inverse{color:rgba(255,255,255,0.75);}.table.table-inverse>thead>tr>th,.table.table-inverse>tbody>tr>th,.table.table-inverse>tfoot>tr>th{color:#fff;}.flat-black .table.table-inverse>thead>tr>th,.table.table-inverse>thead>tr>th,.table.table-inverse>tbody>tr>th,.table.table-inverse>tfoot>tr>th,.table.table-inverse>thead>tr>td,.table.table-inverse>tbody>tr>td,.table.table-inverse>tfoot>tr>td{border-color:#444 !important;border-color:rgba(255,255,255,0.15) !important;background:none !important;}.table>thead>tr>td.info,.table>tbody>tr>td.info,.table>tfoot>tr>td.info,.table>thead>tr>th.info,.table>tbody>tr>th.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>tbody>tr.info>td,.table>tfoot>tr.info>td,.table>thead>tr.info>th,.table>tbody>tr.info>th,.table>tfoot>tr.info>th{background:#c8e9f3;border-color:#a1c5d0;color:#255b6c;}.table>thead>tr>td.success,.table>tbody>tr>td.success,.table>tfoot>tr>td.success,.table>thead>tr>th.success,.table>tbody>tr>th.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>tbody>tr.success>td,.table>tfoot>tr.success>td,.table>thead>tr.success>th,.table>tbody>tr.success>th,.table>tfoot>tr.success>th{background:#b3e6e6;border-color:#8fbdbd;color:#025656;}.table>thead>tr>td.danger,.table>tbody>tr>td.danger,.table>tfoot>tr>td.danger,.table>thead>tr>th.danger,.table>tbody>tr>th.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>tbody>tr.danger>td,.table>tfoot>tr.danger>td,.table>thead>tr.danger>th,.table>tbody>tr.danger>th,.table>tfoot>tr.danger>th{background:#ffcdcc;border-color:#d8abaa;color:#802d2b;}.table>thead>tr>td.warning,.table>tbody>tr>td.warning,.table>tfoot>tr>td.warning,.table>thead>tr>th.warning,.table>tbody>tr>th.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>tbody>tr.warning>td,.table>tfoot>tr.warning>td,.table>thead>tr.warning>th,.table>tbody>tr.warning>th,.table>tfoot>tr.warning>th{background:#fce1ba;border-color:#d2b894;color:#7b4e0e;}.table>thead>tr>td.active,.table>tbody>tr>td.active,.table>tfoot>tr>td.active,.table>thead>tr>th.active,.table>tbody>tr>th.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>tbody>tr.active>td,.table>tfoot>tr.active>td,.table>thead>tr.active>th,.table>tbody>tr.active>th,.table>tfoot>tr.active>th{background:#e9edef;border-color:#e9edef;color:#5b6165;}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0;}.table.table-bordered>thead:first-child>tr:first-child>td,.table.table-bordered>thead:first-child>tr:first-child>th{border-top:1px solid #e2e7eb;}.table .with-form-control .form-control,.table .with-input-group .input-group{margin-top:-8px;margin-bottom:-8px;}.table-condensed .with-form-control .form-control,.table-condensed .with-input-group .input-group{margin-top:-6px;margin-bottom:-5px;}.table .with-img img,.table .with-btn .btn,.table .with-btn-group .btn-group{margin-top:-8px;margin-bottom:-7px;}.table .with-checkbox .checkbox,.table .with-radio .radio{margin:0;padding:0;}.table .with-checkbox .checkbox-css label,.table .with-radio .radio-css label{min-height:inherit;}.table .with-checkbox .checkbox-css input+label:before,.table .with-checkbox .checkbox-css input:checked+label:after,.table .with-radio .radio-css input+label:before{top:0;}.table .with-radio .radio-css input:checked+label:after{top:5px;}.well{padding:15px;background:#fff;box-shadow:none;}.well-sm{padding:10px;}.well-lg{padding:30px;}.jumbotron{background:#f0f3f4;border-radius:6px;}.jumbotron h1,.jumbotron .h1{font-size:56px;}.jumbotron p{font-size:18px;}.list-group-item{padding:10px 15px;}a.list-group-item,button.list-group-item{color:#575d63;}a.list-group-item.active,a.list-group-item.active:hover,a.list-group-item.active:focus{background:#348fe2;}a.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#242a30;}.nav-tabs.card-header-tabs{background:none;margin-bottom:-11px;}.carousel .carousel-control .fa{position:absolute;top:50%;z-index:5;display:block;width:30px;height:30px;margin-top:-15px;text-align:center;line-height:30px;margin-left:-15px;}.carousel .carousel-control.left .fa{margin-left:15px;}code{padding:2px 4px;font-size:90%;color:#e83e8c;background-color:#fff2f6;border-radius:4px;}.inverse-mode code,code.inverse-mode{background:#2e353c;color:#ffd900;}.popover{font-family:inherit;padding:0;border:none;box-shadow:0 10px 30px 0px rgba(0,0,0,.2);}.popover-title{padding:10px 12px;background:#f5f5f5;border:none;font-size:12px;line-height:16px;}.popover-content{padding:12px;min-width:240px;}.popover>.arrow{border-color:transparent !important;}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent;}.lead{margin-bottom:20px;font-size:21px;font-weight:300;line-height:1.4;}.list-inline>li{display:inline;}.list-inline>li+li{margin-left:15px;}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #e5e5e5;}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#707478;}blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #e5e5e5;border-left:0;}.close{margin-left:15px;text-shadow:none;line-height:14px;}.list-group-item{border-color:#e2e7eb;}.list-group-item.list-group-item-inverse{background:#242a30;border-color:#2d353c;color:#fff;}.list-group-item.list-group-item-inverse:hover,.list-group-item.list-group-item-inverse:focus{color:#fff;background:#2d353c;}.list-group-item.list-group-item-inverse .label-inverse,.list-group-item.list-group-item-inverse .badge-inverse{background:#2d353c;background:rgba(0,0,0,0.4);}.material-icons{text-rendering:optimizeLegibility;}.checkbox.checkbox-css{position:relative;line-height:16px;padding-top:7px;}.checkbox.checkbox-css.checkbox-inline{padding-left:0;display:inline-block;}.checkbox.checkbox-css.checkbox-inline+.checkbox.checkbox-css.checkbox-inline{margin-left:15px;}.checkbox.checkbox-css label{padding-left:24px;margin:0;}.checkbox.checkbox-css label:before{content:'';position:absolute;left:0;top:7px;width:16px;height:16px;border-radius:4px;background:#dee2e6;}.has-success .checkbox.checkbox-css label:before,.has-success.checkbox.checkbox-css label:before,.is-valid .checkbox.checkbox-css label:before,.is-valid.checkbox.checkbox-css label:before{background:#b3e6e6;}.has-success .checkbox.checkbox-css label,.has-success.checkbox.checkbox-css label,.is-valid .checkbox.checkbox-css label,.is-valid.checkbox.checkbox-css label{color:#008a8a;}.has-error .checkbox.checkbox-css label:before,.has-error.checkbox.checkbox-css label:before,.is-invalid .checkbox.checkbox-css label:before,.is-invalid.checkbox.checkbox-css label:before{background:#ffcdcc;}.has-error .checkbox.checkbox-css label,.has-error.checkbox.checkbox-css label,.is-invalid .checkbox.checkbox-css label,.is-invalid.checkbox.checkbox-css label{color:#cc4946;}.has-warning .checkbox.checkbox-css label:before,.has-warning.checkbox.checkbox-css label:before{background:#fce1ba;}.checkbox.checkbox-css input{display:none;}.checkbox.checkbox-css input:checked+label:after{content:'';background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center center;background-size:50% 50%;position:absolute;top:7px;left:0;color:#fff;height:16px;width:16px;text-align:center;}.checkbox.checkbox-css input:checked+label:before{background:#348fe2;border-color:#348fe2;}.checkbox.checkbox-css.checkbox-success input:checked+label:before{background:#00acac;border-color:#00acac;}.checkbox.checkbox-css.checkbox-info input:checked+label:before{background:#49b6d6;border-color:#49b6d6;}.checkbox.checkbox-css.checkbox-danger input:checked+label:before{background:#ff5b57;border-color:#ff5b57;}.checkbox.checkbox-css.checkbox-warning input:checked+label:before{background:#f59c1a;border-color:#f59c1a;}.checkbox.checkbox-css.checkbox-inverse input:checked+label:before{background:#2d353c;border-color:#2d353c;}.radio.radio-css{position:relative;line-height:16px;padding-top:7px;}.radio.radio-css.radio-inline{padding-left:0;display:inline-block;}.radio.radio-css.radio-inline+.radio.radio-css.radio-inline{margin-left:15px;}.radio.radio-css label{padding-left:24px;margin:0;}.radio.radio-css label:before{content:'';position:absolute;left:0;top:7px;width:16px;height:16px;border-radius:16px;background:#dee2e6;}.has-success .radio.radio-css label:before,.has-success.radio.radio-css label:before,.is-valid .radio.radio-css label:before,.is-valid.radio.radio-css label:before{background:#b3e6e6;}.has-success .radio.radio-css label,.has-success.radio.radio-css label,.is-valid .radio.radio-css label,.is-valid.radio.radio-css label{color:#008a8a;}.has-error .radio.radio-css label:before,.has-error.radio.radio-css label:before,.is-invalid .radio.radio-css label:before,.is-invalid.radio.radio-css label:before{background:#ffcdcc;}.has-error .radio.radio-css label,.has-error.radio.radio-css label,.is-invalid .radio.radio-css label,.is-invalid.radio.radio-css label{color:#cc4946;}.has-warning .radio.radio-css label:before,.has-warning.radio.radio-css label:before{background:#fce1ba;}.radio.radio-css input{display:none;}.radio.radio-css input:checked+label:after{content:'';position:absolute;top:12px;left:5px;width:6px;height:6px;border-radius:6px;background:#fff;}.radio.radio-css input:checked+label:before{background:#348fe2;border-color:#348fe2;}.radio.radio-css.radio-success input:checked+label:before{background:#00acac;border-color:#00acac;}.radio.radio-css.radio-info input:checked+label:before{background:#49b6d6;border-color:#49b6d6;}.radio.radio-css.radio-danger input:checked+label:before{background:#ff5b57;border-color:#ff5b57;}.radio.radio-css.radio-warning input:checked+label:before{background:#f59c1a;border-color:#f59c1a;}.radio.radio-css.radio-inverse input:checked+label:before{background:#2d353c;border-color:#2d353c;}.card{position:relative;display:block;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;border:none;border-radius:4px;margin-bottom:15px;}.card-accordion .card+.card{margin-top:-10px;}.card-block{padding:15px;}.card-title{margin-bottom:15px;}.card-subtitle{margin-top:-5px;margin-bottom:0;}.card-text:last-child{margin-bottom:0;}.card-link:hover{-webkit-text-decoration:none;text-decoration:none;}.card-link+.card-link{margin-left:30px;}.card>.list-group:first-child .list-group-item:first-child{border-top-right-radius:4px;border-top-left-radius:4px;}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px;}.card-header{padding:10px 15px;margin-bottom:0;margin-top:0;background-color:#f2f3f4;border-bottom:1px solid #f2f3f4;font-weight:600;}.card-header-link,a.card-header-link{margin:-10px -15px;padding:10px 15px;display:block;-webkit-text-decoration:none;text-decoration:none;}.card-header:first-child{border-radius:4px 4px 0 0;}.card-header.collapsed{border-radius:4px;}.card-footer{padding:10px 15px;background-color:#f2f3f4;border-top:1px solid #f2f3f4;font-weight:600;}.card-footer:last-child{border-radius:0 0 4px 4px;}.card-header-tabs{margin-right:-5px;margin-bottom:-5px;margin-left:-5px;border-bottom:0;}.card-header-pills{margin-right:-5px;margin-left:-5px;margin-bottom:0px;}.card-primary{background-color:#348fe2;border-color:#348fe2;}.card-primary .card-header,.card-primary .card-footer{background-color:transparent;}.card-success{background-color:#00acac;border-color:#00acac;}.card-success .card-header,.card-success .card-footer{background-color:transparent;}.card-info{background-color:#49b6d6;border-color:#49b6d6;}.card-info .card-header,.card-info .card-footer{background-color:transparent;}.card-warning{background-color:#f59c1a;border-color:#f59c1a;}.card-warning .card-header,.card-warning .card-footer{background-color:transparent;}.card-danger{background-color:#ff5b57;border-color:#ff5b57;}.card-danger .card-header,.card-danger .card-footer{background-color:transparent;}.card-outline-primary{background-color:transparent;border-color:#0275d8;}.card-outline-secondary{background-color:transparent;border-color:#ccc;}.card-outline-info{background-color:transparent;border-color:#5bc0de;}.card-outline-success{background-color:transparent;border-color:#5cb85c;}.card-outline-warning{background-color:transparent;border-color:#f0ad4e;}.card-outline-danger{background-color:transparent;border-color:#d9534f;}.card-inverse{color:rgba(255,255,255,0.65);}.card-inverse .card-header,.card-inverse .card-footer{background-color:transparent;border-color:rgba(255,255,255,0.2);}.card-inverse .card-header,.card-inverse .card-footer,.card-inverse .card-title,.card-inverse .card-blockquote{color:#fff;}.card-inverse .card-link,.card-inverse .card-text,.card-inverse .card-subtitle,.card-inverse .card-blockquote .blockquote-footer{color:rgba(255,255,255,0.65);}.card-inverse .card-link:focus,.card-inverse .card-link:hover{color:#fff;}.card-blockquote{padding:0;margin-bottom:0;border-left:0;}.card-img{border-radius:4px;max-width:100%;}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:15px;}.card-img-top{border-top-right-radius:4px;border-top-left-radius:4px;max-width:100%;}.card-img-bottom{border-bottom-right-radius:4px;border-bottom-left-radius:4px;max-width:100%;}.card.card-inverse footer{color:rgba(255,255,255,0.75);}.card[class*=\"card-outline-\"]{border-width:1px;border-style:solid;}.nav-tabs.card-header-tabs>li>a{border:none !important;}.nav-tabs.card-header-tabs>li>a:hover,.nav-tabs.card-header-tabs>li>a:focus{background:none;}.nav-tabs.card-header-tabs>li>a.active,.nav-tabs.card-header-tabs>li.active>a{border-bottom-color:#fff !important;background:#fff !important;color:#000;}.row>[class^=\"col-\"].ui-sortable{min-height:50px;}.panel [class^=\"col-\"].ui-sortable,.theme-panel [class^=\"col-\"].ui-sortable{min-height:0px;}.ui-sortable .panel-heading{cursor:move;}.ui-sortable.ui-sortable-disabled .panel-heading{cursor:default;}.ui-sortable-placeholder{border:1px dashed #82868b !important;visibility:visible !important;background:none;margin:0 !important;}.panel.ui-sortable-placeholder{margin:-1px -1px 19px !important;box-shadow:none !important;}.slimScrollBar{width:6px !important;right:2px !important;}.slimScrollRail{width:6px !important;right:2px !important;}.sidebar .slimScrollBar,.content-inverse-mode .slimScrollBar,.inverse-mode .slimScrollBar{background:rgba(255,255,255,0.5) !important;}#gritter-notice-wrapper{width:371px!important;z-index:1040 !important;}.gritter-item-wrapper{background:none !important;overflow:hidden !important;border-radius:8px !important;}.gritter-top,.gritter-item,.gritter-bottom{background:url(images/transparent/black-0.8.png) !important;background:rgba(0,0,0,0.8) !important;}.gritter-with-image{width:280px!important;}.gritter-with-image,.gritter-without-image{padding-right:70px!important;}.gritter-image{margin:2px 10px 0 0 !important;border-radius:4px;}.gritter-title{font-size:12px !important;line-height:16px !important;padding-bottom:0px !important;font-weight:600 !important;color:#fff !important;text-shadow:none !important;}.gritter-light .gritter-title{color:#333 !important;font-weight:600 !important;}.gritter-item{font-family:inherit !important;color:#aaa !important;font-size:10px !important;padding:2px 15px 5px !important;}.gritter-close:hover:before,.gritter-close:focus:before{color:#fff;}.gritter-light .gritter-item,.gritter-light .gritter-bottom,.gritter-light .gritter-top{background:url(images/transparent/white-0.98.png) !important;background:rgba(255,255,255,0.98) !important;color:#999 !important;}.gritter-light .gritter-close{border-left:1px solid #ccd0d4;}.gritter-light .gritter-close:hover:before,.gritter-light .gritter-close:focus:before{color:#2d353c;}.gritter-close,.gritter-light .gritter-close{left:auto!important;right:0!important;top:0!important;background:0 0!important;width:70px!important;height:auto!important;display:block!important;bottom:0;border-left:1px solid #444;}.gritter-close:before,.gritter-light .gritter-close:before{content:'Close'!important;position:absolute!important;text-align:center!important;right:0!important;color:#999;left:0;z-index:10;text-indent:0;font-size:12px;font-weight:600;line-height:9px;top:50%!important;margin-top:-5px;font-family:inherit;}.dataTables_wrapper.form-inline{display:block;}.dataTables_length .form-control{margin:0 5px;}div.dataTables_wrapper div.dataTables_filter label{display:inline;}.dataTables_wrapper table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,.dataTables_wrapper table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{background:#cfd5dc !important;border-radius:2px !important;border:none !important;top:10px !important;left:10px !important;line-height:16px !important;box-shadow:none !important;color:#2d353c !important;font-weight:bold !important;height:16px !important;width:16px !important;text-align:center !important;text-indent:0 !important;font-size:14px !important;}table.dataTable>tbody>tr.child td.child{padding-left:15px !important;}.table.dataTable.table-bordered.collapsed{border-right:none !important;}.table.dataTable.table-bordered.collapsed>tbody>tr.child td.child{border-right:1px solid #e2e7ec !important;}table.dataTable>tbody>tr.child ul{display:block !important;}table.dataTable>tbody>tr.child span.dtr-title{font-weight:600 !important;color:#242a30;}.dataTables_wrapper table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,.dataTables_wrapper table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{background:#b6c2c9;}body div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:5px 0;}body div.dataTables_wrapper div.dataTables_paginate ul.pagination{display:inline-block;}body div.dataTables_wrapper div.dataTables_paginate ul.pagination>li{display:inline;}body .dataTables_wrapper table.dataTable{margin:10px 0 !important;border-collapse:collapse !important;}body table.table-bordered.dataTable{border-collapse:collapse !important;}.dt-buttons.btn-group{float:left;}.dataTables_length,div.dataTables_info{float:left;margin-right:15px;}.dataTables_empty{text-align:center;}table.DTFC_Cloned tr.even{background:none !important;}div.dataTables_scrollHead .table,.DTFC_LeftWrapper div.DTFC_LeftHeadWrapper table,.DTFC_RightWrapper div.DTFC_RightHeadWrapper table{margin-bottom:0 !important;border-radius:0 !important;}.DTFC_LeftBodyLiner .table thead>tr>th,.dataTables_scrollBody .table thead>tr>th{border-bottom:none !important;}.dataTables_scrollBody,.DTFC_LeftBodyLiner{border-bottom:2px solid #ebeced;}.dataTables_scroll+.dataTables_info,.dataTables_wrapper .DTFC_LeftBodyLiner table.dataTable,.dataTables_wrapper .dataTables_scrollBody table.dataTable{margin-top:0 !important;margin-bottom:0 !important;border-radius:0 !important;}.dataTables_wrapper .DTFC_LeftWrapper table.dataTable>tbody>tr>td,.dataTables_wrapper .dataTables_scrollBody table.dataTable>tbody>tr>td{border-bottom:none !important;}.table>tbody+thead>tr>th,.table.fixedHeader-floating thead>tr>th{border-top:none;border-bottom-width:1px !important;}table.dataTable tbody>tr.selected,table.dataTable tbody>tr.selected td,table.dataTable tbody>tr>.selected{background:#ffc !important;color:#707478;}table.dataTable th.focus,table.dataTable td.focus{position:relative;z-index:1000;outline:2px solid #242a30 !important;}.table.table-bordered.dataTable tbody tr:first-child td{border-top:none !important;}div.dt-autofill-handle{background:#348fe2 !important;border-color:#348fe2 !important;}div.dt-autofill-select{background:#348fe2 !important;}div.dt-autofill-background{z-index:1080 !important;}div.dt-autofill-list{z-index:1090 !important;border:none !important;box-shadow:none !important;padding:0 !important;}div.dt-autofill-list ul li{display:table !important;width:100% !important;}div.dt-autofill-list ul>li:first-child{border-radius:6px 6px 0 0 !important;}div.dt-autofill-list ul>li:last-child{border-radius:0 0 6px 6px !important;}div.dt-autofill-list div.dt-autofill-question{padding:15px !important;border-color:#f2f3f4 !important;}div.dt-autofill-list div.dt-autofill-button{width:140px !important;padding:15px !important;border-color:#f2f3f4 !important;}div.dt-autofill-list .dt-autofill-button .btn{display:block;width:100%;position:relative;color:transparent;background:#b6c2c9;border-color:#b6c2c9;}div.dt-autofill-list .dt-autofill-button .btn:hover,div.dt-autofill-list .dt-autofill-button .btn:focus{background:#889197;border-color:#889197;}div.dt-autofill-list .dt-autofill-button .btn:before{content:'Fill This';color:#fff;position:absolute;left:0;right:0;}div.dt-button-info{border:none !important;box-shadow:0 5px 30px 0px rgba(0,0,0,0.25) !important;border-radius:6px !important;padding:20px !important;}div.dt-button-info h2{border:none !important;background:none !important;padding:0 !important;}div.dt-button-info>div{padding:0 !important;margin-top:10px !important;}div.DTCR_pointer{width:2px !important;background:#348fe2 !important;margin-left:-1px;}table.dataTable.fixedHeader-floating{z-index:1030;}tr.dt-rowReorder-moving{outline:2px solid #2e353c !important;}table.dt-rowReorder-float{outline:2px solid #348fe2 !important;}table.dt-rowReorder-float tr td{background:#fff !important;}table.dataTable thead .sorting_asc:after{content:'\\f0dd' !important;}table.dataTable thead .sorting_desc:after{content:'\\f0de' !important;}table.dataTable thead .sorting:after{content:'\\f0dc' !important;}table.dataTable thead .sorting:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc:before{display:none !important;}.datepicker{color:#2d353c;min-width:250px !important;border-radius:6px !important;}.datepicker table{width:100%;}.datepicker .next,.datepicker .prev{color:transparent;}.datepicker .next:before{content:'\\f105';color:#2d353c;position:absolute;font-size:14px;}.datepicker .prev:before{content:'\\f104';color:#2d353c;position:absolute;font-size:14px;}.datepicker .prev:hover,.datepicker .next:hover,.datepicker tfoot tr th:hover,.datepicker .datepicker-switch:hover{background:#f2f3f4 !important;}.datepicker.datepicker-dropdown{width:320px;}.datepicker table tr td,.datepicker table tr th{padding-left:14px;padding-right:14px;}.datepicker .datepicker-months table>thead>tr>th.prev,.datepicker .datepicker-months table>thead>tr>th.next{width:45px;}.datepicker .datepicker-months table>thead>tr>th,.datepicker .datepicker-months table>tbody>tr>td{padding:5px;}.datepicker-dropdown.datepicker-orient-left:after{left:15px;}.datepicker-dropdown.datepicker-orient-right:after{right:15px;}.datepicker.datepicker-dropdown>div{display:block;}.datepicker.dropdown-menu{min-width:250px;border:none !important;box-shadow:0 5px 30px 0px rgba(0,0,0,0.25) !important;}.datepicker-dropdown:before{display:none !important;}.datepicker table tr td.selected,.datepicker table tr td.selected.highlighted{background:#575d63 !important;text-shadow:none !important;}.datepicker.datepicker-inline{display:block;width:auto;}.datepicker-full-width .datepicker-inline{width:100%;}.datepicker table tr td.today,.datepicker table tr td.today:hover,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover{background:#eee !important;}.datepicker table tr td.active:hover,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active:focus,.datepicker table tr td.active:hover:focus,.datepicker table tr td.active.disabled:focus,.datepicker table tr td.active.disabled:hover:focus,.datepicker table tr td.active:active,.datepicker table tr td.active:hover:active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.active,.datepicker table tr td span.active.active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:hover.active,.open .dropdown-toggle.datepicker table tr td.active,.open .dropdown-toggle.datepicker table tr td.active:hover,.open .dropdown-toggle.datepicker table tr td.active.disabled,.open .dropdown-toggle.datepicker table tr td.active.disabled:hover{background:#348fe2 !important;color:#fff !important;}.input-daterange .input-group-addon{background:#d6d8dd !important;border:none !important;text-shadow:none !important;padding:6px 12px !important;border-radius:0 !important;}.colorpicker{border:none !important;border-radius:4px !important;padding:5px;z-index:1010 !important;}.colorpicker:before{display:none !important;}.colorpicker:after{border-width:7px !important;top:-7px !important;}.colorpicker-left:after{left:12px!important;}.colorpicker-right:after{right:12px!important;}.colorpicker-hue,.colorpicker-alpha{margin-bottom:5px !important;margin-left:5px !important;}.input-group.colorpicker-component{display:table;width:100%;}.input-group.colorpicker-component .form-control{display:table-cell;width:100%;}.input-group.colorpicker-component .input-group-addon{display:table-cell;vertical-align:middle;width:20px;}.colorpicker-element .add-on i,.colorpicker-element .input-group-addon i{display:block !important;}.bootstrap-timepicker.input-group{display:table;width:100%;}.bootstrap-timepicker.input-group>.form-control{display:table-cell;width:100%;}.bootstrap-timepicker.input-group .input-group-addon{display:table-cell;width:20px;}.bootstrap-timepicker-widget.dropdown-menu{padding:5px !important;}.bootstrap-timepicker-widget.dropdown-menu.open{border:none !important;max-width:240px;}.bootstrap-timepicker-widget.dropdown-menu:before{display:none !important;}.bootstrap-timepicker .bootstrap-timepicker-widget.dropdown-menu+.form-control{border-radius:4px 0 0 4px;}.bootstrap-timepicker-widget .form-control{width:45px;}.bootstrap-timepicker-widget table td{padding:5px !important;}.bootstrap-timepicker-widget table td a{padding:5px 0 !important;margin:-5px 0 !important;}.bootstrap-timepicker-widget table td a:hover,.bootstrap-timepicker-widget table td a:focus{background:#348fe2 !important;border:none !important;color:#fff;}.bootstrap-timepicker-widget table td input{border-radius:4px !important;}.ui-widget{font-family:inherit;font-size:12px;}.ui-autocomplete{padding:5px 0 !important;box-shadow:0 5px 30px 0px rgba(0,0,0,0.25) !important;border:1px solid #ccc !important;border:none !important;font-size:12px !important;}.ui-menu .ui-menu-item a{padding:5px 10px;}body .ui-autocomplete.ui-menu .ui-menu-item-wrapper{padding:5px 15px;}.ui-stats-hover,.ui-widget-header .ui-stats-hover,.ui-widget-content .ui-stats-hover,.ui-stats-focus,.ui-widget-header .ui-stats-focus,.ui-widget-content .ui-stats-focus{border:none !important;background:#348fe2 !important;color:#fff !important;margin:0 !important;border-radius:0 !important;}.ui-state-hover,.ui-widget-header .ui-state-hover,.ui-widget-content .ui-state-hover,.ui-state-focus,.ui-widget-header .ui-state-focus,.ui-widget-content .ui-state-focus{background:#edf0f5;border:none;margin:0 !important;border-radius:0;}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active,a.ui-button:active,.ui-button:active,.ui-button.ui-state-active:hover{background:#348fe2;border-color:#348fe2;}.combobox-container{display:table;border-collapse:separate;width:100%;}.combobox-container .input-group{display:table;width:100%;}.combobox-container .input-group .input-group-addon{display:table-cell;width:35px;}.combobox-container .caret{margin:0;}.combobox-container .glyphicon-remove:before{content:'\\f00d';}.combobox-container .dropdown-toggle:after{display:none;}.combobox-container input,.combobox-container .uneditable-input{border:1px solid #edf0f5;background:#edf0f5;font-size:12px;display:block;width:100%;height:34px;padding:6px 12px;line-height:1.42857143;color:#555;border-radius:4px 0 0 4px !important;-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;}.combobox-container input:focus,.combobox-container .uneditable-input:focus{outline:0;border-color:#5db0ff !important;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3) !important;}.combobox-container input,.combobox-container .add-on{display:table-cell !important;}.combobox-container .add-on{width:1% !important;padding:5px 10px !important;white-space:nowrap;float:none !important;background:#d6d8dd !important;color:#555 !important;}.btn .combobox-clear{margin:0 !important;width:8px !important;position:relative;opacity:1.0;}.combobox-container .icon-remove:before{content:'\\f00d';font-size:14px;font-style:normal;position:absolute;right:-2px;top:1px;text-shadow:none;}.combobox-container input,.combobox-container .uneditable-input{border:1px solid #ccd0d4 !important;background:#fff !important;}body .bootstrap-select .btn:focus{outline:none !important;}body .bootstrap-select.show .dropdown-menu{display:block;z-index:1010 !important;}.tagit.ui-widget{border:1px solid #ccd0d4 !important;background:#fff !important;padding:3px 12px 2px !important;margin-bottom:0 !important;}ul.tagit input[type=\"text\"]{background:#fff !important;width:auto !important;}ul.tagit li.tagit-choice-editable{background:#b6c2c9 !important;border:none !important;color:#fff !important;border-radius:3px !important;padding:2px 24px 3px 7px !important;}.tagit .ui-icon-close{background:none !important;height:22px !important;width:16px !important;text-indent:0 !important;}.tagit.white .ui-icon-close:before{color:#000;}.tagit .ui-icon-close:before{content:'\\f00d';font-size:10px;color:#fff;}ul.tagit.inverse li.tagit-choice-editable{background:#2d353c !important;}ul.tagit.white li.tagit-choice-editable{background:#fff !important;border:1px solid #ddd !important;color:#000 !important;}ul.tagit.primary li.tagit-choice-editable{background:#348fe2 !important;}ul.tagit.info li.tagit-choice-editable{background:#49b6d6 !important;}ul.tagit.success li.tagit-choice-editable{background:#00acac !important;}ul.tagit.warning li.tagit-choice-editable{background:#f59c1a !important;}ul.tagit.danger li.tagit-choice-editable{background:#ff5b57 !important;}ul.tagit li.tagit-choice .tagit-close{right:2px !important;line-height:22px !important;text-align:center !important;top:0 !important;margin:0 !important;}ul.tagit li.tagit-choice .tagit-close:hover,ul.tagit li.tagit-choice .tagit-close:focus{-webkit-text-decoration:none !important;text-decoration:none !important;}ul.tagit li.tagit-choice .tagit-close:hover .ui-icon-close:before,ul.tagit li.tagit-choice .tagit-close:focus .ui-icon-close:before{color:#666;color:rgba(0,0,0,0.4);}ul.tagit.inverse li.tagit-choice .tagit-close:hover .ui-icon-close:before,ul.tagit.inverse li.tagit-choice .tagit-close:focus .ui-icon-close:before{color:#666;color:rgba(255,255,255,0.4);}.parsley-error{background:#fff !important;border-color:#ff5b57 !important;}.parsley-error:focus{border-color:#cc4946 !important;outline:0;box-shadow:0 0 0 0.125rem rgba(204,73,70,0.3) !important;}.parsley-success{background:#fff !important;border-color:#00acac !important;}.parsley-success:focus{border-color:#008a8a !important;outline:0;box-shadow:0 0 0 0.125rem rgba(0,172,172,0.3) !important;}.parsley-error,.parsley-success{color:#2d353c !important;box-shadow:none !important;}.parsley-error:focus,.parsley-success:focus{color:#2d353c !important;}.parsley-errors-list{padding:0 !important;list-style-type:none !important;margin:0 !important;color:#e5603b;font-size:12px !important;line-height:inherit !important;}.parsley-errors-list.filled{margin-top:5px !important;}.panel-form .cke_chrome{border:none;box-shadow:none;}.bwizard-steps{font-size:14px !important;border-radius:3px !important;overflow:hidden !important;display:table !important;width:100% !important;}.bwizard-steps li:before,.bwizard-steps li:after{border:none !important;}.bwizard-steps li{float:none !important;display:table-cell !important;padding:15px !important;line-height:20px !important;background:#f0f3f4 !important;border-radius:0 !important;}.bwizard-steps li:hover,.bwizard-steps li:focus{background:#d3dadf !important;}.bwizard-steps.clickable li:hover:not(.active) a,.bwizard-steps.clickable li:focus:not(.active) a{color:#333 !important;}.bwizard-steps li small{font-size:11px !important;color:#999 !important;display:block !important;line-height:14px !important;}.bwizard-steps li a{margin-left:30px !important;display:block !important;-webkit-text-decoration:none !important;text-decoration:none !important;}.bwizard-steps .label{float:left !important;padding:0 !important;height:20px !important;width:20px !important;line-height:20px !important;text-align:center !important;margin-right:10px !important;top:0 !important;background:#6d7479 !important;border-radius:50% !important;}.bwizard-steps li.active,.bwizard-steps li.active:hover,.bwizard-steps li.active:focus{background:#00acac !important;}.bwizard-steps li.active small{color:#b2e6e6 !important;}.bwizard-steps li.active .label{background:rgba(0,0,0,0.2) !important;}.fc-event,.fc .fc-event{border:none;background:#2d353c;border-radius:0;}.fc .fc-highlight{background:#cdd3de;}.fc .fc-day-grid-event{padding:1px 2px;}.fc .fc-view-container{background:#fff;}.fc.fc-unthemed .fc-today{background:#fffce4;}.fc a.fc-event:not([href]):not([tabindex]){color:#fff;}.fc-row .fc-content-skeleton td.fc-today,.fc-row .fc-helper-skeleton td.fc-today{background:none;}.fc-event-list .fc-event{background:none;border:none;color:#242a30;padding:7px 10px 7px 35px;font-size:12px;line-height:16px;position:relative;background:#fff;margin-bottom:5px;border-radius:6px;}.fc-event-list .fc-event:hover,.fc-event-list .fc-event:focus{color:#242a30;cursor:pointer;background:#fff;}.fc-event-list .fc-event:hover:before,.fc-event-list .fc-event:focus:before{background:#cdd5da;color:#2e353c;}.fc-event-list .fc-event i{float:left;line-height:18px;}.fc-event-list .fc-event+.fc-event{margin-top:-1px;}.fc-event-list .fc-event.ui-draggable:before{content:'\\f0b2';font-family:Font Awesome\\ 5 Free;font-weight:900;position:absolute;top:0;bottom:0;left:0;width:25px;text-align:center;line-height:16px;padding-top:7px;padding-bottom:7px;background:#e6eaec;border-radius:6px 0 0 6px;color:#a2a7ab;font-size:14px;}.fc-event-list .fc-event.ui-draggable-dragging{border:1px dashed #D2D6DA;}.fc-event-list .fc-event-icon{float:right;margin-left:10px;}body .fc button{font-weight:400;color:#242a30;background:#fff;padding:5px 10px;height:inherit;font-size:12px;line-height:1.5;border:none;text-shadow:none;position:initial;box-shadow:none;}body .fc button+button{border-left:1px solid #e2e7eb;}body .fc button:active,body .fc button:focus,body .fc button:hover{background:#fff;outline:none;}body .fc button:hover{color:#348ee3;}body .fc button.fc-state-disabled:active,body .fc button.fc-state-disabled:focus,body .fc button.fc-state-disabled:hover{background:#fff;}body .fc button.fc-state-active{color:#fff;background:#2e353c;border-color:#2e353c;box-shadow:none;}.fc.fc-unthemed .fc-content,.fc.fc-unthemed .fc-divider,.fc.fc-unthemed .fc-popover,.fc.fc-unthemed .fc-row,.fc.fc-unthemed tbody,.fc.fc-unthemed td,.fc.fc-unthemed th,.fc.fc-unthemed thead{border-color:#d9e0e7;}.fc th{padding:2px 15px !important;color:#242a30;font-weight:600;background:#e8ecf1;}.fc button .fc-icon{margin:0;top:0;width:auto;height:auto;font-size:12px;}.fc .fc-icon-left-single-arrow:after,.fc .fc-icon-right-single-arrow:after{content:'\\f0d9';font-size:12px;margin:0;top:1px;}.fc .fc-icon-right-single-arrow:after{content:\"\\f0da\";}.fc .fc-unthemed .fc-today{background:#FFF8F0;}.fc .fc-scroller{overflow:initial;height:auto !important;}.fc .fc-toolbar{margin-bottom:0 !important;}.fc .fc-toolbar h2{font-size:22px;line-height:28px;}.fc .fc-toolbar>*>*{margin-bottom:15px !important;}.jvectormap-zoomin,.jvectormap-zoomout{width:16px !important;height:16px !important;padding:0 !important;line-height:16px !important;left:15px !important;color:#000 !important;background:#fff !important;box-shadow:0 2px 8px rgba(0,0,0,0.25);}.jvectormap-label,.jvectormap-tip{padding:3px 6px !important;border:none !important;background:rgba(0,0,0,0.6) !important;}.legendColorBox>div{margin-right:5px !important;border-radius:5px !important;margin-top:1px !important;border:none !important;}.legend>table tr td.legendColorBox{padding-left:5px !important;}.legend>table tr td{padding:4px 0 5px 0 !important;}.legend>div{border-radius:4px !important;background:#000 !important;}.legend>table tr td.legendLabel{padding-right:10px !important;color:#fff;}.legend>table tr+tr td{padding-top:0px !important;}.legendColorBox>div>div{border-radius:5px !important;border-width:4px !important;}.tickLabel,.legendLabel{font-size:11px !important;}.tickLabel{color:#2d353c !important;font-size:12px !important;font-weight:600;}.flot-tooltip{position:absolute;display:none;border:0;padding:6px 10px 7px;color:#fff;font-size:11px;background-color:rgba(0,0,0,0.8);border-radius:5px;opacity:1.0;z-index:10000 !important;}.jqstooltip{border:none !important;border-radius:4px;background:#333 !important;width:auto !important;height:auto !important;background:rgba(0,0,0,0.8) !important;}.irs-line-left,.irs-bar-edge{border-radius:6px 0 0 6px !important;}.irs-line-right{border-radius:0 6px 6px 0 !important;}.irs-to,.irs-from,.irs-single{background:#2d353c !important;}.irs-bar-edge{background:#b9c0c3 !important;border-right:1px solid #fff;top:27px !important;height:4px !important;}.irs-line-mid,.irs-line-left,.irs-line-right{background:#f2f3f4 !important;}.irs-bar{background:#929ba1 !important;}.irs-bar,.irs-line{height:4px !important;top:27px !important;}.irs-min,.irs-max{background:#e9edef !important;color:#5b6165 !important;}.irs-slider.to,.irs-slider.from,.irs-slider.single{background:#929ba1;box-shadow:0 2px 6px rgba(0,0,0,0.25);border-radius:16px;border:6px solid #fff;cursor:pointer;}.bootstrap-colorpalette .btn-color{border-radius:4px;width:19px !important;height:19px !important;}.bootstrap-colorpalette .btn-color:focus{outline:none !important;border:1px solid #000 !important;}.editable-date{width:300px;}.editable-input{font-size:12px;}.editable-error-block{font-size:12px;}.editable-date .datetimepicker{width:auto !important;color:#2e353c !important;}.editable-input .date .form-control,.editable-input .datetimepicker.datetimepicker-inline{width:240px;}.editable-input .input-sm,.editable-input select.form-control:not([size]):not([multiple]) .input-sm{height:30px;}.editable-input .date .add-on{display:none;}.editable-input .datetimepicker.datetimepicker-inline table>thead>tr>th,.editable-input .datetimepicker.datetimepicker-inline table thead th,.editable-input .datetimepicker.datetimepicker-inline table tfoot th,.editable-input .datetimepicker.datetimepicker-inline table tbody td{border:none !important;vertical-align:middle;}.editable-input .tt-dropdown-menu{border:none !important;font-size:12px;box-shadow:0 10px 30px 0px rgba(0,0,0,.2) !important;}.editable-input .tt-suggestion.tt-is-under-cursor{background:#348fe2 !important;}.editable-input .twitter-typeahead .tt-hint{padding:5px 9px !important;}.editable-checklist{font-size:12px;min-width:200px;}.editableform textarea.form-control{min-width:240px;}.editable-checklist label{display:block;}.editable-checklist label input[type=\"checkbox\"].form-control{box-shadow:none !important;height:20px !important;}.editable-checklist label input[type=\"checkbox\"]+span{margin-left:5px;}.editable-input .select2-container .select2-choice>.select2-chosen{color:#2e353c;}.editable-buttons .glyphicon-ok:before{content:'\\f00c';}.editable-buttons .glyphicon-remove:before{content:'\\f00d';}.input-append .icon-eye-open:before,.input-prepend .icon-eye-open:before{content:'\\f06e';}.input-append .icon-eye-close:before,.input-prepend .icon-eye-close:before{content:'\\f070';}.slider-wrapper{padding:15px 30px !important;}.slider-wrapper.slider-without-range{padding:15px 0 !important;}.slider-wrapper.slider-vertical{padding-left:15px !important;padding-right:15px !important;}.range-min,.range-max{color:#242a30 !important;}.range-handle{cursor:pointer !important;}.range-quantity{background:#00acac !important;}.red .range-quantity{background:#ff5b57 !important;}.blue .range-quantity{background:#348fe2 !important;}.purple .range-quantity{background:#727cb6 !important;}.orange .range-quantity{background:#f59c1a !important;}.black .range-quantity{background:#2d353c !important;}.datetimepicker table{width:100%;}.datetimepicker th,.datetimepicker td{padding:0px 5px !important;width:30px !important;height:30px !important;}.datetimepicker table tr td.active,.datetimepicker table tr span.active{background-image:none !important;background:#348fe2!important;color:#fff !important;text-shadow:none !important;}.wysihtml5-sandbox{width:100% !important;}.panel-form .wysihtml5-toolbar{padding:15px 15px 5px;}.panel-form .wysihtml5-sandbox{border-radius:0 0 4px 4px !important;}.wysihtml5-toolbar .glyphicon-quote:before{display:none;}.wysihtml5-toolbar .glyphicon-quote:after{content:'\\f10d';}.wysihtml5-toolbar .glyphicon-list:before{content:'\\f03a';}.wysihtml5-toolbar .glyphicon-indent-right:before{content:'\\f038';}.wysihtml5-toolbar .glyphicon-indent-left:before{content:'\\f036';}.wysihtml5-toolbar .glyphicon-th-list:before{content:'\\f00b';}.wysihtml5-toolbar .glyphicon-share:before{content:'\\f064';}.wysihtml5-toolbar .glyphicon-picture:before{content:'\\f03e';}.wysihtml5-toolbar .dropdown-toggle:after{display:none;}.twitter-typeahead .tt-hint{line-height:22px;padding:5px 11px;opacity:0.6;}.tt-suggestion.tt-is-under-cursor{background:#edf0f5;color:#222;}.select2-container.form-control .select2-choice,.select2-container.form-control .select2-choice{background:none !important;margin:-6px -12px !important;padding:6px 12px !important;line-height:20px !important;border:none !important;box-shadow:none !important;height:32px !important;}.select2-container.form-control.input-sm .select2-choice,.select2-container.form-control.input-sm .select2-choice{height:30px !important;}.select2-container .select2-choice .select2-arrow{background:none !important;border-left:none !important;width:22px !important;}.select2-container.form-control .select2-choice abbr{top:10px !important;}.select2-container.form-control.input-sm .select2-choice abbr{top:10px !important;}.select2-container.form-control.input-sm .select2-choice .select2-arrow b{background-position:-3px 4px !important;}.select2-container .select2-choice .select2-arrow b{background-position:0 3px !important;}.select2-drop-active{border-color:#e2e7eb !important;box-shadow:0 2px 2px -1px rgba(0,0,0,0.2) !important;}.select2-drop.select2-drop-above{box-shadow:0 -2px 2px -1px rgba(0,0,0,0.2) !important;}.select2-search{padding:5px !important;}.select2-search input{border-color:#e2e7eb !important;border-radius:4px !important;}.select2-drop{border:none !important;border-top:1px solid #d3d8df !important;box-shadow:0 10px 30px 0px rgba(0,0,0,.2) !important;margin-top:-2px !important;}.select2-results{margin:0 !important;padding:5px 0 !important;}.select2-results .select2-result-label{padding:5px 15px !important;}.select2-results .select2-highlighted{background:#f2f3f4 !important;color:#333 !important;}.select2-container.select2-container-multi.form-control{height:auto !important;width:240px !important;}.select2-container.select2-container-multi.form-control .select2-choices{margin:-6px -12px !important;border:none !important;box-shadow:none !important;min-height:22px !important;height:auto !important;background:none !important;}.select2-container.select2-container-multi.form-control.select2-container-active{border-color:#5db0ff !important;outline:0;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3);}.select2-container-multi .select2-choices .select2-search-choice{box-shadow:none !important;border-color:#f2f3f4 !important;background:#f2f3f4 !important;margin-top:4px !important;}.select2-container--default .select2-selection--multiple .select2-selection__rendered li{padding:0 !important;}.select2-container--default .select2-selection--multiple .select2-selection__rendered li.select2-selection__choice{padding:0 5px !important;}.bootstrap-calendar .calendar{background:#fff;border:none;border-radius:0;padding:10px 0;}.bootstrap-calendar .calendar a{line-height:24px;}.bootstrap-calendar .calendar td{border:none !important;}.bootstrap-calendar .calendar .table td{padding:3px 5px;}.bootstrap-calendar .calendar .week_days td{background:none;color:#a9acae;}.bootstrap-calendar .calendar .visualmonthyear{color:#2d353c;}.bootstrap-calendar .calendar .table.header{margin-bottom:5px;position:relative;z-index:10;}.bootstrap-calendar .calendar .table.header td{color:#707478;vertical-align:middle;}.bootstrap-calendar .calendar .table.header .year{width:72%;}.bootstrap-calendar .calendar .table.header td.year{font-size:18px;}.bootstrap-calendar .calendar .icon-arrow-right,.bootstrap-calendar .calendar .icon-arrow-left{cursor:pointer;display:inline-block;font-size:14px;}.bootstrap-calendar .calendar .icon-arrow-right:hover,.bootstrap-calendar .calendar .icon-arrow-left:hover,.bootstrap-calendar .calendar .icon-arrow-right:focus,.bootstrap-calendar .calendar .icon-arrow-left:focus{color:#2d353c;}.bootstrap-calendar .calendar .icon-arrow-left:before{content:'\\f060';}.bootstrap-calendar .calendar .icon-arrow-right:before{content:'\\f061';}.bootstrap-calendar .calendar .table{margin-bottom:0;}.bootstrap-calendar .calendar .event a{display:block;border-radius:30px;background:#fff;color:#fff;margin:0 auto;}.bootstrap-calendar .calendar .event .popover a{color:#428bca;}.bootstrap-calendar .calendar .event .popover a:hover,.bootstrap-calendar .calendar .event .popover a:focus{color:#2a6496;-webkit-text-decoration:underline;text-decoration:underline;}.bootstrap-calendar .calendar .event,.bootstrap-calendar .calendar .event:hover,.bootstrap-calendar .calendar .event:focus,.bootstrap-calendar .calendar .event a:hover,.bootstrap-calendar .calendar .event a:focus{text-shadow:none;color:#2d353c;box-shadow:none;font-weight:normal;}.bootstrap-calendar .calendar .event a:hover,.bootstrap-calendar .calendar .event a:focus{color:#fff;opacity:0.8;}.bootstrap-calendar .calendar .event,.bootstrap-calendar .calendar .event:hover,.bootstrap-calendar .calendar .event:focus{background:none;text-align:center;}.bootstrap-calendar .calendar .fa-circle{position:absolute;right:0;top:0;}.superbox{font-size:0;margin:-1px -1px 0 0;}.superbox-list{display:inline-block;position:relative;}.superbox-list.superbox-O{z-index:10;}.superbox-list.superbox-O:before{content:'';position:absolute;left:50%;bottom:-1px;border:10px solid transparent;border-bottom-color:#d9e0e7;margin-left:-10px;z-index:10;}.superbox-list.superbox-O:after{content:'';position:absolute;left:50%;bottom:-3px;border:10px solid transparent;border-bottom-color:#242a31;margin-left:-10px;z-index:20;}.superbox-show{background:#242a30;border-top:1px solid #d9e0e7 !important;}.superbox-img{width:100%;cursor:pointer;display:block;padding-top:75%;position:relative;}.superbox-img:hover{opacity:0.8;}.superbox-img img{display:none;}.superbox-img span{position:absolute;top:1px;left:0;right:1px;bottom:0;background-size:cover !important;background-position:center !important;}.superbox-current-img{box-shadow:0 5px 35px rgba(0,0,0,.65);max-width:100%;}.superbox-close{opacity:0.7;cursor:pointer;position:absolute;top:25px;right:25px;width:35px;height:35px;}.pace-inactive{opacity:0;}.pace.pace-inactive{z-index:0;}.ie8 .pace-inactive,.ie8 .pace .pace-activity{display:none;}.pace{background:none;position:fixed;top:0;left:0;right:0;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:1020;}.pace-progress{position:fixed;top:50px;left:0;right:0;text-align:center;height:3px;background:#00acac;-webkit-transition:width 1s;transition:width 1s;z-index:2000;}.pace:before{content:'';background:none;position:fixed;top:50px;right:0;left:0;height:3px;}.pace .pace-activity{display:block;position:fixed;z-index:2000;top:65px;right:8px;width:14px;height:14px;border:solid 2px transparent;border-top-color:#00acac;border-left-color:#00acac;border-radius:10px;-webkit-animation:pace-spinner 400ms linear infinite;-webkit-animation:pace-spinner 400ms linear infinite;animation:pace-spinner 400ms linear infinite;}@-webkit-keyframes pace-spinner{0%{-webkit-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-moz-keyframes pace-spinner{0%{-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-o-keyframes pace-spinner{0%{-o-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-o-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-ms-keyframes pace-spinner{0%{-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes pace-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes pace-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.pace-top .pace:before,.pace-top .pace-progress{top:0;}.pace-top .pace .pace-activity{top:11px;}.jstree-default .jstree-clicked,.jstree-default .jstree-wholerow-clicked{background:#E4E9EC !important;box-shadow:none !important;}.jstree-default .jstree-hovered,.jstree-default .jstree-wholerow-hovered{background:#f0f3f4 !important;box-shadow:none !important;}.jstree-open>.jstree-anchor>.fa-folder:before{content:'\\f07c';color:#242a30;}.jstree-default .jstree-checkbox{background:none;}.jstree-default .jstree-checkbox:before{content:'';position:absolute;left:4px;top:4px;right:4px;bottom:4px;border:1px solid #b4b6b7;display:block;background:#fff;}.jstree-default .jstree-anchor>.jstree-checkbox.jstree-undetermined:after{content:'';position:absolute;left:7px;right:7px;bottom:7px;top:7px;display:block;background:#b4b6b7;}.jstree-default.jstree-checkbox-selection .jstree-clicked>.jstree-checkbox:after,.jstree-default .jstree-checked>.jstree-checkbox:after{content:'\\f00c';position:absolute;left:5px;right:5px;bottom:5px;top:5px;display:block;line-height:16px;font-size:12px;font-style:initial;color:#242a30;}body .daterangepicker{z-index:1020 !important;}.daterangepicker:before{display:none !important;}.daterangepicker td.active,.daterangepicker td.active:hover,.daterangepicker td.active.available,.daterangepicker td.active.available:hover{background:#348fe2 !important;text-shadow:none !important;color:#fff !important;}.daterangepicker table{color:#2d353c;}.daterangepicker .calendar th{color:#2d353c !important;}.daterangepicker .calendar th,.daterangepicker .calendar td{padding:7px !important;font-weight:600;}.daterangepicker .ranges li{color:#242a30 !important;font-size:12px;}.daterangepicker .ranges li.active,.daterangepicker .ranges li:hover{background:#2e353c !important;border-color:#2e353c !important;color:#fff !important;}.daterangepicker td.available:hover,.daterangepicker th.available:hover{background:#e9ecef !important;color:#2d353c !important;}.daterangepicker td.off,.daterangepicker td.off.in-range,.daterangepicker td.off.start-date,.daterangepicker td.off.end-date{background:none !important;color:#d3d8df !important;}.daterangepicker td.off:hover,.daterangepicker td.off:focus{background:#fff !important;color:#d3d8df !important;}body .daterangepicker td.in-range{background:#c8e9f3;}body .daterangepicker .input-mini.active{border-color:#5db0ff;outline:0;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3);}.select2-dropdown{border:none !important;box-shadow:0 10px 20px 0px rgba(0,0,0,0.15) !important;z-index:1020 !important;}.select2-dropdown.select2-dropdown--above{box-shadow:0 -10px 20px 0px rgba(0,0,0,0.15) !important;}.select2-container .select2-selection--single:focus{outline:0 !important;}.select2.select2-container--focus .select2-selection--single:focus{border-color:#5db0ff;outline:0 !important;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3);}.select2-container--default .select2-results__option--highlighted[aria-selected]{background:#348fe2 !important;}.select2-container .select2-selection--single,.select2-container--default .select2-selection--multiple{min-height:34px !important;border-color:#e2e7eb !important;outline:none !important;}.select2-container .select2-selection--single .select2-selection__rendered{padding-left:12px !important;}.select2-container--default .select2-selection--single .select2-selection__rendered{line-height:34px !important;font-size:12px;}.select2-container--default .select2-selection--single .select2-selection__arrow{right:5px !important;height:32px !important;}.select2-container--default .select2-selection--single .select2-selection__arrow b{border-width:4px !important;border-color:#2e353c transparent transparent transparent !important;}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #2e353c transparent !important;margin-top:-6px;}.select2-container--default .select2-results__group{color:#242a30 !important;}.select2-container--default .select2-search--inline .select2-search__field{height:23px;padding-left:5px;border-color:#d3d8de !important;}.select2-container--default .select2-search--dropdown .select2-search__field{padding:6px 12px !important;height:34px;border-color:#d3d8de !important;}.select2-container--default.select2-container--focus .select2-selection--multiple,.select2-container--default .select2-search--dropdown .select2-search__field:focus{border-color:#5db0ff !important;outline:0 !important;box-shadow:0 0 0 0.125rem rgba(52,142,227,0.3) !important;}.select2-container--default .select2-selection--multiple .select2-selection__choice{margin-top:6px !important;}.select2-container--default .select2-selection--multiple .select2-selection__rendered{padding:0 12px !important;}.select2-container--default .select2-selection--multiple .select2-selection__choice{border:none !important;margin-right:8px !important;padding:2px 6px !important;}body .bootstrap-datetimepicker-widget .glyphicon{font-size:14px;}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-chevron-up:before{content:'\\f106';}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-chevron-down:before{content:'\\f107';}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-chevron-left:before{content:'\\f104';}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-chevron-right:before{content:'\\f105';}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-time:before{content:'\\f017';}body .bootstrap-datetimepicker-widget .glyphicon.glyphicon-calendar:before{content:'\\f133';}body .bootstrap-datetimepicker-widget .timepicker-hour,body .bootstrap-datetimepicker-widget .timepicker-minute,body .bootstrap-datetimepicker-widget .timepicker-second{border:1px solid #d3d8df;border-radius:6px;display:block;width:80px;margin:0 auto;line-height:22px;height:auto;padding:6px 15px;}body .bootstrap-datetimepicker-widget .picker-switcher{width:100% !important;}body .bootstrap-datetimepicker-widget .datepicker>div{display:block;}body .bootstrap-datetimepicker-widget.dropdown-menu{width:320px;padding:0;border-radius:6px;}body .bootstrap-datetimepicker-widget.dropdown-menu,body .bootstrap-datetimepicker-widget a[data-action]{color:#242a30;}body .bootstrap-datetimepicker-widget.dropdown-menu .datepicker{padding:0;}body .bootstrap-datetimepicker-widget.dropdown-menu.bottom:after{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid white;top:-7px;left:15px;}body .bootstrap-datetimepicker-widget.dropdown-menu.bottom.pull-right:after{left:auto;right:15px;}body .bootstrap-datetimepicker-widget.dropdown-menu.bottom:before{display:none;}body .bootstrap-datetimepicker-widget .collapse.in{display:block;}body .bootstrap-datetimepicker-widget .collapse.in+.picker-switch td span{margin-top:0;border-radius:0 0 6px 6px;}body .bootstrap-datetimepicker-widget .picker-switch td span{display:block;width:auto;margin:-1px 0 0;background:#f2f3f4;height:36px;line-height:36px;border-radius:6px 6px 0 0;}body .bootstrap-datetimepicker-widget .picker-switch td a{-webkit-text-decoration:none;text-decoration:none;}body .bootstrap-datetimepicker-widget .picker-switch td span:hover{background:#e9ecef;}body .bootstrap-datetimepicker-widget table thead tr:first-child th:hover,body .bootstrap-datetimepicker-widget table td span:hover,body .bootstrap-datetimepicker-widget table td.day:hover,body .bootstrap-datetimepicker-widget table td.hour:hover,body .bootstrap-datetimepicker-widget table td.minute:hover,body .bootstrap-datetimepicker-widget table td.second:hover{background:#f2f3f4;}body .bootstrap-datetimepicker-widget .datepicker-days,body .bootstrap-datetimepicker-widget .datepicker-months,body .bootstrap-datetimepicker-widget .timepicker .timepicker-picker,body .bootstrap-datetimepicker-widget .timepicker .timepicker-hours,body .bootstrap-datetimepicker-widget .timepicker .timepicker-minutes,body .bootstrap-datetimepicker-widget .timepicker .datepicker-seconds,body .bootstrap-datetimepicker-widget .datepicker-years,body .bootstrap-datetimepicker-widget .datepicker-decades,body .bootstrap-datetimepicker-widget .table-condensed>thead>tr>th,body .bootstrap-datetimepicker-widget .table-condensed>tbody>tr>td{padding:5px;}body .bootstrap-datetimepicker-widget .datepicker-months table tbody tr td,body .bootstrap-datetimepicker-widget .datepicker-years table tbody tr td,body .bootstrap-datetimepicker-widget .picker-switch .table-condensed>tbody>tr>td{padding:0;}body .bootstrap-datetimepicker-widget .datepicker-decades .decade{line-height:16px !important;padding:11px;}body .bootstrap-datetimepicker-widget button[data-action]{padding:6px 15px;}body .bootstrap-datetimepicker-widget table td{height:32px;width:32px;line-height:32px;}body .bootstrap-datetimepicker-widget .timepicker-picker table td.separator{width:20px;}body .bootstrap-datetimepicker-widget .timepicker-picker table td,body .bootstrap-datetimepicker-widget .timepicker-picker table td .btn span{width:auto;height:auto;line-height:inherit;}body .bootstrap-datetimepicker-widget .timepicker-picker table td{padding:0 5px;}body .bootstrap-datetimepicker-widget .timepicker-picker table td .btn,body .bootstrap-datetimepicker-widget .timepicker-picker table td .btn span{display:block;}body .bootstrap-datetimepicker-widget .timepicker-picker table td .btn.btn-primary{width:60px;margin-right:10px;}body .bootstrap-datetimepicker-widget .timepicker-picker table td:first-child{padding-left:10px;}.nvtooltip{font-family:inherit !important;font-size:12px !important;border:none !important;padding:5px 10px !important;border-radius:8px !important;background:rgba(255,255,255,0.95) !important;box-shadow:0 5px 30px 0 rgba(0,0,0,.25) !important;border:none !important;}.nvtooltip table td.legend-color-guide div{border:none !important;border-radius:4px !important;}.nvtooltip table thead strong{-webkit-text-decoration:underline !important;text-decoration:underline !important;}.nvd3-inverse-mode .nvd3 line.nv-guideline{stroke:rgba(255,255,255,0.5) !important;}.nvd3-inverse-mode .nvd3 .nv-bars text{fill:rgba(255,255,255,1) !important;}.nvd3-inverse-mode .nvd3 .nv-axis line,.nvd3-inverse-mode .nvd3 .nv-axis path{fill:none;stroke:rgba(255,255,255,0.15) !important;}.nvd3-inverse-mode .nvd3 .nv-legend-text,.nvd3-inverse-mode .nvd3 .nv-x text,.nvd3-inverse-mode .nvd3 .nv-y text{font-family:inherit !important;fill:rgba(255,255,255,0.75) !important;font-size:11px !important;font-weight:500 !important;}.nvd3-inverse-mode .nvd3.nv-pie .nv-pie-title,.nvd3-inverse-mode .nv-label text{fill:rgba(255,255,255,0.75) !important;}.nvd3-inverse-mode .nvd3 .nv-legend-symbol{r:3;}.nvd3-inverse-mode .nvd3.nv-pie path{stroke:rgba(0,0,0,0.2) !important;}.introjs-hint{width:10px !important;height:10px !important;}.introjs-hint-dot{left:-20px !important;top:-20px !important;}.introjs-helperNumberLayer{font-size:12px;background:#ff5b57 !important;font-family:inherit !important;border:none !important;text-shadow:none !important;padding:0 !important;text-align:center !important;}.note-editor.note-frame{border:none !important;margin:0 !important;background:none;}.note-popover.popover{display:none;}.note-popover .popover-content,.panel-heading.note-toolbar{padding:10px 15px !important;border-radius:0;background:#242a31;}.note-editor.note-frame .note-placeholder,.note-editor.note-frame .note-editing-area .note-editable{padding:15px !important;}.note-toolbar.panel-heading .btn-group .btn{margin-top:0 !important;}.note-toolbar .dropdown-toggle:after{display:none !important;}.note-btn-group .dropdown-menu .btn-group{display:inline-block;}.simplecolorpicker{z-index:1010 !important;}.simplecolorpicker.icon,.simplecolorpicker span.color{border-radius:4px;width:19px;}.simplecolorpicker.fontawesome span.color[data-selected]:after{display:block;text-align:center;}.simplecolorpicker.glyphicons span.color[data-selected]:after{content:'\\f00c' !important;margin-left:2px !important;top:0 !important;}.simplecolorpicker span.color:focus,.simplecolorpicker.icon:focus{outline:none !important;}.simplecolorpicker.inline{padding:5px 0 0 !important;}.dropzone{border:2px dashed #b6c2c9 !important;background:none !important;}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer !important;}.dropzone.dz-clickable:hover,.dropzone.dz-clickable:focus{background:#f2f3f4 !important;}.dropzone.dz-clickable.dz-started:hover,.dropzone.dz-clickable.dz-started:focus{background:none !important;}.dropzone .dz-message{font-weight:300 !important;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;color:inherit !important;font-size:28px !important;}.dropzone .dz-message{text-align:center !important;margin:45px 0 !important;}.dropzone .dz-message .dz-note{font-size:14px !important;font-weight:normal !important;display:block !important;margin-top:20px !important;color:#707478 !important;}.dropzone .dz-preview.dz-image-preview{background:none !important;}.dropzone .dz-preview .dz-error-message{background:#ff5b57 !important;}.dropzone .dz-preview .dz-error-message:after{border-bottom-color:#ff5b57 !important;}.inverse-mode .dropzone{border-color:rgba(255,255,255,0.25) !important;}.inverse-mode .dropzone.dz-clickable:hover,.inverse-mode .dropzone.dz-clickable:focus{background:rgba(255,255,255,0.15) !important;}.inverse-mode .dropzone .dz-message{color:inherit !important;}.inverse-mode .dropzone .dz-message .dz-note{color:rgba(255,255,255,0.75) !important;}.swal-modal .btn:focus{box-shadow:none !important;}.swal-icon--success,.swal-icon--success__ring{border-color:rgba(0,172,172,0.2) !important;}.swal-icon--success__line--long,.swal-icon--success__line--tip{background-color:#00acac !important;}.swal-icon--info{border-color:#49b6d6 !important;}.swal-icon--info:after,.swal-icon--info:before{background-color:#49b6d6 !important;}.swal-icon--warning__body,.swal-icon--warning__dot{background-color:#f59c1a !important;}.swal-icon--warning{border-color:#f59c1a !important;}.swal-icon--error__line{background-color:#ff5b57 !important;}.swal-icon--error{border-color:#ff5b57 !important;}.hljs-wrapper{background:#f2f3f4;border-radius:3px;}.hljs-wrapper pre{border:none;padding:0;background:none;border-radius:0;}.hljs-wrapper .hljs{padding:15px;border-radius:0;display:block;overflow-x:auto;color:#242a31;border:none;font-size:12px;background:none;border-radius:0;}.hljs-wrapper .hljs-tag,.hljs-wrapper .hljs-section,.hljs-wrapper .hljs-name,.hljs-wrapper .hljs-selector-tag,.hljs-wrapper .hljs-deletion,.hljs-wrapper .hljs-subst{color:#2b71b5;}.hljs-wrapper .hljs-attr,.hljs-wrapper .hljs-variable,.hljs-wrapper .hljs-template-variable,.hljs-wrapper .hljs-type,.hljs-wrapper .hljs-selector-class,.hljs-wrapper .hljs-selector-attr,.hljs-wrapper .hljs-selector-pseudo,.hljs-wrapper .hljs-number{color:#4ea2d4;}.hljs-wrapper .hljs-string,.hljs-wrapper .hljs-regexp,.hljs-wrapper .hljs-addition,.hljs-wrapper .hljs-attribute,.hljs-wrapper .hljs-meta-string{color:#ea4b47;}.hljs-comment{color:#728088;}.panel-body+.hljs-wrapper{border-radius:0 0 3px 3px;}.sw-main.sw-theme-default{box-shadow:none;}.sw-main .nav-tabs{background:#f2f3f4;border-radius:0;display:table;width:100%;}.sw-main .nav-tabs>li{display:inline-block;float:none;padding:0;margin:0;}.sw-main>ul.step-anchor.nav-tabs>li>a{display:block;font-size:14px;font-weight:600;line-height:20px;padding:15px 15px 15px;margin:0;border-radius:0;color:#2e353c;}.sw-main>ul.step-anchor.nav-tabs>li.active>a{color:#fff !important;background:#348ee3 !important;}.sw-main>ul.step-anchor.nav-tabs>li.active>a .number{background:rgba(0,0,0,0.2);}.sw-main>ul.step-anchor.nav-tabs>li>a .number{float:left;padding:0;height:20px;width:20px;font-size:10px;line-height:20px;text-align:center;margin-right:10px;top:0;background:#bec1c3;color:#fff;border-radius:40px;position:relative;}.sw-main>ul.step-anchor.nav-tabs>li>a .number+.info{margin-left:30px;padding-right:15px;display:block;}.sw-theme-default>ul.step-anchor.nav-tabs>li>a small{display:block;font-size:11px;font-weight:500;line-height:16px;opacity:0.75;}.sw-theme-default>ul.step-anchor>li>a::after{display:none !important;}.sw-main .sw-container .step-content{background:#fff;padding:30px;border:none !important;}.sw-main .sw-toolbar{background:#f2f3f4 !important;padding:15px !important;display:block;}.sw-main .sw-toolbar:before,.sw-main .sw-toolbar:after{content:'';display:table;clear:both;}.sw-main .sw-toolbar .btn{border-radius:4px !important;min-width:100px;}.sw-main .sw-toolbar .sw-btn-next,.sw-main .sw-toolbar .sw-btn-next.disabled,.sw-main .sw-toolbar .sw-btn-next.disabled:hover,.sw-main .sw-toolbar .sw-btn-next.disabled:focus{color:#fff;background:#348fe2;border-color:#348fe2;}.sw-main .sw-toolbar .sw-btn-next:hover,.sw-main .sw-toolbar .sw-btn-next:focus{background:#2a72b5;border-color:#2a72b5;}.sw-main .sw-toolbar .sw-btn-prev,.sw-main .sw-toolbar .sw-btn-prev.disabled,.sw-main .sw-toolbar .sw-btn-prev.disabled:hover,.sw-main .sw-toolbar .sw-btn-prev.disabled:focus{background:#fff;}.sw-main .sw-toolbar .btn+.btn{margin-left:10px;border-left:none;}.sw-main .sw-btn-group{margin:0;}.sw-main.sw-theme-default>ul.step-anchor>li.done>a{background:#e9edef !important;color:#5b6165 !important;}.sw-main>ul.step-anchor.nav-tabs>li.done>a .number,.sw-main>ul.step-anchor.nav-tabs>li.done>a .number:before{background:#358de4 !important;}.sw-main>ul.step-anchor.nav-tabs>li.done>a .number:before{content:'\\f00c';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:40px;color:#fff;}.media-messaging .media{padding:15px;}.media-messaging .media:first-child{padding-top:0;}.media-messaging .media:last-child{padding-bottom:0;}.media-messaging .media p{margin:0;}.media-messaging .media+.media{margin-top:0;padding-top:15px;}.widget{color:#fff;padding:15px;overflow:hidden;border-radius:3px;margin-bottom:20px;}.widget.widget-stats{position:relative;}.widget-stats .stats-info h4{font-size:12px;margin:5px 0;color:#fff;color:rgba(255,255,255,0.7);}.widget-stats .stats-icon{font-size:42px;height:56px;width:56px;text-align:center;line-height:56px;margin-left:15px;color:#000;position:absolute;right:15px;top:15px;opacity:0.15;}.widget-stats .stats-content{position:relative;}.widget-stats .stats-info p{font-size:24px;font-weight:600;margin-bottom:0;}.widget-stats .stats-link a{display:block;margin:15px -15px -15px;padding:7px 15px;background:rgba(0,0,0,0.4);text-align:right;color:#fff;color:rgba(255,255,255,0.7);-webkit-text-decoration:none;text-decoration:none;}.widget-stats .stats-link a:hover,.widget-stats .stats-link a:focus{background:rgba(0,0,0,0.6);color:#fff;}.widget-stats .stats-icon.stats-icon-lg{font-size:128px;top:15px;right:0px;color:#fff;width:128px;height:50px;line-height:50px;text-shadow:3px 7px rgba(0,0,0,0.25);}.widget-stats .stats-icon.stats-icon-lg i{position:relative;}.widget-stats .stats-icon.stats-icon-square{opacity:1;border-radius:12px;font-size:42px;top:15px;right:15px;height:56px;width:56px;text-align:center;line-height:56px;margin-left:15px;}.widget-stats .stats-title{position:relative;margin:0 0 2px;font-size:12px;}.widget-stats .stats-title,.widget-stats .stats-desc{color:#fff;color:rgba(255,255,255,0.7);}.widget-stats .stats-desc{margin:-5px 0 -3px;font-weight:300;}.widget-stats .stats-number{font-size:24px;margin-bottom:15px;font-weight:600;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.widget-stats .stats-progress{background:rgba(0,0,0,0.5);height:2px;margin:0 0 15px;border-radius:3px;}.widget-stats .stats-progress.stats-progress-light{background:rgba(255,255,255,0.3);}.widget-stats .stats-progress .progress-bar{background:#fff;border-radius:0 3px 3px 0;}.widget-stats.text-inverse .stats-desc,.widget-stats.text-inverse .stats-title{color:rgba(0,0,0,.85);}.widget-stats.text-inverse .stats-number,.widget-stats.text-inverse .stats-desc{-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;font-weight:400;}.widget-stats.text-inverse .stats-title{font-weight:700;}.widget-stats.bg-white .stats-progress{background:rgba(0,0,0,.1);}.widget-stats.bg-white .stats-progress .progress-bar{background:#2d353c;}.todolist{list-style-type:none;margin:0;padding:0;}.todolist>li{border-bottom:1px solid #ddd;}.todolist>li>a{display:block;color:#333;}.todolist>li>a:hover,.todolist>li>a:focus{background:#fafafa;-webkit-text-decoration:none;text-decoration:none;}.todolist>li>a:hover .todolist-input i:before,.todolist>li>a:focus .todolist-input i:before{content:'\\f14a';opacity:0.4;color:#2d353c;}.todolist>li.active>a .todolist-input i:before,.todolist>li.active>a:hover .todolist-input i:before,.todolist>li.active>a:focus .todolist-input i:before{content:'\\f14a';color:#00acac;opacity:1.0;}.todolist>li.active>a .todolist-title{-webkit-text-decoration:line-through;text-decoration:line-through;}.todolist-title{padding-right:15px;}.todolist-input{text-align:center;font-size:14px;border-right:1px solid #ddd;padding-left:15px;color:#f2f3f4;}.todolist-input i{display:block;width:14px;text-align:center;}.todolist-input,.todolist-title{display:table-cell;padding:10px;}.theme-panel{position:fixed;right:-175px;top:150px;z-index:1020;background:#fff;padding:15px;width:175px;-webkit-transition:right .2s linear;transition:right .2s linear;border-radius:4px 0 0 4px;}.theme-panel.active{right:0;box-shadow:0px 5px 25px 0px rgba(0,0,0,0.3);}.theme-panel .theme-list{list-style-type:none;margin:0;padding:0;}.theme-panel .theme-list+.theme-list{margin-top:10px;}.theme-panel .theme-list>li{float:left;}.theme-panel .theme-list>li+li{margin-left:5px;}.theme-panel .theme-list>li>a{width:20px;height:20px;border-radius:3px;display:block;-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-text-decoration:none;text-decoration:none;}.theme-panel .theme-list>li>a:hover,.theme-panel .theme-list>li>a:focus{opacity:0.6;}.theme-panel .theme-list>li.active>a{position:relative;}.theme-panel .theme-list>li.active>a:before{content:'\\f00c';position:absolute;left:0;right:0;top:0;bottom:0;font-size:14px;color:#fff;opacity:0.4;text-align:center;}.theme-panel .theme-list>li.active>a.bg-white:before{color:#666;}.theme-panel .theme-collapse-btn{position:absolute;left:-30px;top:10%;margin-top:-15px;width:30px;height:30px;line-height:30px;font-size:18px;color:#333;background:#fff;border-radius:4px 0 0 4px;text-align:center;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.15);}.theme-panel .theme-panel-content{margin:-15px;padding:15px;background:#fff;position:relative;z-index:1020;border-radius:5px 0 0 5px;}.theme-panel.active .theme-collapse-btn .fa:before{content:'\\f00d';}.theme-panel .theme-list a.bg-white{border:1px solid #e2e7eb;}.theme-panel .control-label{line-height:30px;}.theme-panel .control-label.double-line{line-height:15px;}.theme-panel .divider{height:1px;margin:15px 0;background:#f2f2f2;}.widget-chart{position:relative;overflow:hidden;border-radius:3px;margin-bottom:20px;}.widget-chart .chart-title{font-size:16px !important;line-height:20px;color:#fff;font-weight:600 !important;margin:2px 5px 5px;}.widget-chart .chart-title small{display:block;margin-top:3px;font-size:12px;line-height:16px;color:#616D72;font-weight:normal;color:rgba(255,255,255,0.5);}.widget-chart .widget-chart-content{padding:15px;margin-right:230px;}.widget-chart .widget-chart-full-width{margin:0 -15px;}.widget-chart .widget-chart-sidebar{position:absolute;right:0;top:0;bottom:0;width:230px;padding:15px 20px;border-radius:0 4px 4px 0;}.widget-chart-sidebar .chart-number{font-size:24px;font-weight:600;line-height:28px;color:#fff;margin-bottom:15px;}.widget-chart-sidebar .chart-number small{font-size:12px;line-height:16px;margin-top:3px;color:#616D72;color:rgba(255,255,255,0.5);display:block;font-weight:normal;}.widget-chart-sidebar .chart-legend{list-style-type:none;margin:0;padding:0;font-size:12px;position:absolute;bottom:10px;}.widget-chart-sidebar .chart-legend>li{margin-bottom:5px;color:#fff;}.widget-chart-sidebar .chart-legend>li span{color:rgba(255,255,255,0.5);margin-left:5px;}body .morris-hover.morris-default-style{border-radius:6px;padding:6px 10px;color:#242a31;background:#f2f3f4;border:none;font-family:inherit;font-size:12px;text-align:center;}.morris-inverse .morris-hover{background:rgba(25,30,35,0.85) !important;border:none !important;padding:10px !important;color:#fff !important;border-radius:4px !important;}.morris-hover{z-index:0 !important;}.registered-users-list{list-style-type:none;margin:7.5px;padding:0;}.registered-users-list>li{width:25%;font-size:12px;float:left;padding:7.5px;color:#2d353c;}.registered-users-list>li>a{display:block;margin-bottom:10px;}.registered-users-list>li img{border-radius:3px;max-width:100%;}.registered-users-list>li .username{font-size:12px;color:#2d353c;margin-bottom:0;font-weight:600;}.registered-users-list>li .username small{display:block;font-size:11px;color:#707478;line-height:15px;}.chats{list-style-type:none;margin:0;padding:12px 15px 15px;}.chats>li+li,.chats>div+div{margin-top:15px;}.chats>li:before,.chats>li:after,.chats>div:before,.chats>div:after{content:'';display:table;clear:both;}.chats .name{color:#333;display:block;margin-bottom:5px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.chats .name .label{font-size:8px;padding:1px 4px 2px;margin-left:3px;position:relative;top:-1px;}.chats .date-time{font-size:10px;display:block;float:right;color:#999;margin-top:3px;}.chats .image{float:left;width:60px;height:60px;border-radius:4px;overflow:hidden;}.chats .image img{max-width:100%;}.chats .image+.message{margin-left:75px;}.chats .message{padding:7px 12px;font-size:12px;position:relative;background:#fff;border-radius:14px;}.chats .message:before{content:'';position:absolute;top:15px;left:-13px;border:7px solid transparent;border-right-color:#fff;}.chats .right .name{text-align:right;}.chats .right .date-time{float:left;}.chats .right .image{float:right;}.chats .right .image+.message{margin-right:75px;margin-left:0;}.chats .right .message:before{left:auto;right:-13px;border-right-color:transparent;border-left-color:#fff;}.panel-body .chats{padding:0;}.slimScrollDiv .chats{padding-right:15px;}.tab-overflow{position:relative;overflow:hidden;border-radius:2px 2px 0 0;}.tab-overflow .nav.nav-tabs{white-space:nowrap;overflow:hidden;display:table;margin:0;border-radius:2px 2px 0 0;}.tab-overflow .nav.nav-tabs>li,.tab-overflow.nav.nav-tabs>li{display:table-cell;float:none;}.tab-overflow .nav.nav-tabs>li>a{margin-left:-1px;}.tab-overflow .next-button,.tab-overflow .prev-button{position:absolute;right:0;top:0;z-index:10;display:none !important;opacity:0;box-shadow:0 0 15px rgba(0,0,0,0.5);-webkit-transition:all .2s linear;transition:all .2s linear;}.tab-overflow .prev-button{left:0;right:auto;box-shadow:0 0 15px rgba(0,0,0,0.5);}.tab-overflow .nav.nav-tabs.nav-tabs-inverse .next-button,.tab-overflow .nav.nav-tabs.nav-tabs-inverse .prev-button{box-shadow:0 0 15px #000;}.tab-overflow .nav.nav-tabs.nav-tabs-inverse .prev-button{box-shadow:0 0 15px #000;}.tab-overflow .next-button a,.tab-overflow .prev-button a{margin:0;background:#c1ccd1;}.flat-black .tab-overflow .next-button a,.flat-black .tab-overflow .prev-button a{background:#d2d2d2;}.tab-overflow .prev-button>a{border-radius:3px 0 3px;}.tab-overflow .nav-tabs-inverse .next-button>a,.tab-overflow .nav-tabs-inverse .prev-button>a,.nav.nav-tabs.nav-tabs-inverse>li>a,.nav.nav-tabs.nav-tabs-inverse>li>a:hover,.nav.nav-tabs.nav-tabs-inverse>li>a:focus{background:#242a30;}.flat-black .tab-overflow .nav-tabs-inverse .next-button>a,.flat-black .tab-overflow .nav-tabs-inverse .prev-button>a,.flat-black .nav.nav-tabs.nav-tabs-inverse>li>a,.flat-black .nav.nav-tabs.nav-tabs-inverse>li>a:hover,.flat-black .nav.nav-tabs.nav-tabs-inverse>li>a:focus{background:#2A2A2A;}.nav.nav-tabs.nav-tabs-inverse>li.active>a,.nav.nav-tabs.nav-tabs-inverse>li.active>a:hover,.nav.nav-tabs.nav-tabs-inverse>li.active>a:focus{background:#fff;color:#242a30;}.tab-overflow.overflow-right .next-button,.tab-overflow.overflow-left .prev-button{display:block !important;opacity:1;background:none;}.tab-overflow .nav-tabs>li.prev-button+li.active>a{border-radius:0 3px 0 0;}.result-list{list-style-type:none;margin:0;padding:0;width:100%;}.result-list:before,.result-list:after{content:'';display:table;clear:both;}.result-list>li{background:#fff;box-shadow:0 1px #ccc;border-radius:3px;overflow:hidden;}.result-list>li:before,.result-list>li:after{content:'';display:table;clear:both;}.result-list>li+li{margin-top:10px;}.result-list>li>div{display:table-cell;vertical-align:top;padding:20px;position:relative;}.result-list .result-image{width:240px;padding:0;overflow:hidden;background:#2d353c;vertical-align:middle;display:table-cell;background-size:cover;background-position:center;}.result-list .result-image a{display:block;}.result-list .result-image a:hover,.result-list .result-image a:focus{opacity:0.8;}.result-list .result-image img{width:100%;}.result-list .title{margin:0 0 0px;font-size:18px;line-height:26px;}.result-list .title a{color:#2e353c;}.result-list .location{color:#929ba1;margin-bottom:15px;}.result-list .desc{margin-bottom:20px;max-height:32px;overflow:hidden;text-overflow:ellipsis;line-height:16px;}.result-list .btn-row:before,.result-list .btn-row:after{content:'';display:table;clear:both;}.result-list .btn-row a{color:#2e353c;font-size:14px;line-height:18px;float:left;padding:8px 10px;border-radius:4px;background:#f2f3f4;}.result-list .btn-row a:hover,.result-list .btn-row a:focus{opacity:1;}.result-list .btn-row a+a{margin-left:5px;}.result-list .result-price{width:240px;font-size:28px;text-align:center;background:#f2f3f4;color:#2e353c;vertical-align:middle;}.result-list .result-price small{display:block;font-size:10px;font-weight:600;color:#929ba1;}.result-list .result-price .btn{margin-top:30px;}.map{position:absolute;top:50px;bottom:0;left:220px;right:0;z-index:0;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.map .jvectormap-zoomin{top:70px;}.map .jvectormap-zoomout{top:100px;}.map .jvectormap-zoomin,.map .jvectormap-zoomout{width:20px !important;height:20px !important;font-size:14px;line-height:20px !important;left:20px !important;}.map-content{padding:0 25px;z-index:100;position:relative;}.map-float-table{position:absolute;right:25px;bottom:25px;background:rgba(28,31,37,0.8);}.flat-black .map-float-table{background:rgba(28,28,28,0.8);}.page-with-wide-sidebar .map{left:250px;}.page-with-right-sidebar .map{right:220px;left:0;}.page-with-wide-sidebar.page-with-right-sidebar .map{right:250px;left:0;}.page-sidebar-minified .map{left:60px;}.page-with-right-sidebar.page-sidebar-minified .map{right:60px;}.invoice{background:#fff;padding:20px;}.invoice-company{font-size:20px;}.invoice-header{margin:0 -20px;background:#f0f3f4;padding:20px;}.invoice-from,.invoice-to,.invoice-date{display:table-cell;width:1%;}.invoice-from,.invoice-to{padding-right:20px;}.invoice-from strong,.invoice-to strong,.invoice-date .date{font-size:16px;font-weight:600;}.invoice-date{text-align:right;padding-left:20px;}.invoice-price{background:#f0f3f4;display:table;width:100%;}.invoice-price .invoice-price-left,.invoice-price .invoice-price-right{display:table-cell;padding:20px;font-size:20px;font-weight:600;width:75%;position:relative;vertical-align:middle;}.invoice-price .invoice-price-left .sub-price{display:table-cell;vertical-align:middle;padding:0 20px;}.invoice-price small{font-size:12px;font-weight:normal;display:block;}.invoice-price .invoice-price-row{display:table;float:left;}.invoice-price .invoice-price-right{width:25%;background:#2d353c;color:#fff;font-size:28px;text-align:right;vertical-align:bottom;font-weight:300;}.invoice-price .invoice-price-right small{display:block;opacity:0.6;position:absolute;top:10px;left:10px;font-size:12px;}.invoice-footer{border-top:1px solid #ddd;padding-top:10px;font-size:10px;}.invoice-note{color:#999;margin-top:80px;font-size:85%;}.invoice>div:not(.invoice-footer){margin-bottom:20px;}.login{margin:-168px 0 0;position:absolute;left:0;right:0;top:50%;}.login label{color:#707478;}.login .login-header{position:absolute;top:-80px;left:50%;right:0;width:450px;padding:0 40px;margin-left:-225px;font-weight:300;}.login .login-header .brand{padding:0;font-size:28px;color:#2d353c;}.login .login-header .brand .logo{border:14px solid transparent;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.2) rgba(0,0,0,0.3);width:28px;height:28px;position:relative;font-size:0;margin-right:10px;border-radius:6px;top:-11px;}.login .login-header .brand small{font-size:14px;display:block;color:#707478;}.login .login-header .icon{position:absolute;right:40px;top:-2px;opacity:0.1;}.login .login-header .icon i{font-size:70px;}.login .login-content{padding:30px 40px;color:#999;width:450px;margin:0 auto;}.gallery{margin:-5px;}.gallery .image{width:25%;display:block;overflow:hidden;padding:5px;}.gallery .image a{-webkit-transition:all .2s linear;transition:all .2s linear;}.gallery .image a:hover,.gallery .image a:focus{opacity:0.8;}.gallery .image img{width:100%;height:200px;border-radius:3px 3px 0 0;}.gallery .image-inner{position:relative;background:#fff;border-radius:3px 3px 0 0;}.gallery .image-caption{position:absolute;top:15px;left:0;background:rgba(0,0,0,0.6);color:#fff;padding:5px 15px;margin:0;}.gallery .image-info{background:#fff;padding:15px;border-radius:0 0 3px 3px;}.gallery .image-info .title{margin:0 0 10px;line-height:18px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.gallery .image-info .rating{line-height:20px;margin:0 0 3px;}.gallery .image-info .desc{line-height:16px;font-size:12px;height:48px;overflow:hidden;}.gallery .rating span.star{display:inline-block;}.gallery .rating span.star:before{content:\"\\f005\";color:#999;}.gallery .rating span.star.active:before{color:#FF8500;}.gallery-option-set{display:block;margin-bottom:-5px;}.gallery-option-set .btn{margin:0 5px 5px 0;}.error{margin:0 auto;text-align:center;}.error-code,.error-content{position:absolute;left:0;right:0;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.error-code{bottom:45%;color:#2d353c;font-size:200px;line-height:200px;text-shadow:10px 10px 0px rgba(0,0,0,0.1);}.error-content{top:55%;bottom:0;padding-top:25px;background:#2d353c;background-image:url(images/error-page-pattern.png);}.error-message{color:#fff;font-size:24px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:5px;}.error-desc{font-size:12px;color:#fff;color:rgba(255,255,255,0.5);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.timeline{list-style-type:none;margin:0;padding:0;position:relative;}.timeline:before{content:'';position:absolute;top:5px;bottom:5px;width:5px;background:#2d353c;left:20%;margin-left:-2.5px;}.timeline>li{position:relative;min-height:50px;padding:20px 0;}.timeline .timeline-time{position:absolute;left:0;width:18%;text-align:right;top:30px;}.timeline .timeline-time .date,.timeline .timeline-time .time{display:block;font-weight:600;}.timeline .timeline-time .date{line-height:16px;font-size:12px;}.timeline .timeline-time .time{line-height:24px;font-size:20px;color:#242a30;}.timeline .timeline-icon{left:15%;position:absolute;width:10%;text-align:center;top:40px;}.timeline .timeline-icon a{-webkit-text-decoration:none;text-decoration:none;width:20px;height:20px;display:inline-block;border-radius:20px;background:#d9e0e7;line-height:10px;color:#fff;font-size:14px;border:5px solid #2d353c;-webkit-transition:border-color .2s linear;transition:border-color .2s linear;}.timeline .timeline-body{margin-left:23%;margin-right:17%;background:#fff;position:relative;padding:20px 25px;border-radius:6px;}.timeline .timeline-body:before{content:'';display:block;position:absolute;border:10px solid transparent;border-right-color:#fff;left:-20px;top:20px;}.timeline .timeline-body>div+div{margin-top:15px;}.timeline .timeline-body>div+div:last-child{margin-bottom:-20px;padding-bottom:20px;border-radius:0 0 6px 6px;}.timeline-header{padding-bottom:10px;border-bottom:1px solid #e2e7eb;line-height:30px;}.timeline-header .userimage{float:left;width:34px;height:34px;border-radius:40px;overflow:hidden;margin:-2px 10px -2px 0;}.timeline-header .username{font-size:16px;font-weight:600;}.timeline-header .username,.timeline-header .username a{color:#2d353c;}.timeline img{max-width:100%;display:block;}.timeline-content{-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;line-height:18px;font-size:13px;}.timeline-content:before,.timeline-content:after{content:'';display:table;clear:both;}.timeline-title{margin-top:0;}.timeline-footer{background:#fff;border-top:1px solid #e2e7ec;padding-top:15px;}.timeline-footer a:not(.btn){color:#575d63;}.timeline-footer a:not(.btn):hover,.timeline-footer a:not(.btn):focus{color:#2d353c;}.timeline-likes{color:#6d767f;font-weight:600;font-size:12px;}.timeline-likes .stats-right{float:right;}.timeline-likes .stats-total{display:inline-block;line-height:20px;}.timeline-likes .stats-icon{float:left;margin-right:5px;font-size:9px;}.timeline-likes .stats-icon+.stats-icon{margin-left:-2px;}.timeline-likes .stats-text{line-height:20px;}.timeline-likes .stats-text+.stats-text{margin-left:15px;}.timeline-comment-box{background:#f2f3f4;margin-left:-25px;margin-right:-25px;padding:20px 25px;}.timeline-comment-box .user{float:left;width:34px;height:34px;overflow:hidden;border-radius:30px;}.timeline-comment-box .user img{max-width:100%;max-height:100%;}.timeline-comment-box .user+.input{margin-left:44px;}.coming-soon .brand{line-height:40px;font-size:28px;font-weight:300;margin-bottom:10px;color:#fff;text-align:center;}.coming-soon .brand .logo{border:25px solid transparent;border-color:#394449 #2a3237 #1b2123;position:relative;width:0;height:0;display:block;margin:0 auto 5px;vertical-align:middle;border-radius:8px;}.coming-soon .coming-soon-header .desc,.coming-soon .coming-soon-header .timer,.coming-soon .coming-soon-header .brand{position:relative;z-index:1020;}.coming-soon .coming-soon-header{background:url(images/coming-soon.jpg);background-size:cover;background-repeat:no-repeat;padding:100px 0 50px;position:relative;}.coming-soon .coming-soon-header:before{background:#000;}.coming-soon .coming-soon-header .bg-cover{background:-moz-linear-gradient(top,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.75) 100%);background:-webkit-linear-gradient(top,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.75) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.75) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000',endColorstr='#bf000000',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000',endColorstr='#bf000000',GradientType=0 );position:absolute;right:0;top:0;left:0;bottom:0;z-index:0;}.coming-soon .coming-soon-header .desc{text-align:center;font-size:13px;color:#fff;color:rgba(255,255,255,0.5);-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:50px;}.coming-soon .coming-soon-header .timer{margin-bottom:0px;padding:10px 0;}.coming-soon .coming-soon-header .timer:before,.coming-soon .coming-soon-header .timer:after{content:'';display:table;clear:both;}.coming-soon .timer .is-countdown{background:none;border:none;width:720px;margin:0 auto;}.coming-soon .timer .is-countdown .countdown-section{padding:0 10px;}.coming-soon .timer .is-countdown .countdown-section+.countdown-section{border-left:1px solid rgba(255,255,255,0.2);}.coming-soon .timer .countdown-amount{font-size:36px;color:#fff;}.coming-soon .timer .countdown-period{font-size:14px;color:#999;}.coming-soon a{color:#00acac;}.coming-soon .coming-soon-content{color:#333;text-align:center;padding:25px 0;}.coming-soon .coming-soon-content .desc{margin-bottom:25px;font-size:13px;}.coming-soon .coming-soon-content .input-group{width:480px;margin:0 auto;}.login.login-v2{color:#ccc;width:400px;margin:168px 0 0 -200px;position:absolute;top:0;left:50%;border-radius:4px;}.login.login-v2 a{color:#fff;}.login.login-v2 label{color:#ccc;}.login.login-v2 .login-content{padding:20px;width:400px;}.login.login-v2 .login-header{width:400px;padding:0 20px;margin:0;top:0;left:0;right:0;position:relative;}.login.login-v2 .login-header,.login.login-v2 .login-header .brand,.login.login-v2 .login-header .brand small{color:#fff;}.login.login-v2 .login-header .brand small{color:rgba(255,255,255,0.5);}.login.login-v2 .login-header .icon{opacity:0.4;right:20px;top:2px;}.login.login-v2 .login-header .icon i{font-size:56px;}.login.login-v2 .form-control{background:rgba(0,0,0,0.5);border:1px solid transparent;color:#fff;}.login.login-v2 .form-control:focus{border-color:transparent;box-shadow:0 0 0 0.125rem rgba(255,255,255,0.3);}.login-cover,.login-cover-bg,.login-cover-image{position:fixed;top:0;left:0;right:0;bottom:0;background-size:cover;background-repeat:no-repeat;background-position:center;-webkit-transition:background .2s linear;transition:background .2s linear;}.login-cover-image img{max-width:100%;top:0;left:0;position:absolute;}.login-cover-bg{background:rgba(0,0,0,0.5);}.login-bg-list{position:absolute;right:20px;bottom:20px;z-index:1020;list-style-type:none;margin:0;padding:0 0 0 20px;}.login-bg-list>li{width:66px;height:66px;overflow:hidden;float:left;-webkit-transition:all .2s linear;transition:all .2s linear;border:3px solid transparent;border-radius:66px;}.login-bg-list>li:hover,.login-bg-list>li:focus{border-color:rgba(255,255,255,0.5);}.login-bg-list>li a{display:block;height:60px;height:60px;overflow:hidden;background-size:cover;background-repeat:no-repeat;background-position:center;}.login-bg-list>li.active{border-color:#fff;z-index:1020;position:relative;}.login-bg-list>li img{max-height:100%;}.list-email{margin:-1px 0;border-top:1px solid #e2e7eb;border-bottom:1px solid #e2e7eb;}.list-email>li.list-group-item{border-radius:0;border:none;margin-bottom:0px;}.list-email>li.list-group-item{padding:15px 15px 15px 20px;position:relative;}.list-email>li.list-group-item+li.list-group-item{border-top:1px solid #e2e7eb;}.list-email>li.list-group-item:before,.list-email>li.list-group-item:after{content:'';display:table;clear:both;}.list-email .email-info,.list-email .email-sender,.list-email .email-info>a{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;position:relative;}.list-email .email-info{position:relative;padding-right:100px;}.list-email .email-user{float:left;width:30px;height:30px;border-radius:30px;overflow:hidden;font-size:18px;line-height:30px;text-align:center;color:#6e7179;background:#f4f6f7;margin:-5px 0;}.list-email .email-user img{max-width:100%;display:block;}.list-email .email-user+.email-info{margin-left:45px;}.list-email .email-checkbox+.email-user+.email-info{margin-left:68px;}.list-email .email-checkbox+.email-info{margin-left:23px;}.list-email .email-title{line-height:20px;}.list-email .unread .email-title{color:#2b71b5;font-weight:600;}.list-email .email-title+.email-desc{padding-left:20px;}.list-email .email-title+.email-desc:before{content:'';position:absolute;left:6px;top:7px;width:6px;height:6px;background:#d9dfe3;border-radius:6px;}.list-email .email-desc{position:relative;color:#5c656d;}.list-email .email-sender{width:230px;float:left;padding-right:15px;}.list-email .unread .email-sender{font-weight:600;}.list-email .email-title .label{position:relative;top:-1px;}.list-email a{color:#242a30;-webkit-text-decoration:none;text-decoration:none;}.list-email .email-info,.list-email .email-info>a{display:block;margin-top:-15px;margin-bottom:-15px;padding-top:15px;padding-bottom:15px;}.list-email .email-info>a{margin-right:-115px;padding-right:100px;position:relative;}.list-email .email-time{position:absolute;width:100px;padding:15px;top:0;bottom:0;right:0;font-size:11px;color:#9ba3ab;text-align:right;}.list-email .email-checkbox{float:left;width:30px;height:30px;line-height:30px;text-align:center;margin:-5px 5px -5px -12px;}.list-email .email-checkbox label{color:#e2e7eb;display:block;cursor:pointer;}.list-email .email-checkbox label input[type=checkbox]{display:none;}.list-email .email-checkbox label i{font-size:16px;display:block;line-height:30px;-webkit-transition:all .2s linear;transition:all .2s linear;}.list-email .email-checkbox label.active{color:#2e353c;}.list-email .email-checkbox label.active i:before{content:'\\f14a';}.list-email>li.selected{background:#e2e7ec;}.attached-document{list-style-type:none;margin:15px 0 0;padding:0;}.attached-document>li{width:180px;float:left;background:#fff;color:#2e353c;font-weight:600;position:relative;margin-right:15px;margin-bottom:15px;border:1px solid #d9dfe5;}.attached-document>li:before{position:absolute;top:-1px;right:-1px;font-size:12px;background:#d9dfe5;width:20px;height:20px;line-height:20px;text-align:center;}.attached-document>li img{max-width:100%;}.attached-document>li .document-name{padding:5px 10px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#f1f3f4;}.attached-document>li .document-name a{color:#2d353c;}.attached-document>li .document-file{height:70px;background:none;overflow:hidden;text-align:center;line-height:70px;font-size:32px;margin:-1px;}.inbox .nav-title{font-size:10px;color:#929ba1;padding:15px 13px 7px;}.inbox .nav-inbox{list-style-type:none;margin:0;padding:0;display:block;}.inbox .nav-inbox>li{display:block;}.inbox .nav-inbox>li>a{display:block;-webkit-text-decoration:none;text-decoration:none;border-radius:0;padding:8px 20px;color:#2d353c;font-weight:600;}.inbox .nav-inbox>li>a i{width:18px;}.inbox .nav-inbox>li+li{margin-top:0;}.inbox .nav-inbox>li.active>a,.inbox .nav-inbox>li.active>a:hover,.inbox .nav-inbox>li.active>a:focus{background:#d9dfe3;color:#2d353c;}.inbox .nav-inbox>li>a .badge,.inbox .nav-inbox>li.active>a .badge{background:#2d353c;color:#fff;padding:4px 8px;margin-top:-1px;font-size:10px;line-height:11px;}.inbox .float-right-link{position:absolute;right:0;top:0;padding-top:13px;}.inbox .email-to{position:relative;}.inbox .email-to .tagit,.inbox .email-to .form-control{border:none !important;border-bottom:1px solid #ccd0d4 !important;padding:9px 12px 9px 45px !important;border-radius:0;}.inbox .tagit input[type=\"text\"]{font-weight:500;}.inbox .email-subject .form-control{border:none !important;border-bottom:1px solid #ccd0d4 !important;padding:9px 12px 9px 12px !important;border-radius:0;}.inbox .email-subject .form-control:focus{box-shadow:none;}.inbox .email-to .control-label{position:absolute;left:0;top:0;bottom:0;padding-top:13px;padding-left:10px;line-height:16px;width:45px;}.inbox .email-content{padding:0;margin:0;}.inbox .email-content .wysihtml5-toolbar{padding:10px 0 0;}.inbox .email-content .wysihtml5-toolbar .btn{font-size:12px;margin-bottom:5px;}.inbox .email-content .wysihtml5-toolbar>li{margin:0 5px 5px 0;}.inbox .email-content .wysihtml5-sandbox{border-radius:0 !important;padding:15px !important;border:1px solid #ccd0d4 !important;}.login.login-with-news-feed,.register.register-with-news-feed{width:100%;margin:0;padding:0;top:0;}.login.login-with-news-feed .news-feed,.register.register-with-news-feed .news-feed{position:fixed;left:0;right:500px;top:0;bottom:0;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);overflow:hidden;}.login.login-with-news-feed .news-image,.register.register-with-news-feed .news-image{position:absolute;bottom:0;left:0;right:0;top:0;background-size:cover;background-repeat:no-repeat;background-position:center;}.login.login-with-news-feed .news-image img,.register.register-with-news-feed .news-image img{position:absolute;right:0;top:0;left:0;bottom:0;max-height:100%;min-width:100%;top:-1960px;bottom:-1960px;left:-1960px;right:-1960px;margin:auto;}.login.login-with-news-feed .news-caption,.register.register-with-news-feed .news-caption{color:rgba(255,255,255,0.75);position:absolute;bottom:0;left:0;right:0;padding:60px 60px 30px;font-size:18px;z-index:20;font-weight:300;background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#000000',GradientType=0 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#000000',GradientType=0 );}.login.login-with-news-feed .news-caption .caption-title,.register.register-with-news-feed .news-caption .caption-title{color:#fff;font-weight:300;font-size:36px;}.login.login-with-news-feed .right-content,.register.register-with-news-feed .right-content{float:right;width:500px;}.login.login-with-news-feed .login-content,.register.register-with-news-feed .register-content{width:auto;padding:30px 60px;}.register.register-with-news-feed .register-content{padding:20px 60px 30px;}.login.login-with-news-feed .login-header,.register.register-with-news-feed .register-header{position:relative;top:0;margin:0;left:0;right:0;padding:100px 60px 0;}.register.register-with-news-feed .register-header{padding:60px 60px 0;font-size:32px;}.register.register-with-news-feed .register-header small{color:#707478;display:block;font-size:14px;margin-top:10px;line-height:20px;}.login.login-with-news-feed .login-header .brand{color:#242a30;}.login.login-with-news-feed .login-header .brand small{color:#707478;}.login.login-with-news-feed .login-header .icon{top:98px;right:10px;}.profile-header{position:relative;overflow:hidden;}.profile-header .profile-header-cover{background-image:url(images/profile-cover.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;position:absolute;left:0;right:0;top:0;bottom:0;}.profile-header .profile-header-cover:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.75) 100%);}.profile-header .profile-header-content{color:#fff;padding:25px;}.profile-header-img{float:left;width:120px;height:120px;overflow:hidden;position:relative;z-index:10;margin:0 0 -20px 0;padding:3px;border-radius:4px;background:#fff;}.profile-header-img img{max-width:100%;}.profile-header-info h4{font-weight:500;color:#fff;}.profile-header-img+.profile-header-info{margin-left:140px;}.profile-header .profile-header-content,.profile-header .profile-header-tab{position:relative;}.profile-header .profile-header-tab{background:#fff;list-style-type:none;margin:-10px 0 0;padding:0 0 0 140px;white-space:nowrap;border-radius:0;}.profile-header .profile-header-tab>li{display:inline-block;margin:0;}.profile-header .profile-header-tab>li>a{display:block;color:#929ba1;line-height:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;font-weight:700;font-size:12px;border:none;}.profile-header .profile-header-tab>li.active>a,.profile-header .profile-header-tab>li>a.active{color:#242a30;}.profile-content{padding:25px;border-radius:4px;}.profile-content:before,.profile-content:after{content:'';display:table;clear:both;}.profile-content .tab-content,.profile-content .tab-pane{background:none;}.profile-left{width:200px;float:left;}.profile-right{margin-left:240px;padding-right:20px;}.profile-image{height:175px;line-height:175px;text-align:center;font-size:72px;margin-bottom:10px;border:2px solid #E2E7EB;overflow:hidden;border-radius:4px;}.profile-image img{display:block;max-width:100%;}.profile-highlight{padding:12px 15px;background:#FEFDE1;border-radius:4px;}.profile-highlight h4{margin:0 0 7px;font-size:12px;font-weight:bold;}.table.table-profile>thead>tr>th{border-bottom:none !important;}.table.table-profile>thead>tr>th h4{font-size:20px;margin-top:0;}.table.table-profile>thead>tr>th h4 small{display:block;font-size:12px;font-weight:normal;margin-top:5px;}.table.table-profile>thead>tr>th,.table.table-profile>tbody>tr>td{border:none;padding-top:7px;padding-bottom:7px;color:#242a30;background:none;}.table.table-profile>tbody>tr>td.field{width:20%;text-align:right;font-weight:600;color:#2d353c;}.table.table-profile>tbody>tr.highlight>td{border-top:1px solid #b9c3ca;border-bottom:1px solid #b9c3ca;}.table.table-profile>tbody>tr.divider>td{padding:0 !important;height:10px;}.profile-section+.profile-section{margin-top:20px;padding-top:20px;border-top:1px solid #b9c3ca;}.profile-section:before,.profile-section:after{content:'';display:table;clear:both;}.profile-section .title{font-size:20px;margin:0 0 15px;}.profile-section .title small{font-weight:normal;}body.flat-black{background:#E7E7E7;}.flat-black .navbar.navbar-inverse{background:#212121;}.flat-black .navbar.navbar-inverse .navbar-form .form-control{background:#4a4a4a;border-color:#4a4a4a;}.flat-black .sidebar,.flat-black .sidebar-bg{background:#3A3A3A;}.flat-black .sidebar .nav>li>a{color:#b2b2b2;}.flat-black .sidebar.sidebar-grid .nav>li>a{border-bottom:1px solid #474747;border-top:1px solid #474747;}.sidebar .nav>li.nav-profile>a,.flat-black .sidebar .nav>li>a:focus,.flat-black .sidebar .nav>li>a:hover,.flat-black .sidebar .nav>li.active>a,.flat-black .sidebar .sub-menu>li>a:hover,.flat-black .sidebar .sub-menu>li>a:focus,.flat-black .sidebar .active .sub-menu>li.active>a{color:#fff;}.flat-black .sidebar .sub-menu>li>a,.flat-black .sidebar .sub-menu>li>a:before{color:#999;}.flat-black .page-sidebar-minified .sidebar .nav>li.has-sub:hover>a,.flat-black .page-sidebar-minified .sidebar .nav>li.has-sub:focus>a{background:#323232;}.flat-black .sidebar .nav>li.active>a,.flat-black .sidebar .nav>li.active>a:focus,.flat-black .sidebar .nav>li.active>a:hover,.flat-black .sidebar .sub-menu>li:before,.flat-black .sidebar .sub-menu>li>a:after,.flat-black .sidebar .sub-menu>li.has-sub>a:before,.flat-black .page-sidebar-minified .sidebar .nav li.has-sub>.sub-menu,.flat-black .sidebar .nav>li.nav-profile{background:#2A2A2A;}.flat-black .page-sidebar-minified .sidebar .sub-menu>li:before,.flat-black .page-sidebar-minified .sidebar .sub-menu>li>a:after,.flat-black .page-sidebar-minified .sidebar .sub-menu>li>a:after{background:#3e3e3e;}.flat-black .sidebar .nav>li.nav-profile .cover.with-shadow:before{background:rgba(42,42,42,0.75);}.flat-black .footer{border-color:#D7D7D7;}.flat-black .list-group-item.list-group-item-inverse{background:#3A3A3A;border-color:#242424;}.flat-black .list-group-item.list-group-item-inverse:hover,.flat-black .list-group-item.list-group-item-inverse:focus{background:#323232;}.flat-black .nav-pills>li.active>a,.flat-black .nav-pills>li.active>a:focus,.flat-black .nav-pills>li.active>a:hover{background:#2A2A2A;}.flat-black .badge.badge-inverse,.flat-black .label.label-inverse{background:#3A3A3A;}.flat-black .badge.badge-default,.flat-black .label.label-default{background:#C3C3C3;}.flat-black .nav-tabs{background:#d2d2d2;}.flat-black .nav-tabs-inverse>.nav-tabs,.flat-black .nav-tabs.nav-tabs-inverse{background:#2A2A2A;}.flat-black .panel-with-tabs .panel-heading{background:#d2d2d2;}.flat-black .panel-inverse>.panel-heading{background:#2A2A2A;}.flat-black .table>tbody>tr>td,.flat-black .table>tbody>tr>th,.flat-black .table>tfoot>tr>td,.flat-black .table>tfoot>tr>th,.flat-black .table>thead>tr>td,.flat-black .table>thead>tr>th{border-color:#E0E0E0;}.flat-black .table>thead>tr>th{border-color:#E0E0E0 !important;}.flat-black .dataTables_filter input{background:#f7f7f7;border-color:#f7f7f7;}.flat-black .dataTables_filter input:focus{border-color:#D7D7D7;}.flat-black .table-striped>tbody>tr:nth-child(odd)>td,.flat-black .table-striped>tbody>tr:nth-child(odd)>th{background:#f7f7f7;}.flat-black .btn.btn-inverse{background:#3A3A3A;border-color:#242424;}.flat-black .btn-inverse:hover,.flat-black .btn-inverse:focus,.flat-black .btn-inverse:active,.flat-black .btn-inverse.active,.flat-black .open .dropdown-toggle.btn-inverse{background:#2a2a2a;}.flat-black .btn.btn-default{background:#c8c8c8;border-color:#c8c8c8;}.flat-black .btn.btn-default:hover,.flat-black .btn.btn-default:focus,.flat-black .btn.btn-default:active,.flat-black .btn.btn-default.active,.flat-black .open .dropdown-toggle.btn.btn-default{background:#a3a3a3;border-color:#a3a3a3;}.flat-black .btn.btn-white,.flat-black .btn-group .btn.btn-white:not(.active)+.btn.btn-white,.flat-black .input-group-btn .btn.btn-white:not(.active)+.btn.btn-white{border-color:#d2d2d2;}.flat-black .btn.btn-white:hover,.flat-black .btn.btn-white:focus,.flat-black .btn.btn-white:active,.flat-black .btn.btn-white.active,.flat-black .open .dropdown-toggle.btn.btn-white{background:#e0e0e0;border-color:#d2d2d2;}.flat-black .pager li>a,.flat-black .pager li>span,.flat-black .pagination>li>a{border-color:#d2d2d2;}.flat-black .pagination>.active>a,.flat-black .pagination>.active>a:focus,.flat-black .pagination>.active>a:hover,.flat-black .pagination>.active>span,.flat-black .pagination>.active>span:focus,.flat-black .pagination>.active>span:hover{background:#323232 !important;border-color:#323232 !important;}.flat-black .pager li>a:focus,.flat-black .pager li>a:hover,.flat-black .pager li>span:focus,.flat-black .pager li>span:hover,.flat-black .pagination>li>a:focus,.flat-black .pagination>li>a:hover{background:#e0e0e0;}.flat-black .progress{background:#eaeaea;}.flat-black .widget-stats .stats-progress{background:rgba(0,0,0,.2);}.flat-black .jvectormap-container{background:#2d2d2d !important;}.flat-black .bg-black{background:#3A3A3A !important;}.flat-black .bg-silver{background:#f7f7f7 !important;}.flat-black .bg-black-darker{background:#2d2d2d !important;}.flat-black .bwizard-steps li.active,.flat-black .bwizard-steps li.active:hover,.flat-black .bwizard-steps li.active:focus{background:#00acac !important;}.flat-black .bwizard-steps li:hover,.flat-black .bwizard-steps li:focus{background:#DFDFDF !important;}.flat-black .bwizard-steps li{background:#f7f7f7 !important;}.flat-black .timeline-footer{background:#F2F2F2;}.flat-black .invoice-header,.flat-black .invoice-price{background:#F5F5F5;}.flat-black .invoice-price .invoice-price-right{background:#3a3a3a;}.flat-black .error-content{background:#3a3a3a;}.flat-black .error-code{color:#3a3a3a;}.flat-black .error-desc{color:#888;}.row>[class^=\"col-\"]{padding:0 10px;}.row.row-space-0{margin:0;}.row.row-space-2{margin:0 -1px;}.row.row-space-4{margin:0 -2px;}.row.row-space-6{margin:0 -3px;}.row.row-space-8{margin:0 -4px;}.row.row-space-10{margin:0 -5px;}.row.row-space-12{margin:0 -6px;}.row.row-space-14{margin:0 -7px;}.row.row-space-16{margin:0 -8px;}.row.row-space-18{margin:0 -9px;}.row.row-space-18{margin:0 -10px;}.row.row-space-22{margin:0 -11px;}.row.row-space-24{margin:0 -12px;}.row.row-space-26{margin:0 -13px;}.row.row-space-28{margin:0 -14px;}.row.row-space-30{margin:0 -15px;}.row.row-space-0>[class^=\"col-\"]{padding:0;}.row.row-space-2>[class^=\"col-\"]{padding:0 1px;}.row.row-space-4>[class^=\"col-\"]{padding:0 2px;}.row.row-space-6>[class^=\"col-\"]{padding:0 3px;}.row.row-space-8>[class^=\"col-\"]{padding:0 4px;}.row.row-space-10>[class^=\"col-\"]{padding:0 5px;}.row.row-space-12>[class^=\"col-\"]{padding:0 6px;}.row.row-space-14>[class^=\"col-\"]{padding:0 7px;}.row.row-space-16>[class^=\"col-\"]{padding:0 8px;}.row.row-space-18>[class^=\"col-\"]{padding:0 9px;}.row.row-space-20>[class^=\"col-\"]{padding:0 10px;}.row.row-space-22>[class^=\"col-\"]{padding:0 11px;}.row.row-space-24>[class^=\"col-\"]{padding:0 12px;}.row.row-space-26>[class^=\"col-\"]{padding:0 13px;}.row.row-space-28>[class^=\"col-\"]{padding:0 14px;}.row.row-space-30>[class^=\"col-\"]{padding:0 15px;}.overflow-auto{overflow:auto !important;}.overflow-hidden{overflow:hidden !important;}.overflow-visible{overflow:visible !important;}.overflow-scroll{overflow:scroll !important;}.overflow-x-hidden{overflow-x:hidden !important;}.overflow-x-visible{overflow-x:visible !important;}.overflow-x-scroll{overflow-x:scroll !important;}.overflow-y-hidden{overflow-y:hidden !important;}.overflow-y-visible{overflow-y:visible !important;}.overflow-y-scroll{overflow-y:scroll !important;}.m-auto{margin:0 auto !important;}.m-0{margin:0px !important;}.m-1{margin:1px !important;}.m-2{margin:2px !important;}.m-3{margin:3px !important;}.m-4{margin:4px !important;}.m-5{margin:5px !important;}.m-10{margin:10px !important;}.m-15{margin:15px !important;}.m-20{margin:20px !important;}.m-25{margin:25px !important;}.m-30{margin:30px !important;}.m-35{margin:35px !important;}.m-40{margin:40px !important;}.m-t-0{margin-top:0px !important;}.m-t-1{margin-top:1px !important;}.m-t-2{margin-top:2px !important;}.m-t-3{margin-top:3px !important;}.m-t-4{margin-top:4px !important;}.m-t-5{margin-top:5px !important;}.m-t-10{margin-top:10px !important;}.m-t-15{margin-top:15px !important;}.m-t-20{margin-top:20px !important;}.m-t-25{margin-top:25px !important;}.m-t-30{margin-top:30px !important;}.m-t-35{margin-top:35px !important;}.m-t-40{margin-top:40px !important;}.m-r-0{margin-right:0px !important;}.m-r-1{margin-right:1px !important;}.m-r-2{margin-right:2px !important;}.m-r-3{margin-right:3px !important;}.m-r-4{margin-right:4px !important;}.m-r-5{margin-right:5px !important;}.m-r-10{margin-right:10px !important;}.m-r-15{margin-right:15px !important;}.m-r-20{margin-right:20px !important;}.m-r-25{margin-right:25px !important;}.m-r-30{margin-right:30px !important;}.m-r-35{margin-right:35px !important;}.m-r-40{margin-right:40px !important;}.m-b-0{margin-bottom:0px !important;}.m-b-1{margin-bottom:1px !important;}.m-b-2{margin-bottom:2px !important;}.m-b-3{margin-bottom:3px !important;}.m-b-4{margin-bottom:4px !important;}.m-b-5{margin-bottom:5px !important;}.m-b-10{margin-bottom:10px !important;}.m-b-15{margin-bottom:15px !important;}.m-b-20{margin-bottom:20px !important;}.m-b-25{margin-bottom:25px !important;}.m-b-30{margin-bottom:30px !important;}.m-b-35{margin-bottom:35px !important;}.m-b-40{margin-bottom:40px !important;}.m-l-0{margin-left:0px !important;}.m-l-1{margin-left:1px !important;}.m-l-2{margin-left:2px !important;}.m-l-3{margin-left:3px !important;}.m-l-4{margin-left:4px !important;}.m-l-5{margin-left:5px !important;}.m-l-10{margin-left:10px !important;}.m-l-15{margin-left:15px !important;}.m-l-20{margin-left:20px !important;}.m-l-25{margin-left:25px !important;}.m-l-30{margin-left:30px !important;}.m-l-35{margin-left:35px !important;}.m-l-40{margin-left:40px !important;}.p-0{padding:0px !important;}.p-1{padding:1px !important;}.p-2{padding:2px !important;}.p-3{padding:3px !important;}.p-4{padding:4px !important;}.p-5{padding:5px !important;}.p-10{padding:10px !important;}.p-15{padding:15px !important;}.wrapper{padding:15px;}.p-20{padding:20px !important;}.p-25{padding:25px !important;}.p-30{padding:30px !important;}.p-35{padding:35px !important;}.p-40{padding:40px !important;}.p-t-0{padding-top:0px !important;}.p-t-1{padding-top:1px !important;}.p-t-2{padding-top:2px !important;}.p-t-3{padding-top:3px !important;}.p-t-4{padding-top:4px !important;}.p-t-5{padding-top:5px !important;}.p-t-10{padding-top:10px !important;}.p-t-15{padding-top:15px !important;}.p-t-20{padding-top:20px !important;}.p-t-25{padding-top:25px !important;}.p-t-30{padding-top:30px !important;}.p-t-35{padding-top:35px !important;}.p-t-40{padding-top:40px !important;}.p-r-0{padding-right:0px !important;}.p-r-1{padding-right:1px !important;}.p-r-2{padding-right:2px !important;}.p-r-3{padding-right:3px !important;}.p-r-4{padding-right:4px !important;}.p-r-5{padding-right:5px !important;}.p-r-10{padding-right:10px !important;}.p-r-15{padding-right:15px !important;}.p-r-20{padding-right:20px !important;}.p-r-25{padding-right:25px !important;}.p-r-30{padding-right:30px !important;}.p-r-35{padding-right:35px !important;}.p-r-40{padding-right:40px !important;}.p-b-0{padding-bottom:0px !important;}.p-b-1{padding-bottom:1px !important;}.p-b-2{padding-bottom:2px !important;}.p-b-3{padding-bottom:3px !important;}.p-b-4{padding-bottom:4px !important;}.p-b-5{padding-bottom:5px !important;}.p-b-10{padding-bottom:10px !important;}.p-b-15{padding-bottom:15px !important;}.p-b-20{padding-bottom:20px !important;}.p-b-25{padding-bottom:25px !important;}.p-b-30{padding-bottom:30px !important;}.p-b-35{padding-bottom:35px !important;}.p-b-40{padding-bottom:40px !important;}.p-l-0{padding-left:0px !important;}.p-l-1{padding-left:1px !important;}.p-l-2{padding-left:2px !important;}.p-l-3{padding-left:3px !important;}.p-l-4{padding-left:4px !important;}.p-l-5{padding-left:5px !important;}.p-l-10{padding-left:10px !important;}.p-l-15{padding-left:15px !important;}.p-l-20{padding-left:20px !important;}.p-l-25{padding-left:25px !important;}.p-l-30{padding-left:30px !important;}.p-l-35{padding-left:35px !important;}.p-l-40{padding-left:40px !important;}.f-s-0{font-size:0px !important;}.f-s-1{font-size:1px !important;}.f-s-2{font-size:2px !important;}.f-s-3{font-size:3px !important;}.f-s-4{font-size:4px !important;}.f-s-5{font-size:5px !important;}.f-s-6{font-size:6px !important;}.f-s-7{font-size:7px !important;}.f-s-8{font-size:8px !important;}.f-s-9{font-size:9px !important;}.f-s-10{font-size:10px !important;}.f-s-11{font-size:11px !important;}.f-s-12{font-size:12px !important;}.f-s-13{font-size:13px !important;}.f-s-14{font-size:14px !important;}.f-s-15{font-size:15px !important;}.f-s-16{font-size:16px !important;}.f-s-17{font-size:17px !important;}.f-s-18{font-size:18px !important;}.f-s-19{font-size:19px !important;}.f-s-20{font-size:20px !important;}.l-h-0{line-height:0px !important;}.l-h-1{line-height:1px !important;}.l-h-2{line-height:2px !important;}.l-h-3{line-height:3px !important;}.l-h-4{line-height:4px !important;}.l-h-5{line-height:5px !important;}.l-h-6{line-height:6px !important;}.l-h-7{line-height:7px !important;}.l-h-8{line-height:8px !important;}.l-h-9{line-height:9px !important;}.l-h-10{line-height:10px !important;}.l-h-11{line-height:11px !important;}.l-h-12{line-height:12px !important;}.l-h-13{line-height:13px !important;}.l-h-14{line-height:14px !important;}.l-h-15{line-height:15px !important;}.l-h-16{line-height:16px !important;}.l-h-17{line-height:17px !important;}.l-h-18{line-height:18px !important;}.l-h-19{line-height:19px !important;}.l-h-20{line-height:20px !important;}.l-h-20{line-height:20px !important;}.l-h-21{line-height:21px !important;}.l-h-22{line-height:22px !important;}.l-h-23{line-height:23px !important;}.l-h-24{line-height:24px !important;}.l-h-25{line-height:25px !important;}.l-h-26{line-height:26px !important;}.l-h-27{line-height:27px !important;}.l-h-28{line-height:28px !important;}.l-h-29{line-height:29px !important;}.l-h-30{line-height:30px !important;}.t-plus-1{position:relative!important;top:1px !important;}.t-plus-2{position:relative!important;top:2px !important;}.t-plus-3{position:relative!important;top:3px !important;}.t-plus-4{position:relative!important;top:4px !important;}.t-plus-5{position:relative!important;top:5px !important;}.t-plus-6{position:relative!important;top:6px !important;}.t-plus-7{position:relative!important;top:7px !important;}.t-plus-8{position:relative!important;top:8px !important;}.t-plus-9{position:relative!important;top:9px !important;}.t-plus-10{position:relative!important;top:10px !important;}.t-minus-1{position:relative!important;top:-1px !important;}.t-minus-2{position:relative!important;top:-2px !important;}.t-minus-3{position:relative!important;top:-3px !important;}.t-minus-4{position:relative!important;top:-4px !important;}.t-minus-5{position:relative!important;top:-5px !important;}.t-minus-6{position:relative!important;top:-6px !important;}.t-minus-7{position:relative!important;top:-7px !important;}.t-minus-8{position:relative!important;top:-8px !important;}.t-minus-9{position:relative!important;top:-9px !important;}.t-minus-10{position:relative!important;top:-10px !important;}.l-plus-1{position:relative!important;left:1px !important;}.l-plus-2{position:relative!important;left:2px !important;}.l-plus-3{position:relative!important;left:3px !important;}.l-plus-4{position:relative!important;left:4px !important;}.l-plus-5{position:relative!important;left:5px !important;}.l-plus-6{position:relative!important;left:6px !important;}.l-plus-7{position:relative!important;left:7px !important;}.l-plus-8{position:relative!important;left:8px !important;}.l-plus-9{position:relative!important;left:9px !important;}.l-plus-10{position:relative!important;left:10px !important;}.l-minus-1{position:relative!important;left:-1px !important;}.l-minus-2{position:relative!important;left:-2px !important;}.l-minus-3{position:relative!important;left:-3px !important;}.l-minus-4{position:relative!important;left:-4px !important;}.l-minus-5{position:relative!important;left:-5px !important;}.l-minus-6{position:relative!important;left:-6px !important;}.l-minus-7{position:relative!important;left:-7px !important;}.l-minus-8{position:relative!important;left:-8px !important;}.l-minus-9{position:relative!important;left:-9px !important;}.l-minus-10{position:relative!important;left:-10px !important;}.r-plus-1{position:relative!important;right:1px !important;}.r-plus-2{position:relative!important;right:2px !important;}.r-plus-3{position:relative!important;right:3px !important;}.r-plus-4{position:relative!important;right:4px !important;}.r-plus-5{position:relative!important;right:5px !important;}.r-plus-6{position:relative!important;right:6px !important;}.r-plus-7{position:relative!important;right:7px !important;}.r-plus-8{position:relative!important;right:8px !important;}.r-plus-9{position:relative!important;right:9px !important;}.r-plus-10{position:relative!important;right:10px !important;}.r-minus-1{position:relative!important;right:-1px !important;}.r-minus-2{position:relative!important;right:-2px !important;}.r-minus-3{position:relative!important;right:-3px !important;}.r-minus-4{position:relative!important;right:-4px !important;}.r-minus-5{position:relative!important;right:-5px !important;}.r-minus-6{position:relative!important;right:-6px !important;}.r-minus-7{position:relative!important;right:-7px !important;}.r-minus-8{position:relative!important;right:-8px !important;}.r-minus-9{position:relative!important;right:-9px !important;}.r-minus-10{position:relative!important;right:-10px !important;}.b-plus-1{position:relative!important;bottom:1px !important;}.b-plus-2{position:relative!important;bottom:2px !important;}.b-plus-3{position:relative!important;bottom:3px !important;}.b-plus-4{position:relative!important;bottom:4px !important;}.b-plus-5{position:relative!important;bottom:5px !important;}.b-plus-6{position:relative!important;bottom:6px !important;}.b-plus-7{position:relative!important;bottom:7px !important;}.b-plus-8{position:relative!important;bottom:8px !important;}.b-plus-9{position:relative!important;bottom:9px !important;}.b-plus-10{position:relative!important;bottom:10px !important;}.b-minus-1{position:relative!important;bottom:-1px !important;}.b-minus-2{position:relative!important;bottom:-2px !important;}.b-minus-3{position:relative!important;bottom:-3px !important;}.b-minus-4{position:relative!important;bottom:-4px !important;}.b-minus-5{position:relative!important;bottom:-5px !important;}.b-minus-6{position:relative!important;bottom:-6px !important;}.b-minus-7{position:relative!important;bottom:-7px !important;}.b-minus-8{position:relative!important;bottom:-8px !important;}.b-minus-9{position:relative!important;bottom:-9px !important;}.b-minus-10{position:relative!important;bottom:-10px !important;}.hide{display:none!important;}.text-center{text-align:center !important;}.text-left{text-align:left !important;}.text-right{text-align:right !important;}.pull-left{float:left !important;}.pull-right{float:right !important;}.pull-none{float:none !important;}.f-w-100{font-weight:100 !important;}.f-w-200{font-weight:200 !important;}.f-w-300{font-weight:300 !important;}.f-w-400{font-weight:400 !important;}.f-w-500{font-weight:500 !important;}.f-w-600,.semi-bold{font-weight:600 !important;}.f-w-700{font-weight:700 !important;}.table-valign-middle th,.table-valign-middle td{vertical-align:middle !important;}.table-th-valign-middle th,.table-td-valign-middle td{vertical-align:middle !important;}.table-no-border-left th:first-child,.table-no-border-left td:first-child{border-left:none !important;}.table-no-border-bottom tr:last-child td{border-bottom:none !important;}.table-no-border-top tr:first-child td{border-top:none !important;}.table-no-border-right th:last-child,.table-no-border-right td:last-child{border-right:none !important;}.table-valign-top th,.table-valign-top td{vertical-align:top !important;}.table-th-valign-top th,.table-td-valign-top td{vertical-align:top !important;}.table-valign-bottom th,.table-valign-bottom td{vertical-align:bottom !important;}.table-th-valign-bottom th,.table-td-valign-bottom td{vertical-align:bottom !important;}.valign-top{vertical-align:top !important;}.valign-bottom{vertical-align:bottom !important;}.valign-middle{vertical-align:middle !important;}.vertical-box{display:table;table-layout:fixed;border-spacing:0;height:100%;width:100%;}.vertical-box-column{display:table-cell;vertical-align:top;height:100%;}.vertical-box-row{display:table-row;height:100%;}.vertical-box-row>.vertical-box-cell{position:relative;height:100%;width:100%;float:none;}.vertical-box-row>.vertical-box-cell>.vertical-box-inner-cell{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;}.vertical-box.with-grid>.vertical-box-column+.vertical-box-column{border-left:1px solid #d9dfe2;}.vertical-box.with-grid .vertical-box-row+.vertical-box-row>div,.vertical-box.with-grid .vertical-box-row+.wrapper,.vertical-box.with-grid .wrapper+.vertical-box-row>div,.vertical-box.with-grid .wrapper+.wrapper{border-top:1px solid #d9dfe2;}.no-rounded-corner{border-radius:0 !important;}.rounded-corner{border-radius:50px !important;}.no-box-shadow{box-shadow:none !important;}.no-border{border:0 !important;}.b-0{border:0 !important;}.b-t-0{border-top:0 !important;}.b-r-0{border-right:0 !important;}.b-b-0{border-bottom:0 !important;}.b-l-0{border-left:0 !important;}.b-1{border:1px solid #f2f3f4 !important;}.b-t-1{border-top:1px solid #f2f3f4 !important;}.b-r-1{border-right:1px solid #f2f3f4 !important;}.b-b-1{border-bottom:1px solid #f2f3f4 !important;}.b-l-1{border-left:1px solid #f2f3f4 !important;}.border-top-1{border-top:1px solid #f2f3f4 !important;}.border-right-1{border-right:1px solid #f2f3f4 !important;}.border-bottom-1{border-bottom:1px solid #f2f3f4 !important;}.border-left-1{border-left:1px solid #f2f3f4 !important;}.text-inverse,.text-black{color:#2d353c !important;}.text-black-transparent-9{color:rgba(45,53,60,0.9) !important;}.text-black-transparent-8{color:rgba(45,53,60,0.8) !important;}.text-black-transparent-7{color:rgba(45,53,60,0.7) !important;}.text-black-transparent-6{color:rgba(45,53,60,0.6) !important;}.text-black-transparent-5{color:rgba(45,53,60,0.5) !important;}.text-black-transparent-4{color:rgba(45,53,60,0.4) !important;}.text-black-transparent-3{color:rgba(45,53,60,0.3) !important;}.text-black-transparent-2{color:rgba(45,53,60,0.2) !important;}.text-black-transparent-1{color:rgba(45,53,60,0.1) !important;}.text-black-darker{color:#242a30 !important;}.text-black-lighter{color:#575d63 !important;}a.text-inverse:hover,a.text-inverse:focus{color:#575d63 !important;}.text-success,.text-green{color:#00acac !important;}.text-green-transparent-9{color:rgba(0,172,172,0.9) !important;}.text-green-transparent-8{color:rgba(0,172,172,0.8) !important;}.text-green-transparent-7{color:rgba(0,172,172,0.7) !important;}.text-green-transparent-6{color:rgba(0,172,172,0.6) !important;}.text-green-transparent-5{color:rgba(0,172,172,0.5) !important;}.text-green-transparent-4{color:rgba(0,172,172,0.4) !important;}.text-green-transparent-3{color:rgba(0,172,172,0.3) !important;}.text-green-transparent-2{color:rgba(0,172,172,0.2) !important;}.text-green-transparent-1{color:rgba(0,172,172,0.1) !important;}.text-green-darker{color:#008a8a !important;}.text-green-lighter{color:#33bdbd !important;}a.text-success:hover,a.text-success:focus{color:#33bdbd !important;}.text-info,.text-aqua{color:#49b6d6 !important;}.text-aqua-transparent-9{color:rgba(73,182,214,0.9) !important;}.text-aqua-transparent-8{color:rgba(73,182,214,0.8) !important;}.text-aqua-transparent-7{color:rgba(73,182,214,0.7) !important;}.text-aqua-transparent-6{color:rgba(73,182,214,0.6) !important;}.text-aqua-transparent-5{color:rgba(73,182,214,0.5) !important;}.text-aqua-transparent-4{color:rgba(73,182,214,0.4) !important;}.text-aqua-transparent-3{color:rgba(73,182,214,0.3) !important;}.text-aqua-transparent-2{color:rgba(73,182,214,0.2) !important;}.text-aqua-transparent-1{color:rgba(73,182,214,0.1) !important;}.text-aqua-darker{color:#3a92ab !important;}.text-aqua-lighter{color:#6dc5de !important;}a.text-info:hover,a.text-info:focus{color:#6dc5de !important;}.text-primary,.text-blue{color:#348fe2 !important;}.text-blue-transparent-9{color:rgba(52,143,226,0.9) !important;}.text-blue-transparent-8{color:rgba(52,143,226,0.8) !important;}.text-blue-transparent-7{color:rgba(52,143,226,0.7) !important;}.text-blue-transparent-6{color:rgba(52,143,226,0.6) !important;}.text-blue-transparent-5{color:rgba(52,143,226,0.5) !important;}.text-blue-transparent-4{color:rgba(52,143,226,0.4) !important;}.text-blue-transparent-3{color:rgba(52,143,226,0.3) !important;}.text-blue-transparent-2{color:rgba(52,143,226,0.2) !important;}.text-blue-transparent-1{color:rgba(52,143,226,0.1) !important;}.text-blue-darker{color:#2a72b5 !important;}.text-blue-lighter{color:#5da5e8 !important;}a.text-primary:hover,a.text-primary:focus{color:#5da5e8 !important;}.text-warning,.text-orange{color:#f59c1a !important;}.text-orange-transparent-9{color:rgba(245,156,26,0.9) !important;}.text-orange-transparent-8{color:rgba(245,156,26,0.8) !important;}.text-orange-transparent-7{color:rgba(245,156,26,0.7) !important;}.text-orange-transparent-6{color:rgba(245,156,26,0.6) !important;}.text-orange-transparent-5{color:rgba(245,156,26,0.5) !important;}.text-orange-transparent-4{color:rgba(245,156,26,0.4) !important;}.text-orange-transparent-3{color:rgba(245,156,26,0.3) !important;}.text-orange-transparent-2{color:rgba(245,156,26,0.2) !important;}.text-orange-transparent-1{color:rgba(245,156,26,0.1) !important;}.text-orange-darker{color:#c47d15 !important;}.text-orange-lighter{color:#f7b048 !important;}a.text-warning:hover,a.text-warning:focus{color:#f7b048 !important;}.text-danger,.text-red{color:#ff5b57 !important;}.text-red-transparent-9{color:rgba(255,91,87,0.9) !important;}.text-red-transparent-8{color:rgba(255,91,87,0.8) !important;}.text-red-transparent-7{color:rgba(255,91,87,0.7) !important;}.text-red-transparent-6{color:rgba(255,91,87,0.6) !important;}.text-red-transparent-5{color:rgba(255,91,87,0.5) !important;}.text-red-transparent-4{color:rgba(255,91,87,0.4) !important;}.text-red-transparent-3{color:rgba(255,91,87,0.3) !important;}.text-red-transparent-2{color:rgba(255,91,87,0.2) !important;}.text-red-transparent-1{color:rgba(255,91,87,0.1) !important;}.text-red-darker{color:#cc4946 !important;}.text-red-lighter{color:#ff7c79 !important;}a.text-danger:hover,a.text-danger:focus{color:#ff7c79 !important;}.text-white{color:#fff !important;}.text-white-transparent-9{color:rgba(255,255,255,0.9) !important;}.text-white-transparent-8{color:rgba(255,255,255,0.8) !important;}.text-white-transparent-7{color:rgba(255,255,255,0.7) !important;}.text-white-transparent-6{color:rgba(255,255,255,0.6) !important;}.text-white-transparent-5{color:rgba(255,255,255,0.5) !important;}.text-white-transparent-4{color:rgba(255,255,255,0.4) !important;}.text-white-transparent-3{color:rgba(255,255,255,0.3) !important;}.text-white-transparent-2{color:rgba(255,255,255,0.2) !important;}.text-white-transparent-1{color:rgba(255,255,255,0.1) !important;}a.text-white:hover,a.text-white:focus{color:#f0f3f4 !important;}.text-silver{color:#f0f3f4 !important;}.text-silver-transparent-9{color:rgba(240,243,244,0.9) !important;}.text-silver-transparent-8{color:rgba(240,243,244,0.8) !important;}.text-silver-transparent-7{color:rgba(240,243,244,0.7) !important;}.text-silver-transparent-6{color:rgba(240,243,244,0.6) !important;}.text-silver-transparent-5{color:rgba(240,243,244,0.5) !important;}.text-silver-transparent-4{color:rgba(240,243,244,0.4) !important;}.text-silver-transparent-3{color:rgba(240,243,244,0.3) !important;}.text-silver-transparent-2{color:rgba(240,243,244,0.2) !important;}.text-silver-transparent-1{color:rgba(240,243,244,0.1) !important;}.text-silver-lighter{color:#f4f6f7 !important;}.text-silver-darker{color:#b4b6b7 !important;}a.text-silver:hover,a.text-silver:focus{color:#b4b6b7 !important;}.text-grey,.text-muted{color:#b6c2c9 !important;}.text-grey-transparent-9{color:rgba(182,194,201,0.9) !important;}.text-grey-transparent-8{color:rgba(182,194,201,0.8) !important;}.text-grey-transparent-7{color:rgba(182,194,201,0.7) !important;}.text-grey-transparent-6{color:rgba(182,194,201,0.6) !important;}.text-grey-transparent-5{color:rgba(182,194,201,0.5) !important;}.text-grey-transparent-4{color:rgba(182,194,201,0.4) !important;}.text-grey-transparent-3{color:rgba(182,194,201,0.3) !important;}.text-grey-transparent-2{color:rgba(182,194,201,0.2) !important;}.text-grey-transparent-1{color:rgba(182,194,201,0.1) !important;}.text-grey-darker{color:#929ba1 !important;}.text-grey-lighter{color:#c5ced4 !important;}a.text-grey:hover,a.text-grey:focus{color:#c5ced4 !important;}.text-yellow{color:#ffd900 !important;}.text-yellow-transparent-9{color:rgba(255,217,0,0.9) !important;}.text-yellow-transparent-8{color:rgba(255,217,0,0.8) !important;}.text-yellow-transparent-7{color:rgba(255,217,0,0.7) !important;}.text-yellow-transparent-6{color:rgba(255,217,0,0.6) !important;}.text-yellow-transparent-5{color:rgba(255,217,0,0.5) !important;}.text-yellow-transparent-4{color:rgba(255,217,0,0.4) !important;}.text-yellow-transparent-3{color:rgba(255,217,0,0.3) !important;}.text-yellow-transparent-2{color:rgba(255,217,0,0.2) !important;}.text-yellow-transparent-1{color:rgba(255,217,0,0.1) !important;}.text-yellow-darker{color:#bfa300 !important;}.text-yellow-lighter{color:#fde248 !important;}a.text-yellow:hover,a.text-yellow:focus{color:#e9fb65 !important;}.text-purple{color:#727cb6 !important;}.text-purple-transparent-9{color:rgba(114,124,182,0.9) !important;}.text-purple-transparent-8{color:rgba(114,124,182,0.8) !important;}.text-purple-transparent-7{color:rgba(114,124,182,0.7) !important;}.text-purple-transparent-6{color:rgba(114,124,182,0.6) !important;}.text-purple-transparent-5{color:rgba(114,124,182,0.5) !important;}.text-purple-transparent-4{color:rgba(114,124,182,0.4) !important;}.text-purple-transparent-3{color:rgba(114,124,182,0.3) !important;}.text-purple-transparent-2{color:rgba(114,124,182,0.2) !important;}.text-purple-transparent-1{color:rgba(114,124,182,0.1) !important;}.text-purple-darker{color:#5b6392 !important;}.text-purple-lighter{color:#8e96c5 !important;}a.text-purple:hover,a.text-purple:focus{color:#8e96c5 !important;}.text-lime{color:#90ca4b !important;}.text-lime-transparent-9{color:rgba(144,202,75,0.9) !important;}.text-lime-transparent-8{color:rgba(144,202,75,0.8) !important;}.text-lime-transparent-7{color:rgba(144,202,75,0.7) !important;}.text-lime-transparent-6{color:rgba(144,202,75,0.6) !important;}.text-lime-transparent-5{color:rgba(144,202,75,0.5) !important;}.text-lime-transparent-4{color:rgba(144,202,75,0.4) !important;}.text-lime-transparent-3{color:rgba(144,202,75,0.3) !important;}.text-lime-transparent-2{color:rgba(144,202,75,0.2) !important;}.text-lime-transparent-1{color:rgba(144,202,75,0.1) !important;}.text-lime-darker{color:#6c9738 !important;}.text-lime-lighter{color:#acd778 !important;}a.text-lime:hover,a.text-lime:focus{color:#6c9738 !important;}.bg-primary,.bg-blue{background-color:#348fe2 !important;}.bg-blue-transparent-9{background-color:rgba(52,143,226,0.9) !important;}.bg-blue-transparent-8{background-color:rgba(52,143,226,0.8) !important;}.bg-blue-transparent-7{background-color:rgba(52,143,226,0.7) !important;}.bg-blue-transparent-6{background-color:rgba(52,143,226,0.6) !important;}.bg-blue-transparent-5{background-color:rgba(52,143,226,0.5) !important;}.bg-blue-transparent-4{background-color:rgba(52,143,226,0.4) !important;}.bg-blue-transparent-3{background-color:rgba(52,143,226,0.3) !important;}.bg-blue-transparent-2{background-color:rgba(52,143,226,0.2) !important;}.bg-blue-transparent-1{background-color:rgba(52,143,226,0.1) !important;}.bg-blue-darker{background-color:#2a72b5 !important;}.bg-blue-lighter{background-color:#5da5e8 !important;}.bg-gradient-blue{background:rgb(81,136,218);background:-moz-linear-gradient(-45deg,rgba(81,136,218,1) 0%,rgba(52,135,226,1) 100%) !important;background:-webkit-linear-gradient(-45deg,rgba(81,136,218,1) 0%,rgba(52,135,226,1) 100%) !important;background:linear-gradient(135deg,rgba(81,136,218,1) 0%,rgba(52,135,226,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#5188da',endColorstr='#3487e2',GradientType=1 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#5188da',endColorstr='#3487e2',GradientType=1 ) !important;}.bg-info,.bg-aqua{background-color:#49b6d6 !important;}.bg-aqua-transparent-9{background-color:rgba(73,182,214,0.9) !important;}.bg-aqua-transparent-8{background-color:rgba(73,182,214,0.8) !important;}.bg-aqua-transparent-7{background-color:rgba(73,182,214,0.7) !important;}.bg-aqua-transparent-6{background-color:rgba(73,182,214,0.6) !important;}.bg-aqua-transparent-5{background-color:rgba(73,182,214,0.5) !important;}.bg-aqua-transparent-4{background-color:rgba(73,182,214,0.4) !important;}.bg-aqua-transparent-3{background-color:rgba(73,182,214,0.3) !important;}.bg-aqua-transparent-2{background-color:rgba(73,182,214,0.2) !important;}.bg-aqua-transparent-1{background-color:rgba(73,182,214,0.1) !important;}.bg-aqua-darker{background-color:#3a92ab !important;}.bg-aqua-lighter{background-color:#6dc5de !important;}.bg-gradient-aqua{background:rgb(109,197,222) !important;background:-moz-linear-gradient(top,rgba(109,197,222,1) 0%,rgba(73,182,214,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(109,197,222,1) 0%,rgba(73,182,214,1) 100%) !important;background:linear-gradient(to bottom,rgba(109,197,222,1) 0%,rgba(73,182,214,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#6dc5de',endColorstr='#49b6d6',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#6dc5de',endColorstr='#49b6d6',GradientType=0 ) !important;}.bg-success,.bg-green{background-color:#00acac !important;}.bg-green-transparent-9{background-color:rgba(0,172,172,0.9) !important;}.bg-green-transparent-8{background-color:rgba(0,172,172,0.8) !important;}.bg-green-transparent-7{background-color:rgba(0,172,172,0.7) !important;}.bg-green-transparent-6{background-color:rgba(0,172,172,0.6) !important;}.bg-green-transparent-5{background-color:rgba(0,172,172,0.5) !important;}.bg-green-transparent-4{background-color:rgba(0,172,172,0.4) !important;}.bg-green-transparent-3{background-color:rgba(0,172,172,0.3) !important;}.bg-green-transparent-2{background-color:rgba(0,172,172,0.2) !important;}.bg-green-transparent-1{background-color:rgba(0,172,172,0.1) !important;}.bg-green-darker{background-color:#008a8a !important;}.bg-green-lighter{background-color:#33bdbd !important;}.bg-gradient-green{background:rgb(52,186,187) !important;background:-moz-linear-gradient(-45deg,rgba(52,186,187,1) 0%,rgba(0,172,172,1) 100%) !important;background:-webkit-linear-gradient(-45deg,rgba(52,186,187,1) 0%,rgba(0,172,172,1) 100%) !important;background:linear-gradient(135deg,rgba(52,186,187,1) 0%,rgba(0,172,172,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#34babb',endColorstr='#00acac',GradientType=1 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#34babb',endColorstr='#00acac',GradientType=1 ) !important;}.bg-danger,.bg-red{background-color:#ff5b57 !important;}.bg-red-transparent-9{background-color:rgba(255,91,87,0.9) !important;}.bg-red-transparent-8{background-color:rgba(255,91,87,0.8) !important;}.bg-red-transparent-7{background-color:rgba(255,91,87,0.7) !important;}.bg-red-transparent-6{background-color:rgba(255,91,87,0.6) !important;}.bg-red-transparent-5{background-color:rgba(255,91,87,0.5) !important;}.bg-red-transparent-4{background-color:rgba(255,91,87,0.4) !important;}.bg-red-transparent-3{background-color:rgba(255,91,87,0.3) !important;}.bg-red-transparent-2{background-color:rgba(255,91,87,0.2) !important;}.bg-red-transparent-1{background-color:rgba(255,91,87,0.1) !important;}.bg-red-darker{background-color:#cc4946 !important;}.bg-red-lighter{background-color:#ff7c79 !important;}.bg-gradient-red{background:rgb(255,124,121) !important;background:-moz-linear-gradient(top,rgba(255,124,121,1) 0%,rgba(255,91,87,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(255,124,121,1) 0%,rgba(255,91,87,1) 100%) !important;background:linear-gradient(to bottom,rgba(255,124,121,1) 0%,rgba(255,91,87,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7c79',endColorstr='#ff5b57',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7c79',endColorstr='#ff5b57',GradientType=0 ) !important;}.bg-warning,.bg-orange{background-color:#f59c1a !important;}.bg-orange-transparent-9{background-color:rgba(245,156,26,0.9) !important;}.bg-orange-transparent-8{background-color:rgba(245,156,26,0.8) !important;}.bg-orange-transparent-7{background-color:rgba(245,156,26,0.7) !important;}.bg-orange-transparent-6{background-color:rgba(245,156,26,0.6) !important;}.bg-orange-transparent-5{background-color:rgba(245,156,26,0.5) !important;}.bg-orange-transparent-4{background-color:rgba(245,156,26,0.4) !important;}.bg-orange-transparent-3{background-color:rgba(245,156,26,0.3) !important;}.bg-orange-transparent-2{background-color:rgba(245,156,26,0.2) !important;}.bg-orange-transparent-1{background-color:rgba(245,156,26,0.1) !important;}.bg-orange-darker{background-color:#c47d15 !important;}.bg-orange-lighter{background-color:#f7b048 !important;}.bg-gradient-orange{background:rgb(247,176,72) !important;background:-moz-linear-gradient(top,rgba(247,176,72,1) 0%,rgba(245,156,26,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(247,176,72,1) 0%,rgba(245,156,26,1) 100%) !important;background:linear-gradient(to bottom,rgba(247,176,72,1) 0%,rgba(245,156,26,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7b048',endColorstr='#f59c1a',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7b048',endColorstr='#f59c1a',GradientType=0 ) !important;}.bg-inverse,.bg-black{background-color:#2d353c !important;}.bg-black-transparent-9{background-color:rgba(45,53,60,0.9) !important;}.bg-black-transparent-8{background-color:rgba(45,53,60,0.8) !important;}.bg-black-transparent-7{background-color:rgba(45,53,60,0.7) !important;}.bg-black-transparent-6{background-color:rgba(45,53,60,0.6) !important;}.bg-black-transparent-5{background-color:rgba(45,53,60,0.5) !important;}.bg-black-transparent-4{background-color:rgba(45,53,60,0.4) !important;}.bg-black-transparent-3{background-color:rgba(45,53,60,0.3) !important;}.bg-black-transparent-2{background-color:rgba(45,53,60,0.2) !important;}.bg-black-transparent-1{background-color:rgba(45,53,60,0.1) !important;}.bg-black-darker{background-color:#242a30 !important;}.bg-black-lighter{background-color:#575d63 !important;}.bg-gradient-black{background:rgb(88,97,105) !important;background:-moz-linear-gradient(-45deg,rgba(88,97,105,1) 0%,rgba(45,53,60,1) 100%) !important;background:-webkit-linear-gradient(-45deg,rgba(88,97,105,1) 0%,rgba(45,53,60,1) 100%) !important;background:linear-gradient(135deg,rgba(88,97,105,1) 0%,rgba(45,53,60,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#586169',endColorstr='#2d353c',GradientType=1 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#586169',endColorstr='#2d353c',GradientType=1 ) !important;}.bg-yellow{background-color:#ffd900 !important;}.bg-yellow-transparent-9{background-color:rgba(255,217,0,0.9) !important;}.bg-yellow-transparent-8{background-color:rgba(255,217,0,0.8) !important;}.bg-yellow-transparent-7{background-color:rgba(255,217,0,0.7) !important;}.bg-yellow-transparent-6{background-color:rgba(255,217,0,0.6) !important;}.bg-yellow-transparent-5{background-color:rgba(255,217,0,0.5) !important;}.bg-yellow-transparent-4{background-color:rgba(255,217,0,0.4) !important;}.bg-yellow-transparent-3{background-color:rgba(255,217,0,0.3) !important;}.bg-yellow-transparent-2{background-color:rgba(255,217,0,0.2) !important;}.bg-yellow-transparent-1{background-color:rgba(255,217,0,0.1) !important;}.bg-yellow-darker{background-color:#bfa300 !important;}.bg-yellow-lighter{background-color:#fde248 !important;}.bg-gradient-yellow{background:rgb(253,226,72) !important;background:-moz-linear-gradient(top,rgba(253,226,72,1) 0%,rgba(255,217,0,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(253,226,72,1) 0%,rgba(255,217,0,1) 100%) !important;background:linear-gradient(to bottom,rgba(253,226,72,1) 0%,rgba(255,217,0,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fde248',endColorstr='#ffd900',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fde248',endColorstr='#ffd900',GradientType=0 ) !important;}.bg-silver{background-color:#f0f3f4 !important;}.bg-silver-transparent-9{background-color:rgba(240,243,244,0.9) !important;}.bg-silver-transparent-8{background-color:rgba(240,243,244,0.8) !important;}.bg-silver-transparent-7{background-color:rgba(240,243,244,0.7) !important;}.bg-silver-transparent-6{background-color:rgba(240,243,244,0.6) !important;}.bg-silver-transparent-5{background-color:rgba(240,243,244,0.5) !important;}.bg-silver-transparent-4{background-color:rgba(240,243,244,0.4) !important;}.bg-silver-transparent-3{background-color:rgba(240,243,244,0.3) !important;}.bg-silver-transparent-2{background-color:rgba(240,243,244,0.2) !important;}.bg-silver-transparent-1{background-color:rgba(240,243,244,0.1) !important;}.bg-silver-lighter{background-color:#f4f6f7 !important;}.bg-silver-darker{background-color:#b4b6b7 !important;}.bg-gradient-silver{background:rgb(244,246,247) !important;background:-moz-linear-gradient(top,rgba(244,246,247,1) 0%,rgba(240,243,244,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(244,246,247,1) 0%,rgba(240,243,244,1) 100%) !important;background:linear-gradient(to bottom,rgba(244,246,247,1) 0%,rgba(240,243,244,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4f6f7',endColorstr='#f0f3f4',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#f4f6f7',endColorstr='#f0f3f4',GradientType=0 ) !important;}.bg-grey{background-color:#b6c2c9 !important;}.bg-grey-transparent-9{background-color:rgba(182,194,201,0.9) !important;}.bg-grey-transparent-8{background-color:rgba(182,194,201,0.8) !important;}.bg-grey-transparent-7{background-color:rgba(182,194,201,0.7) !important;}.bg-grey-transparent-6{background-color:rgba(182,194,201,0.6) !important;}.bg-grey-transparent-5{background-color:rgba(182,194,201,0.5) !important;}.bg-grey-transparent-4{background-color:rgba(182,194,201,0.4) !important;}.bg-grey-transparent-3{background-color:rgba(182,194,201,0.3) !important;}.bg-grey-transparent-2{background-color:rgba(182,194,201,0.2) !important;}.bg-grey-transparent-1{background-color:rgba(182,194,201,0.1) !important;}.bg-grey-darker{background-color:#929ba1 !important;}.bg-grey-lighter{background-color:#c5ced4 !important;}.bg-gradient-grey{background:rgb(197,206,212) !important;background:-moz-linear-gradient(top,rgba(197,206,212,1) 0%,rgba(182,194,201,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(197,206,212,1) 0%,rgba(182,194,201,1) 100%) !important;background:linear-gradient(to bottom,rgba(197,206,212,1) 0%,rgba(182,194,201,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#c5ced4',endColorstr='#b6c2c9',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#c5ced4',endColorstr='#b6c2c9',GradientType=0 ) !important;}.bg-purple{background-color:#727cb6 !important;}.bg-purple-transparent-9{background-color:rgba(114,124,182,0.9) !important;}.bg-purple-transparent-8{background-color:rgba(114,124,182,0.8) !important;}.bg-purple-transparent-7{background-color:rgba(114,124,182,0.7) !important;}.bg-purple-transparent-6{background-color:rgba(114,124,182,0.6) !important;}.bg-purple-transparent-5{background-color:rgba(114,124,182,0.5) !important;}.bg-purple-transparent-4{background-color:rgba(114,124,182,0.4) !important;}.bg-purple-transparent-3{background-color:rgba(114,124,182,0.3) !important;}.bg-purple-transparent-2{background-color:rgba(114,124,182,0.2) !important;}.bg-purple-transparent-1{background-color:rgba(114,124,182,0.1) !important;}.bg-purple-darker{background-color:#5b6392 !important;}.bg-purple-lighter{background-color:#8e96c5 !important;}.bg-gradient-purple{background:rgb(132,87,243) !important;background:-moz-linear-gradient(-45deg,rgba(132,87,243,1) 0%,rgba(114,124,182,1) 100%) !important;background:-webkit-linear-gradient(-45deg,rgba(132,87,243,1) 0%,rgba(114,124,182,1) 100%) !important;background:linear-gradient(135deg,rgba(132,87,243,1) 0%,rgba(114,124,182,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#8457f3',endColorstr='#727cb6',GradientType=1 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#8457f3',endColorstr='#727cb6',GradientType=1 ) !important;}.bg-lime{background-color:#90ca4b !important;}.bg-lime-transparent-9{background-color:rgba(144,202,75,0.9) !important;}.bg-lime-transparent-8{background-color:rgba(144,202,75,0.8) !important;}.bg-lime-transparent-7{background-color:rgba(144,202,75,0.7) !important;}.bg-lime-transparent-6{background-color:rgba(144,202,75,0.6) !important;}.bg-lime-transparent-5{background-color:rgba(144,202,75,0.5) !important;}.bg-lime-transparent-4{background-color:rgba(144,202,75,0.4) !important;}.bg-lime-transparent-3{background-color:rgba(144,202,75,0.3) !important;}.bg-lime-transparent-2{background-color:rgba(144,202,75,0.2) !important;}.bg-lime-transparent-1{background-color:rgba(144,202,75,0.1) !important;}.bg-lime-darker{background-color:#6c9738 !important;}.bg-lime-lighter{background-color:#acd778 !important;}.bg-gradient-lime{background:rgb(172,215,120) !important;background:-moz-linear-gradient(top,rgba(172,215,120,1) 0%,rgba(144,202,75,1) 100%) !important;background:-webkit-linear-gradient(top,rgba(172,215,120,1) 0%,rgba(144,202,75,1) 100%) !important;background:linear-gradient(to bottom,rgba(172,215,120,1) 0%,rgba(144,202,75,1) 100%) !important;-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#acd778',endColorstr='#90ca4b',GradientType=0 ) !important;filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#acd778',endColorstr='#90ca4b',GradientType=0 ) !important;}.bg-white{background-color:#ffffff !important;}.bg-white-transparent-9{background-color:rgba(255,255,255,0.9) !important;}.bg-white-transparent-8{background-color:rgba(255,255,255,0.8) !important;}.bg-white-transparent-7{background-color:rgba(255,255,255,0.7) !important;}.bg-white-transparent-6{background-color:rgba(255,255,255,0.6) !important;}.bg-white-transparent-5{background-color:rgba(255,255,255,0.5) !important;}.bg-white-transparent-4{background-color:rgba(255,255,255,0.4) !important;}.bg-white-transparent-3{background-color:rgba(255,255,255,0.3) !important;}.bg-white-transparent-2{background-color:rgba(255,255,255,0.2) !important;}.bg-white-transparent-1{background-color:rgba(255,255,255,0.1) !important;}.text-gradient{-webkit-background-clip:text !important;-webkit-text-fill-color:transparent !important;}.no-bg,.bg-none{background:none !important;}.height-xs{height:150px !important;}.height-sm{height:300px !important;}.height-md{height:450px !important;}.height-lg{height:600px !important;}.height-full{height:100% !important;}.height-0{height:0px !important;}.height-10{height:10px !important;}.height-20{height:20px !important;}.height-30{height:30px !important;}.height-40{height:40px !important;}.height-50{height:50px !important;}.height-60{height:60px !important;}.height-70{height:70px !important;}.height-80{height:80px !important;}.height-90{height:90px !important;}.height-100{height:100px !important;}.height-150{height:150px !important;}.height-200{height:200px !important;}.height-250{height:250px !important;}.height-300{height:300px !important;}.height-350{height:350px !important;}.height-400{height:400px !important;}.height-450{height:450px !important;}.height-500{height:500px !important;}.height-550{height:550px !important;}.height-600{height:600px !important;}.width-xs{width:150px !important;}.width-sm{width:300px !important;}.width-md{width:450px !important;}.width-lg{width:600px !important;}.width-full{width:100% !important;}.width-0{width:0px !important;}.width-10{width:10px !important;}.width-20{width:20px !important;}.width-30{width:30px !important;}.width-40{width:40px !important;}.width-50{width:50px !important;}.width-60{width:60px !important;}.width-70{width:70px !important;}.width-80{width:80px !important;}.width-90{width:90px !important;}.width-100{width:100px !important;}.width-150{width:150px !important;}.width-200{width:200px !important;}.width-250{width:250px !important;}.width-300{width:300px !important;}.width-350{width:350px !important;}.width-400{width:400px !important;}.width-450{width:450px !important;}.width-500{width:500px !important;}.width-550{width:550px !important;}.width-600{width:600px !important;}.pointer-cursor{cursor:pointer !important;}.cursor-pointer{cursor:pointer !important;}.cursor-initial{cursor:initial !important;}.cursor-move{cursor:move !important;}.animated{-webkit-animation-duration:.6s;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}.fade{opacity:0;-webkit-transition:opacity .3s linear;transition:opacity .3s linear;}.text-ellipsis{white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;}.text-nowrap{white-space:nowrap !important;}.underline{border-bottom:1px solid #e2e7eb !important;}@media (min-width:768px){.header .navbar-toggle{display:none;}.header.navbar>.container .navbar-brand,.header.navbar>.container-fluid .navbar-brand{margin-left:-15px;}.header .navbar-nav{float:left;margin:0;}.header .navbar-header,.header .navbar-nav>li{float:left;}.header .navbar-right{float:right!important;}.header .container-fluid .navbar-right,.header .container .navbar-right{margin-right:-15px;}.header .navbar-toggle{display:none;}.header .navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important;}}@media (max-width:767px){.header .navbar-user .name{display:none;}.navbar-brand{width:auto;}.navbar-header{border-bottom:1px solid #eee;}.navbar-inverse .navbar-header{border-bottom:1px solid #2d353c;}.header .navbar-nav{margin-right:0;padding:0 15px;}.header .container-fluid .navbar-nav,.header .container .navbar-nav{margin:0 -10px;}.navbar-right{float:right;}.navbar-left{float:left;}.navbar-nav>li{float:left;}.header .navbar-form{margin:0 !important;padding:9px 10px;border:none;box-shadow:none;}.header .navbar.navbar-inverse .navbar-form{margin:0;padding:10px;}.header .navbar-form .btn-search{right:10px;}.header .navbar-form .form-group{margin:0;}.header .navbar-form .form-control,.header .navbar-form .form-control:focus{margin:0;width:200px !important;-webkit-animation:none !important;-webkit-animation:none !important;animation:none !important;}.header .navbar-nav .open .dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;float:left;min-width:160px;border-top:1px solid #eee;list-style:none;background:#fff;box-shadow:0 2px 5px -1px rgba(0,0,0,0.2);}.navbar-nav.navbar-right .open .dropdown-menu{right:0;left:auto;}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#eee;}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#262626;}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{background:#edf0f5;color:#262626;}.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px;}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{background:#edf0f5;}.navbar-inverse .navbar-header.navbar-header-without-bg{background:none;border-bottom:1px solid #666;border-bottom:1px solid rgba(255,255,255,0.1);}.header .navbar-collapse .navbar-nav{margin:0;}.header .navbar-collapse .navbar-nav>li>a{padding:15px 20px;}.header .navbar-collapse .dropdown-menu>li>a{padding:5px 20px;}.header .navbar-collapse{max-height:340px;}.header .navbar-collapse .show .dropdown-menu{position:relative !important;box-shadow:none !important;width:auto !important;top:0 !important;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important;}.header .navbar-collapse.in,.header .navbar-collapse.show{overflow-y:auto !important;}}@media (max-width:380px){.header .navbar-form .form-control,.header .navbar-form .form-control:focus{width:160px !important;}}@media (max-width:340px){.header .navbar-nav>li>a{padding:15px 12px;}.header .navbar-user img{margin-right:3px;}.header .navbar-user>a .caret{margin-right:-5px;}.header .navbar-nav>li>a .label{right:2px;}.navbar-form .form-control,.navbar-form .form-control:focus{width:140px !important;}}@media (max-width:767px){.navbar-collapse{float:none !important;border-top:none;border-bottom:1px solid #eee;}.navbar-collapse .nav>li{float:none;}.navbar-collapse .open:before,.navbar-collapse .open:after{content:'';display:table;clear:both;}.navbar-collapse .open .dropdown-menu{position:relative;box-shadow:none;padding-top:0;border-bottom:1px solid #eee;border-radius:0;background:#f4f6f7;width:100%;}.navbar-collapse .open .dropdown-menu .dropdown-header{padding-top:20px;padding-left:0;}}@media (max-width:767px){.sidebar{position:absolute;left:-220px;padding-top:0;z-index:1030;}.sidebar-bg{left:-220px;z-index:1020;}@-webkit-keyframes sidebarSlideInLeft{from{left:-220px;}to{left:0;}}@keyframes sidebarSlideInLeft{from{left:-220px;}to{left:0;}}@-webkit-keyframes sidebarSlideInLeft{from{left:-220px;}to{left:0;}}@-webkit-keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}@keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}@-webkit-keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}.page-sidebar-toggled .sidebar{left:0;-webkit-animation:sidebarSlideInLeft .2s;animation:sidebarSlideInLeft .2s;-webkit-animation:sidebarSlideInLeft .2s;}.page-sidebar-toggled .sidebar-bg{position:fixed;background:#2d353c;left:0;-webkit-animation:sidebarSlideInLeft .2s;animation:sidebarSlideInLeft .2s;-webkit-animation:sidebarSlideInLeft .2s;}.page-sidebar-toggled.page-with-right-sidebar .sidebar,.page-sidebar-toggled.page-with-right-sidebar .sidebar-bg{left:auto;right:0;-webkit-animation:sidebarSlideInRight .2s;animation:sidebarSlideInRight .2s;-webkit-animation:sidebarSlideInRight .2s;}.page-sidebar-minified.page-sidebar-minified .sidebar{position:fixed !important;}.page-sidebar-toggled.page-sidebar-minified .sidebar-bg{position:fixed;background:#2d353c;z-index:1010;left:0;-webkit-animation:sidebarSlideInLeft .2s;animation:sidebarSlideInLeft .2s;-webkit-animation:sidebarSlideInLeft .2s;}.page-with-right-sidebar.page-sidebar-toggled.page-sidebar-minified .sidebar-bg{left:auto;right:0;-webkit-animation:sidebarSlideInRight .2s;animation:sidebarSlideInRight .2s;-webkit-animation:sidebarSlideInRight .2s;}.page-sidebar-minified.page-with-right-sidebar .content{margin-right:0;}.page-sidebar-minified.page-with-right-sidebar .footer{margin-right:20px;}}@media (max-width:767px){.float-sub-menu-container{z-index:1060;}}@media (max-width:767px){@-webkit-keyframes wideSidebarSlideInLeft{from{left:-250px;}to{left:0;}}@keyframes wideSidebarSlideInLeft{from{left:-250px;}to{left:0;}}@-webkit-keyframes wideSidebarSlideInLeft{from{left:-250px;}to{left:0;}}@-webkit-keyframes wideSidebarSlideInRight{from{right:-250px;}to{right:0;}}@keyframes wideSidebarSlideInRight{from{right:-250px;}to{right:0;}}@-webkit-keyframes wideSidebarSlideInRight{from{right:-250px;}to{right:0;}}.page-sidebar-toggled.page-with-wide-sidebar .sidebar,.boxed-layout .page-sidebar-toggled.page-with-wide-sidebar.page-container #sidebar{left:0;-webkit-animation:wideSidebarSlideInLeft .2s;animation:wideSidebarSlideInLeft .2s;-webkit-animation:wideSidebarSlideInLeft .2s;}.page-sidebar-toggled.page-with-wide-sidebar .sidebar-bg,.boxed-layout .page-sidebar-toggled.page-with-wide-sidebar.page-container .sidebar-bg{left:0;-webkit-animation:wideSidebarSlideInLeft .2s;animation:wideSidebarSlideInLeft .2s;-webkit-animation:wideSidebarSlideInLeft .2s;}.page-sidebar-toggled.page-with-right-sidebar.page-with-wide-sidebar .sidebar,.page-sidebar-toggled.page-with-right-sidebar.page-with-wide-sidebar .sidebar-bg,.page-right-sidebar-toggled.page-with-wide-sidebar.page-with-two-sidebar .sidebar.sidebar-right,.page-right-sidebar-toggled.page-with-wide-sidebar.page-with-two-sidebar .sidebar-bg.sidebar-right{left:auto;right:0;-webkit-animation:wideSidebarSlideInRight .2s;animation:wideSidebarSlideInRight .2s;-webkit-animation:wideSidebarSlideInRight .2s;}.page-with-wide-sidebar .sidebar,.page-with-wide-sidebar .sidebar-bg,.boxed-layout .page-with-wide-sidebar:not(.page-sidebar-minified) #sidebar,.boxed-layout .page-with-wide-sidebar:not(.page-sidebar-minified) .sidebar-bg{left:-250px;width:250px;}.page-with-wide-sidebar.page-with-right-sidebar .sidebar,.page-with-wide-sidebar.page-with-right-sidebar .sidebar-bg,.page-with-wide-sidebar.page-with-two-sidebar .sidebar.sidebar-right,.page-with-wide-sidebar.page-with-two-sidebar .sidebar-bg.sidebar-right{left:auto;right:-250px;}.page-with-wide-sidebar.page-with-right-sidebar .content{margin-right:0;}}@media (max-width:767px){.page-with-top-menu .sidebar{padding-top:0;}.top-menu{position:relative;top:0;height:auto;display:none;}.top-menu .container,.top-menu .container-fluid{padding:0;}.top-menu .nav>li{display:block;}.top-menu .nav>li+li{margin-left:0;}.top-menu .nav{margin:0 !important;}.top-menu .nav>li>a .caret{float:right;margin-top:0px;}.top-menu .nav .sub-menu{position:relative;top:0;width:100%;}.top-menu .sub-menu>li>a{padding-left:44px;}.top-menu .nav li.has-sub.active>.sub-menu,.top-menu .nav li.has-sub.active:hover>.sub-menu,.top-menu .nav li.has-sub.active:active>.sub-menu{display:block;}.top-menu .nav>li.has-sub:hover>.sub-menu,.top-menu .nav>li.has-sub:focus>.sub-menu{display:none;}.top-menu .nav>li.menu-control{display:none !important;}.page-sidebar-toggled.page-sidebar-minified .sidebar.sidebar-transparent+.sidebar-bg{z-index:1020;}}@media (max-width:767px){.content{padding:20px;}.content,.page-sidebar-minifed .content{margin-left:0 !important;margin-right:0 !important;}.content.content-full-width .breadcrumb{margin:20px;}.content.content-full-width .page-header,.content.content-full-width .breadcrumb{margin:20px;}.content.content-full-width .page-header+.breadcrumb,.content.content-full-width .breadcrumb+.page-header{margin-top:-15px;}}@media (max-width:767px){.footer{margin:0 20px !important;}}@media(max-width:979px){@-webkit-keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}@keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}@-webkit-keyframes sidebarSlideInRight{from{right:-220px;}to{right:0;}}.page-with-two-sidebar .content{margin-right:0 !important;}.page-with-two-sidebar .sidebar.sidebar-right,.page-with-two-sidebar .sidebar-bg.sidebar-right{right:-220px;left:auto !important;position:fixed;}.page-with-two-sidebar.page-sidebar-toggled .sidebar.sidebar-right,.page-with-two-sidebar.page-sidebar-toggled .sidebar-bg.sidebar-right{-webkit-animation:none;animation:none;-webkit-animation:none;}.page-with-two-sidebar.page-right-sidebar-toggled .sidebar.sidebar-right,.page-with-two-sidebar.page-right-sidebar-toggled .sidebar-bg.sidebar-right{-webkit-animation:sidebarSlideInRight .2s;animation:sidebarSlideInRight .2s;-webkit-animation:sidebarSlideInRight .2s;right:0;left:auto;}}@media (max-width:767px){.page-with-two-sidebar .header .navbar-brand{float:none;display:block;margin:0 70px;text-align:center;width:auto;}.page-with-two-sidebar .header .navbar-brand .navbar-logo{position:relative;top:3px;display:inline-block;float:none;margin-top:0;margin-right:5px;}}@media (max-width:1080px){.boxed-layout .page-container,.boxed-layout .page-container #header,.boxed-layout .page-container #top-menu,.boxed-layout .pace{width:100%;}.boxed-layout .top-menu,.boxed-layout .pace{margin-left:0;left:0;right:0;}}@media (max-width:767px){.boxed-layout .page-container #sidebar,.boxed-layout .page-container .sidebar-bg{left:-220px;}.boxed-layout .page-sidebar-toggled #sidebar,.boxed-layout .page-sidebar-toggled .sidebar-bg{left:0;}}@media (max-width:767px){.page-header-fixed{padding-top:101px;}}@media (max-width:767px){.page-with-right-sidebar .sidebar,.page-with-right-sidebar .sidebar-bg{left:auto;right:-220px;}.page-with-right-sidebar .content{margin-right:0;}.page-with-right-sidebar .footer{margin-right:20px;}}@media (max-width:767px){.page-sidebar-toggled.page-sidebar-minified .sidebar.sidebar-transparent+.sidebar-bg,.sidebar.sidebar-transparent+.sidebar-bg{background-size:100% 100%;}}@media (max-width:767px){.boxed-layout .top-menu{top:109px;}}@media (max-width:767px){.theme-panel .control-label.double-line{line-height:30px;}.theme-panel{top:0;bottom:0;z-index:1080;}.theme-panel .theme-collapse-btn{top:150px;}.theme-panel .theme-panel-content{position:absolute;top:0;bottom:0;left:0;right:0;margin:0;overflow:scroll;border-radius:0;}}@media (max-width:767px){.breadcrumb{float:none !important;}.breadcrumb>li{line-height:20px;}}@media(max-width:979px){.form-horizontal .control-label[class*=\"col-md-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]),.form-horizontal .control-label[class*=\"col-lg-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]){padding-bottom:5px;}.form-horizontal.form-bordered .form-group{border-bottom:1px solid #eee;}.form-horizontal.form-bordered .form-group>.control-label{padding:15px;line-height:34px;}.form-horizontal.form-bordered .form-group>div{padding:15px;}.form-horizontal.form-bordered .form-group>.control-label[class*=\"col-md-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]),.form-horizontal.form-bordered .form-group>.control-label[class*=\"col-lg-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]){padding:15px 15px 0;line-height:14px;}.form-horizontal.form-bordered .form-group>div[class*=\"col-md-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]),.form-horizontal.form-bordered .form-group>div[class*=\"col-lg-\"]:not([class*=\"col-sm-\"]):not([class*=\"col-xs-\"]){padding:15px 15px 15px;}.form-horizontal.form-bordered .form-group>div,.form-horizontal.form-bordered .form-group>.control-label{border:none;}}@media (max-width:767px){.form-horizontal .control-label,.form-horizontal .col-form-label{padding-top:0;margin-bottom:0;text-align:left;}.form-horizontal.form-bordered .form-group>.control-label{padding:15px 15px 0;line-height:inherit;}.form-horizontal.form-bordered .form-group>div{padding:0px 15px 15px !important;}.form-bordered .form-group>.col-form-label,.form-horizontal.form-bordered .form-group>.control-label{padding-top:15px;padding-bottom:5px;}}@media (max-width:767px){.table-responsive .table>thead>tr>th,.table-responsive .table>tbody>tr>th,.table-responsive .table>tfoot>tr>th,.table-responsive .table>thead>tr>td,.table-responsive .table>tbody>tr>td,.table-responsive .table>tfoot>tr>td{white-space:nowrap;}}@media (max-width:767px){.nav-tabs.nav-justified.nav-justified-mobile>li{display:table-cell;width:1%;}.nav-tabs.nav-justified.nav-justified-mobile>li>a{margin-bottom:0;}}@media (max-width:767px){.modal-message .modal-header,.modal-message .modal-body,.modal-message .modal-footer{width:80%;}}@media (max-width:767px){.lead{font-size:16px;}}@media(max-width:480px){.note .note-icon,.note .note-icon i{position:relative;display:block;left:0;top:0;margin:0;}.note .note-icon{padding:15px;margin:-15px -15px 15px;border-radius:4px 4px 0 0;width:auto;}.note .note-icon+.note-content{margin:0;}}@media(max-width:480px){.dropdown-menu.media-list{max-width:280px;}.dropdown-menu.media-list p{max-width:190px;}}@media (max-width:380px){.dropdown-menu.media-list{margin-right:-50px;}}@media(max-width:480px){.media{display:block;}.media.media-lg .pull-left{float:none !important;margin-right:0;}.media.media-lg .media-object{width:100%;margin-bottom:10px;}}@media (min-width:576px){.card-deck{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.card-deck .card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.card-deck .card:not(:first-child){margin-left:15px;}.card-deck .card:not(:last-child){margin-right:15px;}}@media (min-width:576px){.card-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}.card-group .card{-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;}.card-group .card+.card{margin-left:0;border-left:0;border-left:1px solid #e2e7eb;}.card-group .card:first-child{border-bottom-right-radius:0;border-top-right-radius:0;}.card-group .card:first-child .card-img-top{border-top-right-radius:0;}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0;}.card-group .card:last-child{border-bottom-left-radius:0;border-top-left-radius:0;}.card-group .card:last-child .card-img-top{border-top-left-radius:0;}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0;}.card-group .card:not(:first-child):not(:last-child){border-radius:0;}.card-group .card:not(:first-child):not(:last-child) .card-img-top,.card-group .card:not(:first-child):not(:last-child) .card-img-bottom{border-radius:0;}}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;-webkit-column-gap:1.25rem;column-gap:1.25rem;}.card-columns .card{display:inline-block;width:100%;margin-bottom:15px;}}@media (max-width:540px){.widget-chart .widget-chart-content{margin-right:0;}.widget-chart .widget-chart-sidebar,.widget-chart .widget-chart-sidebar .chart-legend{position:relative;width:auto;}.widget-chart .widget-chart-sidebar .chart-legend{margin-top:20px;}}@media (max-width:979px){.superbox-list{width:20%;}}@media (max-width:767px){.superbox-list{width:25%;}}@media (max-width:480px){.superbox-list{width:50%;}}@media (max-width:1024px){.sw-main .nav-tabs{white-space:nowrap;display:block !important;overflow-y:scroll;}}@media (max-width:767px){.fc-event .fc-event-title small{display:none !important;}.calendar{display:block;width:100% !important;}.calendar{margin-left:0 !important;}.fc-button-today{float:left !important;}.fc-header-left,.fc-header-center,.fc-header-right{text-align:center !important;width:100% !important;display:table !important;}.calendar-event .external-event{width:100% !important;}.fc-toolbar{margin-bottom:0px !important;}.fc .fc-toolbar>*>*{margin-bottom:10px !important;}.fc-toolbar .fc-center{margin-top:0px !important;}.fc .fc-toolbar h2{font-size:18px !important;line-height:28px !important;}.calendar-event .external-event h5{margin:0 !important;}}@media (max-width:767px){.bwizard-steps li{float:left !important;width:100% !important;}}@media(max-width:480px){.datepicker table tr td,.datepicker table tr th{padding:7px !important;}}@media (max-width:420px){#gritter-notice-wrapper{width:320px !important;}.gritter-close,.gritter-light .gritter-close{width:60px !important;}.gritter-with-image,.gritter-without-image{padding-right:60px !important;}.gritter-image{width:40px !important;height:40px !important;margin-top:0 !important;}.gritter-item{padding:0 10px 5px !important;}.gritter-with-image{width:250px !important;}}@media (max-width:360px){#gritter-notice-wrapper{width:280px !important;}.gritter-with-image{width:210px !important;}}@media (max-width:360px){body .bootstrap-datetimepicker-widget.dropdown-menu,.datepicker.datepicker-dropdown{width:260px !important;}}@media (max-width:767px){.pace-progress{top:101px;}.pace .pace-activity{top:112px;}}@media (max-width:767px){.dt-buttons.btn-group{float:none;text-align:center;display:block;margin:0 0px 5px;}.dt-buttons.btn-group>.btn{float:none;margin-bottom:5px;border-radius:4px !important;}.dt-buttons.btn-group>.btn+.btn{border-left:none;margin-left:5px;}.dataTables_length,div.dataTables_info{float:none;margin-right:0;}.panel>.table-responsive>.dataTables_wrapper div.dataTables_length label,.panel>.dataTables_wrapper div.dataTables_length label{margin:20px 0 0;}div.dataTables_wrapper div.dataTables_info{margin:0;padding-top:0 !important;}div.dataTables_wrapper div.dataTables_paginate{margin:10px 20px 0 !important;text-align:center;}div.dataTables_wrapper div.dataTables_paginate .pagination{display:block;white-space:initial !important;}div.dataTables_wrapper div.dataTables_paginate .pagination>li>a{float:none;margin-bottom:5px;display:inline-block;border-radius:4px;}div.dataTables_wrapper div.dataTables_paginate .pagination>li+li a{margin-left:5px;}}@media (max-width:1024px){.result-list .result-image{display:block;height:200px;width:auto;}}@media(max-width:979px){.result-list .result-price{width:200px;}}@media (max-width:767px){.result-list .result-price{width:100px;font-size:20px;}.result-list>li>div{padding:15px;}}@media(max-width:480px){.result-list .result-image{width:100%;float:none;}.result-list .result-image a{position:relative;}.result-list>li>div{display:block;width:100%;}.result-list>li>.result-price{width:100%;padding:15px;}.result-list .btn-row{text-align:center;}.result-list .result-price .btn{margin-top:15px;}}@media(max-width:979px){.gallery .image{width:33%;}}@media (max-width:767px){.gallery .image{width:50%;}}@media(max-width:480px){.gallery .image{width:100%;}}@media(max-width:480px){.email-content{margin:0 -20px;padding:0;overflow:scroll;}}@media (max-width:767px){.profile-content,.profile-header .profile-header-content{padding:20px;}.profile-header-img{width:66px;height:66px;margin-top:10px;}.profile-header .profile-header-tab{margin:0;padding:0;white-space:nowrap;overflow-y:scroll;display:block;}.profile-header .profile-header-tab>li{float:none;}.profile-header-img+.profile-header-info{margin-left:80px;}}@media (max-width:767px){.error-code{bottom:50%;}.error-content{top:50%;}}@media(max-width:480px){.error-code{font-size:128px;line-height:128px;}}@media (max-width:767px){.map{top:101px !important;left:0 !important;right:0 !important;}.map .jvectormap-zoomin{top:120px;}.map .jvectormap-zoomout{top:150px;}}@media (max-width:767px){.login .login-header,.login-content{width:100% !important;}.login{margin:0;position:absolute;top:0;left:0;right:0;bottom:0;}.login .login-header{left:0;margin:0;position:relative;top:0;padding-top:60px;}.login .login-header .icon{display:none;}.login .login-header .brand{text-align:center;color:#fff;}.login .login-header .brand small{opacity:0.5;color:#fff;}.login .login-header .brand .logo{border-width:25px;display:block;margin:0 auto;}}@media (max-width:767px){.invoice-company .pull-right{float:none !important;display:block;}.invoice .table-responsive{margin-bottom:20px;}.invoice-from,.invoice-to,.invoice-date{display:block !important;width:100% !important;text-align:left !important;padding:0 !important;}.invoice-to,.invoice-date{margin-top:20px !important;}.invoice-price .invoice-price-left,.invoice-price .invoice-price-right{display:block;width:100% !important;float:left !important;padding:10px !important;}.invoice-price .invoice-price-row{float:none !important;width:100% !important;display:block !important;}.invoice-price .invoice-price-left .sub-price{padding:0px 10px !important;display:block !important;text-align:center !important;}.invoice-price .invoice-price-right{text-align:center !important;}.invoice-price .invoice-price-right small{position:relative !important;display:block;left:0 !important;top:0 !important;}}@media (max-width:979px){.timeline .timeline-body{margin-left:25%;margin-right:10%;}.timeline .timeline-time{width:13%;}.timeline .timeline-icon{left:13%;width:12%;}.timeline:before{left:19%;}}@media (max-width:767px){.timeline:before{left:50%;}.timeline>li{padding-top:30px;}.timeline-comment-box{margin-left:-20px;margin-right:-20px;padding:15px 20px;}.timeline .timeline-body{margin-right:0;margin-left:0;margin-top:10px;padding:20px;}.timeline .timeline-footer{margin:20px -20px -20px;padding:20px;}.timeline .timeline-body:before{border-bottom-color:#fff;border-right-color:transparent;left:50%;top:-20px;margin-left:-10px;}.timeline .timeline-time{right:50%;left:0;top:0;width:auto;margin-right:20px;padding-top:10px;}.timeline .timeline-icon{left:0;width:80px;position:relative;margin:0 auto;top:-10px;}}@media (max-width:979px){.coming-soon .timer .is-countdown{width:767px;}}@media (max-width:767px){.coming-soon .timer .is-countdown{width:100%;}}@media (max-width:480px){.coming-soon .timer .countdown-amount{font-size:24px;}.coming-soon .timer .countdown-period,.coming-soon .coming-soon-header .desc,.coming-soon .coming-soon-content .desc{font-size:12px;}.coming-soon .coming-soon-header .desc,.coming-soon .coming-soon-content .desc{padding-right:20px;padding-left:20px;}.coming-soon .coming-soon-content .input-group{width:auto;margin-right:20px;margin-left:20px;}}@media (min-width:1920px){.login-cover-image img{width:100%;}}@media (max-width:767px){.login.login-v2{left:0;top:0;margin:0;position:relative;width:100%;background:none;}.login.login-v2 .login-header{padding-top:60px;}.login-cover-image img{max-width:initial;max-height:100%;}.login-bg-list{position:relative;padding:20px;right:0;bottom:0;}}@media (max-width:480px){.list-email .email-time{float:none;display:block;margin:0;background:#fff;}}@media (max-width:1024px){.login.login-with-news-feed,.register.register-with-news-feed{position:fixed;left:0;right:0;bottom:0;top:0;}.login.login-with-news-feed .right-content,.register.register-with-news-feed .right-content{width:360px;}.login.login-with-news-feed .news-feed,.register.register-with-news-feed .news-feed{right:360px;}.login.login-with-news-feed .login-header,.register.register-with-news-feed .register-header,.login.login-with-news-feed .login-content,.register.register-with-news-feed .register-content{padding-left:45px;padding-right:45px;}}@media (max-width:992px){.login.login-with-news-feed .news-caption,.register.register-with-news-feed .news-caption{font-size:14px;padding:15px 30px;min-width:inherit;}.login.login-with-news-feed .news-caption .caption-title,.register.register-with-news-feed .news-caption .caption-title{font-size:32px;}}@media (max-width:768px){.login.login-with-news-feed .news-feed,.register.register-with-news-feed .news-feed{display:none;}.login.login-with-news-feed .right-content,.register.register-with-news-feed .right-content{float:none;width:auto;}.login.login-with-news-feed .login-header .icon{right:60px;}}@media (max-width:480px){.login.login-with-news-feed .login-header .icon{display:none;}.login.login-with-news-feed .login-header,.register.register-with-news-feed .register-header{padding:40px 40px 0;}.login.login-with-news-feed .login-content,.register.register-with-news-feed .register-content{padding:20px 40px;}}@media (max-width:360px){.login.login-with-news-feed .login-header,.register.register-with-news-feed .register-header{padding:40px 30px 0;}.login.login-with-news-feed .login-content,.register.register-with-news-feed .register-content{padding:20px 30px;}}@media (max-width:1024px){.profile-left{width:150px;}.profile-image{height:130px;}.profile-right{margin-left:165px;padding-right:0;}.table.table-profile>tbody>tr>td.field{width:100px;}}@media (max-width:767px){.profile-left{width:180px;}.profile-right{margin-left:195px;padding-right:0;}}@media (max-width:480px){.profile-left{width:100%;margin-bottom:15px;}.profile-image{height:auto;text-align:center;}.profile-image img{margin:0 auto;}.profile-right{margin:0;}.profile-section+.profile-section{padding-top:0;}.profile-section .title{margin-top:20px;}}@media (max-width:767px){.vertical-box,.vertical-box .vertical-column{display:block !important;}.vertical-box,.vertical-box-row,.vertical-box-column,.vertical-box-cell,.vertical-box-inner-cell,.page-content-full-height .content{display:block;width:auto !important;position:relative !important;overflow:initial !important;table-layout:initial !important;top:auto !important;height:auto !important;}.vertical-box .slimScrollBar,.vertical-box .slimScrollRail{display:none !important;}}@media (max-width:767px){.width-xs,.width-sm,.width-md,.width-lg,.width-full{width:100% !important;}}@media (max-width:767px){.p-l-xs-0{padding-left:0 !important;}.p-t-xs-0{padding-top:0 !important;}.p-r-xs-0{padding-right:0 !important;}.p-b-xs-0{padding-bottom:0 !important;}.p-xs-0{padding:0 !important;}.m-l-xs-0{margin-left:0 !important;}.m-t-xs-0{margin-top:0 !important;}.m-r-xs-0{margin-right:0 !important;}.m-xs-0{margin:0 !important;}.m-b-xs-0{margin-bottom:0 !important;}.hidden-xs{display:none !important;}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important;}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important;}}@media (min-width:1200px){.hidden-lg{display:none !important;}}");

_defaultExport.__hash = "4075293679";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.11';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });

        return result;
      }

      if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });

        return result;
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=0.js.map