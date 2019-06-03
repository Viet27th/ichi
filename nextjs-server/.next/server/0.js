exports.ids = [0];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/breadcrumb/style.css");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/header/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./components/wrapped_admin_pages/components/left-sidebar/style.css");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.global.css */ "./components/wrapped_admin_pages/style.global.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header */ "./components/wrapped_admin_pages/components/header/index.js");
/* harmony import */ var _components_left_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/left-sidebar */ "./components/wrapped_admin_pages/components/left-sidebar/index.js");
/* harmony import */ var _components_right_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/right-sidebar */ "./components/wrapped_admin_pages/components/right-sidebar/index.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/breadcrumb */ "./components/wrapped_admin_pages/components/breadcrumb/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer */ "./components/wrapped_admin_pages/components/footer/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);





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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ })

};;
//# sourceMappingURL=0.js.map