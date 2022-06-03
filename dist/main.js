/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://api-marvel/./src/css/style.css?");

/***/ }),

/***/ "./src/js/comic.js":
/*!*************************!*\
  !*** ./src/js/comic.js ***!
  \*************************/
/***/ (() => {

eval("const timeStamp = '1654098089';\r\nconst apiKey = '4c3607b7715a0d2b401a0c68b168913b';\r\nconst hash = '14670b0fc3dff7f0e365a7b220b2ccd4';\r\n\r\nfetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`).then((response) => {\r\n    return response.json();\r\n}).then((jsonParsed) => {\r\n    /* console.log(jsonParsed); */\r\n    const divComics = document.querySelector('#comics');\r\n    console.log(jsonParsed)\r\n    jsonParsed.data.results.forEach(element => {\r\n        const image = element.thumbnail.path + '.' + element.thumbnail.extension\r\n        const nameComics = element.title\r\n\r\n        if (image !== \"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg\") {\r\n            createDivComics(image, nameComics, divComics);\r\n        }\r\n    });\r\n})\r\n\r\nfunction createDivComics(image, nameComics, divToAppend) {\r\n    const divPai = document.createElement('div');\r\n    const divFilho = document.createElement('div');\r\n    const textName = document.createElement(\"text\");\r\n    const img = document.createElement(\"img\");\r\n\r\n    textName.textContent = nameComics\r\n    img.src = image\r\n\r\n    divFilho.appendChild(img);\r\n    divFilho.appendChild(textName);\r\n    divPai.appendChild(divFilho);\r\n    divToAppend.appendChild(divPai);\r\n\r\n    divPai.classList.add(\"personagens\");\r\n\r\n}\r\n\n\n//# sourceURL=webpack://api-marvel/./src/js/comic.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _comic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comic */ \"./src/js/comic.js\");\n/* harmony import */ var _comic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_comic__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://api-marvel/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;