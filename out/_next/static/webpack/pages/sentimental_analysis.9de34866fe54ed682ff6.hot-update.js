webpackHotUpdate_N_E("pages/sentimental_analysis",{

/***/ "./components/sentiment-compo.js":
/*!***************************************!*\
  !*** ./components/sentiment-compo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api_endpoints */ "./api_endpoints.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var _this = undefined,
    _jsxFileName = "G:\\Projects\\EVA-Web\\components\\sentiment-compo.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Sentiment = function Sentiment() {
  _s();

  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Content-Type"] = "multipart/form-data";
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Accept"] = "application/json";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Please select an image"),
      fileName = _useState2[0],
      setFileName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showLoading = _useState3[0],
      setShowLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      uploadPercentage = _useState4[0],
      setUploadPercentage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      results = _useState5[0],
      setResults = _useState5[1];

  var recognise = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var formData, _results;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setShowLoading(true);
              formData = new FormData();
              formData.append("file", file); // request recognisation from end-point

              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_4__["SENTIMENTAL_ANALYSIS_ENDPOINT"]), formData, {
                crossDomain: true
              });

            case 6:
              _results = _context.sent;
              setResults(_results.data);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setResults({});
              alert(JSON.stringify(_context.t0));

            case 14:
              // we are done, now turn off the loading and progress bar
              setShowLoading(false); // reset the states

              setTimeout(function () {
                setUploadPercentage(0);
              }, 5000);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function recognise() {
      return _ref.apply(this, arguments);
    };
  }();

  var onText = function onText(e) {
    if (e.target.value) {
      setText(e.target.value);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, "Sentimental Anaysis"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 16
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "This is a sentiment analysis model trained on the IMDb reviews dataset. The model can predict whether a given movie review is positive or negative."))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 10
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    lg: 4,
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, !(Object.entries(results).length === 0 && results.constructor === Object) && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    style: {
      textAlign: "center"
    },
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 144
    }
  }, "It is  ", results['Predicted_Class'])))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "dark",
    className: "mt-5",
    hidden: !showLoading,
    disabled: true,
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    as: "span",
    animation: "grow",
    size: "sm",
    role: "status",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 26
    }
  }), " ", "Loading...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 26
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 30
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 34
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 38
    }
  }, "Enter Movie Review"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "text",
    onChange: onText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 30
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "dark",
    className: "mx-auto shadow-lg",
    size: "lg",
    onClick: function onClick() {
      return recognise();
    },
    disabled: text === undefined,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 22
    }
  }, "Predict Sentiment!")))))));
};

_s(Sentiment, "1wSRqPRg3Onk6cg6kci9KxXenaQ=");

_c = Sentiment;
/* harmony default export */ __webpack_exports__["default"] = (Sentiment);

var _c;

$RefreshReg$(_c, "Sentiment");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJzaG93TG9hZGluZyIsInNldFNob3dMb2FkaW5nIiwidXBsb2FkUGVyY2VudGFnZSIsInNldFVwbG9hZFBlcmNlbnRhZ2UiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInJlY29nbmlzZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwiU0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQiLCJjcm9zc0RvbWFpbiIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Iiwib25UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dEFsaWduIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiUm93IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQkMsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQUgsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixRQUE1QixJQUF3QyxrQkFBeEM7O0FBSG9CLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpDLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQUthRixzREFBUSxDQUFDLHdCQUFELENBTHJCO0FBQUEsTUFLWkcsUUFMWTtBQUFBLE1B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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREosQ0FESixFQU1JLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsUUFBSSxFQUFDLE1BQW5CO0FBQTBCLFlBQVEsRUFBSVQsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBRlgsRUFjRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEgsRUFlRyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQ0ksV0FBTyxFQUFDLE1BRFo7QUFFSSxhQUFTLEVBQUMsbUJBRmQ7QUFHSSxRQUFJLEVBQUMsSUFIVDtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU1aLFNBQVMsRUFBZjtBQUFBLEtBSmI7QUFLSSxZQUFRLEVBQUVWLElBQUksS0FBS2dDLFNBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FmSCxDQURELENBRkYsQ0FwQ0YsQ0FGRixDQURGO0FBcUZKLENBeElEOztHQUFNdEMsUzs7S0FBQUEsUztBQTBJV0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VudGltZW50YWxfYW5hbHlzaXMuOWRlMzQ4NjZmZTU0ZWQ2ODJmZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIH0gZnJvbSBcIi4uL2FwaV9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEZvcm0sXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTcGlubmVyLFxyXG4gICAgVG9hc3QsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEltYWdlLFxyXG4gICAgQWxlcnRcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmNvbnN0IFNlbnRpbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoXCJQbGVhc2Ugc2VsZWN0IGFuIGltYWdlXCIpO1xyXG4gICAgIGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFt1cGxvYWRQZXJjZW50YWdlLCBzZXRVcGxvYWRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHt9KTtcclxuIFxyXG4gICAgIGNvbnN0IHJlY29nbmlzZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuIFxyXG4gICAgICAgICAgICAgLy8gcmVxdWVzdCByZWNvZ25pc2F0aW9uIGZyb20gZW5kLXBvaW50XHJcbiAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICBgJHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVH1gLFxyXG4gICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHt9KTtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAvLyB3ZSBhcmUgZG9uZSwgbm93IHR1cm4gb2ZmIHRoZSBsb2FkaW5nIGFuZCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gXHJcbiAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZXNcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBzZXRVcGxvYWRQZXJjZW50YWdlKDApO1xyXG4gICAgICAgICB9LCA1MDAwKTtcclxuICAgICB9O1xyXG4gXHJcbiAgICAgY29uc3Qgb25UZXh0ID0gKGUpID0+IHtcclxuICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgfTtcclxuIFxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICBcclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgXHJcbiAgICAgICAgIDxoMSBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5TZW50aW1lbnRhbCBBbmF5c2lzPC9oMT5cclxuICAgICAgICAgPGJyLz5cclxuICAgICAgICAgPGRpdiBzdHlsZSA9IHt7dGV4dEFsaWduOidjZW50ZXInfX0gPlxyXG4gICAgICAgICAgICAgICA8cD48c3Ryb25nPlRoaXMgaXMgYSBzZW50aW1lbnQgYW5hbHlzaXMgbW9kZWwgdHJhaW5lZCBvbiB0aGUgSU1EYiByZXZpZXdzIGRhdGFzZXQuIFRoZSBtb2RlbCBjYW4gcHJlZGljdCB3aGV0aGVyIGEgZ2l2ZW4gbW92aWUgcmV2aWV3IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fSBsZz17NH0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHshKE9iamVjdC5lbnRyaWVzKHJlc3VsdHMpLmxlbmd0aCA9PT0gMCAmJiByZXN1bHRzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19ICB2YXJpYW50PSdkYXJrJz57cmVzdWx0c1snU3RhdHVzJ109PTAgPyA8c3Ryb25nPntyZXN1bHRzWydNZXNzYWdlJ119PC9zdHJvbmc+IDogPHN0cm9uZz5JdCBpcyAge3Jlc3VsdHNbJ1ByZWRpY3RlZF9DbGFzcyddfTwvc3Ryb25nPn08L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgPFJvdyAgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17IXNob3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJncm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiID5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxDb2wgeHMgPSB7Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVudGVyIE1vdmllIFJldmlldzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2UgPSB7b25UZXh0fSAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjb2duaXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGV4dCA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudCFcclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgICApO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICAgXHJcbiBcclxuIFxyXG5cclxufVxyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VudGltZW50Il0sInNvdXJjZVJvb3QiOiIifQ==