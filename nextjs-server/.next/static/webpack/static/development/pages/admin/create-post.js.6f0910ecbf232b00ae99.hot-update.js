webpackHotUpdate("static/development/pages/admin/create-post.js",{

/***/ "./scenes/admin/create-post/index.js":
/*!*******************************************!*\
  !*** ./scenes/admin/create-post/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.css */ "./scenes/admin/create-post/style.css");
/* harmony import */ var v_zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! v-zoom */ "./node_modules/v-zoom/dist/js/v-zoom.min.js");
/* harmony import */ var v_zoom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(v_zoom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../middleware */ "./middleware/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/axios.service */ "./services/axios.service.js");
/* harmony import */ var _services_express_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/express_api.service */ "./services/express_api.service.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/alert */ "./components/alert/index.js");
/* harmony import */ var _components_confirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/confirm */ "./components/confirm/index.js");
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/spinner */ "./components/spinner/index.js");
/* harmony import */ var _services_regex_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/regex.service */ "./services/regex.service.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/media */ "./components/media/index.js");










var _jsxFileName = "/Users/xuandieu/Desktop/express-next-ichi/nextjs-server/scenes/admin/create-post/index.js";















var AdminCreatePostScene =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AdminCreatePostScene, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AdminCreatePostScene, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_middleware__WEBPACK_IMPORTED_MODULE_14__["default"].redirectIfNotAuthenticated(ctx)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (_middleware__WEBPACK_IMPORTED_MODULE_14__["default"].checkPermission(ctx, ['super', 'admin', 'editor'])) {
                  _context.next = 11;
                  break;
                }

                if (!ctx.res) {
                  _context.next = 9;
                  break;
                }

                ctx.res.writeHead(303, {
                  Location: "/"
                });
                ctx.res.end();
                return _context.abrupt("return");

              case 9:
                next_dist_client_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/');
                return _context.abrupt("return");

              case 11:
                return _context.abrupt("return", {});

              case 12:
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

  function AdminCreatePostScene(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AdminCreatePostScene);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AdminCreatePostScene).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getListCategory", function () {
      Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_16__["axiosInstance"])().get(_services_express_api_service__WEBPACK_IMPORTED_MODULE_17__["express_api"].getAllProductsCategoryWithOrderUrl).then(function (result) {
        _this.setState({
          categories: result.data.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getListTag", function () {
      Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_16__["axiosInstance"])().get(_services_express_api_service__WEBPACK_IMPORTED_MODULE_17__["express_api"].getAllProductsTagUrl).then(function (result) {
        _this.setState({
          tags: result.data.data
        });

        throw 'hihi';
      }).catch(function (error) {
        console.log(error);
        throw "xxx";
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (e) {
      var target = e.target;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, target.name, target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeTagsProductBelongTo", function (e) {
      _this.setState({
        tagsSelectedOfPost: $('#tags').select2('val')
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeName", function (e) {
      var name = e.currentTarget.value;
      var slug = Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_21__["toSlug"])(name);

      _this.setState({
        name: name,
        slug: slug
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangePrice", function (e) {
      var value = e.currentTarget.value;

      if (Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_21__["isNumberDot"])(value) || value === '') {
        _this.setState({
          price: value
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeSale", function (e) {
      var value = e.currentTarget.value;

      if (Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_21__["isNumberDot"])(value) || value === '') {
        _this.setState({
          sale: value
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangePublishDate", function (selectedDates, dateStr, instance) {
      _this.setState({
        publish_date: selectedDates[0].toISOString()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeCategoriesProductBelongTo", function (e) {
      var value = e.currentTarget.value;
      var isChecked = e.currentTarget.checked;

      if (isChecked) {
        var temp = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.categoriesSelectedOfPost), [value]);

        _this.setState({
          categoriesSelectedOfPost: temp
        });
      } else {
        var _temp = _this.state.categoriesSelectedOfPost.filter(function (id) {
          return id !== value;
        });

        _this.setState({
          categoriesSelectedOfPost: _temp
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createNewCategory",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _components_spinner__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponentEvolution"].show();
              data = {
                parentId: _this.state.parent_category_selected,
                name: _this.state.category_name_creating,
                slug: Object(_services_regex_service__WEBPACK_IMPORTED_MODULE_21__["toSlug"])(_this.state.category_name_creating),
                type: 'category'
              };
              Object(_services_axios_service__WEBPACK_IMPORTED_MODULE_16__["axiosInstance"])().post(_services_express_api_service__WEBPACK_IMPORTED_MODULE_17__["express_api"].createProductsCategoryUrl, data).then(function (result) {
                if (result.data.requestSuccessfully) {
                  _this.setState({
                    parent_category_selected: '',
                    category_name_creating: ''
                  }, function () {
                    $('#parent-category').select2().trigger('change');
                  });

                  _this.getListCategory();

                  _components_spinner__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponentEvolution"].hide();
                  _components_alert__WEBPACK_IMPORTED_MODULE_18__["AlertComponentEvolution"].show(result.data.message);
                } else {
                  _components_spinner__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponentEvolution"].hide();
                  _components_alert__WEBPACK_IMPORTED_MODULE_18__["AlertComponentEvolution"].show(result.data.message);
                }
              }).catch(function (error) {
                _components_spinner__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponentEvolution"].hide();
                _components_alert__WEBPACK_IMPORTED_MODULE_18__["AlertComponentEvolution"].show(error.message);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "openMediaModal", function () {
      _this.setState({
        mediaModalContent: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_media__WEBPACK_IMPORTED_MODULE_23__["MediaComponent"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        })
      }, function () {
        $('#media-modal').modal('handleUpdate');
        $('#media-modal').modal('show');
        $('#media-modal').on('hidden.bs.modal', function (e) {
          _this.setState({
            mediaModalContent: ''
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "createNewPost", function () {
      var data = {
        name: _this.state.name,
        slug: _this.state.slug,
        status: _this.state.status,
        main_product_content: _this.state.main_product_content,
        product_detail: _this.state.product_detail,
        price: _this.state.price,
        currency: _this.state.currency,
        sale: _this.state.sale,
        publish_date: _this.state.publish_date,
        categories: _this.state.categoriesSelectedOfPost,
        tags: _this.state.tagsSelectedOfPost
      };
      console.log(data);
    });

    _this.flatpickerInstance = '';
    _this.vzoomInstance = ''; //https://stackoverflow.com/questions/53848026/how-to-use-pure-flatpickr-in-react

    _this.publish_date = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.state = {
      //========= set variable for this post
      name: '',
      slug: '',
      main_product_content: '',
      product_detail: '',
      status: 'new',
      publish_date: new Date().toISOString(),
      categoriesSelectedOfPost: [],
      // Categories which you want to the Post belong to. It's array id of categories
      tagsSelectedOfPost: [],
      // Tags which you want to the Post belong to. It's array include both id and slug.
      price: '',
      currency: 'vnd',
      sale: '',
      //========= initialize variable
      postStatus: [{
        value: 'new',
        name: 'Bài viết mới'
      }, {
        value: 'draft',
        name: 'Nháp'
      }, {
        value: 'trash',
        name: 'Đã tạm xoá'
      }],
      categories: [],
      tags: [],
      //========= Fast create a new category
      parent_category_selected: '',
      category_name_creating: '',
      //
      mediaModalContent: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AdminCreatePostScene, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-7 col-lg-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "name",
        className: "form-control",
        id: "name",
        placeholder: "Required...",
        value: this.state.name,
        onChange: this.handleChangeName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "slug",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Slug"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "slug",
        disabled: true,
        className: "form-control",
        id: "slug",
        placeholder: "Required...",
        defaultValue: this.state.slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "slug",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        id: "show-media",
        className: "btn btn-primary mb-2",
        onClick: this.openMediaModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fas fa-images mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), "Media"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        id: "main-product-content",
        name: "main_product_content",
        defaultValue: this.state.main_product_content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "slug",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        id: "show-media",
        className: "btn btn-primary mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fas fa-images mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), "Media"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        id: "product-detail",
        name: "product_detail",
        defaultValue: this.state.product_detail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "inputCity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Gi\xE1 ti\u1EC1n"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "price",
        name: "price",
        value: this.state.price,
        onChange: this.handleChangePrice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "inputState",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "\u0110\u01A1n v\u1ECB ti\u1EC1n t\u1EC7"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        id: "currency",
        name: "currency",
        className: "form-control custom-select cursor-pointer",
        value: this.state.currency,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "vnd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "\u0110\u1ED3ng"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "usd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "USD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "sale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Sale"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "sale",
        name: "sale",
        placeholder: "Sale...",
        value: this.state.sale,
        onChange: this.handleChangeSale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "input-group-prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "input-group-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "%")))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-5 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel panel-inverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        className: "btn btn-xs btn-icon btn-circle btn-default",
        "data-v-click": "expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        className: "btn btn-xs btn-icon btn-circle btn-success",
        "data-v-click": "reload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        className: "btn btn-xs btn-icon btn-circle btn-warning",
        "data-v-click": "collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        className: "btn btn-xs btn-icon btn-circle btn-danger",
        "data-v-click": "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "panel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Publish ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "label label-success m-l-5 t-minus-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "is-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-calendar mr-2 t-plus-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), "Tr\u1EA1ng th\xE1i:\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "text-bold text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        name: "status",
        id: "status",
        className: "cursor-pointer form-control custom-select w-50",
        value: this.state.status,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, this.state.postStatus.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
          value: el.value,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, el.name);
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "clearfix box-body__publish-date mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-calendar mr-2 pull-left t-plus-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Ng\xE0y \u0111\u0103ng:\xA0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        id: "publish-date",
        name: "publish_date",
        type: "text",
        className: "text-bold text-dark no-border pull-left",
        ref: this.publish_date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        htmlFor: "publish-date",
        className: "change font-weight-light cursor-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Change"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary pull-right",
        onClick: this.createNewPost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Submit"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel panel-inverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-default",
        "data-v-click": "expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-success",
        "data-v-click": "reload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-warning",
        "data-v-click": "collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-danger",
        "data-v-click": "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "panel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Categories ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "label label-success m-l-5 t-minus-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "is-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, this.state.categories.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "checkbox",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          className: "d-flex align-items-center",
          style: {
            'paddingLeft': "".concat(27 * el.deep, "px")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          type: "checkbox",
          name: "categories",
          value: el._id,
          checked: lodash__WEBPACK_IMPORTED_MODULE_22___default.a.includes(_this2.state.categoriesSelectedOfPost, el._id),
          onChange: _this2.handleChangeCategoriesProductBelongTo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "cr mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "cr-icon fa fa-check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        })), el.name));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "text-light-blue cursor-pointer inline mb-0",
        "data-toggle": "collapse",
        "data-target": "#new-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-plus mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }), "Add new category"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "new-category",
        className: "collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group mb-0 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        id: "parent-category",
        name: "parent_category_selected",
        className: "form-control",
        style: {
          'width': '100%'
        },
        value: this.state.parent_category_selected,
        onChange: function onChange() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "---Select Parent Category---"), this.state.categories.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
          value: el._id,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, el.name);
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "input-group pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "category_name_creating",
        type: "text",
        className: "form-control",
        value: this.state.category_name_creating,
        onChange: this.handleChange,
        placeholder: "Category...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "input-group-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn btn-info ml-2",
        onClick: this.createNewCategory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Click me to Add New!")))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel panel-inverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-default",
        "data-v-click": "expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-success",
        "data-v-click": "reload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-warning",
        "data-v-click": "collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-danger",
        "data-v-click": "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "panel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Tags ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "label label-success m-l-5 t-minus-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "is-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
        id: "tags",
        name: "tags[]",
        className: "form-control",
        multiple: "multiple",
        "data-placeholder": "Select tags",
        style: {
          'width': '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, this.state.tags.map(function (el, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
          value: el._id,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }, el.name);
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel panel-inverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-heading-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-default",
        "data-v-click": "expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-expand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-success",
        "data-v-click": "reload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-redo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-warning",
        "data-v-click": "collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-minus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:;",
        className: "btn btn-xs btn-icon btn-circle btn-danger",
        "data-v-click": "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
        className: "panel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "Feature Image ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "label label-success m-l-5 t-minus-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "is-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        className: "w-100 vzoom",
        src: "/static/img/default_admin_avatar.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "hljs clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "text-light-blue cursor-pointer mb-0 inline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-plus mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), "Set feature image"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "media-modal",
        className: "modal",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "media-modal",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "modal-dialog modal-xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, this.state.mediaModalContent))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /**
       * Event handle for four button onto panel-header
       */
      +function () {
        var Default = {
          animationSpeed: 279
        };
        var Event = {
          collapse: 'collapse'
        };
        $('[data-v-click]').each(function () {
          $(this).on('click', function (e) {
            var parentOfIt = $(this).parents('.panel-heading');
            var affected = parentOfIt.next('.is-collapse');
            var eventType = $(this).data('vClick');

            if (eventType === Event.collapse) {
              affected.toggle(Default.animationSpeed);
            }
          });
        });
      }(); // Register VZoom

      this.vzoomInstance = VZoom.init('.vzoom', {
        backgroundColor: 'rgba(0,0,0,.95)',
        zoomEffect: 'translate',
        duration: '279',
        zoomPercentage: 50
      }); // Replace the <textarea id=''> with a CKEditor

      var ckeditorOption = {
        height: 270,
        extraPlugins: 'language,justify,iframe,font,youtube,lineheight',
        removePlugins: '',
        // skin: 'kama',
        font_defaultLabel: 'Arial',
        fontSize_defaultLabel: '12px',
        youtube_responsive: true,
        youtube_controls: true,
        youtube_related: true
      };
      CKEDITOR.replace('main-product-content', ckeditorOption);
      CKEDITOR.replace('product-detail', ckeditorOption); // U can use "setData()"|"insertText()"|"insertHtml()" to change value in text editor.
      // Noted that: setData() will be replace the entire editor content.
      // Refer: https://stackoverflow.com/questions/3610010/how-do-i-set-a-value-in-ckeditor-with-javascript
      // CKEDITOR.instances['main-product-content'].setData('<img src="http://localhost:3000/static/img/default_admin_avatar.jpg" />');

      var self = this;
      CKEDITOR.instances['main-product-content'].on('change', function (e) {
        self.setState({
          main_product_content: this.getData()
        });
      });
      CKEDITOR.instances['product-detail'].on('change', function (e) {
        self.setState({
          product_detail: this.getData()
        });
      }); // Register flatpickr

      this.flatpickerInstance = flatpickr(this.publish_date.current, {
        defaultDate: this.state.publish_date,
        weekNumbers: true,
        time_24hr: true,
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        onChange: this.handleChangePublishDate
      }); // Register select2

      $('#tags').select2({
        tags: true // if select tag is multiple, create tag if not exist

      }).on('change', this.handleChangeTagsProductBelongTo);
      $('#parent-category').select2({
        tags: true // if select tag is multiple, create tag if not exist

      }).on('change', this.handleChange); // Get first list category

      this.getListCategory(); // Get first list tag

      this.getListTag();
    }
    /**
     * Get category list from DB
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.vzoomInstance.destroy();
      CKEDITOR.instances['main-product-content'].destroy();
      CKEDITOR.instances['product-detail'].destroy();
      this.flatpickerInstance.destroy();
      $('#tags, #parent-category').select2('destroy');
    }
  }]);

  return AdminCreatePostScene;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AdminCreatePostScene);

/***/ })

})
//# sourceMappingURL=create-post.js.6f0910ecbf232b00ae99.hot-update.js.map