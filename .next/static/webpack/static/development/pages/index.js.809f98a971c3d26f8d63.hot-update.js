webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/jacob/Development/booksontap/pages/index.tsx";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tfont-size: 1.25rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tlist-style: none;\n\tpadding: 0;\n\n\tli {\n\t\twidth: 30%;\n\t\tmin-width: 300px;\n\t\tmargin: 1rem;\n\t\tflex-grow: 1;\n\t}\n\timg {\n\t\tdisplay: block;\n\t\tmax-width: 100%;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Books = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject());
var Price = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span(_templateObject2());

var BookLink = function BookLink(_ref) {
  var slug = _ref.slug,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/book/[slug]",
    as: "/book/".concat(slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, children));
};

var indexPage = function indexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      books = _useState2[0],
      setBooks = _useState2[1];

  var getBooks = function getBooks() {
    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://booksontap.azurewebsites.net/api/Books");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getBooks().then(function (res) {
      setBooks(res.data);
    });
  }, []);

  var toLocalCurrency = function toLocalCurrency(amount) {
    var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-GB";
    var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GBP";
    return new Intl.NumberFormat(country, {
      style: "currency",
      currency: currency
    }).format(amount);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Books on tap"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Books, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, books.length !== 0 ? books.results.map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: book.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: book.thumbnail,
      alt: book.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Price, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, toLocalCurrency(book.price)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BookLink, {
      slug: book.id,
      content: book,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, book.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "by ".concat(book.author.firstName, " ").concat(book.author.lastName)));
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Loading ...")));
};

/* harmony default export */ __webpack_exports__["default"] = (indexPage);

/***/ })

})
//# sourceMappingURL=index.js.809f98a971c3d26f8d63.hot-update.js.map