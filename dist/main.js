/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_mexican_food_menu_hand_drawn_vector_illustration_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/mexican-food-menu-hand-drawn-vector-illustration.jpg */ \"./src/img/mexican-food-menu-hand-drawn-vector-illustration.jpg\");\n/* harmony import */ var _img_6565_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/6565.jpg */ \"./src/img/6565.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_mexican_food_menu_hand_drawn_vector_illustration_jpg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_6565_jpg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nhtml {\\n  height: 100%;\\n}\\n.navbar-nav {\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n}\\n\\n.select-menu {\\n  cursor: pointer;\\n}\\n\\n.brand-title {\\n  font-family: \\\"Shadows Into Light\\\", cursive;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.bg-overlay {\\n  background: rgb(139, 139, 139);\\n  background: radial-gradient(\\n    circle,\\n    rgba(139, 139, 139, 0) 0%,\\n    rgba(215, 215, 215, 1) 100%\\n  );\\n}\\n\\n.bg-main-circle {\\n  background-color: white;\\n  padding: 50px 40px;\\n  border-radius: 10px;\\n  -webkit-box-shadow: 2px 5px 16px 0px#838383, 5px 5px 15px 5px rgba(0, 0, 0, 0);\\n  box-shadow: 2px 5px 16px 0px#838383, 5px 5px 15px 5px rgba(0, 0, 0, 0);\\n}\\n\\n.section {\\n  padding-top: 56px;\\n}\\n\\n/* Section home */\\n#section-home {\\n  display: flex;\\n  align-items: stretch;\\n}\\n#section-home .bg-img {\\n  height: 100%;\\n  width: 100%;\\n  background-position: center;\\n  background-repeat: repeat;\\n}\\n\\n#section-home .bg-img-1 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 70%;\\n}\\n\\n#section-home .bg-img-2 {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 70%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\nconst run = () => {\n  const tabs = document.getElementsByClassName(\"select-menu\");\n  const sections = document.getElementsByClassName(\"section\");\n\n  for (const tab of tabs) {\n    tab.addEventListener(\"click\", () => {\n      clickTab(tab);\n    });\n  }\n\n  function clickTab(tab) {\n    console.log(tab);\n    const section = document.getElementById(\"section-\" + tab.dataset.section);\n    removeClassForElements(tabs, \"active\");\n    console.log(section);\n    if (tab.dataset.fromMenu) {\n      tab.classList.add(\"active\");\n      addClassForElements(sections, \"d-none\");\n      section.classList.remove(\"d-none\");\n    }\n  }\n\n  function removeClassForElements(elements, className) {\n    for (const element of elements) {\n      if (hasClass(element, className)) {\n        element.classList.remove(className);\n      }\n    }\n  }\n\n  function addClassForElements(elements, className) {\n    for (const element of elements) {\n      if (!hasClass(element, className)) {\n        element.classList.add(className);\n      }\n    }\n  }\n\n  function hasClass(element, className) {\n    return (\" \" + element.className + \" \").indexOf(\" \" + className + \" \") > -1;\n  }\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/app.js?");

/***/ }),

/***/ "./src/app/contact-page.js":
/*!*********************************!*\
  !*** ./src/app/contact-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateContactSection\": () => (/* binding */ generateContactSection)\n/* harmony export */ });\n/* harmony import */ var _util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom-nodes */ \"./src/app/util/dom-nodes.js\");\n\n\nconst generateContactSection = parentNode => {\n  let _parentNode = parentNode;\n  let _tempNode;\n\n  /* \n  <section class=\"section d-none\" id=\"section-contact\">Contact</section> -->\n  */\n  let _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"section\",\n    className: \"section d-none\",\n    id: \"section-contact\",\n    text: \"Contact\",\n  });\n\n  console.log(_parentNode);\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/contact-page.js?");

/***/ }),

