webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");

var _jsxFileName = "D:\\practices\\react-complete-guide\\18b-introduction-to-nextjs\\pages\\[meetupId]\\index.js";




function MeetupDetails(props) {
  console.log("[ props. ] ::: ", props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.meeetupData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.meeetupData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.meeetupData.image,
      title: props.meeetupData.title,
      address: props.meeetupData.address,
      description: props.meeetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
} // // in this example:
// // http://localhost:3000/m3 return a 404 page
// //
// export async function getStaticPaths() {
//     return {
//         // indicate if support all support of params or not
//         fallback: false,
//         paths: [
//             {
//                 params: {
//                     meetupId: "m1",
//                 },
//             },
//             {
//                 params: {
//                     meetupId: "m2",
//                 },
//             },
//         ],
//     };
// }
//
//
// // this run in the build time
// export async function getStaticProps(context) {
//     // NOTE:
//     // we can't use react routes like useRouter
//     // we use the context
//
//     const meetupId = context.params.meetupId;
//
//     // Note:
//     // doesn't show in the console browser
//     // show up in the terminal
//     console.log("[ context.params ] ::: ", context.params);
//     console.log("[ meetupId ] ::: ", meetupId);
//
//     // Server Error
//     // Error: getStaticPaths is required for dynamic SSG pages and is missing for '/[meetupId]'.
//     // Read more: https://err.sh/next.js/invalid-getstaticpaths-value
//     //
//     // the above error is because this page is a dynamic page and need
//     // getStaticPaths function
//     // to generate for any kind of id ( meetupId )
//
//     return {
//         props: {
//             meeetupData: {
//                 id: "m1",
//                 image: "https://picsum.photos/seed/picsum/200/300?random=1",
//                 title: "title",
//                 address: "address",
//                 description: "description",
//             },
//         },
//     };
// }


_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVlZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixLQUEvQjtBQUVBLHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLGtCQUFRQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLGFBRFQ7QUFFSSxlQUFPLEVBQUVKLEtBQUssQ0FBQ0csV0FBTixDQUFrQkU7QUFGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBUUkscUVBQUMsd0VBQUQ7QUFDSSxXQUFLLEVBQUVMLEtBQUssQ0FBQ0csV0FBTixDQUFrQkcsS0FEN0I7QUFFSSxXQUFLLEVBQUVOLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsS0FGN0I7QUFHSSxhQUFPLEVBQUVKLEtBQUssQ0FBQ0csV0FBTixDQUFrQkksT0FIL0I7QUFJSSxpQkFBVyxFQUFFUCxLQUFLLENBQUNHLFdBQU4sQ0FBa0JFO0FBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0E5RVNOLGE7O0FBK0hNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLjI5MzkzNzg2NzE3NjNmYmIzMTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2coXCJbIHByb3BzLiBdIDo6OiBcIiwgcHJvcHMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVlZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5tZWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lZXR1cERldGFpbFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLm1lZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLm1lZWV0dXBEYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzcz17cHJvcHMubWVlZXR1cERhdGEuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gLy8gaW4gdGhpcyBleGFtcGxlOlxyXG4vLyAvLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvbTMgcmV0dXJuIGEgNDA0IHBhZ2VcclxuLy8gLy9cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAvLyBpbmRpY2F0ZSBpZiBzdXBwb3J0IGFsbCBzdXBwb3J0IG9mIHBhcmFtcyBvciBub3RcclxuLy8gICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgICAgICAgcGF0aHM6IFtcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1lZXR1cElkOiBcIm0yXCIsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICB9O1xyXG4vLyB9XHJcbi8vXHJcbi8vXHJcbi8vIC8vIHRoaXMgcnVuIGluIHRoZSBidWlsZCB0aW1lXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgICAvLyBOT1RFOlxyXG4vLyAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlYWN0IHJvdXRlcyBsaWtlIHVzZVJvdXRlclxyXG4vLyAgICAgLy8gd2UgdXNlIHRoZSBjb250ZXh0XHJcbi8vXHJcbi8vICAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4vL1xyXG4vLyAgICAgLy8gTm90ZTpcclxuLy8gICAgIC8vIGRvZXNuJ3Qgc2hvdyBpbiB0aGUgY29uc29sZSBicm93c2VyXHJcbi8vICAgICAvLyBzaG93IHVwIGluIHRoZSB0ZXJtaW5hbFxyXG4vLyAgICAgY29uc29sZS5sb2coXCJbIGNvbnRleHQucGFyYW1zIF0gOjo6IFwiLCBjb250ZXh0LnBhcmFtcyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIlsgbWVldHVwSWQgXSA6OjogXCIsIG1lZXR1cElkKTtcclxuLy9cclxuLy8gICAgIC8vIFNlcnZlciBFcnJvclxyXG4vLyAgICAgLy8gRXJyb3I6IGdldFN0YXRpY1BhdGhzIGlzIHJlcXVpcmVkIGZvciBkeW5hbWljIFNTRyBwYWdlcyBhbmQgaXMgbWlzc2luZyBmb3IgJy9bbWVldHVwSWRdJy5cclxuLy8gICAgIC8vIFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLWdldHN0YXRpY3BhdGhzLXZhbHVlXHJcbi8vICAgICAvL1xyXG4vLyAgICAgLy8gdGhlIGFib3ZlIGVycm9yIGlzIGJlY2F1c2UgdGhpcyBwYWdlIGlzIGEgZHluYW1pYyBwYWdlIGFuZCBuZWVkXHJcbi8vICAgICAvLyBnZXRTdGF0aWNQYXRocyBmdW5jdGlvblxyXG4vLyAgICAgLy8gdG8gZ2VuZXJhdGUgZm9yIGFueSBraW5kIG9mIGlkICggbWVldHVwSWQgKVxyXG4vL1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICAgICBtZWVldHVwRGF0YToge1xyXG4vLyAgICAgICAgICAgICAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgICAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3BpY3N1bS8yMDAvMzAwP3JhbmRvbT0xXCIsXHJcbi8vICAgICAgICAgICAgICAgICB0aXRsZTogXCJ0aXRsZVwiLFxyXG4vLyAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJhZGRyZXNzXCIsXHJcbi8vICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIFwibW9uZ29kYitzcnY6Ly9wcmFjdGljZXM6MTIzQUJDcHJhY3RpY2VzQHByYWN0aWNlcy5zb2N5ai5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgICAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB9KSksXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIFwibW9uZ29kYitzcnY6Ly9wcmFjdGljZXM6MTIzQUJDcHJhY3RpY2VzQHByYWN0aWNlcy5zb2N5ai5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgICAgICBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiWyBzZWxlY3RlZE1lZXR1cCBdIDo6OiBcIiwgc2VsZWN0ZWRNZWV0dXApO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWVldHVwRGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9