webpackHotUpdate("static/development/pages/book/[slug].js",{

/***/ "./pages/book/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/book/[slug].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.tsx");
/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/container */ "./components/layout/container.tsx");


var _jsxFileName = "/Users/jacob/Development/booksontap/pages/book/[slug].tsx";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tcolor: crimson;\n\tdisplay: block;\n\tmargin: 3rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmargin-left: 1rem;\n\n\th1,\n\th2 {\n\t\tmargin: 0;\n\t}\n\n\th2 {\n\t\tfont-weight: normal;\n\t\tfont-size: 1rem;\n\t}\n\n\tp {\n\t\tline-height: 1.5;\n\t}\n\n\tsmall {\n\t\tdisplay: block;\n\t\tmargin: 1rem 0;\n\t}\n\n\tbutton {\n\t\twidth: auto;\n\t\tdisplay: inline-block;\n\t\tfont-size: 16px;\n\t\tfont-weight: bold;\n\t\tcolor: #273457;\n\t\tbackground-color: #f2c14a;\n\t\tpadding: 14px 15px;\n\t\ttext-transform: uppercase;\n\t\tborder-radius: 4px;\n\t\t-webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);\n\t\t-moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);\n\t\tbox-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);\n\t\ttransition: 0.3rem;\n\t\tmargin-right: 1rem;\n\t\t&:hover {\n\t\t\tbackground-color: #273456;\n\t\t\tcolor: #f2c14a;\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tmargin-top: 3rem;\n\tdisplay: flex;\n\tflex-direction: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var SoldOut = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].strong(_templateObject3());

var Book = function Book() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      book = _useState2[0],
      setBook = _useState2[1];

  var getBook = function getBook() {
    return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://booksontap.azurewebsites.net/api/Books/".concat(query.slug));
  };

  console.log(query);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getBook().then(function (res) {
      setBook(res.data.results);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, book.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: book.thumbnail,
    alt: book.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, book.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "by ", book.author.firstName, " ", book.author.lastName), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, book.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "ISBN: ", book.isbn), book.stockAmount >= 1 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Buy now"), " (", book.stockAmount, " ", "in stock)") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SoldOut, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Out of stock")))) : "Loading ...");
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ })

})
//# sourceMappingURL=[slug].js.c54295d86a75a04077f3.hot-update.js.map