/***/ "./src/app/header.js":
/*!***************************!*\
  !*** ./src/app/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHeader\": () => (/* binding */ generateHeader)\n/* harmony export */ });\n/* harmony import */ var _util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom-nodes */ \"./src/app/util/dom-nodes.js\");\n\n\nfunction generateHeader(parentNode) {\n  let _parentNode = parentNode;\n  let _tempNode;\n\n  /* <nav class=\"navbar navbar-expand-sm navbar-light bg-light fixed-top\"> */\n  let _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className: \"navbar navbar-expand-sm navbar-light bg-light fixed-top\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /* <div class=\"container-fluid\"> */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className: \"container-fluid\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /* <a class=\"navbar-brand brand-title\" href=\"index.html\">The Japanese Taco</a> */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"a\",\n    className: \"navbar-brand brand-title\",\n    attributes: {\n      href: \"index.html\",\n    },\n    text: \"The Japanese Taco\",\n  });\n\n  /* <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\"\n        aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button> */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"button\",\n    className: \"navbar-toggler\",\n    attributes: {\n      type: \"button\",\n      \"data-bs-toggle\": \"collapse\",\n      \"data-bs-target\": \"#navbarNavAltMarkup\",\n      \"aria-controls\": \"navbarNavAltMarkup\",\n      \"aria-expanded\": \"false\",\n      \"aria-label\": \"Toggle navigation\",\n    },\n  });\n\n  _tempNode = _childrenNode;\n\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"span\",\n    className: \"navbar-toggler-icon\",\n  });\n\n  /*       \n  <div \n  class=\"collapse \n  navbar-collapse \n  justify-content-end\"\n  id=\"navbarNavAltMarkup\">\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className: \"collapse navbar-collapse justify-content-end\",\n    id: \"navbarNavAltMarkup\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /* \n  <ul class=\"navbar-nav\" id=\"main-menu\"></ul>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"ul\",\n    className: \"navbar-nav\",\n    id: \"main-menu\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /*\n    <li class=\"nav-link active\" data-section=\"home\">Home</li>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"li\",\n    className: \"nav-link select-menu active\",\n    attributes: {\n      \"data-section\": \"home\",\n    },\n    text: \"Home\",\n  });\n\n  /*\n    <li class=\"nav-link\" data-section=\"menu\">Menu</li>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"li\",\n    className: \"nav-link select-menu\",\n    attributes: {\n      \"data-section\": \"menu\",\n    },\n    text: \"Menu\",\n  });\n  /*\n    <li class=\"nav-link\" data-section=\"contact\">Contact</li>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"li\",\n    className: \"nav-link select-menu\",\n    attributes: {\n      \"data-section\": \"contact\",\n    },\n    text: \"Contact\",\n  });\n}\n\n\n//# sourceURL=webpack://restaurant/./src/app/header.js?");

/***/ }),

/***/ "./src/app/home-page.js":
/*!******************************!*\
  !*** ./src/app/home-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHomeSection\": () => (/* binding */ generateHomeSection)\n/* harmony export */ });\n/* harmony import */ var _util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom-nodes */ \"./src/app/util/dom-nodes.js\");\n\n\nfunction generateHomeSection(parentNode) {\n  let _parentNode = parentNode;\n  let _tempNode;\n\n  /* \n  <section class=\"section h-100\" id=\"section-home\">\n  */\n  let _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"section\",\n    className: \"section h-100\",\n    id: \"section-home\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /* \n  <div class=\"overlay d-flex align-items-stretch\">\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className: \"overlay d-flex align-items-stretch\",\n  });\n\n  _tempNode = _childrenNode;\n\n  /* \n    <div class=\"bg-img h-100 bg-img-1\"></div>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"div\",\n    className: \"bg-img h-100 bg-img-1\",\n  });\n\n  /* \n    <div class=\"bg-img h-100 bg-img-2\"></div>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"div\",\n    className: \"bg-img h-100 bg-img-2\",\n  });\n\n  /* \n    <div class=\"overlay bg-overlay d-flex justify-content-center align-items-center\">\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className:\n      \"overlay bg-overlay d-flex justify-content-center align-items-center\",\n  });\n\n  _parentNode = _childrenNode;\n\n  /* \n    <div class=\"d-flex flex-column bg-main-circle text-center\">\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"div\",\n    className: \"d-flex flex-column bg-main-circle text-center\",\n  });\n\n  _tempNode = _childrenNode;\n\n  /* \n    <h1 class=\"brand-title fw-bold\">The Japanese Taco</h1>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"h1\",\n    className: \"brand-title fw-bold\",\n    text: \"The Japanese Taco\",\n  });\n\n  /* \n        <hr>\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"hr\",\n  });\n\n  /* \n        <h2 class=\"brand-title text-secondary\">Gourmet japanese food with mexican recepies</h2>\n\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"h2\",\n    className: \"brand-title text-secondary\",\n    text: \"Gourmet japanese food with mexican recepies\",\n  });\n\n  /* \n        <a \n        class=\"link-secondary mt-4 select-menu\" \n        data-section=\"contact\">Check menu</a>\n\n  */\n  _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _tempNode,\n    nodeName: \"a\",\n    className: \"link-secondary mt-4 select-menu\",\n    text: \"Check menu\",\n    attributes: {\n      \"data-section\": \"menu\",\n    },\n  });\n}\n\n\n//# sourceURL=webpack://restaurant/./src/app/home-page.js?");

