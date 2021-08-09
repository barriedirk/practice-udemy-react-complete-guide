webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "D:\\practices\\react-complete-guide\\18b-introduction-to-nextjs\\pages\\index.js";
// our-domain.com/

 // note: nextjs will detect that MongoClient is only use insie of getStaticProps
//       and will not include to the client bundle

// import { useEffect, useState } from "react";
// we move Layout to router component _app.js to get every component will wrapper with Layout
// import Layout from "../components/layout/Layout";
 // const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         title: "A First Meeting",
//         image: "https://picsum.photos/seed/picsum/200/300?random=1",
//         address: "Some address 6, 1234 Some City",
//         description: "This is a first meetup!",
//     },
//     {
//         id: "m2",
//         title: "A Second Meeting",
//         image: "https://picsum.photos/seed/picsum/200/300?random=3",
//         address: "Some address 1, 1234 Some City",
//         description: "This is a second meetup!",
//     },
// ];
// note
//   with useEffect the rendering of this page will occur twice
//   with data empty and second with the data
//   for SEO is a bad idea and for that reason we could use
//   the function getStaticProps()
//
// function HomePage() {
//     const [loaded, setLoadedMeetups] = useState([]);
//     useEffect(() => {
//         // send a http request and fetch data
//         //
//
//         setLoadedMeetups(DUMMY_MEETUPS);
//     }, []);
//
//     // return (
//     //     <Layout>
//     //         <MeetupList meetups={DUMMY_MEETUPS} />
//     //     </Layout>
//     // );
//
//     // return <MeetupList meetups={DUMMY_MEETUPS} />;
//
//     console.log("[ loaded ] ::: ", loaded);
//
//     return <MeetupList meetups={loaded} />;
// }

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active React meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
} // Data fetching for static pages (SSG)
// -----------------------------------------
//  The code inside of getStaticProps is not expose to the client
//
// Note: for static page generation
//    nextjs will search for a function with this name during rendering process
//    build on the server
//
//
// export async function getStaticProps() {
//     // can use any instruction only run on the server
//     // fetch data from an API
//
//     // need to return always a object
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }
//


