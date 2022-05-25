"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/NavBar/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar(props) {\n    var _this = this;\n    _s();\n    var showWalletOptions = props.showWalletOptions;\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)({}), accountData = ref.data, isLoading = ref.isLoading;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var handleShowWalletOptionsModal = function() {\n        showWalletOptions(true);\n    };\n    var ConnectionButton = function() {\n        if (accountData) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"purple\",\n                children: \"sdsf\"\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"yellow\",\n                onClick: handleShowWalletOptionsModal,\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false);\n    };\n    var toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    var handleWriteArticle = function() {\n        if (accountData == null) {\n            return toast({\n                title: \"Connect your wallet first\",\n                status: \"error\",\n                duration: 2000,\n                isClosable: true,\n                position: \"top\"\n            });\n        }\n        router.push(\"/draft\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        mx: 20,\n        my: 10,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            justify: {\n                base: \"end\",\n                md: \"end\"\n            },\n            gap: \"3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    colorScheme: \"black\",\n                    variant: \"outline\",\n                    onClick: handleWriteArticle,\n                    children: \"Write Article\"\n                }, void 0, false, {\n                    fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectionButton, {}, void 0, false, {\n                    fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/NavBar/index.tsx\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, this);\n};\n_s(NavBar, \"gPu5TSXn23xhcPALxFXid0dAiIk=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUsyQjtBQUNRO0FBQ0k7O0FBT3hCLFNBQVNNLE1BQU0sQ0FBQ0MsS0FBWSxFQUFFOzs7SUFFekMsSUFBTSxpQkFBb0IsR0FBS0EsS0FBSyxDQUEzQkMsaUJBQWlCO0lBRTFCLElBQXlDSixHQUN2QyxHQUR1Q0EsaURBQVUsQ0FBQyxFQUNuRCxDQUFDLEVBRE1LLFdBQWlCLEdBQWdCTCxHQUN2QyxDQURNSyxJQUFJLEVBQWVFLFNBQVMsR0FBS1AsR0FDdkMsQ0FEeUJPLFNBQVM7SUFHcEMsSUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBRTFCLElBQU1RLDRCQUE0QixHQUFHLFdBQU07UUFDdkNMLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCO0lBRUQsSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixJQUFJSixXQUFXLEVBQUU7WUFDZixxQkFDRSw4REFBQ1Isb0RBQU07Z0JBQ0xhLFdBQVcsRUFBQyxRQUFROzBCQUNyQixNQUFJOzs7OztxQkFBUyxDQUNmO1NBQ0Y7UUFDRCxxQkFDRTtzQkFFQSw0RUFBQ2Isb0RBQU07Z0JBQ0hhLFdBQVcsRUFBQyxRQUFRO2dCQUNwQkMsT0FBTyxFQUFFSCw0QkFBNEI7MEJBQ3hDLFNBRUQ7Ozs7O3FCQUFTO3lCQUNOLENBQ0g7S0FDSDtJQUVELElBQU1JLEtBQUssR0FBR2QsMERBQVEsRUFBRTtJQUV4QixJQUFNZSxrQkFBa0IsR0FBRyxXQUFNO1FBRTdCLElBQUdSLFdBQVcsSUFBSSxJQUFJLEVBQUM7WUFDbkIsT0FBT08sS0FBSyxDQUFDO2dCQUNURSxLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQ0MsTUFBTSxFQUFFLE9BQU87Z0JBQ2ZDLFFBQVEsRUFBRSxJQUFJO2dCQUNkQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLFFBQVEsRUFBRSxLQUFLO2FBQ2xCLENBQUM7U0FDTDtRQUNEWCxNQUFNLENBQUNZLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDeEI7SUFDRCxxQkFFRSw4REFBQ3ZCLGlEQUFHO1FBQ0Z3QixFQUFFLEVBQUUsRUFBRTtRQUNOQyxFQUFFLEVBQUUsRUFBRTtrQkFFTiw0RUFBQzFCLGtEQUFJO1lBQUMyQixPQUFPLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxLQUFLO2dCQUFFQyxFQUFFLEVBQUUsS0FBSzthQUFFO1lBQUVDLEdBQUcsRUFBQyxHQUFHOzs4QkFDOUMsOERBQUM1QixvREFBTTtvQkFDSGEsV0FBVyxFQUFDLE9BQU87b0JBQ25CZ0IsT0FBTyxFQUFDLFNBQVM7b0JBQ2pCZixPQUFPLEVBQUVFLGtCQUFrQjs4QkFDOUIsZUFBYTs7Ozs7d0JBQVM7OEJBQ3hCLDhEQUFDSixnQkFBZ0I7Ozs7d0JBQUc7Ozs7OztnQkFDaEI7Ozs7O1lBRUgsQ0FFTjtDQUNIO0dBbkVxQlIsTUFBTTs7UUFJZUYsNkNBQVU7UUFHcENDLGtEQUFTO1FBMkJWRixzREFBUTs7O0FBbENGRyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci9pbmRleC50c3g/MDc5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZsZXgsXG4gICAgQm94LFxuICAgIEJ1dHRvbixcbiAgICB1c2VUb2FzdFxuICB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIFxuICAgIHNob3dXYWxsZXRPcHRpb25zOiAoc2hvdzogYm9vbGVhbikgPT4gdm9pZDtcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvcHM6IFByb3BzKSB7XG5cbiAgICBjb25zdCB7ICBzaG93V2FsbGV0T3B0aW9ucyB9ID0gcHJvcHM7XG4gICAgXG4gICAgY29uc3QgeyBkYXRhOiBhY2NvdW50RGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VBY2NvdW50KHtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBoYW5kbGVTaG93V2FsbGV0T3B0aW9uc01vZGFsID0gKCkgPT4ge1xuICAgICAgICBzaG93V2FsbGV0T3B0aW9ucyh0cnVlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgQ29ubmVjdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGlmIChhY2NvdW50RGF0YSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBjb2xvclNjaGVtZT0ncHVycGxlJ1xuICAgICAgICAgID5zZHNmPC9CdXR0b24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHt9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPSd5ZWxsb3cnXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93V2FsbGV0T3B0aW9uc01vZGFsIH1cbiAgICAgICAgPlxuICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgPC9CdXR0b24+IFxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpXG5cbiAgICBjb25zdCBoYW5kbGVXcml0ZUFydGljbGUgPSAoKSA9PiB7XG5cbiAgICAgICAgaWYoYWNjb3VudERhdGEgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29ubmVjdCB5b3VyIHdhbGxldCBmaXJzdCcsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByb3V0ZXIucHVzaCgnL2RyYWZ0JylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgXG4gICAgICA8Qm94ICAgXG4gICAgICAgIG14PXsyMH1cbiAgICAgICAgbXk9ezEwfVxuICAgICAgICA+XG4gICAgICAgIDxGbGV4IGp1c3RpZnk9e3sgYmFzZTogJ2VuZCcsIG1kOiAnZW5kJyB9fSBnYXA9JzMnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdibGFjaydcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVdyaXRlQXJ0aWNsZX1cbiAgICAgICAgICAgID5Xcml0ZSBBcnRpY2xlPC9CdXR0b24+XG4gICAgICAgICAgIDxDb25uZWN0aW9uQnV0dG9uIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICBcbiAgICAgIDwvQm94PlxuICBcbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIkZsZXgiLCJCb3giLCJCdXR0b24iLCJ1c2VUb2FzdCIsInVzZUFjY291bnQiLCJ1c2VSb3V0ZXIiLCJOYXZCYXIiLCJwcm9wcyIsInNob3dXYWxsZXRPcHRpb25zIiwiZGF0YSIsImFjY291bnREYXRhIiwiaXNMb2FkaW5nIiwicm91dGVyIiwiaGFuZGxlU2hvd1dhbGxldE9wdGlvbnNNb2RhbCIsIkNvbm5lY3Rpb25CdXR0b24iLCJjb2xvclNjaGVtZSIsIm9uQ2xpY2siLCJ0b2FzdCIsImhhbmRsZVdyaXRlQXJ0aWNsZSIsInRpdGxlIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicG9zaXRpb24iLCJwdXNoIiwibXgiLCJteSIsImp1c3RpZnkiLCJiYXNlIiwibWQiLCJnYXAiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar/index.tsx\n");

/***/ })

});