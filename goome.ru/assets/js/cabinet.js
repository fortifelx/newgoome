/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);
var isBuffer = __webpack_require__(23);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(16)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(25);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(26);
var buildURL = __webpack_require__(28);
var parseHeaders = __webpack_require__(29);
var isURLSameOrigin = __webpack_require__(30);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(31);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(32);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(27);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(14).setImmediate))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(6)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DatePicker=t():e.DatePicker=t()}(window,function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var a;!function(r){"use strict";var i={},s=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,o=/\d\d?/,l=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,u=/\[([^]*?)\]/gm,c=function(){};function d(e,t){for(var n=[],a=0,r=e.length;a<r;a++)n.push(e[a].substr(0,t));return n}function h(e){return function(t,n,a){var r=a[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~r&&(t.month=r)}}function p(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],g=d(m,3),v=d(f,3);i.i18n={dayNamesShort:v,dayNames:f,monthNamesShort:g,monthNames:m,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var x={D:function(e){return e.getDate()},DD:function(e){return p(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return p(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return p(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return String(e.getFullYear()).substr(2)},YYYY:function(e){return p(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return p(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return p(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return p(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return p(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return p(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return p(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+p(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},b={D:[o,function(e,t){e.day=t}],Do:[new RegExp(o.source+l.source),function(e,t){e.day=parseInt(t,10)}],M:[o,function(e,t){e.month=t-1}],YY:[o,function(e,t){var n=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?n-1:n)+t}],h:[o,function(e,t){e.hour=t}],m:[o,function(e,t){e.minute=t}],s:[o,function(e,t){e.second=t}],YYYY:[/\d{4}/,function(e,t){e.year=t}],S:[/\d/,function(e,t){e.millisecond=100*t}],SS:[/\d{2}/,function(e,t){e.millisecond=10*t}],SSS:[/\d{3}/,function(e,t){e.millisecond=t}],d:[o,c],ddd:[l,c],MMM:[l,h("monthNamesShort")],MMMM:[l,h("monthNames")],a:[l,function(e,t,n){var a=t.toLowerCase();a===n.amPm[0]?e.isPm=!1:a===n.amPm[1]&&(e.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(e,t){"Z"===t&&(t="+00:00");var n,a=(t+"").match(/([\+\-]|\d\d)/gi);a&&(n=60*a[1]+parseInt(a[2],10),e.timezoneOffset="+"===a[0]?n:-n)}]};b.dd=b.d,b.dddd=b.ddd,b.DD=b.D,b.mm=b.m,b.hh=b.H=b.HH=b.h,b.MM=b.M,b.ss=b.s,b.A=b.a,i.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},i.format=function(e,t,n){var a=n||i.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");var r=[];return(t=(t=(t=i.masks[t]||t||i.masks.default).replace(u,function(e,t){return r.push(t),"??"})).replace(s,function(t){return t in x?x[t](e,a):t.slice(1,t.length-1)})).replace(/\?\?/g,function(){return r.shift()})},i.parse=function(e,t,n){var a=n||i.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=i.masks[t]||t,e.length>1e3)return!1;var r=!0,o={};if(t.replace(s,function(t){if(b[t]){var n=b[t],i=e.search(n[0]);~i?e.replace(n[0],function(t){return n[1](o,t,a),e=e.substr(i+t.length),t}):r=!1}return b[t]?"":t.slice(1,t.length-1)}),!r)return!1;var l,u=new Date;return!0===o.isPm&&null!=o.hour&&12!=+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12==+o.hour&&(o.hour=0),null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,l=new Date(Date.UTC(o.year||u.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):l=new Date(o.year||u.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),l},void 0!==e&&e.exports?e.exports=i:void 0===(a=function(){return i}.call(t,n,t,e))||(e.exports=a)}()},function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function a(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce(function(e,t){var r,i,s,o,l;for(s in t)if(r=e[s],i=t[s],r&&n.test(s))if("class"===s&&("string"==typeof r&&(l=r,e[s]=r={},r[l]=!0),"string"==typeof i&&(l=i,t[s]=i={},i[l]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(o in i)r[o]=a(r[o],i[o]);else if(Array.isArray(r))e[s]=r.concat(i);else if(Array.isArray(i))e[s]=[r].concat(i);else for(o in i)r[o]=i[o];else e[s]=t[s];return e},{})}},function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],s=i[0],o={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[s]?a[s].parts.push(o):n.push(a[s]={id:s,parts:[o]})}return n}n.r(t),n.d(t,"default",function(){return f});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,u=!1,c=function(){},d=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){u=n,d=r||{};var s=a(e,t);return m(s),function(t){for(var n=[],r=0;r<s.length;r++){var o=s[r];(l=i[o.id]).refs--,n.push(l)}t?m(s=a(e,t)):s=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(v(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(v(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+h+'~="'+e.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}if(p){var r=l++;a=o||(o=g()),t=y.bind(null,a,r,!1),n=y.bind(null,a,r,!0)}else a=g(),t=function(e,t){var n=t.css,a=t.media,r=t.sourceMap;a&&e.setAttribute("media",a);d.ssrId&&e.setAttribute(h,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var x,b=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function y(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i={bind:function(e,t,n){e["@clickoutside"]=function(a){!e.contains(a.target)&&t.expression&&n.context[t.expression]&&t.value()},document.addEventListener("click",e["@clickoutside"],!0)},unbind:function(e){document.removeEventListener("click",e["@clickoutside"],!0)}};function s(e){return e instanceof Date}function o(e){return null!==e&&void 0!==e&&!!new Date(e).getTime()}function l(e){return Array.isArray(e)&&2===e.length&&o(e[0])&&o(e[1])&&new Date(e[1]).getTime()>=new Date(e[0]).getTime()}function u(e){var t=(e||"").split(":");return t.length>=2?{hours:parseInt(t[0],10),minutes:parseInt(t[1],10)}:null}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"24",n=e.hours,a=(n=(n="24"===t?n:n%12||12)<10?"0"+n:n)+":"+(e.minutes<10?"0"+e.minutes:e.minutes);return"12"===t&&(a+=e.hours>=12?" pm":" am"),a}var d={zh:{days:["日","一","二","三","四","五","六"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],pickers:["未来7天","未来30天","最近7天","最近30天"],placeholder:{date:"请选择日期",dateRange:"请选择日期范围"}},en:{days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pickers:["next 7 days","next 30 days","previous 7 days","previous 30 days"],placeholder:{date:"Select Date",dateRange:"Select Date Range"}},ro:{days:["Lun","Mar","Mie","Joi","Vin","Sâm","Dum"],months:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],pickers:["urmatoarele 7 zile","urmatoarele 30 zile","ultimele 7 zile","ultimele 30 zile"],placeholder:{date:"Selectați Data",dateRange:"Selectați Intervalul De Date"}},fr:{days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],months:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sep","Oct","Nov","Dec"],pickers:["7 jours suivants","30 jours suivants","7 jours précédents","30 jours précédents"],placeholder:{date:"Sélectionnez une date",dateRange:"Sélectionnez une période"}},es:{days:["Dom","Lun","mar","Mie","Jue","Vie","Sab"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],pickers:["próximos 7 días","próximos 30 días","7 días anteriores","30 días anteriores"],placeholder:{date:"Seleccionar fecha",dateRange:"Seleccionar un rango de fechas"}},"pt-br":{days:["Dom","Seg","Ter","Qua","Quin","Sex","Sáb"],months:["Jan","Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"],pickers:["próximos 7 dias","próximos 30 dias","7 dias anteriores"," 30 dias anteriores"],placeholder:{date:"Selecione uma data",dateRange:"Selecione um período"}},ru:{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],pickers:["след. 7 дней","след. 30 дней","прош. 7 дней","прош. 30 дней"],placeholder:{date:"Выберите дату",dateRange:"Выберите период"}},de:{days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],pickers:["nächsten 7 Tage","nächsten 30 Tage","vorigen 7 Tage","vorigen 30 Tage"],placeholder:{date:"Datum auswählen",dateRange:"Zeitraum auswählen"}},it:{days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],pickers:["successivi 7 giorni","successivi 30 giorni","precedenti 7 giorni","precedenti 30 giorni"],placeholder:{date:"Seleziona una data",dateRange:"Seleziona un intervallo date"}},cs:{days:["Ned","Pon","Úte","Stř","Čtv","Pát","Sob"],months:["Led","Úno","Bře","Dub","Kvě","Čer","Čerc","Srp","Zář","Říj","Lis","Pro"],pickers:["příštích 7 dní","příštích 30 dní","předchozích 7 dní","předchozích 30 dní"],placeholder:{date:"Vyberte datum",dateRange:"Vyberte časové rozmezí"}},sl:{days:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],pickers:["naslednjih 7 dni","naslednjih 30 dni","prejšnjih 7 dni","prejšnjih 30 dni"],placeholder:{date:"Izberite datum",dateRange:"Izberite razpon med 2 datumoma"}}},h=d.zh,p={methods:{t:function(e){for(var t=this,n=t.$options.name;t&&(!n||"DatePicker"!==n);)(t=t.$parent)&&(n=t.$options.name);for(var a=t&&t.language||h,r=e.split("."),i=a,s=void 0,o=0,l=r.length;o<l;o++){if(s=i[r[o]],o===l-1)return s;if(!s)return"";i=s}return""}}};var f=n(1),m=n.n(f);function g(e,t,n,a,r,i,s,o){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}var v=g({name:"CalendarPanel",components:{PanelDate:{name:"panelDate",mixins:[p],props:{value:null,startAt:null,endAt:null,calendarMonth:{default:(new Date).getMonth()},calendarYear:{default:(new Date).getFullYear()},firstDayOfWeek:{default:7,type:Number,validator:function(e){return e>=1&&e<=7}},disabledDate:{type:Function,default:function(){return!1}}},methods:{selectDate:function(e){var t=e.year,n=e.month,a=e.day,r=new Date(t,n,a);this.disabledDate(r)||this.$emit("select",r)},getDays:function(e){var t=this.t("days"),n=parseInt(e,10);return t.concat(t).slice(n,n+7)},getDates:function(e,t,n){var a=[],r=new Date(e,t);r.setDate(0);for(var i=(r.getDay()+7-n)%7+1,s=r.getDate()-(i-1),o=0;o<i;o++)a.push({year:e,month:t-1,day:s+o});r.setMonth(r.getMonth()+2,0);for(var l=r.getDate(),u=0;u<l;u++)a.push({year:e,month:t,day:1+u});r.setMonth(r.getMonth()+1,1);for(var c=42-(i+l),d=0;d<c;d++)a.push({year:e,month:t+1,day:1+d});return a},getCellClasses:function(e){var t=e.year,n=e.month,a=e.day,r=[],i=new Date(t,n,a).getTime(),s=(new Date).setHours(0,0,0,0),o=this.value&&new Date(this.value).setHours(0,0,0,0),l=this.startAt&&new Date(this.startAt).setHours(0,0,0,0),u=this.endAt&&new Date(this.endAt).setHours(0,0,0,0);return n<this.calendarMonth?r.push("last-month"):n>this.calendarMonth?r.push("next-month"):r.push("cur-month"),i===s&&r.push("today"),this.disabledDate(i)&&r.push("disabled"),o&&(i===o?r.push("actived"):l&&i<=o?r.push("inrange"):u&&i>=o&&r.push("inrange")),r},getCellTitle:function(e){var t=e.year,n=e.month,a=e.day;return new Date(t,n,a).toLocaleDateString()}},render:function(e){var t=this,n=this.getDays(this.firstDayOfWeek).map(function(t){return e("th",[t])}),a=this.getDates(this.calendarYear,this.calendarMonth,this.firstDayOfWeek),r=Array.apply(null,{length:6}).map(function(n,r){var i=a.slice(7*r,7*r+7).map(function(n){var a={class:t.getCellClasses(n)};return e("td",m()([{class:"cell"},a,{attrs:{title:t.getCellTitle(n)},on:{click:t.selectDate.bind(t,n)}}]),[n.day])});return e("tr",[i])});return e("table",{class:"mx-panel mx-panel-date"},[e("thead",[e("tr",[n])]),e("tbody",[r])])}},PanelYear:{name:"panelYear",props:{value:null,firstYear:Number},methods:{selectYear:function(e){this.$emit("select",e)}},render:function(e){var t=this,n=10*Math.floor(this.firstYear/10),a=this.value&&new Date(this.value).getFullYear(),r=Array.apply(null,{length:10}).map(function(r,i){var s=n+i;return e("span",{class:{cell:!0,actived:a===s},on:{click:t.selectYear.bind(t,s)}},[s])});return e("div",{class:"mx-panel mx-panel-year"},[r])}},PanelMonth:{name:"panelMonth",mixins:[p],props:{value:null,calendarYear:{default:(new Date).getFullYear()}},methods:{selectMonth:function(e){this.$emit("select",e)}},render:function(e){var t=this,n=this.t("months"),a=this.value&&new Date(this.value).getFullYear(),r=this.value&&new Date(this.value).getMonth();return n=n.map(function(n,i){return e("span",{class:{cell:!0,actived:a===t.calendarYear&&r===i},on:{click:t.selectMonth.bind(t,i)}},[n])}),e("div",{class:"mx-panel mx-panel-month"},[n])}},PanelTime:{name:"panelTime",props:{timePickerOptions:{type:[Object,Function],default:function(){return null}},minuteStep:{type:Number,default:0,validator:function(e){return e>=0&&e<=60}},value:null,disabledTime:Function},computed:{currentHours:function(){return new Date(this.value).getHours()},currentMinutes:function(){return new Date(this.value).getMinutes()},currentSeconds:function(){return new Date(this.value).getSeconds()}},methods:{stringifyText:function(e){return("00"+e).slice(String(e).length)},selectTime:function(e){"function"==typeof this.disabledTime&&this.disabledTime(e)||this.$emit("select",new Date(e))},getTimeSelectOptions:function(){var e=[],t=this.timePickerOptions;if(!t)return[];if("function"==typeof t)return t()||[];var n=u(t.start),a=u(t.end),r=u(t.step);if(n&&a&&r)for(var i=n.minutes+60*n.hours,s=a.minutes+60*a.hours,o=r.minutes+60*r.hours,l=Math.floor((s-i)/o),d=0;d<=l;d++){var h=i+d*o,p={hours:Math.floor(h/60),minutes:h%60};e.push({value:p,label:c(p)})}return e}},render:function(e){var t=this,n=new Date(this.value),a="function"==typeof this.disabledTime&&this.disabledTime,r=this.getTimeSelectOptions();if(Array.isArray(r)&&r.length)return r=r.map(function(r){var i=r.value.hours,s=r.value.minutes,o=new Date(n).setHours(i,s,0);return e("li",{class:{"mx-time-picker-item":!0,cell:!0,actived:i===t.currentHours&&s===t.currentMinutes,disabled:a&&a(o)},on:{click:t.selectTime.bind(t,o)}},[r.label])}),e("div",{class:"mx-panel mx-panel-time"},[e("ul",{class:"mx-time-list"},[r])]);var i=Array.apply(null,{length:24}).map(function(r,i){var s=new Date(n).setHours(i);return e("li",{class:{cell:!0,actived:i===t.currentHours,disabled:a&&a(s)},on:{click:t.selectTime.bind(t,s)}},[t.stringifyText(i)])}),s=this.minuteStep||1,o=parseInt(60/s),l=Array.apply(null,{length:o}).map(function(r,i){var o=i*s,l=new Date(n).setMinutes(o);return e("li",{class:{cell:!0,actived:o===t.currentMinutes,disabled:a&&a(l)},on:{click:t.selectTime.bind(t,l)}},[t.stringifyText(o)])}),u=Array.apply(null,{length:60}).map(function(r,i){var s=new Date(n).setSeconds(i);return e("li",{class:{cell:!0,actived:i===t.currentSeconds,disabled:a&&a(s)},on:{click:t.selectTime.bind(t,s)}},[t.stringifyText(i)])}),c=[i,l];return 0===this.minuteStep&&c.push(u),c=c.map(function(t){return e("ul",{class:"mx-time-list",style:{width:100/c.length+"%"}},[t])}),e("div",{class:"mx-panel mx-panel-time"},[c])}}},mixins:[p],props:{value:{default:null,validator:function(e){return null===e||o(e)}},startAt:null,endAt:null,visible:{type:Boolean,default:!1},type:{type:String,default:"date"},firstDayOfWeek:{default:7,type:Number,validator:function(e){return e>=1&&e<=7}},notBefore:{default:null,validator:function(e){return!e||o(e)}},notAfter:{default:null,validator:function(e){return!e||o(e)}},disabledDays:{type:[Array,Function],default:function(){return[]}},minuteStep:{type:Number,default:0,validator:function(e){return e>=0&&e<=60}},timePickerOptions:{type:[Object,Function],default:function(){return null}}},data:function(){var e=new Date,t=e.getFullYear();return{panel:"DATE",dates:[],calendarMonth:e.getMonth(),calendarYear:t,firstYear:10*Math.floor(t/10)}},computed:{now:{get:function(){return new Date(this.calendarYear,this.calendarMonth).getTime()},set:function(e){var t=new Date(e);this.calendarYear=t.getFullYear(),this.calendarMonth=t.getMonth()}},timeHeader:function(){return this.value&&new Date(this.value).toLocaleDateString()},months:function(){return this.t("months")}},watch:{value:{immediate:!0,handler:"updateNow"},visible:{immediate:!0,handler:"init"},panel:{immediate:!0,handler:"handelPanelChange"}},methods:{handelPanelChange:function(e){var t=this;"YEAR"===e?this.firstYear=10*Math.floor(this.calendarYear/10):"TIME"===e&&this.$nextTick(function(){[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t.$el.querySelectorAll(".mx-panel-time .mx-time-list"))).forEach(function(e){!function(e,t){if(t){for(var n=[],a=t.offsetParent;a&&e!==a&&e.contains(a);)n.push(a),a=a.offsetParent;var r=t.offsetTop+n.reduce(function(e,t){return e+t.offsetTop},0),i=r+t.offsetHeight,s=e.scrollTop,o=s+e.clientHeight;r<s?e.scrollTop=r:i>o&&(e.scrollTop=i-e.clientHeight)}else e.scrollTop=0}(e,e.querySelector(".actived"))})})},init:function(){this.panel="DATE",this.updateNow(this.value)},updateNow:function(e){this.now=e?new Date(e):new Date},isDisabledTime:function(e,t,n){var a=new Date(e).getTime(),r=this.notBefore&&a<new Date(this.notBefore),i=this.notAfter&&a>new Date(this.notAfter);return t=(t=void 0===t?this.startAt:t)&&a<new Date(t),n=(n=void 0===n?this.endAt:n)&&a>new Date(n),r||i||t||n},isDisabledDate:function(e,t,n){var a=new Date(e).getTime(),r=this.notBefore&&a<new Date(this.notBefore).setHours(0,0,0,0),i=this.notAfter&&a>new Date(this.notAfter).setHours(0,0,0,0);t=(t=void 0===t?this.startAt:t)&&a<new Date(t).setHours(0,0,0,0),n=(n=void 0===n?this.endAt:n)&&a>new Date(n).setHours(0,0,0,0);var s=!1;return Array.isArray(this.disabledDays)?s=this.disabledDays.some(function(e){return new Date(e).setHours(0,0,0,0)===a}):"function"==typeof this.disabledDays&&(s=this.disabledDays(new Date(e))),r||i||s||t||n},selectDate:function(e){if("datetime"===this.type){var t=new Date(e);return s(this.value)&&t.setHours(this.value.getHours(),this.value.getMinutes(),this.value.getSeconds()),this.isDisabledTime(t)&&(t.setHours(0,0,0,0),this.notBefore&&t.getTime()<new Date(this.notBefore).getTime()&&(t=new Date(this.notBefore)),this.startAt&&t.getTime()<new Date(this.startAt).getTime()&&(t=new Date(this.startAt))),this.$emit("select-time",t),void(this.panel="TIME")}this.$emit("select-date",e)},selectYear:function(e){this.changeCalendarYear(e),this.showPanelMonth()},selectMonth:function(e){this.changeCalendarMonth(e),this.showPanelDate()},selectTime:function(e){this.$emit("select-time",e)},changeCalendarYear:function(e){this.now=new Date(e,this.calendarMonth)},changeCalendarMonth:function(e){this.now=new Date(this.calendarYear,e)},handleIconMonth:function(e){this.changeCalendarMonth(this.calendarMonth+e)},handleIconYear:function(e){"YEAR"===this.panel?this.changePanelYears(e):this.changeCalendarYear(this.calendarYear+e)},handleBtnYear:function(){"YEAR"===this.panel?this.showPanelDate():this.showPanelYear()},handleBtnMonth:function(){"MONTH"===this.panel?this.showPanelDate():this.showPanelMonth()},changePanelYears:function(e){this.firstYear=this.firstYear+10*e},showPanelDate:function(){this.panel="DATE"},showPanelYear:function(){this.panel="YEAR"},showPanelMonth:function(){this.panel="MONTH"}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-calendar"},[n("div",{staticClass:"mx-calendar-header"},[n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==e.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-icon-last-year",on:{click:function(t){e.handleIconYear(-1)}}},[e._v("«")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===e.panel,expression:"panel === 'DATE'"}],staticClass:"mx-icon-last-month",on:{click:function(t){e.handleIconMonth(-1)}}},[e._v("‹")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==e.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-icon-next-year",on:{click:function(t){e.handleIconYear(1)}}},[e._v("»")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===e.panel,expression:"panel === 'DATE'"}],staticClass:"mx-icon-next-month",on:{click:function(t){e.handleIconMonth(1)}}},[e._v("›")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==e.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-current-month",on:{click:e.handleBtnMonth}},[e._v(e._s(e.months[e.calendarMonth]))]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==e.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-current-year",on:{click:e.handleBtnYear}},[e._v(e._s(e.calendarYear))]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"===e.panel,expression:"panel === 'TIME'"}],staticClass:"mx-time-header",on:{click:e.showPanelDate}},[e._v(e._s(e.timeHeader))])]),e._v(" "),n("div",{staticClass:"mx-calendar-content"},[n("panel-date",{directives:[{name:"show",rawName:"v-show",value:"DATE"===e.panel,expression:"panel === 'DATE'"}],attrs:{value:e.value,"calendar-month":e.calendarMonth,"calendar-year":e.calendarYear,"start-at":e.startAt,"end-at":e.endAt,"first-day-of-week":e.firstDayOfWeek,"disabled-date":e.isDisabledDate},on:{select:e.selectDate}}),e._v(" "),n("panel-year",{directives:[{name:"show",rawName:"v-show",value:"YEAR"===e.panel,expression:"panel === 'YEAR'"}],attrs:{value:e.value,"first-year":e.firstYear},on:{select:e.selectYear}}),e._v(" "),n("panel-month",{directives:[{name:"show",rawName:"v-show",value:"MONTH"===e.panel,expression:"panel === 'MONTH'"}],attrs:{value:e.value,"calendar-year":e.calendarYear},on:{select:e.selectMonth}}),e._v(" "),n("panel-time",{directives:[{name:"show",rawName:"v-show",value:"TIME"===e.panel,expression:"panel === 'TIME'"}],attrs:{"minute-step":e.minuteStep,"time-picker-options":e.timePickerOptions,value:e.value,"disabled-time":e.isDisabledTime},on:{select:e.selectTime}})],1)])},[],!1,null,null,null).exports,x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=g({name:"DatePicker",components:{CalendarPanel:v},mixins:[p],directives:{clickoutside:i},props:{value:null,placeholder:{type:String,default:null},lang:{type:[String,Object],default:"zh"},format:{type:String,default:"YYYY-MM-DD"},range:{type:Boolean,default:!1},rangeSeparator:{type:String,default:"~"},width:{type:[String,Number],default:null},confirmText:{type:String,default:"OK"},confirm:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},shortcuts:{type:[Boolean,Array],default:!0},inputName:{type:String,default:"date"},inputClass:{type:[String,Array],default:"mx-input"}},data:function(){return{currentValue:this.range?[null,null]:null,userInput:null,popupVisible:!1,position:{}}},watch:{value:{immediate:!0,handler:"handleValueChange"},popupVisible:function(e){e?this.initCalendar():this.userInput=null}},computed:{language:function(){return e=this.lang,"[object Object]"===Object.prototype.toString.call(e)?x({},d.en,this.lang):d[this.lang]||d.en;var e},innerPlaceholder:function(){return"string"==typeof this.placeholder?this.placeholder:this.range?this.t("placeholder.dateRange"):this.t("placeholder.date")},text:function(){return null!==this.userInput?this.userInput:this.range?l(this.value)?this.stringify(this.value[0])+" "+this.rangeSeparator+" "+this.stringify(this.value[1]):"":o(this.value)?this.stringify(this.value):""},computedWidth:function(){return"number"==typeof this.width||"string"==typeof this.width&&/^\d+$/.test(this.width)?this.width+"px":this.width},showClearIcon:function(){return!this.disabled&&this.clearable&&(this.range?l(this.value):o(this.value))},innnerShortcuts:function(){if(Array.isArray(this.shortcuts))return this.shortcuts;if(!1===this.shortcuts)return[];var e=this.t("pickers");return[{text:e[0],start:new Date,end:new Date(Date.now()+6048e5)},{text:e[1],start:new Date,end:new Date(Date.now()+2592e6)},{text:e[2],start:new Date(Date.now()-6048e5),end:new Date},{text:e[3],start:new Date(Date.now()-2592e6),end:new Date}]}},methods:{initCalendar:function(){this.handleValueChange(this.value),this.displayPopup()},stringify:function(e,t){return t=t||this.format,r.a.format(e,t)},parseDate:function(e,t){try{return t=t||this.format,r.a.parse(e,t)}catch(e){return!1}},dateEqual:function(e,t){return s(e)&&s(t)&&e.getTime()===t.getTime()},rangeEqual:function(e,t){var n=this;return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every(function(e,a){return n.dateEqual(e,t[a])})},selectRange:function(e){this.currentValue=[new Date(e.start),new Date(e.end)],this.updateDate(!0)},clearDate:function(){var e=this.range?[null,null]:null;this.currentValue=e,this.updateDate(!0)},confirmDate:function(){(this.range?l(this.currentValue):o(this.currentValue))&&this.updateDate(!0),this.$emit("confirm",this.currentValue),this.closePopup()},updateDate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!(this.confirm&&!e||this.disabled)&&((this.range?!this.rangeEqual(this.value,this.currentValue):!this.dateEqual(this.value,this.currentValue))&&(this.$emit("input",this.currentValue),this.$emit("change",this.currentValue),!0))},handleValueChange:function(e){this.range?this.currentValue=l(e)?[new Date(e[0]),new Date(e[1])]:[null,null]:this.currentValue=o(e)?new Date(e):null},selectDate:function(e){this.currentValue=e,this.updateDate()&&this.closePopup()},selectStartDate:function(e){this.$set(this.currentValue,0,e),this.currentValue[1]&&this.updateDate()},selectEndDate:function(e){this.$set(this.currentValue,1,e),this.currentValue[0]&&this.updateDate()},selectTime:function(e){this.currentValue=e,this.updateDate()},selectStartTime:function(e){this.selectStartDate(e)},selectEndTime:function(e){this.selectEndDate(e)},showPopup:function(){this.disabled||(this.popupVisible=!0)},closePopup:function(){this.popupVisible=!1},displayPopup:function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=this.$el.getBoundingClientRect(),a=this.$refs.calendar.getBoundingClientRect();this.position={},e-n.left<a.width&&n.right<a.width?this.position.left=1-n.left+"px":n.left+n.width/2<=e/2?this.position.left=0:this.position.right=0,n.top<=a.height+1&&t-n.bottom<=a.height+1?this.position.top=t-n.top-a.height-1+"px":n.top+n.height/2<=t/2?this.position.top="100%":this.position.bottom="100%"},handleInput:function(e){this.userInput=e.target.value},handleChange:function(e){var t=e.target.value;if(this.editable&&null!==this.userInput){var n=this.$children[0],a="date"===n.type?n.isDisabledDate:n.isDisabledTime;if(this.range){var r=t.split(" "+this.rangeSeparator+" ");if(2===r.length){var i=this.parseDate(r[0],this.format),s=this.parseDate(r[1],this.format);if(i&&s&&!a(i,null,s)&&!a(s,i,null))return this.currentValue=[i,s],this.updateDate(!0),void this.closePopup()}}else{var o=this.parseDate(t,this.format);if(o&&!a(o,null,null))return this.currentValue=o,this.updateDate(!0),void this.closePopup()}this.$emit("input-error",t)}}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.closePopup,expression:"closePopup"}],staticClass:"mx-datepicker",class:{"mx-datepicker-range":e.range,disabled:e.disabled},style:{width:e.computedWidth}},[n("div",{staticClass:"mx-input-wrapper",on:{click:e.showPopup}},[n("input",{ref:"input",class:e.inputClass,attrs:{type:"text",name:e.inputName,disabled:e.disabled,readonly:!e.editable,placeholder:e.innerPlaceholder},domProps:{value:e.text},on:{input:e.handleInput,change:e.handleChange}}),e._v(" "),n("span",{staticClass:"mx-input-append"},[e._t("calendar-icon",[n("svg",{staticClass:"mx-calendar-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 200 200"}},[n("rect",{attrs:{x:"13",y:"29",rx:"14",ry:"14",width:"174",height:"158",fill:"transparent"}}),e._v(" "),n("line",{attrs:{x1:"46",x2:"46",y1:"8",y2:"50"}}),e._v(" "),n("line",{attrs:{x1:"154",x2:"154",y1:"8",y2:"50"}}),e._v(" "),n("line",{attrs:{x1:"13",x2:"187",y1:"70",y2:"70"}}),e._v(" "),n("text",{attrs:{x:"50%",y:"135","font-size":"90","stroke-width":"1","text-anchor":"middle","dominant-baseline":"middle"}},[e._v(e._s((new Date).getDate()))])])])],2),e._v(" "),e.showClearIcon?n("span",{staticClass:"mx-input-append mx-clear-wrapper",on:{click:function(t){return t.stopPropagation(),e.clearDate(t)}}},[e._t("mx-clear-icon",[n("i",{staticClass:"mx-input-icon mx-clear-icon"})])],2):e._e()]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.popupVisible,expression:"popupVisible"}],ref:"calendar",staticClass:"mx-datepicker-popup",style:e.position},[e._t("header",[e.range&&e.innnerShortcuts.length?n("div",{staticClass:"mx-shortcuts-wrapper"},e._l(e.innnerShortcuts,function(t,a){return n("span",{key:a,staticClass:"mx-shortcuts",on:{click:function(n){e.selectRange(t)}}},[e._v(e._s(t.text))])})):e._e()]),e._v(" "),e.range?n("div",{staticClass:"mx-range-wrapper"},[n("calendar-panel",e._b({staticStyle:{"box-shadow":"1px 0 rgba(0, 0, 0, .1)"},attrs:{value:e.currentValue[0],"end-at":e.currentValue[1],"start-at":null,visible:e.popupVisible},on:{"select-date":e.selectStartDate,"select-time":e.selectStartTime}},"calendar-panel",e.$attrs,!1)),e._v(" "),n("calendar-panel",e._b({attrs:{value:e.currentValue[1],"start-at":e.currentValue[0],"end-at":null,visible:e.popupVisible},on:{"select-date":e.selectEndDate,"select-time":e.selectEndTime}},"calendar-panel",e.$attrs,!1))],1):n("calendar-panel",e._b({attrs:{value:e.currentValue,visible:e.popupVisible},on:{"select-date":e.selectDate,"select-time":e.selectTime}},"calendar-panel",e.$attrs,!1)),e._v(" "),e._t("footer",[e.confirm?n("div",{staticClass:"mx-datepicker-footer"},[n("button",{staticClass:"mx-datepicker-btn mx-datepicker-btn-confirm",attrs:{type:"button"},on:{click:e.confirmDate}},[e._v(e._s(e.confirmText))])]):e._e()])],2)])},[],!1,null,null,null).exports;n(6);b.install=function(e){e.component(b.name,b)};t.default=b},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){(e.exports=n(4)()).push([e.i,"@charset \"UTF-8\";\n.mx-datepicker {\n  position: relative;\n  display: inline-block;\n  width: 210px;\n  color: #73879c;\n  font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', sans-serif; }\n  .mx-datepicker * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .mx-datepicker.disabled {\n    opacity: 0.7;\n    cursor: not-allowed; }\n\n.mx-datepicker-range {\n  width: 320px; }\n\n.mx-datepicker-popup {\n  position: absolute;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1000; }\n\n.mx-input-wrapper {\n  position: relative; }\n  .mx-input-wrapper .mx-clear-wrapper {\n    display: none; }\n  .mx-input-wrapper:hover .mx-clear-wrapper {\n    display: block; }\n\n.mx-input {\n  display: inline-block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 30px;\n  padding-left: 10px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #555;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .mx-input:disabled, .mx-input.disabled {\n    opacity: 0.7;\n    cursor: not-allowed; }\n  .mx-input:focus {\n    outline: none; }\n\n.mx-input-append {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 100%;\n  padding: 6px;\n  background-color: #fff;\n  background-clip: content-box; }\n\n.mx-input-icon {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-style: normal;\n  color: #555;\n  text-align: center;\n  cursor: pointer; }\n\n.mx-calendar-icon {\n  width: 100%;\n  height: 100%;\n  color: #555;\n  stroke-width: 8px;\n  stroke: currentColor;\n  fill: currentColor; }\n\n.mx-clear-icon::before {\n  display: inline-block;\n  content: '\\2716';\n  vertical-align: middle; }\n\n.mx-clear-icon::after {\n  content: '';\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle; }\n\n.mx-range-wrapper {\n  width: 496px;\n  overflow: hidden; }\n\n.mx-shortcuts-wrapper {\n  text-align: left;\n  padding: 0 12px;\n  line-height: 34px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n  .mx-shortcuts-wrapper .mx-shortcuts {\n    white-space: nowrap;\n    cursor: pointer; }\n    .mx-shortcuts-wrapper .mx-shortcuts:hover {\n      color: #419dec; }\n    .mx-shortcuts-wrapper .mx-shortcuts:after {\n      content: '|';\n      margin: 0 10px;\n      color: #48576a; }\n\n.mx-datepicker-footer {\n  padding: 4px;\n  clear: both;\n  text-align: right;\n  border-top: 1px solid rgba(0, 0, 0, 0.05); }\n\n.mx-datepicker-btn {\n  font-size: 12px;\n  line-height: 1;\n  padding: 7px 15px;\n  margin: 0 5px;\n  cursor: pointer;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  border-radius: 3px; }\n\n.mx-datepicker-btn-confirm {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  color: #73879c; }\n  .mx-datepicker-btn-confirm:hover {\n    color: #1284e7;\n    border-color: #1284e7; }\n\n/* 日历组件 */\n.mx-calendar {\n  float: left;\n  color: #73879c;\n  padding: 6px 12px;\n  font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,sans-serif; }\n  .mx-calendar * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n.mx-calendar-header {\n  padding: 0 4px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  overflow: hidden; }\n  .mx-calendar-header > a {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer; }\n    .mx-calendar-header > a:hover {\n      color: #419dec; }\n  .mx-icon-last-month, .mx-icon-last-year,\n  .mx-icon-next-month,\n  .mx-icon-next-year {\n    padding: 0 6px;\n    font-size: 20px;\n    line-height: 30px; }\n  .mx-icon-last-month, .mx-icon-last-year {\n    float: left; }\n  \n  .mx-icon-next-month,\n  .mx-icon-next-year {\n    float: right; }\n\n.mx-calendar-content {\n  width: 224px;\n  height: 224px; }\n  .mx-calendar-content .cell {\n    cursor: pointer; }\n    .mx-calendar-content .cell:hover {\n      background-color: #eaf8fe; }\n    .mx-calendar-content .cell.actived {\n      color: #fff;\n      background-color: #1284e7; }\n    .mx-calendar-content .cell.inrange {\n      background-color: #eaf8fe; }\n    .mx-calendar-content .cell.disabled {\n      cursor: not-allowed;\n      color: #ccc;\n      background-color: #f3f3f3; }\n\n.mx-panel {\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.mx-panel-date {\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0; }\n  .mx-panel-date td, .mx-panel-date th {\n    font-size: 12px;\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    overflow: hidden;\n    text-align: center; }\n  .mx-panel-date td.today {\n    color: #2a90e9; }\n  .mx-panel-date td.last-month, .mx-panel-date td.next-month {\n    color: #ddd; }\n\n.mx-panel-year {\n  padding: 7px 0; }\n  .mx-panel-year .cell {\n    display: inline-block;\n    width: 40%;\n    margin: 1px 5%;\n    line-height: 40px; }\n\n.mx-panel-month .cell {\n  display: inline-block;\n  width: 30%;\n  line-height: 40px;\n  margin: 8px 1.5%; }\n\n.mx-time-list {\n  position: relative;\n  float: left;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  width: 100%;\n  height: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  overflow-y: auto;\n  /* 滚动条滑块 */ }\n  .mx-time-list .mx-time-picker-item {\n    display: block;\n    text-align: left;\n    padding-left: 10px; }\n  .mx-time-list:first-child {\n    border-left: 0; }\n  .mx-time-list .cell {\n    width: 100%;\n    font-size: 12px;\n    height: 30px;\n    line-height: 30px; }\n  .mx-time-list::-webkit-scrollbar {\n    width: 8px;\n    height: 8px; }\n  .mx-time-list::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.05);\n    border-radius: 10px;\n    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);\n            box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1); }\n  .mx-time-list:hover::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.2); }\n",""])},function(e,t,n){var a=n(5);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(2).default)("511dbeb0",a,!0,{})}])});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function(e){e.en=Object.assign(e.en||{},{a:'Cannot upload file:',b:'Block quote',c:'Bold',d:'Italic',e:'image widget',f:'Enter image caption',g:'Choose heading',h:'Heading',i:'Full size image',j:'Side image',k:'Left aligned image',l:'Centered image',m:'Right aligned image',n:'Upload failed',o:'Insert image',p:'Numbered List',q:'Bulleted List',r:'Link',s:'Change image text alternative',t:'Paragraph',u:'Heading 1',v:'Heading 2',w:'Heading 3',x:'Save',y:'Cancel',z:'Link URL',aa:'Unlink',ab:'Edit link',ac:'Open link in new tab',ad:'This link has no URL',ae:'Rich Text Editor, %0',af:'Rich Text Editor',ag:'Undo',ah:'Redo',ai:'Text alternative'})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(e,t){ true?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports.ClassicEditor=t():e.ClassicEditor=t()}('undefined'==typeof self?this:self,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(o,'a',o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=6)}([function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=g[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(c(n.parts[r],t))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(c(n.parts[r],t));g[n.id]={id:n.id,refs:1,parts:a}}}}function i(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],d=i[3],c={css:s,media:l,sourceMap:d};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]})}return o}function r(e,t){var o=b(e.insertInto);if(!o)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var n=w[w.length-1];if('top'===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),w.push(t);else if('bottom'===e.insertAt)o.appendChild(t);else if('object'==typeof e.insertAt&&e.insertAt.before){var i=b(e.insertInto+' '+e.insertAt.before);o.insertBefore(t,i)}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);0<=t&&w.splice(t,1)}function s(e){var t=document.createElement('style');return e.attrs.type='text/css',d(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement('link');return e.attrs.type='text/css',e.attrs.rel='stylesheet',d(t,e.attrs),r(e,t),t}function d(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function c(e,t){var o,n,i,r;if(t.transform&&e.css)if(r=t.transform(e.css),r)e.css=r;else return function(){};if(t.singleton){var d=_++;o=k||(k=s(t)),n=u.bind(null,o,d,!1),i=u.bind(null,o,d,!0)}else e.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(o=l(t),n=p.bind(null,o,t),i=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(t),n=m.bind(null,o),i=function(){a(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function u(e,t,o,n){var i=o?'':n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute('media',n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t,o){var n=o.css,i=o.sourceMap,r=t.convertToAbsoluteUrls===void 0&&i;(t.convertToAbsoluteUrls||r)&&(n=v(n)),i&&(n+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+' */');var a=new Blob([n],{type:'text/css'}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},f=function(e){var t;return function(){return'undefined'==typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){return document.querySelector(e)},b=function(){var e={};return function(t){if('function'==typeof t)return t();if('undefined'==typeof e[t]){var o=h.call(this,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),k=null,_=0,w=[],v=o(13);e.exports=function(e,t){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');t=t||{},t.attrs='object'==typeof t.attrs?t.attrs:{},t.singleton||'boolean'==typeof t.singleton||(t.singleton=f()),t.insertInto||(t.insertInto='head'),t.insertAt||(t.insertAt='bottom');var o=i(e,t);return n(o,t),function(e){for(var r=[],a=0;a<o.length;a++){var s=o[a],l=g[s.id];l.refs--,r.push(l)}if(e){var d=i(e,t);n(d,t)}for(var a=0,l;a<r.length;a++)if(l=r[a],0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join('\n')}}()},function(e,t,o){'use strict';(function(e,n){var i=o(8),r={function:!0,object:!0},a=r[typeof exports]&&exports&&!exports.nodeType?exports:void 0,s=r[typeof e]&&e&&!e.nodeType?e:void 0,l=Object(i.a)(a&&s&&'object'==typeof n&&n),d=Object(i.a)(r[typeof self]&&self),c=Object(i.a)(r[typeof window]&&window),u=Object(i.a)(r[typeof this]&&this),m=l||c!==(u&&u.window)&&c||d||u||Function('return this')();t.a=m}).call(t,o(2)(e),o(7))},function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,'loaded',{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,'id',{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,'exports',{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" fill="#000" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" fill="#000" fill-rule="evenodd"/></svg>'},function(e,t,o){var n=o(61);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e,t,o){'use strict';function n(e){const t=e.match(/^([^:]+):/);return t?e+` Read more: ${Xa}#error-${t[1]}\n`:e}function i(){let e='e';for(let t=0;8>t;t++)e+=za(65536*(1+Math.random())).toString(16).substring(1);return e}function r(e,t){return e[is]&&e[is][t]?e[is][t].emitter:null}function a(e,t){e[rs]||(e[rs]=t||i())}function s(e){return e[rs]}function l(e){return e._events||Object.defineProperty(e,'_events',{value:{}}),e._events}function d(){return{callbacks:[],childEvents:[]}}function c(e,t){const o=l(e);if(o[t])return;let n=t,i=null;const r=[];for(;''!==n&&!o[n];)o[n]=d(),r.push(o[n]),i&&o[n].childEvents.push(i),i=n,n=n.substr(0,n.lastIndexOf(':'));if(''!==n){for(const e of r)e.callbacks=o[n].callbacks.slice();o[n].childEvents.push(i)}}function u(e,t){const o=l(e)[t];if(!o)return[];let n=[o.callbacks];for(let r=0;r<o.childEvents.length;r++){const t=u(e,o.childEvents[r]);n=n.concat(t)}return n}function m(e,t){let o;return e._events&&(o=e._events[t])&&o.callbacks.length?o.callbacks:-1<t.indexOf(':')?m(e,t.substr(0,t.lastIndexOf(':'))):null}function p(e,t,o){for(let[n,i]of e){i?'function'==typeof i&&(i=i(t.name)):i=t.name;const e=new ts(t.source,i);e.path=[...t.path],n.fire(e,...o)}}function g(e,t,o){const n=u(e,t);for(const r of n)for(let e=0;e<r.length;e++)r[e].callback==o&&(r.splice(e,1),e--)}function f(e,...t){t.forEach((t)=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((o)=>{if(!(o in e.prototype)){const n=Object.getOwnPropertyDescriptor(t,o);n.enumerable=!1,Object.defineProperty(e.prototype,o,n)}})})}function h(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function b(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function k(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}function _(e){this.__data__=new ms(e)}function w(e,t,o){var n=e[t];Ws.call(e,t)&&ls(n,o)&&(o!==void 0||t in e)||(e[t]=o)}function v(e,t){return Gs.call(e,t)||'object'==typeof e&&t in e&&null===qa(e)}function y(e){return yl(Object(e))}function x(e){return ql.call(e)}function C(e,t,o,n,i,r,a){var s;if(n&&(s=r?n(e,i,r,a):n(e)),void 0!==s)return s;if(!ps(e))return e;var l=dl(e);if(!l){var d=$l(e),c=d==xd||d==Cd;if(Object(vd.a)(e))return wl(e,t);if(d==Ad||d==yd||c&&!r){if(Wa(e))return r?e:{};if(s=wd(c?{}:e),!t)return Cl(e,_l(s,e))}else{if(!Td[d])return r?e:{};s=bd(e,d,C,t)}}else if(s=Yl(e),!t)return vl(e,s);a||(a=new zs);var u=a.get(e);if(u)return u;if(a.set(e,s),!l)var m=o?Pl(e):kl(e);return js(m||e,function(i,r){m&&(r=i,i=e[r]),Us(s,r,C(i,t,o,n,r,e,a))}),s}function A(e,t){const o=La(e.length,t.length);for(let n=0;n<o;n++)if(e[n]!=t[n])return n;return e.length==t.length?'same':e.length<t.length?'prefix':'extension'}function T(e){const t=new Map;for(const o in e)t.set(o,e[o]);return t}function P(e){return!!(e&&e[Symbol.iterator])}function E(e,t){if('function'==typeof t)return t(e);const o={};return t.name&&(o.name=S(t.name,e.name),!o.name)?null:t.attributes&&(o.attributes=O(t.attributes,e),!o.attributes)?null:!(t.classes&&(o.classes=R(t.classes,e),!o.classes))&&!(t.styles&&(o.styles=I(t.styles,e),!o.styles))&&o}function S(e,t){return e instanceof RegExp?e.test(t):e===t}function O(e,t){const o=[];for(const n in e){const i=e[n];if(t.hasAttribute(n)){const e=t.getAttribute(n);if(!0===i)o.push(n);else if(i instanceof RegExp){if(i.test(e))o.push(n);else return null;}else if(e===i)o.push(n);else return null}else return null}return o}function R(e,t){const o=[];for(const n of e)if(n instanceof RegExp){const e=t.getClassNames();for(const t of e)n.test(t)&&o.push(t);if(0===o.length)return null}else if(t.hasClass(n))o.push(n);else return null;return o}function I(e,t){const o=[];for(const n in e){const i=e[n];if(t.hasStyle(n)){const e=t.getStyle(n);if(i instanceof RegExp){if(i.test(e))o.push(n);else return null;}else if(e===i)o.push(n);else return null}else return null}return o}function V(e){e=Qa(e)?T(e):new Map(e);for(const[t,o]of e)null===o?e.delete(t):'string'!=typeof o&&e.set(t,o+'');return e}function F(e,t){let o=null,n=0,r=0,a=null;if(e.clear(),''!==t){';'!=t.charAt(t.length-1)&&(t+=';');for(let s=0;s<t.length;s++){const i=t.charAt(s);if(null===o)switch(i){case':':a||(a=t.substr(n,s-n),r=s+1);break;case'"':case'\'':o=i;break;case';':const l=t.substr(r,s-r);a&&e.set(a.trim(),l.trim()),a=null,n=s+1;}else i===o&&(o=null)}}}function N(e,t){const o=t.split(/\s+/);e.clear(),o.forEach((t)=>e.add(t))}function M(e){return'string'==typeof e?[new Od(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new Od(e):e instanceof Rd?new Od(e.data):e))}function D(){for(const e of this.getChildren())if(!e.is('uiElement'))return null;return this.childCount}function B(e,t,o){if(!ps(o))return!1;var n=typeof t;return!('number'==n?!(tl(o)&&fl(t,o.length)):!('string'==n&&t in o))&&ls(o[t],e)}function L(e){e=null==e?e:Object(e);var t=[];for(var o in e)t.push(o);return t}function z(e){pc in e||(Object.defineProperty(e,pc,{value:new Map}),Object.defineProperty(e,gc,{value:new Map}),Object.defineProperty(e,fc,{value:new Map}))}function j(...e){const t=H(...e),o=Array.from(this._bindings.keys()),n=o.length;if(!t.callback&&1<t.to.length)throw new Za('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');if(1<n&&t.callback)throw new Za('observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.');t.to.forEach((e)=>{if(e.properties.length&&e.properties.length!==n)throw new Za('observable-bind-to-properties-length: The number of properties must match.');e.properties.length||(e.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(o[0]).callback=t.callback),J(this._observable,this._to),G(this),this._bindProperties.forEach((e)=>{$(this._observable,e)})}function q(e,t,o){if(1<this._bindings.size)throw new Za('observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().');this.to(...W(e,t),o)}function W(e,t){const o=e.map((e)=>[e,t]);return Array.prototype.concat.apply([],o)}function U(e){return e.every((e)=>'string'==typeof e)}function H(...e){if(!e.length)throw new Za('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');const t={to:[]};let o;return'function'==typeof e[e.length-1]&&(t.callback=e.pop()),e.forEach((e)=>{if('string'==typeof e)o.properties.push(e);else if('object'==typeof e)o={observable:e,properties:[]},t.to.push(o);else throw new Za('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')}),t}function K(e,t,o,n){const i=e[gc],r=i.get(o),a=r||{};a[n]||(a[n]=new Set),a[n].add(t),r||i.set(o,a)}function G(e){let t;e._bindings.forEach((o,n)=>{e._to.forEach((i)=>{t=i.properties[o.callback?0:e._bindProperties.indexOf(n)],o.to.push([i.observable,t]),K(e._observable,o,i.observable,t)})})}function $(e,t){const o=e[fc],n=o.get(t);let i;n.callback?i=n.callback.apply(e,n.to.map((e)=>e[0][e[1]])):(i=n.to[0],i=i[0][i[1]]),e.hasOwnProperty(t)?e[t]=i:e.set(t,i)}function J(e,t){t.forEach((t)=>{const o=e[gc];let n;o.get(t.observable)||e.listenTo(t.observable,'change',(i,r)=>{n=o.get(t.observable)[r],n&&n.forEach((t)=>{$(e,t.property)})})})}function Q(e){return!!(e.item.is('attributeElement')||e.item.is('uiElement'))}function Y(e){let t=0;for(const o of e)t++;return t}function X(){if(Z(this))return null;let e=this.parent;for(;e&&e.is('attributeElement');){if(1<Z(e))return null;e=e.parent}return!e||1<Z(e)?null:this.childCount}function Z(e){return Array.from(e.getChildren()).filter((e)=>!e.is('uiElement')).length}function ee(){return null}function te(e){let t;if('string'!=typeof e)t=e.keyCode+(e.altKey?Dc.alt:0)+(e.ctrlKey?Dc.ctrl:0)+(e.shiftKey?Dc.shift:0);else if(t=Dc[e.toLowerCase()],!t)throw new Za('keyboard-unknown-key: Unknown key name.',{key:e});return t}function oe(e){return'string'==typeof e&&(e=ie(e)),e.map((e)=>'string'==typeof e?te(e):e).reduce((e,t)=>t+e,0)}function ne(e){return Fc.isMac?ie(e).map((e)=>Mc[e.toLowerCase()]||e).reduce((e,t)=>e.slice(-1)in Nc?e+t:e+'+'+t):e}function ie(e){return e.split(/\s*\+\s*/)}function re(e){e.document.on('keydown',(t,o)=>se(t,o,e.domConverter))}function ae(){return null}function se(e,t,o){if(t.keyCode==Dc.arrowright){const e=t.domTarget.ownerDocument.defaultView.getSelection(),n=1==e.rangeCount&&e.getRangeAt(0).collapsed;if(n||t.shiftKey){const t=e.focusNode,i=e.focusOffset,r=o.domPositionToView(t,i);if(null===r)return;let a=!1;const s=r.getLastMatchingPosition((e)=>(e.item.is('uiElement')&&(a=!0),!!(e.item.is('uiElement')||e.item.is('attributeElement'))));if(a){const t=o.viewPositionToDom(s);n?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset)}}}}function le(e){return'string'==typeof e?[new Od(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new Od(e):e instanceof Rd?new Od(e.data):e))}function de(e){return Array.from(e.getChildren()).some((e)=>!e.is('uiElement'))}function ce(e){let t=e.parent;for(;!be(t);){if(!t)return;t=t.parent}return t}function ue(e,t){if(e.priority<t.priority)return!0;return!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function me(e){const t=e.nodeBefore;if(t&&t.is('text'))return new xc(t,t.data.length);const o=e.nodeAfter;return o&&o.is('text')?new xc(o,0):e}function pe(e){if(e.offset==e.parent.data.length)return new xc(e.parent.parent,e.parent.index+1);if(0===e.offset)return new xc(e.parent.parent,e.parent.index);const t=e.parent.data.slice(e.offset);return e.parent._data=e.parent.data.slice(0,e.offset),e.parent.parent._insertChild(e.parent.index+1,new Od(t)),new xc(e.parent.parent,e.parent.index+1)}function ge(e,t){const o=e.data.length;return e._data+=t.data,t._remove(),new xc(e,o)}function fe(e){return e.start.parent==e.end.parent&&e.start.parent.is('attributeElement')&&0===e.start.offset&&e.end.offset===e.start.parent.childCount}function he(e){for(const t of e){if(!jc.some((e)=>t instanceof e))throw new Za('view-writer-insert-invalid-node');t.is('text')||he(t.getChildren())}}function be(e){return e&&(e.is('containerElement')||e.is('documentFragment'))}function ke(e){const t=ce(e.start),o=ce(e.end);if(!t||!o||t!==o)throw new Za('view-writer-invalid-range-container')}function _e(e,t){return null===e.id&&null===t.id}function we(e){return e instanceof Text&&e.data.substr(0,Uc)===Hc}function ve(e){return e.data.length==Uc&&we(e)}function ye(e){return we(e)?e.data.slice(Uc):e.data}function xe(e,t){let o=Kc.get(t);return o||(o=t(window.document),Kc.set(t,o)),e.isEqualNode(o)}function Ce(e){e.document.on('keydown',Ae)}function Ae(e,t){if(t.keyCode==Dc.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(1==e.rangeCount&&e.getRangeAt(0).collapsed){const t=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;we(t)&&o<=Uc&&e.collapse(t,0)}}}function Te(e,t,o){function i(n){const i=(c[n-1]===void 0?-1:c[n-1])+1,u=c[n+1]===void 0?-1:c[n+1],m=i>u?-1:1;d[n+m]&&(d[n]=d[n+m].slice(0)),d[n]||(d[n]=[]),d[n].push(i>u?r:a);let p=Ba(i,u),g=p-n;for(;g<s&&p<l&&o(e[g],t[p]);)g++,p++,d[n].push('equal');return p}o=o||function(e,t){return e===t};let r,a;if(t.length<e.length){const o=e;e=t,t=o,r='delete',a='insert'}else r='insert',a='delete';const s=e.length,l=t.length,n=l-s,d={},c={};let u=0,m;do{for(m=-u;m<n;m++)c[m]=i(m);for(m=n+u;m>n;m--)c[m]=i(m);c[n]=i(n),u++}while(c[n]!==l);return d[n].slice(1)}function Pe(e,t,o){e.insertBefore(o,e.childNodes[t]||null)}function Ee(e){const t=e.parentNode;t&&t.removeChild(e)}function Se(e){return'[object Text]'==Object.prototype.toString.call(e)}function Oe(e){if('false'==e.getAttribute('contenteditable'))return!1;const t=e.findAncestor((e)=>e.hasAttribute('contenteditable'));return!t||'true'==t.getAttribute('contenteditable')}function Re(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function Ie(e){const t=[];for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function Ve(e,t){const o=Ie(e),n=Ie(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}function Fe(e,t,o){let n=Ie(e);return o&&(n=n.slice(n.indexOf(o)+1)),n.some((e)=>e.tagName&&t.includes(e.tagName.toLowerCase()))}function Ne(e,t){for(;e&&e!=$c.document;)t(e),e=e.parentNode}function Me(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}function De(e){return'[object Window]'==Object.prototype.toString.apply(e)}function Be(e){return e['data-ck-expando']||(e['data-ck-expando']=i())}function Le(e){var t=-1,o=e?e.length:0;for(this.__data__=new Ls;++t<o;)this.add(e[t])}function ze(e,t,o,n,i,r){var a=i&au,s=kl(e),l=s.length,d=kl(t),c=d.length;if(l!=c&&!a)return!1;for(var u=l,m;u--;)if(m=s[u],a?!(m in t):!$s(t,m))return!1;var p=r.get(e);if(p)return p==t;var g=!0;r.set(e,t);for(var f=a;++u<l;){m=s[u];var h=e[m],b=t[m];if(n)var k=a?n(b,h,m,t,e,r):n(h,b,m,e,t,r);if(void 0===k?!(h===b||o(h,b,n,i,r)):!k){g=!1;break}f||(f='constructor'==m)}if(g&&!f){var _=e.constructor,w=t.constructor;_!=w&&'constructor'in e&&'constructor'in t&&!('function'==typeof _&&_ instanceof _&&'function'==typeof w&&w instanceof w)&&(g=!1)}return r['delete'](e),g}function je(e,t,o,n,i){return!(e!==t)||(null!=e&&null!=t&&(ps(e)||Ua(t))?hu(e,t,je,o,n,i):e!==e&&t!==t)}function qe(e,t,o){function n(t){var o=b,n=k;return b=k=void 0,p=t,w=e.apply(n,o),w}function i(e){return p=e,v=setTimeout(s,t),g?n(e):w}function r(e){var o=e-m,n=e-p,i=t-o;return f?Pu(i,_-n):i}function a(e){var o=e-m,n=e-p;return!m||o>=t||0>o||f&&n>=_}function s(){var e=Cu();return a(e)?l(e):void(v=setTimeout(s,r(e)))}function l(e){return(clearTimeout(v),v=void 0,h&&b)?n(e):(b=k=void 0,w)}function d(){void 0!==v&&clearTimeout(v),m=p=0,b=k=v=void 0}function c(){return void 0===v?w:l(Cu())}function u(){var e=Cu(),o=a(e);if(b=arguments,k=this,m=e,o){if(void 0===v)return i(m);if(f)return clearTimeout(v),v=setTimeout(s,t),n(m)}return void 0===v&&(v=setTimeout(s,t)),w}var m=0,p=0,g=!1,f=!1,h=!0,b,k,_,w,v;if('function'!=typeof e)throw new TypeError(Au);return t=Kd(t)||0,ps(o)&&(g=!!o.leading,f='maxWait'in o,_=f?Tu(Kd(o.maxWait)||0,t):_,h='trailing'in o?!!o.trailing:h),u.cancel=d,u.flush=c,u}function We(e){return e==Dc.arrowright||e==Dc.arrowleft||e==Dc.arrowup||e==Dc.arrowdown}function Ue(e){return'[object Range]'==Object.prototype.toString.apply(e)}function He(e){const t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function Ke(e,t){for(const o of Du)e[o]=t[o]}function Ge(e){return!!Nu(e)&&e===e.ownerDocument.body}function $e({target:e,viewportOffset:t=0}){const o=tt(e);for(let n=o,i=null;n;){let r;r=n==o?nt(e):nt(i),Qe(r,()=>it(e,n));const a=it(e,n);Je(n,a,t),n.parent==n?n=null:(i=n.frameElement,n=n.parent)}}function Je(e,t,o){const n=t.clone().moveBy(0,o),i=t.clone().moveBy(0,-o),r=new Mu(e).excludeScrollbarsAndBorders();if(![i,n].every((e)=>r.contains(e))){let{scrollX:a,scrollY:s}=e;Xe(i,r)?s-=r.top-t.top+o:Ye(n,r)&&(s+=t.bottom-r.bottom+o),Ze(t,r)?a-=r.left-t.left+o:et(t,r)&&(a+=t.right-r.right+o),e.scrollTo(a,s)}}function Qe(e,t){const o=tt(e);for(let n,i;e!=o.document.body;)i=t(),n=new Mu(e).excludeScrollbarsAndBorders(),n.contains(i)||(Xe(i,n)?e.scrollTop-=n.top-i.top:Ye(i,n)&&(e.scrollTop+=i.bottom-n.bottom),Ze(i,n)?e.scrollLeft-=n.left-i.left:et(i,n)&&(e.scrollLeft+=i.right-n.right)),e=e.parentNode}function Ye(e,t){return e.bottom>t.bottom}function Xe(e,t){return e.top<t.top}function Ze(e,t){return e.left<t.left}function et(e,t){return e.right>t.right}function tt(e){return Ue(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function nt(e){if(Ue(e)){let t=e.commonAncestorContainer;return Se(t)&&(t=t.parentNode),t}return e.parentNode}function it(e,t){const o=tt(e),n=new Mu(e);if(o===t)return n;for(let i=o;i!=t;){const e=i.frameElement,t=new Mu(e).excludeScrollbarsAndBorders();n.moveBy(t.left,t.top),i=i.parent}return n}function rt(e){return Qa(e)?T(e):new Map(e)}function at(e){return'string'==typeof e?[new zu(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new zu(e):e instanceof ju?new zu(e.data,e.getAttributes()):e))}function st(e,t,o,n,i){return{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:n,length:i}}}function lt(e){const t=e.split(':');return 1<t.length?t[0]+':'+t[1]:t[0]}function dt(e,t,o){const n=t.getRange(),i=Array.from(e.getAncestors());i.shift(),i.reverse();const r=i.some((e)=>{if(n.containsItem(e)){const t=o.toViewElement(e);return!!t.getCustomProperty('addHighlight')}});return!r}function ct(e,t){return!t.has(e)&&(t.add(e),e.document.model.schema.isBlock(e)&&e.parent)}function ut(e,t){const o=e.parent.getAncestors({parentFirst:!0,includeSelf:!0}),n=o.find((e)=>ct(e,t));return o.forEach((e)=>t.add(e)),n}function mt(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document.model,'applyOperation',(t,o)=>{const n=o[0];!n.isDocumentOperation||e.has(n.type)&&pt.call(this,n)},{priority:'low'})}function pt(e){const t=e.type,o=e.delta.batch;let n,i;'insert'==t?n=Gu.createFromPositionAndShift(e.position,e.nodes.maxOffset):(n=Gu.createFromPositionAndShift(e.getMovedRangeStart(),e.howMany),i=e.sourcePosition);const r=n.end.offset-n.start.offset;let a=n.start;('move'==t||'remove'==t||'reinsert'==t)&&(a=a._getTransformedByInsertion(i,r));const s=this._getTransformedByDocumentChange(t,e.delta.type,a,r,i);('move'==t||'remove'==t||'reinsert'==t)&&3==s.length&&(s[2]=n);const l=Gu.createFromRanges(s),d=!l.isEqual(this),c=this.containsPosition(a),u=i&&(this.containsPosition(i)||this.start.isEqual(i));if(d){const e=Gu.createFromRange(this);this.start=l.start,this.end=l.end,this.fire('change:range',e,{type:t,batch:o,range:n,sourcePosition:i})}else(c||u)&&this.fire('change:content',Gu.createFromRange(this),{type:t,batch:o,range:n,sourcePosition:i})}function gt(e){return e instanceof ju||e instanceof zu?e.getAttributes():null}function ft(e,t){const o=e.document.differ;for(const n of o.getChanges()){if('insert'!=n.type)continue;const o=n.position.parent,i=n.length===o.maxOffset;i&&e.enqueueChange(t,(e)=>{const t=Array.from(o.getAttributeKeys()).filter((e)=>e.startsWith(Zu));for(const n of t)e.removeAttribute(n,o)})}}function ht(e){return e=om(e),e.view=_t(e.view,'container'),(t)=>{t.on('insert:'+e.model,xt(e.view),{priority:e.priority||'normal'})}}function bt(e){e=om(e);const t=e.model.key?e.model.key:e.model;let o='attribute:'+t;if(e.model.name&&(o+=':'+e.model.name),e.model.values)for(const t of e.model.values)e.view[t]=_t(e.view[t],'attribute');else e.view=_t(e.view,'attribute');const n=vt(e);return(t)=>{t.on(o,Pt(n),{priority:e.priority||'normal'})}}function kt(e){e=om(e);const t=e.model.key?e.model.key:e.model;let o='attribute:'+t;if(e.model.name&&(o+=':'+e.model.name),e.model.values)for(const t of e.model.values)e.view[t]=yt(e.view[t]);else e.view=yt(e.view);const n=vt(e);return(t)=>{t.on(o,Tt(n),{priority:e.priority||'normal'})}}function _t(e,t){return'function'==typeof e?e:(o,n)=>wt(e,n,t)}function wt(e,t,o){'string'==typeof e&&(e={name:e});let n;if(n='container'==o?t.createContainerElement(e.name,Object.assign({},e.attributes)):'attribute'==o?t.createAttributeElement(e.name,Object.assign({},e.attributes)):t.createUIElement(e.name,Object.assign({},e.attributes)),e.styles){const o=Object.keys(e.styles);for(const i of o)t.setStyle(i,e.styles[i],n)}if(e.classes){const o=e.classes;if('string'==typeof o)t.addClass(o,n);else for(const e of o)t.addClass(e,n)}return n}function vt(e){return e.model.values?(t,o)=>{const n=e.view[t];return n?n(t,o):null}:e.view}function yt(e){return'string'==typeof e?(t)=>({key:e,value:t}):'object'==typeof e?e.value?()=>e:(t)=>({key:e.key,value:t}):e}function xt(e){return(t,o,n)=>{const i=e(o.item,n.writer);if(i&&n.consumable.consume(o.item,'insert')){const e=n.mapper.toViewPosition(o.range.start);n.mapper.bindElements(o.item,i),n.writer.insert(e,i)}}}function Ct(){return(e,t,o)=>{if(o.consumable.consume(t.item,'insert')){const e=o.writer,n=o.mapper.toViewPosition(t.range.start),i=e.createText(t.item.data);e.insert(n,i)}}}function At(){return(e,t,o)=>{const n=o.mapper.toViewPosition(t.position),i=t.position.getShiftedBy(t.length),r=o.mapper.toViewPosition(i,{isPhantom:!0}),a=new Cc(n,r),s=o.writer.remove(a.getTrimmed());for(const n of Cc.createIn(s).getItems())o.mapper.unbindViewElement(n)}}function Tt(e){return e=e||((e,t)=>({value:e,key:t.attributeKey})),(t,o,n)=>{const i=e(o.attributeOldValue,o),r=e(o.attributeNewValue,o);if((i||r)&&n.consumable.consume(o.item,t.name)){const e=n.mapper.toViewElement(o.item),t=n.writer;if(null!==o.attributeOldValue&&i)if('class'==i.key){const o=Array.isArray(i.value)?i.value:[i.value];for(const n of o)t.removeClass(n,e)}else if('style'==i.key){const o=Object.keys(i.value);for(const n of o)t.removeStyle(n,e)}else t.removeAttribute(i.key,e);if(null!==o.attributeNewValue&&r)if('class'==r.key){const o=Array.isArray(r.value)?r.value:[r.value];for(const n of o)t.addClass(n,e)}else if('style'==r.key){const o=Object.keys(r.value);for(const n of o)t.setStyle(n,r.value[n],e)}else t.setAttribute(r.key,r.value,e)}}}function Pt(e){return(t,o,n)=>{const i=e(o.attributeOldValue,n.writer),r=e(o.attributeNewValue,n.writer);if((i||r)&&n.consumable.consume(o.item,t.name)){const e=n.writer,t=e.document.selection;if(o.item instanceof Yu||o.item instanceof em)e.wrap(t.getFirstRange(),r);else{let t=n.mapper.toViewRange(o.range);null!==o.attributeOldValue&&i&&(t=e.unwrap(t,i)),null!==o.attributeNewValue&&r&&e.wrap(t,r)}}}}function Et(e,t){return(o,n)=>{const i=n.newSelection,r=new Yu,a=[];for(const e of i.getRanges())a.push(t.toModelRange(e));r.setTo(a,{backward:i.isBackward}),r.isEqual(e.document.selection)||e.change((e)=>{e.setSelection(r)})}}function St(){return(e,t,o)=>{const n=t.selection;if(!n.isCollapsed&&o.consumable.consume(n,'selection')){const e=[];for(const t of n.getRanges()){const n=o.mapper.toViewRange(t);e.push(n)}o.writer.setSelection(e,{backward:n.isBackward})}}}function Ot(){return(e,t,o)=>{const n=t.selection;if(n.isCollapsed&&o.consumable.consume(n,'selection')){const e=o.writer,t=n.getFirstPosition(),i=o.mapper.toViewPosition(t),r=e.breakAttributes(i);e.setSelection(r)}}}function Rt(){return(e,t,o)=>{const n=o.writer,i=n.document.selection;for(const n of i.getRanges())n.isCollapsed&&n.end.parent.document&&o.writer.mergeAttributes(n.start);n.setSelection(null)}}function It(e,t){const o=Ft();if(1===o&&(e=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0===o||!Vt(e,t))return t.replace(/ \[context: [^\]]+\]$/,'');const n=window.CKEDITOR_TRANSLATIONS[e];return n[t].replace(/ \[context: [^\]]+\]$/,'')}function Vt(e,t){return e in window.CKEDITOR_TRANSLATIONS&&t in window.CKEDITOR_TRANSLATIONS[e]}function Ft(){return Object.keys(window.CKEDITOR_TRANSLATIONS).length}function Nt(e,t){const o={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return qt(e,o),Wt(e,o,'allowIn'),Wt(e,o,'allowContentOf'),Wt(e,o,'allowWhere'),Wt(e,o,'allowAttributes'),Wt(e,o,'allowAttributesOf'),Wt(e,o,'inheritTypesFrom'),Ut(e,o),o}function Mt(e,t){for(const o of e[t].allowContentOf)if(e[o]){const n=Ht(e,o);n.forEach((e)=>{e.allowIn.push(t)})}delete e[t].allowContentOf}function Dt(e,t){for(const o of e[t].allowWhere){const n=e[o];if(n){const o=n.allowIn;e[t].allowIn.push(...o)}}delete e[t].allowWhere}function Bt(e,t){for(const o of e[t].allowAttributesOf){const n=e[o];if(n){const o=n.allowAttributes;e[t].allowAttributes.push(...o)}}delete e[t].allowAttributesOf}function Lt(e,t){const o=e[t];for(const n of o.inheritTypesFrom){const t=e[n];if(t){const e=Object.keys(t).filter((e)=>e.startsWith('is'));for(const n of e)n in o||(o[n]=t[n])}}delete o.inheritTypesFrom}function zt(e,t){const o=e[t],n=o.allowIn.filter((t)=>e[t]);o.allowIn=Array.from(new Set(n))}function jt(e,t){const o=e[t];o.allowAttributes=Array.from(new Set(o.allowAttributes))}function qt(e,t){for(const o of e){const e=Object.keys(o).filter((e)=>e.startsWith('is'));for(const n of e)t[n]=o[n]}}function Wt(e,t,o){for(const n of e)'string'==typeof n[o]?t[o].push(n[o]):Array.isArray(n[o])&&t[o].push(...n[o])}function Ut(e,t){for(const o of e){const e=o.inheritAllFrom;e&&(t.allowContentOf.push(e),t.allowWhere.push(e),t.allowAttributesOf.push(e),t.inheritTypesFrom.push(e))}}function Ht(e,t){const o=e[t];return Kt(e).filter((e)=>e.allowIn.includes(o.name))}function Kt(e){return Object.keys(e).map((t)=>e[t])}function Gt(e){return'string'==typeof e?{name:e,*getAttributeKeys(){},getAttribute(){}}:{name:e.is('element')?e.name:'$text',*getAttributeKeys(){yield*e.getAttributeKeys()},getAttribute(t){return e.getAttribute(t)}}}function*$t(e,t){for(let o=!1;!o;){if(o=!0,e){const t=e.next();t.done||(o=!1,yield{walker:e,value:t.value})}if(t){const e=t.next();e.done||(o=!1,yield{walker:t,value:e.value})}}}function Jt(e,t){const o=new Set,n=new Map,i=Gu.createIn(e).getItems();for(const n of i)'$marker'==n.name&&o.add(n);for(const i of o){const e=i.getAttribute('data-name'),o=Ku.createBefore(i);n.has(e)?n.get(e).end=Ku.createFromPosition(o):n.set(e,new Gu(Ku.createFromPosition(o))),t.remove(i)}return n}function Qt(e,t){let o;for(const n of new cm(e)){const e={};for(const t of n.getAttributeKeys())e[t]=n.getAttribute(t);const i=t.createElement(n.name,e);o&&t.append(i,o),o=Ku.createAt(i)}return o}function Yt(e){e=om(e);const t=to(e),o=eo(e),n=o?'element:'+o:'element';return(o)=>{o.on(n,t,{priority:e.priority||'normal'})}}function Xt(e){e=om(e),io(e);const t=ro(e),o=eo(e),n=o?'element:'+o:'element';return(o)=>{o.on(n,t,{priority:e.priority||'normal'})}}function Zt(e){e=om(e);let t=null;('string'==typeof e.view||e.view.key)&&(t=no(e)),io(e,t);const o=ro(e);return(t)=>{t.on('element',o,{priority:e.priority||'low'})}}function eo(e){return'string'==typeof e.view?e.view:'object'==typeof e.view&&'string'==typeof e.view.name?e.view.name:null}function to(e){const t=new Id(e.view);return(o,n,i)=>{const r=t.match(n.viewItem);if(r){r.match.name=!0;const t=oo(e.model,n.viewItem,i.writer);if(t&&i.consumable.test(n.viewItem,r.match)){const e=i.splitToAllowedParent(t,n.modelCursor);if(e){i.writer.insert(t,e.position);const o=i.convertChildren(n.viewItem,Ku.createAt(t));i.consumable.consume(n.viewItem,r.match),n.modelRange=new Gu(Ku.createBefore(t),Ku.createAfter(o.modelCursor.parent)),n.modelCursor=e.cursorParent?Ku.createAt(e.cursorParent):n.modelRange.end}}}}}function oo(e,t,o){return e instanceof Function?e(t,o):o.createElement(e)}function no(e){'string'==typeof e.view&&(e.view={key:e.view});const t=e.view.key;let o;if('class'==t||'style'==t){const n='class'==t?'classes':'styles';o={[n]:e.view.value}}else{const n='undefined'==typeof e.view.value?/[\s\S]*/:e.view.value;o={attributes:{[t]:n}}}return e.view.name&&(o.name=e.view.name),e.view=o,t}function io(e,t=null){const o='object'==typeof e.model?e.model.key:e.model,n='object'!=typeof e.model||'undefined'==typeof e.model.value?!(null!==t)||((e)=>e.getAttribute(t)):e.model.value;e.model={key:o,value:n}}function ro(e){const t=new Id(e.view);return(o,n,i)=>{const r=t.match(n.viewItem);if(r){const t=e.model.key,o='function'==typeof e.model.value?e.model.value(n.viewItem):e.model.value;if(null!==o&&(ao(e)?r.match.name=!0:delete r.match.name,!!i.consumable.test(n.viewItem,r.match))){n.modelRange||(n=Object.assign(n,i.convertChildren(n.viewItem,n.modelCursor)));const e=so(n.modelRange,{key:t,value:o},i);e&&i.consumable.consume(n.viewItem,r.match)}}}}function ao(e){return!!('object'!=typeof e.view||eo(e))&&!e.view.classes&&!e.view.attributes&&!e.view.styles}function so(e,t,o){let n=!1;for(const i of Array.from(e.getItems()))o.schema.checkAttribute(i,t.key)&&(o.writer.setAttribute(t.key,t.value,i),n=!0);return n}function lo(){return(e,t,o)=>{if(!t.modelRange&&o.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=o.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n}}}function co(){return(e,t,o)=>{if(o.schema.checkChild(t.modelCursor,'$text')&&o.consumable.consume(t.viewItem)){const e=o.writer.createText(t.viewItem.data);o.writer.insert(e,t.modelCursor),t.modelRange=Gu.createFromPositionAndShift(t.modelCursor,e.offsetSize),t.modelCursor=t.modelRange.end}}}function uo(e){const t=[],o=e.root.document;if(!o)return[];const n=Gu.createIn(e);for(const i of o.model.markers){const e=n.getIntersection(i.getRange());e&&t.push([i.name,e])}return t}function mo(e,t){for(const o of e)t(o)}function*po(e){if(e.model.values)for(const t of e.model.values){const o={key:e.model.key,value:t},n=e.view[t],i=e.upcastAlso?e.upcastAlso[t]:void 0;yield*go(o,n,i)}else yield*go(e.model,e.view,e.upcastAlso)}function*go(e,t,o){if(yield{model:e,view:t},o){o=Array.isArray(o)?o:[o];for(const t of o)yield{model:e,view:t}}}function fo(e){return'string'==typeof e?[new zu(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new zu(e):e instanceof ju?new zu(e.data,e.getAttributes()):e))}function ho(e,t){t=wo(t);const o=t.reduce((e,t)=>e+t.offsetSize,0),n=e.parent;yo(e);const i=e.index;return n._insertChild(i,t),vo(n,i+t.length),vo(n,i),new Gu(e,e.getShiftedBy(o))}function bo(e){if(!e.isFlat)throw new Za('operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');const t=e.start.parent;yo(e.start),yo(e.end);const o=t._removeChildren(e.start.index,e.end.index-e.start.index);return vo(t,e.start.index),o}function ko(e,t){if(!e.isFlat)throw new Za('operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.');const o=bo(e);return t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),ho(t,o)}function _o(e,t,o){yo(e.start),yo(e.end);for(const n of e.getItems()){const e=n.is('textProxy')?n.textNode:n;null===o?e._removeAttribute(t):e._setAttribute(t,o),vo(e.parent,e.index)}vo(e.end.parent,e.end.index)}function wo(e){const t=[];e instanceof Array||(e=[e]);for(let o=0;o<e.length;o++)if('string'==typeof e[o])t.push(new zu(e[o]));else if(e[o]instanceof ju)t.push(new zu(e[o].data,e[o].getAttributes()));else if(e[o]instanceof fm||e[o]instanceof qu)for(const n of e[o])t.push(n);else e[o]instanceof Lu&&t.push(e[o]);for(let o=1;o<t.length;o++){const e=t[o],n=t[o-1];e instanceof zu&&n instanceof zu&&xo(e,n)&&(t.splice(o-1,2,new zu(n.data+e.data,n.getAttributes())),o--)}return t}function vo(e,t){const o=e.getChild(t-1),n=e.getChild(t);if(o&&n&&o.is('text')&&n.is('text')&&xo(o,n)){const i=new zu(o.data+n.data,o.getAttributes());e._removeChildren(t-1,2),e._insertChild(t-1,i)}}function yo(e){const t=e.textNode,o=e.parent;if(t){const n=e.offset-t.startOffset,i=t.index;o._removeChildren(i,1);const r=new zu(t.data.substr(0,n),t.getAttributes()),a=new zu(t.data.substr(n),t.getAttributes());o._insertChild(i,[r,a])}}function xo(e,t){const o=e.getAttributes(),n=t.getAttributes();for(const i of o){if(i[1]!==t.getAttribute(i[0]))return!1;n.next()}return n.next().done}function Co(e){return[e.clone()]}function Ao(e,t){for(let o=0;o<t.length;o++)t[o].baseVersion=e+o+1;return t}function To(e,t){return null===e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)}function Po(e){return 0===e.length?null:1==e.length?e[0]:(e[0].end=e[e.length-1].end,e[0])}function Eo(e,t,o){const n=[];for(let r=0;r<e.length;r++){const i=So(e[r],t,o.isSticky);n.push(i);for(let t=r+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany)[0];t=t._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!0,!1)}return n}function So(e,t,o){let n='$graveyard'==t.root.rootName?wm:'$graveyard'==e.start.root.rootName?_m:km;const i=new n(e.start,e.end.offset-e.start.offset,t,0);return i.isSticky=o,i}function Oo(e,t,o,n,i){var r=-1,a=e.length;for(o||(o=Um),i||(i=[]);++r<a;){var s=e[r];0<t&&o(s)?1<t?Oo(s,t-1,o,n,i):Al(i,s):!n&&(i[i.length]=s)}return i}function Ro(e,t,o,n){var i=o.length,r=i,a=!n;if(null==e)return!r;for(e=Object(e);i--;){var s=o[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<r;){s=o[i];var l=s[0],d=e[l],c=s[1];if(!(a&&s[2])){var u=new zs;if(n)var m=n(d,c,l,e,t,u);if(void 0===m?!bu(c,d,n,tp|op,u):!m)return!1}else if(void 0===d&&!(l in e))return!1}return!0}function Io(e,t){if('function'!=typeof e||t&&'function'!=typeof t)throw new TypeError(cp);var o=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=o.cache;if(r.has(i))return r.get(i);var a=e.apply(this,n);return o.cache=r.set(i,a),a};return o.cache=new(Io.Cache||Ls),o}function Vo(e,t){if(dl(e))return!1;var o=typeof e;return!!('number'==o||'symbol'==o||'boolean'==o||null==e||Ld(e))||wp.test(e)||!_p.test(e)||null!=t&&e in Object(t)}function Fo(e,t){return t in Object(e)}function No(e,t){for(const o of t)for(const t of o.operations)t.baseVersion=++e;return t}function Mo(e){return e.reduce((e,t)=>e+t.operations.length,0)}function Do(e,t){const o=e[e.length-1];let n=o.operations.length+o.baseVersion;const r=new Om;for(let o=0;o<t;o++)r.addOperation(new xm(n++));e.push(r)}function Bo(e,t,o){qo(e,t,o),Lo(e,t,o),jo(t,o),zo(t,o)}function Lo(e,t,o){const n=o.originalDelta.get(t);if(o.document.history.isUndoingDelta(n)){const t=o.document.history.getUndoneDelta(n),i=o.wasAffected.get(e),r=i.get(t);r!==void 0&&(o.insertBefore=r)}}function zo(e,t){const o=t.originalDelta.get(e),n=t.document.history;t.forceNotSticky=n.isUndoneDelta(o)||n.isUndoingDelta(o)}function jo(e,t){const o=t.document.history,n=t.originalDelta.get(e);t.forceWeakRemove=o.isUndoneDelta(n)}function qo(e,t,o){o.wasAffected.get(e)||o.wasAffected.set(e,new Map);const n=o.originalDelta.get(t);let i=!!o.wasAffected.get(e).get(n);for(const n of e.operations){for(const e of t.operations)if(n instanceof km&&e instanceof km&&Wo(n,e)){i=!0;break}if(i)break}o.wasAffected.get(e).set(n,i)}function Wo(e,t){const o=e.targetPosition,n=t.sourcePosition,i=A(n.getParentPath(),o.getParentPath());return!(o.root!=n.root)&&'same'==i&&n.offset<o.offset}function Uo(e,t,o){delete o.insertBefore,delete o.forceNotSticky,delete o.forceWeakRemove;const n=o.wasAffected.get(e);o.wasAffected.delete(e);for(const i of t)o.wasAffected.set(i,new Map(n))}function Ho(e,t){let n=[],i=null,o;switch(e){case Fm:case Nm:for(const e of t)i=e instanceof xm?new Om:e instanceof wm?new Nm:new Fm,i.addOperation(e),n.push(i);return n;case Im:case Dm:return i=new e,i.addOperation(t[0]),i.addOperation(t[1]),n=Ho(Fm,t.slice(2)),[i].concat(n);case Vm:case Bm:return n=Ho(Fm,t.slice(0,-2)),i=new e,i.addOperation(t[t.length-2]),i.addOperation(t[t.length-1]),n.concat(i);case Mm:return i=t[0]instanceof xm?new Om:new Mm,i.addOperation(t[0]),[i];case Rm:for(o=0;o<t.length&&!!(t[o]instanceof xm);o++);o==t.length?i=new Om:(i=new Rm,0!=o&&t.unshift(t.splice(o,1)[0]));for(const e of t)i.addOperation(e);return[i];default:i=new e;for(const e of t)i.addOperation(e);return[i];}}function Ko(e,t){const o=e.clone(),n=o.operations[0];return n.oldRange&&(n.oldRange=n.oldRange.getTransformedByDelta(t)[0]),n.newRange&&(n.newRange=n.newRange.getTransformedByDelta(t)[0]),[o]}function Go(e,t){function o(){const o=new Gu(e.position.getShiftedBy(s),e.position.getShiftedBy(l)),i=new bm(o,t.key,a,t.value,0);n.addOperation(i)}const n=new Rm,r=e.nodes;let a=r.getNode(0).getAttribute(t.key),s=0,l=r.getNode(0).offsetSize;for(let n=1;n<r.length;n++){const e=r.getNode(n),i=e.getAttribute(t.key);i!=a&&(a!=t.value&&o(),a=i,s=l),l+=e.offsetSize}return o(),n}function $o(){const e=new Om;return e.addOperation(new xm(0)),e}function Jo(e,t,o,n){function i(){0===r.operations.length&&e.batch.addDelta(r);const n=new Gu(l,d),i=n.root.document?s.version:null,u=new bm(n,t,c,o,i);r.addOperation(u),a.applyOperation(u)}const r=new Rm,a=e.model,s=a.document;let l=n.start,d,c,u;for(const r of n)u=r.item.getAttribute(t),d&&c!=u&&(c!=o&&i(),l=d),d=r.nextPosition,c=u;d instanceof Ku&&d!=l&&c!=o&&i()}function Qo(e,t,o,n){const i=e.model,r=i.document,a=n.getAttribute(t);let s,l;if(a!=o){const d=n.root===n,c=d?new Lg:new Rm;if(e.batch.addDelta(c),d){const e=n.document?r.version:null;l=new Am(n,t,a,o,e)}else{s=n.is('element')?new Gu(Ku.createBefore(n),Ku.createFromParentAndOffset(n,0)):new Gu(Ku.createBefore(n),Ku.createAfter(n));const e=s.root.document?r.version:null;l=new bm(s,t,a,o,e)}c.addOperation(l),i.applyOperation(l)}}function Yo(e,t,o,n){const i=e.model,r=i.document,a=new Ng,s=new ym(t,o,n,i.markers,r.version);e.batch.addDelta(a),a.addOperation(s),i.applyOperation(s)}function Xo(e,t,o,n){let i;if(e.root.document){const o=n.document,r=new Ku(o.graveyard,[0]);i=new wm(e,t,r,o.version)}else i=new zg(e,t);o.addOperation(i),n.applyOperation(i)}function Zo(e,t){return!(e!==t)||!!(e instanceof jg&&t instanceof jg)}function en(e){const t=[];for(const o of e)if(o.is('text'))for(let e=0;e<o.data.length;e++)t.push({name:'$text',attributes:new Map(o.getAttributes())});else t.push({name:o.name,attributes:new Map(o.getAttributes())});return t}function tn(e,t){const o=[];let n=0,i=0;for(const r of t)r.offset>n&&(o.push(...'e'.repeat(r.offset-n).split('')),i+=r.offset-n),'insert'==r.type?(o.push(...'i'.repeat(r.howMany).split('')),n=r.offset+r.howMany):'remove'==r.type?(o.push(...'r'.repeat(r.howMany).split('')),n=r.offset,i+=r.howMany):(o.push(...'a'.repeat(r.howMany).split('')),n=r.offset+r.howMany,i+=r.howMany);return i<e&&o.push(...'e'.repeat(e-i).split('')),o}function on(e){const t=e.position&&'$graveyard'==e.position.root.rootName,o=e.range&&'$graveyard'==e.range.root.rootName;return!t&&!o}function nn(e){return!!e&&1==e.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)}function rn(e){return!!e&&1==e.length&&/[\ud800-\udbff]/.test(e)}function an(e){return!!e&&1==e.length&&/[\udc00-\udfff]/.test(e)}function sn(e,t){return rn(e.charAt(t-1))&&an(e.charAt(t))}function ln(e,t){return nn(e.charAt(t))}function dn(e){const t=e.textNode;if(t){const o=t.data,n=e.offset-t.startOffset;return!sn(o,n)&&!ln(o,n)}return!0}function cn(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document.model,'applyOperation',(t,o)=>{const n=o[0];!n.isDocumentOperation||e.has(n.type)&&un.call(this,n)},{priority:'low'})}function un(e){let t,o;'insert'==e.type?t=Gu.createFromPositionAndShift(e.position,e.nodes.maxOffset):(t=Gu.createFromPositionAndShift(e.getMovedRangeStart(),e.howMany),o=e.sourcePosition);const n=t.end.offset-t.start.offset;let i;switch(e.type){case'insert':const r='sticksToNext'==this.stickiness;i=this._getTransformedByInsertion(t.start,n,r);break;case'move':case'remove':case'reinsert':const a=Gu.createFromPositionAndShift(o,n),s=a.containsPosition(this)||a.start.isEqual(this)&&'sticksToNext'==this.stickiness||a.end.isEqual(this)&&'sticksToPrevious'==this.stickiness;if(s)i=this._getCombined(o,t.start);else{const e='sticksToNext'==this.stickiness,r=t.start._getTransformedByInsertion(o,n);i=this._getTransformedByMove(o,r,n,e)}}if(!this.isEqual(i)){const e=Ku.createFromPosition(this);this.path=i.path,this.root=i.root,this.fire('change',e)}}function mn(e,t,o){e.change((n)=>{o.isCollapsed||e.deleteContent(o);const i=new Qg(e,n,o.anchor);let r;r=t.is('documentFragment')?t.getChildren():[t],i.handleNodes(r,{isFirst:!0,isLast:!0});const a=i.getSelectionRange();a?o instanceof em?n.setSelection(a):o.setTo(a):Ru.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.')})}function pn(e,t,o={}){if(t.isCollapsed)return;const n=e.schema;e.change((e)=>{if(!o.doNotResetEntireContent&&_n(n,t))return void kn(e,t,n);const i=t.getFirstRange(),r=i.start,a=Jg.createFromPosition(i.end);i.start.isTouching(i.end)||e.remove(i),o.leaveUnmerged||(gn(e,r,a),n.removeDisallowedAttributes(r.parent.getChildren(),e)),t instanceof em?e.setSelection(r):t.setTo(r),fn(n,r)&&bn(e,r,t),a.detach()})}function gn(e,t,o){const n=t.parent,i=o.parent;if(n!=i&&n.parent&&i.parent&&hn(t,o,e.model.schema)){for(t=Ku.createAfter(n),o=Ku.createBefore(i),o.isEqual(t)||e.insert(i,t),e.merge(t);o.parent.isEmpty;){const t=o.parent;o=Ku.createBefore(t),e.remove(t)}gn(e,t,o)}}function fn(e,t){const o=e.checkChild(t,'$text'),n=e.checkChild(t,'paragraph');return!o&&n}function hn(e,t,o){const n=new Gu(e,t);for(const i of n.getWalker())if(o.isObject(i.item)||o.isLimit(i.item))return!1;return!0}function bn(e,t,o){const n=e.createElement('paragraph');e.insert(n,t),o instanceof em?e.setSelection(n,0):o.setTo(n,0)}function kn(e,t){const o=e.model.schema.getLimitElement(t);e.remove(Gu.createIn(o)),bn(e,Ku.createAt(o),t)}function _n(e,t){const o=e.getLimitElement(t);if(!t.containsEntireContent(o))return!1;const n=t.getFirstRange();return n.start.parent!=n.end.parent&&e.checkChild(o,'paragraph')}function wn(e,t,o={}){const n=e.schema,i='backward'!=o.direction,r=o.unit?o.unit:'character',a=t.focus,s=new Uu({boundaries:Cn(a,i),singleCharacters:!0,direction:i?'forward':'backward'}),l={walker:s,schema:n,isForward:i,unit:r};for(let n;n=s.next();){if(n.done)return;const o=vn(l,n.value);if(o)return void(t instanceof em?e.change((e)=>{e.setSelectionFocus(o)}):t.setFocus(o))}}function vn(e,t){if('text'==t.type)return'word'===e.unit?xn(e.walker,e.isForward):yn(e.walker,e.unit,e.isForward);if(t.type==(e.isForward?'elementStart':'elementEnd')){if(e.schema.isObject(t.item))return Ku.createAt(t.item,e.isForward?'after':'before');if(e.schema.checkChild(t.nextPosition,'$text'))return t.nextPosition}else{if(e.schema.isLimit(t.item))return void e.walker.skip(()=>!0);if(e.schema.checkChild(t.nextPosition,'$text'))return t.nextPosition}}function yn(e,t){const o=e.position.textNode;if(o){const n=o.data;for(let i=e.position.offset-o.startOffset;sn(n,i)||'character'==t&&ln(n,i);)e.next(),i=e.position.offset-o.startOffset}return e.position}function xn(e,t){let o=e.position.textNode;if(o)for(let n=e.position.offset-o.startOffset;!An(o.data,n,t)&&!Tn(o,n,t);){e.next();const i=t?e.position.nodeAfter:e.position.nodeBefore;if(i){const n=i.data.charAt(t?0:i.data.length-1);Yg.includes(n)||(e.next(),o=e.position.textNode)}n=e.position.offset-o.startOffset}return e.position}function Cn(e,t){const o=e.root,n=Ku.createAt(o,t?'end':0);return t?new Gu(e,n):new Gu(n,e)}function An(e,t,o){const n=t+(o?0:-1);return Yg.includes(e.charAt(n))}function Tn(e,t,o){return t===(o?e.endOffset:0)}function Pn(e,t){return e.change((e)=>{const o=e.createDocumentFragment(),n=t.getFirstRange();if(!n||n.isCollapsed)return o;const i=n.start.root,r=n.start.getCommonPath(n.end),a=i.getNodeByPath(r);let s=n.start.parent==n.end.parent?n:Gu.createFromParentsAndOffsets(a,n.start.path[r.length],a,n.end.path[r.length]+1);const l=s.end.offset-s.start.offset;for(const t of s.getItems({shallow:!0}))t.is('textProxy')?e.appendText(t.data,t.getAttributes(),o):e.append(t._clone(!0),o);if(s!=n){const t=n._getTransformedByMove(s.start,Ku.createAt(o,0),l)[0],i=new Gu(Ku.createAt(o),t.start),r=new Gu(t.end,Ku.createAt(o,'end'));En(r,e),En(i,e)}return o})}function En(e,t){const o=[];Array.from(e.getItems({direction:'backward'})).map((e)=>Gu.createOn(e)).filter((t)=>{const o=(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end));return o}).forEach((e)=>{o.push(e.start.parent),t.remove(e)}),o.forEach((e)=>{for(let o=e;o.parent&&o.isEmpty;){const e=Gu.createOn(o);o=o.parent,t.remove(e)}})}function Sn(e,t){e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}function On(e){if(!hs(e.updateElement))throw new Za('attachtoform-missing-elementapi-interface: ElementApi interface is required.');const t=e.element;if(t&&'textarea'===t.tagName.toLowerCase()&&t.form){let o;const n=t.form,i=()=>e.updateElement();hs(n.submit)&&(o=n.submit,n.submit=()=>{i(),o.apply(n)}),n.addEventListener('submit',i),e.on('destroy',()=>{n.removeEventListener('submit',i),o&&(n.submit=o)})}}function Rn(e){return(e+'').toLowerCase()}function In({origin:e,originKeystrokeHandler:t,originFocusTracker:o,toolbar:n,beforeFocus:i,afterBlur:r}){o.add(n.element),t.set('Alt+F10',(e,t)=>{o.isFocused&&!n.focusTracker.isFocused&&(i&&i(),n.focus(),t())}),n.keystrokes.set('Esc',(t,o)=>{n.focusTracker.isFocused&&(e.focus(),r&&r(),o())})}function Vn(e){return Array.isArray(e)?{items:e}:e?Object.assign({items:[]},e):{items:[]}}function Fn(e){return e.every((e)=>'string'==typeof e)}function Nn(e){return!!e&&((e.value&&(e=e.value),Array.isArray(e))?e.some(Nn):!!(e instanceof pf))}function Mn(e,t){return e.map((e)=>e instanceof pf?e.getValue(t):e)}function Dn(e,t,{node:o}){let n=Mn(e,o);n=1==e.length&&e[0]instanceof ff?n[0]:n.reduce($n,''),Yn(n)?t.remove():t.set(n)}function Bn(e){return{set(t){e.textContent=t},remove(){e.textContent=''}}}function Ln(e,t,o){return{set(n){e.setAttributeNS(o,t,n)},remove(){e.removeAttributeNS(o,t)}}}function zn(e,t){return{set(o){e.style[t]=o},remove(){e.style[t]=null}}}function jn(e){const t=uf(e,(e)=>{if(e&&(e instanceof pf||Zn(e)||Xn(e)||ei(e)))return e});return t}function qn(e){if('string'==typeof e?e=Hn(e):e.text&&Kn(e),e.on&&(e.eventListeners=Un(e.on),delete e.on),!e.text){e.attributes&&Wn(e.attributes);const t=[];if(e.children)if(ei(e.children))t.push(e.children);else for(const o of e.children)Zn(o)||Xn(o)||Me(o)?t.push(o):t.push(new mf(o));e.children=t}return e}function Wn(e){for(const t in e)e[t].value&&(e[t].value=[].concat(e[t].value)),Gn(e,t)}function Un(e){for(const t in e)Gn(e,t);return e}function Hn(e){return{text:[e]}}function Kn(e){Array.isArray(e.text)||(e.text=[e.text])}function Gn(e,t){Array.isArray(e[t])||(e[t]=[e[t]])}function $n(e,t){return Yn(t)?e:Yn(e)?t:`${e} ${t}`}function Jn(e,t){for(const o in t)e[o]?e[o].push(...t[o]):e[o]=t[o]}function Qn(e,t){if(t.attributes&&(!e.attributes&&(e.attributes={}),Jn(e.attributes,t.attributes)),t.eventListeners&&(!e.eventListeners&&(e.eventListeners={}),Jn(e.eventListeners,t.eventListeners)),t.text&&e.text.push(...t.text),t.children&&t.children.length){if(e.children.length!=t.children.length)throw new Za('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');let o=0;for(const n of t.children)Qn(e.children[o++],n)}}function Yn(e){return!e&&0!==e}function Xn(e){return e instanceof kf}function Zn(e){return e instanceof mf}function ei(e){return e instanceof cf}function ti(){return{children:[],bindings:[],attributes:{}}}function oi(e){return'class'==e||'style'==e}function ni(e){return(t)=>t+e}function ii(e){return!!(e.focus&&'none'!=$c.window.getComputedStyle(e.element).display)}function ri(e){return e.bindTemplate.to((t)=>{t.target===e.element&&t.preventDefault()})}function ai(e){return e instanceof HTMLTextAreaElement?e.value:e.innerHTML}function si(e){const t=e.files?Array.from(e.files):[],o=e.items?Array.from(e.items):[];return t.length?t:o.filter((e)=>'file'===e.kind).map((e)=>e.getAsFile())}function li(e,t){const o=t.target.ownerDocument,n=t.clientX,i=t.clientY;let r;return o.caretRangeFromPoint&&o.caretRangeFromPoint(n,i)?r=o.caretRangeFromPoint(n,i):t.rangeParent&&(r=o.createRange(),r.setStart(t.rangeParent,t.rangeOffset),r.collapse(!0)),r?e.domConverter.domRangeToView(r):e.document.selection.getFirstRange()}function di(e){return e=e.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n\n/g,'</p><p>').replace(/\n/g,' ').replace(/^\s/,'&nbsp;').replace(/\s$/,'&nbsp;').replace(/\s\s/g,' &nbsp;'),-1<e.indexOf('</p><p>')&&(e=`<p>${e}</p>`),e}function ci(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1==t.length?' ':t)}function ui(e){let t='';if(e.is('text')||e.is('textProxy'))t=e.data;else if(e.is('img')&&e.hasAttribute('alt'))t=e.getAttribute('alt');else{let o=null;for(const n of e.getChildren()){const e=ui(n);o&&(o.is('containerElement')||n.is('containerElement'))&&(Hf.includes(o.name)||Hf.includes(n.name)?t+='\n':t+='\n\n'),t+=e,o=n}}return t}function mi(e,t,o,n){const i=o.isCollapsed,r=o.getFirstRange(),a=r.start.parent,s=r.end.parent;if(n.isLimit(a)||n.isLimit(s))return void(i||a!=s||e.deleteContent(o));if(i)pi(t,o,r.start);else{const n=!(r.start.isAtStart&&r.end.isAtEnd);e.deleteContent(o,{leaveUnmerged:n}),n&&(a==s?pi(t,o,o.focus):t.setSelection(s,0))}}function pi(e,t,o){const n=o.parent,i=new n.constructor(n.name,n.getAttributes());o.isAtEnd?e.insert(i,o.parent,'after'):o.isAtStart?e.insert(i,o.parent,'before'):e.split(o),e.setSelection(o.parent.nextSibling,0)}function gi(e,t){function o(){a&&(i.push(a),a=null)}function n(e){return a&&a.type==e}const i=[];let r=0,a;return e.forEach((e)=>{'equal'==e?(o(),r++):'insert'==e?(n('insert')?a.values.push(t[r]):(o(),a={type:'insert',index:r,values:[t[r]]}),r++):n('delete')?a.howMany++:(o(),a={type:'delete',index:r,howMany:1})}),o(),i}function fi(e){return!!e.ctrlKey||th.includes(e.keyCode)}function hi(e,t){return e instanceof Od&&t instanceof Od?e.data===t.data:e===t}function bi(e){if(1==e.newChildren.length-e.oldChildren.length){const t=Te(e.oldChildren,e.newChildren,hi),o=gi(t,e.newChildren);if(!(1<o.length)){const e=o[0];return e.values[0]instanceof Od?e:void 0}}}function ki(e){const t=e.map((e)=>e.node).reduce((e,t)=>e.getCommonAncestor(t,{includeSelf:!0}));return t?t.getAncestors({includeSelf:!0,parentFirst:!0}).find((e)=>e.is('containerElement')||e.is('rootElement')):void 0}function _i(e){if(0==e.length)return!1;for(const t of e)if('children'===t.type&&!bi(t))return!0;return!1}function wi(e){return e.every((e)=>e.is('text'))}function vi(e){let t=null,o=null;for(let n=0;n<e.length;n++){const i=e[n];'equal'!=i&&(t=null===t?n:t,o=n)}let n=0,r=0;for(let a=t;a<=o;a++)'insert'!=e[a]&&n++,'delete'!=e[a]&&r++;return{insertions:r,deletions:n,firstChangeAt:t}}function yi(e,t){const o=xi([e],t);o.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let n=1;n<o.length;n++){const e=o[n-1],t=o[n];e.end.isTouching(t.start)&&(e.end=t.end,o.splice(n,1),n--)}return o}function xi(e,t){for(const o of t)for(const t of o.operations)for(let o=0;o<e.length;o++){let n;switch(t.type){case'insert':n=e[o]._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0);break;case'move':case'remove':case'reinsert':n=e[o]._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0);}n&&(e.splice(o,1,...n),o=o+n.length-1)}return e}function Ci(){let e=Ai(Sh);return e&&e.length==Oh||(e=Pi(Oh),Ti(Sh,e)),e}function Ai(e){e=e.toLowerCase();const t=document.cookie.split(';');for(const o of t){const t=o.split('='),n=decodeURIComponent(t[0].trim().toLowerCase());if(n===e)return decodeURIComponent(t[1])}return null}function Ti(e,t){document.cookie=encodeURIComponent(e)+'='+encodeURIComponent(t)+';path=/'}function Pi(e){let t='';const o=new Uint8Array(e);window.crypto.getRandomValues(o);for(let n=0;n<o.length;n++){const e=Rh.charAt(o[n]%Rh.length);t+=.5<Math.random()?e.toUpperCase():e}return t}function Ei(e){return Array.from(e.getChildren()).reduce((e,t)=>e+t.data,'')}function Si(e,t){return t.filter((e)=>e[0]!==void 0&&e[1]!==void 0).map((t)=>Gu.createFromParentsAndOffsets(e,t[0],e,t[1]))}function Oi(e){const t=e.next();return t.done?null:t.value}function Ri(e){return'blockQuote'==e.parent.name?e.parent:null}function Ii(e){let t=0,o;const n=[];for(;t<e.length;){const i=e[t],r=e[t+1];o||(o=Ku.createBefore(i)),r&&i.nextSibling==r||(n.push(new Gu(o,Ku.createAfter(i))),o=null),t++}return n}function Vi(e,t){const o=e.checkChild(t.parent,'blockQuote'),n=e.checkChild(['$root','blockQuote'],t);return o&&n}function Fi(e,t=512){try{const o=e.match(ab)[1],n=atob(e.replace(ab,'')),i=[];for(let e=0;e<n.length;e+=t){const o=n.slice(e,e+t),r=Array(o.length);for(let e=0;e<o.length;e++)r[e]=o.charCodeAt(e);i.push(new Uint8Array(r))}return new Blob(i,{type:o})}catch(e){throw new Error('Problem with decoding Base64 image data.')}}function Ni(e){if('string'!=typeof e)return!1;const t=e.match(ab);return!!(t&&t.length)}function Mi(){function e(e,t,o){if(o.consumable.test(t.viewItem,{name:!0,classes:'image'})){const e=Array.from(t.viewItem.getChildren()).find((e)=>e.is('img'));if(e&&e.hasAttribute('src')&&o.consumable.test(e,{name:!0})){const n=o.convertItem(e,t.modelCursor),i=Oi(n.modelRange.getItems());i&&(o.convertChildren(t.viewItem,Ku.createAt(i)),t.modelRange=n.modelRange,t.modelCursor=n.modelCursor)}}}return(t)=>{t.on('element:figure',e)}}function Di(){function e(e,t,o){if(o.consumable.consume(t.item,e.name)){const e=o.writer,n=o.mapper.toViewElement(t.item),i=n.getChild(0);if(null===t.attributeNewValue){const o=t.attributeOldValue;o.data&&(e.removeAttribute('srcset',i),e.removeAttribute('sizes',i),o.width&&e.removeAttribute('width',i))}else{const o=t.attributeNewValue;o.data&&(e.setAttribute('srcset',o.data,i),e.setAttribute('sizes','100vw',i),o.width&&e.setAttribute('width',o.width,i))}}}return(t)=>{t.on('attribute:srcset:image',e)}}function Bi(e){function t(e,t,o){if(o.consumable.consume(t.item,e.name)){const e=o.writer,n=o.mapper.toViewElement(t.item),i=n.getChild(0);null===t.attributeNewValue?e.removeAttribute(t.attributeKey,i):e.setAttribute(t.attributeKey,t.attributeNewValue,i)}}return(o)=>{o.on(`attribute:${e}:image`,t)}}function Li(e,t){return e&&t&&e.priority==t.priority&&ji(e.classes)==ji(t.classes)}function zi(e,t){if(e.priority>t.priority)return!0;return!(e.priority<t.priority)&&ji(e.classes)>ji(t.classes)}function ji(e){return Array.isArray(e)?e.sort().join(','):e}function qi(e){return!!e.getCustomProperty(gb)}function Wi(e,t,o={}){function n(e){return Array.isArray(e)?e:[e]}return t.setAttribute('contenteditable','false',e),t.addClass(hb,e),t.setCustomProperty(gb,!0,e),e.getFillerOffset=$i,o.label&&Hi(e,o.label,t),Ui(e,t,(e,t,o)=>o.addClass(n(t.classes),e),(e,t,o)=>o.removeClass(n(t.classes),e)),e}function Ui(e,t,o,n){const i=new pb;i.on('change:top',(t,i)=>{i.oldDescriptor&&n(e,i.oldDescriptor,i.writer),i.newDescriptor&&o(e,i.newDescriptor,i.writer)}),t.setCustomProperty('addHighlight',(e,t,o)=>i.add(t,o),e),t.setCustomProperty('removeHighlight',(e,t,o)=>i.remove(t,o),e)}function Hi(e,t,o){o.setCustomProperty(fb,t,e)}function Ki(e){const t=e.getCustomProperty(fb);return t?'function'==typeof t?t():t:''}function Gi(e,t){return t.addClass(['ck-editor__editable','ck-editor__nested-editable'],e),t.setAttribute('contenteditable',e.isReadOnly?'false':'true',e),e.on('change:isReadOnly',(o,n,i)=>{t.setAttribute('contenteditable',i?'false':'true',e)}),e.on('change:isFocused',(o,n,i)=>{i?t.addClass('ck-editor__nested-editable_focused',e):t.removeClass('ck-editor__nested-editable_focused',e)}),e}function $i(){return null}function Ji(e,t,o){return t.setCustomProperty(kb,!0,e),Wi(e,t,{label:function(){const t=e.getChild(0),n=t.getAttribute('alt');return n?`${n} ${o}`:o}})}function Qi(e){return!!e.getCustomProperty(kb)&&qi(e)}function Yi(e){const t=e.getSelectedElement();return!!(t&&Qi(t))}function Xi(e){return e instanceof Wu&&'image'==e.name}function Zi(e){const t=e.createEmptyElement('img'),o=e.createContainerElement('figure',{class:'image'});return e.insert(xc.createAt(o),t),o}function er(e){return e==Dc.arrowright||e==Dc.arrowleft||e==Dc.arrowup||e==Dc.arrowdown}function tr(e){return te(e)==xb}function or(e){for(;e;){if(e instanceof _c&&!(e instanceof vc))return!0;e=e.parent}return!1}function nr({emitter:e,activator:t,callback:o,contextElements:n}){e.listenTo(document,'mousedown',(e,{target:i})=>{if(t()){for(const e of n)if(e.contains(i))return;o()}})}function ir({view:e}){e.listenTo(e.element,'submit',(t,o)=>{o.preventDefault(),e.fire('submit')},{useCapture:!0})}function rr(e){for(;e&&'html'!=e.tagName.toLowerCase();){if('static'!=$c.window.getComputedStyle(e).position)return e;e=e.parentElement}return null}function ar({element:e,target:t,positions:o,limiter:n,fitInViewport:i}){hs(t)&&(t=t()),hs(n)&&(n=n());const r=rr(e.parentElement),a=new Mu(e),s=new Mu(t);let l,d;if(!n&&!i)[d,l]=sr(o[0],s,a);else{const e=n&&new Mu(n).getVisible(),t=i&&new Mu($c.window);[d,l]=lr(o,s,a,e,t)||sr(o[0],s,a)}let{left:c,top:u}=dr(l);if(r){const e=dr(new Mu(r)),t=He(r);c-=e.left,u-=e.top,c+=r.scrollLeft,u+=r.scrollTop,c-=t.left,u-=t.top}return{left:c,top:u,name:d}}function sr(e,t,o){const{left:n,top:i,name:r}=e(t,o);return[r,o.clone().moveTo(n,i)]}function lr(e,t,o,n,i){let r=0,a=0,s,l;const d=o.getArea();return e.some((e)=>{function c(){a=g,r=p,s=m,l=u}const[u,m]=sr(e,t,o);let p,g;if(n)if(i){const e=n.getIntersection(i);p=e?e.getIntersectionArea(m):0}else p=n.getIntersectionArea(m);return i&&(g=i.getIntersectionArea(m)),i&&!n?g>a&&c():!i&&n?p>r&&c():g>a&&p>=r?c():g>=a&&p>r&&c(),p===d}),s?[l,s]:null}function dr({left:e,top:t}){const{scrollX:o,scrollY:n}=$c.window;return{left:e+o,top:t+n}}function cr(e){return Nu(e)?e:Ue(e)?e.commonAncestorContainer:'function'==typeof e?cr(e()):null}function ur(e,t){return e.top-t.height-qb.arrowVerticalOffset}function mr(e){return e.bottom+qb.arrowVerticalOffset}function pr(e){const t=e.plugins.get('ContextualBalloon');if(Yi(e.editing.view.document.selection)){const o=gr(e);t.updatePosition(o)}}function gr(e){const t=e.editing.view,o=qb.defaultPositions;return{target:t.domConverter.viewToDom(t.document.selection.getSelectedElement()),positions:[o.northArrowSouth,o.northArrowSouthWest,o.northArrowSouthEast,o.southArrowNorth,o.southArrowNorthWest,o.southArrowNorthEast]}}function fr(e){const t=/^image\/(jpeg|png|gif|bmp)$/;return t.test(e.type)}function hr(e){const t=e.getSelectedElement();if(t)return Ku.createAfter(t);const o=e.getSelectedBlocks().next().value;if(o){if(o.isEmpty)return Ku.createAt(o);const t=Ku.createAfter(o);return e.focus.isTouching(t)?t:Ku.createBefore(o)}return e.focus}function br(e,t){e.hasClass('ck-appear')||t.addClass('ck-appear',e)}function kr(e,t){t.removeClass('ck-appear',e)}function _r(e,t,o){t.hasClass('ck-image-upload-placeholder')||o.addClass('ck-image-upload-placeholder',t),t.hasClass('ck-infinite-progress')||o.addClass('ck-infinite-progress',t);const n=t.getChild(0);n.getAttribute('src')!==e&&o.setAttribute('src',e,n)}function wr(e,t){e.hasClass('ck-image-upload-placeholder')&&t.removeClass('ck-image-upload-placeholder',e),e.hasClass('ck-infinite-progress')&&t.removeClass('ck-infinite-progress',e)}function vr(e,t,o,n){const i=xr(t);t.insert(xc.createAt(e,'end'),i),o.on('change:uploadedPercent',(e,t,o)=>{n.change((e)=>{e.setStyle('width',o+'%',i)})})}function yr(e,t){const o=Cr(e);o&&t.remove(Cc.createOn(o))}function xr(e){const t=e.createUIElement('div',{class:'ck-progress-bar'});return e.setCustomProperty(sk,!0,t),t}function Cr(e){for(const t of e.getChildren())if(t.getCustomProperty(sk))return t}function Ar(e){return Array.from(e.types).includes('text/html')&&''!==e.getData('text/html')}function Tr(e,t){return t.checkChild(e.parent,'paragraph')&&!t.isObject(e)}function Pr(e,t,o){const n=o.writer.createElement('paragraph');return o.writer.insert(n,t),o.convertItem(e,Ku.createAt(n))}function Er(e,t,o){const n=new cm(t);return!!o.checkChild(n,'paragraph')&&!!o.checkChild(n.push('paragraph'),e)}function Sr(e,t,o){return o.checkChild(e.parent,t)&&!o.isObject(e)}function Or(e,t=Ak){const o=new t(e),n=new _k(e),i=new yk(e,o,n);return o.bind('isEnabled').to(i),o instanceof Ak?o.bind('isOn').to(i,'isOpen'):o.arrowView.bind('isOn').to(i,'isOpen'),Ir(i),i}function Rr(e,t){const o=e.locale,n=e.listView=new Ek(o);n.items.bindTo(t).using((e)=>{const t=new Sk(o);return t.bind(...Object.keys(e)).to(e),t}),e.panelView.children.add(n),n.items.delegate('execute').to(e)}function Ir(e){Vr(e),Fr(e),Nr(e)}function Vr(e){e.on('render',()=>{nr({emitter:e,activator:()=>e.isOpen,callback:()=>{e.isOpen=!1},contextElements:[e.element]})})}function Fr(e){e.on('execute',()=>{e.isOpen=!1})}function Nr(e){e.keystrokes.set('arrowdown',(t,o)=>{e.isOpen&&(e.panelView.focus(),o())}),e.keystrokes.set('arrowup',(t,o)=>{e.isOpen&&(e.panelView.focusLast(),o())})}function Mr(e){const o=e.t,t={Paragraph:o('t'),"Heading 1":o('u'),"Heading 2":o('v'),"Heading 3":o('w')};return e.config.get('heading.options').map((e)=>{const o=t[e.title];return o&&o!=e.title&&(e=Object.assign({},e,{title:o})),e})}function Dr(e,t,o,n){const i=e.document;zk.has(i)||(zk.set(i,new Map),i.registerPostFixer((e)=>Br(i,e))),zk.get(i).set(t,{placeholderText:o,checkFunction:n}),e.render()}function Br(e,t){const o=zk.get(e);let n=!1;for(const[i,r]of o)Lr(t,i,r)&&(n=!0);return n}function Lr(e,t,o){const n=t.document,i=o.placeholderText;let r=!1;if(!n)return!1;t.getAttribute('data-placeholder')!==i&&(e.setAttribute('data-placeholder',i,t),r=!0);const a=n.selection,s=a.anchor,l=o.checkFunction;if(l&&!l())return t.hasClass('ck-placeholder')&&(e.removeClass('ck-placeholder',t),r=!0),r;const d=!Array.from(t.getChildren()).some((e)=>!e.is('uiElement'));return!n.isFocused&&d?(t.hasClass('ck-placeholder')||(e.addClass('ck-placeholder',t),r=!0),r):(d&&s&&s.parent!==t?!t.hasClass('ck-placeholder')&&(e.addClass('ck-placeholder',t),r=!0):t.hasClass('ck-placeholder')&&(e.removeClass('ck-placeholder',t),r=!0),r)}function zr(e,t){return(o)=>{const n=o.createEditableElement('figcaption');return o.setCustomProperty(jk,!0,n),Dr(e,n,t),Gi(n,o)}}function jr(e){for(const t of e.getChildren())if(t instanceof Wu&&'caption'==t.name)return t;return null}function qr(e){const t=e.parent;return'figcaption'==e.name&&t&&'figure'==t.name&&t.hasClass('image')?{name:!0}:null}function Wr(e,t=!0){return(o,n,i)=>{const r=n.item;if((r.childCount||t)&&Xi(r.parent)){if(!i.consumable.consume(n.item,'insert'))return;const t=i.mapper.toViewElement(n.range.start.parent),o=e(i.writer),a=i.writer;r.childCount||a.addClass('ck-hidden',o),Ur(o,n.item,t,i)}}}function Ur(e,t,o,n){const i=xc.createAt(o,'end');n.writer.insert(i,e),n.mapper.bindElements(t,e)}function Hr(e){const t=e.getAncestors({includeSelf:!0}),o=t.find((e)=>'caption'==e.name);return o&&o.parent&&'image'==o.parent.name?o:null}function Kr(e,t){return!(e.childCount||e.hasClass('ck-hidden'))&&(t.addClass('ck-hidden',e),!0)}function Gr(e,t){return!!e.hasClass('ck-hidden')&&(t.removeClass('ck-hidden',e),!0)}function $r(e){return(t,o,n)=>{if(n.consumable.consume(o.item,t.name)){const t=Qr(o.attributeNewValue,e),i=Qr(o.attributeOldValue,e),r=n.mapper.toViewElement(o.item),a=n.writer;i&&a.removeClass(i.className,r),t&&a.addClass(t.className,r)}}}function Jr(e){const t=e.filter((e)=>!e.isDefault);return(e,o,n)=>{if(o.modelRange){const e=o.viewItem,i=Oi(o.modelRange.getItems());if(n.schema.checkAttribute(i,'imageStyle'))for(const o of t)n.consumable.consume(e,{classes:o.className})&&n.writer.setAttribute('imageStyle',o.name,i)}}}function Qr(e,t){for(const o of t)if(o.name===e)return o}function Yr(e=[]){return e.map(Xr).map((e)=>Object.assign({},e))}function Xr(e){if('string'==typeof e){const t=e;t_[t]?e=Object.assign({},t_[t]):(Ru.warn('image-style-not-found: There is no such image style of given name.',{name:t}),e={name:t})}else if(t_[e.name]){const t=t_[e.name],o=Object.assign({},e);for(const n in t)e.hasOwnProperty(n)||(o[n]=t[n]);e=o}return'string'==typeof e.icon&&o_[e.icon]&&(e.icon=o_[e.icon]),e}function Zr(e,t){for(const o of e)t[o.title]&&(o.title=t[o.title]);return e}function ea(e,t){return new Gu(ta(e,t,!0),ta(e,t,!1))}function ta(e,t,o){let n=e.textNode||(o?e.nodeBefore:e.nodeAfter),i=null;for(;n&&n.getAttribute('linkHref')==t;)i=n,n=o?n.previousSibling:n.nextSibling;return i?Ku.createAt(i,o?'before':'after'):e}function oa(e){return e.is('attributeElement')&&!!e.getCustomProperty(u_)}function na(e,t){const o=t.createAttributeElement('a',{href:e},{priority:5});return t.setCustomProperty(u_,!0,o),o}function ia(e){return e+='',ra(e)?e:'#'}function ra(e){const t=e.replace(m_,'');return t.match(p_)}function aa(e,t,o,n){const i=new g_(t,o,n),r=t.document.selection;o.listenTo(e.document,'keydown',(e,t)=>{if(!r.isCollapsed)return;if(t.shiftKey||t.altKey||t.ctrlKey)return;const o=t.keyCode==Dc.arrowright,n=t.keyCode==Dc.arrowleft;if(!o&&!n)return;const a=r.getFirstPosition();let s;s=o?i.handleForwardMovement(a,t):i.handleBackwardMovement(a,t),s&&e.stop()},{priority:ns.get('high')+1})}function sa(e,t){return la(e,t)||da(e,t)}function la(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return r&&(!i||o.getAttribute(t)!==n.getAttribute(t))}function da(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return i&&(!r||o.getAttribute(t)!==n.getAttribute(t))}function ca(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return r&&i?n.getAttribute(t)!==o.getAttribute(t):void 0}function ua(e,t){return sa(e.getShiftedBy(-1),t)}function ma(e){return e.getAncestors().find((e)=>oa(e))}function pa(e,t,o){const n=t?e[0]:e[e.length-1];if(n.is('listItem'))for(let i=n[t?'previousSibling':'nextSibling'],r=n.getAttribute('indent');i&&i.is('listItem')&&i.getAttribute('indent')>=o;)r>i.getAttribute('indent')&&(r=i.getAttribute('indent')),i.getAttribute('indent')==r&&e[t?'unshift':'push'](i),i=i[t?'previousSibling':'nextSibling']}function ga(e,t){return t.checkChild(e.parent,'listItem')&&!t.isObject(e)}function fa(e){const t=e.createContainerElement('li');return t.getFillerOffset=ha,t}function ha(){const e=!this.isEmpty&&('ul'==this.getChild(0).name||'ol'==this.getChild(0).name);return this.isEmpty||e?0:null}function ba(e,t,o){const n=o.consumable;if(n.test(t.item,'insert')&&n.test(t.item,'attribute:type')&&n.test(t.item,'attribute:indent')){n.consume(t.item,'insert'),n.consume(t.item,'attribute:type'),n.consume(t.item,'attribute:indent');const e=t.item,i=Oa(e,o);Va(e,i,o)}}function ka(e,t,o){const n=o.mapper.toViewPosition(t.position).getLastMatchingPosition((e)=>!e.item.is('li')),i=n.nodeAfter,r=o.writer;r.breakContainer(xc.createBefore(i)),r.breakContainer(xc.createAfter(i));const a=i.parent,s=a.previousSibling,l=Cc.createOn(a),d=r.remove(l);s&&s.nextSibling&&Ia(r,s,s.nextSibling);const c=o.mapper.toModelElement(i);Fa(c.getAttribute('indent')+1,t.position,l.start,i,o);for(const n of Cc.createIn(d).getItems())o.mapper.unbindViewElement(n);e.stop()}function _a(e,t,o){if(!o.consumable.consume(t.item,'attribute:type'))return;const n=o.mapper.toViewElement(t.item),i=o.writer;i.breakContainer(xc.createBefore(n)),i.breakContainer(xc.createAfter(n));let r=n.parent;const a='numbered'==t.attributeNewValue?'ol':'ul';r=i.rename(r,a),Ia(i,r,r.nextSibling),Ia(i,r.previousSibling,r);for(const n of t.item.getChildren())o.consumable.consume(n,'insert')}function wa(e,t,o){if(o.consumable.consume(t.item,'attribute:indent')){const e=o.mapper.toViewElement(t.item),n=o.writer;n.breakContainer(xc.createBefore(e)),n.breakContainer(xc.createAfter(e));const i=e.parent,r=i.previousSibling,a=Cc.createOn(i);n.remove(a),r&&r.nextSibling&&Ia(n,r,r.nextSibling),Fa(t.attributeOldValue+1,t.range.start,a.start,e,o),Va(t.item,e,o);for(const e of t.item.getChildren())o.consumable.consume(e,'insert')}}function va(e,t,o){if('listItem'!=t.item.name){let e=o.mapper.toViewPosition(t.range.start);const n=o.writer,r=[];for(;('ul'==e.parent.name||'ol'==e.parent.name)&&(e=n.breakContainer(e),'li'==e.parent.name);){const t=e,o=xc.createAt(e.parent,'end');if(!t.isEqual(o)){const e=n.remove(new Cc(t,o));r.push(e)}e=xc.createAfter(e.parent)}if(0<r.length){for(let t=0;t<r.length;t++){const o=e.nodeBefore,i=n.insert(e,r[t]);if(e=i.end,0<t){const t=Ia(n,o,o.nextSibling);t&&t.parent==o&&e.offset--}}Ia(n,e.nodeBefore,e.nodeAfter)}}}function ya(e,t,o){const n=o.mapper.toViewPosition(t.position),i=n.nodeBefore,r=n.nodeAfter;Ia(o.writer,i,r)}function xa(e,t,o){if(o.consumable.consume(t.viewItem,{name:!0})){const e=o.writer,n=this.conversionApi.store,i=e.createElement('listItem');n.indent=n.indent||0,e.setAttribute('indent',n.indent,i);const r=t.viewItem.parent&&'ol'==t.viewItem.parent.name?'numbered':'bulleted';e.setAttribute('type',r,i),n.indent++;const a=o.splitToAllowedParent(i,t.modelCursor);if(!a)return;e.insert(i,a.position);let s=Ku.createAfter(i);for(const e of t.viewItem.getChildren())'ul'==e.name||'ol'==e.name?s=o.convertItem(e,s).modelCursor:o.convertItem(e,Ku.createAt(i,'end'));n.indent--,t.modelRange=new Gu(t.modelCursor,s),t.modelCursor=a.cursorParent?Ku.createAt(a.cursorParent):t.modelRange.end}}function Ca(e,t,o){if(o.consumable.test(t.viewItem,{name:!0})){const e=Array.from(t.viewItem.getChildren());for(const t of e)t.is('li')||t._remove()}}function Aa(e,t,o){if(o.consumable.test(t.viewItem,{name:!0})){if(0===t.viewItem.childCount)return;const e=[...t.viewItem.getChildren()];let o=!1,n=!0;for(const t of e)!o||t.is('ul')||t.is('ol')||t._remove(),t.is('text')?(n&&(t._data=t.data.replace(/^\s+/,'')),(!t.nextSibling||t.nextSibling.is('ul')||t.nextSibling.is('ol'))&&(t._data=t.data.replace(/\s+$/,''))):(t.is('ul')||t.is('ol'))&&(o=!0),n=!1}}function Ta(e,t){if(!t.isPhantom){const e=t.modelPosition.nodeBefore;if(e&&e.is('listItem')){const o=t.mapper.toViewElement(e),n=o.getAncestors().find((e)=>e.is('ul')||e.is('ol')),i=new yc({startPosition:xc.createAt(o,0)});for(const e of i)if('elementStart'==e.type&&e.item.is('li')){t.viewPosition=e.previousPosition;break}else if('elementEnd'==e.type&&e.item==n){t.viewPosition=e.nextPosition;break}}}}function Pa(e,t){const o=t.viewPosition,n=o.parent,i=t.mapper;if('ul'==n.name||'ol'==n.name){if(!o.isAtEnd){const e=i.toModelElement(o.nodeAfter);t.modelPosition=Ku.createBefore(e)}else{const e=i.toModelElement(o.nodeBefore),n=i.getModelLength(o.nodeBefore);t.modelPosition=Ku.createBefore(e).getShiftedBy(n)}e.stop()}else if('li'==n.name&&o.nodeBefore&&('ul'==o.nodeBefore.name||'ol'==o.nodeBefore.name)){const r=i.toModelElement(n);let a=1,s=o.nodeBefore;for(;s&&(s.is('ul')||s.is('ol'));)a+=i.getModelLength(s),s=s.previousSibling;t.modelPosition=Ku.createBefore(r).getShiftedBy(a),e.stop()}}function Ea(e,t){function o(e){const t=e.nodeBefore;if(!t||!t.is('listItem')){const t=e.nodeAfter;t&&t.is('listItem')&&a.set(t,t)}else{let o=t;if(a.has(o))return;for(;o.previousSibling&&o.previousSibling.is('listItem');)if(o=o.previousSibling,a.has(o))return;a.set(e.nodeBefore,o)}}function n(e){for(let o=0,n=null;e&&e.is('listItem');){const i=e.getAttribute('indent');if(i>o){let r;null===n?(n=i-o,r=o):(n>i&&(n=i),r=i-n),t.setAttribute('indent',r,e),s=!0}else n=null,o=e.getAttribute('indent')+1;e=e.nextSibling}}function i(e){for(let o=[],n=null;e&&e.is('listItem');){const i=e.getAttribute('indent');if(n&&n.getAttribute('indent')>i&&(o=o.slice(0,i+1)),0!=i)if(o[i]){const n=o[i];e.getAttribute('type')!=n&&(t.setAttribute('type',n,e),s=!0)}else o[i]=e.getAttribute('type');n=e,e=e.nextSibling}}const r=e.document.differ.getChanges(),a=new Map;let s=!1;for(const n of r)if('insert'==n.type&&'listItem'==n.name)o(n.position);else if('insert'==n.type&&'listItem'!=n.name){if('$text'!=n.name){const e=n.position.nodeAfter;e.hasAttribute('indent')&&(t.removeAttribute('indent',e),s=!0),e.hasAttribute('type')&&(t.removeAttribute('type',e),s=!0)}const e=n.position.getShiftedBy(n.length);o(e)}else'remove'==n.type&&'listItem'==n.name?o(n.position):'attribute'==n.type&&'indent'==n.attributeKey?o(n.range.start):'attribute'==n.type&&'type'==n.attributeKey&&o(n.range.start);for(const o of a.values())n(o),i(o);return s}function Sa(e,[t,o]){let n=t.is('documentFragment')?t.getChild(0):t;if(n&&n.is('listItem')){const e=o.getFirstPosition();let t=null;if(e.parent.is('listItem')?t=e.parent:e.nodeBefore&&e.nodeBefore.is('listItem')&&(t=e.nodeBefore),t){const e=t.getAttribute('indent');if(0<e)for(;n&&n.is('listItem');)n._setAttribute('indent',n.getAttribute('indent')+e),n=n.nextSibling}}}function Oa(e,t){const o=t.mapper,n=t.writer,i='numbered'==e.getAttribute('type')?'ol':'ul',r=fa(n),a=n.createContainerElement(i,null);return n.insert(xc.createAt(a),r),o.bindElements(e,r),r}function Ra(e,t){const o=!!t.sameIndent,n=!!t.smallerIndent,i=e instanceof Wu?e.getAttribute('indent'):t.indent;for(let r=e instanceof Wu?e.previousSibling:e.nodeBefore;r&&'listItem'==r.name;){const e=r.getAttribute('indent');if(o&&i==e||n&&i>e)return r;r=r.previousSibling}return null}function Ia(e,t,o){return t&&o&&('ul'==t.name||'ol'==t.name)&&t.name==o.name?e.mergeContainers(xc.createAfter(t)):null}function Va(e,t,o){const n=t.parent,i=o.mapper,r=o.writer;let a=i.toViewPosition(Ku.createBefore(e));const s=Ra(e,{sameIndent:!0,smallerIndent:!0}),l=e.previousSibling;if(s&&s.getAttribute('indent')==e.getAttribute('indent')){const e=i.toViewElement(s);a=r.breakContainer(xc.createAfter(e))}else a=l&&'listItem'==l.name?i.toViewPosition(Ku.createAt(l,'end')):i.toViewPosition(Ku.createBefore(e));if(a=Na(a),r.insert(a,n),l&&'listItem'==l.name){const e=i.toViewElement(l),o=new yc({boundaries:new Cc(xc.createAt(e,0),a),ignoreElementEnd:!0});for(const e of o)if(e.item.is('li')){const n=r.breakContainer(xc.createBefore(e.item)),i=e.item.parent,a=xc.createAt(t,'end');Ia(r,a.nodeBefore,a.nodeAfter),r.move(Cc.createOn(i),a),o.position=n}}else{const o=n.nextSibling;if(o&&(o.is('ul')||o.is('ol'))){let n=null;for(const t of o.getChildren()){const o=i.toModelElement(t);if(o&&o.getAttribute('indent')>e.getAttribute('indent'))n=t;else break}n&&(r.breakContainer(xc.createAfter(n)),r.move(Cc.createOn(n.parent),xc.createAt(t,'end')))}}Ia(r,n,n.nextSibling),Ia(r,n.previousSibling,n)}function Fa(e,t,o,n,i){const r=Ra(t,{sameIndent:!0,smallerIndent:!0,indent:e}),a=i.mapper,s=i.writer,l=r?r.getAttribute('indent'):null;let d;if(!r)d=o;else if(l==e){const e=a.toViewElement(r).parent;d=xc.createAfter(e)}else{const e=Ku.createAt(r,'end');d=a.toViewPosition(e)}d=Na(d);for(const r of[...n.getChildren()])(r.is('ul')||r.is('ol'))&&(d=s.move(Cc.createOn(r),d).end,Ia(s,r,r.nextSibling),Ia(s,r.previousSibling,r))}function Na(e){return e.getLastMatchingPosition((e)=>e.item.is('uiElement'))}function Ma(e){let t=1;for(const o of e.getChildren())if('ul'==o.name||'ol'==o.name)for(const e of o.getChildren())t+=Ma(e);return t}var Da=Number.POSITIVE_INFINITY,Ba=Math.max,La=Math.min,za=Math.floor;Object.defineProperty(t,'__esModule',{value:!0});var ja=Object.getPrototypeOf,qa=function(e){return ja(Object(e))},Wa=function(e){var t=!1;if(null!=e&&'function'!=typeof e.toString)try{t=!!(e+'')}catch(t){}return t},Ua=function(e){return!!e&&'object'==typeof e},Ha=Object.prototype,Ka=Function.prototype.toString,Ga=Ha.hasOwnProperty,$a=Ka.call(Object),Ja=Ha.toString,Qa=function(e){if(!Ua(e)||Ja.call(e)!='[object Object]'||Wa(e))return!1;var t=qa(e);if(null===t)return!0;var o=Ga.call(t,'constructor')&&t.constructor;return'function'==typeof o&&o instanceof o&&Ka.call(o)==$a};class Ya{constructor(e,t){this._config={},t&&this.define(t),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}_setToTarget(e,t,o,n=!1){if(Qa(t))return void this._setObjectToTarget(e,t,n);const i=t.split('.');t=i.pop();for(const r of i)Qa(e[r])||(e[r]={}),e=e[r];return Qa(o)?(Qa(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,o,n)):void(n&&'undefined'!=typeof e[t]||(e[t]=o))}_getFromSource(e,t){const o=t.split('.');t=o.pop();for(const n of o){if(!Qa(e[n])){e=null;break}e=e[n]}return e?e[t]:void 0}_setObjectToTarget(e,t,o){Object.keys(t).forEach((n)=>{this._setToTarget(e,n,t[n],o)})}}const Xa='https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html';class Za extends Error{constructor(e,t){e=n(e),t&&(e+=' '+JSON.stringify(t)),super(e),this.name='CKEditorError',this.data=t}static isCKEditorError(e){return e instanceof Za}}var es=function(){return function e(){e.called=!0}};class ts{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=es(),this.off=es()}}const os={get(e){return'number'==typeof e?e:this[e]||this.normal},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};var ns=os;const is=Symbol('listeningTo'),rs=Symbol('emitterId'),as={on(e,t,o={}){this.listenTo(this,e,t,o)},once(e,t,o){this.listenTo(this,e,function(e,...o){e.off(),t.call(this,e,...o)},o)},off(e,t){this.stopListening(this,e,t)},listenTo(e,t,o,n={}){let i,r;this[is]||(this[is]={});const l=this[is];s(e)||a(e);const d=s(e);(i=l[d])||(i=l[d]={emitter:e,callbacks:{}}),(r=i.callbacks[t])||(r=i.callbacks[t]=[]),r.push(o),c(e,t);const m=u(e,t),p=ns.get(n.priority),g={callback:o,priority:p};for(const r of m){let e=!1;for(let t=0;t<r.length;t++)if(r[t].priority<p){r.splice(t,0,g),e=!0;break}e||r.push(g)}},stopListening(e,t,o){const n=this[is];let i=e&&s(e);const r=n&&i&&n[i],a=r&&t&&r.callbacks[t];if(n&&(!e||r)&&(!t||a))if(o)g(e,t,o);else if(a){for(;o=a.pop();)g(e,t,o);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(e,t);delete n[i]}else{for(i in n)this.stopListening(n[i].emitter);delete this[is]}},fire(e,...t){const o=e instanceof ts?e:new ts(this,e),n=o.name;let r=m(this,n);if(o.path.push(this),r){const e=[o,...t];r=Array.from(r);for(let t=0;t<r.length&&(r[t].callback.apply(this,e),o.off.called&&(delete o.off.called,g(this,n,r[t].callback)),!o.stop.called);t++);}if(this._delegations){const e=this._delegations.get(n),i=this._delegations.get('*');e&&p(e,o,t),i&&p(i,o,t)}return o.return},delegate(...e){return{to:(t,o)=>{this._delegations||(this._delegations=new Map);for(const n of e){const e=this._delegations.get(n);e?e.set(t,o):this._delegations.set(n,new Map([[t,o]]))}}}},stopDelegating(e,t){if(this._delegations)if(!e)this._delegations.clear();else if(!t)this._delegations.delete(e);else{const o=this._delegations.get(e);o&&o.delete(t)}}};var ss=as,ls=function(e,t){return e===t||e!==e&&t!==t},ds=function(e,t){for(var o=e.length;o--;)if(ls(e[o][0],t))return o;return-1},cs=Array.prototype,us=cs.splice;h.prototype.clear=function(){this.__data__=[]},h.prototype['delete']=function(e){var t=this.__data__,o=ds(t,e);if(0>o)return!1;var n=t.length-1;return o==n?t.pop():us.call(t,o,1),!0},h.prototype.get=function(e){var t=this.__data__,o=ds(t,e);return 0>o?void 0:t[o][1]},h.prototype.has=function(e){return-1<ds(this.__data__,e)},h.prototype.set=function(e,t){var o=this.__data__,n=ds(o,e);return 0>n?o.push([e,t]):o[n][1]=t,this};var ms=h,ps=function(e){var t=typeof e;return!!e&&('object'==t||'function'==t)},gs=Object.prototype,fs=gs.toString,hs=function(e){var t=ps(e)?fs.call(e):'';return t=='[object Function]'||t=='[object GeneratorFunction]'},bs=Function.prototype.toString,ks=function(e){if(null!=e){try{return bs.call(e)}catch(t){}try{return e+''}catch(t){}}return''},_s=/[\\^$.*+?()[\]{}|]/g,ws=/^\[object .+?Constructor\]$/,vs=Object.prototype,ys=Function.prototype.toString,xs=vs.hasOwnProperty,Cs=RegExp('^'+ys.call(xs).replace(_s,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),As=function(e){if(!ps(e))return!1;var t=hs(e)||Wa(e)?Cs:ws;return t.test(ks(e))},Ts=function(e,t){var o=e[t];return As(o)?o:void 0},Ps=Ts(Object,'create'),Es=Ps,Ss=Object.prototype,Os=Ss.hasOwnProperty,Rs=Object.prototype,Is=Rs.hasOwnProperty;b.prototype.clear=function(){this.__data__=Es?Es(null):{}},b.prototype['delete']=function(e){return this.has(e)&&delete this.__data__[e]},b.prototype.get=function(e){var t=this.__data__;if(Es){var o=t[e];return o==='__lodash_hash_undefined__'?void 0:o}return Os.call(t,e)?t[e]:void 0},b.prototype.has=function(e){var t=this.__data__;return Es?t[e]!==void 0:Is.call(t,e)},b.prototype.set=function(e,t){var o=this.__data__;return o[e]=Es&&void 0===t?'__lodash_hash_undefined__':t,this};var Vs=b,Fs=o(1),Ns=Ts(Fs.a,'Map'),Ms=Ns,Ds=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e},Bs=function(e,t){var o=e.__data__;return Ds(t)?o['string'==typeof t?'string':'hash']:o.map};k.prototype.clear=function(){this.__data__={hash:new Vs,map:new(Ms||ms),string:new Vs}},k.prototype['delete']=function(e){return Bs(this,e)['delete'](e)},k.prototype.get=function(e){return Bs(this,e).get(e)},k.prototype.has=function(e){return Bs(this,e).has(e)},k.prototype.set=function(e,t){return Bs(this,e).set(e,t),this};var Ls=k;_.prototype.clear=function(){this.__data__=new ms},_.prototype['delete']=function(e){return this.__data__['delete'](e)},_.prototype.get=function(e){return this.__data__.get(e)},_.prototype.has=function(e){return this.__data__.has(e)},_.prototype.set=function(e,t){var o=this.__data__;return o instanceof ms&&o.__data__.length==200&&(o=this.__data__=new Ls(o.__data__)),o.set(e,t),this};var zs=_,js=function(e,t){for(var o=-1,n=e.length;++o<n&&!(!1===t(e[o],o,e)););return e},qs=Object.prototype,Ws=qs.hasOwnProperty,Us=w,Hs=function(e,t,o,n){o||(o={});for(var i=-1,r=t.length;++i<r;){var a=t[i],s=n?n(o[a],e[a],a,o,e):e[a];Us(o,a,s)}return o},Ks=Object.prototype,Gs=Ks.hasOwnProperty,$s=v,Js=Object.keys,Qs=function(e){return Js(Object(e))},Ys=function(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n},Xs=function(e){return function(t){return null==t?void 0:t[e]}},Zs=Xs('length'),el=function(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},tl=function(e){return null!=e&&el(Zs(e))&&!hs(e)},ol=function(e){return Ua(e)&&tl(e)},nl=Object.prototype,il=nl.hasOwnProperty,rl=nl.toString,al=nl.propertyIsEnumerable,sl=function(e){return ol(e)&&il.call(e,'callee')&&(!al.call(e,'callee')||rl.call(e)=='[object Arguments]')},ll=Array.isArray,dl=ll,cl=Object.prototype,ul=cl.toString,ml=function(e){return'string'==typeof e||!dl(e)&&Ua(e)&&ul.call(e)=='[object String]'},pl=function(e){var t=e?e.length:void 0;return el(t)&&(dl(e)||ml(e)||sl(e))?Ys(t,String):null},gl=/^(?:0|[1-9]\d*)$/,fl=function(e,t){return t=null==t?9007199254740991:t,!!t&&('number'==typeof e||gl.test(e))&&-1<e&&0==e%1&&e<t},hl=Object.prototype,bl=function(e){var t=e&&e.constructor,o='function'==typeof t&&t.prototype||hl;return e===o},kl=function(e){var t=bl(e);if(!(t||tl(e)))return Qs(e);var o=pl(e),n=o||[],i=n.length;for(var r in e)!$s(e,r)||!!o&&('length'==r||fl(r,i))||t&&'constructor'==r||n.push(r);return n},_l=function(e,t){return e&&Hs(t,kl(t),e)},wl=function(e,t){if(t)return e.slice();var o=new e.constructor(e.length);return e.copy(o),o},vl=function(e,t){var o=-1,n=e.length;for(t||(t=Array(n));++o<n;)t[o]=e[o];return t},yl=Object.getOwnPropertySymbols;yl||(y=function(){return[]});var xl=y,Cl=function(e,t){return Hs(e,xl(e),t)},Al=function(e,t){for(var o=-1,n=t.length,i=e.length;++o<n;)e[i+o]=t[o];return e},Tl=function(e,t,o){var n=t(e);return dl(e)?n:Al(n,o(e))},Pl=function(e){return Tl(e,kl,xl)},El=Ts(Fs.a,'DataView'),Sl=El,Ol=Ts(Fs.a,'Promise'),Rl=Ol,Il=Ts(Fs.a,'Set'),Vl=Il,Fl=Ts(Fs.a,'WeakMap'),Nl=Fl,Ml='[object Map]',Dl='[object Promise]',Bl='[object Set]',Ll='[object WeakMap]',zl='[object DataView]',jl=Object.prototype,ql=jl.toString,Wl=ks(Sl),Ul=ks(Ms),Hl=ks(Rl),Kl=ks(Vl),Gl=ks(Nl);(Sl&&x(new Sl(new ArrayBuffer(1)))!=zl||Ms&&x(new Ms)!=Ml||Rl&&x(Rl.resolve())!=Dl||Vl&&x(new Vl)!=Bl||Nl&&x(new Nl)!=Ll)&&(x=function(e){var t=ql.call(e),o=t=='[object Object]'?e.constructor:void 0,n=o?ks(o):void 0;if(n)switch(n){case Wl:return zl;case Ul:return Ml;case Hl:return Dl;case Kl:return Bl;case Gl:return Ll;}return t});var $l=x,Jl=Object.prototype,Ql=Jl.hasOwnProperty,Yl=function(e){var t=e.length,o=e.constructor(t);return t&&'string'==typeof e[0]&&Ql.call(e,'index')&&(o.index=e.index,o.input=e.input),o},Xl=Fs.a.Uint8Array,Zl=Xl,ed=function(e){var t=new e.constructor(e.byteLength);return new Zl(t).set(new Zl(e)),t},td=function(e,t){var o=t?ed(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)},od=function(e,t){return e.set(t[0],t[1]),e},nd=function(e,t,o,n){var i=-1,r=e.length;for(n&&r&&(o=e[++i]);++i<r;)o=t(o,e[i],i,e);return o},id=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e,n){o[++t]=[n,e]}),o},rd=function(e,t,o){var n=t?o(id(e),!0):id(e);return nd(n,od,new e.constructor)},ad=/\w*$/,sd=function(e){var t=new e.constructor(e.source,ad.exec(e));return t.lastIndex=e.lastIndex,t},ld=function(e,t){return e.add(t),e},dd=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=e}),o},cd=function(e,t,o){var n=t?o(dd(e),!0):dd(e);return nd(n,ld,new e.constructor)},ud=Fs.a.Symbol,md=ud,pd=md?md.prototype:void 0,gd=pd?pd.valueOf:void 0,fd=function(e){return gd?Object(gd.call(e)):{}},hd=function(e,t){var o=t?ed(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)},bd=function(e,t,o,n){var i=e.constructor;return t==='[object ArrayBuffer]'?ed(e):t==='[object Boolean]'||t==='[object Date]'?new i(+e):t==='[object DataView]'?td(e,n):t==='[object Float32Array]'||t==='[object Float64Array]'||t==='[object Int8Array]'||t==='[object Int16Array]'||t==='[object Int32Array]'||t==='[object Uint8Array]'||t==='[object Uint8ClampedArray]'||t==='[object Uint16Array]'||t==='[object Uint32Array]'?hd(e,n):t==='[object Map]'?rd(e,n,o):t==='[object Number]'||t==='[object String]'?new i(e):t==='[object RegExp]'?sd(e):t==='[object Set]'?cd(e,n,o):t==='[object Symbol]'?fd(e):void 0},kd=Object.create,_d=function(e){return ps(e)?kd(e):{}},wd=function(e){return'function'!=typeof e.constructor||bl(e)?{}:_d(qa(e))},vd=o(9),yd='[object Arguments]',xd='[object Function]',Cd='[object GeneratorFunction]',Ad='[object Object]',Td={};Td[yd]=Td['[object Array]']=Td['[object ArrayBuffer]']=Td['[object DataView]']=Td['[object Boolean]']=Td['[object Date]']=Td['[object Float32Array]']=Td['[object Float64Array]']=Td['[object Int8Array]']=Td['[object Int16Array]']=Td['[object Int32Array]']=Td['[object Map]']=Td['[object Number]']=Td[Ad]=Td['[object RegExp]']=Td['[object Set]']=Td['[object String]']=Td['[object Symbol]']=Td['[object Uint8Array]']=Td['[object Uint8ClampedArray]']=Td['[object Uint16Array]']=Td['[object Uint32Array]']=!0,Td['[object Error]']=Td[xd]=Td['[object WeakMap]']=!1;var Pd=C,Ed=function(e){return Pd(e,!1,!0)};class Sd{constructor(){this.parent=null}get index(){let e;if(!this.parent)return null;if(-1==(e=this.parent.getChildIndex(this)))throw new Za('view-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.parent instanceof Sd?this.parent.document:null}getPath(){const e=[];for(let t=this;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),n=e.getAncestors(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),n=A(t,o);return!('prefix'!==n)||'extension'!==n&&t[n]<o[n]}isAfter(e){return this!=e&&!(this.root!==e.root)&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire('change:'+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Ed(this);return delete e.parent,e}is(e){return'node'==e}}f(Sd,ss);class Od extends Sd{constructor(e){super(),this._textData=e}is(e){return'text'==e||super.is(e)}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange('text',this),this._textData=e}isSimilar(e){return!!(e instanceof Od)&&(this===e||this.data===e.data)}_clone(){return new Od(this.data)}}class Rd{constructor(e,t,o){if(this.textNode=e,0>t||t>e.data.length)throw new Za('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>o||t+o>e.data.length)throw new Za('view-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+o),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this.textNode:this.parent;null!==o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}}class Id{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)('string'==typeof t||t instanceof RegExp)&&(t={name:t}),t.classes&&('string'==typeof t.classes||t.classes instanceof RegExp)&&(t.classes=[t.classes]),this._patterns.push(t)}match(...e){for(const t of e)for(const e of this._patterns){const o=E(t,e);if(o)return{element:t,pattern:e,match:o}}return null}matchAll(...e){const t=[];for(const o of e)for(const e of this._patterns){const n=E(o,e);n&&t.push({element:o,pattern:e,match:n})}return 0<t.length?t:null}getElementName(){if(1!==this._patterns.length)return null;const e=this._patterns[0],t=e.name;return'function'!=typeof e&&t&&!(t instanceof RegExp)?t:null}}class Vd extends Sd{constructor(e,t,o){if(super(),this.name=e,this._attrs=V(t),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has('class')){const e=this._attrs.get('class');N(this._classes,e),this._attrs.delete('class')}this._styles=new Map,this._attrs.has('style')&&(F(this._styles,this._attrs.get('style')),this._attrs.delete('style')),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name||super.is(e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){0<this._classes.size&&(yield'class'),0<this._styles.size&&(yield'style');for(const e of this._attrs.keys())yield e}*getAttributes(){yield*this._attrs.entries(),0<this._classes.size&&(yield['class',this.getAttribute('class')]),0<this._styles.size&&(yield['style',this.getAttribute('style')])}getAttribute(e){if('class'==e)return 0<this._classes.size?[...this._classes].join(' '):void 0;if('style'==e){if(0<this._styles.size){let e='';for(const[t,o]of this._styles)e+=`${t}:${o};`;return e}return}return this._attrs.get(e)}hasAttribute(e){return'class'==e?0<this._classes.size:'style'==e?0<this._styles.size:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Vd))return!1;if(this===e)return!0;if(this.name!=e.name)return!1;if(this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,o]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==o)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const[t,o]of this._styles)if(!e._styles.has(t)||e._styles.get(t)!==o)return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.get(e)}getStyleNames(){return this._styles.keys()}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Id(...e);for(let o=this.parent;o;){if(t.match(o))return o;o=o.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(','),t=Array.from(this._styles).map((e)=>`${e[0]}:${e[1]}`).sort().join(';'),o=Array.from(this._attrs).map((e)=>`${e[0]}="${e[1]}"`).sort().join(' ');return this.name+(''==e?'':` class="${e}"`)+(''==t?'':` style="${t}"`)+(''==o?'':` ${o}`)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const o=new this.constructor(this.name,this._attrs,t);return o._classes=new Set(this._classes),o._styles=new Map(this._styles),o._customProperties=new Map(this._customProperties),o.getFillerOffset=this.getFillerOffset,o}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange('children',this);let o=0;const n=M(t);for(const i of n)null!==i.parent&&i._remove(),i.parent=this,this._children.splice(e,0,i),e++,o++;return o}_removeChildren(e,t=1){this._fireChange('children',this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=t+'',this._fireChange('attributes',this),'class'==e?N(this._classes,t):'style'==e?F(this._styles,t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange('attributes',this),'class'==e?!!(0<this._classes.size)&&(this._classes.clear(),!0):'style'==e?!!(0<this._styles.size)&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._classes.add(e))}_removeClass(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._classes.delete(e))}_setStyle(e,t){if(this._fireChange('attributes',this),Qa(e)){const t=Object.keys(e);for(const o of t)this._styles.set(o,e[o])}else this._styles.set(e,t)}_removeStyle(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._styles.delete(e))}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}class Fd extends Vd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=D}is(e,t=null){return t?'containerElement'==e&&t==this.name||super.is(e,t):'containerElement'==e||super.is(e)}}var Nd=B,Md=function(e,t,o){var n=o.length;return 0===n?e.call(t):1===n?e.call(t,o[0]):2===n?e.call(t,o[0],o[1]):3===n?e.call(t,o[0],o[1],o[2]):e.apply(t,o)},Dd=Object.prototype,Bd=Dd.toString,Ld=function(e){return'symbol'==typeof e||Ua(e)&&Bd.call(e)=='[object Symbol]'},zd=0/0,jd=/^\s+|\s+$/g,qd=/^[-+]0x[0-9a-f]+$/i,Wd=/^0b[01]+$/i,Ud=/^0o[0-7]+$/i,Hd=parseInt,Kd=function(e){if('number'==typeof e)return e;if(Ld(e))return zd;if(ps(e)){var t=hs(e.valueOf)?e.valueOf():e;e=ps(t)?t+'':t}if('string'!=typeof e)return 0===e?e:+e;e=e.replace(jd,'');var o=Wd.test(e);return o||Ud.test(e)?Hd(e.slice(2),o?2:8):qd.test(e)?zd:+e},Gd=1/0,$d=function(e){if(!e)return 0===e?e:0;if(e=Kd(e),e===Gd||e===-Gd){var t=0>e?-1:1;return t*17976931348623157e292}return e===e?e:0},Jd=function(e){var t=$d(e),o=t%1;return t===t?o?t-o:t:0},Qd=Ba,Yd=function(e,t){if('function'!=typeof e)throw new TypeError('Expected a function');return t=Qd(void 0===t?e.length-1:Jd(t),0),function(){for(var o=arguments,n=-1,i=Qd(o.length-t,0),r=Array(i);++n<i;)r[n]=o[t+n];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,o[0],r);case 2:return e.call(this,o[0],o[1],r);}var a=Array(t+1);for(n=-1;++n<t;)a[n]=o[n];return a[t]=r,Md(e,this,a)}},Xd=Fs.a.Reflect,Zd=Xd,ec=function(e){for(var t=[],o;!(o=e.next()).done;)t.push(o.value);return t},tc=Object.prototype,oc=Zd?Zd.enumerate:void 0,nc=tc.propertyIsEnumerable;oc&&!nc.call({valueOf:1},'valueOf')&&(L=function(e){return ec(oc(e))});var ic=L,rc=Object.prototype,ac=rc.hasOwnProperty,sc=function(e){for(var t=-1,o=bl(e),n=ic(e),i=n.length,r=pl(e),a=r||[],s=a.length;++t<i;){var l=n[t];!!r&&('length'==l||fl(l,s))||'constructor'==l&&(o||!ac.call(e,l))||a.push(l)}return a},lc=Object.prototype,dc=lc.propertyIsEnumerable,cc=!dc.call({valueOf:1},'valueOf'),uc=function(e){return Yd(function(t,o){var n=-1,i=o.length,r=1<i?o[i-1]:void 0,a=2<i?o[2]:void 0;for(r=3<e.length&&'function'==typeof r?(i--,r):void 0,a&&Nd(o[0],o[1],a)&&(r=3>i?void 0:r,i=1),t=Object(t);++n<i;){var s=o[n];s&&e(t,s,n,r)}return t})}(function(e,t){if(cc||bl(t)||tl(t))return void Hs(t,sc(t),e);for(var o in t)Us(e,o,t[o])}),mc=uc;const pc=Symbol('observableProperties'),gc=Symbol('boundObservables'),fc=Symbol('boundProperties'),hc={set(e,t){if(ps(e))return void Object.keys(e).forEach((t)=>{this.set(t,e[t])},this);z(this);const o=this[pc];if(e in this&&!o.has(e))throw new Za('observable-set-cannot-override: Cannot override an existing property.');Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get(){return o.get(e)},set(t){const n=o.get(e);n===t&&o.has(e)||(o.set(e,t),this.fire('change:'+e,e,t,n))}}),this[e]=t},bind(...e){if(!e.length||!U(e))throw new Za('observable-bind-wrong-properties: All properties must be strings.');if(new Set(e).size!==e.length)throw new Za('observable-bind-duplicate-properties: Properties must be unique.');z(this);const t=this[fc];e.forEach((e)=>{if(t.has(e))throw new Za('observable-bind-rebind: Cannot bind the same property more that once.')});const o=new Map;return e.forEach((e)=>{const n={property:e,to:[]};t.set(e,n),o.set(e,n)}),{to:j,toMany:q,_observable:this,_bindProperties:e,_to:[],_bindings:o}},unbind(...e){if(!(pc in this))return;const t=this[fc],o=this[gc];if(e.length){if(!U(e))throw new Za('observable-unbind-wrong-properties: Properties must be strings.');e.forEach((e)=>{const n=t.get(e);if(!n)return;let i,r,a,s;n.to.forEach((e)=>{i=e[0],r=e[1],a=o.get(i),s=a[r],s.delete(n),s.size||delete a[r],Object.keys(a).length||(o.delete(i),this.stopListening(i,'change'))}),t.delete(e)})}else o.forEach((e,t)=>{this.stopListening(t,'change')}),o.clear(),t.clear()},decorate(e){const t=this[e];if(!t)throw new Za('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.',{object:this,methodName:e});this.on(e,(e,o)=>{e.return=t.apply(this,o)}),this[e]=function(...t){return this.fire(e,t)}}};mc(hc,ss);var bc=hc;const kc=Symbol('document');class _c extends Fd{constructor(e,t,o){super(e,t,o),this.set('isReadOnly',!1),this.set('isFocused',!1)}get document(){return this.getCustomProperty(kc)}set _document(e){if(this.getCustomProperty(kc))throw new Za('view-editableelement-document-already-set: View document is already set.');this._setCustomProperty(kc,e),this.bind('isReadOnly').to(e),this.bind('isFocused').to(e,'isFocused',(t)=>t&&e.selection.editableElement==this),this.listenTo(e.selection,'change',()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}}f(_c,bc);const wc=Symbol('rootName');class vc extends _c{constructor(e){super(e),this.rootName='main'}is(e,t=null){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}get rootName(){return this.getCustomProperty(wc)}set rootName(e){this._setCustomProperty(wc,e)}set _name(e){this.name=e}}class yc{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new Za('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');if(e.direction&&'forward'!=e.direction&&'backward'!=e.direction)throw new Za('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:e.direction});this.boundaries=e.boundaries||null,this.position=e.startPosition?xc.createFromPosition(e.startPosition):xc.createFromPosition(e.boundaries['backward'==e.direction?'end':'start']),this.direction=e.direction||'forward',this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,o,n;do n=this.position,({done:t,value:o}=this.next());while(!t&&e(o));t||(this.position=n)}next(){return'forward'==this.direction?this._next():this._previous()}_next(){let e=xc.createFromPosition(this.position);const t=this.position,o=e.parent;if(null===o.parent&&e.offset===o.childCount)return{done:!0};if(o===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let n;if(o instanceof Od){if(e.isAtEnd)return this.position=xc.createAfter(o),this._next();n=o.data[e.offset]}else n=o.getChild(e.offset);if(n instanceof Vd)return this.shallow?e.offset++:e=new xc(n,0),this.position=e,this._formatReturnValue('elementStart',n,t,e,1);if(!(n instanceof Od)){if('string'==typeof n){let n;if(this.singleCharacters)n=1;else{const t=o===this._boundaryEndParent?this.boundaries.end.offset:o.data.length;n=t-e.offset}const i=new Rd(o,e.offset,n);return e.offset+=n,this.position=e,this._formatReturnValue('text',i,t,e,n)}return e=xc.createAfter(o),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue('elementEnd',o,t,e)}if(this.singleCharacters)return e=new xc(n,0),this.position=e,this._next();else{let o=n.data.length,i;return n==this._boundaryEndParent?(o=this.boundaries.end.offset,i=new Rd(n,0,o),e=xc.createAfter(i)):(i=new Rd(n,0,n.data.length),e.offset++),this.position=e,this._formatReturnValue('text',i,t,e,o)}}_previous(){let e=xc.createFromPosition(this.position);const t=this.position,o=e.parent;if(null===o.parent&&0===e.offset)return{done:!0};if(o==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let n;if(o instanceof Od){if(e.isAtStart)return this.position=xc.createBefore(o),this._previous();n=o.data[e.offset-1]}else n=o.getChild(e.offset-1);if(n instanceof Vd)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue('elementStart',n,t,e,1)):(e=new xc(n,n.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue('elementEnd',n,t,e));if(!(n instanceof Od)){if('string'==typeof n){let n;if(!this.singleCharacters){const t=o===this._boundaryStartParent?this.boundaries.start.offset:0;n=e.offset-t}else n=1;e.offset-=n;const i=new Rd(o,e.offset,n);return this.position=e,this._formatReturnValue('text',i,t,e,n)}return e=xc.createBefore(o),this.position=e,this._formatReturnValue('elementStart',o,t,e,1)}if(this.singleCharacters)return e=new xc(n,n.data.length),this.position=e,this._previous();else{let o=n.data.length,i;if(n==this._boundaryStartParent){const t=this.boundaries.start.offset;i=new Rd(n,t,n.data.length-t),o=i.data.length,e=xc.createBefore(i)}else i=new Rd(n,0,n.data.length),e.offset--;return this.position=e,this._formatReturnValue('text',i,t,e,o)}}_formatReturnValue(e,t,o,n,i){return t instanceof Rd&&(t.offsetInText+t.data.length==t.textNode.data.length&&('forward'!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?o=xc.createAfter(t.textNode):(n=xc.createAfter(t.textNode),this.position=n)),0===t.offsetInText&&('backward'!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?o=xc.createBefore(t.textNode):(n=xc.createBefore(t.textNode),this.position=n))),{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:n,length:i}}}}class xc{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is('text')?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is('text')?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const e=this.parent.is('text')?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof _c);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=xc.createFromPosition(this),o=t.offset+e;return t.offset=0>o?0:o,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new yc(t);return o.skip(e),o.position}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let n=0;for(;t[n]==o[n]&&t[n];)n++;return 0==n?null:t[n-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return'before'==this.compareWith(e)}isAfter(e){return'after'==this.compareWith(e)}compareWith(e){if(this.root!==e.root)return'different';if(this.isEqual(e))return'same';const t=this.parent.is('node')?this.parent.getPath():[],o=e.parent.is('node')?e.parent.getPath():[];t.push(this.offset),o.push(e.offset);const n=A(t,o);return'prefix'===n?'before':'extension'===n?'after':t[n]<o[n]?'before':'after'}static createAt(e,t){if(e instanceof xc)return this.createFromPosition(e);else{const o=e;if('end'==t)t=o.is('text')?o.data.length:o.childCount;else{if('before'==t)return this.createBefore(o);if('after'==t)return this.createAfter(o);t||(t=0)}return new xc(o,t)}}static createAfter(e){if(e.is('textProxy'))return new xc(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new Za('view-position-after-root: You can not make position after root.',{root:e});return new xc(e.parent,e.index+1)}static createBefore(e){if(e.is('textProxy'))return new xc(e.textNode,e.offsetInText);if(!e.parent)throw new Za('view-position-before-root: You can not make position before root.',{root:e});return new xc(e.parent,e.index)}static createFromPosition(e){return new this(e.parent,e.offset)}}class Cc{constructor(e,t=null){this.start=xc.createFromPosition(e),this.end=t?xc.createFromPosition(t):xc.createFromPosition(e)}*[Symbol.iterator](){yield*new yc({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Q,{direction:'backward'}),t=this.end.getLastMatchingPosition(Q);return e.parent.is('text')&&e.isAtStart&&(e=xc.createBefore(e.parent)),t.parent.is('text')&&t.isAtEnd&&(t=xc.createAfter(t.parent)),new Cc(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Q);if(e.isAfter(this.end)||e.isEqual(this.end))return new Cc(e,e);let t=this.end.getLastMatchingPosition(Q,{direction:'backward'});const o=e.nodeAfter,n=t.nodeBefore;return o&&o.is('text')&&(e=new xc(o,0)),n&&n.is('text')&&(t=new xc(n,n.data.length)),new Cc(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&n}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Cc(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Cc(e.end,this.end))):t.push(Cc.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new Cc(t,o)}return null}getWalker(e={}){return e.boundaries=this,new yc(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new yc(e);for(const o of t)yield o.item}*getPositions(e={}){e.boundaries=this;const t=new yc(e);yield t.position;for(const o of t)yield o.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static createFromParentsAndOffsets(e,t,o,n){return new this(new xc(e,t),new xc(o,n))}static createFromRange(e){return new this(e.start,e.end)}static createFromPositionAndShift(e,t){const o=e,n=e.getShiftedBy(t);return 0<t?new this(o,n):new this(n,o)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.childCount)}static createOn(e){const t=e.is('textProxy')?e.offsetSize:1;return this.createFromPositionAndShift(xc.createBefore(e),t)}static createCollapsedAt(e,t){const o=xc.createAt(e,t),n=xc.createFromPosition(o);return new Cc(o,n)}}class Ac{constructor(e=null,t,o){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel='',this.setTo(e,t,o)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.end:e.start;return xc.createFromPosition(t)}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.start:e.end;return xc.createFromPosition(t)}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield Cc.createFromRange(e)}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?Cc.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?Cc.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?xc.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?xc.createFromPosition(e.end):null}isEqual(e){if(this.isFake!=e.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel)return!1;if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const n of e._ranges)if(t.isEqual(n)){o=!0;break}if(!o)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Y(this.getRanges()),o=Y(e.getRanges());if(t!=o)return!1;if(0==t)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let o=!1;for(let n of e.getRanges())if(n=n.getTrimmed(),t.start.isEqual(n.start)&&t.end.isEqual(n.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,o=e.end.nodeBefore;return t instanceof Vd&&t==o?t:null}setTo(e,t,o){if(null===e)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Ac||e instanceof Tc)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Cc)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof xc)this._setRanges([new Cc(e)]),this._setFakeOptions(t);else if(e instanceof Sd){const n=!!o&&!!o.backward;let i;if(t===void 0)throw new Za('view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.');else i='in'==t?Cc.createIn(e):'on'==t?Cc.createOn(e):Cc.createCollapsedAt(e,t);this._setRanges([i],n),this._setFakeOptions(o)}else if(P(e))this._setRanges(e,t&&t.backward),this._setFakeOptions(t);else throw new Za('view-selection-setTo-not-selectable: Cannot set selection to given place.');this.fire('change')}setFocus(e,t){if(null===this.anchor)throw new Za('view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');const o=xc.createAt(e,t);if('same'!=o.compareWith(this.focus)){const e=this.anchor;this._ranges.pop(),'before'==o.compareWith(e)?this._addRange(new Cc(o,e),!0):this._addRange(new Cc(e,o)),this.fire('change')}}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const o of e)this._addRange(o);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake?e.label||'':''}_addRange(e,t=!1){if(!(e instanceof Cc))throw new Za('view-selection-invalid-range: Invalid Range.');this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new Za('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:t});this._ranges.push(Cc.createFromRange(e))}}f(Ac,ss);class Tc{constructor(e=null,t,o){this._selection=new Ac,this._selection.delegate('change').to(this),this._selection.setTo(e,t,o)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(e,t,o){this._selection.setTo(e,t,o)}_setFocus(e,t){this._selection.setFocus(e,t)}}f(Tc,ss);class Pc{constructor(e={}){this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||'id',this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){let o;const n=this._idProperty;if(n in e){if(o=e[n],'string'!=typeof o)throw new Za('collection-add-invalid-id');if(this.get(o))throw new Za('collection-add-item-already-exists')}else e[n]=o=i();if(void 0===t)t=this._items.length;else if(t>this._items.length||0>t)throw new Za('collection-add-item-invalid-index');return this._items.splice(t,0,e),this._itemMap.set(o,e),this.fire('add',e,t),this}get(e){let t;if('string'==typeof e)t=this._itemMap.get(e);else if('number'==typeof e)t=this._items[e];else throw new Za('collection-get-invalid-arg: Index or id must be given.');return t||null}getIndex(e){let t;return t='string'==typeof e?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){let t=!1,o,n,i;const r=this._idProperty;if('string'==typeof e?(n=e,i=this._itemMap.get(n),t=!i,i&&(o=this._items.indexOf(i))):'number'==typeof e?(o=e,i=this._items[o],t=!i,i&&(n=i[r])):(i=e,n=i[r],o=this._items.indexOf(i),t=-1==o||!this._itemMap.get(n)),t)throw new Za('collection-remove-404: Item not found.');this._items.splice(o,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire('remove',i,o),i}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(e){if(this._bindToCollection)throw new Za('collection-bind-to-rebind: The collection cannot be bound more than once.');return this._bindToCollection=e,{as:(e)=>{this._setUpBindToBinding((t)=>new e(t))},using:(e)=>{'function'==typeof e?this._setUpBindToBinding((t)=>e(t)):this._setUpBindToBinding((t)=>t[e])}}}_setUpBindToBinding(e){const t=this._bindToCollection,o=(o,n,i)=>{const r=t._bindToCollection==this,a=t._bindToInternalToExternalMap.get(n);if(r&&a)this._bindToExternalToInternalMap.set(n,a),this._bindToInternalToExternalMap.set(a,n);else{const o=e(n);if(!o)return void this._skippedIndexesFromExternal.push(i);let r=i;for(const e of this._skippedIndexesFromExternal)i>e&&r--;for(const e of t._skippedIndexesFromExternal)r>=e&&r++;this._bindToExternalToInternalMap.set(n,o),this._bindToInternalToExternalMap.set(o,n),this.add(o,r);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)r<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++}};for(const n of t)o(null,n,t.getIndex(n));this.listenTo(t,'add',o),this.listenTo(t,'remove',(e,t,o)=>{const n=this._bindToExternalToInternalMap.get(t);n&&this.remove(n),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((e,t)=>(o<t&&e.push(t-1),o>t&&e.push(t),e),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}f(Pc,ss);class Ec{constructor(){this.selection=new Tc,this.roots=new Pc({idProperty:'rootName'}),this.set('isReadOnly',!1),this.set('isFocused',!1),this.set('isComposing',!1),this._postFixers=new Set}getRoot(e='main'){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}f(Ec,bc);const Sc=10;class Oc extends Vd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=X,this._priority=Sc,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new Za('attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.');return new Set(this._clonesGroup)}is(e,t=null){return t?'attributeElement'==e&&t==this.name||super.is(e,t):'attributeElement'==e||super.is(e)}isSimilar(e){return null!==this.id||null!==e.id?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}Oc.DEFAULT_PRIORITY=Sc;class Rc extends Vd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=ee}is(e,t=null){return t?'emptyElement'==e&&t==this.name||super.is(e,t):'emptyElement'==e||super.is(e)}_insertChild(e,t){if(t&&(t instanceof Sd||0<Array.from(t).length))throw new Za('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')}}const Ic=navigator.userAgent.toLowerCase(),Vc={isMac:function(e){return-1<e.indexOf('macintosh')}(Ic)};var Fc=Vc;const Nc={"⌘":'ctrl',"⇧":'shift',"⌥":'alt'},Mc={ctrl:'\u2318',shift:'\u21E7',alt:'\u2325'},Dc=function(){const e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let t=65;90>=t;t++){const o=String.fromCharCode(t);e[o.toLowerCase()]=t}for(let t=48;57>=t;t++)e[t-48]=t;for(let t=112;123>=t;t++)e['f'+(t-111)]=t;return e}();class Bc extends Vd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=ae}is(e,t=null){return t?'uiElement'==e&&t==this.name||super.is(e,t):'uiElement'==e||super.is(e)}_insertChild(e,t){if(t&&(t instanceof Sd||0<Array.from(t).length))throw new Za('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const o of this.getAttributeKeys())t.setAttribute(o,this.getAttribute(o));return t}}class Lc{constructor(e){this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange('children',this);let o=0;const n=le(t);for(const i of n)null!==i.parent&&i._remove(),i.parent=this,this._children.splice(e,0,i),e++,o++;return o}_removeChildren(e,t=1){this._fireChange('children',this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire('change:'+e,t)}}f(Lc,ss);class zc{constructor(e){this.document=e,this._cloneGroups=new Map}setSelection(e,t,o){this.document.selection._setTo(e,t,o)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createText(e){return new Od(e)}createAttributeElement(e,t,o={}){const n=new Oc(e,t);return o.priority&&(n._priority=o.priority),o.id&&(n._id=o.id),n}createContainerElement(e,t){return new Fd(e,t)}createEditableElement(e,t){const o=new _c(e,t);return o._document=this.document,o}createEmptyElement(e,t){return new Rc(e,t)}createUIElement(e,t,o){const n=new Bc(e,t);return o&&(n.render=o),n}setAttribute(e,t,o){o._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,o){Qa(e)&&o===void 0&&(o=t),o._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,o){o._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof xc?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is('containerElement'))throw new Za('view-writer-break-non-container-element: Trying to break an element which is not a container element.');if(!t.parent)throw new Za('view-writer-break-root: Trying to break root element.');if(e.isAtStart)return xc.createBefore(t);if(!e.isAtEnd){const o=t._clone(!1);this.insert(xc.createAfter(t),o);const n=new Cc(e,xc.createAt(t,'end')),i=new xc(o,0);this.move(n,i)}return xc.createAfter(t)}mergeAttributes(e){const t=e.offset,o=e.parent;if(o.is('text'))return e;if(o.is('attributeElement')&&0===o.childCount){const e=o.parent,t=o.index;return o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new xc(e,t))}const n=o.getChild(t-1),i=o.getChild(t);if(!n||!i)return e;if(n.is('text')&&i.is('text'))return ge(n,i);if(n.is('attributeElement')&&i.is('attributeElement')&&n.isSimilar(i)){const e=n.childCount;return n._appendChild(i.getChildren()),i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new xc(n,e))}return e}mergeContainers(e){const t=e.nodeBefore,o=e.nodeAfter;if(!t||!o||!t.is('containerElement')||!o.is('containerElement'))throw new Za('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');const n=t.getChild(t.childCount-1),i=n instanceof Od?xc.createAt(n,'end'):xc.createAt(t,'end');return this.move(Cc.createIn(o),xc.createAt(t,'end')),this.remove(Cc.createOn(o)),i}insert(e,t){t=P(t)?[...t]:[t],he(t);const o=ce(e);if(!o)throw new Za('view-writer-invalid-position-container');const n=this._breakAttributes(e,!0),i=o._insertChild(n.offset,t);for(const o of t)this._addToClonedElementsGroup(o);const r=n.getShiftedBy(i),a=this.mergeAttributes(n);if(0===i)return new Cc(a,a);else{a.isEqual(n)||r.offset--;const e=this.mergeAttributes(r);return new Cc(a,e)}}remove(e){if(ke(e),e.isCollapsed)return new Lc;const{start:t,end:o}=this._breakAttributesRange(e,!0),n=t.parent,i=o.offset-t.offset,r=n._removeChildren(t.offset,i);for(const t of r)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(t);return e.start=a,e.end=xc.createFromPosition(a),new Lc(r)}clear(e,t){ke(e);const o=e.getWalker({direction:'backward',ignoreElementEnd:!0});for(const n of o){const o=n.item;let i;if(o.is('element')&&t.isSimilar(o))i=Cc.createOn(o);else if(!n.nextPosition.isAfter(e.start)&&o.is('textProxy')){const e=o.getAncestors().find((e)=>e.is('element')&&t.isSimilar(e));e&&(i=Cc.createIn(e))}i&&(i.end.isAfter(e.end)&&(i.end=e.end),i.start.isBefore(e.start)&&(i.start=e.start),this.remove(i))}}move(e,t){let o;if(t.isAfter(e.end)){t=this._breakAttributes(t,!0);const n=t.parent,i=n.childCount;e=this._breakAttributesRange(e,!0),o=this.remove(e),t.offset+=n.childCount-i}else o=this.remove(e);return this.insert(t,o)}wrap(e,t){if(!(t instanceof Oc))throw new Za('view-writer-wrap-invalid-attribute');if(ke(e),!e.isCollapsed)return this._wrapRange(e,t);else{let o=e.start;o.parent.is('element')&&!de(o.parent)&&(o=o.getLastMatchingPosition((e)=>e.item.is('uiElement'))),o=this._wrapPosition(o,t);const n=this.document.selection;return n.isCollapsed&&n.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new Cc(o)}}unwrap(e,t){if(!(t instanceof Oc))throw new Za('view-writer-unwrap-invalid-attribute');if(ke(e),e.isCollapsed)return e;const{start:o,end:n}=this._breakAttributesRange(e,!0);if(n.isEqual(o.getShiftedBy(1))){const e=o.nodeAfter;if(!t.isSimilar(e)&&e instanceof Oc&&this._unwrapAttributeElement(t,e)){const e=this.mergeAttributes(o);e.isEqual(o)||n.offset--;const t=this.mergeAttributes(n);return new Cc(e,t)}}const i=o.parent,r=this._unwrapChildren(i,o.offset,n.offset,t),a=this.mergeAttributes(r.start);a.isEqual(r.start)||r.end.offset--;const s=this.mergeAttributes(r.end);return new Cc(a,s)}rename(e,t){const o=new Fd(t,e.getAttributes());return this.insert(xc.createAfter(e),o),this.move(Cc.createIn(e),xc.createAt(o)),this.remove(Cc.createOn(e)),o}_wrapChildren(e,t,o,n){let r=t;const i=[];for(;r<o;){const t=e.getChild(r),o=t.is('text'),a=t.is('attributeElement'),s=t.is('emptyElement'),l=t.is('uiElement');if(o||s||l||a&&ue(n,t)){const o=n._clone();t._remove(),o._appendChild(t),e._insertChild(r,o),this._addToClonedElementsGroup(o),i.push(new xc(e,r))}else a&&this._wrapChildren(t,0,t.childCount,n);r++}let a=0;for(const r of i){if(r.offset-=a,r.offset==t)continue;const e=this.mergeAttributes(r);e.isEqual(r)||(a++,o--)}return Cc.createFromParentsAndOffsets(e,t,e,o)}_unwrapChildren(e,t,o,n){let r=t;const i=[];for(;r<o;){const t=e.getChild(r);if(t.isSimilar(n)){const n=t.getChildren(),a=t.childCount;t._remove(),e._insertChild(r,n),this._removeFromClonedElementsGroup(t),i.push(new xc(e,r),new xc(e,r+a)),r+=a,o+=a-1}else t.is('attributeElement')&&this._unwrapChildren(t,0,t.childCount,n),r++}let a=0;for(const r of i){if(r.offset-=a,r.offset==t||r.offset==o)continue;const e=this.mergeAttributes(r);e.isEqual(r)||(a++,o--)}return Cc.createFromParentsAndOffsets(e,t,e,o)}_wrapRange(e,t){if(fe(e)&&this._wrapAttributeElement(t,e.start.parent)){const t=e.start.parent,o=this.mergeAttributes(xc.createAfter(t)),n=this.mergeAttributes(xc.createBefore(t));return new Cc(n,o)}const{start:o,end:n}=this._breakAttributesRange(e,!0);if(n.isEqual(o.getShiftedBy(1))){const e=o.nodeAfter;if(e instanceof Oc&&this._wrapAttributeElement(t,e)){const e=this.mergeAttributes(o);e.isEqual(o)||n.offset--;const t=this.mergeAttributes(n);return new Cc(e,t)}}const i=o.parent,r=this._unwrapChildren(i,o.offset,n.offset,t),a=this._wrapChildren(i,r.start.offset,r.end.offset,t),s=this.mergeAttributes(a.start);s.isEqual(a.start)||a.end.offset--;const l=this.mergeAttributes(a.end);return new Cc(s,l)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return me(xc.createFromPosition(e));e.parent.is('text')&&(e=pe(e));const o=this.createAttributeElement();o._priority=Da,o.isSimilar=()=>!1,e.parent._insertChild(e.offset,o);const n=new Cc(e,e.getShiftedBy(1));this.wrap(n,t);const i=new xc(o.parent,o.index);o._remove();const r=i.nodeBefore,a=i.nodeAfter;return r instanceof Od&&a instanceof Od?ge(r,a):me(i)}_wrapAttributeElement(e,t){if(!_e(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if('class'!==o&&'style'!==o&&t.hasAttribute(o)&&t.getAttribute(o)!==e.getAttribute(o))return!1;for(const o of e.getStyleNames())if(t.hasStyle(o)&&t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())'class'!==o&&'style'!==o&&(t.hasAttribute(o)||this.setAttribute(o,e.getAttribute(o),t));for(const o of e.getStyleNames())t.hasStyle(o)||this.setStyle(o,e.getStyle(o),t);for(const o of e.getClassNames())t.hasClass(o)||this.addClass(o,t);return!0}_unwrapAttributeElement(e,t){if(!_e(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if('class'!==o&&'style'!==o&&(!t.hasAttribute(o)||t.getAttribute(o)!==e.getAttribute(o)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const o of e.getStyleNames())if(!t.hasStyle(o)||t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())'class'!==o&&'style'!==o&&this.removeAttribute(o,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const o=e.start,n=e.end;if(ke(e),e.isCollapsed){const o=this._breakAttributes(e.start,t);return new Cc(o,o)}const i=this._breakAttributes(n,t),r=i.parent.childCount,a=this._breakAttributes(o,t);return i.offset+=i.parent.childCount-r,new Cc(a,i)}_breakAttributes(e,t=!1){const o=e.offset,n=e.parent;if(e.parent.is('emptyElement'))throw new Za('view-writer-cannot-break-empty-element');if(e.parent.is('uiElement'))throw new Za('view-writer-cannot-break-ui-element');if(!t&&n.is('text')&&be(n.parent))return xc.createFromPosition(e);if(be(n))return xc.createFromPosition(e);if(n.is('text'))return this._breakAttributes(pe(e),t);const i=n.childCount;if(o==i){const e=new xc(n.parent,n.index+1);return this._breakAttributes(e,t)}if(0===o){const e=new xc(n.parent,n.index);return this._breakAttributes(e,t)}else{const e=n.index+1,i=n._clone();n.parent._insertChild(e,i),this._addToClonedElementsGroup(i);const r=n.childCount-o,a=n._removeChildren(o,r);i._appendChild(a);const s=new xc(n.parent,e);return this._breakAttributes(s,t)}}_addToClonedElementsGroup(e){if(!e.root.is('rootElement'))return;if(e.is('element'))for(const t of e.getChildren())this._addToClonedElementsGroup(t);const t=e.id;if(!t)return;let o=this._cloneGroups.get(t);o||(o=new Set,this._cloneGroups.set(t,o)),o.add(e),e._clonesGroup=o}_removeFromClonedElementsGroup(e){if(e.is('element'))for(const t of e.getChildren())this._removeFromClonedElementsGroup(t);const t=e.id;if(t){const o=this._cloneGroups.get(t);o&&(o.delete(e),0===o.size&&this._cloneGroups.delete(t))}}}const jc=[Od,Oc,Fd,Rc,Bc],qc=(e)=>{const t=e.createElement('br');return t.dataset.ckeFiller=!0,t},Wc=(e)=>e.createTextNode('\xA0'),Uc=7;let Hc='';for(let n=0;n<Uc;n++)Hc+='\u200B';const Kc=new WeakMap;class Gc{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this._inlineFiller=null,this.isFocused=!1,this._fakeSelectionContainer=null}markToSync(e,t){if('text'===e)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if('attributes'===e)this.markedAttributes.add(t);else if('children'===e)this.markedChildren.add(t);else throw new Za('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')}}render(){let e;this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent));for(const e of this.markedAttributes)this._updateAttrs(e);for(const t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});for(const t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});if(e){const t=this.domConverter.viewPositionToDom(e),o=t.parent.ownerDocument;this._inlineFiller=we(t.parent)?t.parent:this._addInlineFiller(o,t.parent,t.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_addInlineFiller(e,t,o){const n=t instanceof Array?t:t.childNodes,i=n[o];if(Se(i))return i.data=Hc+i.data,i;else{const i=e.createTextNode(Hc);return Array.isArray(t)?n.splice(o,0,i):Pe(t,o,i),i}}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is('text')?xc.createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Se(t.parent)&&we(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!we(e))throw new Za('view-renderer-filler-was-lost: The inline filler node was lost.');ve(e)?e.parentNode.removeChild(e):e.data=e.data.substr(Uc),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,o=e.offset;if(!this.domConverter.mapViewToDom(t.root))return!1;if(!t.is('element'))return!1;if(!Oe(t))return!1;if(o===t.getFillerOffset())return!1;const n=e.nodeBefore,i=e.nodeAfter;return!(n instanceof Od||i instanceof Od)}_updateText(e,t){const o=this.domConverter.findCorrespondingDomText(e),n=this.domConverter.viewToDom(e,o.ownerDocument),i=o.data;let r=n.data;const a=t.inlineFillerPosition;a&&a.parent==e.parent&&a.offset==e.index&&(r=Hc+r),i!=r&&(o.data=r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e),o=Array.from(t.attributes).map((e)=>e.name),n=e.getAttributeKeys();for(const o of n)t.setAttribute(o,e.getAttribute(o));for(const n of o)e.hasAttribute(n)||t.removeAttribute(n)}_updateChildren(e,t){function o(e,t){if(e===t)return!0;return Se(e)&&Se(t)?e.data===t.data:!!(xe(e,n.blockFiller)&&xe(t,n.blockFiller))}const n=this.domConverter,r=n.mapViewToDom(e);if(r){const a=r.ownerDocument,s=t.inlineFillerPosition,l=r.childNodes,d=Array.from(n.viewChildrenToDom(e,a,{bind:!0}));s&&s.parent==e&&this._addInlineFiller(a,d,s.offset);const c=Te(l,d,o);let u=0;const i=new Set;for(const e of c)'insert'===e?(Pe(r,u,d[u]),u++):'delete'===e?(i.add(l[u]),Ee(l[u])):(this._markDescendantTextToSync(n.domToView(d[u])),u++);for(const e of i)e.parentNode||this.domConverter.unbindDomElement(e)}}_markDescendantTextToSync(e){if(e)if(e.is('text'))this.markedTexts.add(e);else if(e.is('element'))for(const t of e.getChildren())this._markDescendantTextToSync(t)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;let o=this._fakeSelectionContainer;o||(this._fakeSelectionContainer=o=t.createElement('div'),Object.assign(o.style,{position:'fixed',top:0,left:'-9999px',width:'42px'}),o.appendChild(t.createTextNode('\xA0'))),o.parentElement||e.appendChild(o),o.firstChild.data=this.selection.fakeSelectionLabel||'\xA0';const n=t.getSelection(),i=t.createRange();n.removeAllRanges(),i.selectNodeContents(o),n.addRange(i),this.domConverter.bindFakeSelection(o,this.selection)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(this._domSelectionNeedsUpdate(t)){const o=this.domConverter.viewPositionToDom(this.selection.anchor),n=this.domConverter.viewPositionToDom(this.selection.focus);e.focus(),t.collapse(o.parent,o.offset),t.extend(n.parent,n.offset)}}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return!(t&&this.selection.isEqual(t))&&(this.selection.isCollapsed||!this.selection.isSimilar(t))}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const t=e.activeElement,o=this.domConverter.mapDomToView(t);t&&o&&e.getSelection().removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}f(Gc,bc);var $c={window,document};class Jc{constructor(e={}){this.blockFiller=e.blockFiller||qc,this.preElements=['pre'],this.blockElements=['p','div','h1','h2','h3','h4','h5','h6'],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Ac(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const t of Array.from(e.childNodes))this.unbindDomElement(t)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}viewToDom(e,t,o={}){if(e.is('text')){const o=this._processDataFromViewText(e);return t.createTextNode(o)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is('documentFragment'))n=t.createDocumentFragment(),o.bind&&this.bindDocumentFragments(n,e);else{if(e.is('uiElement'))return n=e.render(t),o.bind&&this.bindElements(n,e),n;n=t.createElement(e.name),o.bind&&this.bindElements(n,e);for(const t of e.getAttributeKeys())n.setAttribute(t,e.getAttribute(t))}if(o.withChildren||void 0===o.withChildren)for(const i of this.viewChildrenToDom(e,t,o))n.appendChild(i);return n}}*viewChildrenToDom(e,t,o={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren())n===i&&(yield this.blockFiller(t)),yield this.viewToDom(r,t,o),i++;n===i&&(yield this.blockFiller(t))}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),o=this.viewPositionToDom(e.end),n=document.createRange();return n.setStart(t.parent,t.offset),n.setEnd(o.parent,o.offset),n}viewPositionToDom(e){const t=e.parent;if(t.is('text')){const o=this.findCorrespondingDomText(t);if(!o)return null;let n=e.offset;return we(o)&&(n+=Uc),{parent:o,offset:n}}else{let o,n,i;if(0===e.offset){if(o=this.mapViewToDom(t),!o)return null;i=o.childNodes[0]}else{const t=e.nodeBefore;if(n=t.is('text')?this.findCorrespondingDomText(t):this.mapViewToDom(e.nodeBefore),!n)return null;o=n.parentNode,i=n.nextSibling}if(Se(i)&&we(i))return{parent:i,offset:Uc};const r=n?Re(n)+1:0;return{parent:o,offset:r}}}domToView(e,t={}){if(xe(e,this.blockFiller))return null;const o=this.getParentUIElement(e,this._domToViewMapping);if(o)return o;if(Se(e)){if(ve(e))return null;else{const t=this._processDataFromDomText(e);return''===t?null:new Od(t)}}else if(this.isComment(e))return null;else{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Lc,t.bind&&this.bindDocumentFragments(e,o);else{const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();o=new Vd(n),t.bind&&this.bindElements(e,o);const r=e.attributes;for(let e=r.length-1;0<=e;e--)o._setAttribute(r[e].name,r[e].value)}if(t.withChildren||void 0===t.withChildren)for(const n of this.domChildrenToView(e,t))o._appendChild(n);return o}}*domChildrenToView(e,t={}){for(let o=0;o<e.childNodes.length;o++){const n=e.childNodes[o],i=this.domToView(n,t);null!==i&&(yield i)}}domSelectionToView(e){if(1===e.rangeCount){let t=e.getRangeAt(0).startContainer;Se(t)&&(t=t.parentNode);const o=this.fakeSelectionToView(t);if(o)return o}const t=this.isDomSelectionBackward(e),o=[];for(let t=0;t<e.rangeCount;t++){const n=e.getRangeAt(t),i=this.domRangeToView(n);i&&o.push(i)}return new Ac(o,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),o=this.domPositionToView(e.endContainer,e.endOffset);return t&&o?new Cc(t,o):null}domPositionToView(e,t){if(xe(e,this.blockFiller))return this.domPositionToView(e.parentNode,Re(e));const o=this.mapDomToView(e);if(o&&o.is('uiElement'))return xc.createBefore(o);if(Se(e)){if(ve(e))return this.domPositionToView(e.parentNode,Re(e));const o=this.findCorrespondingViewText(e);let n=t;return o?(we(e)&&(n-=Uc,n=0>n?0:n),new xc(o,n)):null}if(0===t){const t=this.mapDomToView(e);if(t)return new xc(t,0)}else{const o=e.childNodes[t-1],n=Se(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(n&&n.parent)return new xc(n.parent,n.index+1)}return null}mapDomToView(e){return this.getParentUIElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(ve(e))return null;const t=this.getParentUIElement(e);if(t)return t;const o=e.previousSibling;if(o){if(!this.isElement(o))return null;const e=this.mapDomToView(o);if(e){const t=e.nextSibling;return t instanceof Od?e.nextSibling:null}}else{const t=this.mapDomToView(e.parentNode);if(t){const e=t.getChild(0);return e instanceof Od?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:e,scrollY:o}=$c.window,n=[];Ne(t,(e)=>{const{scrollLeft:t,scrollTop:o}=e;n.push([t,o])}),t.focus(),Ne(t,(e)=>{const[t,o]=n.shift();e.scrollLeft=t,e.scrollTop=o}),$c.window.scrollTo(e,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(e){return e&&e.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const o=t.collapsed;return t.detach(),o}getParentUIElement(e){const t=Ie(e);for(t.pop();t.length;){const e=t.pop(),o=this._domToViewMapping.get(e);if(o&&o.is('uiElement'))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}_isDomSelectionPositionCorrect(e,t){if(Se(e)&&we(e)&&t<Uc)return!1;if(this.isElement(e)&&we(e.childNodes[t]))return!1;const o=this.mapDomToView(e);return!(o&&o.is('uiElement'))}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return t;if(' '==t.charAt(0)){const o=this._getTouchingViewTextNode(e,!1),n=o&&this._nodeEndsWithSpace(o);(n||!o)&&(t='\xA0'+t.substr(1))}if(' '==t.charAt(t.length-1)){const o=this._getTouchingViewTextNode(e,!0);o||(t=t.substr(0,t.length-1)+'\xA0')}return t.replace(/ {2}/g,' \xA0')}_nodeEndsWithSpace(e){if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return!1;const t=this._processDataFromViewText(e);return' '==t.charAt(t.length-1)}_processDataFromDomText(e){let t=e.data;if(Fe(e,this.preElements))return ye(e);t=t.replace(/[ \n\t\r]{1,}/g,' ');const o=this._getTouchingDomTextNode(e,!1),n=this._getTouchingDomTextNode(e,!0);return(!o||/[^\S\u00A0]/.test(o.data.charAt(o.data.length-1)))&&(t=t.replace(/^ /,'')),n||we(e)||(t=t.replace(/ $/,'')),t=ye(new Text(t)),t=t.replace(/ \u00A0/g,'  '),(!o||/[^\S\u00A0]/.test(o.data.charAt(o.data.length-1)))&&(t=t.replace(/^\u00A0/,' ')),n&&'\xA0'!=n.data.charAt(0)||(t=t.replace(/\u00A0( *)$/,' $1')),t}_getTouchingViewTextNode(e,t){const o=new yc({startPosition:t?xc.createAfter(e):xc.createBefore(e),direction:t?'forward':'backward'});for(const n of o){if(n.item.is('containerElement'))return null;if(n.item.is('textProxy'))return n.item}return null}_getTouchingDomTextNode(e,t){if(!e.parentNode)return null;const o=t?'nextNode':'previousNode',n=e.ownerDocument,i=Ie(e)[0],r=n.createTreeWalker(i,NodeFilter.SHOW_TEXT);r.currentNode=e;const a=r[o]();if(null!==a){const t=Ve(e,a);if(t&&!Fe(e,this.blockElements,t)&&!Fe(a,this.blockElements,t))return a}return null}}const Qc=mc({},ss,{listenTo(e,...t){if(Me(e)||De(e)){const o=this._getProxyEmitter(e)||new Xc(e);o.attach(...t),e=o}ss.listenTo.call(this,e,...t)},stopListening(e,t,o){if(Me(e)||De(e)){const t=this._getProxyEmitter(e);if(!t)return;e=t}ss.stopListening.call(this,e,t,o),e instanceof Xc&&e.detach(t)},_getProxyEmitter(e){return r(this,Be(e))}});var Yc=Qc;class Xc{constructor(e){a(this,Be(e)),this._domNode=e}}mc(Xc.prototype,ss,{attach(e,t,o={}){if(!(this._domListeners&&this._domListeners[e])){const t=this._createDomListener(e,!!o.useCapture);this._domNode.addEventListener(e,t,!!o.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}},detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()},_createDomListener(e,t){const o=(t)=>{this.fire(e,t)};return o.removeListener=()=>{this._domNode.removeEventListener(e,o,t),delete this._domListeners[e]},o}});class Zc{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}f(Zc,Yc);Le.prototype.add=Le.prototype.push=function(e){return this.__data__.set(e,'__lodash_hash_undefined__'),this},Le.prototype.has=function(e){return this.__data__.has(e)};var eu=Le,tu=function(e,t){for(var o=-1,n=e.length;++o<n;)if(t(e[o],o,e))return!0;return!1},ou=function(e,t,o,n,i,r){var a=i&2,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=r.get(e);if(d)return d==t;var c=-1,u=!0,m=i&1?new eu:void 0;for(r.set(e,t);++c<s;){var p=e[c],g=t[c];if(n)var f=a?n(g,p,c,t,e,r):n(p,g,c,e,t,r);if(void 0!==f){if(f)continue;u=!1;break}if(m){if(!tu(t,function(e,t){if(!m.has(t)&&(p===e||o(p,e,n,i,r)))return m.add(t)})){u=!1;break}}else if(!(p===g||o(p,g,n,i,r))){u=!1;break}}return r['delete'](e),u},nu=md?md.prototype:void 0,iu=nu?nu.valueOf:void 0,ru=function(e,t,o,n,i,r,a){switch(o){case'[object DataView]':if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case'[object ArrayBuffer]':return!!(e.byteLength==t.byteLength&&n(new Zl(e),new Zl(t)));case'[object Boolean]':case'[object Date]':return+e==+t;case'[object Error]':return e.name==t.name&&e.message==t.message;case'[object Number]':return e==+e?e==+t:t!=+t;case'[object RegExp]':case'[object String]':return e==t+'';case'[object Map]':var s=id;case'[object Set]':var l=r&2;if(s||(s=dd),e.size!=t.size&&!l)return!1;var d=a.get(e);return d?d==t:(r|=1,a.set(e,t),ou(s(e),s(t),n,i,r,a));case'[object Symbol]':if(iu)return iu.call(e)==iu.call(t);}return!1},au=2,su={};su['[object Float32Array]']=su['[object Float64Array]']=su['[object Int8Array]']=su['[object Int16Array]']=su['[object Int32Array]']=su['[object Uint8Array]']=su['[object Uint8ClampedArray]']=su['[object Uint16Array]']=su['[object Uint32Array]']=!0,su['[object Arguments]']=su['[object Array]']=su['[object ArrayBuffer]']=su['[object Boolean]']=su['[object DataView]']=su['[object Date]']=su['[object Error]']=su['[object Function]']=su['[object Map]']=su['[object Number]']=su['[object Object]']=su['[object RegExp]']=su['[object Set]']=su['[object String]']=su['[object WeakMap]']=!1;var lu=Object.prototype,du=lu.toString,cu=function(e){return Ua(e)&&el(e.length)&&!!su[du.call(e)]},uu='[object Arguments]',mu='[object Array]',pu='[object Object]',gu=Object.prototype,fu=gu.hasOwnProperty,hu=function(e,t,o,n,i,r){var a=dl(e),s=dl(t),l=mu,d=mu;a||(l=$l(e),l=l==uu?pu:l),s||(d=$l(t),d=d==uu?pu:d);var c=l==pu&&!Wa(e),u=d==pu&&!Wa(t),m=l==d;if(m&&!c)return r||(r=new zs),a||cu(e)?ou(e,t,o,n,i,r):ru(e,t,l,o,n,i,r);if(!(i&2)){var p=c&&fu.call(e,'__wrapped__'),g=u&&fu.call(t,'__wrapped__');if(p||g){var f=p?e.value():e,h=g?t.value():t;return r||(r=new zs),o(f,h,n,i,r)}}return!!m&&(r||(r=new zs),ze(e,t,o,n,i,r))},bu=je,ku=function(e,t,o){o='function'==typeof o?o:void 0;var n=o?o(e,t):void 0;return n===void 0?bu(e,t,o):!!n};class _u extends Zc{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){function t(e,t){if(!Array.isArray(e))return e===t||!!(e.is('text')&&t.is('text'))&&e.data===t.data}if(0===e.length)return;const o=this.domConverter,n=new Map,i=new Set;for(const t of e)if('childList'===t.type){const e=o.mapDomToView(t.target);if(e&&e.is('uiElement'))continue;e&&!this._isBogusBrMutation(t)&&i.add(e)}for(const t of e){const e=o.mapDomToView(t.target);if(!(e&&e.is('uiElement'))&&'characterData'===t.type){const e=o.findCorrespondingViewText(t.target);e&&!i.has(e.parent)?n.set(e,{type:'text',oldText:e.data,newText:ye(t.target),node:e}):!e&&we(t.target)&&i.add(o.mapDomToView(t.target.parentNode))}}const r=[];for(const t of n.values())this.renderer.markToSync('text',t.node),r.push(t);for(const n of i){const e=o.mapViewToDom(n),i=Array.from(n.getChildren()),a=Array.from(o.domChildrenToView(e,{withChildren:!1}));ku(i,a,t)||(this.renderer.markToSync('children',n),r.push({type:'children',oldChildren:i,newChildren:a,node:n}))}const a=e[0].target.ownerDocument.getSelection();let s=null;if(a&&a.anchorNode){const e=o.domPositionToView(a.anchorNode,a.anchorOffset),t=o.domPositionToView(a.focusNode,a.focusOffset);e&&t&&(s=new Ac(e),s.setFocus(t))}this.document.fire('mutations',r,s),this.view.render()}_isBogusBrMutation(e){let t=null;return null===e.nextSibling&&0===e.removedNodes.length&&1==e.addedNodes.length&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is('element','br')}}class wu{constructor(e,t,o){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,mc(this,o)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class vu extends Zc{constructor(e){super(e),this.useCapture=!1}observe(e){const t='string'==typeof this.domEventType?[this.domEventType]:this.domEventType;t.forEach((t)=>{this.listenTo(e,t,(e,t)=>{this.isEnabled&&this.onDomEvent(t)},{useCapture:this.useCapture})})}fire(e,t,o){this.isEnabled&&this.document.fire(e,new wu(this.view,t,o))}}class yu extends vu{constructor(e){super(e),this.domEventType=['keydown','keyup']}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey,get keystroke(){return te(this)}})}}var xu=Date.now,Cu=xu,Au='Expected a function',Tu=Ba,Pu=La,Eu=qe;class Su extends Zc{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Eu((e)=>this.document.fire('selectionChangeDone',e),200)}observe(){const e=this.document;e.on('keydown',(t,o)=>{const n=e.selection;n.isFake&&We(o.keyCode)&&this.isEnabled&&(o.preventDefault(),this._handleSelectionMove(o.keyCode))},{priority:'lowest'})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,o=new Ac(t.getRanges(),{backward:t.isBackward,fake:!1});(e==Dc.arrowleft||e==Dc.arrowup)&&o.setTo(o.getFirstPosition()),(e==Dc.arrowright||e==Dc.arrowdown)&&o.setTo(o.getLastPosition());const n={oldSelection:t,newSelection:o,domSelection:null};this.document.fire('selectionChange',n),this._fireSelectionChangeDoneDebounced(n)}}const Ou={error(e,t){console.error(n(e),t)},warn(e,t){console.warn(n(e),t)}};var Ru=Ou;class Iu extends Zc{constructor(e){super(e),this.mutationObserver=e.getObserver(_u),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Eu((e)=>this.document.fire('selectionChangeDone',e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument;this._documents.has(t)||(this.listenTo(t,'selectionchange',()=>{this._handleSelectionChange(t)}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(e){if(this.isEnabled&&(this.document.isFocused||this.document.isReadOnly)){this.mutationObserver.flush();const t=e.defaultView.getSelection(),o=this.domConverter.domSelectionToView(t);if(!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(t))){if(60<++this._loopbackCounter)return void Ru.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');if(this.selection.isSimilar(o))this.view.render();else{const e={oldSelection:this.selection,newSelection:o,domSelection:t};this.document.fire('selectionChange',e),this._fireSelectionChangeDoneDebounced(e)}}}}_clearInfiniteLoop(){this._loopbackCounter=0}}class Vu extends vu{constructor(e){super(e),this.domEventType=['focus','blur'],this.useCapture=!0;const t=this.document;t.on('focus',()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.render(),50)}),t.on('blur',(o,n)=>{const i=t.selection.editableElement;(null===i||i===n.target)&&(t.isFocused=!1,e.render())})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Fu extends vu{constructor(e){super(e),this.domEventType=['compositionstart','compositionupdate','compositionend'];const t=this.document;t.on('compositionstart',()=>{t.isComposing=!0}),t.on('compositionend',()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}var Nu=function(e){return!!e&&1===e.nodeType&&Ua(e)&&!Qa(e)};class Mu{constructor(e){const t=Ue(e);if(Object.defineProperty(this,'_source',{value:e._source||e,writable:!0,enumerable:!1}),Nu(e)||t){const o=t?e.startContainer:e;o.ownerDocument&&o.ownerDocument.body.contains(o)||Ru.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.',{source:e}),t?Ke(this,Mu.getDomRangeRects(e)[0]):Ke(this,e.getBoundingClientRect())}else if(De(e)){const{innerWidth:t,innerHeight:o}=e;Ke(this,{top:0,right:t,bottom:o,left:0,width:t,height:o})}else Ke(this,e)}clone(){return new Mu(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Ba(this.top,e.top),right:La(this.right,e.right),bottom:La(this.bottom,e.bottom),left:Ba(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,0>t.width||0>t.height?null:new Mu(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Ge(e))for(let o=e.parentNode||e.commonAncestorContainer;o&&!Ge(o);){const e=new Mu(o),n=t.getIntersection(e);if(n)n.getArea()<t.getArea()&&(t=n);else return null;o=o.parentNode}return t}isEqual(e){for(const t of Du)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,o;if(De(e))t=e.innerWidth-e.document.documentElement.clientWidth,o=e.innerHeight-e.document.documentElement.clientHeight;else{const n=He(this._source);t=e.offsetWidth-e.clientWidth,o=e.offsetHeight-e.clientHeight,this.moveBy(n.left,n.top)}return this.width-=t,this.right-=t,this.height-=o,this.bottom-=o,this}static getDomRangeRects(e){const t=[],o=Array.from(e.getClientRects());if(o.length)for(const e of o)t.push(new Mu(e));else{let o=e.startContainer;Se(o)&&(o=o.parentNode);const n=new Mu(o.getBoundingClientRect());n.right=n.left,n.width=0,t.push(n)}return t}}const Du=['top','right','bottom','left','width','height'];Object.assign({},{scrollViewportToShowTarget:$e,scrollAncestorsToShowTarget:function(e){const t=nt(e);Qe(t,()=>new Mu(e))}});class Bu{constructor(){this.document=new Ec,this.domConverter=new Jc,this._renderer=new Gc(this.domConverter,this.document.selection),this._renderer.bind('isFocused').to(this.document),this.domRoots=new Map,this._observers=new Map,this._ongoingChange=!1,this._renderingInProgress=!1,this._postFixersInProgress=!1,this._writer=new zc(this.document),this.addObserver(_u),this.addObserver(Iu),this.addObserver(Vu),this.addObserver(yu),this.addObserver(Su),this.addObserver(Fu),Ce(this),re(this),this.on('render',()=>{this._render()})}attachDomRoot(e,t='main'){const o=this.document.getRoot(t);o._name=e.tagName.toLowerCase(),this.domRoots.set(t,e),this.domConverter.bindElements(e,o),this._renderer.markToSync('children',o),this._renderer.domDocuments.add(e.ownerDocument),o.on('change:children',(e,t)=>this._renderer.markToSync('children',t)),o.on('change:attributes',(e,t)=>this._renderer.markToSync('attributes',t)),o.on('change:text',(e,t)=>this._renderer.markToSync('text',t));for(const o of this._observers.values())o.observe(e,t)}getDomRoot(e='main'){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[o,n]of this.domRoots)t.observe(n,o);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&$e({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e?(this.domConverter.focus(e),this.render()):Ru.warn('view-focus-no-selection: There is no selection in any editable to focus.')}}change(e){if(this._renderingInProgress||this._postFixersInProgress)throw new Za('cannot-change-view-tree: Attempting to make changes to the view when it is in incorrect state: rendering or post fixers are in progress. This may cause some unexpected behaviour and inconsistency between the DOM and the view.');return this._ongoingChange?void e(this._writer):void(this._ongoingChange=!0,e(this._writer),this._ongoingChange=!1,this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire('render'))}render(){this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.stopListening()}_render(){this._renderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this._renderingInProgress=!1}}f(Bu,bc);class Lu{constructor(e){this.parent=null,this._attrs=rt(e)}get index(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildIndex(this)))throw new Za('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get startOffset(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildStartOffset(this)))throw new Za('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.root==this?null:this.root.document||null}getPath(){const e=[];for(let t=this;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),n=e.getAncestors(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),n=A(t,o);return!('prefix'!==n)||'extension'!==n&&t[n]<o[n]}isAfter(e){return this!=e&&!(this.root!==e.root)&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=[...this._attrs]),e}_clone(){return new Lu(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=rt(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}is(e){return'node'==e}}class zu extends Lu{constructor(e,t){super(t),this._data=e||''}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return'text'==e||super.is(e)}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new zu(this.data,this.getAttributes())}static fromJSON(e){return new zu(e.data,e.attributes)}}class ju{constructor(e,t,o){if(this.textNode=e,0>t||t>e.offsetSize)throw new Za('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>o||t+o>e.offsetSize)throw new Za('model-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+o),this.offsetInText=t}get startOffset(){return null===this.textNode.startOffset?null:this.textNode.startOffset+this.offsetInText}get offsetSize(){return this.data.length}get endOffset(){return null===this.startOffset?null:this.startOffset+this.offsetSize}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getPath(){const e=this.textNode.getPath();return 0<e.length&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class qu{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return-1==t?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return null===t?null:this._nodes.slice(0,t).reduce((e,t)=>e+t.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new Za('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const o of this._nodes){if(e>=t&&e<t+o.offsetSize)return this.getNodeIndex(o);t+=o.offsetSize}if(t!=e)throw new Za('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.');return this.length}_insertNodes(e,t){for(const o of t)if(!(o instanceof Lu))throw new Za('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map((e)=>e.toJSON())}}class Wu extends Lu{constructor(e,t,o){super(t),this.name=e,this._children=new qu,o&&this._insertChild(0,o)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name||super.is(e)}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const o of e)t=t.getChild(t.offsetToIndex(o));return t}toJSON(){const e=super.toJSON();if(e.name=this.name,0<this._children.length){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map((e)=>e._clone(!0)):null;return new Wu(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const o=at(t);for(const n of o)null!==n.parent&&n._remove(),n.parent=this;this._children._insertNodes(e,o)}_removeChildren(e,t=1){const o=this._children._removeNodes(e,t);for(const n of o)n.parent=null;return o}static fromJSON(e){let t=null;if(e.children){t=[];for(const o of e.children)o.name?t.push(Wu.fromJSON(o)):t.push(zu.fromJSON(o))}return new Wu(e.name,e.attributes,t)}}class Uu{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new Za('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');const t=e.direction||'forward';if('forward'!=t&&'backward'!=t)throw new Za('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:t});this.direction=t,this.boundaries=e.boundaries||null,this.position=e.startPosition?Ku.createFromPosition(e.startPosition):Ku.createFromPosition(this.boundaries['backward'==this.direction?'end':'start']),this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,o,n,i;do n=this.position,i=this._visitedParent,({done:t,value:o}=this.next());while(!t&&e(o));t||(this.position=n,this._visitedParent=i)}next(){return'forward'==this.direction?this._next():this._previous()}_next(){const e=this.position,t=Ku.createFromPosition(this.position),o=this._visitedParent;if(null===o.parent&&t.offset===o.maxOffset)return{done:!0};if(o===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const n=t.textNode?t.textNode:t.nodeAfter;if(n instanceof Wu)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=n),this.position=t,st('elementStart',n,e,t,1);if(n instanceof zu){let i;if(this.singleCharacters)i=1;else{let e=n.endOffset;this._boundaryEndParent==o&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),i=e-t.offset}const r=t.offset-n.startOffset,a=new ju(n,r,i);return t.offset+=i,this.position=t,st('text',a,e,t,i)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=o.parent,this.ignoreElementEnd?this._next():st('elementEnd',o,e,t)}_previous(){const e=this.position,t=Ku.createFromPosition(this.position),o=this._visitedParent;if(null===o.parent&&0===t.offset)return{done:!0};if(o==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const n=t.textNode?t.textNode:t.nodeBefore;if(n instanceof Wu)return t.offset--,this.shallow?(this.position=t,st('elementStart',n,e,t,1)):(t.path.push(n.maxOffset),this.position=t,this._visitedParent=n,this.ignoreElementEnd?this._previous():st('elementEnd',n,e,t));if(n instanceof zu){let i;if(this.singleCharacters)i=1;else{let e=n.startOffset;this._boundaryStartParent==o&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),i=t.offset-e}const r=t.offset-n.startOffset,a=new ju(n,r-i,i);return t.offset-=i,this.position=t,st('text',a,e,t,i)}return t.path.pop(),this.position=t,this._visitedParent=o.parent,st('elementStart',o,e,t,1)}}var Hu=function(e){var t=e?e.length:0;return t?e[t-1]:void 0};class Ku{constructor(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new Za('model-position-root-invalid: Position root invalid.');if(!(t instanceof Array)||0===t.length)throw new Za('model-position-path-incorrect: Position path must be an array with at least one item.',{path:t});t=e.getPath().concat(t),e=e.root,this.root=e,this.path=t}get offset(){return Hu(this.path)}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)e=e.getChild(e.offsetToIndex(this.path[t]));return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const e=this.parent.getChild(this.index);return e instanceof zu&&e.startOffset<this.offset?e:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return'different';const t=A(this.path,e.path);return'same'===t?'same':'prefix'===t?'before':'extension'===t?'after':this.path[t]<e.path[t]?'before':'after'}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new Uu(t);return o.skip(e),o.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(e){if(this.root!=e.root)return[];const t=A(this.path,e.path),o='string'==typeof t?La(this.path.length,e.path.length):t;return this.path.slice(0,o)}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let n=0;for(;t[n]==o[n]&&t[n];)n++;return 0==n?null:t[n-1]}getShiftedBy(e){const t=Ku.createFromPosition(this),o=t.offset+e;return t.offset=0>o?0:o,t}isAfter(e){return'after'==this.compareWith(e)}isBefore(e){return'before'==this.compareWith(e)}isEqual(e){return'same'==this.compareWith(e)}isTouching(e){let t=null,o=null;const n=this.compareWith(e);switch(n){case'same':return!0;case'before':t=Ku.createFromPosition(this),o=Ku.createFromPosition(e);break;case'after':t=Ku.createFromPosition(e),o=Ku.createFromPosition(this);break;default:return!1;}for(let n=t.parent;t.path.length+o.path.length;){if(t.isEqual(o))return!0;if(t.path.length>o.path.length){if(t.offset!==n.maxOffset)return!1;t.path=t.path.slice(0,-1),n=n.parent,t.offset++}else{if(0!==o.offset)return!1;o.path=o.path.slice(0,-1)}}}_getTransformedByDeletion(e,t){const o=Ku.createFromPosition(this);if(this.root!=e.root)return o;if('same'==A(e.getParentPath(),this.getParentPath())){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;o.offset-=t}}else if('prefix'==A(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;if(e.offset<=this.path[n]){if(e.offset+t>this.path[n])return null;o.path[n]-=t}}return o}_getTransformedByInsertion(e,t,o){const n=Ku.createFromPosition(this);if(this.root!=e.root)return n;if('same'==A(e.getParentPath(),this.getParentPath()))(e.offset<this.offset||e.offset==this.offset&&o)&&(n.offset+=t);else if('prefix'==A(e.getParentPath(),this.getParentPath())){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,o,n,i){let r=this._getTransformedByDeletion(e,o);return t=t._getTransformedByDeletion(e,o),r=null===r||i&&r.isEqual(e)?this._getCombined(e,t):r._getTransformedByInsertion(t,o,n),r}_getCombined(e,t){const o=e.path.length-1,n=Ku.createFromPosition(t);return n.offset=n.offset+this.path[o]-e.offset,n.path=n.path.concat(this.path.slice(o+1)),n}static createAt(e,t){if(e instanceof Ku)return this.createFromPosition(e);else{const o=e;if('end'==t)t=o.maxOffset;else{if('before'==t)return this.createBefore(o);if('after'==t)return this.createAfter(o);t||(t=0)}return this.createFromParentAndOffset(o,t)}}static createAfter(e){if(!e.parent)throw new Za('model-position-after-root: You cannot make a position after root.',{root:e});return this.createFromParentAndOffset(e.parent,e.endOffset)}static createBefore(e){if(!e.parent)throw new Za('model-position-before-root: You cannot make a position before root.',{root:e});return this.createFromParentAndOffset(e.parent,e.startOffset)}static createFromParentAndOffset(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new Za('model-position-parent-incorrect: Position parent have to be a element or document fragment.');const o=e.getPath();return o.push(t),new this(e.root,o)}static createFromPosition(e){return new this(e.root,e.path.slice())}static fromJSON(e,t){if('$graveyard'===e.root)return new Ku(t.graveyard,e.path);if(!t.getRoot(e.root))throw new Za('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.',{rootName:e.root});return new Ku(t.getRoot(e.root),e.path)}}class Gu{constructor(e,t=null){this.start=Ku.createFromPosition(e),this.end=t?Ku.createFromPosition(t):Ku.createFromPosition(e)}*[Symbol.iterator](){yield*new Uu({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&n}containsItem(e){const t=Ku.createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Gu(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Gu(e.end,this.end))):t.push(Gu.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new Gu(t,o)}return null}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,o=Ku.createFromPosition(this.start);for(let n=o.parent;o.path.length>t+1;){const t=n.maxOffset-o.offset;0!=t&&e.push(new Gu(o,o.getShiftedBy(t))),o.path=o.path.slice(0,-1),o.offset++,n=n.parent}for(;o.path.length<=this.end.path.length;){const t=this.end.path[o.path.length-1],n=t-o.offset;0!=n&&e.push(new Gu(o,o.getShiftedBy(n))),o.offset=t,o.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Uu(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Uu(e);for(const o of t)yield o.item}*getPositions(e={}){e.boundaries=this;const t=new Uu(e);yield t.position;for(const o of t)yield o.nextPosition}getTransformedByDelta(e){const t=[Gu.createFromRange(this)],o=new Set(['insert','move','remove','reinsert']);for(const n of e.operations)if(o.has(n.type))for(let o=0;o<t.length;o++){let i;i='insert'==n.type?t[o]._getTransformedByDocumentChange(n.type,e.type,n.position,n.nodes.maxOffset):t[o]._getTransformedByDocumentChange(n.type,e.type,n.targetPosition,n.howMany,n.sourcePosition),t.splice(o,1,...i),o+=i.length-1}return t}getTransformedByDeltas(e){const t=[Gu.createFromRange(this)];for(const o of e)for(let e=0;e<t.length;e++){const n=t[e].getTransformedByDelta(o);t.splice(e,1,...n),e+=n.length-1}for(let o=0;o<t.length;o++){const e=t[o];for(let n=o+1;n<t.length;n++){const o=t[n];(e.containsRange(o)||o.containsRange(e)||e.isEqual(o))&&t.splice(n,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}_getTransformedByDocumentChange(e,t,o,n,i){if('insert'==e)return this._getTransformedByInsertion(o,n,!1,!1);else{const e=Gu.createFromPositionAndShift(i,n);if('merge'==t&&this.isCollapsed&&(this.start.isEqual(e.start)||this.start.isEqual(e.end))){const t=this.start.offset-e.start.offset;return[new Gu(o.getShiftedBy(t))]}if('split'==t&&this.isCollapsed&&this.end.isEqual(e.end))return[new Gu(o.getShiftedBy(n))];if((e.containsPosition(this.start)||e.start.isEqual(this.start))&&this.containsPosition(e.end)&&this.end.isAfter(o)){const e=this.start._getCombined(i,o._getTransformedByDeletion(i,n)),t=this.end._getTransformedByMove(i,o,n,!1,!1);return[new Gu(e,t)]}if((e.containsPosition(this.end)||e.end.isEqual(this.end))&&this.containsPosition(e.start)&&this.start.isBefore(o)){const e=this.start._getTransformedByMove(i,o,n,!0,!1),t=this.end._getCombined(i,o._getTransformedByDeletion(i,n));return[new Gu(e,t)]}return this._getTransformedByMove(i,o,n)}}_getTransformedByInsertion(e,t,o=!1,n=!1){if(o&&this.containsPosition(e))return[new Gu(this.start,e),new Gu(e._getTransformedByInsertion(e,t,!0),this.end._getTransformedByInsertion(e,t,this.isCollapsed))];else{const o=Gu.createFromRange(this),i=!!o.isCollapsed||n;return o.start=o.start._getTransformedByInsertion(e,t,!n),o.end=o.end._getTransformedByInsertion(e,t,i),[o]}}_getTransformedByMove(e,t,o){if(this.isCollapsed){const n=this.start._getTransformedByMove(e,t,o,!0,!1);return[new Gu(n)]}let n;const i=new Gu(e,e.getShiftedBy(o)),r=this.getDifference(i);let a=null;const s=this.getIntersection(i);1==r.length?a=new Gu(r[0].start._getTransformedByDeletion(e,o),r[0].end._getTransformedByDeletion(e,o)):2==r.length&&(a=new Gu(this.start,this.end._getTransformedByDeletion(e,o)));const l=t._getTransformedByDeletion(e,o);return n=a?a._getTransformedByInsertion(l,o,null!==s):[],s&&n.push(new Gu(s.start._getCombined(i.start,l),s.end._getCombined(i.start,l))),n}static createFromPositionAndShift(e,t){const o=e,n=e.getShiftedBy(t);return 0<t?new this(o,n):new this(n,o)}static createFromParentsAndOffsets(e,t,o,n){return new this(Ku.createFromParentAndOffset(e,t),Ku.createFromParentAndOffset(o,n))}static createFromRange(e){return new this(e.start,e.end)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.maxOffset)}static createOn(e){return this.createFromPositionAndShift(Ku.createBefore(e),e.offsetSize)}static createCollapsedAt(e,t){const o=Ku.createAt(e,t),n=Ku.createFromPosition(o);return new Gu(o,n)}static createFromRanges(e){if(0===e.length)throw new Za('range-create-from-ranges-empty-array: At least one range has to be passed.');else if(1==e.length)return this.createFromRange(e[0]);const t=e[0];e.sort((e,t)=>e.start.isAfter(t.start)?1:-1);const o=e.indexOf(t),n=new this(t.start,t.end);for(let t=o-1;0<=t&&e[t].end.isEqual(n.start);t++)n.start=Ku.createFromPosition(e[t].start);for(let t=o+1;t<e.length&&e[t].start.isEqual(n.end);t++)n.end=Ku.createFromPosition(e[t].end);return n}static fromJSON(e,t){return new this(Ku.fromJSON(e.start,t),Ku.fromJSON(e.end,t))}}class $u{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this.on('modelToViewPosition',(e,t)=>{if(!t.viewPosition){const e=this._modelToViewMapping.get(t.modelPosition.parent);t.viewPosition=this._findPositionIn(e,t.modelPosition.offset)}},{priority:'low'}),this.on('viewToModelPosition',(e,t)=>{if(t.modelPosition)return;let o=t.viewPosition.parent,n=this._viewToModelMapping.get(o);for(;!n;)o=o.parent,n=this._viewToModelMapping.get(o);const i=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,o);t.modelPosition=Ku.createFromParentAndOffset(n,i)},{priority:'low'})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e){const t=this.toModelElement(e);this._viewToModelMapping.delete(e),this._modelToViewMapping.get(t)==e&&this._modelToViewMapping.delete(t)}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const o=this._markerNameToElements.get(t)||new Set;o.add(e),this._markerNameToElements.set(t,o)}unbindElementsFromMarkerName(e){this._markerNameToElements.delete(e)}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new Gu(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Cc(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire('viewToModelPosition',t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const o={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire('modelToViewPosition',o),o.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const o=new Set;for(const n of t)if(n.is('attributeElement'))for(const e of n.getElementsWithSameId())o.add(e);else o.add(n);return o}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}_toModelOffset(e,t,o){if(o!=e){const n=this._toModelOffset(e.parent,e.index,o),i=this._toModelOffset(e,t,e);return n+i}if(e.is('text'))return t;let n=0;for(let r=0;r<t;r++)n+=this.getModelLength(e.getChild(r));return n}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name)){const t=this._viewToModelLengthCallbacks.get(e.name);return t(e)}if(this._viewToModelMapping.has(e))return 1;if(e.is('text'))return e.data.length;if(e.is('uiElement'))return 0;else{let t=0;for(const o of e.getChildren())t+=this.getModelLength(o);return t}}_findPositionIn(e,t){let o=0,n=0,i=0,r;if(e.is('text'))return new xc(e,t);for(;n<t;)r=e.getChild(i),o=this.getModelLength(r),n+=o,i++;return n==t?this._moveViewPositionToTextNode(new xc(e,i)):this._findPositionIn(r,t-(n-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,o=e.nodeAfter;if(t instanceof Od)return new xc(t,t.data.length);return o instanceof Od?new xc(o,0):e}}f($u,ss);class Ju{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=lt(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=lt(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=lt(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e));const o=this._consumable.get(e);if(o===void 0)return null;const n=o.get(t);return void 0===n?null:n}revert(e,t){t=lt(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e));const o=this.test(e,t);return!1===o?(this._consumable.get(e).set(t,!0),!0):!0!==o&&null}_getSymbolForTextProxy(e){let t=null;const o=this._textProxyRegistry.get(e.startOffset);if(o){const n=o.get(e.endOffset);n&&(t=n.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e.startOffset,e.endOffset,e.parent)),t}_addSymbolForTextProxy(e,t,o){const n=Symbol('textProxySymbol');let i,r;return i=this._textProxyRegistry.get(e),i||(i=new Map,this._textProxyRegistry.set(e,i)),r=i.get(t),r||(r=new Map,i.set(t,r)),r.set(o,n),n}}class Qu{constructor(e={}){this.conversionApi=mc({dispatcher:this},e)}convertChanges(e,t){for(const o of e.getMarkersToRemove())this.convertMarkerRemove(o.name,o.range,t);for(const o of e.getChanges())'insert'==o.type?this.convertInsert(Gu.createFromPositionAndShift(o.position,o.length),t):'remove'==o.type?this.convertRemove(o.position,o.length,o.name,t):this.convertAttribute(o.range,o.attributeKey,o.attributeOldValue,o.attributeNewValue,t);for(const o of e.getMarkersToAdd())this.convertMarkerAdd(o.name,o.range,t)}convertInsert(e,t){this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(e);for(const o of e){const e=o.item,t=Gu.createFromPositionAndShift(o.previousPosition,o.length),n={item:e,range:t};this._testAndFire('insert',n);for(const t of e.getAttributeKeys())n.attributeKey=t,n.attributeOldValue=null,n.attributeNewValue=e.getAttribute(t),this._testAndFire(`attribute:${t}`,n)}this._clearConversionApi()}convertRemove(e,t,o,n){this.conversionApi.writer=n,this.fire('remove:'+o,{position:e,length:t},this.conversionApi),this._clearConversionApi()}convertAttribute(e,t,o,n,i){this.conversionApi.writer=i,this.conversionApi.consumable=this._createConsumableForRange(e,`attribute:${t}`);for(const r of e){const e=r.item,i=Gu.createFromPositionAndShift(r.previousPosition,r.length);this._testAndFire(`attribute:${t}`,{item:e,range:i,attributeKey:t,attributeOldValue:o,attributeNewValue:n})}this._clearConversionApi()}convertSelection(e,t,o){const n=Array.from(t.getMarkersAtPosition(e.getFirstPosition()));if(this.conversionApi.writer=o,this.conversionApi.consumable=this._createSelectionConsumable(e,n),this.fire('selection',{selection:e},this.conversionApi),!!e.isCollapsed){for(const t of n){const o=t.getRange();if(!dt(e.getFirstPosition(),t,this.conversionApi.mapper))continue;const n={item:e,markerName:t.name,markerRange:o};this.conversionApi.consumable.test(e,'addMarker:'+t.name)&&this.fire('addMarker:'+t.name,n,this.conversionApi)}for(const t of e.getAttributeKeys()){const o={item:e,range:e.getFirstRange(),attributeKey:t,attributeOldValue:null,attributeNewValue:e.getAttribute(t)};this.conversionApi.consumable.test(e,'attribute:'+o.attributeKey)&&this.fire('attribute:'+o.attributeKey,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(e,t,o){if(t.root.document&&'$graveyard'!=t.root.rootName){this.conversionApi.writer=o;const n='addMarker:'+e;if(t.isCollapsed){const o=new Ju;return o.add(t,n),this.conversionApi.consumable=o,void this.fire(n,{markerName:e,markerRange:t},this.conversionApi)}this.conversionApi.consumable=this._createConsumableForRange(t,n);for(const o of t.getItems()){if(!this.conversionApi.consumable.test(o,n))continue;const i={item:o,range:Gu.createOn(o),markerName:e,markerRange:t};this.fire(n,i,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(e,t,o){t.root.document&&'$graveyard'!=t.root.rootName&&(this.conversionApi.writer=o,this.fire('removeMarker:'+e,{markerName:e,markerRange:t},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(e){const t=new Ju;for(const o of e){const e=o.item;t.add(e,'insert');for(const o of e.getAttributeKeys())t.add(e,'attribute:'+o)}return t}_createConsumableForRange(e,t){const o=new Ju;for(const n of e.getItems())o.add(n,t);return o}_createSelectionConsumable(e,t){const o=new Ju;o.add(e,'selection');for(const n of t)o.add(e,'addMarker:'+n.name);for(const n of e.getAttributeKeys())o.add(e,'attribute:'+n);return o}_testAndFire(e,t){if(this.conversionApi.consumable.test(t.item,e)){const o=t.item.name||'$text';this.fire(e+':'+o,t,this.conversionApi)}}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}f(Qu,ss);class Yu{constructor(e,t,o){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,o)}get anchor(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){const e=this._ranges.length;return!(1!==e)&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const n of e._ranges)if(t.isEqual(n)){o=!0;break}if(!o)return!1}return!0}*getRanges(){for(const e of this._ranges)yield Gu.createFromRange(e)}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?Gu.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?Gu.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?Ku.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?Ku.createFromPosition(e.end):null}setTo(e,t,o){if(null===e)this._setRanges([]);else if(e instanceof Yu)this._setRanges(e.getRanges(),e.isBackward);else if(e&&'function'==typeof e.getRanges)this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof Gu)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof Ku)this._setRanges([new Gu(e)]);else if(e instanceof Lu){const n=!!o&&!!o.backward;let i;if('in'==t)i=Gu.createIn(e);else if('on'==t)i=Gu.createOn(e);else if(t!==void 0)i=Gu.createCollapsedAt(e,t);else throw new Za('model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.');this._setRanges([i],n)}else if(P(e))this._setRanges(e,t&&!!t.backward);else throw new Za('model-selection-setTo-not-selectable: Cannot set selection to given place.')}_setRanges(e,t=!1){e=Array.from(e);const o=e.some((e)=>{if(!(e instanceof Gu))throw new Za('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');return this._ranges.every((t)=>!t.isEqual(e))});if(e.length!==this._ranges.length||o){this._removeAllRanges();for(const t of e)this._pushRange(t);this._lastRangeBackward=!!t,this.fire('change:range',{directChange:!0})}}setFocus(e,t){if(null===this.anchor)throw new Za('model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');const o=Ku.createAt(e,t);if('same'!=o.compareWith(this.focus)){const e=this.anchor;this._ranges.length&&this._popRange(),'before'==o.compareWith(e)?(this._pushRange(new Gu(o,e)),this._lastRangeBackward=!0):(this._pushRange(new Gu(e,o)),this._lastRangeBackward=!1),this.fire('change:range',{directChange:!0})}}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,o=e.end.nodeBefore;return t instanceof Wu&&t==o?t:null}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const o=ut(t.start,e);o&&(yield o);for(const o of t.getWalker())'elementEnd'==o.type&&ct(o.item,e)&&(yield o.item);const n=ut(t.end,e);n&&!t.end.isTouching(Ku.createAt(n))&&(yield n)}}containsEntireContent(e=this.anchor.root){const t=Ku.createAt(e),o=Ku.createAt(e,'end');return t.isTouching(this.getFirstPosition())&&o.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(Gu.createFromRange(e))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new Za('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;0<this._ranges.length;)this._popRange()}_popRange(){this._ranges.pop()}}f(Yu,ss);class Xu extends Gu{constructor(e,t){super(e,t),mt.call(this)}detach(){this.stopListening()}}f(Xu,ss);const Zu='selection:';class em{constructor(e){this._selection=new tm(e),this._selection.delegate('change:range').to(this),this._selection.delegate('change:attribute').to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,o){this._selection.setTo(e,t,o)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Zu+e}static _isStoreAttributeKey(e){return e.startsWith(Zu)}}f(em,ss);class tm extends Yu{constructor(e){super(),this._model=e.model,this._document=e,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.on('change:range',()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new Za('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.',{range:e})}),this.listenTo(this._document,'change',(e,t)=>{this._updateAttributes(!1),ft(this._model,t)}),this.listenTo(this._model,'applyOperation',()=>{for(;this._fixGraveyardRangesData.length;){const{liveRange:e,sourcePosition:t}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(e,t)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire('change:range',{directChange:!1}))},{priority:'lowest'})}get isCollapsed(){const e=this._ranges.length;return 0===e?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return 0<this._ranges.length}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,o){super.setTo(e,t,o),this._refreshAttributes()}setFocus(e,t){super.setFocus(e,t),this._refreshAttributes()}setAttribute(e,t){if(this._setAttribute(e,t)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0})}}overrideGravity(){const e=i();return this._overriddenGravityRegister.add(e),1===this._overriddenGravityRegister.size&&this._refreshAttributes(),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new Za('document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.',{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._refreshAttributes()}_refreshAttributes(){this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return void Ru.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');const t=Xu.createFromRange(e);return t.on('change:range',(e,o,n)=>{this._hasChangedRange=!0,t.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:t,sourcePosition:n.sourcePosition})}),t}_updateAttributes(e){const t=rt(this._getSurroundingAttributes()),o=rt(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[e,t]of this._attributePriority)'low'==t&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t);const n=[];for(const[t,i]of this.getAttributes())o.has(t)&&o.get(t)===i||n.push(t);for(const[t]of o)this.hasAttribute(t)||n.push(t);0<n.length&&this.fire('change:attribute',{attributeKeys:n,directChange:!1})}_setAttribute(e,t,o=!0){const n=o?'normal':'low';if('low'==n&&'normal'==this._attributePriority.get(e))return!1;const i=super.getAttribute(e);return i!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,n),!0)}_removeAttribute(e,t=!0){const o=t?'normal':'low';return('low'!=o||'normal'!=this._attributePriority.get(e))&&(this._attributePriority.set(e,o),!!super.hasAttribute(e))&&(this._attrs.delete(e),!0)}_setAttributesTo(e){const t=new Set;for(const[t,o]of this.getAttributes())e.get(t)!==o&&this._removeAttribute(t,!1);for(const[o,n]of e){const e=this._setAttribute(o,n,!1);e&&t.add(o)}return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())if(t.startsWith(Zu)){const o=t.substr(Zu.length);yield[o,e.getAttribute(t)]}}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let o=null;if(!this.isCollapsed){const e=this.getFirstRange();for(const n of e){if(n.item.is('element')&&t.isObject(n.item))break;'text'==n.type&&null===o&&(o=n.item.getAttributes())}}else{const t=e.textNode?e.textNode:e.nodeBefore,n=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(o=gt(t)),o||(o=gt(n)),!this.isGravityOverridden&&!o)for(let e=t;e&&!o;)e=e.previousSibling,o=gt(e);if(!o)for(let e=n;e&&!o;)e=e.nextSibling,o=gt(e);o||(o=this._getStoredAttributes())}return o}_fixGraveyardSelection(e,t){const o=Ku.createFromPosition(t),n=this._model.schema.getNearestSelectionRange(o),i=this._ranges.indexOf(e);if(this._ranges.splice(i,1),e.detach(),n){const e=this._prepareRange(n);this._ranges.splice(i,0,e)}}}var om=function(e){return Pd(e,!0,!0)};class nm{constructor(e){this.model=e,this.view=new Bu,this.mapper=new $u,this.downcastDispatcher=new Qu({mapper:this.mapper});const t=this.model.document,o=t.selection,n=this.model.markers;this.listenTo(t,'change',()=>{this.view.change((e)=>{this.downcastDispatcher.convertChanges(t.differ,e),this.downcastDispatcher.convertSelection(o,n,e)})},{priority:'low'}),this.listenTo(this.view.document,'selectionChange',Et(this.model,this.mapper)),this.downcastDispatcher.on('insert:$text',Ct(),{priority:'lowest'}),this.downcastDispatcher.on('remove',At(),{priority:'low'}),this.downcastDispatcher.on('selection',Rt(),{priority:'low'}),this.downcastDispatcher.on('selection',St(),{priority:'low'}),this.downcastDispatcher.on('selection',Ot(),{priority:'low'}),this.view.document.roots.bindTo(this.model.document.roots).using((e)=>{if('$graveyard'==e.rootName)return null;const t=new vc(e.name);return t.rootName=e.rootName,t._document=this.view.document,this.mapper.bindElements(e,t),t})}destroy(){this.view.destroy(),this.stopListening()}}f(nm,bc);class im{constructor(e,t=[]){this._editor=e,this._availablePlugins=new Map,this._plugins=new Map;for(const o of t)this._availablePlugins.set(o,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)'function'==typeof e[0]&&(yield e)}get(e){return this._plugins.get(e)}load(e,t=[]){function o(e){return u.includes(e)||a.get(e)||l.has(e)?void 0:n(e).catch((t)=>{throw Ru.error('plugincollection-load: It was not possible to load the plugin.',{plugin:e}),t})}function n(e){return new Promise((n)=>{l.add(e),e.requires&&e.requires.forEach((n)=>{const r=i(n);if(t.includes(r))throw new Za('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.',{plugin:r,requiredBy:e});o(r)});const r=new e(s);a._add(e,r),d.push(r),n()})}function i(e){return'function'==typeof e?e:a._availablePlugins.get(e)}function r(e){return e.map((e)=>i(e)).filter((e)=>!!e)}const a=this,s=this._editor,l=new Set,d=[],c=r(e),u=r(t),m=function(e){const t=[];for(const o of e)i(o)||t.push(o);return t.length?t:null}(e);if(m){const e='plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';return Ru.error(e,{plugins:m}),Promise.reject(new Za(e,{plugins:m}))}return Promise.all(c.map(o)).then(()=>d)}destroy(){const e=Array.from(this).map(([,e])=>e).filter((e)=>'function'==typeof e.destroy).map((e)=>e.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const o=e.pluginName;o&&(this._plugins.has(o)?Ru.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.',{pluginName:o,plugin1:this._plugins.get(o).constructor,plugin2:e}):this._plugins.set(o,t))}}class rm{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const o=this.get(e);if(!o)throw new Za('commandcollection-command-not-found: Command does not exist.',{commandName:e});o.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});class am{constructor(e){this.language=e||'en',this.t=(...e)=>this._t(...e)}_t(e,t){let o=It(this.language,e);return t&&(o=o.replace(/%(\d+)/g,(e,o)=>o<t.length?t[o]:e)),o}}class sm{constructor(){this._consumables=new Map}add(e,t){let o;return e.is('text')||e.is('documentFragment')?void this._consumables.set(e,!0):void(this._consumables.has(e)?o=this._consumables.get(e):(o=new lm,this._consumables.set(e,o)),o.add(t))}test(e,t){const o=this._consumables.get(e);return void 0===o?null:e.is('text')||e.is('documentFragment')?o:o.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const o=this._consumables.get(e);o!==void 0&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!0):o.revert(t))}static consumablesFromElement(e){const t={name:!0,attributes:[],classes:[],styles:[]},o=e.getAttributeKeys();for(const n of o)'style'!=n&&'class'!=n&&t.attributes.push(n);const n=e.getClassNames();for(const o of n)t.classes.push(o);const i=e.getStyleNames();for(const o of i)t.styles.push(o);return t}static createFrom(e,t){if(t||(t=new sm),e.is('text'))return t.add(e),t;e.is('element')&&t.add(e,sm.consumablesFromElement(e)),e.is('documentFragment')&&t.add(e);for(const o of e.getChildren())t=sm.createFrom(o,t);return t}}class lm{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const o=this._test(t,e[t]);if(!0!==o)return o}return!0}consume(e){for(const t in e.name&&(this._canConsumeName=!1),this._consumables)t in e&&this._consume(t,e[t])}revert(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const o=dl(t)?t:[t],n=this._consumables[e];for(const i of o){if('attributes'===e&&('class'===i||'style'===i))throw new Za('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');n.set(i,!0)}}_test(e,t){const o=dl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles',t=this._test(e,[...this._consumables[e].keys()]);if(!0!==t)return t}else{const e=n.get(i);if(e===void 0)return null;if(!e)return!1}return!0}_consume(e,t){const o=dl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles';this._consume(e,[...this._consumables[e].keys()])}else n.set(i,!1)}_revert(e,t){const o=dl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles';this._revert(e,[...this._consumables[e].keys()])}else{const e=n.get(i);!1===e&&n.set(i,!0)}}}class dm{constructor(){this._sourceDefinitions={},this.decorate('checkChild'),this.decorate('checkAttribute'),this.on('checkAttribute',(e,t)=>{t[0]=new cm(t[0])},{priority:'highest'}),this.on('checkChild',(e,t)=>{t[0]=new cm(t[0]),t[1]=this.getDefinition(t[1])},{priority:'highest'})}register(e,t){if(this._sourceDefinitions[e])throw new Za('schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.',{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new Za('schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.',{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t='string'==typeof e?e:e.is&&(e.is('text')||e.is('textProxy'))?'$text':e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!!(t&&t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!(t&&t.isLimit)}isObject(e){const t=this.getDefinition(e);return!!(t&&t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const o=this.getDefinition(e.last);return!!o&&o.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof Ku){const t=e.nodeBefore,o=e.nodeAfter;if(!(t instanceof Wu))throw new Za('schema-check-merge-no-element-before: The node before the merge position must be an element.');if(!(o instanceof Wu))throw new Za('schema-check-merge-no-element-after: The node after the merge position must be an element.');return this.checkMerge(t,o)}for(const o of t.getChildren())if(!this.checkChild(e,o))return!1;return!0}addChildCheck(e){this.on('checkChild',(t,[o,n])=>{if(n){const i=e(o,n);'boolean'==typeof i&&(t.stop(),t.return=i)}},{priority:'high'})}addAttributeCheck(e){this.on('checkAttribute',(t,[o,n])=>{const i=e(o,n);'boolean'==typeof i&&(t.stop(),t.return=i)},{priority:'high'})}getLimitElement(e){let t=Array.from(e.getRanges()).reduce((e,t)=>{const o=t.getCommonAncestor();return e?e.getCommonAncestor(o,{includeSelf:!0}):o},null);for(;!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed)return this.checkAttribute([...e.getFirstPosition().getAncestors(),'$text'],t);else{const o=e.getRanges();for(const e of o)for(const o of e)if(this.checkAttribute(o.item,t))return!0}return!1}getValidRanges(e,t){const o=[];for(const n of e){let e=n.start,i=n.start;const r=n.end;for(const r of n.getWalker())this.checkAttribute(r.item,t)||(!i.isEqual(e)&&o.push(new Gu(i,e)),i=r.nextPosition),e=r.nextPosition;i&&!i.isEqual(r)&&o.push(new Gu(i,r))}return o}getNearestSelectionRange(e,t='both'){if(this.checkChild(e,'$text'))return new Gu(e);let o,n;('both'==t||'backward'==t)&&(o=new Uu({startPosition:e,direction:'backward'})),('both'==t||'forward'==t)&&(n=new Uu({startPosition:e}));for(const i of $t(o,n)){const e=i.walker==o?'elementEnd':'elementStart',t=i.value;if(t.type==e&&this.isObject(t.item))return Gu.createOn(t.item);if(this.checkChild(t.nextPosition,'$text'))return new Gu(t.nextPosition)}return null}findAllowedParent(e,t){for(let o=t.parent;o;){if(this.checkChild(o,e))return o;if(this.isLimit(o)||this.isObject(o))return null;o=o.parent}return null}removeDisallowedAttributes(e,t){for(const o of e){for(const e of o.getAttributeKeys())this.checkAttribute(o,e)||t.removeAttribute(e,o);o.is('element')&&this.removeDisallowedAttributes(o.getChildren(),t)}}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,o=Object.keys(t);for(const n of o)e[n]=Nt(t[n],n);for(const t of o)Mt(e,t);for(const t of o)Dt(e,t);for(const t of o)Bt(e,t),Lt(e,t);for(const t of o)zt(e,t),jt(e,t);this._compiledDefinitions=e}_checkContextMatch(e,t,o=t.length-1){const n=t.getItem(o);if(!e.allowIn.includes(n.name))return!1;else if(0==o)return!0;else{const e=this.getDefinition(n);return this._checkContextMatch(e,t,o-1)}}}f(dm,bc);class cm{constructor(e){return e instanceof cm?e:void('string'==typeof e?e=[e]:!Array.isArray(e)&&(e=e.getAncestors({includeSelf:!0})),e[0]&&'string'!=typeof e[0]&&e[0].is('documentFragment')&&e.shift(),this._items=e.map(Gt))}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new cm([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map((e)=>e.name)}endsWith(e){return Array.from(this.getNames()).join(' ').endsWith(e)}}class um{constructor(e={}){this._removeIfEmpty=new Set,this._modelCursor=null,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this)}convert(e,t,o=['$root']){this.fire('viewCleanup',e),this._modelCursor=Qt(o,t),this.conversionApi.writer=t,this.conversionApi.consumable=sm.createFrom(e),this.conversionApi.store={};const{modelRange:n}=this._convertItem(e,this._modelCursor),i=t.createDocumentFragment();if(n){this._removeEmptyElements();for(const e of Array.from(this._modelCursor.parent.getChildren()))t.append(e,i);i.markers=Jt(i,t)}return this._modelCursor=null,this._removeIfEmpty.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,i}_convertItem(e,t){const o=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is('element')?this.fire('element:'+e.name,o,this.conversionApi):e.is('text')?this.fire('text',o,this.conversionApi):this.fire('documentFragment',o,this.conversionApi),o.modelRange&&!(o.modelRange instanceof Gu))throw new Za('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.');return{modelRange:o.modelRange,modelCursor:o.modelCursor}}_convertChildren(e,t){const o=new Gu(t);let n=t;for(const i of Array.from(e.getChildren())){const e=this._convertItem(i,n);e.modelRange instanceof Gu&&(o.end=e.modelRange.end,n=e.modelCursor)}return{modelRange:o,modelCursor:n}}_splitToAllowedParent(e,t){const o=this.conversionApi.schema.findAllowedParent(e,t);if(!o)return null;if(o===t.parent)return{position:t};if(this._modelCursor.parent.getAncestors().includes(o))return null;const n=this.conversionApi.writer.split(t,o);for(const o of n.range.getPositions())o.isEqual(n.position)||this._removeIfEmpty.add(o.parent);return{position:n.position,cursorParent:n.range.end.parent}}_removeEmptyElements(){let e=!1;for(const t of this._removeIfEmpty)t.isEmpty&&(this.conversionApi.writer.remove(t),this._removeIfEmpty.delete(t),e=!0);e&&this._removeEmptyElements()}}f(um,ss);class mm{constructor(e,t){this.model=e,this.processor=t,this.mapper=new $u,this.downcastDispatcher=new Qu({mapper:this.mapper}),this.downcastDispatcher.on('insert:$text',Ct(),{priority:'lowest'}),this.upcastDispatcher=new um({schema:e.schema}),this.upcastDispatcher.on('text',co(),{priority:'lowest'}),this.upcastDispatcher.on('element',lo(),{priority:'lowest'}),this.upcastDispatcher.on('documentFragment',lo(),{priority:'lowest'}),this.decorate('init')}get(e='main'){return this.stringify(this.model.document.getRoot(e))}stringify(e){const t=this.toView(e);return this.processor.toData(t)}toView(e){const t=Gu.createIn(e),o=new Lc,n=new zc(new Ec());if(this.mapper.bindElements(e,o),this.downcastDispatcher.convertInsert(t,n),!e.is('documentFragment')){const t=uo(e);for(const[e,o]of t)this.downcastDispatcher.convertMarkerAdd(e,o,n)}return this.mapper.clearBindings(),o}init(e,t='main'){if(this.model.document.version)throw new Za('datacontroller-init-document-not-empty: Trying to set initial data to not empty document.');const o=this.model.document.getRoot(t);return this.model.enqueueChange('transparent',(t)=>{t.insert(this.parse(e,o),o)}),Promise.resolve()}set(e,t='main'){const o=this.model.document.getRoot(t);this.model.enqueueChange('transparent',(t)=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys()),t.remove(Gu.createIn(o)),t.insert(this.parse(e,o),o)})}parse(e,t='$root'){const o=this.processor.toView(e);return this.toModel(o,t)}toModel(e,t='$root'){return this.model.change((o)=>this.upcastDispatcher.convert(e,o,t))}destroy(){}}f(mm,bc);class pm{constructor(){this._dispatchersGroups=new Map}register(e,t){if(this._dispatchersGroups.has(e))throw new Za('conversion-register-group-exists: Trying to register a group name that was already registered.');this._dispatchersGroups.set(e,t)}for(e){const t=this._getDispatchers(e);return{add(e){return mo(t,e),this}}}elementToElement(e){this.for('downcast').add(ht(e));for(const{model:t,view:o}of po(e))this.for('upcast').add(Yt({model:t,view:o,priority:e.priority}))}attributeToElement(e){this.for('downcast').add(bt(e));for(const{model:t,view:o}of po(e))this.for('upcast').add(Xt({view:o,model:t,priority:e.priority}))}attributeToAttribute(e){this.for('downcast').add(kt(e));for(const{model:t,view:o}of po(e))this.for('upcast').add(Zt({view:o,model:t}))}_getDispatchers(e){const t=this._dispatchersGroups.get(e);if(!t)throw new Za('conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.');return t}}class gm{constructor(e){this.baseVersion=e,this.isDocumentOperation=null!==this.baseVersion}_validate(){}toJSON(){const e=Ed(this,!0);return e.__className=this.constructor.className,delete e.delta,delete e.isDocumentOperation,e}static get className(){return'engine.model.operation.Operation'}static fromJSON(e){return new this(e.baseVersion)}}class fm{constructor(e){this.markers=new Map,this._children=new qu,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const o of e)t=t.getChild(t.offsetToIndex(o));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const o of e)o.name?t.push(Wu.fromJSON(o)):t.push(zu.fromJSON(o));return new fm(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const o=fo(t);for(const n of o)null!==n.parent&&n._remove(),n.parent=this;this._children._insertNodes(e,o)}_removeChildren(e,t=1){const o=this._children._removeNodes(e,t);for(const n of o)n.parent=null;return o}}var hm=function(e,t){return bu(e,t)};class bm extends gm{constructor(e,t,o,n,i){super(i),this.range=Gu.createFromRange(e),this.key=t,this.oldValue=o===void 0?null:o,this.newValue=n===void 0?null:n}get type(){return null===this.oldValue?'addAttribute':null===this.newValue?'removeAttribute':'changeAttribute'}clone(){return new bm(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new bm(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){for(const e of this.range.getItems()){if(null!==this.oldValue&&!hm(e.getAttribute(this.key),this.oldValue))throw new Za('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{item:e,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&e.hasAttribute(this.key))throw new Za('attribute-operation-attribute-exists: The attribute with given key already exists.',{node:e,key:this.key})}}_execute(){hm(this.oldValue,this.newValue)||_o(this.range,this.key,this.newValue)}static get className(){return'engine.model.operation.AttributeOperation'}static fromJSON(e,t){return new bm(Gu.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class km extends gm{constructor(e,t,o,n){super(n),this.sourcePosition=Ku.createFromPosition(e),this.howMany=t,this.targetPosition=Ku.createFromPosition(o),this.isSticky=!1}get type(){return'move'}clone(){const e=new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion);return e.isSticky=this.isSticky,e}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany),t=new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1);return t.isSticky=this.isSticky,t}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,o=this.sourcePosition.offset,n=this.targetPosition.offset;if(!e||!t)throw new Za('move-operation-position-invalid: Source position or target position is invalid.');else if(o+this.howMany>e.maxOffset)throw new Za('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.');else if(e===t&&o<n&&n<o+this.howMany)throw new Za('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.');else if(this.sourcePosition.root==this.targetPosition.root&&'prefix'==A(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=o&&this.targetPosition.path[e]<o+this.howMany)throw new Za('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')}}_execute(){ko(Gu.createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}static get className(){return'engine.model.operation.MoveOperation'}static fromJSON(e,t){const o=Ku.fromJSON(e.sourcePosition,t),n=Ku.fromJSON(e.targetPosition,t),i=new this(o,e.howMany,n,e.baseVersion);return e.isSticky&&(i.isSticky=!0),i}}class _m extends km{get position(){return this.targetPosition}set position(e){this.targetPosition=e}get type(){return'reinsert'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new wm(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new Za('reinsert-operation-on-detached-item: Cannot reinsert detached item.');if(!this.targetPosition.root.document)throw new Za('reinsert-operation-to-detached-parent: Cannot reinsert item to detached parent.')}static get className(){return'engine.model.operation.ReinsertOperation'}}class wm extends km{get type(){return'remove'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new _m(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new Za('remove-operation-on-detached-item: Cannot remove detached item.')}static get className(){return'engine.model.operation.RemoveOperation'}}class vm extends gm{constructor(e,t,o){super(o),this.position=Ku.createFromPosition(e),this.nodes=new qu(wo(t))}get type(){return'insert'}clone(){const e=new qu([...this.nodes].map((e)=>e._clone(!0)));return new vm(this.position,e,this.baseVersion)}getReversed(){const e=this.position.root.document.graveyard,t=new Ku(e,[0]);return new wm(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new Za('insert-operation-position-invalid: Insertion position is invalid.')}_execute(){const e=this.nodes;this.nodes=new qu([...e].map((e)=>e._clone(!0))),ho(this.position,e)}static get className(){return'engine.model.operation.InsertOperation'}static fromJSON(e,t){const o=[];for(const n of e.nodes)n.name?o.push(Wu.fromJSON(n)):o.push(zu.fromJSON(n));return new vm(Ku.fromJSON(e.position,t),o,e.baseVersion)}}class ym extends gm{constructor(e,t,o,n,i){super(i),this.name=e,this.oldRange=t?Gu.createFromRange(t):null,this.newRange=o?Gu.createFromRange(o):null,this._markers=n}get type(){return'marker'}clone(){return new ym(this.name,this.oldRange,this.newRange,this._markers,this.baseVersion)}getReversed(){return new ym(this.name,this.newRange,this.oldRange,this._markers,this.baseVersion+1)}_execute(){const e=this.newRange?'_set':'_remove';this._markers[e](this.name,this.newRange,!0)}toJSON(){const e=super.toJSON();return delete e._markers,e}static get className(){return'engine.model.operation.MarkerOperation'}static fromJSON(e,t){return new ym(e.name,e.oldRange?Gu.fromJSON(e.oldRange,t):null,e.newRange?Gu.fromJSON(e.newRange,t):null,t.model.markers,e.baseVersion)}}class xm extends gm{get type(){return'noop'}clone(){return new xm(this.baseVersion)}getReversed(){return new xm(this.baseVersion+1)}_execute(){}static get className(){return'engine.model.operation.NoOperation'}}class Cm extends gm{constructor(e,t,o,n){super(n),this.position=e,this.oldName=t,this.newName=o}get type(){return'rename'}clone(){return new Cm(Ku.createFromPosition(this.position),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Cm(Ku.createFromPosition(this.position),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Wu))throw new Za('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.');else if(e.name!==this.oldName)throw new Za('rename-operation-wrong-name: Element to change has different name than operation\'s old name.')}_execute(){const e=this.position.nodeAfter;e.name=this.newName}static get className(){return'engine.model.operation.RenameOperation'}static fromJSON(e,t){return new Cm(Ku.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Am extends gm{constructor(e,t,o,n,i){super(i),this.root=e,this.key=t,this.oldValue=o,this.newValue=n}get type(){return null===this.oldValue?'addRootAttribute':null===this.newValue?'removeRootAttribute':'changeRootAttribute'}clone(){return new Am(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Am(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is('documentFragment'))throw new Za('rootattribute-operation-not-a-root: The element to change is not a root element.',{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new Za('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new Za('rootattribute-operation-attribute-exists: The attribute with given key already exists.',{root:this.root,key:this.key})}_execute(){null===this.newValue?this.root._removeAttribute(this.key):this.root._setAttribute(this.key,this.newValue)}static get className(){return'engine.model.operation.RootAttributeOperation'}static fromJSON(e,t){if(!t.getRoot(e.root))throw new Za('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.',{rootName:e});return new Am(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}const Tm={};Tm[bm.className]=bm,Tm[vm.className]=vm,Tm[ym.className]=ym,Tm[km.className]=km,Tm[xm.className]=xm,Tm[gm.className]=gm,Tm[_m.className]=_m,Tm[wm.className]=wm,Tm[Cm.className]=Cm,Tm[Am.className]=Am;class Pm{static fromJSON(e,t){return Tm[e.__className].fromJSON(e,t)}}const Em=new Map;class Sm{static fromJSON(e,t){if(!Em.has(e.__className))throw new Za('delta-fromjson-no-deserializer: This delta has no defined deserializer',{name:e.__className});const o=Em.get(e.__className),n=new o;for(const o of e.operations)n.addOperation(Pm.fromJSON(o,t));for(const o in e)'__className'!=o&&void 0===n[o]&&(n[o]=e[o]);return n}static register(e){Em.set(e.className,e)}}class Om{constructor(){this.batch=null,this.operations=[]}get baseVersion(){return 0<this.operations.length?this.operations[0].baseVersion:null}set baseVersion(e){for(const t of this.operations)t.baseVersion=e++}get _reverseDeltaClass(){return Om}addOperation(e){return e.delta=this,this.operations.push(e),e}clone(){const e=new this.constructor;for(const t of this.operations)e.addOperation(t.clone());return e}getReversed(){const e=new this._reverseDeltaClass;for(const t of this.operations)e.addOperation(t.getReversed());e.operations.reverse();for(let t=0;t<e.operations.length;t++)e.operations[t].baseVersion=this.operations[this.operations.length-1].baseVersion+t+1;return e}toJSON(){const e=Ed(this);return e.__className=this.constructor.className,delete e.batch,e}static get className(){return'engine.model.delta.Delta'}}Sm.register(Om);class Rm extends Om{get type(){return'attribute'}get key(){return this.operations[0]?this.operations[0].key:null}get value(){return this.operations[0]?this.operations[0].newValue:null}get range(){if(this._range)return this._range;let e=null,t=null;for(const o of this.operations)o instanceof xm||((null===e||e.isAfter(o.range.start))&&(e=o.range.start),(null===t||t.isBefore(o.range.end))&&(t=o.range.end));return e&&t?(this._range=new Gu(e,t),this._range):null}get _reverseDeltaClass(){return Rm}toJSON(){const e=super.toJSON();return delete e._range,e}static get className(){return'engine.model.delta.AttributeDelta'}}Sm.register(Rm);class Im extends Om{get type(){return'split'}get position(){return this._moveOperation?this._moveOperation.sourcePosition:null}get _cloneOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]&&this.operations[1]instanceof km?this.operations[1]:null}get _reverseDeltaClass(){return Vm}static get className(){return'engine.model.delta.SplitDelta'}}Sm.register(Im);class Vm extends Om{get type(){return'merge'}get position(){return this._removeOperation?this._removeOperation.sourcePosition:null}get _removeOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return Im}static get className(){return'engine.model.delta.MergeDelta'}}Sm.register(Vm);class Fm extends Om{get type(){return'move'}get howMany(){return this._moveOperation?this._moveOperation.howMany:null}get sourcePosition(){return this._moveOperation?this._moveOperation.sourcePosition:null}get targetPosition(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return Fm}static get className(){return'engine.model.delta.MoveDelta'}}Sm.register(Fm);class Nm extends Fm{static get className(){return'engine.model.delta.RemoveDelta'}}Sm.register(Nm);class Mm extends Om{get type(){return'rename'}get _reverseDeltaClass(){return Mm}static get className(){return'engine.model.delta.RenameDelta'}}Sm.register(Mm);class Dm extends Om{get type(){return'wrap'}get range(){const e=this._moveOperation;return e?Gu.createFromPositionAndShift(e.sourcePosition,e.howMany):null}get howMany(){const e=this.range;return e?e.end.offset-e.start.offset:0}get _insertOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return Bm}static get className(){return'engine.model.delta.WrapDelta'}}Sm.register(Dm);class Bm extends Om{get type(){return'unwrap'}get position(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return Dm}static get className(){return'engine.model.delta.UnwrapDelta'}}Sm.register(Bm);class Lm extends Om{get type(){return'insert'}get position(){return this._insertOperation?this._insertOperation.position:null}get nodes(){return this._insertOperation?this._insertOperation.nodes:null}get _insertOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return Nm}static get className(){return'engine.model.delta.InsertDelta'}}Sm.register(Lm);class zm extends Lm{static get className(){return'engine.model.delta.WeakInsertDelta'}}Sm.register(zm);var jm=function(e,t,o={isStrong:!1}){let n,i;e instanceof vm?n=qm.InsertOperation:e instanceof bm?n=qm.AttributeOperation:e instanceof Am?n=qm.RootAttributeOperation:e instanceof Cm?n=qm.RenameOperation:e instanceof ym?n=qm.MarkerOperation:e instanceof km?n=qm.MoveOperation:i=Co,n&&(t instanceof vm?i=n.InsertOperation:t instanceof bm?i=n.AttributeOperation:t instanceof Am?i=n.RootAttributeOperation:t instanceof Cm?i=n.RenameOperation:t instanceof ym?i=n.MarkerOperation:t instanceof km?i=n.MoveOperation:i=Co);const r=i(e,t,o);return Ao(e.baseVersion,r)};const qm={InsertOperation:{InsertOperation(e,t,o){const n=e.clone(),i=void 0===o.insertBefore?!o.isStrong:o.insertBefore;return n.position=n.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,i),[n]},AttributeOperation:Co,RootAttributeOperation:Co,RenameOperation:Co,MarkerOperation:Co,MoveOperation(e,t,o){const n=e.clone(),i=void 0===o.insertBefore?!o.isStrong:o.insertBefore;return n.position=e.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,i,t.isSticky&&!o.forceNotSticky),[n]}},AttributeOperation:{InsertOperation(e,t){const o=e.range._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0,!1);return o.reverse().map((t)=>new bm(t,e.key,e.oldValue,e.newValue,e.baseVersion))},AttributeOperation(e,t,o){if(e.key===t.key){const n=e.range.getDifference(t.range).map((t)=>new bm(t,e.key,e.oldValue,e.newValue,e.baseVersion)),i=e.range.getIntersection(t.range);return i&&(o.isStrong?n.push(new bm(i,t.key,t.newValue,e.newValue,e.baseVersion)):0===n.length&&n.push(new xm(0))),n}return[e.clone()]},RootAttributeOperation:Co,RenameOperation:Co,MarkerOperation:Co,MoveOperation(e,t){const o=Gu.createFromPositionAndShift(t.sourcePosition,t.howMany);let n=[];const i=Po(e.range.getDifference(o)),r=e.range.getIntersection(o);return null!==i&&(i.start=i.start._getTransformedByDeletion(t.sourcePosition,t.howMany),i.end=i.end._getTransformedByDeletion(t.sourcePosition,t.howMany),n=i._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,!0,!1).reverse()),null!==r&&(r.start=r.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),r.end=r.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.push(r)),n.map((t)=>new bm(t,e.key,e.oldValue,e.newValue,e.baseVersion))}},RootAttributeOperation:{InsertOperation:Co,AttributeOperation:Co,RootAttributeOperation(e,t,o){return e.root!==t.root||e.key!==t.key||(e.newValue===t.newValue||o.isStrong)&&e.newValue!==t.newValue?[e.clone()]:[new xm(e.baseVersion)]},RenameOperation:Co,MarkerOperation:Co,MoveOperation:Co},RenameOperation:{InsertOperation(e,t){const o=e.clone();return o.position=o.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0),[o]},AttributeOperation:Co,RootAttributeOperation:Co,RenameOperation(e,t,o){const n=e.clone();if(e.position.isEqual(t.position))if(o.isStrong)n.oldName=t.newName;else return[new xm(e.baseVersion)];return[n]},MarkerOperation:Co,MoveOperation(e,t){const o=e.clone(),n=o.position.isEqual(t.sourcePosition);return o.position=o.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0,n),[o]}},MarkerOperation:{InsertOperation(e,t){const o=e.clone();return o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),[o]},AttributeOperation:Co,RootAttributeOperation:Co,RenameOperation:Co,MarkerOperation(e,t,o){const n=e.clone();if(e.name==t.name)if(o.isStrong)n.oldRange=t.newRange;else return[new xm(e.baseVersion)];return[n]},MoveOperation(e,t){const o=e.clone();if(o.oldRange){const e=o.oldRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);o.oldRange=Gu.createFromRanges(e)}if(o.newRange){const e=o.newRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);o.newRange=Gu.createFromRanges(e)}return[o]}},MoveOperation:{InsertOperation(e,t,o){let n=Gu.createFromPositionAndShift(e.sourcePosition,e.howMany);const i=e.isSticky&&!o.forceNotSticky;n=n._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,i)[0];const r=void 0===o.insertBefore?!o.isStrong:o.insertBefore,a=new e.constructor(n.start,n.end.offset-n.start.offset,e.targetPosition._getTransformedByInsertion(t.position,t.nodes.maxOffset,r),e.baseVersion);return a.isSticky=e.isSticky,[a]},AttributeOperation:Co,RootAttributeOperation:Co,RenameOperation:Co,MarkerOperation:Co,MoveOperation(e,t,o){const n=Gu.createFromPositionAndShift(e.sourcePosition,e.howMany),i=Gu.createFromPositionAndShift(t.sourcePosition,t.howMany);let r=o.isStrong;const a=e.isSticky&&!o.forceNotSticky,s=void 0===o.insertBefore?!r:o.insertBefore,l=e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,s,t.isSticky&&!o.forceNotSticky);if(To(e,t)&&To(t,e))return[t.getReversed()];const d=n.containsPosition(t.targetPosition)||n.start.isEqual(t.targetPosition)&&a||n.end.isEqual(t.targetPosition)&&a;if(d&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!a),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,a),Eo([n],l,e);const c=i.containsPosition(e.targetPosition)||i.start.isEqual(e.targetPosition)&&t.isSticky&&!o.forceNotSticky||i.end.isEqual(e.targetPosition)&&t.isSticky&&!o.forceNotSticky;if(c&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Eo([n],l,e);const u=A(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if('prefix'==u||'extension'==u)return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!a),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,a),Eo([n],l,e);o.forceWeakRemove||(e instanceof wm&&!(t instanceof wm)?r=!0:!(e instanceof wm)&&t instanceof wm&&(r=!1));const m=[],p=n.getDifference(i);for(const n of p){n.start=n.start._getTransformedByDeletion(t.sourcePosition,t.howMany),n.end=n.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const e='same'==A(n.start.getParentPath(),t.getMovedRangeStart().getParentPath()),o=n._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,e,a);m.push(...o)}const g=n.getIntersection(i);return null!==g&&r&&!d&&(g.start=g.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),g.end=g.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),0===m.length?m.push(g):1==m.length?i.start.isBefore(n.start)||i.start.isEqual(n.start)?m.unshift(g):m.push(g):m.splice(1,0,g)),0===m.length?[new xm(e.baseVersion)]:Eo(m,l,e)}}};var ot=function(e,t,o){var n=-1,i=e.length;0>t&&(t=-t>i?0:i+t),o=o>i?i:o,0>o&&(o+=i),i=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=e[n+t];return r},Wm=Math.ceil,Um=function(e){return dl(e)||sl(e)},Hm=Oo,Km=function(e,t,o){for(var n=e.length,i=t+(o?0:-1);o?i--:++i<n;){var r=e[i];if(r!==r)return i}return-1},Gm=function(e,t,o){if(t!==t)return Km(e,o);for(var n=o-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},$m=function(e,t){return!!e.length&&-1<Gm(e,t,0)},Jm=function(e,t,o){for(var n=-1,i=e.length;++n<i;)if(o(t,e[n]))return!0;return!1},Qm=function(e,t){for(var o=-1,n=e.length,i=Array(n);++o<n;)i[o]=t(e[o],o,e);return i},Ym=function(e){return function(t){return e(t)}},Xm=function(e,t){return e.has(t)},Zm=function(e,t,o,n){var i=-1,r=$m,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;o&&(t=Qm(t,Ym(o))),n?(r=Jm,a=!1):t.length>=200&&(r=Xm,a=!1,t=new eu(t));outer:for(;++i<s;){var c=e[i],u=o?o(c):c;if(c=n||0!==c?c:0,a&&u===u){for(var m=d;m--;)if(t[m]===u)continue outer;l.push(c)}else r(t,u,n)||l.push(c)}return l},ep=Yd(function(e,t){return ol(e)?Zm(e,Hm(t,1,ol,!0)):[]}),tp=1,op=2,np=function(e){return e===e&&!ps(e)},ip=function(e,t){return Qm(t,function(t){return[t,e[t]]})},rp=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=[e,e]}),o},ap=function(e){return function(t){var o=$l(t);return o=='[object Map]'?id(t):o=='[object Set]'?rp(t):ip(t,e(t))}}(kl),sp=function(e){for(var t=ap(e),o=t.length;o--;)t[o][2]=np(t[o][1]);return t},lp=function(e,t){return function(o){return null!=o&&o[e]===t&&(t!==void 0||e in Object(o))}},dp=function(e){var t=sp(e);return 1==t.length&&t[0][2]?lp(t[0][0],t[0][1]):function(o){return o===e||Ro(o,e,t)}},cp='Expected a function';Io.Cache=Ls;var up=md?md.prototype:void 0,mp=up?up.toString:void 0,pp=function(e){if('string'==typeof e)return e;if(Ld(e))return mp?mp.call(e):'';var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},gp=function(e){return null==e?'':pp(e)},fp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,hp=/\\(\\)?/g,bp=Io(function(e){var t=[];return gp(e).replace(fp,function(e,o,n,i){t.push(n?i.replace(hp,'$1'):o||e)}),t}),kp=function(e){return dl(e)?e:bp(e)},_p=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wp=/^\w*$/,vp=Vo,yp=function(e){if('string'==typeof e||Ld(e))return e;var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},xp=function(e,t){t=vp(t,e)?[t]:kp(t);for(var o=0,n=t.length;null!=e&&o<n;)e=e[yp(t[o++])];return o&&o==n?e:void 0},Cp=function(e,t,o){var n=null==e?void 0:xp(e,t);return n===void 0?o:n},Ap=function(e,t,o){t=vp(t,e)?[t]:kp(t);for(var n=-1,i=t.length,r;++n<i;){var a=yp(t[n]);if(!(r=null!=e&&o(e,a)))break;e=e[a]}if(r)return r;var i=e?e.length:0;return!!i&&el(i)&&fl(a,i)&&(dl(e)||ml(e)||sl(e))},Tp=function(e,t){return null!=e&&Ap(e,t,Fo)},Pp=function(e,t){return vp(e)&&np(t)?lp(yp(e),t):function(o){var n=Cp(o,e);return n===void 0&&n===t?Tp(o,e):bu(t,n,void 0,1|2)}},Ep=function(e){return e},Sp=function(e){return function(t){return xp(t,e)}},Op=function(e){return vp(e)?Xs(yp(e)):Sp(e)},Rp=function(e){return'function'==typeof e?e:null==e?Ep:'object'==typeof e?dl(e)?Pp(e[0],e[1]):dp(e):Op(e)},Ip=Yd(function(e,t){var o=Hu(t);return ol(o)&&(o=void 0),ol(e)?Zm(e,Hm(t,1,ol,!0),Rp(o)):[]}),Vp=Yd(function(e,t){var o=Hu(t);return ol(o)&&(o=void 0),ol(e)?Zm(e,Hm(t,1,ol,!0),void 0,o):[]}),Fp=function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:Jd(t),ot(e,0>t?0:t,n)):[]},Np=function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:Jd(t),t=n-t,ot(e,0,0>t?0:t)):[]},Mp=function(e,t,o,n){for(var i=e.length,r=n?i:-1;(n?r--:++r<i)&&t(e[r],r,e););return o?ot(e,n?0:r,n?r+1:i):ot(e,n?r+1:0,n?i:r)},Dp=function(e,t,o){return e===e&&(void 0!==o&&(e=e<=o?e:o),void 0!==t&&(e=e>=t?e:t)),e},Bp=function(e){return e?Dp(Jd(e),0,4294967295):0},Lp=function(e,t,o,n){var i=e.length;for(o=Jd(o),0>o&&(o=-o>i?0:i+o),n=void 0===n||n>i?i:Jd(n),0>n&&(n+=i),n=o>n?0:Bp(n);o<n;)e[o++]=t;return e},zp=function(e,t,o){for(var n=e.length,i=o?n:-1;o?i--:++i<n;)if(t(e[i],i,e))return i;return-1},jp=function(e){return e&&e.length?e[0]:void 0},qp=function(e,t,o){for(var n=o?Jm:$m,i=e[0].length,r=e.length,a=r,s=Array(r),l=Infinity,d=[];a--;){var c=e[a];a&&t&&(c=Qm(c,Ym(t))),l=La(c.length,l),s[a]=!o&&(t||120<=i&&120<=c.length)?new eu(a&&c):void 0}c=e[0];var u=-1,m=s[0];outer:for(;++u<i&&d.length<l;){var p=c[u],g=t?t(p):p;if(p=o||0!==p?p:0,m?!Xm(m,g):!n(d,g,o)){for(a=r;--a;){var f=s[a];if(f?!Xm(f,g):!n(e[a],g,o))continue outer}m&&m.push(g),d.push(p)}}return d},Wp=function(e){return ol(e)?e:[]},Up=Yd(function(e){var t=Qm(e,Wp);return t.length&&t[0]===e[0]?qp(t):[]}),Hp=Yd(function(e){var t=Hu(e),o=Qm(e,Wp);return t===Hu(o)?t=void 0:o.pop(),o.length&&o[0]===e[0]?qp(o,Rp(t)):[]}),Kp=Yd(function(e){var t=Hu(e),o=Qm(e,Wp);return t===Hu(o)?t=void 0:o.pop(),o.length&&o[0]===e[0]?qp(o,void 0,t):[]}),Gp=Array.prototype,$p=Gp.join,Jp=function(e,t){var o=e.length;if(o)return t+=0>t?o:0,fl(t,o)?e[t]:void 0},Qp=function(e,t,o,n){for(var i=o-1,r=e.length;++i<r;)if(n(e[i],t))return i;return-1},Yp=Array.prototype,Xp=Yp.splice,Zp=function(e,t,o,n){var i=n?Qp:Gm,r=-1,a=t.length,s=e;for(o&&(s=Qm(e,Ym(o)));++r<a;)for(var l=0,d=t[r],c=o?o(d):d;-1<(l=i(s,c,l,n));)s!==e&&Xp.call(s,l,1),Xp.call(e,l,1);return e},eg=function(e,t){return e&&e.length&&t&&t.length?Zp(e,t):e},tg=Yd(eg),og=function(e,t){for(var o=-1,n=t.length,i=Array(n);++o<n;)i[o]=null==e?void 0:Cp(e,t[o]);return i},ng=function(e,t){return 1==t.length?e:xp(e,ot(t,0,-1))},ig=Array.prototype,rg=ig.splice,ag=function(e,t){for(var o=e?t.length:0,n=o-1;o--;){var i=t[o];if(o==n||i!==r){var r=i;if(fl(i))rg.call(e,i,1);else if(!vp(i,e)){var a=kp(i),s=ng(e,a);null!=s&&delete s[yp(Hu(a))]}else delete e[yp(i)]}}return e},sg=function(e,t){if(e!==t){var o=e!==void 0,n=null===e,i=e===e,r=Ld(e),a=t!==void 0,s=null===t,l=t===t,d=Ld(t);if(!s&&!d&&!r&&e>t||r&&a&&l&&!s&&!d||n&&a&&l||!o&&l||!i)return 1;if(!n&&!r&&!d&&e<t||d&&o&&i&&!n&&!r||s&&o&&i||!a&&i||!l)return-1}return 0},lg=Yd(function(e,t){t=Hm(t,1);var o=e?e.length:0,n=og(e,t);return ag(e,Qm(t,function(e){return fl(e,o)?+e:e}).sort(sg)),n}),dg=Array.prototype,cg=dg.reverse,ug=function(e,t,o,n){t=o(t);for(var i=0,r=e?e.length:0,a=t!==t,s=null===t,l=Ld(t),d=void 0===t;i<r;){var c=za((i+r)/2),u=o(e[c]),m=u!==void 0,p=null===u,g=u===u,f=Ld(u);if(a)var h=n||g;else h=d?g&&(n||m):s?g&&m&&(n||!p):l?g&&m&&!p&&(n||!f):!(p||f)&&(n?u<=t:u<t);h?i=c+1:r=c}return La(r,4294967295-1)},mg=function(e,t,o){var n=0,i=e?e.length:n;if('number'==typeof t&&t===t&&i<=4294967295>>>1){for(;n<i;){var r=n+i>>>1,a=e[r];null!==a&&!Ld(a)&&(o?a<=t:a<t)?n=r+1:i=r}return i}return ug(e,t,Ep,o)},pg=function(e,t){for(var o=-1,n=e.length,i=0,r=[];++o<n;){var a=e[o],s=t?t(a):a;if(!o||!ls(s,l)){var l=s;r[i++]=0===a?0:a}}return r},gg=Vl&&1/dd(new Vl([,-0]))[1]==1/0?function(e){return new Vl(e)}:function(){},fg=function(e,t,o){var n=-1,i=$m,r=e.length,a=!0,s=[],l=s;if(o)a=!1,i=Jm;else if(r>=200){var d=t?null:gg(e);if(d)return dd(d);a=!1,i=Xm,l=new eu}else l=t?[]:s;outer:for(;++n<r;){var c=e[n],u=t?t(c):c;if(c=o||0!==c?c:0,a&&u===u){for(var m=l.length;m--;)if(l[m]===u)continue outer;t&&l.push(u),s.push(c)}else i(l,u,o)||(l!==s&&l.push(u),s.push(c))}return s},hg=Yd(function(e){return fg(Hm(e,1,ol,!0))}),bg=Yd(function(e){var t=Hu(e);return ol(t)&&(t=void 0),fg(Hm(e,1,ol,!0),Rp(t))}),kg=Yd(function(e){var t=Hu(e);return ol(t)&&(t=void 0),fg(Hm(e,1,ol,!0),void 0,t)}),_g=function(e,t){for(var o=-1,n=e.length,i=0,r=[];++o<n;){var a=e[o];t(a,o,e)&&(r[i++]=a)}return r},wg=function(e){if(!(e&&e.length))return[];var t=0;return e=_g(e,function(e){if(ol(e))return t=Ba(e.length,t),!0}),Ys(t,function(t){return Qm(e,Xs(t))})},vg=function(e,t){if(!(e&&e.length))return[];var o=wg(e);return null==t?o:Qm(o,function(e){return Md(t,void 0,e)})},yg=Yd(function(e,t){return ol(e)?Zm(e,t):[]}),xg=function(e,t,o){for(var n=-1,i=e.length;++n<i;)var r=r?Al(Zm(r,e[n],t,o),Zm(e[n],r,t,o)):e[n];return r&&r.length?fg(r,t,o):[]},Cg=Yd(function(e){return xg(_g(e,ol))}),Ag=Yd(function(e){var t=Hu(e);return ol(t)&&(t=void 0),xg(_g(e,ol),Rp(t))}),Tg=Yd(function(e){var t=Hu(e);return ol(t)&&(t=void 0),xg(_g(e,ol),void 0,t)}),Pg=Yd(wg),Eg=function(e,t,o){for(var n=-1,i=e.length,r=t.length,a={};++n<i;){var s=n<r?t[n]:void 0;o(a,e[n],s)}return a},Sg=function(e,t,o,n){t=vp(t,e)?[t]:kp(t);for(var i=-1,r=t.length,a=e;null!=a&&++i<r;){var s=yp(t[i]);if(ps(a)){var l=o;if(i!=r-1){var d=a[s];l=n?n(d,s,a):void 0,l===void 0&&(l=null==d?fl(t[i+1])?[]:{}:d)}Us(a,s,l)}a=a[s]}return e},Og=Yd(function(e){var t=e.length,o=1<t?e[t-1]:void 0;return o='function'==typeof o?(e.pop(),o):void 0,vg(e,o)}),Rg={chunk:function(e,t,o){t=(o?Nd(e,t,o):void 0===t)?1:Ba(Jd(t),0);var n=e?e.length:0;if(!n||1>t)return[];for(var i=0,r=0,a=Array(Wm(n/t));i<n;)a[r++]=ot(e,i,i+=t);return a},compact:function(e){for(var t=-1,o=e?e.length:0,n=0,i=[];++t<o;){var r=e[t];r&&(i[n++]=r)}return i},concat:function(){for(var e=arguments.length,t=Array(e?e-1:0),o=arguments[0],n=e;n--;)t[n-1]=arguments[n];return e?Al(dl(o)?vl(o):[o],Hm(t,1)):[]},difference:ep,differenceBy:Ip,differenceWith:Vp,drop:Fp,dropRight:Np,dropRightWhile:function(e,t){return e&&e.length?Mp(e,Rp(t,3),!0,!0):[]},dropWhile:function(e,t){return e&&e.length?Mp(e,Rp(t,3),!0):[]},fill:function(e,t,o,n){var i=e?e.length:0;return i?(o&&'number'!=typeof o&&Nd(e,t,o)&&(o=0,n=i),Lp(e,t,o,n)):[]},findIndex:function(e,t){return e&&e.length?zp(e,Rp(t,3)):-1},findLastIndex:function(e,t){return e&&e.length?zp(e,Rp(t,3),!0):-1},first:jp,flatten:function(e){var t=e?e.length:0;return t?Hm(e,1):[]},flattenDeep:function(e){var t=e?e.length:0;return t?Hm(e,1/0):[]},flattenDepth:function(e,t){var o=e?e.length:0;return o?(t=void 0===t?1:Jd(t),Hm(e,t)):[]},fromPairs:function(e){for(var t=-1,o=e?e.length:0,n={};++t<o;){var i=e[t];n[i[0]]=i[1]}return n},head:jp,indexOf:function(e,t,o){var n=e?e.length:0;return n?(o=Jd(o),0>o&&(o=Ba(n+o,0)),Gm(e,t,o)):-1},initial:function(e){return Np(e,1)},intersection:Up,intersectionBy:Hp,intersectionWith:Kp,join:function(e,t){return e?$p.call(e,t):''},last:Hu,lastIndexOf:function(e,t,o){var n=e?e.length:0;if(!n)return-1;var i=n;if(void 0!==o&&(i=Jd(o),i=(0>i?Ba(n+i,0):La(i,n-1))+1),t!==t)return Km(e,i,!0);for(;i--;)if(e[i]===t)return i;return-1},nth:function(e,t){return e&&e.length?Jp(e,Jd(t)):void 0},pull:tg,pullAll:eg,pullAllBy:function(e,t,o){return e&&e.length&&t&&t.length?Zp(e,t,Rp(o)):e},pullAllWith:function(e,t,o){return e&&e.length&&t&&t.length?Zp(e,t,void 0,o):e},pullAt:lg,remove:function(e,t){var o=[];if(!(e&&e.length))return o;var n=-1,i=[],r=e.length;for(t=Rp(t,3);++n<r;){var a=e[n];t(a,n,e)&&(o.push(a),i.push(n))}return ag(e,i),o},reverse:function(e){return e?cg.call(e):e},slice:function(e,t,o){var n=e?e.length:0;return n?(o&&'number'!=typeof o&&Nd(e,t,o)?(t=0,o=n):(t=null==t?0:Jd(t),o=void 0===o?n:Jd(o)),ot(e,t,o)):[]},sortedIndex:function(e,t){return mg(e,t)},sortedIndexBy:function(e,t,o){return ug(e,t,Rp(o))},sortedIndexOf:function(e,t){var o=e?e.length:0;if(o){var n=mg(e,t);if(n<o&&ls(e[n],t))return n}return-1},sortedLastIndex:function(e,t){return mg(e,t,!0)},sortedLastIndexBy:function(e,t,o){return ug(e,t,Rp(o),!0)},sortedLastIndexOf:function(e,t){var o=e?e.length:0;if(o){var n=mg(e,t,!0)-1;if(ls(e[n],t))return n}return-1},sortedUniq:function(e){return e&&e.length?pg(e):[]},sortedUniqBy:function(e,t){return e&&e.length?pg(e,Rp(t)):[]},tail:function(e){return Fp(e,1)},take:function(e,t,o){return e&&e.length?(t=o||void 0===t?1:Jd(t),ot(e,0,0>t?0:t)):[]},takeRight:function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:Jd(t),t=n-t,ot(e,0>t?0:t,n)):[]},takeRightWhile:function(e,t){return e&&e.length?Mp(e,Rp(t,3),!1,!0):[]},takeWhile:function(e,t){return e&&e.length?Mp(e,Rp(t,3)):[]},union:hg,unionBy:bg,unionWith:kg,uniq:function(e){return e&&e.length?fg(e):[]},uniqBy:function(e,t){return e&&e.length?fg(e,Rp(t)):[]},uniqWith:function(e,t){return e&&e.length?fg(e,void 0,t):[]},unzip:wg,unzipWith:vg,without:yg,xor:Cg,xorBy:Ag,xorWith:Tg,zip:Pg,zipObject:function(e,t){return Eg(e||[],t||[],Us)},zipObjectDeep:function(e,t){return Eg(e||[],t||[],Sg)},zipWith:Og};const Ig=new Map,Vg={transform(e,t,o){const n=Vg.getTransformationCase(e,t)||Vg.defaultTransform,i=n(e,t,Object.assign({},o)),r=Rg.last(t.operations).baseVersion;return No(r,i)},defaultTransform(e,t,o){const n=[];let i=t.operations,r=[];for(const a of e.operations){const e=[a];for(const t of i)for(let n=0;n<e.length;n++){const i=e[n],a=jm(i,t,o);Array.prototype.splice.apply(e,[n,1].concat(a)),n+=a.length-1;const s=Object.assign({},o);s.isStrong=!o.isStrong,s.insertBefore=o.insertBefore===void 0?void 0:!o.insertBefore;const l=jm(t,i,s);Array.prototype.push.apply(r,l)}i=r,r=[];for(const t of e)n.push(t)}return Ho(e.constructor,n)},addTransformationCase(e,t,o){let n=Ig.get(e);n||(n=new Map,Ig.set(e,n)),n.set(t,o)},getTransformationCase(e,t){let o=Ig.get(e.constructor);if(!o||!o.get(t.constructor)){const n=Ig.keys();for(const i of n)if(e instanceof i&&Ig.get(i).get(t.constructor)){o=Ig.get(i);break}}return o?o.get(t.constructor):void 0},transformDeltaSets(e,t,o=null){const n=Array.from(e),i=Array.from(t),r=null!==o,a={isStrong:!0};if(r){a.wasAffected=new Map,a.originalDelta=new Map,a.document=o,a.undoMode=!0;for(const e of i)a.originalDelta.set(e,e)}for(let s=0;s<n.length;s++){const e=[n[s]];for(let t=0;t<i.length;t++){const o=[i[t]];for(let t=0;t<e.length;t++)for(let n=0;n<o.length;n++){r&&Bo(e[t],o[n],a);const i=Vg.transform(e[t],o[n],{insertBefore:a.insertBefore,forceNotSticky:a.forceNotSticky,isStrong:a.isStrong,forceWeakRemove:a.forceWeakRemove,undoMode:a.undoMode}),s=Vg.transform(o[n],e[t],{insertBefore:!a.insertBefore,forceNotSticky:a.forceNotSticky,isStrong:!a.isStrong,forceWeakRemove:a.forceWeakRemove,undoMode:a.undoMode});if(r){Uo(e[t],i,a);const r=a.originalDelta.get(o[n]);for(const e of s)a.originalDelta.set(e,r)}e.splice(t,1,...i),t+=i.length-1,o.splice(n,1,...s),n+=s.length-1}i.splice(t,1,...o),t+=o.length-1}n.splice(s,1,...e),s+=e.length-1}const s=Mo(n)-Mo(e),l=Mo(i)-Mo(t);return l<s?Do(i,s-l):s<l&&Do(n,l-s),{deltasA:n,deltasB:i}}};var Fg=Vg;class Ng extends Om{get type(){return'marker'}get _reverseDeltaClass(){return Ng}static get className(){return'engine.model.delta.MarkerDelta'}}Sm.register(Ng);const Mg=Fg.addTransformationCase,Dg=Fg.defaultTransform;Mg(Rm,zm,(e,t,o)=>{const n=Dg(e,t,o);return e.range.containsPosition(t.position)&&n.push(Go(t,e)),n}),Mg(Rm,Im,(e,t,o)=>{if(!t.position)return Dg(e,t,o);const n=o.undoMode,i=new Ku(t.position.root,t.position.path.slice(0,-1)),r=Dg(e,t,o);if(n||!(t._cloneOperation instanceof vm))return r;for(const n of e.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){const e=new Rm,o=i.getShiftedBy(1),a=Ku.createFromPosition(o);a.path.push(0);const s=t._cloneOperation.nodes.getNode(0).getAttribute(n.key);e.addOperation(new bm(new Gu(o,a),n.key,s===void 0?null:s,n.newValue,0)),r.push(e);break}return r}),Mg(Lm,Vm,(e,t,o)=>{if(!t.position)return Dg(e,t,o);const n=o.undoMode;return!n&&e.position.isEqual(t.position)?[t.getReversed(),e.clone()]:Dg(e,t,o)}),Mg(Ng,Im,Ko),Mg(Ng,Vm,Ko),Mg(Ng,Dm,Ko),Mg(Ng,Bm,Ko),Mg(Ng,Fm,Ko),Mg(Ng,Mm,Ko),Mg(Fm,Vm,(e,t,o)=>{const n=o.undoMode;if(n||!t.position)return Dg(e,t,o);const i=e.sourcePosition.root==t.position.root&&'same'===A(e.sourcePosition.getParentPath(),t.position.getParentPath()),r=e.sourcePosition.offset<=t.position.offset&&e.sourcePosition.offset+e.howMany>t.position.offset;return i&&r?[t.getReversed(),e.clone()]:Dg(e,t,o)}),Mg(Vm,Lm,(e,t,o)=>{if(!e.position)return Dg(e,t,o);const n=o.undoMode;return!n&&e.position.isEqual(t.position)?[$o()]:Dg(e,t,o)}),Mg(Vm,Fm,(e,t,o)=>{const n=o.undoMode;if(n||!e.position)return Dg(e,t,o);const i=e.position.root==t.sourcePosition.root&&'same'===A(e.position.getParentPath(),t.sourcePosition.getParentPath()),r=t.sourcePosition.offset<=e.position.offset&&t.sourcePosition.offset+t.howMany>e.position.offset;return i&&r?[$o()]:Dg(e,t,o)}),Mg(Im,Im,(e,t,o)=>{const n=o.undoMode;if(n)return Dg(e,t,o);if(!e.position||!t.position)return Dg(e,t,o);const i=e.position.getParentPath(),r=t.position.getParentPath();if(e.position.root==t.position.root&&'same'==A(i,r))if(e=e.clone(),e.position.offset<t.position.offset||e.position.offset==t.position.offset&&o.isStrong){e._cloneOperation instanceof _m&&t._cloneOperation instanceof _m&&e._cloneOperation.sourcePosition.offset>t._cloneOperation.sourcePosition.offset&&e._cloneOperation.sourcePosition.offset--;const o=Gu.createFromPositionAndShift(e.position,e._moveOperation.howMany),n=Gu.createFromPositionAndShift(t.position,t._moveOperation.howMany),i=o.getDifference(n);let r=0;for(const e of i)r+=e.end.offset-e.start.offset;return 0==r?(e.operations.pop(),e.addOperation(new xm(e.operations[0].baseVersion+1))):e.operations[1].howMany=r,[e]}else{const n=Object.assign({},o);return n.isStrong=!0,n.insertBefore=!0,Dg(e,t,n)}return Dg(e,t,o)}),Mg(Im,Bm,(e,t,o)=>e.position?e.position.root==t.position.root&&'same'===A(t.position.path,e.position.getParentPath())?[$o()]:Dg(e,t,o):Dg(e,t,o)),Mg(Im,Dm,(e,t,o)=>{if(!e.position)return Dg(e,t,o);const n=e.position.root==t.range.start.root,i=n&&'same'===A(e.position.getParentPath(),t.range.start.getParentPath()),r=t.range.start.offset<e.position.offset&&t.range.end.offset>=e.position.offset;if(i&&r)return[$o()];if(n&&'same'===A(e.position.getParentPath(),t.range.end.getShiftedBy(-1).path)){const o=e.clone(),n=Ku.createFromPosition(t.range.start);n.path.push(t.howMany-1);const i=n.getShiftedBy(1);o._cloneOperation.position=i;const r=Ku.createFromPosition(n);r.path.push(e.position.offset),o._moveOperation.sourcePosition=r;const a=Ku.createFromPosition(i);return a.path.push(0),o._moveOperation.targetPosition=a,[o]}return Dg(e,t,o)}),Mg(Im,Rm,(e,t,o)=>{if(!e.position)return Dg(e,t,o);e=e.clone();const n=o.undoMode,i=new Ku(e.position.root,e.position.path.slice(0,-1));if(n||!(e._cloneOperation instanceof vm))return[e];for(const n of t.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){null===n.newValue?e._cloneOperation.nodes.getNode(0)._removeAttribute(n.key):e._cloneOperation.nodes.getNode(0)._setAttribute(n.key,n.newValue);break}return[e]}),Mg(Bm,Im,(e,t,o)=>t.position?e.position.root==t.position.root&&'same'===A(e.position.path,t.position.getParentPath())?[t.getReversed(),e.clone()]:Dg(e,t,o):Dg(e,t,o)),Mg(zm,Rm,(e,t)=>{const o=[e.clone()];return t.range.containsPosition(e.position)&&o.push(Go(e,t)),o}),Mg(Dm,Im,(e,t,o)=>{if(!t.position)return Dg(e,t,o);const n=e.range.start.root==t.position.root,i=n&&'same'===A(e.range.start.getParentPath(),t.position.getParentPath()),r=e.range.start.offset<t.position.offset&&e.range.end.offset>=t.position.offset;if(i&&r)return[t.getReversed(),e.clone()];if(n&&'same'===A(t.position.getParentPath(),e.range.end.getShiftedBy(-1).path)){const t=e.clone();return t._insertOperation.position.offset++,t._moveOperation.howMany++,t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length-2]++,[t]}return Dg(e,t,o)}),Mg(Mm,Im,(e,t,o)=>{const n=o.undoMode,i=Dg(e,t,o);if(n||!(t._cloneOperation instanceof vm))return i;const r=t._cloneOperation.position.getShiftedBy(-1);if(r&&e.operations[0].position.isEqual(r)){const t=e.clone();t.operations[0].position=r.getShiftedBy(1),i.push(t)}return i}),Mg(Im,Mm,(e,t,o)=>{e=e.clone();const n=o.undoMode;if(n||!(e._cloneOperation instanceof vm))return[e];const i=e._cloneOperation.position.getShiftedBy(-1);if(i&&!n&&t.operations[0].position.isEqual(i)){const o=t.clone();return o.operations[0].position=i.getShiftedBy(1),o.operations[0].oldName=e._cloneOperation.nodes.getNode(0).name,[e,o]}return[e]}),Mg(Nm,Im,(e,t,o)=>{const n=Dg(e,t,o),i=t._cloneOperation.position||t._cloneOperation.targetPosition;if(!i)return Dg(e,t,o);const r=o.undoMode;if(r)return n;for(const r of n)if(r instanceof Nm){const e=r._moveOperation,t=e.sourcePosition.getShiftedBy(e.howMany);t.isEqual(i)&&(e.howMany+=1)}return n}),Mg(Im,Nm,(e,t,o)=>{const n=o.undoMode;if(n)return Dg(e,t,o);const i=e._cloneOperation.position||e._cloneOperation.targetPosition;if(!i)return Dg(e,t,o);t=t.clone();const r=t._moveOperation,a=r.sourcePosition.getShiftedBy(r.howMany);return a.isEqual(i)&&(r.howMany+=1),Dg(e,t,o)});class Bg{constructor(e='default'){this.deltas=[],this.type=e}get baseVersion(){for(const e of this.deltas)if(null!==e.baseVersion)return e.baseVersion;return null}addDelta(e){return e.batch=this,this.deltas.push(e),e}*getOperations(){for(const e of this.deltas)yield*e.operations}}class Lg extends Om{static get className(){return'engine.model.delta.RootAttributeDelta'}}Sm.register(Lg);class zg extends gm{constructor(e,t){super(null),this.sourcePosition=Ku.createFromPosition(e),this.howMany=t}get type(){return'detach'}_validate(){if(this.sourcePosition.root.document)throw new Za('detach-operation-on-document-node: Cannot detach document node.')}_execute(){bo(Gu.createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return'engine.model.operation.DetachOperation'}}class jg extends Wu{constructor(e,t,o='main'){super(t),this._doc=e,this.rootName=o}get document(){return this._doc}is(e,t){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}toJSON(){return this.rootName}}class qg{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new zu(e,t)}createElement(e,t){return new Wu(e,t)}createDocumentFragment(){return new fm}insert(e,t,o){this._assertWriterUsedCorrectly();const n=Ku.createAt(t,o),i=e instanceof zu&&!e.parent?new zm:new Lm;if(e.parent){if(Zo(e.root,n.root))return void this.move(Gu.createOn(e),n);if(e.root.document)throw new Error('model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.');else this.remove(e)}const r=n.root.document?n.root.document.version:null,a=new vm(n,e,r);if(this.batch.addDelta(i),i.addOperation(a),this.model.applyOperation(a),e instanceof fm)for(const[t,o]of e.markers){const e=Ku.createAt(o.root),i=new Gu(o.start._getCombined(e,n),o.end._getCombined(e,n));this.addMarker(t,{range:i,usingOperation:!0})}}insertText(e,t,o,n){t instanceof fm||t instanceof Wu||t instanceof Ku?this.insert(this.createText(e),t,o):this.insert(this.createText(e,t),o,n)}insertElement(e,t,o,n){t instanceof fm||t instanceof Wu||t instanceof Ku?this.insert(this.createElement(e),t,o):this.insert(this.createElement(e,t),o,n)}append(e,t){this.insert(e,t,'end')}appendText(e,t,o){t instanceof fm||t instanceof Wu?this.insert(this.createText(e),t,'end'):this.insert(this.createText(e,t),o,'end')}appendElement(e,t,o){t instanceof fm||t instanceof Wu?this.insert(this.createElement(e),t,'end'):this.insert(this.createElement(e,t),o,'end')}setAttribute(e,t,o){this._assertWriterUsedCorrectly(),o instanceof Gu?Jo(this,e,t,o):Qo(this,e,t,o)}setAttributes(e,t){for(const[o,n]of rt(e))this.setAttribute(o,n,t)}removeAttribute(e,t){this._assertWriterUsedCorrectly(),t instanceof Gu?Jo(this,e,null,t):Qo(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=(e)=>{for(const t of e.getAttributeKeys())this.removeAttribute(t,e)};if(!(e instanceof Gu))t(e);else for(const o of e.getItems())t(o)}move(e,t,o){if(this._assertWriterUsedCorrectly(),!(e instanceof Gu))throw new Za('writer-move-invalid-range: Invalid range to move.');if(!e.isFlat)throw new Za('writer-move-range-not-flat: Range to move is not flat.');const n=Ku.createAt(t,o);if(!Zo(e.root,n.root))throw new Za('writer-move-different-document: Range is going to be moved between different documents.');const i=new Fm;this.batch.addDelta(i);const r=e.root.document?e.root.document.version:null,a=new km(e.start,e.end.offset-e.start.offset,n,r);i.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e,t)=>{const o=new Nm;this.batch.addDelta(o),Xo(e,t,o,this.model)};if(e instanceof Gu){const o=e.getMinimalFlatRanges().reverse();for(const e of o)t(e.start,e.end.offset-e.start.offset)}else{const o=e.is('text')?e.offsetSize:1;t(Ku.createBefore(e),o)}}merge(e){this._assertWriterUsedCorrectly();const t=new Vm;this.batch.addDelta(t);const o=e.nodeBefore,n=e.nodeAfter;if(!(o instanceof Wu))throw new Za('writer-merge-no-element-before: Node before merge position must be an element.');if(!(n instanceof Wu))throw new Za('writer-merge-no-element-after: Node after merge position must be an element.');const i=Ku.createFromParentAndOffset(n,0),r=Ku.createFromParentAndOffset(o,o.maxOffset),a=e.root.document?e.root.document.version:null,s=new km(i,n.maxOffset,r,a);s.isSticky=!0,t.addOperation(s),this.model.applyOperation(s),Xo(e,1,t,this.model)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Wu))throw new Za('writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');const o=new Mm;this.batch.addDelta(o);const n=e.root.document?e.root.document.version:null,i=new Cm(Ku.createBefore(e),e.name,t,n);o.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let o=e.parent;if(!o.parent)throw new Za('writer-split-element-no-parent: Element with no parent can not be split.');if(t||(t=o.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new Za('writer-split-invalid-limit-element: Limit element is not a position ancestor.');let n,i;do{const t=new Im;this.batch.addDelta(t);const r=new Wu(o.name,o.getAttributes()),a=o.root.document?o.root.document.version:null,s=new vm(Ku.createAfter(o),r,a);t.addOperation(s),this.model.applyOperation(s);const l=null===a?null:a+1,d=new km(e,o.maxOffset-e.offset,Ku.createFromParentAndOffset(r,0),l);d.isSticky=!0,t.addOperation(d),this.model.applyOperation(d),n||i||(n=o,i=r),e=Ku.createBefore(r),o=e.parent}while(o!==t);return{position:e,range:new Gu(Ku.createAt(n,'end'),Ku.createAt(i))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new Za('writer-wrap-range-not-flat: Range to wrap is not flat.');const o=t instanceof Wu?t:new Wu(t);if(0<o.childCount)throw new Za('writer-wrap-element-not-empty: Element to wrap with is not empty.');if(null!==o.parent)throw new Za('writer-wrap-element-attached: Element to wrap with is already attached to tree model.');const n=new Dm;this.batch.addDelta(n);const i=e.root.document?e.root.document.version:null,r=new vm(e.end,o,i);n.addOperation(r),this.model.applyOperation(r);const a=null===i?null:i+1,s=Ku.createFromParentAndOffset(o,0),l=new km(e.start,e.end.offset-e.start.offset,s,a);n.addOperation(l),this.model.applyOperation(l)}unwrap(e){if(this._assertWriterUsedCorrectly(),null===e.parent)throw new Za('writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');const t=new Bm;this.batch.addDelta(t);const o=Ku.createFromParentAndOffset(e,0),n=o.root.document?o.root.document.version:null,i=new km(o,e.maxOffset,Ku.createBefore(e),n);i.isSticky=!0,t.addOperation(i),this.model.applyOperation(i),Xo(Ku.createBefore(e),1,t,this.model)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||'boolean'!=typeof t.usingOperation)throw new Za('writer-addMarker-no-usingOperations: The options.usingOperations parameter is required when adding a new marker.');const o=t.usingOperation,n=t.range;if(this.model.markers.has(e))throw new Za('writer-addMarker-marker-exists: Marker with provided name already exists.');if(!n)throw new Za('writer-addMarker-no-range: Range parameter is required when adding a new marker.');return o?(Yo(this,e,null,n),this.model.markers.get(e)):this.model.markers._set(e,n,o)}updateMarker(e,t){this._assertWriterUsedCorrectly();const o='string'==typeof e?e:e.name,n=this.model.markers.get(o);if(!n)throw new Za('writer-updateMarker-marker-not-exists: Marker with provided name does not exists.');const i=t&&t.range,r=!!t&&'boolean'==typeof t.usingOperation;if(!r&&!i)throw new Za('writer-updateMarker-wrong-options: One of options is required - provide range or usingOperations.');if(r&&t.usingOperation!==n.managedUsingOperations){if(t.usingOperation)Yo(this,o,null,i?i:n.getRange());else{const e=n.getRange();Yo(this,o,e,null),this.model.markers._set(o,i?i:e)}return}n.managedUsingOperations?Yo(this,o,n.getRange(),i):this.model.markers._set(o,i)}removeMarker(e){this._assertWriterUsedCorrectly();const t='string'==typeof e?e:e.name;if(!this.model.markers.has(t))throw new Za('writer-removeMarker-no-marker: Trying to remove marker which does not exist.');const o=this.model.markers.get(t);if(!o.managedUsingOperations)return void this.model.markers._remove(t);const n=o.getRange();Yo(this,t,n,null)}setSelection(e,t,o){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,o)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),'string'==typeof e)this._setSelectionAttribute(e,t);else for(const[t,o]of rt(e))this._setSelectionAttribute(t,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),'string'==typeof e)this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const o=this.model.document.selection;if(o.isCollapsed&&o.anchor.parent.isEmpty){const n=em._getStoreAttributeKey(e);this.setAttribute(n,t,o.anchor.parent)}o._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const o=em._getStoreAttributeKey(e);this.removeAttribute(o,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new Za('writer-incorrect-use: Trying to use a writer outside the change() block.')}}class Wg{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}bufferOperation(e){switch(e.type){case'insert':{if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break}case'addAttribute':case'removeAttribute':case'changeAttribute':{for(const t of e.range.getItems())this._isInInsertedElement(t.parent)||this._markAttribute(t);break}case'remove':case'move':case'reinsert':{const t=this._isInInsertedElement(e.sourcePosition.parent),o=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),o||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case'rename':{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=Gu.createFromPositionAndShift(e.position,1);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t)}break}}this._cachedChanges=null}bufferMarkerChange(e,t,o){const n=this._changedMarkers.get(e);n?(n.newRange=o,null==n.oldRange&&null==n.newRange&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{oldRange:t,newRange:o})}getMarkersToRemove(){const e=[];for(const[t,o]of this._changedMarkers)null!=o.oldRange&&e.push({name:t,range:o.oldRange});return e}getMarkersToAdd(){const e=[];for(const[t,o]of this._changedMarkers)null!=o.newRange&&e.push({name:t,range:o.newRange});return e}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const t=[];for(const o of this._changesInElement.keys()){const e=this._changesInElement.get(o).sort((e,t)=>e.offset===t.offset?e.type==t.type?0:'remove'==e.type?-1:1:e.offset<t.offset?-1:1),n=this._elementSnapshots.get(o),r=en(o.getChildren()),a=tn(n.length,e);let s=0,i=0;for(const e of a)if('i'===e)t.push(this._getInsertDiff(o,s,r[s].name)),s++;else if('r'===e)t.push(this._getRemoveDiff(o,s,n[i].name)),i++;else if('a'===e){const e=r[s].attributes,a=n[i].attributes;let l;if('$text'==r[s].name)l=Gu.createFromParentsAndOffsets(o,s,o,s+1);else{const e=o.offsetToIndex(s);l=Gu.createFromParentsAndOffsets(o,s,o.getChild(e),0)}t.push(...this._getAttributesDiff(l,a,e)),s++,i++}else s++,i++}t.sort((e,t)=>e.position.root==t.position.root?e.position.isEqual(t.position)?e.changeCount<t.changeCount?-1:1:e.position.isBefore(t.position)?-1:1:e.position.root.rootName<t.position.root.rootName?-1:1);for(let o=1;o<t.length;o++){const e=t[o-1],n=t[o],i='remove'==e.type&&'remove'==n.type&&'$text'==e.name&&'$text'==n.name&&e.position.isEqual(n.position),r='insert'==e.type&&'insert'==n.type&&'$text'==e.name&&'$text'==n.name&&e.position.parent==n.position.parent&&e.position.offset+e.length==n.position.offset,a='attribute'==e.type&&'attribute'==n.type&&e.position.parent==n.position.parent&&e.range.isFlat&&n.range.isFlat&&e.position.offset+e.length==n.position.offset&&e.attributeKey==n.attributeKey&&e.attributeOldValue==n.attributeOldValue&&e.attributeNewValue==n.attributeNewValue;(i||r||a)&&(t[o-1].length++,a&&(t[o-1].range.end=t[o-1].range.end.getShiftedBy(1)),t.splice(o,1),o--)}for(const o of t)delete o.changeCount,'attribute'==o.type&&(delete o.position,delete o.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t.slice(),this._cachedChanges=t.slice().filter(on),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(e,t,o){const n={type:'insert',offset:t,howMany:o,count:this._changeCount++};this._markChange(e,n)}_markRemove(e,t,o){const n={type:'remove',offset:t,howMany:o,count:this._changeCount++};this._markChange(e,n),this._removeAllNestedChanges(e,t,o)}_markAttribute(e){const t={type:'attribute',offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const o=this._getChangesForElement(e);this._handleChange(t,o),o.push(t);for(let n=0;n<o.length;n++)1>o[n].howMany&&(o.splice(n,1),n--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,en(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const o of t){const n=e.offset+e.howMany,i=o.offset+o.howMany;if('insert'==e.type&&('insert'==o.type&&(e.offset<=o.offset?o.offset+=e.howMany:e.offset<i&&(o.howMany+=e.nodesToHandle,e.nodesToHandle=0)),'remove'==o.type&&e.offset<o.offset&&(o.offset+=e.howMany),'attribute'==o.type))if(e.offset<=o.offset)o.offset+=e.howMany;else if(e.offset<i){const i=o.howMany;o.howMany=e.offset-o.offset,t.unshift({type:'attribute',offset:n,howMany:i-o.howMany,count:this._changeCount++})}if('remove'==e.type){if('insert'==o.type)if(n<=o.offset)o.offset-=e.howMany;else if(n<=i){if(e.offset<o.offset){const t=n-o.offset;o.offset=e.offset,o.howMany-=t,e.nodesToHandle-=t}else o.howMany-=e.nodesToHandle,e.nodesToHandle=0;}else if(e.offset<=o.offset)e.nodesToHandle-=o.howMany,o.howMany=0;else if(e.offset<i){const t=i-e.offset;o.howMany-=t,e.nodesToHandle-=t}if('remove'==o.type&&(n<=o.offset?o.offset-=e.howMany:e.offset<o.offset&&(e.nodesToHandle+=o.howMany,o.howMany=0)),'attribute'==o.type)if(n<=o.offset)o.offset-=e.howMany;else if(e.offset<o.offset){const t=n-o.offset;o.offset=e.offset,o.howMany-=t}else if(e.offset<i)if(n<=i){const n=o.howMany;o.howMany=e.offset-o.offset;const i=n-o.howMany-e.nodesToHandle;t.unshift({type:'attribute',offset:e.offset,howMany:i,count:this._changeCount++})}else o.howMany-=i-e.offset}if('attribute'==e.type){if('insert'==o.type)if(e.offset<o.offset&&n>o.offset){if(n>i){const e={type:'attribute',offset:i,howMany:n-i,count:this._changeCount++};this._handleChange(e,t),t.push(e)}e.nodesToHandle=o.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=o.offset&&e.offset<i&&(n>i?(e.nodesToHandle=n-i,e.offset=i):e.nodesToHandle=0);'attribute'==o.type&&(e.offset>=o.offset&&n<=i?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=o.offset&&n>=i&&(o.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,o){return{type:'insert',position:Ku.createFromParentAndOffset(e,t),name:o,length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,o){return{type:'remove',position:Ku.createFromParentAndOffset(e,t),name:o,length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,o){const n=[];o=new Map(o);for(const[i,r]of t){const t=o.has(i)?o.get(i):null;t!==r&&n.push({type:'attribute',position:e.start,range:Gu.createFromRange(e),length:1,attributeKey:i,attributeOldValue:r,attributeNewValue:t,changeCount:this._changeCount++}),o.delete(i)}for(const[i,r]of o)n.push({type:'attribute',position:e.start,range:Gu.createFromRange(e),length:1,attributeKey:i,attributeOldValue:null,attributeNewValue:r,changeCount:this._changeCount++});return n}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const o=this._changesInElement.get(t),n=e.startOffset;if(o)for(const e of o)if('insert'==e.type&&n>=e.offset&&n<e.offset+e.howMany)return!0;return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,o){const n=Gu.createFromParentsAndOffsets(e,t,e,t+o);for(const i of n.getItems({shallow:!0}))i.is('element')&&(this._elementSnapshots.delete(i),this._changesInElement.delete(i),this._removeAllNestedChanges(i,0,i.maxOffset))}}class Ug{constructor(){this._deltas=[],this._historyPoints=new Map,this._undoPairs=new Map,this._undoneDeltas=new Set}addDelta(e){if(0<e.operations.length&&!this._historyPoints.has(e.baseVersion)){const t=this._deltas.length;this._deltas[t]=e,this._historyPoints.set(e.baseVersion,t)}}*getDeltas(e=0,t=Da){if(0!==this._deltas.length){let o=this._getIndex(e);if(-1!=o)for(;o<this._deltas.length;){const e=this._deltas[o++];if(e.baseVersion>=t)break;yield e}}}getDelta(e){const t=this._historyPoints.get(e);return t===void 0?null:this._deltas[t]}setDeltaAsUndone(e,t){this._undoPairs.set(t,e),this._undoneDeltas.add(e)}isUndoingDelta(e){return this._undoPairs.has(e)}isUndoneDelta(e){return this._undoneDeltas.has(e)}getUndoneDelta(e){return this._undoPairs.get(e)}_getIndex(e){const t=this._historyPoints.get(e);if(t===void 0){const t=this._deltas[this._deltas.length-1],o=t.baseVersion+t.operations.length;if(0>e||e>=o)return-1;throw new Za('model-history-wrong-version: Given base version points to the middle of a delta.')}return t}}const Hg='$graveyard';class Kg{constructor(e){this.model=e,this.version=0,this.history=new Ug(this),this.selection=new em(this),this.roots=new Pc({idProperty:'rootName'}),this.differ=new Wg(e.markers),this._postFixers=new Set,this.createRoot('$root',Hg),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];if(o.isDocumentOperation&&o.baseVersion!==this.version)throw new Za('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.',{operation:o})},{priority:'highest'}),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:'high'}),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];o.isDocumentOperation&&(this.version++,this.history.addDelta(o.delta))},{priority:'low'});let t=!1;this.listenTo(this.selection,'change',()=>{t=!0}),this.listenTo(e,'_change',(e,o)=>{(!this.differ.isEmpty||t)&&(this._callPostFixers(o),this.fire('change',o.batch),this.differ.reset(),t=!1)}),this.listenTo(e.markers,'update',(e,t,o,n)=>{this.differ.bufferMarkerChange(t.name,o,n),null===o&&t.on('change',(e,o)=>{this.differ.bufferMarkerChange(t.name,o,t.getRange())})})}get graveyard(){return this.getRoot(Hg)}createRoot(e='$root',t='main'){if(this.roots.get(t))throw new Za('model-document-createRoot-name-exists: Root with specified name already exists.',{name:t});const o=new jg(this,e,t);return this.roots.add(o),o}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e='main'){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,(e)=>e.rootName).filter((e)=>e!=Hg)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Ed(this);return e.selection='[engine.model.DocumentSelection]',e.model='[engine.model.Model]',e}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model.schema,o=new Ku(e,[0]),n=t.getNearestSelectionRange(o);return n||new Gu(o)}_validateSelectionRange(e){return dn(e.start)&&dn(e.end)}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}f(Kg,ss);class Gg{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){return this._markers.has(e)}get(e){return this._markers.get(e)||null}_set(e,t,o=!1){const n=e instanceof $g?e.name:e,i=this._markers.get(n);if(i){const e=i.getRange();let r=!1;return e.isEqual(t)||(i._attachLiveRange(Xu.createFromRange(t)),r=!0),o!=i.managedUsingOperations&&(i._managedUsingOperations=o,r=!0),r&&this.fire('update:'+n,i,e,t),i}const r=Xu.createFromRange(t),a=new $g(n,r,o);return this._markers.set(n,a),this.fire('update:'+n,a,null,t),a}_remove(e){const t=e instanceof $g?e.name:e,o=this._markers.get(t);return!!o&&(this._markers.delete(t),this.fire('update:'+t,o,o.getRange(),null),this._destroyMarker(o),!0)}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)null!==t.getRange().getIntersection(e)&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+':')&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}f(Gg,ss);class $g{constructor(e,t,o){this.name=e,this._managedUsingOperations=o,this._liveRange=this._attachLiveRange(t)}get managedUsingOperations(){if(!this._liveRange)throw new Za('marker-destroyed: Cannot use a destroyed marker instance.');return this._managedUsingOperations}getStart(){if(!this._liveRange)throw new Za('marker-destroyed: Cannot use a destroyed marker instance.');return Ku.createFromPosition(this._liveRange.start)}getEnd(){if(!this._liveRange)throw new Za('marker-destroyed: Cannot use a destroyed marker instance.');return Ku.createFromPosition(this._liveRange.end)}getRange(){if(!this._liveRange)throw new Za('marker-destroyed: Cannot use a destroyed marker instance.');return Gu.createFromRange(this._liveRange)}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate('change:range').to(this),e.delegate('change:content').to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating('change:range',this),this._liveRange.stopDelegating('change:content',this),this._liveRange.detach(),this._liveRange=null}}f($g,ss);class Jg extends Ku{constructor(e,t,o){if(super(e,t),!this.root.is('rootElement'))throw new Za('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');this.stickiness=o||'sticksToNext',cn.call(this)}detach(){this.stopListening()}}f(Jg,ss);class Qg{constructor(e,t,o){this.model=e,this.writer=t,this.position=o,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._filterAttributesOf=[]}handleNodes(e,t){e=Array.from(e);for(let o=0;o<e.length;o++){const n=e[o];this._handleNode(n,{isFirst:0===o&&t.isFirst,isLast:o===e.length-1&&t.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?Gu.createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}_handleNode(e,t){if(this.schema.isObject(e))return void this._handleObject(e,t);const o=this._checkAndSplitToAllowedPosition(e,t);return o?void(this._insert(e),this._mergeSiblingsOf(e,t)):void this._handleDisallowedNode(e,t)}_handleObject(e,t){this._checkAndSplitToAllowedPosition(e)?this._insert(e):this._tryAutoparagraphing(e,t)}_handleDisallowedNode(e,t){e.is('element')?this.handleNodes(e.getChildren(),t):this._tryAutoparagraphing(e,t)}_insert(e){if(!this.schema.checkChild(this.position,e))return void Ru.error('insertcontent-wrong-position: The node cannot be inserted on the given position.',{node:e,position:this.position});const t=Jg.createFromPosition(this.position);this.writer.insert(e,this.position),this.position=Ku.createFromPosition(t),t.detach(),this.nodeToSelect=this.schema.isObject(e)&&!this.schema.checkChild(this.position,'$text')?e:null,this._filterAttributesOf.push(e)}_mergeSiblingsOf(e,t){if(e instanceof Wu){const o=this._canMergeLeft(e,t),n=this._canMergeRight(e,t),i=Jg.createBefore(e),r=Jg.createAfter(e);if(o){const e=Jg.createFromPosition(this.position);this.writer.merge(i),this.position=Ku.createFromPosition(e),e.detach()}if(n){this.position.isEqual(r)||Ru.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'),this.position=Ku.createAt(r.nodeBefore,'end');const e=new Jg(this.position.root,this.position.path,'sticksToPrevious');this.writer.merge(r),this.position=Ku.createFromPosition(e),e.detach()}(o||n)&&this._filterAttributesOf.push(this.position.parent),i.detach(),r.detach()}}_canMergeLeft(e,t){const o=e.previousSibling;return t.isFirst&&o instanceof Wu&&this.canMergeWith.has(o)&&this.model.schema.checkMerge(o,e)}_canMergeRight(e,t){const o=e.nextSibling;return t.isLast&&o instanceof Wu&&this.canMergeWith.has(o)&&this.model.schema.checkMerge(e,o)}_tryAutoparagraphing(e,t){const o=this.writer.createElement('paragraph');this._getAllowedIn(o,this.position.parent)&&this.schema.checkChild(o,e)&&(o._appendChild(e),this._handleNode(o,t))}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(e,this.position.parent);if(!t)return!1;for(;t!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const e=this.position.parent;this.position=Ku.createBefore(e),e.isEmpty&&this.writer.remove(e)}else if(this.position.isAtEnd)this.position=Ku.createAfter(this.position.parent);else{const e=Ku.createAfter(this.position.parent);this.writer.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(e,t){return this.schema.checkChild(t,e)?t:t.parent?this._getAllowedIn(e,t.parent):null}}const Yg=' ,.?!:;"-()';class Xg{constructor(){this.markers=new Gg,this.document=new Kg(this),this.schema=new dm,this._pendingChanges=[],this._currentWriter=null,['insertContent','deleteContent','modifySelection','getSelectedContent','applyOperation'].forEach((e)=>this.decorate(e)),this.on('applyOperation',(e,t)=>{const o=t[0];o._validate()},{priority:'highest'}),this.schema.register('$root',{isLimit:!0}),this.schema.register('$block',{allowIn:'$root',isBlock:!0}),this.schema.register('$text',{allowIn:'$block'}),this.schema.register('$clipboardHolder',{allowContentOf:'$root',isLimit:!0}),this.schema.extend('$text',{allowIn:'$clipboardHolder'}),this.schema.register('$marker',{allowIn:['$root','$block']})}change(e){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Bg,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}enqueueChange(e,t){'string'==typeof e?e=new Bg(e):'function'==typeof e&&(t=e,e=new Bg),this._pendingChanges.push({batch:e,callback:t}),1==this._pendingChanges.length&&this._runPendingChanges()}applyOperation(e){e._execute()}transformDeltas(e,t,o=!1){return Fg.transformDeltaSets(e,t,o?this.document:null)}insertContent(e,t){mn(this,e,t)}deleteContent(e,t){pn(this,e,t)}modifySelection(e,t){wn(this,e,t)}getSelectedContent(e){return Pn(this,e)}hasContent(e){if(e instanceof Wu&&(e=Gu.createIn(e)),e.isCollapsed)return!1;for(const t of e.getItems())if(t.is('textProxy')||this.schema.isObject(t))return!0;return!1}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new qg(this,t);const o=this._pendingChanges[0].callback(this._currentWriter);e.push(o),this.fire('_change',this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return e}}f(Xg,bc);class Zg{constructor(){this._listener=Object.create(Yc)}listenTo(e){this._listener.listenTo(e,'keydown',(e,t)=>{this._listener.fire('_keydown:'+te(t),t)})}set(e,t,o={}){const n=oe(e),i=o.priority;this._listener.listenTo(this._listener,'_keydown:'+n,(e,o)=>{t(o,()=>{o.preventDefault(),o.stopPropagation(),e.stop()}),e.return=!0},{priority:i})}press(e){return!!this._listener.fire('_keydown:'+te(e),e)}destroy(){this._listener.stopListening()}}class ef extends Zg{constructor(e){super(),this.editor=e}set(e,t,o={}){if('string'==typeof t){const e=t;t=(t,o)=>{this.editor.execute(e),o()}}super.set(e,t,o)}}class tf{constructor(e){const t=this.constructor.build&&this.constructor.build.plugins;this.config=new Ya(e,this.constructor.build&&this.constructor.build.config),this.config.define('plugins',t),this.plugins=new im(this,t),this.commands=new rm,this.locale=new am(this.config.get('language')),this.t=this.locale.t,this.set('isReadOnly',!1),this.model=new Xg,this.data=new mm(this.model),this.editing=new nm(this.model),this.editing.view.document.bind('isReadOnly').to(this),this.conversion=new pm,this.conversion.register('downcast',[this.editing.downcastDispatcher,this.data.downcastDispatcher]),this.conversion.register('editingDowncast',[this.editing.downcastDispatcher]),this.conversion.register('dataDowncast',[this.data.downcastDispatcher]),this.conversion.register('upcast',[this.data.upcastDispatcher]),this.keystrokes=new ef(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){function e(e,t){return e.reduce((e,o)=>o[t]?e.then(o[t].bind(o)):e,Promise.resolve())}const t=this,o=this.config;return function(){const e=o.get('plugins')||[],n=o.get('removePlugins')||[];return t.plugins.load(e,n)}().then((t)=>e(t,'init').then(()=>e(t,'afterInit'))).then(()=>this.fire('pluginsReady'))}destroy(){return this.fire('destroy'),this.stopListening(),this.commands.destroy(),this.plugins.destroy().then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...e){this.commands.execute(...e)}static create(e){return new Promise((t)=>{const o=new this(e);t(o.initPlugins().then(()=>{o.fire('dataReady'),o.fire('ready')}).then(()=>o))})}}f(tf,bc);const of={setData(e){this.data.set(e)},getData(){return this.data.get()}};const nf={updateElement(){Sn(this.element,this.data.get())}};class rf{getHtml(e){const t=document.implementation.createHTMLDocument(''),o=t.createElement('div');return o.appendChild(e),o.innerHTML}}class af{constructor(){this._domParser=new DOMParser,this._domConverter=new Jc({blockFiller:Wc}),this._htmlWriter=new rf}toData(e){const t=this._domConverter.viewToDom(e,document);return this._htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this._domConverter.domToView(t)}_toDom(e){const t=this._domParser.parseFromString(e,'text/html'),o=t.createDocumentFragment(),n=t.body.childNodes;for(;0<n.length;)o.appendChild(n[0]);return o}}class sf{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){if(this.has(e))throw new Za('componentfactory-item-exists: The item already exists in the component factory.',{name:e});this._components.set(Rn(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new Za('componentfactory-item-missing: The required component is not registered in the factory.',{name:e});return this._components.get(Rn(e)).callback(this.editor.locale)}has(e){return this._components.has(Rn(e))}}class lf{constructor(){this.set('isFocused',!1),this.focusedElement=null,this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new Za('focusTracker-add-element-already-exist');this.listenTo(e,'focus',()=>this._focus(e),{useCapture:!0}),this.listenTo(e,'blur',()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}f(lf,Yc),f(lf,bc);class df{constructor(e,t){this.editor=e,this.view=t,this.componentFactory=new sf(e),this.focusTracker=new lf,this._toolbarConfig=Vn(e.config.get('toolbar'))}init(){const e=this.editor,t=this.view;t.render(),t.stickyPanel.bind('isActive').to(this.focusTracker,'isFocused'),t.stickyPanel.limiterElement=t.element,this._toolbarConfig.viewportTopOffset&&(t.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset);const o=e.editing.view.document.getRoot();t.editable.bind('isReadOnly').to(o),t.editable.bind('isFocused').to(e.editing.view.document),t.editable.name=o.rootName,this.focusTracker.add(this.view.editableElement),this.view.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),In({origin:e.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:this.view.toolbar})}destroy(){this.view.destroy()}}class cf extends Pc{constructor(e){super({idProperty:'viewUid'}),this.on('add',(e,t,o)=>{t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[o])}),this.on('remove',(e,t)=>{t.element&&this._parentElement&&t.element.remove()}),this.locale=e,this._parentElement=null}destroy(){this.map((e)=>e.destroy())}setParent(e){this._parentElement=e}delegate(...e){if(!e.length||!Fn(e))throw new Za('ui-viewcollection-delegate-wrong-events: All event names must be strings.');return{to:(t)=>{for(const o of this)for(const n of e)o.delegate(n).to(t);this.on('add',(o,n)=>{for(const i of e)n.delegate(i).to(t)}),this.on('remove',(o,n)=>{for(const i of e)n.stopDelegating(i,t)})}}}}f(Pc,bc);var uf=function(e,t){return Pd(e,!0,!0,t)};class mf{constructor(e){Object.assign(this,qn(jn(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData=ti(),this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new Za('ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.');this._revertTemplateFromNode(e,this._revertData)}*getViews(){function*e(t){if(t.children)for(const o of t.children)Xn(o)?yield o:Zn(o)&&(yield*e(o))}yield*e(this)}static bind(e,t){return{to(o,n){return new gf({eventNameOrFunction:o,attribute:o,observable:e,emitter:t,callback:n})},if(o,n,i){return new ff({observable:e,emitter:t,attribute:o,valueIfTrue:n,callback:i})}}}static extend(e,t){e._isRendered&&Ru.warn('template-extend-render: Attempting to extend a template which has already been rendered.'),Qn(e,qn(jn(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new Za('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||'http://www.w3.org/1999/xhtml',this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(''),Nn(this.text)?this._bindToObservable({schema:this.text,updater:Bn(t),data:e}):t.textContent=this.text.join(''),t}_renderAttributes(e){let t,o,n,i;if(this.attributes){const r=e.node,a=e.revertData;for(t in this.attributes)if(n=r.getAttribute(t),o=this.attributes[t],a&&(a.attributes[t]=n),i=ps(o[0])&&o[0].ns?o[0].ns:null,Nn(o)){const s=i?o[0].value:o;a&&oi(t)&&s.unshift(n),this._bindToObservable({schema:s,updater:Ln(r,t,i),data:e})}else'style'==t&&'string'!=typeof o[0]?this._renderStyleAttribute(o[0],e):(a&&n&&oi(t)&&o.unshift(n),o=o.map((e)=>e?e.value||e:e).reduce((e,t)=>e.concat(t),[]).reduce($n,''),Yn(o)||r.setAttributeNS(i,t,o))}}_renderStyleAttribute(e,t){const o=t.node;for(const n in e){const i=e[n];Nn(i)?this._bindToObservable({schema:[i],updater:zn(o,n),data:t}):o.style[n]=i}}_renderElementChildren(e){const t=e.node,o=e.intoFragment?document.createDocumentFragment():t,n=e.isApplying;let i=0;for(const r of this.children)if(ei(r)){if(!n){r.setParent(t);for(const e of r)o.appendChild(e.element)}}else if(Xn(r))n||(!r.isRendered&&r.render(),o.appendChild(r.element));else if(Me(r))o.appendChild(r);else if(n){const t=e.revertData,n=ti();t.children.push(n),r._renderNode({node:o.childNodes[i++],isApplying:!0,revertData:n})}else o.appendChild(r.render());e.intoFragment&&t.appendChild(o)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const o=this.eventListeners[t].map((o)=>{const[n,i]=t.split('@');return o.activateDomEventListener(n,i,e)});e.revertData&&e.revertData.bindings.push(o)}}_bindToObservable({schema:e,updater:t,data:o}){const n=o.revertData;Dn(e,t,o);const i=e.filter((e)=>!Yn(e)).filter((e)=>e.observable).map((n)=>n.activateAttributeListener(e,t,o));n&&n.bindings.push(i)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const e of o)e();if(t.text)return void(e.textContent=t.text);for(const o in t.attributes){const n=t.attributes[o];null===n?e.removeAttribute(o):e.setAttribute(o,n)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(e.childNodes[o],t.children[o])}}f(mf,ss);class pf{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,o){const n=()=>Dn(e,t,o);return this.emitter.listenTo(this.observable,'change:'+this.attribute,n),()=>{this.emitter.stopListening(this.observable,'change:'+this.attribute,n)}}}class gf extends pf{activateDomEventListener(e,t,o){const n=(e,o)=>{(!t||o.target.matches(t))&&('function'==typeof this.eventNameOrFunction?this.eventNameOrFunction(o):this.observable.fire(this.eventNameOrFunction,o))};return this.emitter.listenTo(o.node,e,n),()=>{this.emitter.stopListening(o.node,e,n)}}}class ff extends pf{getValue(e){const t=super.getValue(e);return!Yn(t)&&(this.valueIfTrue||!0)}}var hf=o(11),bf=o.n(hf);class kf{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Pc,this._unboundChildren=this.createCollection(),this._viewCollections.on('add',(t,o)=>{o.locale=e}),this.decorate('render')}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=mf.bind(this,this)}createCollection(){const e=new cf;return this._viewCollections.add(e),e}registerChild(e){P(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){P(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new mf(e)}extendTemplate(e){mf.extend(this.template,e)}render(){if(this.isRendered)throw new Za('ui-view-render-already-rendered: This View has already been rendered.');this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map((e)=>e.destroy())}}f(kf,Yc),f(kf,bc);var _f=o(14),wf=o.n(_f);class vf extends kf{constructor(e){super(e),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const e=this._bodyCollectionContainer=new mf({tag:'div',attributes:{class:['ck','ck-reset_all','ck-body','ck-rounded-corners']},children:this.body}).render();document.body.appendChild(e)}}var yf=o(16),xf=o.n(yf);class Cf extends kf{constructor(e){super(e),this.set('text'),this.set('for');const t=this.bindTemplate;this.setTemplate({tag:'label',attributes:{class:['ck','ck-label'],for:t.to('for')},children:[{text:t.to('text')}]})}}class Af extends vf{constructor(e){super(e);const t=i();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(t),this.setTemplate({tag:'div',attributes:{class:['ck','ck-reset','ck-editor','ck-rounded-corners'],role:'application',dir:'ltr',lang:e.language,"aria-labelledby":`ck-editor__aria-label_${t}`},children:[this._voiceLabelView,{tag:'div',attributes:{class:['ck','ck-editor__top','ck-reset_all'],role:'presentation'},children:this.top},{tag:'div',attributes:{class:['ck','ck-editor__main'],role:'presentation'},children:this.main}]})}_createVoiceLabel(e){const o=this.t,t=new Cf;return t.text=o('af'),t.extendTemplate({attributes:{id:`ck-editor__aria-label_${e}`,class:'ck-voice-label'}}),t}}class Tf extends kf{constructor(e,t){super(e);const o=this.bindTemplate;t&&(this.element=this.editableElement=t),this.setTemplate({tag:'div',attributes:{class:['ck','ck-content','ck-editor__editable','ck-rounded-corners',o.to('isFocused',(e)=>e?'ck-focused':'ck-blurred')],contenteditable:o.to('isReadOnly',(e)=>!e)}}),this.set('isReadOnly',!1),this.set('isFocused',!1),this.externalElement=t}render(){super.render(),this.externalElement?this.template.apply(this.element=this.externalElement):this.editableElement=this.element}destroy(){this.externalElement&&this.template.revert(this.externalElement),super.destroy()}}class Pf extends Tf{constructor(e,o){super(e,o);const n=this.bindTemplate,i=this.t;this.set('name',null);this.extendTemplate({attributes:{role:'textbox',"aria-label":n.to('name',(e)=>i('ae',[e])),class:'ck-editor__editable_inline'}})}}var Ef=o(18),Sf=o.n(Ef);const Of=ni('px');class Rf extends kf{constructor(e){super(e);const t=this.bindTemplate;this.set('isActive',!1),this.set('isSticky',!1),this.set('limiterElement',null),this.set('limiterBottomOffset',50),this.set('viewportTopOffset',0),this.set('_marginLeft',null),this.set('_isStickyToTheLimiter',!1),this.set('_hasViewportTopOffset',!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new mf({tag:'div',attributes:{class:['ck','ck-sticky-panel__placeholder'],style:{display:t.to('isSticky',(e)=>e?'block':'none'),height:t.to('isSticky',(e)=>e?Of(this._panelRect.height):null)}}}).render(),this._contentPanel=new mf({tag:'div',attributes:{class:['ck','ck-sticky-panel__content',t.if('isSticky','ck-sticky-panel__content_sticky'),t.if('_isStickyToTheLimiter','ck-sticky-panel__content_sticky_bottom-limit')],style:{width:t.to('isSticky',(e)=>e?Of(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to('_hasViewportTopOffset',(e)=>e?Of(this.viewportTopOffset):null),bottom:t.to('_isStickyToTheLimiter',(e)=>e?Of(this.limiterBottomOffset):null),marginLeft:t.to('_marginLeft')}},children:this.content}).render(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-sticky-panel']},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo($c.window,'scroll',()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,'change:isActive',()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Of(-$c.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class If{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let o=e.actions[t];'string'==typeof o&&(o=[o]);for(const n of o)e.keystrokeHandler.set(n,(e,o)=>{this[t](),o()})}}get first(){return this.focusables.find(ii)||null}get last(){return this.focusables.filter(ii).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((t,o)=>{const n=t.element===this.focusTracker.focusedElement;return n&&(e=o),n}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,o=this.focusables.length;if(!o)return null;if(null===t)return this[1===e?'first':'last'];let n=(t+o+e)%o;do{const t=this.focusables.get(n);if(ii(t))return t;n=(n+o+e)%o}while(n!==t);return null}}class Vf extends kf{constructor(e){super(e),this.setTemplate({tag:'span',attributes:{class:['ck','ck-toolbar__separator']}})}}var Ff=o(20),Nf=o.n(Ff);class Mf extends kf{constructor(e){super(e);const t=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new lf,this.keystrokes=new Zg,this.set('isVertical',!1),this.set('className'),this._focusCycler=new If({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:['arrowleft','arrowup'],focusNext:['arrowright','arrowdown']}}),this.setTemplate({tag:'div',attributes:{class:['ck','ck-toolbar',t.if('isVertical','ck-toolbar_vertical'),t.to('className')]},children:this.items,on:{mousedown:ri(this)}})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on('add',(e,t)=>{this.focusTracker.add(t.element)}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){e.map((e)=>{'|'==e?this.items.add(new Vf):t.has(e)?this.items.add(t.create(e)):Ru.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.',{name:e})})}}var Df=o(22),Bf=o.n(Df);class Lf extends Af{constructor(e){super(e),this.stickyPanel=new Rf(e),this.toolbar=new Mf(e),this.editable=new Pf(e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}get editableElement(){return this.editable.element}}class zf{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display='none',t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display='',t&&t.remove()}),this._replacedElements=[]}}class jf extends tf{constructor(e,t){super(t),this._elementReplacer=new zf,this.element=e,this.data.processor=new af,this.model.document.createRoot(),this.ui=new df(this,new Lf(this.locale)),On(this)}destroy(){return this.updateElement(),this._elementReplacer.restore(),this.ui.destroy(),super.destroy()}static create(e,t){return new Promise((o)=>{const n=new this(e,t);o(n.initPlugins().then(()=>n.ui.init()).then(()=>{n._elementReplacer.replace(e,n.ui.view.element),n.fire('uiReady')}).then(()=>n.editing.view.attachDomRoot(n.ui.view.editableElement)).then(()=>n.data.init(ai(e))).then(()=>{n.fire('dataReady'),n.fire('ready')}).then(()=>n))})}}f(jf,of),f(jf,nf);class qf{constructor(e){this.editor=e}destroy(){this.stopListening()}}f(qf,bc);class Wf{constructor(e){this.files=si(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}}class Uf extends vu{constructor(e){function t(e,t){t.preventDefault();const n=t.dropRange?[t.dropRange]:Array.from(o.selection.getRanges());o.fire('clipboardInput',{dataTransfer:t.dataTransfer,targetRanges:n})}super(e);const o=this.document;this.domEventType=['paste','copy','cut','drop','dragover'],this.listenTo(o,'paste',t,{priority:'low'}),this.listenTo(o,'drop',t,{priority:'low'})}onDomEvent(e){const t={dataTransfer:new Wf(e.clipboardData?e.clipboardData:e.dataTransfer)};'drop'==e.type&&(t.dropRange=li(this.view,e)),this.fire(e.type,e,t)}}const Hf=['figcaption','li'];class Kf extends qf{static get pluginName(){return'Clipboard'}init(){function e(e,n){const r=n.dataTransfer;n.preventDefault();const a=t.data.toView(t.model.getSelectedContent(o.selection));i.fire('clipboardOutput',{dataTransfer:r,content:a,method:e.name})}const t=this.editor,o=t.model.document,n=t.editing.view,i=n.document;this._htmlDataProcessor=new af,n.addObserver(Uf),this.listenTo(i,'clipboardInput',(e,o)=>{if(t.isReadOnly)return;const i=o.dataTransfer;let r='';i.getData('text/html')?r=ci(i.getData('text/html')):i.getData('text/plain')&&(r=di(i.getData('text/plain'))),r=this._htmlDataProcessor.toView(r),this.fire('inputTransformation',{content:r}),n.scrollToTheSelection()},{priority:'low'}),this.listenTo(this,'inputTransformation',(e,t)=>{if(!t.content.isEmpty){const e=this.editor.data,n=this.editor.model,i=e.toModel(t.content,'$clipboardHolder');if(0==i.childCount)return;n.insertContent(i,o.selection)}},{priority:'low'}),this.listenTo(i,'copy',e,{priority:'low'}),this.listenTo(i,'cut',(o,n)=>{t.isReadOnly?n.preventDefault():e(o,n)},{priority:'low'}),this.listenTo(i,'clipboardOutput',(e,n)=>{n.content.isEmpty||(n.dataTransfer.setData('text/html',this._htmlDataProcessor.toData(n.content)),n.dataTransfer.setData('text/plain',ui(n.content))),'cut'==n.method&&t.model.deleteContent(o.selection)},{priority:'low'})}}class Gf{constructor(e){function t(){this.isEnabled=!1}this.editor=e,this.set('value',void 0),this.set('isEnabled',!1),this.decorate('execute'),this.listenTo(this.editor.model.document,'change',()=>{this.refresh()}),this.on('execute',(e)=>{this.isEnabled||e.stop()},{priority:'high'}),this.listenTo(e,'change:isReadOnly',(e,o,n)=>{n?(this.on('change:isEnabled',t,{priority:'lowest'}),this.isEnabled=!1):(this.off('change:isEnabled',t),this.refresh())})}refresh(){this.isEnabled=!0}execute(){}destroy(){this.stopListening()}}f(Gf,bc);class $f extends Gf{execute(){const e=this.editor.model,t=e.document;e.change((o)=>{mi(this.editor.model,o,t.selection,e.schema),this.fire('afterExecute',{writer:o})})}}class Jf extends Zc{constructor(e){super(e);const t=this.document;t.on('keydown',(e,o)=>{if(this.isEnabled&&o.keyCode==Dc.enter){let n;t.once('enter',(e)=>n=e,{priority:'highest'}),t.fire('enter',new wu(t,o.domEvent)),n&&n.stop.called&&e.stop()}})}observe(){}}class Qf extends qf{static get pluginName(){return'Enter'}init(){const e=this.editor,t=e.editing.view,o=t.document;t.addObserver(Jf),e.commands.add('enter',new $f(e)),this.listenTo(o,'enter',(o,n)=>{e.execute('enter'),n.preventDefault(),t.scrollToTheSelection()},{priority:'low'})}}class Yf{constructor(e,t=20){this.model=e,this.size=0,this.limit=t,this.isLocked=!1,this._changeCallback=(e,t)=>{'transparent'!=t.type&&t!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on('change',this._changeCallback),this.model.document.selection.on('change:range',this._selectionChangeCallback),this.model.document.selection.on('change:attribute',this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=new Bg),this._batch}input(e){this.size+=e,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off('change',this._changeCallback),this.model.document.selection.off('change:range',this._selectionChangeCallback),this.model.document.selection.off('change:attribute',this._selectionChangeCallback)}_reset(e){(!this.isLocked||e)&&(this._batch=null,this.size=0)}}class Xf extends Gf{constructor(e,t){super(e),this._buffer=new Yf(e.model,t)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,o=t.document,n=e.text||'',i=n.length,r=e.range||o.selection.getFirstRange(),a=e.resultRange;t.enqueueChange(this._buffer.batch,(e)=>{const t=r.isCollapsed;this._buffer.lock(),t||e.remove(r),n&&e.insertText(n,o.selection.getAttributes(),r.start),a?e.setSelection(a):t&&e.setSelection(r.start.getShiftedBy(i)),this._buffer.unlock(),this._buffer.input(i)})}}class Zf extends qf{static get pluginName(){return'Input'}init(){const e=this.editor,t=e.editing.view,o=new Xf(e,e.config.get('typing.undoStep')||20);e.commands.add('input',o),this.listenTo(t.document,'keydown',(e,t)=>{this._handleKeydown(t,o)},{priority:'lowest'}),this.listenTo(t.document,'mutations',(e,t,o)=>{this._handleMutations(t,o)})}_handleKeydown(e,t){const o=this.editor.model,n=o.document,i=t.buffer;!t.isEnabled||fi(e)||n.selection.isCollapsed||(i.lock(),o.enqueueChange(i.batch,()=>{this.editor.model.deleteContent(n.selection)}),i.unlock())}_handleMutations(e,t){new eh(this.editor).handle(e,t)}}class eh{constructor(e){this.editor=e,this.editing=this.editor.editing}handle(e,t){if(_i(e))this._handleContainerChildrenMutations(e,t);else for(const o of e)this._handleTextMutation(o,t),this._handleTextNodeInsertion(o)}_handleContainerChildrenMutations(e,t){const o=ki(e);if(!o)return;const n=this.editor.editing.view.domConverter,i=n.mapViewToDom(o),r=new Jc,a=this.editor.data.toModel(r.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(o);if(!s)return;const l=Array.from(a.getChildren()),d=Array.from(s.getChildren());if(!wi(l)||!wi(d))return;const c=l.map((e)=>e.data).join('').replace(/\u00A0/g,' '),u=d.map((e)=>e.data).join('');if(u===c)return;const m=Te(u,c),{firstChangeAt:p,insertions:g,deletions:f}=vi(m);let h=null;t&&(h=this.editing.mapper.toModelRange(t.getFirstRange()));const b=c.substr(p,g),k=Gu.createFromParentsAndOffsets(s,p,s,p+f);this.editor.execute('input',{text:b,range:k,resultRange:h})}_handleTextMutation(e,t){if('text'!=e.type)return;const o=e.newText.replace(/\u00A0/g,' '),n=e.oldText.replace(/\u00A0/g,' '),i=Te(n,o),{firstChangeAt:r,insertions:a,deletions:s}=vi(i);let l=null;t&&(l=this.editing.mapper.toModelRange(t.getFirstRange()));const d=new xc(e.node,r),c=this.editing.mapper.toModelPosition(d),u=Gu.createFromPositionAndShift(c,s),m=o.substr(r,a);this.editor.execute('input',{text:m,range:u,resultRange:l})}_handleTextNodeInsertion(e){if('children'==e.type){const t=bi(e),o=new xc(e.node,t.index),n=this.editing.mapper.toModelPosition(o),i=t.values[0].data;this.editor.execute('input',{text:i.replace(/\u00A0/g,' '),range:new Gu(n)})}}}const th=[te('arrowUp'),te('arrowRight'),te('arrowDown'),te('arrowLeft'),9,16,17,18,20,27,33,34,35,36,229];for(let n=112;135>=n;n++)th.push(n);class oh extends Gf{constructor(e,t){super(e),this.direction=t,this._buffer=new Yf(e.model,e.config.get('typing.undoStep'))}execute(e={}){const t=this.editor.model,o=t.document;t.enqueueChange(this._buffer.batch,(n)=>{this._buffer.lock();const i=new Yu(o.selection),r=i.isCollapsed;if(i.isCollapsed&&t.modifySelection(i,{direction:this.direction,unit:e.unit}),this._shouldEntireContentBeReplacedWithParagraph(e.sequence||1))return void this._replaceEntireContentWithParagraph(n);if(i.isCollapsed)return;let a=0;i.getFirstRange().getMinimalFlatRanges().forEach((e)=>{a+=Y(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(i,{doNotResetEntireContent:r}),this._buffer.input(a),n.setSelection(i),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(1<e)return!1;const t=this.editor.model,o=t.document,n=o.selection,i=t.schema.getLimitElement(n),r=n.isCollapsed&&n.containsEntireContent(i);if(!r)return!1;if(!t.schema.checkChild(i,'paragraph'))return!1;const a=i.getChild(0);return!(a&&'paragraph'===a.name)}_replaceEntireContentWithParagraph(e){const t=this.editor.model,o=t.document,n=o.selection,i=t.schema.getLimitElement(n),r=new Wu('paragraph');e.remove(Gu.createIn(i)),e.insert(r,i),e.setSelection(r,0)}}class nh extends Zc{constructor(e){super(e);const t=e.document;let o=0;t.on('keyup',(e,t)=>{(t.keyCode==Dc.delete||t.keyCode==Dc.backspace)&&(o=0)}),t.on('keydown',(e,n)=>{const i={};if(n.keyCode==Dc.delete)i.direction='forward',i.unit='character';else if(n.keyCode==Dc.backspace)i.direction='backward',i.unit='codePoint';else return;const r=Fc.isMac?n.altKey:n.ctrlKey;i.unit=r?'word':i.unit,i.sequence=++o;let a;t.once('delete',(e)=>a=e,{priority:'highest'}),t.fire('delete',new wu(t,n.domEvent,i)),a&&a.stop.called&&e.stop()})}observe(){}}class ih extends qf{static get pluginName(){return'Delete'}init(){const e=this.editor,t=e.editing.view,o=t.document;t.addObserver(nh),e.commands.add('forwardDelete',new oh(e,'forward')),e.commands.add('delete',new oh(e,'backward')),this.listenTo(o,'delete',(o,n)=>{e.execute('forward'==n.direction?'forwardDelete':'delete',{unit:n.unit,sequence:n.sequence}),n.preventDefault(),t.scrollToTheSelection()})}}class rh extends qf{static get requires(){return[Zf,ih]}static get pluginName(){return'Typing'}}class ah extends Gf{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=0<this._stack.length}addBatch(e){const t=this.editor.model.document.selection,o={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:o}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,o){const n=this.editor.model,i=n.document,r=[];for(const n of e){const e=yi(n,o),t=e.find((e)=>e.start.root!=i.graveyard);t&&r.push(t)}r.length&&n.change((e)=>{e.setSelection(r,{backward:t})})}_undo(e,t){const o=this.editor.model,n=o.document;this._createdBatches.add(t);const i=e.deltas.slice();i.reverse();for(const r of i)if(r.operations.some((e)=>e.isDocumentOperation)){const e=r.baseVersion+r.operations.length,i=Array.from(n.history.getDeltas(e)),a=o.transformDeltas([r.getReversed()],i,!0),s=a.deltasA;for(const e of s){e.baseVersion=n.version,t.addDelta(e);for(const t of e.operations)o.applyOperation(t);n.history.setDeltaAsUndone(r,e)}}}}class sh extends ah{execute(e=null){const t=e?this._stack.findIndex((t)=>t.batch==e):this._stack.length-1,o=this._stack.splice(t,1)[0],n=new Bg;this.editor.model.enqueueChange(n,()=>{this._undo(o.batch,n);const e=this.editor.model.document.history.getDeltas(o.batch.baseVersion);this._restoreSelection(o.selection.ranges,o.selection.isBackward,e),this.fire('revert',o.batch,n)}),this.refresh()}}class lh extends ah{execute(){const e=this._stack.pop(),t=new Bg;this.editor.model.enqueueChange(t,()=>{const o=e.batch.deltas[e.batch.deltas.length-1],n=o.baseVersion+o.operations.length,i=this.editor.model.document.history.getDeltas(n);this._restoreSelection(e.selection.ranges,e.selection.isBackward,i),this._undo(e.batch,t)}),this.refresh()}}class dh extends qf{constructor(e){super(e),this._batchRegistry=new WeakSet}init(){const e=this.editor;this._undoCommand=new sh(e),this._redoCommand=new lh(e),e.commands.add('undo',this._undoCommand),e.commands.add('redo',this._redoCommand),this.listenTo(e.model,'applyOperation',(e,t)=>{const o=t[0];if(o.isDocumentOperation){const e=o.delta.batch;this._batchRegistry.has(e)||'transparent'==e.type||(this._redoCommand._createdBatches.has(e)?this._undoCommand.addBatch(e):!this._undoCommand._createdBatches.has(e)&&(this._undoCommand.addBatch(e),this._redoCommand.clearStack()),this._batchRegistry.add(e))}},{priority:'highest'}),this.listenTo(this._undoCommand,'revert',(e,t,o)=>{this._redoCommand.addBatch(o)}),e.keystrokes.set('CTRL+Z','undo'),e.keystrokes.set('CTRL+Y','redo'),e.keystrokes.set('CTRL+SHIFT+Z','redo')}}var ch=o(24),uh=o.n(ch);class mh extends kf{constructor(){super();const e=this.bindTemplate;this.set('content',''),this.set('viewBox','0 0 20 20'),this.set('fillColor',''),this.setTemplate({tag:'svg',ns:'http://www.w3.org/2000/svg',attributes:{class:['ck','ck-icon'],viewBox:e.to('viewBox')}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on('change:content',()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on('change:fillColor',()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),'image/svg+xml'),t=e.querySelector('svg'),o=t.getAttribute('viewBox');for(o&&(this.viewBox=o),this.element.innerHTML='';0<t.childNodes.length;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll('.ck-icon__fill').forEach((e)=>{e.style.fill=this.fillColor})}}var ph=o(26),gh=o.n(ph);class fh extends kf{constructor(e){super(e),this.set('text',''),this.set('position','s');const t=this.bindTemplate;this.setTemplate({tag:'span',attributes:{class:['ck','ck-tooltip',t.to('position',(e)=>'ck-tooltip_'+e),t.if('text','ck-hidden',(e)=>!e.trim())]},children:[{tag:'span',attributes:{class:['ck','ck-tooltip__text']},children:[{text:t.to('text')}]}]})}}var hh=o(28),bh=o.n(hh);class kh extends kf{constructor(e){super(e);const t=this.bindTemplate;this.set('icon'),this.set('isEnabled',!0),this.set('isOn',!1),this.set('isVisible',!0),this.set('keystroke'),this.set('label'),this.set('tabindex',-1),this.set('tooltip'),this.set('tooltipPosition','s'),this.set('type','button'),this.set('withText',!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(),this.iconView=new mh,this.iconView.extendTemplate({attributes:{class:'ck-button__icon'}}),this.bind('_tooltipString').to(this,'tooltip',this,'label',this,'keystroke',this._getTooltipString.bind(this)),this.setTemplate({tag:'button',attributes:{class:['ck','ck-button',t.to('isEnabled',(e)=>e?'ck-enabled':'ck-disabled'),t.if('isVisible','ck-hidden',(e)=>!e),t.to('isOn',(e)=>e?'ck-on':'ck-off'),t.if('withText','ck-button_with-text')],type:t.to('type',(e)=>e?e:'button'),tabindex:t.to('tabindex')},children:this.children,on:{mousedown:t.to((e)=>{e.preventDefault()}),click:t.to((e)=>{this.isEnabled?this.fire('execute'):e.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind('content').to(this,'icon'),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const e=new fh;return e.bind('text').to(this,'_tooltipString'),e.bind('position').to(this,'tooltipPosition'),e}_createLabelView(){const e=new kf;return e.setTemplate({tag:'span',attributes:{class:['ck','ck-button__label']},children:[{text:this.bindTemplate.to('label')}]}),e}_getTooltipString(e,t,o){return e?'string'==typeof e?e:(o&&(o=ne(o)),e instanceof Function?e(t,o):`${t}${o?` (${o})`:''}`):''}}var _h=o(30),wh=o.n(_h),vh=o(31),yh=o.n(vh);class xh extends qf{init(){const e=this.editor,o=e.t;this._addButton('undo',o('ag'),'CTRL+Z',wh.a),this._addButton('redo',o('ah'),'CTRL+Y',yh.a)}_addButton(e,t,o,n){const i=this.editor;i.ui.componentFactory.add(e,(r)=>{const a=i.commands.get(e),s=new kh(r);return s.set({label:t,icon:n,keystroke:o,tooltip:!0}),s.bind('isEnabled').to(a,'isEnabled'),this.listenTo(s,'execute',()=>i.execute(e)),s})}}class Ch extends qf{static get requires(){return[dh,xh]}static get pluginName(){return'Undo'}}class Ah extends qf{static get requires(){return[Kf,Qf,rh,Ch]}static get pluginName(){return'Essentials'}}class Th{constructor(){const e=new window.FileReader;this._reader=e,this.set('loaded',0),e.onprogress=(e)=>{this.loaded=e.loaded}}get error(){return this._reader.error}read(e){const t=this._reader;return this.total=e.size,new Promise((o,n)=>{t.onload=()=>{o(t.result)},t.onerror=()=>{n('error')},t.onabort=()=>{n('aborted')},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}f(Th,bc);class Ph extends qf{static get pluginName(){return'FileRepository'}init(){this.loaders=new Pc,this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0)}getLoader(e){for(const t of this.loaders)if(t.file==e)return t;return null}createLoader(e){if(!this.createUploadAdapter)return Ru.error('filerepository-no-upload-adapter: Upload adapter is not defined.'),null;const t=new Eh(e);return t._adapter=this.createUploadAdapter(t),this.loaders.add(t),t.on('change:uploaded',()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e}),t.on('change:uploadTotal',()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e}),t}destroyLoader(e){const t=e instanceof Eh?e:this.getLoader(e);t._destroy(),this.loaders.remove(t)}}f(Ph,bc);class Eh{constructor(e,t){this.id=i(),this.file=e,this._adapter=t,this._reader=new Th,this.set('status','idle'),this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0),this.set('uploadResponse',null)}read(){if('idle'!=this.status)throw new Za('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');return this.status='reading',this._reader.read(this.file).then((e)=>(this.status='idle',e)).catch((e)=>{if('aborted'===e)throw this.status='aborted','aborted';throw this.status='error',this._reader.error})}upload(){if('idle'!=this.status)throw new Za('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');return this.status='uploading',this._adapter.upload().then((e)=>(this.uploadResponse=e,this.status='idle',e)).catch((e)=>{if('aborted'===this.status)throw'aborted';throw this.status='error',e})}abort(){const e=this.status;this.status='aborted','reading'==e&&this._reader.abort(),'uploading'==e&&this._adapter.abort&&this._adapter.abort(),this._destroy()}_destroy(){this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0,this.file=void 0}}f(Eh,bc);const Sh='ckCsrfToken',Oh=40,Rh='abcdefghijklmnopqrstuvwxyz0123456789';class Ih extends qf{static get requires(){return[Ph]}static get pluginName(){return'CKFinderUploadAdapter'}init(){const e=this.editor.config.get('ckfinder.uploadUrl');e&&(this.editor.plugins.get(Ph).createUploadAdapter=(t)=>new Vh(t,e,this.editor.t))}}class Vh{constructor(e,o,n){this.loader=e,this.url=o,this.t=n}upload(){return new Promise((e,t)=>{this._initRequest(),this._initListeners(e,t),this._sendRequest()})}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open('POST',this.url,!0),e.responseType='json'}_initListeners(e,o){const n=this.xhr,i=this.loader,r=this.t,t=r('a')+` ${i.file.name}.`;n.addEventListener('error',()=>o(t)),n.addEventListener('abort',()=>o()),n.addEventListener('load',()=>{const i=n.response;return i&&i.uploaded?void e({default:i.url}):o(i&&i.error&&i.error.message?i.error.message:t)}),n.upload&&n.upload.addEventListener('progress',(e)=>{e.lengthComputable&&(i.uploadTotal=e.total,i.uploaded=e.loaded)})}_sendRequest(){const e=new FormData;e.append('upload',this.loader.file),e.append('ckCsrfToken',Ci()),this.xhr.send(e)}}class Fh{constructor(e,t,o){let n;if('function'==typeof o)n=o;else{n=()=>{e.execute(o)}}e.model.document.on('change',(o,i)=>{if('transparent'==i.type)return;const r=Array.from(e.model.document.differ.getChanges()),a=r[0];if(1!=r.length||'insert'!==a.type||'$text'!=a.name||1!=a.length)return;const s=a.position.textNode||a.position.nodeAfter;if(!s.parent.is('paragraph'))return;const l=t.exec(s.data);l&&e.model.enqueueChange((e)=>{const t=Gu.createFromParentsAndOffsets(s.parent,0,s.parent,l[0].length);e.remove(t),n({match:l})})})}}class Nh{constructor(e,t,o){let n,i,r,a;t instanceof RegExp?n=t:r=t,'string'==typeof o?i=o:a=o,r=r||((e)=>{let t;const o=[],i=[];for(;null!==(t=n.exec(e))&&!(t&&4>t.length);){let{index:e,1:n,2:r,3:a}=t;e+=t[0].length-(n+r+a).length;const s=[e,e+n.length],l=[e+n.length+r.length,e+n.length+r.length+a.length];o.push(s),o.push(l),i.push([e+n.length,e+n.length+r.length])}return{remove:o,format:i}}),a=a||((e,t)=>{for(const o of t)e.setAttribute(i,!0,o);e.removeSelectionAttribute(i)}),e.model.document.on('change',(t,o)=>{if('transparent'==o.type)return;const n=e.model.document.selection;if(!n.isCollapsed)return;const s=Array.from(e.model.document.differ.getChanges()),l=s[0];if(1!=s.length||'insert'!==l.type||'$text'!=l.name||1!=l.length)return;const d=n.focus.parent,c=Ei(d).slice(0,n.focus.offset),u=r(c),m=Si(d,u.format),p=Si(d,u.remove);m.length&&p.length&&e.model.enqueueChange((t)=>{const o=e.model.schema.getValidRanges(m,i);a(t,o);for(const e of p.reverse())t.remove(e)})})}}class Mh extends qf{static get pluginName(){return'Autoformat'}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get('bulletedList')&&new Fh(this.editor,/^[*-]\s$/,'bulletedList'),e.get('numberedList')&&new Fh(this.editor,/^\d+[.|)]\s$/,'numberedList')}_addBasicStylesAutoformats(){const e=this.editor.commands;e.get('bold')&&(new Nh(this.editor,/(\*\*)([^*]+)(\*\*)$/g,'bold'),new Nh(this.editor,/(__)([^_]+)(__)$/g,'bold')),e.get('italic')&&(new Nh(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,'italic'),new Nh(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,'italic')),e.get('code')&&new Nh(this.editor,/(`)([^`]+)(`)$/g,'code')}_addHeadingAutoformats(){const e=this.editor.commands.get('heading');e&&e.modelElements.filter((e)=>e.match(/^heading[1-6]$/)).forEach((e)=>{const t=e[7],o=new RegExp(`^(#{${t}})\\s$`);new Fh(this.editor,o,()=>{this.editor.execute('heading',{value:e})})})}_addBlockQuoteAutoformats(){this.editor.commands.get('blockQuote')&&new Fh(this.editor,/^>\s$/,'blockQuote')}}class Dh extends Gf{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.hasAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,o=t.document,n=o.selection,i=e.forceValue===void 0?!this.value:e.forceValue;t.change((e)=>{if(n.isCollapsed)i?e.setSelectionAttribute(this.attributeKey,!0):e.removeSelectionAttribute(this.attributeKey);else{const o=t.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const t of o)i?e.setAttribute(this.attributeKey,i,t):e.removeAttribute(this.attributeKey,t)}})}}const Bh='bold';class Lh extends qf{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:Bh}),e.conversion.attributeToElement({model:Bh,view:'strong',upcastAlso:['b',{styles:{"font-weight":'bold'}}]}),e.commands.add(Bh,new Dh(e,Bh)),e.keystrokes.set('CTRL+B',Bh)}}var zh=o(32),jh=o.n(zh);const qh='bold';class Wh extends qf{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add(qh,(t)=>{const n=e.commands.get(qh),i=new kh(t);return i.set({label:o('c'),icon:jh.a,keystroke:'CTRL+B',tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute(qh)),i})}}class Uh extends qf{static get requires(){return[Lh,Wh]}static get pluginName(){return'Bold'}}const Hh='italic';class Kh extends qf{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:Hh}),e.conversion.attributeToElement({model:Hh,view:'i',upcastAlso:['em',{styles:{"font-style":'italic'}}]}),e.commands.add(Hh,new Dh(e,Hh)),e.keystrokes.set('CTRL+I',Hh)}}var Gh=o(33),$h=o.n(Gh);const Jh='italic';class Qh extends qf{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add(Jh,(t)=>{const n=e.commands.get(Jh),i=new kh(t);return i.set({label:o('d'),icon:$h.a,keystroke:'CTRL+I',tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute(Jh)),i})}}class Yh extends qf{static get requires(){return[Kh,Qh]}static get pluginName(){return'Italic'}}class Xh extends Gf{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model,t=e.document,o=e.schema,n=Array.from(t.selection.getSelectedBlocks());e.change((e)=>{if(this.value)this._removeQuote(e,n.filter(Ri));else{const t=n.filter((e)=>Ri(e)||Vi(o,e));this._applyQuote(e,t)}})}_getValue(){const e=Oi(this.editor.model.document.selection.getSelectedBlocks());return!!(e&&Ri(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,o=Oi(e.getSelectedBlocks());return!!o&&Vi(t,o)}_removeQuote(e,t){Ii(t).reverse().forEach((t)=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const o=Ku.createBefore(t.start.parent);return void e.move(t,o)}t.end.isAtEnd||e.split(t.end);const o=Ku.createAfter(t.end.parent);e.move(t,o)})}_applyQuote(e,t){const o=[];Ii(t).reverse().forEach((t)=>{let n=Ri(t.start);n||(n=new Wu('blockQuote'),e.wrap(t,n)),o.push(n)}),o.reverse().reduce((t,o)=>t.nextSibling==o?(e.merge(Ku.createAfter(t)),t):o)}}class Zh extends qf{init(){const e=this.editor,t=e.model.schema;e.commands.add('blockQuote',new Xh(e)),t.register('blockQuote',{allowWhere:'$block',allowContentOf:'$root'}),t.addChildCheck((e,t)=>{if(e.endsWith('blockQuote')&&'blockQuote'==t.name)return!1}),e.conversion.elementToElement({model:'blockQuote',view:'blockquote'})}afterInit(){const e=this.editor,t=e.commands.get('blockQuote');this.listenTo(this.editor.editing.view.document,'enter',(e,o)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&i.isEmpty&&t.value&&(this.editor.execute('blockQuote'),this.editor.editing.view.scrollToTheSelection(),o.preventDefault(),e.stop())})}}var eb=o(34),tb=o.n(eb),ob=o(35),nb=o.n(ob);class ib extends qf{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add('blockQuote',(t)=>{const n=e.commands.get('blockQuote'),i=new kh(t);return i.set({label:o('b'),icon:tb.a,tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute('blockQuote')),i})}}class rb extends qf{static get requires(){return[Zh,ib]}static get pluginName(){return'BlockQuote'}}const ab=/^data:(\S*?);base64,/;class sb{constructor(e,t,o){if(!e)throw new Error('File must be provided');if(!t)throw new Error('Token must be provided');if(!o)throw new Error('Api address must be provided');this.file=Ni(e)?Fi(e):e,this._token=t,this._apiAddress=o}onProgress(e){return this.on('progress',(t,o)=>e(o)),this}onError(e){return this.once('error',(t,o)=>e(o)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open('POST',this._apiAddress),e.setRequestHeader('Authorization',this._token.value),e.responseType='json',this.xhr=e}_attachXHRListeners(){function e(e){return()=>t.fire('error',e)}const t=this,o=this.xhr;o.addEventListener('error',e('Network Error')),o.addEventListener('abort',e('Abort')),o.upload&&o.upload.addEventListener('progress',(e)=>{e.lengthComputable&&this.fire('progress',{total:e.total,uploaded:e.loaded})}),o.addEventListener('load',()=>{const e=o.status,t=o.response;if(200>e||299<e)return this.fire('error',t.message||t.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append('file',this.file),new Promise((o,n)=>{t.addEventListener('load',()=>{const e=t.status,i=t.response;return 200>e||299<e?n(i.message||i.error):o(i)}),t.addEventListener('error',()=>n('Network Error')),t.addEventListener('abort',()=>n('Abort')),t.send(e)})}}f(sb,ss);const lb={refreshInterval:36e5,autoRefresh:!0};class db{constructor(e,t=lb){if(!e)throw new Error('`tokenUrl` must be provided');this.set('value',t.initValue),this._tokenUrl=e,this._options=Object.assign({},lb,t)}init(){return new Promise((e,t)=>(this._options.autoRefresh&&this._startRefreshing(),this.value?void e(this):void this._refreshToken().then(e).catch(t)))}_refreshToken(){return new Promise((e,t)=>{const o=new XMLHttpRequest;o.open('GET',this._tokenUrl),o.addEventListener('load',()=>{const n=o.status,i=o.response;return 200>n||299<n?t('Cannot download new token!'):(this.set('value',i),e(this))}),o.addEventListener('error',()=>t('Network Error')),o.addEventListener('abort',()=>t('Abort')),o.send()})}_startRefreshing(){this._refreshInterval=setInterval(this._refreshToken.bind(this),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(e,t=lb){const o=new db(e,t);return o.init()}}f(db,bc);class cb extends qf{init(){const e=this.editor,t=e.config,o=t.get('cloudServices')||{};for(const e in o)this[e]=o[e];return this.tokenUrl?(this.token=new cb.Token(this.tokenUrl),this.token.init()):void(this.token=null)}}cb.Token=db;class ub extends qf{static get requires(){return[Ph,cb]}init(){const e=this.editor,t=e.plugins.get(cb),o=t.token,n=t.uploadUrl;o&&(this._uploadGateway=new ub._UploadGateway(o,n),e.plugins.get(Ph).createUploadAdapter=(e)=>new mb(this._uploadGateway,e))}}class mb{constructor(e,t){this.uploadGateway=e,this.loader=t}upload(){return this.fileUploader=this.uploadGateway.upload(this.loader.file),this.fileUploader.on('progress',(e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded}),this.fileUploader.send()}abort(){this.fileUploader.abort()}}ub._UploadGateway=class{constructor(e,t){if(!e)throw new Error('Token must be provided');if(!t)throw new Error('Api address must be provided');this._token=e,this._apiAddress=t}upload(e){return new sb(e,this._token,this._apiAddress)}};class pb{constructor(){this._stack=[]}add(e,t){const o=this._stack,n=o[0];this._insertDescriptor(e);const i=o[0];n===i||Li(n,i)||this.fire('change:top',{oldDescriptor:n,newDescriptor:i,writer:t})}remove(e,t){const o=this._stack,n=o[0];this._removeDescriptor(e);const i=o[0];n===i||Li(n,i)||this.fire('change:top',{oldDescriptor:n,newDescriptor:i,writer:t})}_insertDescriptor(e){const t=this._stack,o=t.findIndex((t)=>t.id===e.id);if(!Li(e,t[o])){-1<o&&t.splice(o,1);let n=0;for(;t[n]&&zi(t[n],e);)n++;t.splice(n,0,e)}}_removeDescriptor(e){const t=this._stack,o=t.findIndex((t)=>t.id===e);-1<o&&t.splice(o,1)}}f(pb,ss);const gb=Symbol('isWidget'),fb=Symbol('label'),hb='ck-widget',bb='ck-widget_selected',kb=Symbol('isImage');class _b extends qf{init(){const e=this.editor,o=e.model.schema,n=e.t,t=e.conversion;o.register('image',{isObject:!0,isBlock:!0,allowWhere:'$block',allowAttributes:['alt','src','srcset']}),t.for('dataDowncast').add(ht({model:'image',view:(e,t)=>Zi(t)})),t.for('editingDowncast').add(ht({model:'image',view:(e,t)=>Ji(Zi(t),t,n('e'))})),t.for('downcast').add(Bi('src')).add(Bi('alt')).add(Di()),t.for('upcast').add(Yt({view:{name:'img',attributes:{src:!0}},model:(e,t)=>t.createElement('image',{src:e.getAttribute('src')})})).add(Zt({view:{name:'img',key:'alt'},model:'alt'})).add(Zt({view:{name:'img',key:'srcset'},model:{key:'srcset',value:(e)=>{const t={data:e.getAttribute('srcset')};return e.hasAttribute('width')&&(t.width=e.getAttribute('width')),t}}})).add(Mi())}}class wb extends vu{constructor(e){super(e),this.domEventType='mousedown'}onDomEvent(e){this.fire(e.type,e)}}var vb=o(37),yb=o.n(vb);const xb=oe('Ctrl+A');class Cb extends qf{static get pluginName(){return'Widget'}init(){const e=this.editor.editing.view,t=e.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on('selection',(e,t,o)=>{this._clearPreviouslySelectedWidgets(o.writer);const n=o.writer,i=n.document.selection,r=i.getSelectedElement();for(const a of i.getRanges())for(const e of a){const t=e.item;t.is('element')&&qi(t)&&(n.addClass(bb,t),this._previouslySelected.add(t),t==r&&n.setSelection(i.getRanges(),{fake:!0,label:Ki(r)}))}},{priority:'low'}),e.addObserver(wb),this.listenTo(t,'mousedown',(...e)=>this._onMousedown(...e)),this.listenTo(t,'keydown',(...e)=>this._onKeydown(...e),{priority:'high'}),this.listenTo(t,'delete',(e,t)=>{this._handleDelete('forward'==t.direction)&&(t.preventDefault(),e.stop())},{priority:'high'})}_onMousedown(e,t){const o=this.editor,n=o.editing.view,i=n.document;let r=t.target;if(!or(r)&&(qi(r)||(r=r.findAncestor(qi),!!r))){t.preventDefault(),i.isFocused||n.focus();const e=o.editing.mapper.toModelElement(r);this._setSelectionOverElement(e)}}_onKeydown(e,t){const o=t.keyCode,n=o==Dc.delete||o==Dc.arrowdown||o==Dc.arrowright;let i=!1;er(o)?i=this._handleArrowKeys(n):tr(t)&&(i=this._selectAllNestedEditableContent()||this._selectAllContent()),i&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;const t=this.editor.model.document,o=t.selection;if(!o.isCollapsed)return;const n=this._getObjectElementNextToSelection(e);if(n)return this.editor.model.change((e)=>{for(let t=o.anchor.parent;t.isEmpty;){const o=t;t=o.parent,e.remove(o)}this._setSelectionOverElement(n)}),!0}_handleArrowKeys(e){const t=this.editor.model,o=t.schema,n=t.document,i=n.selection,r=i.getSelectedElement();if(r&&o.isObject(r)){const n=e?i.getLastPosition():i.getFirstPosition(),r=o.getNearestSelectionRange(n,e?'forward':'backward');return r&&t.change((e)=>{e.setSelection(r)}),!0}if(i.isCollapsed){const t=this._getObjectElementNextToSelection(e);if(t instanceof Wu&&o.isObject(t))return this._setSelectionOverElement(t),!0}}_selectAllNestedEditableContent(){const e=this.editor.model,t=e.document.selection,o=e.schema.getLimitElement(t);return t.getFirstRange().root!=o&&(e.change((e)=>{e.setSelection(Gu.createIn(o))}),!0)}_selectAllContent(){const e=this.editor.model,t=this.editor.editing,o=t.view,n=o.document,i=n.selection,r=i.getSelectedElement();if(r&&qi(r)){const o=t.mapper.toModelElement(r.parent);return e.change((e)=>{e.setSelection(Gu.createIn(o))}),!0}return!1}_setSelectionOverElement(e){this.editor.model.change((t)=>{t.setSelection(Gu.createOn(e))})}_getObjectElementNextToSelection(e){const t=this.editor.model,o=t.schema,n=t.document.selection,i=new Yu(n);t.modifySelection(i,{direction:e?'forward':'backward'});const r=e?i.focus.nodeBefore:i.focus.nodeAfter;return r instanceof Wu&&o.isObject(r)?r:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass(bb,t);this._previouslySelected.clear()}}class Ab extends Gf{refresh(){const e=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Xi(e),this.value=!!(Xi(e)&&e.hasAttribute('alt'))&&e.getAttribute('alt')}execute(e){const t=this.editor.model,o=t.document.selection.getSelectedElement();t.change((t)=>{t.setAttribute('alt',e.newValue,o)})}}class Tb extends qf{init(){this.editor.commands.add('imageTextAlternative',new Ab(this.editor))}}class Pb extends kf{constructor(e,t){super(e);const o=`ck-input-${i()}`;this.set('label'),this.set('value'),this.set('isReadOnly',!1),this.labelView=this._createLabelView(o),this.inputView=this._createInputView(t,o);const n=this.bindTemplate;this.setTemplate({tag:'div',attributes:{class:['ck','ck-labeled-input',n.if('isReadOnly','ck-disabled')]},children:[this.labelView,this.inputView]})}_createLabelView(e){const t=new Cf(this.locale);return t.for=e,t.bind('text').to(this,'label'),t}_createInputView(e,t){const o=new e(this.locale);return o.id=t,o.bind('value').to(this),o.bind('isReadOnly').to(this),o}select(){this.inputView.select()}focus(){this.inputView.focus()}}var Eb=o(39),Sb=o.n(Eb);class Ob extends kf{constructor(e){super(e),this.set('value'),this.set('id'),this.set('placeholder'),this.set('isReadOnly',!1);const t=this.bindTemplate;this.setTemplate({tag:'input',attributes:{type:'text',class:['ck','ck-input','ck-input-text'],id:t.to('id'),placeholder:t.to('placeholder'),readonly:t.to('isReadOnly')}})}render(){super.render();const e=(e)=>{this.element.value=e||0===e?e:''};e(this.value),this.on('change:value',(t,o,n)=>{e(n)})}select(){this.element.select()}focus(){this.element.focus()}}var Rb=o(3),Ib=o.n(Rb),Vb=o(4),Fb=o.n(Vb),Nb=o(41),Mb=o.n(Nb);class Db extends kf{constructor(e){super(e);const o=this.locale.t;this.focusTracker=new lf,this.keystrokes=new Zg,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(o('x'),Ib.a,'ck-button-save'),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(o('y'),Fb.a,'ck-button-cancel','cancel'),this._focusables=new cf,this._focusCycler=new If({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'form',attributes:{class:['ck','ck-text-alternative-form'],tabindex:'-1'},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),ir({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element)})}_createButton(e,t,o,n){const i=new kh(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:o}}),n&&i.delegate('execute').to(this,n),i}_createLabeledInputView(){const e=this.locale.t,t=new Pb(this.locale,Ob);return t.label=e('ai'),t.inputView.placeholder=e('ai'),t}}var Bb=o(43),Lb=o.n(Bb);const zb=ni('px'),jb=$c.document.body;class qb extends kf{constructor(e){super(e);const t=this.bindTemplate;this.set('top',0),this.set('left',0),this.set('position','arrow_nw'),this.set('isVisible',!1),this.set('withArrow',!0),this.set('className'),this.content=this.createCollection(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-balloon-panel',t.to('position',(e)=>`ck-balloon-panel_${e}`),t.if('isVisible','ck-balloon-panel_visible'),t.if('withArrow','ck-balloon-panel_with-arrow'),t.to('className')],style:{top:t.to('top',zb),left:t.to('left',zb)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=qb.defaultPositions,o=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthWest,t.northArrowSouthEast],limiter:jb,fitInViewport:!0},e),{top:n,left:i,name:r}=ar(o);Object.assign(this,{top:n,left:i,position:r})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,'change:isVisible',this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,'change:isVisible',this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=cr(e.target),o=e.limiter?cr(e.limiter):jb;this.listenTo($c.document,'scroll',(n,i)=>{const r=i.target,a=t&&r.contains(t),s=o&&r.contains(o);(a||s||!t||!o)&&this.attachTo(e)},{useCapture:!0}),this.listenTo($c.window,'resize',()=>{this.attachTo(e)})}_stopPinning(){this.stopListening($c.document,'scroll'),this.stopListening($c.window,'resize')}}qb.arrowHorizontalOffset=25,qb.arrowVerticalOffset=10,qb.defaultPositions={northArrowSouth:(e,t)=>({top:ur(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_s'}),northArrowSouthEast:(e,t)=>({top:ur(e,t),left:e.left+e.width/2-t.width+qb.arrowHorizontalOffset,name:'arrow_se'}),northArrowSouthWest:(e,t)=>({top:ur(e,t),left:e.left+e.width/2-qb.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouth:(e,t)=>({top:ur(e,t),left:e.left-t.width/2,name:'arrow_s'}),northWestArrowSouthWest:(e,t)=>({top:ur(e,t),left:e.left-qb.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouthEast:(e,t)=>({top:ur(e,t),left:e.left-t.width+qb.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouth:(e,t)=>({top:ur(e,t),left:e.right-t.width/2,name:'arrow_s'}),northEastArrowSouthEast:(e,t)=>({top:ur(e,t),left:e.right-t.width+qb.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouthWest:(e,t)=>({top:ur(e,t),left:e.right-qb.arrowHorizontalOffset,name:'arrow_sw'}),southArrowNorth:(e,t)=>({top:mr(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_n'}),southArrowNorthEast:(e,t)=>({top:mr(e,t),left:e.left+e.width/2-t.width+qb.arrowHorizontalOffset,name:'arrow_ne'}),southArrowNorthWest:(e,t)=>({top:mr(e,t),left:e.left+e.width/2-qb.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorth:(e,t)=>({top:mr(e,t),left:e.left-t.width/2,name:'arrow_n'}),southWestArrowNorthWest:(e,t)=>({top:mr(e,t),left:e.left-qb.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorthEast:(e,t)=>({top:mr(e,t),left:e.left-t.width+qb.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorth:(e,t)=>({top:mr(e,t),left:e.right-t.width/2,name:'arrow_n'}),southEastArrowNorthEast:(e,t)=>({top:mr(e,t),left:e.right-t.width+qb.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorthWest:(e,t)=>({top:mr(e,t),left:e.right-qb.arrowHorizontalOffset,name:'arrow_nw'})};class Wb extends qf{static get pluginName(){return'ContextualBalloon'}init(){this.view=new qb,this.positionLimiter=()=>{const e=this.editor.editing.view,t=e.document,o=t.selection.editableElement;return o?e.domConverter.mapViewToDom(o.root):null},this._stack=new Map,this.editor.ui.view.body.add(this.view),this.editor.ui.focusTracker.add(this.view.element)}get visibleView(){const e=this._stack.get(this.view.content.get(0));return e?e.view:null}hasView(e){return this._stack.has(e)}add(e){if(this.hasView(e.view))throw new Za('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(e.view,e),this._show(e)}remove(e){if(!this.hasView(e))throw new Za('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');if(this.visibleView===e){this.view.content.remove(e),this._stack.delete(e);const t=Array.from(this._stack.values()).pop();t?this._show(t):this.view.hide()}else this._stack.delete(e)}updatePosition(e){e&&(this._stack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition())}_show({view:e,balloonClassName:t=''}){this.view.className=t,this.view.content.add(e),this.view.pin(this._getBalloonPosition())}_getBalloonPosition(){let e=Oi(this._stack.values()).position;return e&&!e.limiter&&(e=Object.assign({},e,{limiter:this.positionLimiter})),e}}var Ub=o(45),Hb=o.n(Ub);class Kb extends qf{static get requires(){return[Wb]}init(){this._createButton(),this._createForm()}_createButton(){const e=this.editor,o=e.t;e.ui.componentFactory.add('imageTextAlternative',(t)=>{const n=e.commands.get('imageTextAlternative'),i=new kh(t);return i.set({label:o('s'),icon:Hb.a,tooltip:!0}),i.bind('isEnabled').to(n,'isEnabled'),this.listenTo(i,'execute',()=>this._showForm()),i})}_createForm(){const e=this.editor,t=e.editing.view,o=t.document;this._balloon=this.editor.plugins.get('ContextualBalloon'),this._form=new Db(e.locale),this._form.render(),this.listenTo(this._form,'submit',()=>{e.execute('imageTextAlternative',{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,'cancel',()=>{this._hideForm(!0)}),this._form.keystrokes.set('Esc',(e,t)=>{this._hideForm(!0),t()}),this.listenTo(t,'render',()=>{Yi(o.selection)?this._isVisible&&pr(e):this._hideForm(!0)}),nr({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()})}_showForm(){if(!this._isVisible){const e=this.editor,t=e.commands.get('imageTextAlternative'),o=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:gr(e)}),o.value=o.inputView.element.value=t.value||'',this._form.labeledInput.select()}}_hideForm(e){this._isVisible&&(this._balloon.remove(this._form),e&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView==this._form}}class Gb extends qf{static get requires(){return[Tb,Kb]}static get pluginName(){return'ImageTextAlternative'}}var $b=o(46),Jb=o.n($b);class Qb extends qf{static get requires(){return[_b,Cb,Gb]}static get pluginName(){return'Image'}}class Yb extends kf{constructor(e){super(e),this.buttonView=new kh(e),this._fileInputView=new Xb(e),this._fileInputView.bind('acceptedType').to(this),this._fileInputView.bind('allowMultipleFiles').to(this),this._fileInputView.delegate('done').to(this),this.setTemplate({tag:'span',attributes:{class:'ck-file-dialog-button'},children:[this.buttonView,this._fileInputView]}),this.buttonView.on('execute',()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Xb extends kf{constructor(e){super(e),this.set('acceptedType'),this.set('allowMultipleFiles',!1);const t=this.bindTemplate;this.setTemplate({tag:'input',attributes:{class:['ck-hidden'],type:'file',tabindex:'-1',accept:t.to('acceptedType'),multiple:t.to('allowMultipleFiles')},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire('done',this.element.files),this.element.value=''})}})}open(){this.element.click()}}var Zb=o(48),ek=o.n(Zb);class tk extends qf{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add('imageUpload',(t)=>{const n=new Yb(t),i=e.commands.get('imageUpload');return n.set({acceptedType:'image/*',allowMultipleFiles:!0}),n.buttonView.set({label:o('o'),icon:ek.a,tooltip:!0}),n.buttonView.bind('isEnabled').to(i),n.on('done',(t,o)=>{for(const n of Array.from(o)){const t=hr(e.model.document.selection);fr(n)&&e.execute('imageUpload',{file:n,insertAt:t})}}),n})}}var ok=o(49),nk=o.n(ok),ik=o(50),rk=o.n(ik);class ak extends qf{constructor(e){super(e),this.placeholder='data:image/svg+xml;utf8,'+encodeURIComponent(nk.a)}init(){const e=this.editor;e.editing.downcastDispatcher.on('attribute:uploadStatus:image',(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(e,t,o){const n=this.editor,i=t.item,r=i.getAttribute('uploadId');if(o.consumable.consume(t.item,e.name)){const e=n.plugins.get(Ph),a=r?t.attributeNewValue:null,s=this.placeholder,l=n.editing.mapper.toViewElement(i),d=o.writer;if('reading'==a)return br(l,d),void _r(s,l,d);if('uploading'==a){const t=e.loaders.get(r);return br(l,d),void(t?(wr(l,d),vr(l,d,t,n.editing.view)):_r(s,l,d))}yr(l,d),wr(l,d),kr(l,d)}}}const sk=Symbol('progress-bar');class lk extends Gf{execute(e){const t=this.editor,o=t.model.document,n=e.file,i=t.plugins.get(Ph);t.model.change((r)=>{const a=i.createLoader(n);if(!a)return;const s=new Wu('image',{uploadId:a.id});let l;l=e.insertAt?new Yu([new Gu(e.insertAt)]):o.selection,t.model.insertContent(s,l),s.parent&&r.setSelection(Gu.createOn(s))})}}class dk extends qf{static get pluginName(){return'Notification'}init(){this.on('show:warning',(e,t)=>{window.alert(t.message)},{priority:'lowest'})}showSuccess(e,t={}){this._showNotification({message:e,type:'success',namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:'info',namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:'warning',namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:'');this.fire(t,{message:e.message,type:e.type,title:e.title||''})}}class ck extends qf{static get requires(){return[Ph,dk]}init(){const e=this.editor,t=e.model.document,o=e.model.schema,n=e.plugins.get(Ph);o.extend('image',{allowAttributes:['uploadId','uploadStatus']}),e.commands.add('imageUpload',new lk(e)),e.editing.view.document.on('clipboardInput',(o,n)=>{if(Ar(n.dataTransfer))return;let i=new Yu(n.targetRanges.map((t)=>e.editing.mapper.toModelRange(t)));for(const r of n.dataTransfer.files){const n=hr(i);fr(r)&&(e.execute('imageUpload',{file:r,insertAt:n}),o.stop()),i=t.selection}}),e.editing.view.document.on('dragover',(e,t)=>{t.preventDefault()}),t.on('change',()=>{const e=t.differ.getChanges({includeChangesInGraveyard:!0});for(const t of e)if('insert'==t.type&&'image'==t.name){const e=t.position.nodeAfter,o='$graveyard'==t.position.root.rootName,i=e.getAttribute('uploadId');if(!i)continue;const r=n.loaders.get(i);if(!r)continue;o?r.abort():'idle'==r.status&&this._load(r,e)}})}_load(e,o){function n(){r.enqueueChange('transparent',(e)=>{e.removeAttribute('uploadId',o),e.removeAttribute('uploadStatus',o)}),t.destroyLoader(e)}const i=this.editor,r=i.model,a=i.locale.t,t=i.plugins.get(Ph),s=i.plugins.get(dk);return r.enqueueChange('transparent',(e)=>{e.setAttribute('uploadStatus','reading',o)}),e.read().then((t)=>{const n=i.editing.mapper.toViewElement(o),a=n.getChild(0),s=e.upload();return i.editing.view.change((e)=>{e.setAttribute('src',t,a)}),r.enqueueChange('transparent',(e)=>{e.setAttribute('uploadStatus','uploading',o)}),s}).then((e)=>{r.enqueueChange('transparent',(t)=>{t.setAttributes({uploadStatus:'complete',src:e.default},o);let n=0;const i=Object.keys(e).filter((e)=>{const t=parseInt(e,10);if(!isNaN(t))return n=Ba(n,t),!0}).map((t)=>`${e[t]} ${t}w`).join(', ');''!=i&&t.setAttribute('srcset',{data:i,width:n},o)}),n()}).catch((t)=>{if('error'!==e.status&&'aborted'!==e.status)throw t;'error'==e.status&&s.showWarning(t,{title:a('n'),namespace:'upload'}),n(),r.enqueueChange('transparent',(e)=>{e.remove(o)})})}}class uk extends qf{static get pluginName(){return'ImageUpload'}static get requires(){return[ck,tk,ak]}}class mk extends qf{static get requires(){return[ub,Qb,uk]}static get pluginName(){return'EasyImage'}}class pk extends Gf{refresh(){const e=this.editor.model,t=e.document,o=Oi(t.selection.getSelectedBlocks());this.value=!!o&&o.is('paragraph'),this.isEnabled=!!o&&Tr(o,e.schema)}execute(e={}){const t=this.editor.model,o=t.document;t.change((n)=>{const i=(e.selection||o.selection).getSelectedBlocks();for(const e of i)!e.is('paragraph')&&Tr(e,t.schema)&&n.rename(e,'paragraph')})}}class gk extends qf{static get pluginName(){return'Paragraph'}init(){const e=this.editor,t=e.model,o=e.data;e.commands.add('paragraph',new pk(e)),t.schema.register('paragraph',{inheritAllFrom:'$block'}),e.conversion.elementToElement({model:'paragraph',view:'p'}),o.upcastDispatcher.on('element',(e,t,o)=>{if(o.consumable.test(t.viewItem,{name:t.viewItem.name}))if(gk.paragraphLikeElements.has(t.viewItem.name)){if(t.viewItem.isEmpty)return;const e=o.writer.createElement('paragraph'),n=o.splitToAllowedParent(e,t.modelCursor);if(!n)return;o.writer.insert(e,n.position);const{modelRange:i}=o.convertChildren(t.viewItem,Ku.createAt(e));t.modelRange=new Gu(Ku.createBefore(e),i.end),t.modelCursor=t.modelRange.end}else Er(t.viewItem,t.modelCursor,o.schema)&&(t=Object.assign(t,Pr(t.viewItem,t.modelCursor,o)))},{priority:'low'}),o.upcastDispatcher.on('text',(e,t,o)=>{t.modelRange||Er(t.viewItem,t.modelCursor,o.schema)&&(t=Object.assign(t,Pr(t.viewItem,t.modelCursor,o)))},{priority:'lowest'}),t.document.registerPostFixer((e)=>this._autoparagraphEmptyRoots(e)),e.on('dataReady',()=>{t.enqueueChange('transparent',(e)=>this._autoparagraphEmptyRoots(e))},{priority:'lowest'})}_autoparagraphEmptyRoots(e){const t=this.editor.model;for(const o of t.document.getRootNames()){const n=t.document.getRoot(o);if(n.isEmpty&&'$graveyard'!=n.rootName&&t.schema.checkChild(n,'paragraph'))return e.insertElement('paragraph',n),!0}}}gk.paragraphLikeElements=new Set(['blockquote','dd','div','dt','h1','h2','h3','h4','h5','h6','li','p','td']);class fk extends Gf{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=Oi(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t)=>Sr(e,t,this.editor.model.schema))}execute(e){const t=this.editor.model,o=t.document,n=e.value;t.change((e)=>{const i=Array.from(o.selection.getSelectedBlocks()).filter((e)=>Sr(e,n,t.schema));for(const t of i)t.is(n)||e.rename(t,n)})}}const hk='paragraph';class bk extends qf{constructor(e){super(e),e.config.define('heading',{options:[{model:'paragraph',title:'Paragraph',class:'ck-heading_paragraph'},{model:'heading1',view:'h2',title:'Heading 1',class:'ck-heading_heading1'},{model:'heading2',view:'h3',title:'Heading 2',class:'ck-heading_heading2'},{model:'heading3',view:'h4',title:'Heading 3',class:'ck-heading_heading3'}]})}static get requires(){return[gk]}init(){const e=this.editor,t=e.config.get('heading.options'),o=[];for(const n of t)n.model!==hk&&(e.model.schema.register(n.model,{inheritAllFrom:'$block'}),e.conversion.elementToElement(n),o.push(n.model));e.commands.add('heading',new fk(e,o))}afterInit(){const e=this.editor,t=e.commands.get('enter'),o=e.config.get('heading.options');t&&this.listenTo(t,'afterExecute',(t,n)=>{const i=e.model.document.selection.getFirstPosition().parent,r=o.some((e)=>i.is(e.model));r&&!i.is(hk)&&0===i.childCount&&n.writer.rename(i,hk)})}}class kk{constructor(e,t){t&&mc(this,t),e&&this.set(e)}}f(kk,bc);class _k extends kf{constructor(e){super(e);const t=this.bindTemplate;this.set('isVisible',!1),this.children=this.createCollection(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-reset','ck-dropdown__panel',t.if('isVisible','ck-dropdown__panel-visible')]},children:this.children,on:{selectstart:t.to((e)=>e.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const e=this.children.last;'function'==typeof e.focusLast?e.focusLast():e.focus()}}}var wk=o(52),vk=o.n(wk);class yk extends kf{constructor(e,t,o){super(e);const n=this.bindTemplate;this.buttonView=t,this.panelView=o,this.set('isOpen',!1),this.set('isEnabled',!0),this.focusTracker=new lf,this.keystrokes=new Zg,this.setTemplate({tag:'div',attributes:{class:['ck','ck-dropdown',n.to('isEnabled',(e)=>e?'':'ck-disabled')]},children:[t,o]}),t.extendTemplate({attributes:{class:['ck-dropdown__button']}})}render(){super.render(),this.listenTo(this.buttonView,'open',()=>{this.isOpen=!this.isOpen}),this.panelView.bind('isVisible').to(this,'isOpen'),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const e=(e,t)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,t())};this.keystrokes.set('arrowdown',(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set('arrowright',(e,t)=>{this.isOpen&&t()}),this.keystrokes.set('arrowleft',e),this.keystrokes.set('esc',e)}focus(){this.buttonView.focus()}}var xk=o(54),Ck=o.n(xk);class Ak extends kh{constructor(e){super(e),this.arrowView=this._createArrowView(),this.delegate('execute').to(this,'open')}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new mh;return e.content=Ck.a,e.extendTemplate({attributes:{class:'ck-dropdown__arrow'}}),e}}var Tk=o(55),Pk=o.n(Tk);class Ek extends kf{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new lf,this.keystrokes=new Zg,this._focusCycler=new If({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'arrowup',focusNext:'arrowdown'}}),this.setTemplate({tag:'ul',attributes:{class:['ck','ck-reset','ck-list']},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on('add',(e,t)=>{this.focusTracker.add(t.element)}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Sk extends kf{constructor(){super(),this.set('tabindex',-1),this.keystrokes=new Zg;const e=this.bindTemplate;this.setTemplate({tag:'li',attributes:{class:['ck','ck-list__item',e.to('class'),e.if('isActive','ck-list__item_active')],style:e.to('style'),tabindex:e.to('tabindex')},children:[{text:e.to('label')}],on:{click:e.to('execute')}})}render(){super.render();const e=(e,t)=>{this.fire('execute'),t()};this.keystrokes.listenTo(this.element),this.keystrokes.set('Enter',e),this.keystrokes.set('Space',e)}focus(){this.element.focus()}}var Ok=o(57),Rk=o.n(Ok),Ik=o(59),Vk=o.n(Ik),Fk=o(5),Nk=o.n(Fk);class Mk extends qf{init(){const e=this.editor,o=e.t,t=Mr(e),n=o('g'),i=o('h');e.ui.componentFactory.add('heading',(o)=>{const r={},a=new Pc,s=e.commands.get('heading'),l=e.commands.get('paragraph'),d=[s];for(const e of t){const t=new kk({label:e.title,class:e.class});'paragraph'===e.model?(t.bind('isActive').to(l,'value'),t.set('commandName','paragraph'),d.push(l)):(t.bind('isActive').to(s,'value',(t)=>t===e.model),t.set({commandName:'heading',commandValue:e.model})),a.add(t),r[e.model]=e.title}const c=Or(o);return Rr(c,a),c.buttonView.set({isOn:!1,withText:!0,tooltip:i}),c.extendTemplate({attributes:{class:['ck-heading-dropdown']}}),c.bind('isEnabled').toMany(d,'isEnabled',(...e)=>e.some((e)=>e)),c.buttonView.bind('label').to(s,'value',l,'value',(e,t)=>{const o=e||t&&'paragraph';return r[o]?r[o]:n}),this.listenTo(c,'execute',(t)=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()}),c})}}class Dk extends qf{static get requires(){return[bk,Mk]}static get pluginName(){return'Heading'}}var Bk=o(62),Lk=o.n(Bk);const zk=new WeakMap,jk=Symbol('imageCaption');class qk extends qf{init(){const e=this.editor,o=e.editing.view,n=e.model.schema,i=e.data,r=e.editing,a=e.t;n.register('caption',{allowIn:'image',allowContentOf:'$block',isLimit:!0}),e.model.document.registerPostFixer((e)=>this._insertMissingModelCaptionElement(e)),e.conversion.for('upcast').add(Yt({view:qr,model:'caption'}));i.downcastDispatcher.on('insert:caption',Wr((e)=>e.createContainerElement('figcaption'),!1));const t=zr(o,a('f'));r.downcastDispatcher.on('insert:caption',Wr(t)),r.downcastDispatcher.on('insert',this._fixCaptionVisibility((e)=>e.item),{priority:'high'}),r.downcastDispatcher.on('remove',this._fixCaptionVisibility((e)=>e.position.parent),{priority:'high'}),o.document.registerPostFixer((e)=>this._updateCaptionVisibility(e))}_updateCaptionVisibility(e){const t=this.editor.editing.mapper,o=this._lastSelectedCaption;let n;const i=this.editor.model.document.selection,r=i.getSelectedElement();if(r&&r.is('image')){const e=jr(r);n=t.toViewElement(e)}const a=i.getFirstPosition(),s=Hr(a.parent);if(s&&(n=t.toViewElement(s)),n)return o?o===n?Gr(n,e):(Kr(o,e),this._lastSelectedCaption=n,Gr(n,e)):(this._lastSelectedCaption=n,Gr(n,e));if(o){const t=Kr(o,e);return this._lastSelectedCaption=null,t}return!1}_fixCaptionVisibility(e){return(t,o,n)=>{const i=e(o),r=Hr(i),a=this.editor.editing.mapper,s=n.writer;if(r){const e=a.toViewElement(r);e&&(r.childCount?s.removeClass('ck-hidden',e):s.addClass('ck-hidden',e))}}}_insertMissingModelCaptionElement(e){const t=this.editor.model,o=t.document.differ.getChanges();for(const t of o)if('insert'==t.type&&'image'==t.name){const o=t.position.nodeAfter;if(!jr(o))return e.appendElement('caption',o),!0}}}var Wk=o(64),Uk=o.n(Wk);class Hk extends qf{static get requires(){return[qk]}static get pluginName(){return'ImageCaption'}}class Kk extends Gf{constructor(e,t){super(e),this._defaultStyle=!1,this.styles=t.reduce((e,t)=>(e[t.name]=t,t.isDefault&&(this._defaultStyle=t.name),e),{})}refresh(){const e=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Xi(e),!e)this.value=!1;else if(e.hasAttribute('imageStyle')){const t=e.getAttribute('imageStyle');this.value=!!this.styles[t]&&t}else this.value=this._defaultStyle}execute(e){const t=e.value,o=this.editor.model,n=o.document.selection.getSelectedElement();o.change((e)=>{this.styles[t].isDefault?e.removeAttribute('imageStyle',n):e.setAttribute('imageStyle',t,n)})}}var Gk=o(66),$k=o.n(Gk),Jk=o(67),Qk=o.n(Jk),Yk=o(68),Xk=o.n(Yk),Zk=o(69),e_=o.n(Zk);const t_={full:{name:'full',title:'Full size image',icon:$k.a,isDefault:!0},side:{name:'side',title:'Side image',icon:e_.a,className:'image-style-side'},alignLeft:{name:'alignLeft',title:'Left aligned image',icon:Qk.a,className:'image-style-align-left'},alignCenter:{name:'alignCenter',title:'Centered image',icon:Xk.a,className:'image-style-align-center'},alignRight:{name:'alignRight',title:'Right aligned image',icon:e_.a,className:'image-style-align-right'}},o_={full:$k.a,left:Qk.a,right:e_.a,center:Xk.a};class n_ extends qf{static get requires(){return[_b]}static get pluginName(){return'ImageStyleEditing'}init(){const e=this.editor,t=e.model.schema,o=e.data,n=e.editing;e.config.define('image.styles',['full','side']);const i=Yr(e.config.get('image.styles'));t.extend('image',{allowAttributes:'imageStyle'});const r=$r(i);n.downcastDispatcher.on('attribute:imageStyle:image',r),o.downcastDispatcher.on('attribute:imageStyle:image',r),o.upcastDispatcher.on('element:figure',Jr(i),{priority:'low'}),e.commands.add('imageStyle',new Kk(e,i))}}var i_=o(70),r_=o.n(i_);class a_ extends qf{get localizedDefaultStylesTitles(){const e=this.editor.t;return{"Full size image":e('i'),"Side image":e('j'),"Left aligned image":e('k'),"Centered image":e('l'),"Right aligned image":e('m')}}init(){const e=this.editor,t=e.config.get('image.styles'),o=Zr(Yr(t),this.localizedDefaultStylesTitles);for(const e of o)this._createButton(e)}_createButton(e){const t=this.editor,o=`imageStyle:${e.name}`;t.ui.componentFactory.add(o,(o)=>{const n=t.commands.get('imageStyle'),i=new kh(o);return i.set({label:e.title,icon:e.icon,tooltip:!0}),i.bind('isEnabled').to(n,'isEnabled'),i.bind('isOn').to(n,'value',(t)=>t===e.name),this.listenTo(i,'execute',()=>t.execute('imageStyle',{value:e.name})),i})}}class s_ extends qf{static get requires(){return[n_,a_]}static get pluginName(){return'ImageStyle'}}class l_ extends qf{static get requires(){return[Wb]}static get pluginName(){return'ImageToolbar'}init(){const e=this.editor,t=e.plugins.get('BalloonToolbar');t&&this.listenTo(t,'show',(t)=>{Yi(e.editing.view.document.selection)&&t.stop()},{priority:'high'})}afterInit(){const e=this.editor,t=e.config.get('image.toolbar');t&&t.length&&(this._balloon=this.editor.plugins.get('ContextualBalloon'),this._toolbar=new Mf,this._toolbar.fillFromConfig(t,e.ui.componentFactory),this.listenTo(e.editing.view,'render',()=>{this._checkIsVisible()}),this.listenTo(e.ui.focusTracker,'change:isFocused',()=>{this._checkIsVisible()},{priority:'low'}))}_checkIsVisible(){const e=this.editor;e.ui.focusTracker.isFocused?Yi(e.editing.view.document.selection)?this._showToolbar():this._hideToolbar():this._hideToolbar()}_showToolbar(){const e=this.editor;this._isVisible?pr(e):!this._balloon.hasView(this._toolbar)&&this._balloon.add({view:this._toolbar,position:gr(e),balloonClassName:'ck-toolbar-container'})}_hideToolbar(){this._isVisible&&this._balloon.remove(this._toolbar)}get _isVisible(){return this._balloon.visibleView==this._toolbar}}class d_ extends Gf{refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute('linkHref'),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,'linkHref')}execute(e){const t=this.editor.model,o=t.document.selection;t.change((n)=>{if(o.isCollapsed){const t=o.getFirstPosition();if(o.hasAttribute('linkHref')){const t=ea(o.getFirstPosition(),o.getAttribute('linkHref'));n.setAttribute('linkHref',e,t),n.setSelection(t)}else if(''!==e){const i=rt(o.getAttributes());i.set('linkHref',e);const r=n.createText(e,i);n.insert(r,t),n.setSelection(Gu.createOn(r))}}else{const i=t.schema.getValidRanges(o.getRanges(),'linkHref');for(const t of i)n.setAttribute('linkHref',e,t)}})}}class c_ extends Gf{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute('linkHref')}execute(){const e=this.editor.model,t=e.document.selection;e.change((e)=>{const o=t.isCollapsed?[ea(t.getFirstPosition(),t.getAttribute('linkHref'))]:t.getRanges();for(const t of o)e.removeAttribute('linkHref',t)})}}const u_=Symbol('linkElement'),m_=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,p_=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;class g_{constructor(e,t,o){this.model=e,this.attribute=o,this._modelSelection=e.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,t.listenTo(this._modelSelection,'change:range',(e,t)=>this._isNextGravityRestorationSkipped?void(this._isNextGravityRestorationSkipped=!1):void(!this._isGravityOverridden||!t.directChange&&sa(this._modelSelection.getFirstPosition(),o)||this._restoreGravity()))}handleForwardMovement(e,t){const o=this.attribute;return this._isGravityOverridden||e.isAtStart&&this._hasSelectionAttribute?void 0:ca(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._removeSelectionAttribute(),!0):la(e,o)?(this._preventCaretMovement(t),this._overrideGravity(),!0):da(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._overrideGravity(),!0):void 0}handleBackwardMovement(e,t){const o=this.attribute;if(this._isGravityOverridden)return ca(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(t),this._restoreGravity(),e.isAtStart&&this._removeSelectionAttribute(),!0);return ca(e,o)&&!this._hasSelectionAttribute?(this._preventCaretMovement(t),this._setSelectionAttributeFromTheNodeBefore(e),!0):e.isAtEnd&&da(e,o)?this._hasSelectionAttribute?void(ua(e,o)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(t),this._setSelectionAttributeFromTheNodeBefore(e),!0):e.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(t),!0):void 0:void(ua(e,o)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change((e)=>e.overrideSelectionGravity())}_restoreGravity(){this.model.change((e)=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(e){e.preventDefault()}_removeSelectionAttribute(){this.model.change((e)=>{e.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(e){const t=this.attribute;this.model.change((o)=>{o.setSelectionAttribute(this.attribute,e.nodeBefore.getAttribute(t))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}var f_=o(72),h_=o.n(f_);const b_='ck-link_selected';class k_ extends qf{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:'linkHref'}),e.conversion.for('dataDowncast').add(bt({model:'linkHref',view:na})),e.conversion.for('editingDowncast').add(bt({model:'linkHref',view:(e,t)=>na(ia(e),t)})),e.conversion.for('upcast').add(Xt({view:{name:'a',attributes:{href:!0}},model:{key:'linkHref',value:(e)=>e.getAttribute('href')}})),e.commands.add('link',new d_(e)),e.commands.add('unlink',new c_(e)),aa(e.editing.view,e.model,this,'linkHref'),this._setupLinkHighlight()}_setupLinkHighlight(){const e=this.editor,t=e.editing.view,o=new Set;t.document.registerPostFixer((t)=>{const n=e.model.document.selection;if(n.hasAttribute('linkHref')){const i=ea(n.getFirstPosition(),n.getAttribute('linkHref')),r=e.editing.mapper.toViewRange(i);for(const e of r.getItems())e.is('a')&&(t.addClass(b_,e),o.add(e))}}),e.conversion.for('editingDowncast').add((e)=>{function n(){t.change((e)=>{for(const t of o.values())e.removeClass(b_,t),o.delete(t)})}e.on('insert',n,{priority:'highest'}),e.on('remove',n,{priority:'highest'}),e.on('attribute',n,{priority:'highest'}),e.on('selection',n,{priority:'highest'})})}}class __ extends vu{constructor(e){super(e),this.domEventType='click'}onDomEvent(e){this.fire(e.type,e)}}var w_=o(74),v_=o.n(w_);class y_ extends kf{constructor(e){super(e);const o=e.t;this.focusTracker=new lf,this.keystrokes=new Zg,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(o('x'),Ib.a,'ck-button-save'),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(o('y'),Fb.a,'ck-button-cancel','cancel'),this._focusables=new cf,this._focusCycler=new If({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'form',attributes:{class:['ck','ck-link-form'],tabindex:'-1'},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),ir({view:this});const e=[this.urlInputView,this.saveButtonView,this.cancelButtonView];e.forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new Pb(this.locale,Ob);return t.label=e('z'),t.inputView.placeholder='https://example.com',t}_createButton(e,t,o,n){const i=new kh(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:o}}),n&&i.delegate('execute').to(this,n),i}}var x_=o(76),C_=o.n(x_),A_=o(77),T_=o.n(A_),P_=o(78),E_=o.n(P_);class S_ extends kf{constructor(e){super(e);const o=e.t;this.focusTracker=new lf,this.keystrokes=new Zg,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(o('aa'),C_.a,'unlink'),this.editButtonView=this._createButton(o('ab'),T_.a,'edit'),this.set('href'),this._focusables=new cf,this._focusCycler=new If({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'div',attributes:{class:['ck','ck-link-actions'],tabindex:'-1'},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();const e=[this.previewButtonView,this.editButtonView,this.unlinkButtonView];e.forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(e,t,o){const n=new kh(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate('execute').to(this,o),n}_createPreviewButton(){const e=new kh(this.locale),o=this.bindTemplate,n=this.t;return e.set({withText:!0,tooltip:n('ac')}),e.extendTemplate({attributes:{class:['ck','ck-link-actions__preview'],href:o.to('href',(e)=>e&&ia(e)),target:'_blank'}}),e.bind('label').to(this,'href',(e)=>e||n('ad')),e.bind('isEnabled').to(this,'href',(e)=>!!e),e.template.tag='a',e.template.eventListeners={},e}}var O_=o(80),R_=o.n(O_);const I_='Ctrl+K';class V_ extends qf{static get requires(){return[Wb]}init(){const e=this.editor;e.editing.view.addObserver(__),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(Wb),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}_createActionsView(){const e=this.editor,t=new S_(e.locale),o=e.commands.get('link'),n=e.commands.get('unlink');return t.bind('href').to(o,'value'),t.editButtonView.bind('isEnabled').to(o),t.unlinkButtonView.bind('isEnabled').to(n),this.listenTo(t,'edit',()=>{this._addFormView()}),this.listenTo(t,'unlink',()=>{e.execute('unlink'),this._hideUI()}),t.keystrokes.set('Esc',(e,t)=>{this._hideUI(),t()}),t.keystrokes.set(I_,(e,t)=>{this._addFormView(),t()}),t}_createFormView(){const e=this.editor,t=new y_(e.locale),o=e.commands.get('link');return t.urlInputView.bind('value').to(o,'value'),t.urlInputView.bind('isReadOnly').to(o,'isEnabled',(e)=>!e),t.saveButtonView.bind('isEnabled').to(o),this.listenTo(t,'submit',()=>{e.execute('link',t.urlInputView.inputView.element.value),this._removeFormView()}),this.listenTo(t,'cancel',()=>{this._removeFormView()}),t.keystrokes.set('Esc',(e,t)=>{this._removeFormView(),t()}),t}_createToolbarLinkButton(){const e=this.editor,o=e.commands.get('link'),n=e.t;e.keystrokes.set(I_,(e,t)=>{t(),o.isEnabled&&this._showUI()}),e.ui.componentFactory.add('link',(e)=>{const t=new kh(e);return t.isEnabled=!0,t.label=n('r'),t.icon=R_.a,t.keystroke=I_,t.tooltip=!0,t.bind('isEnabled').to(o,'isEnabled'),this.listenTo(t,'execute',()=>this._showUI()),t})}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,'click',()=>{const e=this._getSelectedLinkElement();e&&this._showUI()}),this.editor.keystrokes.set('Tab',(e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())},{priority:'high'}),this.editor.keystrokes.set('Esc',(e,t)=>{this._isUIVisible&&(this._hideUI(),t())}),nr({emitter:this.formView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(!this._isFormInPanel){const e=this.editor,t=e.commands.get('link');this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||''}}_removeFormView(){this._isFormInPanel&&(this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(){const e=this.editor,t=e.commands.get('link');t.isEnabled&&(this._getSelectedLinkElement()?this._areActionsVisible?this._addFormView():this._addActionsView():(this._addActionsView(),this._addFormView()),this._startUpdatingUIOnViewRender())}_hideUI(){if(this._isUIInPanel){const e=this.editor.editing.view;this.stopListening(e,'render'),this._removeFormView(),this._balloon.remove(this.actionsView),e.focus()}}_startUpdatingUIOnViewRender(){function e(){return n.document.selection.focus.getAncestors().reverse().find((e)=>e.is('element'))}const t=this.editor,o=t.editing,n=o.view;let i=this._getSelectedLinkElement(),r=e();this.listenTo(n,'render',()=>{const t=this._getSelectedLinkElement(),o=e();(!i||t)&&(i||o===r)?this._balloon.updatePosition(this._getBalloonPositionData()):this._hideUI(),i=t,r=o})}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){const e=this._balloon.visibleView;return e==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=e.document,o=this._getSelectedLinkElement(),n=o?e.domConverter.mapViewToDom(o):e.domConverter.viewRangeToDom(t.selection.getFirstRange());return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view.document.selection;if(e.isCollapsed)return ma(e.getFirstPosition());else{const t=e.getFirstRange().getTrimmed(),o=ma(t.start),n=ma(t.end);return o&&o==n?Cc.createIn(o).getTrimmed().isEqual(t)?o:null:null}}}class F_ extends qf{static get requires(){return[k_,V_]}static get pluginName(){return'Link'}}class N_ extends Gf{constructor(e,t){super(e),this.type='bulleted'==t?'bulleted':'numbered'}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model,t=e.document,o=Array.from(t.selection.getSelectedBlocks()).filter((t)=>ga(t,e.schema)),n=!0===this.value;e.change((e)=>{if(n){let t=o[o.length-1].nextSibling,n=Da,i=[];for(;t&&'listItem'==t.name&&0!==t.getAttribute('indent');){const e=t.getAttribute('indent');e<n&&(n=e);const o=e-n;i.push({element:t,indent:o}),t=t.nextSibling}i=i.reverse();for(const t of i)e.setAttribute('indent',t.indent,t.element)}if(!n){let e=Da;for(const t of o)t.is('listItem')&&t.getAttribute('indent')<e&&(e=t.getAttribute('indent'));e=0===e?1:e,pa(o,!0,e),pa(o,!1,e)}for(const t of o.reverse())n&&'listItem'==t.name?e.rename(t,'paragraph'):n||'listItem'==t.name?n||'listItem'!=t.name||t.getAttribute('type')==this.type||e.setAttribute('type',this.type,t):(e.setAttributes({type:this.type,indent:0},t),e.rename(t,'listItem'))})}_getValue(){const e=Oi(this.editor.model.document.selection.getSelectedBlocks());return!!e&&e.is('listItem')&&e.getAttribute('type')==this.type}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,o=Oi(e.getSelectedBlocks());return!!o&&ga(o,t)}}class M_ extends Gf{constructor(e,t){super(e),this._indentBy='forward'==t?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model,t=e.document;let o=Array.from(t.selection.getSelectedBlocks());e.change((e)=>{const t=o[o.length-1];for(let n=t.nextSibling;n&&'listItem'==n.name&&n.getAttribute('indent')>t.getAttribute('indent');)o.push(n),n=n.nextSibling;0>this._indentBy&&(o=o.reverse());for(const t of o){const o=t.getAttribute('indent')+this._indentBy;0>o?e.rename(t,'paragraph'):e.setAttribute('indent',o,t)}})}_checkEnabled(){const e=Oi(this.editor.model.document.selection.getSelectedBlocks());if(!e||!e.is('listItem'))return!1;if(0<this._indentBy){const t=e.getAttribute('indent'),o=e.getAttribute('type');for(let n=e.previousSibling;n&&n.is('listItem')&&n.getAttribute('indent')>=t;){if(n.getAttribute('indent')==t)return n.getAttribute('type')==o;n=n.previousSibling}return!1}return!0}}class D_ extends qf{static get requires(){return[gk]}init(){const e=this.editor;e.model.schema.register('listItem',{inheritAllFrom:'$block',allowAttributes:['type','indent']});const t=e.data,o=e.editing;e.model.document.registerPostFixer((t)=>Ea(e.model,t)),o.mapper.registerViewToModelLength('li',Ma),t.mapper.registerViewToModelLength('li',Ma),o.mapper.on('modelToViewPosition',Ta),o.mapper.on('viewToModelPosition',Pa),t.mapper.on('modelToViewPosition',Ta),o.downcastDispatcher.on('insert',va,{priority:'high'}),o.downcastDispatcher.on('insert:listItem',ba),t.downcastDispatcher.on('insert',va,{priority:'high'}),t.downcastDispatcher.on('insert:listItem',ba),o.downcastDispatcher.on('attribute:type:listItem',_a),t.downcastDispatcher.on('attribute:type:listItem',_a),o.downcastDispatcher.on('attribute:indent:listItem',wa),t.downcastDispatcher.on('attribute:indent:listItem',wa),o.downcastDispatcher.on('remove:listItem',ka),o.downcastDispatcher.on('remove',ya,{priority:'low'}),t.downcastDispatcher.on('remove:listItem',ka),t.downcastDispatcher.on('remove',ya,{priority:'low'}),t.upcastDispatcher.on('element:ul',Ca,{priority:'high'}),t.upcastDispatcher.on('element:ol',Ca,{priority:'high'}),t.upcastDispatcher.on('element:li',Aa,{priority:'high'}),t.upcastDispatcher.on('element:li',xa),e.model.on('insertContent',Sa,{priority:'high'}),e.commands.add('numberedList',new N_(e,'numbered')),e.commands.add('bulletedList',new N_(e,'bulleted')),e.commands.add('indentList',new M_(e,'forward')),e.commands.add('outdentList',new M_(e,'backward'));const n=this.editor.editing.view.document;this.listenTo(n,'enter',(e,t)=>{const o=this.editor.model.document,n=o.selection.getLastPosition().parent;o.selection.isCollapsed&&'listItem'==n.name&&n.isEmpty&&(this.editor.execute('outdentList'),t.preventDefault(),e.stop())}),this.listenTo(n,'delete',(e,t)=>{if('backward'===t.direction){const o=this.editor.model.document.selection;if(o.isCollapsed){const n=o.getFirstPosition();if(n.isAtStart){const o=n.parent;if('listItem'===o.name){const n=o.previousSibling&&'listItem'===o.previousSibling.name;n||(this.editor.execute('outdentList'),t.preventDefault(),e.stop())}}}}},{priority:'high'});const i=(e)=>(t,o)=>{const n=this.editor.commands.get(e);n.isEnabled&&(this.editor.execute(e),o())};this.editor.keystrokes.set('Tab',i('indentList')),this.editor.keystrokes.set('Shift+Tab',i('outdentList'))}}var B_=o(81),L_=o.n(B_),z_=o(82),j_=o.n(z_);class q_ extends qf{init(){const e=this.editor.t;this._addButton('numberedList',e('p'),L_.a),this._addButton('bulletedList',e('q'),j_.a)}_addButton(e,t,o){const n=this.editor;n.ui.componentFactory.add(e,(i)=>{const r=n.commands.get(e),a=new kh(i);return a.set({label:t,icon:o,tooltip:!0}),a.bind('isOn','isEnabled').to(r,'value','isEnabled'),this.listenTo(a,'execute',()=>n.execute(e)),a})}}class W_ extends qf{static get requires(){return[D_,q_]}static get pluginName(){return'List'}}class U_ extends jf{}t['default']=U_,U_.build={plugins:[Ah,Ih,Mh,Uh,Yh,rb,mk,Dk,Qb,Hk,s_,l_,uk,F_,W_,gk],config:{toolbar:{items:['heading','|','bold','italic','link','bulletedList','numberedList','imageUpload','blockQuote','undo','redo']},image:{toolbar:['imageStyle:full','imageStyle:side','|','imageTextAlternative']},language:'en'}}},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(o){'object'==typeof window&&(t=window)}e.exports=t},function(e,t){'use strict';t.a=function(e){return e&&e.Object===Object?e:null}},function(e,t,o){'use strict';(function(e){var n=o(10),i=o(1),r={function:!0,object:!0},a=r[typeof exports]&&exports&&!exports.nodeType?exports:void 0,s=r[typeof e]&&e&&!e.nodeType?e:void 0,l=s&&s.exports===a?a:void 0,d=l?i.a.Buffer:void 0,c=d?function(e){return e instanceof d}:Object(n.a)(!1);t.a=c}).call(t,o(2)(e))},function(e,t){'use strict';t.a=function(e){return function(){return e}}},function(e,t,o){var n=o(12);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:999;--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:#77baf8;--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-focus-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-focus-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-focus-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-item-background-hover:var(--ck-color-base-foreground);--ck-color-list-item-background-active:var(--ck-color-base-active);--ck-color-list-item-background-active-focus:var(--ck-color-base-active-focus);--ck-color-list-item-text-active:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow:0 0 3px var(--ck-color-focus-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}'},function(e){e.exports=function(e){var t='undefined'!=typeof window&&window.location;if(!t)throw new Error('fixUrls requires window.location');if(!e||'string'!=typeof e)return e;var o=t.protocol+'//'+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,'/'),i=e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var r;return r=0===i.indexOf('//')?i:0===i.indexOf('/')?o+i:n+i.replace(/^\.\//,''),'url('+JSON.stringify(r)+')'});return i}},function(e,t,o){var n=o(15);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}'},function(e,t,o){var n=o(17);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}'},function(e,t,o){var n=o(19);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}'},function(e,t,o){var n=o(21);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}'},function(e,t,o){var n=o(23);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}'},function(e,t,o){var n=o(25);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}'},function(e,t,o){var n=o(27);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:transparent transparent var(--ck-color-tooltip-background);border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(e,t,o){var n=o(29);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}.ck.ck-button,a.ck.ck-button{position:relative}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):focus,.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):focus,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-focus-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):focus,.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):focus,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-focus-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):focus,.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):focus,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-focus-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" fill="#000" fill-rule="nonzero"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" fill="#000" fill-rule="nonzero"/></svg>'},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" fill="#000" fill-rule="evenodd"/></svg>\n'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" fill="#333" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563zM11 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563z"/></g></svg>\n'},function(e,t,o){var n=o(36);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}'},function(e,t,o){var n=o(38);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports=':root{--ck-widget-outline-thickness:3px;--ck-color-widget-border-blurred:#dedede;--ck-color-widget-border-hover:#ffd15c;--ck-color-widget-editable-focused-background:var(--ck-color-base-background),}.ck .ck-widget{margin:var(--ck-spacing-standard) 0;padding:0}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck-editor__editable.ck-blurred .ck .ck-widget.ck-widget_selected{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-blurred)}.ck .ck-widget:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-hover)}.ck .ck-widget .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-widget .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-widget .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focused-background)}'},function(e,t,o){var n=o(40);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports=':root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}'},function(e,t,o){var n=o(42);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}'},function(e,t,o){var n=o(44);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012.9.093 1.676.675 2.017 1.513.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z" fill="#000" fill-rule="evenodd"/></svg>'},function(e,t,o){var n=o(47);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck-content .image{clear:both;text-align:center}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}'},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#F7F7F7" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n'},function(e,t,o){var n=o(51);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck-content .image{position:relative;overflow:hidden}.ck-content .image.ck-infinite-progress:before{content:"";position:absolute;top:0;right:0}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:a .7s}.ck-content .image.ck-infinite-progress:before{width:var(--ck-image-upload-progress-line-width);height:2px;background:var(--ck-color-upload-infinite-background);animation-name:b;animation-duration:1.5s;animation-iteration-count:infinite;transition-timing-function:linear}.ck-content .image.ck-image-upload-placeholder>img{width:100%}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes a{0%{opacity:0}to{opacity:1}}@keyframes b{0%{width:var(--ck-image-upload-progress-line-width);right:0}50%{width:calc(var(--ck-image-upload-progress-line-width) * 1.5)}to{right:100%}}'},function(e,t,o){var n=o(53);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default);position:absolute;top:50%;transform:translate3d(0,-50%,0)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute;left:0;transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button{padding-right:calc(2.5 * var(--ck-spacing-standard))}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{border-radius:0;box-shadow:var(--ck-drop-shadow),0 0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}'},function(e){e.exports='<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" fill="#000" fill-rule="evenodd"/></svg>'},function(e,t,o){var n=o(56);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.ck.ck-list .ck-list__item{display:block}.ck.ck-list .ck-list__item:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{padding:var(--ck-spacing-medium);cursor:default;min-width:12em}.ck.ck-list__item:focus,.ck.ck-list__item:hover{background:var(--ck-color-list-item-background-hover)}.ck.ck-list__item:focus{box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-list__item_active{background:var(--ck-color-list-item-background-active);color:var(--ck-color-list-item-text-active)}.ck.ck-list__item_active:focus,.ck.ck-list__item_active:hover{background:var(--ck-color-list-item-background-active-focus)}'},function(e,t,o){var n=o(58);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}'},function(e,t,o){var n=o(60);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list>.ck-list__item{line-height:calc(.8*var(--ck-line-height-base)*var(--ck-font-size-base));padding:calc(.4*var(--ck-line-height-base)*var(--ck-font-size-base))}'},function(e){e.exports='.ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}'},function(e,t,o){var n=o(63);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}'},function(e,t,o){var n=o(65);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}'},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM4.5 7.5V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06C3.475 13.5 3 13.093 3 12.59V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z" fill-rule="nonzero"/></svg>'},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM6.5 7.5V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM2 7.5V6h5.674v1.5zM2 10.5V9h5.674v1.5zM2 13.5V12h5.674v1.5zM10.5 7.5V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(e,t,o){var n=o(71);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports=':root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}'},function(e,t,o){var n=o(73);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck .ck-link_selected{background:var(--ck-color-link-selected-background)}'},function(e,t,o){var n=o(75);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-link-form .ck-labeled-input{display:inline-block}.ck.ck-link-form .ck-label{display:none}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zM16.927 17.695l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></g></svg>'},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(e,t,o){var n=o(79);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1},function(e){e.exports='.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-standard);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions>:not(:first-child){margin-left:var(--ck-spacing-standard)}'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" fill="#000" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" fill="#454545" fill-rule="evenodd"/></svg>'},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" fill="#454545" fill-rule="evenodd"/></svg>'}])['default']});
//# sourceMappingURL=ckeditor.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
//# sourceMappingURL=ckeditor.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCkeditor=t():e.VueCkeditor=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-ckeditor",render:function(e){return e("div")},props:{config:{default:function(){return{language:"en"}},required:!1,type:Object},editors:{default:function(){return{}},required:!1,type:Object},readonly:{default:function(){return!1},required:!1,type:Boolean},type:{required:!0,type:String},value:{default:function(){return""},required:!1,type:String}},data:function(){return{instance:null}},watch:{value:function(e){var t=this.instance;null!=t&&e!==t.getData()&&t.setData(e)}},methods:{create:function(){var e=this;if(null==this.instance){var t=this.type,n=this.$VueCkeditorEditors||this.editors;if(!Object.keys(n).length)throw new Error("There are no CKEditor 5 implementations.");var r=n[t];if(null==r)throw new Error("Wrong key '"+t+"'. Allowed keys: "+Object.keys(n));r.create(this.$el,this.config).then(function(t){e.instance=t;var n=e.instance;n.isReadOnly=e.readonly,n.model.document.on("change",e.update),n.setData(e.value)}).catch(function(e){console.log(e)})}},destroy:function(){var e=this.instance;null!=e&&e.destroy()},update:function(){var e=this.instance.getData();this.value!==e&&this.$emit("input",e)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var u={version:"0.1.5",component:i.default,plugin:{install:function(e,t){var n=t.name,r=t.editors;e.prototype.$VueCkeditorEditors=r||{},e.component(n||i.default.name,i.default)}}};t.default=u}]).default});
//# sourceMappingURL=vue-ckeditor5.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(24);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(38);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(39);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(33);
var dispatchRequest = __webpack_require__(34);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(35);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(36);
var combineURLs = __webpack_require__(37);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comment_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_article_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_article_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_seo_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_seo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_seo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_preview_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_preview_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_preview_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shops_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shops_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_shops_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue2_datepicker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ckeditor_ckeditor5_build_classic__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ckeditor_ckeditor5_build_classic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ckeditor_ckeditor5_build_classic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ckeditor_ckeditor5_build_balloon__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ckeditor_ckeditor5_build_balloon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ckeditor_ckeditor5_build_balloon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_ckeditor5__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_ckeditor5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue_ckeditor5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.













var options = {
    editors: {
        classic: __WEBPACK_IMPORTED_MODULE_7__ckeditor_ckeditor5_build_classic___default.a,
        balloon: __WEBPACK_IMPORTED_MODULE_8__ckeditor_ckeditor5_build_balloon___default.a
    },
    name: 'ckeditor',
    config: {
        language: 'ru',
        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
        height: 900
    }
};
var axi = __WEBPACK_IMPORTED_MODULE_10_axios___default.a.create({
    //baseURL: 'http://goome.test',
    // timeout: 1000,
    headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') }
});
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_9_vue_ckeditor5___default.a.plugin, options);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

/* eslint-disable no-new */
var cms = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#section',
    data: {
        status: 2,
        token: '',
        statusName: 'Товары',
        filter: 0,
        activeSection: 0,
        createProductBlock: false,
        createShopBlock: true,
        createArticleBlock: false,
        newOption: '',
        newPhone: '',
        newEmail: '',
        newProductStatus: 1,
        newShopStatus: 1,
        newArticleStatus: 1,
        newCommentStatus: 1,
        sectionStatus: { id: 0 },
        pageStatus: 1,
        pagesStatus: 1,
        createStructureBlock: 0,
        createFilterBlock: 0,
        newProduct: {
            id: 0, img: false, price: 0, name: 'test', shop_id: '', brand: '', optionsName: '',
            options: [],
            rating: 0, like: 0, published: false, deleted: false, sale: [], stock: [],
            colors: [],
            sizes: [],
            activeOptions: [],
            description: '', category_id: 0,
            sizePrices: [], colorPrices: [], optionPrices: [],
            images: [], seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' }
        },
        productTemplate: {
            id: 0, img: false, price: 0, name: '', optionsName: '', options: [],
            rating: 0, like: 0, published: false, deleted: false,
            colors: [],
            sizes: [],
            activeOptions: [],
            description: '', category_id: 0,
            sizePrices: [], colorPrices: [], optionPrices: [],
            brand: '', sale: [], stock: [], oldPrice: 0, shop_id: 0,
            images: [], seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' }
        },
        newShop: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: '', stock_description: '',
            goods: 0, allow_goods: 200, discounts: 0, allow_discounts: 25, stock: 0, allow_stocks: 25,
            sales: 0, published: false, deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' }
        },
        newOurShop: {
            id: 0, published: true, img: '', name: '', description: '', address: ''
        },
        shopTemplate: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: '', stock_description: '',
            goods: 0, allow_goods: 200, discounts: 0, allow_discounts: 25, stock: 0, allow_stocks: 25,
            sales: 0, published: false, deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' }
        },
        newArticle: { id: 0, img: "", published: false, deleted: false, title: "",
            description: "Здесь краткое описание", content: "Здесь текст статьи",
            views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '',
            seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        articleTemplate: { id: 0, img: "", published: false, deleted: false, title: "", description: "Здесь краткое описание", content: "Здесь текст статьи", views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        newCategory: { id: 0, published: false, illustration: '', section_id: 0, title: '', description: '', deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        categoryTemplate: { id: 0, published: false, illustration: '', section_id: 0, title: '', description: '', deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        newSection: { id: 0, img: '', published: false, description: '', title: '', deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        sectionTemplate: { id: 0, img: '', published: false, description: '', title: '', deleted: false, seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } },
        newColor: { id: 0, name: '', code: '', published: false, deleted: false },
        colorTemplate: { id: 0, name: '', code: '', published: false, deleted: false },
        newSize: { id: 0, name: '', description: 'описание/пояснение размера', published: false, deleted: false },
        sizeTemplate: { id: 0, name: '', description: 'описание/пояснение размера', published: false, deleted: false },
        products: [],
        shops: [],
        users: [{ id: 244, banned: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', comments: 23, favorites: 9, purchases: 8, email: 'fortifelx@gmail.com', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }, { id: 221, banned: false, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', comments: 3, favorites: 13, purchases: 12, email: 'temposte@gmail.com', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }, { id: 132, banned: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', comments: 17, favorites: 2, purchases: 11, email: 'agrich@gmail.com', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }, { id: 132, banned: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', comments: 7, favorites: 2, purchases: 11, email: 'kalatay@mail.ru', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }, { id: 132, banned: false, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', comments: 1, favorites: 4, purchases: 2, email: 'elena@mail.ru', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }, { id: 132, banned: true, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', comments: 0, favorites: 0, purchases: 1, email: 'oksana@gmail.com', contacts: 'не указано', seo: { title: '', type: '', image: '', url: '', description: '', video: '', locale: '', site_name: '' } }],
        articles: [],
        comments: [{ id: 64, published: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', productImg: '/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 124, productShop: 'Техас и джинсы', rating: 4, date: '28/06/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 63, published: true, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', productImg: '/assets/img/goods/2.jpg', productName: 'Кофта "плебей"', productPrice: 120, productRating: 4, productLike: 224, productShop: 'Штаны и кофты', rating: 4, date: '21/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 122, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg: '/assets/img/goods/3.jpg', productName: 'Штаны "Мачо"', productPrice: 500, productRating: 3, productLike: 510, productShop: 'Ляля и Диля', rating: 4, date: '12/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 61, published: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', productImg: '/assets/img/goods/4.jpg', productName: 'Ремень "Мачо"', productPrice: 1600, productRating: 4, productLike: 92, productShop: 'Мачо и Версачо', rating: 4, date: '28/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 26, published: false, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg: '/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 2600, productRating: 5, productLike: 21, productShop: 'Мачо и Версачо', rating: 4, date: '21/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 164, published: false, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', productImg: '/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 600, productRating: 5, productLike: 5, productShop: 'Техас и джинсы', rating: 4, date: '28/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 92, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg: '/assets/img/goods/6.jpg', productName: 'Туфли "Ляля"', productPrice: 600, productRating: 2, productLike: 687, productShop: 'Ляля и Диля', rating: 4, date: '22/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }, { id: 36, published: true, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', productImg: '/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 512, productShop: 'Техас и джинсы', rating: 4, date: '08/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал' }],
        sections: [],
        categories: [],
        colors: [],
        sizes: [],
        pages: []

    },
    methods: {
        chooseActiveSection: function chooseActiveSection(event) {
            this.activeSection = event.target.value;
        },
        showInLog: function showInLog(tr) {
            this.sectionStatus = tr;
            console.log(tr);
        },

        changeStatus: function changeStatus(x, name) {
            this.status = x;
            this.statusName = name;
        },

        showProducts: function showProducts(x, name) {
            this.status = x;
            this.statusName = name;
            this.getProducts();
            this.getColors();
            this.getCategorys();
            this.getSections();
            this.getShops();
            this.getSizes();
        },
        showShop: function showShop(x, name) {
            this.status = x;
            this.statusName = name;
            this.getShops();
        },
        showArticles: function showArticles(x, name) {
            this.status = x;
            this.statusName = name;
            this.getArticles();
        },
        showStructure: function showStructure(x, name) {
            this.status = x;
            this.statusName = name;
            this.getSections();
            this.getCategorys();
        },
        showFilters: function showFilters(x, name) {
            this.status = x;
            this.statusName = name;
            this.getColors();
            this.getSizes();
        },
        showPages: function showPages(x, name) {
            this.status = x;
            this.statusName = name;
            this.getPage();
        },

        addOption: function addOption() {
            this.newProduct.options.push(this.newOption);
            this.newOption = '';
        },
        addPhone: function addPhone() {
            this.newShop.phones.push(this.newPhone);
            this.newPhone = '';
        },
        addOurShop: function addOurShop() {
            var newShops = this.pages[7].shops;
            newShops.push(this.newOurShop);
            //   this.pages[7].shops.forEach(function(el, i){
            //       el.id = i;
            // })
            newShops[newShops.length - 1].id = newShops.length;
        },
        saveOurShop: function saveOurShop() {
            this.$on('saveOurShops', function (shop) {
                this.pages[7].shops[shop.id - 1] = shop;
                console.log('here');
            });
        },

        removeOurShop: function removeOurShop(i) {
            this.pages[7].shops.splice(i, 1);
        },
        removeOption: function removeOption(e) {
            var i = e.target.dataset.id;
            this.newProduct.options.splice(i, 1);
        },
        removePhone: function removePhone(e) {
            var i = e.target.dataset.id;
            this.newShop.phones.splice(i, 1);
        },
        removeEmail: function removeEmail(e) {
            var i = e.target.dataset.id;
            this.newShop.emails.splice(i, 1);
        },

        addSizeToProduct: function addSizeToProduct() {
            var sizes = this.$refs.new_product_size;
            this.newProduct.sizes.length = 0;
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].checked) {
                    this.newProduct.sizes.push(sizes[i].value);
                    // this.newProduct.sizes[i] = sizes[i].value;
                }
            }
            console.log(this.newProduct.sizes);
        },
        addEmail: function addEmail() {
            this.newShop.emails.push(this.newEmail);
            this.newEmail = '';
        },
        addColorToProduct: function addColorToProduct() {
            var colors = this.$refs.new_product_color;
            this.newProduct.colors.length = 0;
            for (var i = 0; i < colors.length; i++) {
                if (colors[i].checked) {
                    this.newProduct.colors.push(colors[i].value);
                }
            }
        },
        addOptionToProduct: function addOptionToProduct() {
            var options = this.$refs.new_product_option;
            this.newProduct.activeOptions.length = 0;
            for (var i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    this.newProduct.activeOptions.push(options[i].value);
                }
            }
        },

        previewThumbnail: function previewThumbnail(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    // vm.newProduct.img = input.files[0];
                    vm.newProduct.img = e.target.result;
                    // var form_data = new FormData();
                    // form_data.append('image', input.files[0]);
                    // vm.newProduct.img = form_data;
                    // console.log(form_data);
                    // console.log(e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewArticleImg: function previewArticleImg(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.newArticle.img = e.target.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewCategoryImg: function previewCategoryImg(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.newCategory.illustration = e.target.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewSectionImg: function previewSectionImg(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.newSection.img = e.target.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewAboutPageImg: function previewAboutPageImg(num, event) {
            var input = event.target;
            console.log(num);

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.pages[num].image = e.target.result;
                };
                var file = event.target.files || event.dataTransfer.files;
                vm.pages[num].dataImage = file[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        showThumbnail: function showThumbnail(event) {
            var input = event.target;
            var reader = [];
            if (input.files && input.files[0]) {
                for (var i = 0; i < input.files.length; i++) {
                    reader[i] = new FileReader();
                    reader[i].readAsDataURL(input.files[i]);
                }
                var length = this.newProduct.images.length;
                var filesLength = input.files.length;
                var x = 0;
                var pictures = [];
                if (this.newProduct.images.length > 0) {
                    pictures = this.newProduct.images;
                }
                for (var i = length; i < filesLength + length; i++) {
                    var img = {};
                    img.id = i;
                    img.colors = [];
                    img.sizes = [];
                    img.options = [];
                    img.published = true;
                    img.deleted = false;
                    var vm = this;
                    pictures.push(img);
                    reader[x].onload = function (e) {
                        var y = 0;
                        for (var x = length; x < filesLength + length; x++) {
                            pictures[x].url = reader[y].result;
                            vm.$set(vm.newProduct.images, x, pictures[x]);
                            y++;
                        }
                        // vm.newProduct.images = pictures;
                    };
                    x++;
                }
            };
        },

        updateProduct: function updateProduct(product) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.productTemplate));
            var data = JSON.parse(JSON.stringify(product));

            var form_data = new FormData();
            data.options = JSON.stringify(data.options);
            data.colors = JSON.stringify(data.colors);
            data.sizes = JSON.stringify(data.sizes);
            data.activeOptions = JSON.stringify(data.activeOptions);
            data.sizePrices = JSON.stringify(data.sizePrices);
            data.colorPrices = JSON.stringify(data.colorPrices);
            data.optionPrices = JSON.stringify(data.optionPrices);
            data.sale = JSON.stringify(data.sale);
            data.stock = JSON.stringify(data.stock);
            data.seo = JSON.stringify(data.seo);

            if (vm.$refs.product_images != undefined) {
                data.images.forEach(function (el, i) {
                    el.data = vm.$refs.product_images.files[i];
                });
                data.images.forEach(function (el, i) {
                    if (el.deleted === true) {
                        data.images.splice(i, 1);
                    }
                });
            }

            data.images = JSON.stringify(data.images);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (vm.$refs.main_img != undefined) {
                form_data.append('img', vm.$refs.main_img.files[0]);
            }

            if (data.id == 0) {
                axi.post('/cabinet/products', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getProducts();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/products/updateProduct', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getProducts();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newProduct = template;
        },
        updateShop: function updateShop(shop) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.shopTemplate));
            var data = JSON.parse(JSON.stringify(shop));

            var form_data = new FormData();
            data['email'] = data.emails[0];
            data.seo = JSON.stringify(data.seo);
            data.emails = JSON.stringify(data.emails);
            data.phones = JSON.stringify(data.phones);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            console.log(data);
            if (data.id == 0) {
                axi.post('/cabinet/shops', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getShops();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                axi.post('/cabinet/shops/updateShop', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getShops();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newShop = template;
        },
        updateArticle: function updateArticle(article) {

            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.articleTemplate));
            var data = JSON.parse(JSON.stringify(article));

            var form_data = new FormData();
            data.tags = JSON.stringify(data.tags);
            data.seo = JSON.stringify(data.seo);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (vm.$refs.article_img) {
                form_data.append('img', vm.$refs.article_img.files[0]);
            }
            if (data.id == 0) {
                axi.post('/cabinet/articles', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getArticles();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/articles/updateArticle', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getArticles();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newArticle = template;
        },
        updateComment: function updateComment(comment) {
            console.log('send article data to server');
        },
        updateSection: function updateSection(section) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.sectionTemplate));
            var data = JSON.parse(JSON.stringify(section));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (vm.$refs.section_img) {
                form_data.append('img', vm.$refs.section_img.files[0]);
            }
            if (data.id == 0) {
                axi.post('/cabinet/sections', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getSections();
                    vm.getCategorys();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/sections/updateSection', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getSections();
                    vm.getCategorys();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newSection = template;
        },
        updateCategory: function updateCategory(category) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.categoryTemplate));
            var data = JSON.parse(JSON.stringify(category));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (vm.$refs.category_img) {
                form_data.append('illustration', vm.$refs.category_img.files[0]);
            }
            if (data.id == 0) {
                axi.post('/cabinet/categories', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getCategorys();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/categories/updateCategory', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getCategorys();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newCategory = template;
        },
        updateColor: function updateColor(color) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.colorTemplate));
            var data = JSON.parse(JSON.stringify(color));

            var form_data = new FormData();

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (data.id == 0) {
                axi.post('/cabinet/colors', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getColors();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/colors/updateColor', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getColors();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newColor = template;
        },
        updateSize: function updateSize(size) {
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.sizeTemplate));
            var data = JSON.parse(JSON.stringify(size));

            var form_data = new FormData();

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            if (data.id == 0) {
                axi.post('/cabinet/sizes', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getSizes();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/sizes/updateSize', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getSizes();
                }).catch(function (error) {
                    console.log(error);
                });
            }
            vm.newSize = template;
        },

        deleteProduct: function deleteProduct(product) {
            product.deleted = !product.deleted;
            this.updateProduct(product);
        },
        deleteArticle: function deleteArticle(article) {
            article.deleted = !article.deleted;
            this.updateArticle(article);
        },
        deleteCategory: function deleteCategory(category) {
            category.deleted = !category.deleted;
            this.updateCategory(category);
        },
        deleteSection: function deleteSection(section) {
            section.deleted = !section.deleted;
            this.updateSection(section);
        },
        deleteColor: function deleteColor(color) {
            color.deleted = !color.deleted;
            this.updateColor(color);
        },
        deleteShop: function deleteShop(shop) {
            shop.deleted = !shop.deleted;
            this.updateShop(shop);
        },
        deleteSize: function deleteSize(size) {
            size.deleted = !size.deleted;
            this.updateSize(size);
        },

        publishProduct: function publishProduct(product) {
            product.published = !product.published;
            this.updateProduct(product);
            // this.getProducts();
        },
        publishArticle: function publishArticle(article) {
            article.published = !article.published;
            this.updateArticle(article);
        },
        publishComment: function publishComment(comment) {
            comment.published = !comment.published;
            this.updateComment(comment);
        },
        publishShop: function publishShop(shop) {
            shop.published = !shop.published;
            this.updateShop(shop);
        },
        publishCategory: function publishCategory(category) {
            category.published = !category.published;
            this.updateCategory(category);
        },
        publishSection: function publishSection(section) {
            section.published = !section.published;
            this.updateSection(section);
        },
        publishColor: function publishColor(color) {
            color.published = !color.published;
            this.updateColor(color);
        },
        publishSize: function publishSize(size) {
            size.published = !size.published;
            this.updateSize(size);
        },

        createProduct: function createProduct() {
            this.newProduct = this.productTemplate;
            this.createProductBlock = true;
        },
        createArticle: function createArticle() {
            this.newArticle = this.articleTemplate;
            this.createArticleBlock = true;
        },
        createShop: function createShop() {
            this.newShop = this.shopTemplate;
            this.createShopBlock = true;
        },
        createCategory: function createCategory() {
            this.newCategory = this.categoryTemplate;
            this.createStructureBlock = 1;
        },
        createSection: function createSection() {
            // this.newSection = this.sectionTemplate;
            this.createStructureBlock = 2;
        },
        createColor: function createColor() {
            // this.newColor = this.colorTemplate;
            this.createFilterBlock = 1;
        },
        createSize: function createSize() {
            // this.newSize = this.sizeTemplate;
            this.createFilterBlock = 2;
        },

        changeProduct: function changeProduct(product) {
            this.newProduct = product;
            for (var i = 0; i < this.categories.length; i++) {
                if (product.category_id == this.categories[i].id) {
                    this.activeSection = this.categories[i].section_id;
                }
            }
            this.createProductBlock = true;
        },
        changeShop: function changeShop(shop) {
            this.newShop = shop;
            this.createShopBlock = true;
        },
        changeArticle: function changeArticle(article) {
            this.newArticle = article;
            this.createArticleBlock = true;
        },
        changeCategory: function changeCategory(category) {
            this.newCategory = category;
            this.createStructureBlock = 1;
        },
        changeSection: function changeSection(section) {
            // if(section === false) {
            //     // this.newSection = this.sectionStatus;
            //     this.newSection = this.sectionTemplate;
            // } else {
            //     this.newSection = section;
            // }
            this.createStructureBlock = 2;
        },
        changeColor: function changeColor(color) {
            this.newColor = color;
            this.createFilterBlock = 1;
        },
        changeSize: function changeSize(size) {
            this.newSize = size;
            this.createFilterBlock = 2;
        },

        saveProduct: function saveProduct() {
            this.updateProduct(this.newProduct);
            this.getProducts();
            this.createProductBlock = false;
        },
        saveShop: function saveShop() {
            this.updateShop(this.newShop);
            this.getShops();
        },
        saveArticle: function saveArticle() {
            this.updateArticle(this.newArticle);
            this.getArticles();
            this.createArticleBlock = false;
        },
        saveCategory: function saveCategory() {
            this.updateCategory(this.newCategory);
            this.getCategorys();
            this.createStructureBlock = 0;
        },
        saveSection: function saveSection() {
            this.updateSection(this.newSection);
            this.getSections();
            this.createStructureBlock = 0;
        },
        saveColor: function saveColor() {
            this.updateColor(this.newColor);
            this.getColors();
            this.createFilterBlock = 0;
        },
        saveSize: function saveSize() {
            this.updateSize(this.newSize);
            this.getSizes();
            this.createFilterBlock = 0;
        },
        savePage: function savePage(page) {
            var data = JSON.parse(JSON.stringify(page));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);
            data.shops = JSON.stringify(data.shops);
            data.facebook = JSON.stringify(data.facebook);
            data.instagram = JSON.stringify(data.instagram);
            data.telegram = JSON.stringify(data.telegram);
            data.vkontakte = JSON.stringify(data.vkontakte);
            data.watsup = JSON.stringify(data.watsup);
            var vm = this;
            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            form_data.append('image', page.dataImage);
            console.log(page.dataImage);
            if (data.id == 0) {
                axi.post('/cabinet/pages', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getPage();
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                console.log('edit');
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/pages/updatePage', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                    vm.getPage();
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        saveContacts: function saveContacts(page) {
            var vm = this;
            var data = JSON.parse(JSON.stringify(page));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);
            console.log(data.shops);
            data.shops = JSON.stringify(data.shops);
            data.facebook = JSON.stringify(data.facebook);
            data.instagram = JSON.stringify(data.instagram);
            data.telegram = JSON.stringify(data.telegram);
            data.vkontakte = JSON.stringify(data.vkontakte);
            data.watsup = JSON.stringify(data.watsup);

            for (var key in data) {
                if (data[key] === true) {
                    data[key] = 1;
                }
                if (data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key, data[key]);
            }
            form_data.append('image', page.dataImage);
            console.log(page.dataImage);
            if (data.id == 0) {
                console.log('test');
                axi.post('/cabinet/pages', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_10_axios___default.a.post('/cabinet/pages/updatePage', form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },

        getProducts: function getProducts(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/products').then(function (response) {
                var data = response.data;

                for (var i = 0; i < data.length; i++) {
                    data[i].options = JSON.parse(data[i].options);
                    data[i].colors = JSON.parse(data[i].colors);
                    data[i].sizes = JSON.parse(data[i].sizes);
                    data[i].activeOptions = JSON.parse(data[i].activeOptions);
                    data[i].sizePrices = JSON.parse(data[i].sizePrices);
                    data[i].colorPrices = JSON.parse(data[i].colorPrices);
                    data[i].optionPrices = JSON.parse(data[i].optionPrices);
                    data[i].sale = JSON.parse(data[i].sale);
                    data[i].stock = JSON.parse(data[i].stock);
                    data[i].seo = JSON.parse(data[i].seo);
                    data[i].images = JSON.parse(data[i].images);
                    data[i].shop = data[i].shop_id;
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.products = data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getPage: function getPage(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/pages').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].shops = JSON.parse(data[i].shops);
                    data[i].seo = JSON.parse(data[i].seo);
                    data[i].facebook = JSON.parse(data[i].facebook);
                    data[i].instagram = JSON.parse(data[i].instagram);
                    data[i].telegram = JSON.parse(data[i].telegram);
                    data[i].vkontakte = JSON.parse(data[i].vkontakte);
                    data[i].watsup = JSON.parse(data[i].watsup);
                }
                vm.pages = data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getShops: function getShops(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/shop').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].seo = JSON.parse(data[i].seo);
                    data[i].phones = JSON.parse(data[i].phones);
                    data[i].emails = JSON.parse(data[i].emails);
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.shops = data;
                vm.newShop = data[0];
            }).catch(function (error) {
                console.log(error);
            });
        },
        getArticles: function getArticles(options) {
            var vm = this;
            console.log('here');
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/articles').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].seo = JSON.parse(data[i].seo);
                    data[i].tags = JSON.parse(data[i].tags);
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.articles = data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getCategorys: function getCategorys(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/categories').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].seo = JSON.parse(data[i].seo);
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.categories = data;
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getSections: function getSections(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/sections').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    data[i].seo = JSON.parse(data[i].seo);
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.sections = data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getColors: function getColors(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/colors').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.colors = data;
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
        },
        getSizes: function getSizes(options) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_10_axios___default.a.get('/cabinet/sizes').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].deleted_at != null) {
                        data[i].deleted = 1;
                    } else {
                        data[i].deleted = 0;
                    }
                }
                vm.sizes = data;
                console.log(data);
            }).catch(function (error) {
                console.log(error);
            });
        },

        cancelShop: function cancelShop(options) {
            this.getShops();
        },
        cancelArticle: function cancelArticle(options) {
            this.createArticleBlock = false;
            this.getArticles();
        },
        cancelCategory: function cancelCategory(options) {
            this.createStructureBlock = 0;
            this.getSections();
            this.getCategorys();
        },
        cancelSection: function cancelSection(options) {
            this.createStructureBlock = 0;
            this.getSections();
            this.getCategorys();
        },
        cancelProduct: function cancelProduct() {
            this.createProductBlock = false;
            this.getProducts();
        },
        cancelSize: function cancelSize() {
            this.createFilterBlock = 0;
            this.getSizes();
        },
        cancelColor: function cancelColor() {
            this.createFilterBlock = 0;
            this.getColors();
        },
        cancelPage: function cancelPage() {
            this.getPage();
        },

        chooseSection: function chooseSection() {
            var category = this.newCategory;
            var sections = this.sections;
            var section_id = category.section_id;
            for (var i = 0; i < this.sections.length; i++) {
                if (sections[i].id == section_id) {
                    category.sectionName = sections[i].title;
                    category.sectionDescription = sections[i].description;
                }
            }
        },
        takeSection: function takeSection(event) {
            var tr = event.target.value;
            if (tr === 'All') {
                console.log('here');
                this.newSection = this.sectionTemplate;
                this.sectionStatus.id = 0;
            } else {
                this.newSection = this.sections[event.target.value];
                this.sectionStatus.id = this.sections[event.target.value].id;
            }
        },
        importProduct: function importProduct() {}
    },
    computed: {},
    components: { DatePicker: __WEBPACK_IMPORTED_MODULE_6_vue2_datepicker___default.a, comment: __WEBPACK_IMPORTED_MODULE_1__components_comment_vue___default.a, articletable: __WEBPACK_IMPORTED_MODULE_2__components_article_vue___default.a, seo: __WEBPACK_IMPORTED_MODULE_3__components_seo_vue___default.a, preview: __WEBPACK_IMPORTED_MODULE_4__components_preview_vue___default.a, ourshops: __WEBPACK_IMPORTED_MODULE_5__components_shops_vue___default.a },
    beforeMount: function beforeMount() {
        this.getProducts();
        this.getColors();
        this.getSizes();
        this.getShops();
        this.getSections();
        this.getCategorys();
    }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(75)
/* template */
var __vue_template__ = __webpack_require__(76)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0fb84773"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\cabinet\\js\\components\\comment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fb84773", Component.options)
  } else {
    hotAPI.reload("data-v-0fb84773", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5c6f4ae0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0fb84773\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0fb84773\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "comment",
    props: ['target', 'id', 'published', 'avatar', 'name', 'instagram', 'productImg', 'productName', 'productPrice', 'productRating', 'productLike', 'productShop', 'rating', 'date', 'content'],
    data: function data() {
        return {};
    }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "comment" }, [
    _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(_vm.id))]),
    _vm._v(" "),
    _c("td", [
      _c("div", { staticClass: "custom-control mr-sm-2 dark" }, [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: { type: "checkbox", id: _vm.id + "customControlAutosizing" }
        }),
        _vm._v(" "),
        _c("label", {
          staticClass: "custom-control-label",
          attrs: { for: _vm.id + "customControlAutosizing" }
        })
      ])
    ]),
    _vm._v(" "),
    _c("td", [
      _c("figure", { staticClass: "figure" }, [
        _c("figcaption", { staticClass: "figure-caption" }, [
          _vm._v("Магазин: " + _vm._s(_vm.productShop) + "\n            ")
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "product_img img-thumbnail img-fluid figure-img",
          attrs: { src: _vm.productImg, alt: "" }
        }),
        _vm._v(" "),
        _c("figcaption", { staticClass: "figure-caption" }, [
          _vm._v(_vm._s(_vm.productName) + "\n            ")
        ]),
        _vm._v(" "),
        _c("figcaption", { staticClass: "figure-caption" }, [
          _vm._v("Цена: от " + _vm._s(_vm.productPrice) + " руб.\n            ")
        ]),
        _vm._v(" "),
        _c(
          "figcaption",
          { staticClass: "figure-caption" },
          [
            _vm._l(_vm.productRating, function(n) {
              return _c("img", {
                attrs: { src: "/assets/iconic/svg/star.svg", alt: "" }
              })
            }),
            _vm._v("\n                " + _vm._s(_vm.productLike)),
            _c("img", {
              attrs: { src: "/assets/iconic/svg/thumb-up.svg", alt: "" }
            })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("td", [
      _c("figure", { staticClass: "figure" }, [
        _c("figcaption", { staticClass: "figure-caption" }, [
          _vm._v("\n                " + _vm._s(_vm.name) + "\n            ")
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "comment_img img-thumbnail img-fluid figure-img",
          attrs: { src: _vm.avatar, alt: "" }
        }),
        _vm._v(" "),
        _c("figcaption", { staticClass: "figure-caption" }, [
          _vm._v("Instagram: " + _vm._s(_vm.instagram) + "\n            ")
        ])
      ])
    ]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.date))]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.content))]),
    _vm._v(" "),
    _c(
      "td",
      _vm._l(_vm.rating, function(n) {
        return _c("img", {
          attrs: { src: "/assets/iconic/svg/star.svg", alt: "" }
        })
      })
    ),
    _vm._v(" "),
    _c("td", [
      _c(
        "div",
        {
          staticClass: "btn-group-vertical",
          attrs: { role: "group", "aria-label": "Basic example" }
        },
        [
          _c(
            "button",
            { staticClass: "btn btn-info", attrs: { type: "button" } },
            [_vm._v("Смотреть")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-warning", attrs: { type: "button" } },
            [_vm._v("Редактировать")]
          ),
          _vm._v(" "),
          !_vm.published
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.$emit("publish")
                    }
                  }
                },
                [_vm._v("\n                Разрешить\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.published
            ? _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.$emit("publish")
                    }
                  }
                },
                [_vm._v("\n                Запретить\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-danger", attrs: { type: "button" } },
            [_vm._v("Удалить")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0fb84773", module.exports)
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(81)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79c7faec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\cabinet\\js\\components\\article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79c7faec", Component.options)
  } else {
    hotAPI.reload("data-v-79c7faec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("63844212", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79c7faec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79c7faec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "articletable"
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", { staticClass: "product" }, [
    _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(_vm.article.id))]),
    _vm._v(" "),
    _c("td", [
      _c("div", { staticClass: "custom-control mr-sm-2 dark" }, [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: {
            type: "checkbox",
            id: _vm.article.id + "customControlAutosizing"
          }
        }),
        _vm._v(" "),
        _c("label", {
          staticClass: "custom-control-label",
          attrs: { for: _vm.article.id + "customControlAutosizing" }
        })
      ])
    ]),
    _vm._v(" "),
    _c("td", [
      _c("img", {
        staticClass: "article_img img-thumbnail img-fluid",
        attrs: { src: _vm.article.img, alt: "" }
      })
    ]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.article.title))]),
    _vm._v(" "),
    _c("td", [_vm._v(_vm._s(_vm.article.description))]),
    _vm._v(" "),
    _c("td", [
      _c("div", { staticClass: "input-group mb-3" }, [
        _c("div", { staticClass: "input-group-prepend" }, [
          _c("span", { staticClass: "input-group-text" }, [
            _vm._v(_vm._s(_vm.article.views)),
            _c("img", { attrs: { src: "/assets/iconic/svg/eye.svg", alt: "" } })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "input-group-text" }, [
            _vm._v(_vm._s(_vm.article.like)),
            _c("img", {
              attrs: { src: "/assets/iconic/svg/thumb-up.svg", alt: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group-append" }, [
          _c("span", { staticClass: "input-group-text" }, [
            _vm._v(_vm._s(_vm.article.shares)),
            _c("img", {
              attrs: { src: "/assets/iconic/svg/share.svg", alt: "" }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("td", [
      _c(
        "div",
        {
          staticClass: "btn-group-vertical",
          attrs: { role: "group", "aria-label": "Basic example" }
        },
        [
          _c(
            "button",
            { staticClass: "btn btn-info", attrs: { type: "button" } },
            [_vm._v("Смотреть")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-warning",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.changeArticle(_vm.article)
                }
              }
            },
            [_vm._v("Редактировать")]
          ),
          _vm._v(" "),
          !_vm.article.published
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.publishArticle(_vm.article)
                    }
                  }
                },
                [_vm._v("\n                Опубликовать\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.article.published
            ? _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.publishArticle(_vm.article)
                    }
                  }
                },
                [_vm._v("\n                Снять с публикации\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-danger", attrs: { type: "button" } },
            [_vm._v("Удалить")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79c7faec", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(85)
/* template */
var __vue_template__ = __webpack_require__(86)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c6c1771e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\cabinet\\js\\components\\seo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6c1771e", Component.options)
  } else {
    hotAPI.reload("data-v-c6c1771e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("fa50b074", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6c1771e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6c1771e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "seo",
    props: ['value'],
    data: function data() {
        return {
            img: this.value.image
        };
    },
    methods: {
        previewSeoImg: function previewSeoImg(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.value.image = e.target.result;
                    vm.img = vm.value.image;
                };
                reader.readAsDataURL(input.files[0]);
            }
        },
        getData: function getData() {
            this.$emit('input', {
                title: this.$refs.seoTitle.value,
                url: this.$refs.seoUrl.value,
                video: this.$refs.seoVideo.value,
                site_name: this.$refs.seoSiteName.value,
                description: this.$refs.seoDescription.value,
                locale: this.$refs.seoLocale.value,
                type: this.$refs.seoType.value,
                image: this.img

            });
        }
    },
    components: {}
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("input", {
            ref: "seoTitle",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.title",
              "aria-label": "og.title",
              "aria-describedby": "basic-addon071"
            },
            domProps: { value: _vm.value.title },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("input", {
            ref: "seoType",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.type",
              "aria-label": "og.type",
              "aria-describedby": "basic-addon072"
            },
            domProps: { value: _vm.value.type },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            ref: "seoUrl",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.url",
              "aria-label": "og.url",
              "aria-describedby": "basic-addonurl"
            },
            domProps: { value: _vm.value.url },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("input", {
            ref: "seoLocale",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.locale",
              "aria-label": "og.locale",
              "aria-describedby": "basic-addonlocale"
            },
            domProps: { value: _vm.value.locale },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("input", {
            ref: "seoSiteName",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.site_name",
              "aria-label": "og.site_name",
              "aria-describedby": "basic-addonsite_name"
            },
            domProps: { value: _vm.value.site_name },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }, [
        _c("figure", { staticClass: "figure new_product_ilu" }, [
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value.image,
                expression: "value.image"
              }
            ],
            staticClass: "img-thumbnail",
            attrs: { alt: "Основное фото товара", src: _vm.value.image }
          }),
          _vm._v(" "),
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.value.image,
                expression: "!value.image"
              }
            ],
            staticClass: "img-thumbnail",
            attrs: {
              src: "/assets/iconic/svg/aperture.svg",
              alt: "Загрузите фото"
            }
          }),
          _vm._v(" "),
          _c("figcaption", { staticClass: "figure-caption" }, [
            _vm._v("og.image")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group mb-3 product_upload_image" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "custom-file" }, [
            _c("input", {
              staticClass: "custom-file-input",
              attrs: { type: "file", id: "inputGroupFile987" },
              on: { change: _vm.previewSeoImg }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "custom-file-label",
                attrs: { for: "inputGroupFile987" }
              },
              [_vm._v("\n                        Выбрать файл ")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-9" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(6),
          _vm._v(" "),
          _c("input", {
            ref: "seoVideo",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "og.video",
              "aria-label": "og.video",
              "aria-describedby": "basic-addonvideo"
            },
            domProps: { value: _vm.value.video },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _vm._m(7),
          _vm._v(" "),
          _c("textarea", {
            ref: "seoDescription",
            staticClass: "form-control",
            attrs: { "aria-label": "With textarea" },
            domProps: { value: _vm.value.description },
            on: {
              input: function($event) {
                _vm.getData()
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon071" } },
        [_vm._v("og.title")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon072" } },
        [_vm._v("og.type")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addonurl" } },
        [_vm._v("og.url")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addonlocale" } },
        [_vm._v("og.locale")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        {
          staticClass: "input-group-text",
          attrs: { id: "basic-addonsite_name" }
        },
        [_vm._v("og.site_name")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Загрузить")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addonvideo" } },
        [_vm._v("og.video")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("og.description")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c6c1771e", module.exports)
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(90)
/* template */
var __vue_template__ = __webpack_require__(91)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4560605c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\cabinet\\js\\components\\preview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4560605c", Component.options)
  } else {
    hotAPI.reload("data-v-4560605c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("712d30ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4560605c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4560605c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.product_upload_image[data-v-4560605c] {\r\n    display: inline-block;\r\n    width: 60%;\r\n    float: right;\n}\n.product_upload_image .custom-file[data-v-4560605c] {\r\n    width: 100%;\n}\n.image_wrapper img[data-v-4560605c] {\r\n        width: 40%;\n}\r\n", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "preview",
    props: ['value'],
    data: function data() {
        return {
            img: this.value
        };
    },
    methods: {
        previewImg: function previewImg(event) {
            this.$emit('input', this.img);
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.img = e.target.result;
                    // vm.img = vm.value;
                    vm.$emit('input', vm.img);
                };
                this.$emit('input', this.img);
                reader.readAsDataURL(input.files[0]);
            }
        }
    }
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12 image_wrapper" }, [
    _c("img", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        }
      ],
      staticClass: "img-thumbnail",
      attrs: { alt: "иконка", src: _vm.value }
    }),
    _vm._v(" "),
    _c("img", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.value,
          expression: "!value"
        }
      ],
      staticClass: "img-thumbnail",
      attrs: { src: "/assets/iconic/svg/aperture.svg", alt: "Загрузите фото" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "input-group mb-3 product_upload_image" }, [
      _c("div", { staticClass: "custom-file" }, [
        _c("input", {
          staticClass: "custom-file-input",
          attrs: { type: "file", id: "inputGroupFile9837" },
          on: { change: _vm.previewImg }
        }),
        _vm._v(" "),
        _c("label", {
          staticClass: "custom-file-label",
          attrs: { for: "inputGroupFile9837" }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4560605c", module.exports)
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(95)
/* template */
var __vue_template__ = __webpack_require__(96)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cc4de55e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\cabinet\\js\\components\\shops.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc4de55e", Component.options)
  } else {
    hotAPI.reload("data-v-cc4de55e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("70756841", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cc4de55e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shops.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cc4de55e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shops.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ourshops",
    props: ['value'],
    data: function data() {
        return {
            img: this.value.img,
            pub: this.value.published
        };
    },
    methods: {
        previewSeoImg: function previewSeoImg(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function (e) {
                    vm.value.img = e.target.result;
                    vm.img = vm.value.img;
                };
                // var file = event.target.files || event.dataTransfer.files;
                // this.dataImage = file[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        getData: function getData() {
            this.$emit('saveOurShops', {
                name: this.$refs.shopsName.value,
                address: this.$refs.shopsAddress.value,
                description: this.$refs.shopsDescription.value,
                published: this.pub,
                img: this.img
            });
        },
        sendData: function sendData() {
            this.value.name = this.$refs.shopsName.value;
            this.value.description = this.$refs.shopsDescription.value;
            this.value.address = this.$refs.shopsAddress.value;
            this.value.img = this.img;
            this.value.published = this.pub;
        }
    }
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c("div", { staticClass: "row" }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-2" }, [
        _c("figure", { staticClass: "figure new_product_ilu" }, [
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value.img,
                expression: "value.img"
              }
            ],
            staticClass: "img-thumbnail",
            attrs: { alt: "Основное фото товара", src: _vm.value.img }
          }),
          _vm._v(" "),
          _c("img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.value.img,
                expression: "!value.img"
              }
            ],
            staticClass: "img-thumbnail",
            attrs: {
              src: "/assets/iconic/svg/aperture.svg",
              alt: "Загрузите фото"
            }
          }),
          _vm._v(" "),
          _c("figcaption", { staticClass: "figure-caption" }, [
            _vm._v("og.image")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group mb-3 product_upload_image" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "custom-file" }, [
            _c("input", {
              staticClass: "custom-file-input",
              attrs: { type: "file", id: "inputGroupFile987" },
              on: { change: _vm.previewSeoImg }
            }),
            _vm._v(" "),
            _c("label", {
              staticClass: "custom-file-label",
              attrs: { for: "inputGroupFile987" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("input", {
            ref: "shopsName",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "Название",
              "aria-label": "Название",
              "aria-describedby": "basic-addonvideo"
            },
            domProps: { value: _vm.value.name },
            on: {
              input: function($event) {
                _vm.sendData()
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group mb-3" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            ref: "shopsAddress",
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "Адрес",
              "aria-label": "Адрес",
              "aria-describedby": "basic-adddonvideo"
            },
            domProps: { value: _vm.value.address },
            on: {
              input: function($event) {
                _vm.sendData()
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("textarea", {
            ref: "shopsDescription",
            staticClass: "form-control",
            attrs: { "aria-label": "With textarea" },
            domProps: { value: _vm.value.description },
            on: {
              input: function($event) {
                _vm.sendData()
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        !_vm.pub
          ? _c(
              "button",
              {
                staticClass: "btn btn-success",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.pub = !_vm.pub
                  }
                }
              },
              [_vm._v("\n                Публиковать\n            ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.pub
          ? _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.pub = !_vm.pub
                  }
                }
              },
              [_vm._v("\n                Скрыть\n            ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-danger",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                _vm.$emit("delete")
              }
            }
          },
          [_vm._v("Удалить")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Загрузить")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addonvideo" } },
        [_vm._v("Название")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-adddonvideo" } },
        [_vm._v("Адрес")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Описание")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cc4de55e", module.exports)
  }
}

/***/ })
/******/ ]);