_c = HomePage;
// Data fetching for server (SSR)
// -----------------------------------------
//
// NOTE: not run during the build process
// run on the server, never on the client
// for any incoming request
//
// export async function getServerSideProps(context) {
//     // to check cookie, authentication, etc
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API or filesystem
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLHNCQUNJLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFDSSxZQUFJLEVBQUMsYUFEVDtBQUVJLGVBQU8sRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5DU0YsUTtBQTBFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkODZhNzY1MzhlZTY0ZmRiOWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvdXItZG9tYWluLmNvbS9cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gbm90ZTogbmV4dGpzIHdpbGwgZGV0ZWN0IHRoYXQgTW9uZ29DbGllbnQgaXMgb25seSB1c2UgaW5zaWUgb2YgZ2V0U3RhdGljUHJvcHNcclxuLy8gICAgICAgYW5kIHdpbGwgbm90IGluY2x1ZGUgdG8gdGhlIGNsaWVudCBidW5kbGVcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gd2UgbW92ZSBMYXlvdXQgdG8gcm91dGVyIGNvbXBvbmVudCBfYXBwLmpzIHRvIGdldCBldmVyeSBjb21wb25lbnQgd2lsbCB3cmFwcGVyIHdpdGggTGF5b3V0XHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgICAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXRpbmdcIixcclxuLy8gICAgICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMD9yYW5kb209MVwiLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDYsIDEyMzQgU29tZSBDaXR5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6IFwibTJcIixcclxuLy8gICAgICAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0aW5nXCIsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzIwMC8zMDA/cmFuZG9tPTNcIixcclxuLy8gICAgICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxLCAxMjM0IFNvbWUgQ2l0eVwiLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwIVwiLFxyXG4vLyAgICAgfSxcclxuLy8gXTtcclxuXHJcbi8vIG5vdGVcclxuLy8gICB3aXRoIHVzZUVmZmVjdCB0aGUgcmVuZGVyaW5nIG9mIHRoaXMgcGFnZSB3aWxsIG9jY3VyIHR3aWNlXHJcbi8vICAgd2l0aCBkYXRhIGVtcHR5IGFuZCBzZWNvbmQgd2l0aCB0aGUgZGF0YVxyXG4vLyAgIGZvciBTRU8gaXMgYSBiYWQgaWRlYSBhbmQgZm9yIHRoYXQgcmVhc29uIHdlIGNvdWxkIHVzZVxyXG4vLyAgIHRoZSBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpXHJcbi8vXHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4vLyAgICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3QgYW5kIGZldGNoIGRhdGFcclxuLy8gICAgICAgICAvL1xyXG4vL1xyXG4vLyAgICAgICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbi8vICAgICB9LCBbXSk7XHJcbi8vXHJcbi8vICAgICAvLyByZXR1cm4gKFxyXG4vLyAgICAgLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAvLyAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9IC8+XHJcbi8vICAgICAvLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgICAvLyApO1xyXG4vL1xyXG4vLyAgICAgLy8gcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9IC8+O1xyXG4vL1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJbIGxvYWRlZCBdIDo6OiBcIiwgbG9hZGVkKTtcclxuLy9cclxuLy8gICAgIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWR9IC8+O1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJCcm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBSZWFjdCBtZWV0dXBzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIERhdGEgZmV0Y2hpbmcgZm9yIHN0YXRpYyBwYWdlcyAoU1NHKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgVGhlIGNvZGUgaW5zaWRlIG9mIGdldFN0YXRpY1Byb3BzIGlzIG5vdCBleHBvc2UgdG8gdGhlIGNsaWVudFxyXG4vL1xyXG4vLyBOb3RlOiBmb3Igc3RhdGljIHBhZ2UgZ2VuZXJhdGlvblxyXG4vLyAgICBuZXh0anMgd2lsbCBzZWFyY2ggZm9yIGEgZnVuY3Rpb24gd2l0aCB0aGlzIG5hbWUgZHVyaW5nIHJlbmRlcmluZyBwcm9jZXNzXHJcbi8vICAgIGJ1aWxkIG9uIHRoZSBzZXJ2ZXJcclxuLy9cclxuLy9cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgICAgLy8gY2FuIHVzZSBhbnkgaW5zdHJ1Y3Rpb24gb25seSBydW4gb24gdGhlIHNlcnZlclxyXG4vLyAgICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4vL1xyXG4vLyAgICAgLy8gbmVlZCB0byByZXR1cm4gYWx3YXlzIGEgb2JqZWN0XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgIH07XHJcbi8vIH1cclxuLy9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBBUElcclxuXHJcbiAgICAvLyBOb3RlOiB0aGUgY29kZSB3aWxsIG5vdCBleHBvc2UgdG8gdGhlIGNsaWVudFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgICAgICBcIm1vbmdvZGIrc3J2Oi8vcHJhY3RpY2VzOjEyM0FCQ3ByYWN0aWNlc0BwcmFjdGljZXMuc29jeWoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIC8vIHJldHVybiB7XHJcbiAgICAvLyAgICAgcHJvcHM6IHtcclxuICAgIC8vICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIC8vIHNlY29uZHMgdGhhdCBuZXh0IHdpbGwgd2FpdCB0byByZWdlbmVyYXRlIHRoZSBwYWdlXHJcbiAgICAvLyAgICAgLy8gb24gdGhlIHNlcnZlclxyXG4gICAgLy8gICAgIHJldmFsaWRhdGU6IDEwLFxyXG4gICAgLy8gfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB1c2UgbWFwIGJlY2F1c2UgbW9uZ29kYiB1c2UgX2lkIGFzIGFuIG9iamVjdCwgYW5kIHRocm93IGFuZCBlcnJvXHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBEYXRhIGZldGNoaW5nIGZvciBzZXJ2ZXIgKFNTUilcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9cclxuLy8gTk9URTogbm90IHJ1biBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3NcclxuLy8gcnVuIG9uIHRoZSBzZXJ2ZXIsIG5ldmVyIG9uIHRoZSBjbGllbnRcclxuLy8gZm9yIGFueSBpbmNvbWluZyByZXF1ZXN0XHJcbi8vXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgLy8gdG8gY2hlY2sgY29va2llLCBhdXRoZW50aWNhdGlvbiwgZXRjXHJcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUEkgb3IgZmlsZXN5c3RlbVxyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=