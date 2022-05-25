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

/***/ "./src/components/ArticleList/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleList\": function() { return /* binding */ ArticleList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ArticleItem = function(param) {\n    var article = param.article;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        p: 4,\n        border: \"1px\",\n        borderColor: \"gray.200\",\n        borderRadius: \"md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            direction: \"column\",\n            gap: \"1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    onClick: function() {\n                        return router.push({\n                            pathname: \"/article\",\n                            query: {\n                                id: article._id\n                            }\n                        });\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        fontSize: \"3xl\",\n                        as: \"u\",\n                        children: article.title\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 18\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    noOfLines: 1,\n                    fontSize: \"xl\",\n                    children: article.content\n                }, void 0, false, {\n                    fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_s(ArticleItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ArticleItem;\nvar Pagination = function(param) {\n    var page = param.page, setPage = param.setPage, pageCount = param.pageCount;\n    var disableLeftBtn = page == 0;\n    var disableRightBtn = page == pageCount - 1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"Prev\"\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c1 = Pagination;\nvar ArticleList = function(props) {\n    var _this1 = _this;\n    var page = props.page, setPage = props.setPage, articles = props.articles, pageCount = props.pageCount;\n    var disableLeftBtn = page == 0;\n    var disableRightBtn = page == pageCount - 1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                my: 10,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                my: 8,\n                                src: \"/images/zen.jpeg\"\n                            }, void 0, false, {\n                                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                fontSize: \"5xl\",\n                                children: \"\\u6587\\u7AE0\\u5217\\u8868\"\n                            }, void 0, false, {\n                                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                        borderColor: \"black\"\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                gap: \"4\",\n                direction: \"column\",\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArticleItem, {\n                        article: article\n                    }, article._id, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 28\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        disabled: disableLeftBtn,\n                        onClick: function() {\n                            setPage(page - 1);\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        disabled: disableRightBtn,\n                        onClick: function() {\n                            return setPage(page + 1);\n                        },\n                        children: \"Next \"\n                    }, void 0, false, {\n                        fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/otter/IdeaProjects/fullstack-challenge/client/src/components/ArticleList/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c2 = ArticleList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ArticleItem\");\n$RefreshReg$(_c1, \"Pagination\");\n$RefreshReg$(_c2, \"ArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTGlzdC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBT3lCO0FBR2M7QUFDQzs7QUFXeEMsSUFBTVEsV0FBVyxHQUFHLGdCQUF1QztRQUFwQ0MsT0FBTyxTQUFQQSxPQUFPOztJQUMxQixJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIscUJBQ0ksOERBQUNOLGlEQUFHO1FBQ0FVLENBQUMsRUFBRSxDQUFDO1FBQ0pDLE1BQU0sRUFBQyxLQUFLO1FBQ1pDLFdBQVcsRUFBQyxVQUFVO1FBQ3RCQyxZQUFZLEVBQUMsSUFBSTtrQkFDakIsNEVBQUNkLGtEQUFJO1lBQUNlLFNBQVMsRUFBQyxRQUFRO1lBQUNDLEdBQUcsRUFBQyxHQUFHOzs4QkFDNUIsOERBQUNWLGtEQUFJO29CQUNEVyxPQUFPLEVBQUU7K0JBQU1QLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDOzRCQUN2QkMsUUFBUSxFQUFFLFVBQVU7NEJBQ3BCQyxLQUFLLEVBQUU7Z0NBQUVDLEVBQUUsRUFBRVosT0FBTyxDQUFDYSxHQUFHOzZCQUFFO3lCQUM3QixDQUFDO3FCQUFBOzhCQUNMLDRFQUFDcEIsa0RBQUk7d0JBQUNxQixRQUFRLEVBQUMsS0FBSzt3QkFBQ0MsRUFBRSxFQUFDLEdBQUc7a0NBQUVmLE9BQU8sQ0FBQ2dCLEtBQUs7Ozs7OzZCQUFROzs7Ozt5QkFDNUM7OEJBRVAsOERBQUN2QixrREFBSTtvQkFBQ3dCLFNBQVMsRUFBRSxDQUFDO29CQUFFSCxRQUFRLEVBQUMsSUFBSTs4QkFBRWQsT0FBTyxDQUFDa0IsT0FBTzs7Ozs7eUJBQVE7Ozs7OztpQkFDdkQ7Ozs7O2FBQ0wsQ0FDVDtDQUNKO0dBckJLbkIsV0FBVzs7UUFDRUQsa0RBQVM7OztBQUR0QkMsS0FBQUEsV0FBVztBQXVCakIsSUFBTW9CLFVBQVUsR0FBRyxnQkFBd0c7UUFBckdDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsU0FBUyxTQUFUQSxTQUFTO0lBRTFDLElBQU1DLGNBQWMsR0FBR0gsSUFBSSxJQUFJLENBQUM7SUFDaEMsSUFBTUksZUFBZSxHQUFHSixJQUFJLElBQUlFLFNBQVMsR0FBRyxDQUFDO0lBRzdDLHFCQUNBOzswQkFDQyw4REFBQzFCLG9EQUFNOzBCQUFFLE1BQUk7Ozs7O3FCQUFTOzBCQUNuQiw4REFBQ0Esb0RBQU07MEJBQUMsTUFDUjs7Ozs7cUJBQVM7O29CQUNWLENBRUY7Q0FDSjtBQWRLdUIsTUFBQUEsVUFBVTtBQWdCVCxJQUFNTSxXQUFXLEdBQUcsU0FBQ0MsS0FBWSxFQUF5Qjs7SUFFN0QsSUFBUU4sSUFBSSxHQUFtQ00sS0FBSyxDQUE1Q04sSUFBSSxFQUFFQyxPQUFPLEdBQTBCSyxLQUFLLENBQXRDTCxPQUFPLEVBQUVNLFFBQVEsR0FBZ0JELEtBQUssQ0FBN0JDLFFBQVEsRUFBRUwsU0FBUyxHQUFLSSxLQUFLLENBQW5CSixTQUFTO0lBQzFDLElBQU1DLGNBQWMsR0FBR0gsSUFBSSxJQUFJLENBQUM7SUFDaEMsSUFBTUksZUFBZSxHQUFHSixJQUFJLElBQUlFLFNBQVMsR0FBRyxDQUFDO0lBRTdDLHFCQUNJOzswQkFDQSw4REFBQzlCLGlEQUFHO2dCQUFDb0MsRUFBRSxFQUFFLEVBQUU7O2tDQUNQLDhEQUFDckMsa0RBQUk7d0JBQUNzQyxVQUFVLEVBQUMsUUFBUTt3QkFBQ0MsY0FBYyxFQUFDLFFBQVE7OzBDQUU3Qyw4REFBQ3BDLG1EQUFLO2dDQUFDa0MsRUFBRSxFQUFFLENBQUM7Z0NBQUdHLEdBQUcsRUFBQyxrQkFBa0I7Ozs7O3FDQUFHOzBDQUN4Qyw4REFBQ3RDLGtEQUFJO2dDQUFDcUIsUUFBUSxFQUFDLEtBQUs7MENBQUMsMEJBQUk7Ozs7O3FDQUFPOzs7Ozs7NkJBQzdCO2tDQUVQLDhEQUFDbkIscURBQU87d0JBQUVTLFdBQVcsRUFBQyxPQUFPOzs7Ozs2QkFBRTs7Ozs7O3FCQUM3QjswQkFFRiw4REFBQ2Isa0RBQUk7Z0JBQUNnQixHQUFHLEVBQUMsR0FBRztnQkFBQ0QsU0FBUyxFQUFDLFFBQVE7MEJBQzNCcUIsUUFBUSxDQUFDSyxHQUFHLENBQUNoQyxTQUFBQSxPQUFPLEVBQUk7b0JBQ3JCLHFCQUFPLDhEQUFDRCxXQUFXO3dCQUFtQkMsT0FBTyxFQUFFQSxPQUFPO3VCQUE3QkEsT0FBTyxDQUFDYSxHQUFHOzs7OzhCQUFzQjtpQkFDN0QsQ0FBQzs7Ozs7cUJBQ0M7MEJBQ1AsOERBQUN0QixrREFBSTs7a0NBQ0wsOERBQUNLLG9EQUFNO3dCQUFDcUMsUUFBUSxFQUFFVixjQUFjO3dCQUFFZixPQUFPLEVBQUUsV0FBTTs0QkFBQ2EsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFDO3lCQUFDO2tDQUFFLE1BQUk7Ozs7OzZCQUFTO2tDQUNuRiw4REFBQ3hCLG9EQUFNO3dCQUFDcUMsUUFBUSxFQUFFVCxlQUFlO3dCQUFFaEIsT0FBTyxFQUFFO21DQUFNYSxPQUFPLENBQUNELElBQUksR0FBRyxDQUFDLENBQUM7eUJBQUE7a0NBQUUsT0FBSzs7Ozs7NkJBQVM7Ozs7OztxQkFDNUU7O29CQUNSLENBRUw7Q0FFTDtBQS9CWUssTUFBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTGlzdC9pbmRleC50c3g/MWYyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEZsZXgsXG4gICAgQm94LFxuICAgIFRleHQsXG4gICAgSW1hZ2UsXG4gICAgRGl2aWRlcixcbiAgICBCdXR0b25cbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxudHlwZSBBcnRpY2xlICA9IHsgX2lkOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGFydGljbGVzOiBBcnRpY2xlW107XG4gICAgcGFnZTogbnVtYmVyO1xuICAgIHNldFBhZ2U6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcGFnZUNvdW50OiBudW1iZXI7XG59XG5cbmNvbnN0IEFydGljbGVJdGVtID0gKHsgYXJ0aWNsZSB9OiB7IGFydGljbGU6IEFydGljbGUgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHA9ezR9XG4gICAgICAgICAgICBib3JkZXI9JzFweCdcbiAgICAgICAgICAgIGJvcmRlckNvbG9yPSdncmF5LjIwMCdcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCI+XG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249J2NvbHVtbicgZ2FwPScxJz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hcnRpY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBhcnRpY2xlLl9pZCB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID48VGV4dCBmb250U2l6ZT0nM3hsJyBhcz0ndSc+e2FydGljbGUudGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUZXh0IG5vT2ZMaW5lcz17MX0gZm9udFNpemU9J3hsJz57YXJ0aWNsZS5jb250ZW50fTwvVGV4dD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgcGFnZSwgc2V0UGFnZSwgcGFnZUNvdW50IH06IHsgcGFnZTogbnVtYmVyOyBwYWdlQ291bnQ6IG51bWJlciwgc2V0UGFnZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZCB9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZGlzYWJsZUxlZnRCdG4gPSBwYWdlID09IDA7XG4gICAgY29uc3QgZGlzYWJsZVJpZ2h0QnRuID0gcGFnZSA9PSBwYWdlQ291bnQgLSAxO1xuXG5cbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxCdXR0b24gPlByZXY8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbj5OZXh0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGNvbnN0IEFydGljbGVMaXN0ID0gKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cbiAgICBjb25zdCB7IHBhZ2UsIHNldFBhZ2UsIGFydGljbGVzLCBwYWdlQ291bnQgfSA9IHByb3BzO1xuICAgIGNvbnN0IGRpc2FibGVMZWZ0QnRuID0gcGFnZSA9PSAwO1xuICAgIGNvbnN0IGRpc2FibGVSaWdodEJ0biA9IHBhZ2UgPT0gcGFnZUNvdW50IC0gMTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxCb3ggbXk9ezEwfT5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XG5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgbXk9ezh9ICBzcmM9XCIvaW1hZ2VzL3plbi5qcGVnXCIgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nNXhsJz7mlofnq6DliJfooag8L1RleHQ+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxEaXZpZGVyICBib3JkZXJDb2xvcj0nYmxhY2snLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgXG4gICAgICAgICAgICA8RmxleCBnYXA9JzQnIGRpcmVjdGlvbj0nY29sdW1uJz5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZXMubWFwKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEFydGljbGVJdGVtIGtleT17YXJ0aWNsZS5faWR9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVMZWZ0QnRufSBvbkNsaWNrPXsoKSA9PiB7c2V0UGFnZShwYWdlIC0gMSl9fT5QcmV2PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlUmlnaHRCdG59IG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfT5OZXh0IDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cblxuICAgICk7XG5cbn1cbiJdLCJuYW1lcyI6WyJGbGV4IiwiQm94IiwiVGV4dCIsIkltYWdlIiwiRGl2aWRlciIsIkJ1dHRvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJBcnRpY2xlSXRlbSIsImFydGljbGUiLCJyb3V0ZXIiLCJwIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJkaXJlY3Rpb24iLCJnYXAiLCJvbkNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsIl9pZCIsImZvbnRTaXplIiwiYXMiLCJ0aXRsZSIsIm5vT2ZMaW5lcyIsImNvbnRlbnQiLCJQYWdpbmF0aW9uIiwicGFnZSIsInNldFBhZ2UiLCJwYWdlQ291bnQiLCJkaXNhYmxlTGVmdEJ0biIsImRpc2FibGVSaWdodEJ0biIsIkFydGljbGVMaXN0IiwicHJvcHMiLCJhcnRpY2xlcyIsIm15IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic3JjIiwibWFwIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.tsx\n");

/***/ })

});