/***/ }),

/***/ "./src/app/menu-page.js":
/*!******************************!*\
  !*** ./src/app/menu-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMenuSection\": () => (/* binding */ generateMenuSection)\n/* harmony export */ });\n/* harmony import */ var _util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom-nodes */ \"./src/app/util/dom-nodes.js\");\n\n\nconst generateMenuSection = parentNode => {\n  let _parentNode = parentNode;\n  let _tempNode;\n\n  /* \n    <section class=\"section d-none\" id=\"section-menu\">Menu</section>\n  */\n  let _childrenNode = (0,_util_dom_nodes__WEBPACK_IMPORTED_MODULE_0__.add_node)({\n    parentNode: _parentNode,\n    nodeName: \"section\",\n    className: \"section d-none\",\n    id: \"section-menu\",\n    text: \"Menu\",\n  });\n\n  console.log(_parentNode);\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/menu-page.js?");

/***/ }),

/***/ "./src/app/util/dom-nodes.js":
/*!***********************************!*\
  !*** ./src/app/util/dom-nodes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add_node\": () => (/* binding */ add_node)\n/* harmony export */ });\nfunction add_node(data) {\n  if (!data.parentNode || !data.nodeName) return;\n  const this_node = document.createElement(data.nodeName);\n  if (data.className) {\n    this_node.className = data.className;\n  }\n\n  if (data.text) {\n    this_node.innerHTML = data.text;\n  }\n\n  if (data.id) {\n    this_node.id = data.id;\n  }\n\n  if (data.attributes) {\n    for (const [key, value] of Object.entries(data.attributes)) {\n      this_node.setAttribute(key, value);\n    }\n  }\n\n  data.parentNode.append(this_node);\n  return this_node;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/app/util/dom-nodes.js?");

/***/ }),

/***/ "./src/img/6565.jpg":
/*!**************************!*\
  !*** ./src/img/6565.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e768753d4ef54cb9f4d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/6565.jpg?");

/***/ }),

/***/ "./src/img/mexican-food-menu-hand-drawn-vector-illustration.jpg":
/*!**********************************************************************!*\
  !*** ./src/img/mexican-food-menu-hand-drawn-vector-illustration.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51485e19ae44b248b093.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/img/mexican-food-menu-hand-drawn-vector-illustration.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/header */ \"./src/app/header.js\");\n/* harmony import */ var _app_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/home-page */ \"./src/app/home-page.js\");\n/* harmony import */ var _app_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/menu-page */ \"./src/app/menu-page.js\");\n/* harmony import */ var _app_contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/contact-page */ \"./src/app/contact-page.js\");\n\n\n\n\n\n\n\nwindow.onload = function() {\n  (0,_app_header__WEBPACK_IMPORTED_MODULE_2__.generateHeader)(document.body);\n  (0,_app_home_page__WEBPACK_IMPORTED_MODULE_3__.generateHomeSection)(document.body);\n  (0,_app_menu_page__WEBPACK_IMPORTED_MODULE_4__.generateMenuSection)(document.body);\n  (0,_app_contact_page__WEBPACK_IMPORTED_MODULE_5__.generateContactSection)(document.body);\n  (0,_app_app__WEBPACK_IMPORTED_MODULE_1__.run)();\n\n  //run();\n};\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;