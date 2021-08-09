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
      lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVlZXR1cERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixLQUEvQjtBQUVBLHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLGtCQUFRQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFSixLQUFLLENBQUNHLFdBQU4sQ0FBa0JFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLHFFQUFDLHdFQUFEO0FBQ0ksV0FBSyxFQUFFTCxLQUFLLENBQUNHLFdBQU4sQ0FBa0JHLEtBRDdCO0FBRUksV0FBSyxFQUFFTixLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLEtBRjdCO0FBR0ksYUFBTyxFQUFFSixLQUFLLENBQUNHLFdBQU4sQ0FBa0JJLE9BSC9CO0FBSUksaUJBQVcsRUFBRVAsS0FBSyxDQUFDRyxXQUFOLENBQWtCRTtBQUpuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0EzRVNOLGE7O0FBNEhNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwSWRdLmQ5MWNjMGZlMDk1NDhlNGYzN2ZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2coXCJbIHByb3BzLiBdIDo6OiBcIiwgcHJvcHMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMubWVlZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1lZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5tZWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy5tZWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e3Byb3BzLm1lZWV0dXBEYXRhLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVlZXR1cERhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIC8vIGluIHRoaXMgZXhhbXBsZTpcclxuLy8gLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL20zIHJldHVybiBhIDQwNCBwYWdlXHJcbi8vIC8vXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLy8gaW5kaWNhdGUgaWYgc3VwcG9ydCBhbGwgc3VwcG9ydCBvZiBwYXJhbXMgb3Igbm90XHJcbi8vICAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyAgICAgICAgIHBhdGhzOiBbXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1lZXR1cElkOiBcIm0xXCIsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtZWV0dXBJZDogXCJtMlwiLFxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG4vL1xyXG4vL1xyXG4vLyAvLyB0aGlzIHJ1biBpbiB0aGUgYnVpbGQgdGltZVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgLy8gTk9URTpcclxuLy8gICAgIC8vIHdlIGNhbid0IHVzZSByZWFjdCByb3V0ZXMgbGlrZSB1c2VSb3V0ZXJcclxuLy8gICAgIC8vIHdlIHVzZSB0aGUgY29udGV4dFxyXG4vL1xyXG4vLyAgICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuLy9cclxuLy8gICAgIC8vIE5vdGU6XHJcbi8vICAgICAvLyBkb2Vzbid0IHNob3cgaW4gdGhlIGNvbnNvbGUgYnJvd3NlclxyXG4vLyAgICAgLy8gc2hvdyB1cCBpbiB0aGUgdGVybWluYWxcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiWyBjb250ZXh0LnBhcmFtcyBdIDo6OiBcIiwgY29udGV4dC5wYXJhbXMpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJbIG1lZXR1cElkIF0gOjo6IFwiLCBtZWV0dXBJZCk7XHJcbi8vXHJcbi8vICAgICAvLyBTZXJ2ZXIgRXJyb3JcclxuLy8gICAgIC8vIEVycm9yOiBnZXRTdGF0aWNQYXRocyBpcyByZXF1aXJlZCBmb3IgZHluYW1pYyBTU0cgcGFnZXMgYW5kIGlzIG1pc3NpbmcgZm9yICcvW21lZXR1cElkXScuXHJcbi8vICAgICAvLyBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1nZXRzdGF0aWNwYXRocy12YWx1ZVxyXG4vLyAgICAgLy9cclxuLy8gICAgIC8vIHRoZSBhYm92ZSBlcnJvciBpcyBiZWNhdXNlIHRoaXMgcGFnZSBpcyBhIGR5bmFtaWMgcGFnZSBhbmQgbmVlZFxyXG4vLyAgICAgLy8gZ2V0U3RhdGljUGF0aHMgZnVuY3Rpb25cclxuLy8gICAgIC8vIHRvIGdlbmVyYXRlIGZvciBhbnkga2luZCBvZiBpZCAoIG1lZXR1cElkIClcclxuLy9cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVlZXR1cERhdGE6IHtcclxuLy8gICAgICAgICAgICAgICAgIGlkOiBcIm0xXCIsXHJcbi8vICAgICAgICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMD9yYW5kb209MVwiLFxyXG4vLyAgICAgICAgICAgICAgICAgdGl0bGU6IFwidGl0bGVcIixcclxuLy8gICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiYWRkcmVzc1wiLFxyXG4vLyAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBcIm1vbmdvZGIrc3J2Oi8vcHJhY3RpY2VzOjEyM0FCQ3ByYWN0aWNlc0BwcmFjdGljZXMuc29jeWoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICAgICAgfSkpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBcIm1vbmdvZGIrc3J2Oi8vcHJhY3RpY2VzOjEyM0FCQ3ByYWN0aWNlc0BwcmFjdGljZXMuc29jeWoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgICAgX2lkOiBPYmplY3RJZChtZWV0dXBJZCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlsgc2VsZWN0ZWRNZWV0dXAgXSA6OjogXCIsIHNlbGVjdGVkTWVldHVwKTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVlZXR1cERhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==