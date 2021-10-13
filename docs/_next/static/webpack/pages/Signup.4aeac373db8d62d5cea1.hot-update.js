self["webpackHotUpdate_N_E"]("pages/Signup",{

/***/ "./components/ValidateSignup.js":
/*!**************************************!*\
  !*** ./components/ValidateSignup.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/firebase */ "./utils/firebase.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\cyber\\Documents\\GitHub\\Readaway\\components\\ValidateSignup.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








var ValidateSignup = function ValidateSignup() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      finished = _useState3[0],
      setFinished = _useState3[1];

  var schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(6).max(12).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_1__.ref('password'), null], 'Passwords must match').required()
  }); //submit handler

  var submitSignup = function submitSignup(values, _ref) {
    var resetForm = _ref.resetForm;
    var email = values.email,
        password = values.password;
    setError(false); //reset error

    setErrorMessage('');
    setFinished(false);
    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password).then(function (response) {
      setFinished(true);
      resetForm();
      router.push('/dashboard');
      localStorage.setItem('token', response.user.refreshToken);
      console.log(response);
    })["catch"](function (error) {
      console.log(error.message);
      setError(true);
      setErrorMessage(error.message);
    });
  };

  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, error && __jsx(Alert, {
    variant: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, errorMessage), finished && __jsx(Alert, {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 20
    }
  }, "Successfully login in!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    validationSchema: schema,
    onSubmit: submitSignup,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        handleChange = _ref2.handleChange,
        values = _ref2.values,
        touched = _ref2.touched,
        errors = _ref2.errors;
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {
      className: "login_form",
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }
    }, "Signup"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "email",
      controlId: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: handleChange,
      value: values.email,
      isValid: touched.email && !errors.email,
      isInvalid: touched.email && errors.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, errors.email))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "password",
      controlId: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: handleChange,
      value: values.password,
      isValid: touched.password && !errors.password,
      isInvalid: touched.password && errors.password,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
      className: "password",
      controlId: "confirmPassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      onChange: handleChange,
      value: values.confirmPassword,
      isValid: touched.confirmPassword && !errors.confirmPassword,
      isInvalid: touched.confirmPassword && errors.confirmPassword,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control.Feedback, {
      type: "invalid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, errors.confirmPassword)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "primary",
      type: "submit",
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    }, "Submit")))));
  }));
};

_s(ValidateSignup, "lXo9uJJ9iGVF4Xvb1VTywPMkN08=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = ValidateSignup;
/* harmony default export */ __webpack_exports__["default"] = (ValidateSignup);

var _c;

$RefreshReg$(_c, "ValidateSignup");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var firebaseConfig = {
  apiKey: 'AIzaSyCSIR30NJ1kwnUpkz3_q4Jug1aiH1uigBM',
  authDomain: 'readaway-cc9bf.firebaseapp.com',
  projectId: 'readaway-cc9bf',
  storageBucket: 'readaway-cc9bf.appspot.com',
  messagingSenderId: '800497666000',
  appId: '1:800497666000:web:92b49eb1cfe73e95b7dbd5',
  measurementId: 'G-QKGHYCJBRX'
};

if (firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.apps.length === 0) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__.default);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");



var name = "firebase";
var version = "8.9.1";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion(name, version, 'app');
_firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.SDK_VERSION = version;
//# sourceMappingURL=index.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYWxpZGF0ZVNpZ251cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiVmFsaWRhdGVTaWdudXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInN1Ym1pdFNpZ251cCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsImF1dGgiLCJnZXRBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1c2VyIiwicmVmcmVzaFRva2VuIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0Msc0RB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QXVCUixjQUF2QjtBQUNEOztBQUVELCtEQUFlUSxpREFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQztBQUNHOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQXdCO0FBQ3hCLDhEQUFvQjtBQUNwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9TaWdudXAuNGFlYWMzNzNkYjhkNjJkNWNlYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IFZhbGlkYXRlU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbmlzaGVkLCBzZXRGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDYpLm1heCgxMikucmVxdWlyZWQoKSxcclxuICAgIGNvbmZpcm1QYXNzd29yZDogeXVwXHJcbiAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAub25lT2YoW3l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLCAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnKVxyXG4gICAgICAucmVxdWlyZWQoKVxyXG4gIH0pO1xyXG5cclxuICAvL3N1Ym1pdCBoYW5kbGVyXHJcbiAgY29uc3Qgc3VibWl0U2lnbnVwID0gKHZhbHVlcywgeyByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHZhbHVlcztcclxuICAgIHNldEVycm9yKGZhbHNlKTsgLy9yZXNldCBlcnJvclxyXG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuICAgIHNldEZpbmlzaGVkKGZhbHNlKTtcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRGaW5pc2hlZCh0cnVlKTtcclxuICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLnVzZXIucmVmcmVzaFRva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICB7LyogU2hvdyBlcnJvcnMgKi99XHJcbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdmFyaWFudD1cImRhbmdlclwiPntlcnJvck1lc3NhZ2V9PC9BbGVydD59XHJcbiAgICAgIHsvKiBTaG93IHN1Y2Nlc3MqL31cclxuICAgICAge2ZpbmlzaGVkICYmIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dpbiBpbiE8L0FsZXJ0Pn1cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICBvblN1Ym1pdD17c3VibWl0U2lnbnVwfVxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHRvdWNoZWQsIGVycm9ycyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbl9mb3JtXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9naW5cIj5TaWdudXA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJlbWFpbFwiIGNvbnRyb2xJZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dG91Y2hlZC5lbWFpbCAmJiAhZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJwYXNzd29yZFwiIGNvbnRyb2xJZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dG91Y2hlZC5wYXNzd29yZCAmJiAhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCIgY29udHJvbElkPVwiY29uZmlybVBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Q29uZmlybSBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQuY29uZmlybVBhc3N3b3JkICYmICFlcnJvcnMuY29uZmlybVBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmNvbmZpcm1QYXNzd29yZCAmJiBlcnJvcnMuY29uZmlybVBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVTaWdudXA7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiAnQUl6YVN5Q1NJUjMwTkoxa3duVXBrejNfcTRKdWcxYWlIMXVpZ0JNJyxcclxuICBhdXRoRG9tYWluOiAncmVhZGF3YXktY2M5YmYuZmlyZWJhc2VhcHAuY29tJyxcclxuICBwcm9qZWN0SWQ6ICdyZWFkYXdheS1jYzliZicsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ3JlYWRhd2F5LWNjOWJmLmFwcHNwb3QuY29tJyxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzgwMDQ5NzY2NjAwMCcsXHJcbiAgYXBwSWQ6ICcxOjgwMDQ5NzY2NjAwMDp3ZWI6OTJiNDllYjFjZmU3M2U5NWI3ZGJkNScsXHJcbiAgbWVhc3VyZW1lbnRJZDogJ0ctUUtHSFlDSkJSWCdcclxufTtcclxuXHJcbmlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCI4LjkuMVwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5maXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xyXG5maXJlYmFzZS5TREtfVkVSU0lPTiA9IHZlcnNpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9