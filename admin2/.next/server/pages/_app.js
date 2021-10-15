module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/actions/app.js
var app = __webpack_require__("DzNn");

// EXTERNAL MODULE: ./redux/actions/user.js
var user = __webpack_require__("j6IE");

// EXTERNAL MODULE: ./redux/actions/websites.js
var websites = __webpack_require__("nn0s");

// EXTERNAL MODULE: ./redux/actions/queries.js
var queries = __webpack_require__("Y5Tl");

// CONCATENATED MODULE: ./redux/reducers.js





/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  app: app["b" /* default */],
  user: user["a" /* default */],
  websites: websites["a" /* default */],
  queries: queries["a" /* default */]
}));
// CONCATENATED MODULE: ./redux/store.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let store_store;
function getStore(preloadedState) {
  return Object(toolkit_["configureStore"])({
    reducer: reducers,
    middleware: [external_redux_thunk_default.a],
    preloadedState
  });
}
const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : getStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store_store) {
    _store = getStore(_objectSpread(_objectSpread({}, store_store.getState()), preloadedState)); // Reset the current store

    store_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  return Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
}
// EXTERNAL MODULE: ./hooks/useLocale.js
var useLocale = __webpack_require__("nsFc");

// EXTERNAL MODULE: ./hooks/useForceSSL.js
var useForceSSL = __webpack_require__("H0l+");

// EXTERNAL MODULE: ./styles/variables.css
var variables = __webpack_require__("TGBB");

// EXTERNAL MODULE: ./styles/bootstrap-grid.css
var bootstrap_grid = __webpack_require__("4zqh");

// EXTERNAL MODULE: ./styles/index.css
var styles = __webpack_require__("iOjB");

// EXTERNAL MODULE: ./node_modules/@fontsource/inter/400.css
var _400 = __webpack_require__("nguR");

// EXTERNAL MODULE: ./node_modules/@fontsource/inter/600.css
var _600 = __webpack_require__("FZ43");

// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Intl = ({
  children
}) => {
  const {
    locale,
    messages
  } = Object(useLocale["a" /* default */])();

  const Wrapper = ({
    children
  }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: locale,
    children: children
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: messages[locale],
    textComponent: Wrapper,
    children: children
  });
};

function App({
  Component,
  pageProps
}) {
  Object(useForceSSL["a" /* default */])(false);
  const store = useStore();
  const {
    basePath
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_redux_["Provider"], {
    store: store,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/logoIcon.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        href: `/logoIcon.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/logoIcon.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/logoIcon.png`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "manifest",
        href: `${basePath}/site.webmanifest`
      }), /*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "mask-icon",
        href: `${basePath}/safari-pinned-tab.svg`,
        color: "#5bbad5"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Intl, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    })]
  });
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4zqh":
/***/ (function(module, exports) {



/***/ }),

/***/ "7T8v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeWWW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDomainName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeUrl; });
function removeTrailingSlash(url) {
  return url && url.length > 1 && url.endsWith('/') ? url.slice(0, -1) : url;
}
function removeWWW(url) {
  return url && url.length > 1 && url.startsWith('www.') ? url.slice(4) : url;
}
function getDomainName(str) {
  try {
    return new URL(str).hostname;
  } catch (e) {
    return str;
  }
}
function getQueryString(params = {}) {
  const map = Object.keys(params).reduce((arr, key) => {
    if (params[key] !== undefined) {
      return arr.concat(`${key}=${encodeURIComponent(params[key])}`);
    }

    return arr;
  }, []);

  if (map.length) {
    return `?${map.join('&')}`;
  }

  return '';
}
function makeUrl(url, params) {
  return `${url}${getQueryString(params)}`;
}

/***/ }),

/***/ "DzNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setTheme; });
/* unused harmony export setVersions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setShareToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkVersion; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jeBt");
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YSmr");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Oz/6");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_3__);




const app = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'app',
  initialState: {
    locale: Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* LOCALE_CONFIG */ "o"]) || lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_LOCALE */ "f"],
    theme: Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* THEME_CONFIG */ "z"]) || lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_THEME */ "g"],
    versions: {
      current: "3.0.0",
      latest: null,
      hasUpdate: false
    },
    shareToken: null
  },
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
      return state;
    },

    setTheme(state, action) {
      state.theme = action.payload;
      return state;
    },

    setVersions(state, action) {
      state.versions = action.payload;
      return state;
    },

    setShareToken(state, action) {
      state.shareToken = action.payload;
      return state;
    }

  }
});
const {
  setLocale,
  setTheme,
  setVersions,
  setShareToken
} = app.actions;
/* harmony default export */ __webpack_exports__["b"] = (app.reducer);
function checkVersion() {
  return async (dispatch, getState) => {
    const {
      app: {
        versions: {
          current
        }
      }
    } = getState();
    const data = await fetch('https://api.github.com/repos/mikecao/umami/releases/latest', {
      method: 'get',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return null;
    });

    if (!data) {
      return;
    }

    const {
      tag_name
    } = data;
    const latest = tag_name.startsWith('v') ? tag_name.slice(1) : tag_name;
    const lastCheck = Object(lib_web__WEBPACK_IMPORTED_MODULE_1__[/* getItem */ "c"])(lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* VERSION_CHECK */ "D"]);
    const hasUpdate = latest && semver__WEBPACK_IMPORTED_MODULE_3___default.a.gt(latest, current) && (lastCheck === null || lastCheck === void 0 ? void 0 : lastCheck.version) !== latest;
    return dispatch(setVersions({
      current,
      latest,
      hasUpdate
    }));
  };
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FZ43":
/***/ (function(module, exports) {



/***/ }),

/***/ "H0l+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceSSL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useForceSSL(enabled) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (enabled && false && /^http:\/\//.test(location.href)) {
      router.push(location.href.replace(/^http:\/\//, 'https://'));
    }
  }, [enabled]);
  return null;
}

/***/ }),

/***/ "Oz/6":
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "TGBB":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y5Tl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateQuery; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const queries = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'queries',
  initialState: {},
  reducers: {
    updateQuery(state, action) {
      const _action$payload = action.payload,
            {
        url
      } = _action$payload,
            data = _objectWithoutProperties(_action$payload, ["url"]);

      state[url] = data;
      return state;
    }

  }
});
const {
  updateQuery
} = queries.actions;
/* harmony default export */ __webpack_exports__["a"] = (queries.reducer);

/***/ }),

/***/ "YSmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOCALE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TIMEZONE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DATE_RANGE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return THEME_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return VERSION_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TOKEN_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEFAULT_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DEFAUL_CHART_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_DATE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REALTIME_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REALTIME_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return THEME_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EVENT_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return POSTGRESQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MYSQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MYSQL_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POSTGRESQL_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DOMAIN_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DESKTOP_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LAPTOP_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MOBILE_SCREEN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return URL_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DESKTOP_OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MOBILE_OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BROWSERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MAP_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ISO_COUNTRIES; });
const AUTH_COOKIE_NAME = 'umami.auth';
const LOCALE_CONFIG = 'umami.locale';
const TIMEZONE_CONFIG = 'umami.timezone';
const DATE_RANGE_CONFIG = 'umami.date-range';
const THEME_CONFIG = 'umami.theme';
const VERSION_CHECK = 'umami.version-check';
const TOKEN_HEADER = 'x-umami-token';
const DEFAULT_LOCALE = 'en-US';
const DEFAULT_THEME = 'light';
const DEFAUL_CHART_HEIGHT = 400;
const DEFAULT_ANIMATION_DURATION = 300;
const DEFAULT_DATE_RANGE = '24hour';
const REALTIME_RANGE = 30;
const REALTIME_INTERVAL = 3000;
const THEME_COLORS = {
  light: {
    primary: '#2680eb',
    gray50: '#ffffff',
    gray75: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eaeaea',
    gray300: '#e1e1e1',
    gray400: '#cacaca',
    gray500: '#b3b3b3',
    gray600: '#8e8e8e',
    gray700: '#6e6e6e',
    gray800: '#4b4b4b',
    gray900: '#2c2c2c'
  },
  dark: {
    primary: '#2680eb',
    gray50: '#252525',
    gray75: '#2f2f2f',
    gray100: '#323232',
    gray200: '#3e3e3e',
    gray300: '#4a4a4a',
    gray400: '#5a5a5a',
    gray500: '#6e6e6e',
    gray600: '#909090',
    gray700: '#b9b9b9',
    gray800: '#e3e3e3',
    gray900: '#ffffff'
  }
};
const EVENT_COLORS = ['#2680eb', '#9256d9', '#44b556', '#e68619', '#e34850', '#f7bd12', '#01bad7', '#6734bc', '#89c541', '#ffc301', '#ec1562', '#ffec16'];
const POSTGRESQL = 'postgresql';
const MYSQL = 'mysql';
const MYSQL_DATE_FORMATS = {
  minute: '%Y-%m-%d %H:%i:00',
  hour: '%Y-%m-%d %H:00:00',
  day: '%Y-%m-%d',
  month: '%Y-%m-01',
  year: '%Y-01-01'
};
const POSTGRESQL_DATE_FORMATS = {
  minute: 'YYYY-MM-DD HH24:MI:00',
  hour: 'YYYY-MM-DD HH24:00:00',
  day: 'YYYY-MM-DD',
  month: 'YYYY-MM-01',
  year: 'YYYY-01-01'
};
const DOMAIN_REGEX = /^(localhost(:[1-9]\d{0,4})?|((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63})$/;
const DESKTOP_SCREEN_WIDTH = 1920;
const LAPTOP_SCREEN_WIDTH = 1024;
const MOBILE_SCREEN_WIDTH = 479;
const URL_LENGTH = 500;
const DESKTOP_OS = ['Windows 3.11', 'Windows 95', 'Windows 98', 'Windows 2000', 'Windows XP', 'Windows Server 2003', 'Windows Vista', 'Windows 7', 'Windows 8', 'Windows 8.1', 'Windows 10', 'Windows ME', 'Open BSD', 'Sun OS', 'Linux', 'Mac OS', 'QNX', 'BeOS', 'OS/2', 'Chrome OS'];
const MOBILE_OS = ['iOS', 'Android OS', 'BlackBerry OS', 'Windows Mobile', 'Amazon OS'];
const BROWSERS = {
  aol: 'AOL',
  edge: 'Edge',
  'edge-ios': 'Edge (iOS)',
  yandexbrowser: 'Yandex',
  kakaotalk: 'KaKaoTalk',
  samsung: 'Samsung',
  silk: 'Silk',
  miui: 'MIUI',
  beaker: 'Beaker',
  'edge-chromium': 'Edge (Chromium)',
  chrome: 'Chrome',
  'chromium-webview': 'Chrome (webview)',
  phantomjs: 'PhantomJS',
  crios: 'Chrome (iOS)',
  firefox: 'Firefox',
  fxios: 'Firefox (iOS)',
  'opera-mini': 'Opera Mini',
  opera: 'Opera',
  ie: 'IE',
  bb10: 'BlackBerry 10',
  android: 'Android',
  ios: 'iOS',
  safari: 'Safari',
  facebook: 'Facebook',
  instagram: 'Instagram',
  'ios-webview': 'iOS (webview)',
  searchbot: 'Searchbot'
};
const MAP_FILE = '/datamaps.world.json';
const ISO_COUNTRIES = {
  AFG: 'AF',
  ALA: 'AX',
  ALB: 'AL',
  DZA: 'DZ',
  ASM: 'AS',
  AND: 'AD',
  AGO: 'AO',
  AIA: 'AI',
  ATA: 'AQ',
  ATG: 'AG',
  ARG: 'AR',
  ARM: 'AM',
  ABW: 'AW',
  AUS: 'AU',
  AUT: 'AT',
  AZE: 'AZ',
  BHS: 'BS',
  BHR: 'BH',
  BGD: 'BD',
  BRB: 'BB',
  BLR: 'BY',
  BEL: 'BE',
  BLZ: 'BZ',
  BEN: 'BJ',
  BMU: 'BM',
  BTN: 'BT',
  BOL: 'BO',
  BIH: 'BA',
  BWA: 'BW',
  BVT: 'BV',
  BRA: 'BR',
  VGB: 'VG',
  IOT: 'IO',
  BRN: 'BN',
  BGR: 'BG',
  BFA: 'BF',
  BDI: 'BI',
  KHM: 'KH',
  CMR: 'CM',
  CAN: 'CA',
  CPV: 'CV',
  CYM: 'KY',
  CAF: 'CF',
  TCD: 'TD',
  CHL: 'CL',
  CHN: 'CN',
  HKG: 'HK',
  MAC: 'MO',
  CXR: 'CX',
  CCK: 'CC',
  COL: 'CO',
  COM: 'KM',
  COG: 'CG',
  COD: 'CD',
  COK: 'CK',
  CRI: 'CR',
  CIV: 'CI',
  HRV: 'HR',
  CUB: 'CU',
  CYP: 'CY',
  CZE: 'CZ',
  DNK: 'DK',
  DJI: 'DJ',
  DMA: 'DM',
  DOM: 'DO',
  ECU: 'EC',
  EGY: 'EG',
  SLV: 'SV',
  GNQ: 'GQ',
  ERI: 'ER',
  EST: 'EE',
  ETH: 'ET',
  FLK: 'FK',
  FRO: 'FO',
  FJI: 'FJ',
  FIN: 'FI',
  FRA: 'FR',
  GUF: 'GF',
  PYF: 'PF',
  ATF: 'TF',
  GAB: 'GA',
  GMB: 'GM',
  GEO: 'GE',
  DEU: 'DE',
  GHA: 'GH',
  GIB: 'GI',
  GRC: 'GR',
  GRL: 'GL',
  GRD: 'GD',
  GLP: 'GP',
  GUM: 'GU',
  GTM: 'GT',
  GGY: 'GG',
  GIN: 'GN',
  GNB: 'GW',
  GUY: 'GY',
  HTI: 'HT',
  HMD: 'HM',
  VAT: 'VA',
  HND: 'HN',
  HUN: 'HU',
  ISL: 'IS',
  IND: 'IN',
  IDN: 'ID',
  IRN: 'IR',
  IRQ: 'IQ',
  IRL: 'IE',
  IMN: 'IM',
  ISR: 'IL',
  ITA: 'IT',
  JAM: 'JM',
  JPN: 'JP',
  JEY: 'JE',
  JOR: 'JO',
  KAZ: 'KZ',
  KEN: 'KE',
  KIR: 'KI',
  PRK: 'KP',
  KOR: 'KR',
  KWT: 'KW',
  KGZ: 'KG',
  LAO: 'LA',
  LVA: 'LV',
  LBN: 'LB',
  LSO: 'LS',
  LBR: 'LR',
  LBY: 'LY',
  LIE: 'LI',
  LTU: 'LT',
  LUX: 'LU',
  MKD: 'MK',
  MDG: 'MG',
  MWI: 'MW',
  MYS: 'MY',
  MDV: 'MV',
  MLI: 'ML',
  MLT: 'MT',
  MHL: 'MH',
  MTQ: 'MQ',
  MRT: 'MR',
  MUS: 'MU',
  MYT: 'YT',
  MEX: 'MX',
  FSM: 'FM',
  MDA: 'MD',
  MCO: 'MC',
  MNG: 'MN',
  MNE: 'ME',
  MSR: 'MS',
  MAR: 'MA',
  MOZ: 'MZ',
  MMR: 'MM',
  NAM: 'NA',
  NRU: 'NR',
  NPL: 'NP',
  NLD: 'NL',
  ANT: 'AN',
  NCL: 'NC',
  NZL: 'NZ',
  NIC: 'NI',
  NER: 'NE',
  NGA: 'NG',
  NIU: 'NU',
  NFK: 'NF',
  MNP: 'MP',
  NOR: 'NO',
  OMN: 'OM',
  PAK: 'PK',
  PLW: 'PW',
  PSE: 'PS',
  PAN: 'PA',
  PNG: 'PG',
  PRY: 'PY',
  PER: 'PE',
  PHL: 'PH',
  PCN: 'PN',
  POL: 'PL',
  PRT: 'PT',
  PRI: 'PR',
  QAT: 'QA',
  REU: 'RE',
  ROU: 'RO',
  RUS: 'RU',
  RWA: 'RW',
  BLM: 'BL',
  SHN: 'SH',
  KNA: 'KN',
  LCA: 'LC',
  MAF: 'MF',
  SPM: 'PM',
  VCT: 'VC',
  WSM: 'WS',
  SMR: 'SM',
  STP: 'ST',
  SAU: 'SA',
  SEN: 'SN',
  SRB: 'RS',
  SYC: 'SC',
  SLE: 'SL',
  SGP: 'SG',
  SVK: 'SK',
  SVN: 'SI',
  SLB: 'SB',
  SOM: 'SO',
  ZAF: 'ZA',
  SGS: 'GS',
  SSD: 'SS',
  ESP: 'ES',
  LKA: 'LK',
  SDN: 'SD',
  SUR: 'SR',
  SJM: 'SJ',
  SWZ: 'SZ',
  SWE: 'SE',
  CHE: 'CH',
  SYR: 'SY',
  TWN: 'TW',
  TJK: 'TJ',
  TZA: 'TZ',
  THA: 'TH',
  TLS: 'TL',
  TGO: 'TG',
  TKL: 'TK',
  TON: 'TO',
  TTO: 'TT',
  TUN: 'TN',
  TUR: 'TR',
  TKM: 'TM',
  TCA: 'TC',
  TUV: 'TV',
  UGA: 'UG',
  UKR: 'UA',
  ARE: 'AE',
  GBR: 'GB',
  USA: 'US',
  UMI: 'UM',
  URY: 'UY',
  UZB: 'UZ',
  VUT: 'VU',
  VEN: 'VE',
  VNM: 'VN',
  VIR: 'VI',
  WLF: 'WF',
  ESH: 'EH',
  YEM: 'YE',
  ZMB: 'ZM',
  ZWE: 'ZW',
  XKX: 'XK'
};

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hY5H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useForceUpdate() {
  const {
    1: update
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.create(null));
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    update(Object.create(null));
  }, [update]);
}

/***/ }),

/***/ "iOjB":
/***/ (function(module, exports) {



/***/ }),

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const user = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'user',
  initialState: null,
  reducers: {
    updateUser(state, action) {
      state = action.payload;
      return state;
    }

  }
});
const {
  updateUser
} = user.actions;
/* harmony default export */ __webpack_exports__["a"] = (user.reducer);

/***/ }),

/***/ "jeBt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export apiRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return post; });
/* unused harmony export put */
/* unused harmony export hook */
/* unused harmony export doNotTrack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getItem; });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7T8v");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const apiRequest = (method, url, body, headers) => fetch(url, {
  method,
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: _objectSpread({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }, headers),
  body
}).then(res => {
  if (res.ok) {
    return res.json().then(data => ({
      ok: res.ok,
      status: res.status,
      data
    }));
  }

  return res.text().then(data => ({
    ok: res.ok,
    status: res.status,
    res: res,
    data
  }));
});
const get = (url, params, headers) => apiRequest('get', Object(_url__WEBPACK_IMPORTED_MODULE_0__[/* makeUrl */ "c"])(url, params), undefined, headers);
const del = (url, params, headers) => apiRequest('delete', Object(_url__WEBPACK_IMPORTED_MODULE_0__[/* makeUrl */ "c"])(url, params), undefined, headers);
const post = (url, params, headers) => apiRequest('post', url, JSON.stringify(params), headers);
const put = (url, params, headers) => apiRequest('put', url, JSON.stringify(params), headers);
const hook = (_this, method, callback) => {
  const orig = _this[method];
  return (...args) => {
    callback.apply(null, args);
    return orig.apply(_this, args);
  };
};
const doNotTrack = () => {
  const {
    doNotTrack,
    navigator,
    external
  } = window;

  const msTracking = () => {
    return external && typeof external.msTrackingProtectionEnabled === 'function' && external.msTrackingProtectionEnabled();
  };

  const dnt = doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || msTracking();
  return dnt === true || dnt === 1 || dnt === 'yes' || dnt === '1';
};
const setItem = (key, data, session) => {
  if (false) {}
};
const getItem = (key, session) => false ? undefined : null;

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "nguR":
/***/ (function(module, exports) {



/***/ }),

/***/ "nn0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateWebsites */
/* unused harmony export updateWebsite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDateRange; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const websites = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'websites',
  initialState: {},
  reducers: {
    updateWebsites(state, action) {
      state = action.payload;
      return state;
    },

    updateWebsite(state, action) {
      const _action$payload = action.payload,
            {
        websiteId
      } = _action$payload,
            data = _objectWithoutProperties(_action$payload, ["websiteId"]);

      state[websiteId] = data;
      return state;
    }

  }
});
const {
  updateWebsites,
  updateWebsite
} = websites.actions;
/* harmony default export */ __webpack_exports__["a"] = (websites.reducer);
function setDateRange(websiteId, dateRange) {
  return dispatch => {
    return dispatch(updateWebsite({
      websiteId,
      dateRange: _objectSpread(_objectSpread({}, dateRange), {}, {
        modified: Date.now()
      })
    }));
  };
}

/***/ }),

/***/ "nsFc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLocale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DzNn");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jeBt");
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YSmr");
/* harmony import */ var hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hY5H");
/* harmony import */ var public_lang_en_US_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qP6M");
var public_lang_en_US_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("qP6M", 1);








const messages = {
  'en-US': public_lang_en_US_json__WEBPACK_IMPORTED_MODULE_7__
};
function useLocale() {
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.app.locale);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    basePath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const forceUpdate = Object(hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])();

  async function loadMessages(locale) {
    const {
      ok,
      data
    } = await Object(lib_web__WEBPACK_IMPORTED_MODULE_4__[/* get */ "b"])(`${basePath}/lang/${locale}.json`);

    if (ok) {
      messages[locale] = data;
    }
  }

  async function saveLocale(value) {
    if (!messages[value]) {
      await loadMessages(value);
    }

    Object(lib_web__WEBPACK_IMPORTED_MODULE_4__[/* setItem */ "e"])(lib_constants__WEBPACK_IMPORTED_MODULE_5__[/* LOCALE_CONFIG */ "o"], value);

    if (locale !== value) {
      dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_2__[/* setLocale */ "c"])(value));
    } else {
      forceUpdate();
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!messages[locale]) {
      saveLocale(locale);
    }
  }, [locale]);
  return {
    locale,
    saveLocale,
    messages
  };
}

/***/ }),

/***/ "qP6M":
/***/ (function(module) {

module.exports = JSON.parse("{\"label.accounts\":[{\"type\":0,\"value\":\"Accounts\"}],\"label.add-account\":[{\"type\":0,\"value\":\"Add account\"}],\"label.add-website\":[{\"type\":0,\"value\":\"Add website\"}],\"label.administrator\":[{\"type\":0,\"value\":\"Administrator\"}],\"label.all\":[{\"type\":0,\"value\":\"All\"}],\"label.all-events\":[{\"type\":0,\"value\":\"All events\"}],\"label.all-websites\":[{\"type\":0,\"value\":\"All websites\"}],\"label.back\":[{\"type\":0,\"value\":\"Back\"}],\"label.cancel\":[{\"type\":0,\"value\":\"Cancel\"}],\"label.change-password\":[{\"type\":0,\"value\":\"Change password\"}],\"label.confirm-password\":[{\"type\":0,\"value\":\"Confirm password\"}],\"label.copy-to-clipboard\":[{\"type\":0,\"value\":\"Copy to clipboard\"}],\"label.current-password\":[{\"type\":0,\"value\":\"Current password\"}],\"label.custom-range\":[{\"type\":0,\"value\":\"Custom range\"}],\"label.dashboard\":[{\"type\":0,\"value\":\"Dashboard\"}],\"label.date-range\":[{\"type\":0,\"value\":\"Date range\"}],\"label.default-date-range\":[{\"type\":0,\"value\":\"Default date range\"}],\"label.delete\":[{\"type\":0,\"value\":\"Delete\"}],\"label.delete-account\":[{\"type\":0,\"value\":\"Delete account\"}],\"label.delete-website\":[{\"type\":0,\"value\":\"Delete website\"}],\"label.dismiss\":[{\"type\":0,\"value\":\"Dismiss\"}],\"label.domain\":[{\"type\":0,\"value\":\"Domain\"}],\"label.edit\":[{\"type\":0,\"value\":\"Edit\"}],\"label.edit-account\":[{\"type\":0,\"value\":\"Edit account\"}],\"label.edit-website\":[{\"type\":0,\"value\":\"Edit website\"}],\"label.enable-share-url\":[{\"type\":0,\"value\":\"Enable share URL\"}],\"label.hero_parag_1\":[{\"type\":0,\"value\":\"hero_parag_1\"}],\"label.invalid\":[{\"type\":0,\"value\":\"Invalid\"}],\"label.invalid-domain\":[{\"type\":0,\"value\":\"Invalid domain\"}],\"label.last-days\":[{\"type\":0,\"value\":\"Last \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" days\"}],\"label.last-hours\":[{\"type\":0,\"value\":\"Last \"},{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" hours\"}],\"label.logged-in-as\":[{\"type\":0,\"value\":\"Logged in as \"},{\"type\":1,\"value\":\"username\"}],\"label.login\":[{\"type\":0,\"value\":\"Login\"}],\"label.logout\":[{\"type\":0,\"value\":\"Logout\"}],\"label.more\":[{\"type\":0,\"value\":\"More\"}],\"label.name\":[{\"type\":0,\"value\":\"Name\"}],\"label.new-password\":[{\"type\":0,\"value\":\"New password\"}],\"label.password\":[{\"type\":0,\"value\":\"Password\"}],\"label.passwords-dont-match\":[{\"type\":0,\"value\":\"Passwords don't match\"}],\"label.profile\":[{\"type\":0,\"value\":\"Profile\"}],\"label.realtime\":[{\"type\":0,\"value\":\"Realtime\"}],\"label.realtime-logs\":[{\"type\":0,\"value\":\"Realtime logs\"}],\"label.refresh\":[{\"type\":0,\"value\":\"Refresh\"}],\"label.required\":[{\"type\":0,\"value\":\"Required\"}],\"label.reset\":[{\"type\":0,\"value\":\"Reset\"}],\"label.reset-website\":[{\"type\":0,\"value\":\"Reset statistics\"}],\"label.save\":[{\"type\":0,\"value\":\"Save\"}],\"label.sections\":[{\"type\":0,\"value\":\"Sections\"}],\"label.settings\":[{\"type\":0,\"value\":\"Settings\"}],\"label.share-url\":[{\"type\":0,\"value\":\"Share URL\"}],\"label.single-day\":[{\"type\":0,\"value\":\"Single day\"}],\"label.submit\":[{\"type\":0,\"value\":\"Submit\"}],\"label.this-month\":[{\"type\":0,\"value\":\"This month\"}],\"label.this-week\":[{\"type\":0,\"value\":\"This week\"}],\"label.this-year\":[{\"type\":0,\"value\":\"This year\"}],\"label.timezone\":[{\"type\":0,\"value\":\"Timezone\"}],\"label.today\":[{\"type\":0,\"value\":\"Today\"}],\"label.tracking-code\":[{\"type\":0,\"value\":\"Tracking code\"}],\"label.unknown\":[{\"type\":0,\"value\":\"Unknown\"}],\"label.username\":[{\"type\":0,\"value\":\"Username\"}],\"label.view-details\":[{\"type\":0,\"value\":\"View details\"}],\"label.websites\":[{\"type\":0,\"value\":\"Websites\"}],\"message.active-users\":[{\"type\":1,\"value\":\"x\"},{\"type\":0,\"value\":\" current \"},{\"offset\":0,\"options\":{\"one\":{\"value\":[{\"type\":0,\"value\":\"visitor\"}]},\"other\":{\"value\":[{\"type\":0,\"value\":\"visitors\"}]}},\"pluralType\":\"cardinal\",\"type\":6,\"value\":\"x\"}],\"message.confirm-delete\":[{\"type\":0,\"value\":\"Are your sure you want to delete \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"?\"}],\"message.confirm-reset\":[{\"type\":0,\"value\":\"Are your sure you want to reset \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\"'s statistics?\"}],\"message.copied\":[{\"type\":0,\"value\":\"Copied!\"}],\"message.delete-warning\":[{\"type\":0,\"value\":\"All associated data will be deleted as well.\"}],\"message.failure\":[{\"type\":0,\"value\":\"Something went wrong.\"}],\"message.get-share-url\":[{\"type\":0,\"value\":\"Get share URL\"}],\"message.get-tracking-code\":[{\"type\":0,\"value\":\"Get tracking code\"}],\"message.go-to-settings\":[{\"type\":0,\"value\":\"Go to settings\"}],\"message.incorrect-username-password\":[{\"type\":0,\"value\":\"Incorrect username/password.\"}],\"message.log.visitor\":[{\"type\":0,\"value\":\"Visitor from \"},{\"type\":1,\"value\":\"country\"},{\"type\":0,\"value\":\" using \"},{\"type\":1,\"value\":\"browser\"},{\"type\":0,\"value\":\" on \"},{\"type\":1,\"value\":\"os\"},{\"type\":0,\"value\":\" \"},{\"type\":1,\"value\":\"device\"}],\"message.new-version-available\":[{\"type\":0,\"value\":\"A new version of umami \"},{\"type\":1,\"value\":\"version\"},{\"type\":0,\"value\":\" is available!\"}],\"message.no-data-available\":[{\"type\":0,\"value\":\"No data available.\"}],\"message.no-websites-configured\":[{\"type\":0,\"value\":\"You don't have any websites configured.\"}],\"message.page-not-found\":[{\"type\":0,\"value\":\"Page not found.\"}],\"message.powered-by\":[{\"type\":0,\"value\":\"Powered by \"},{\"type\":1,\"value\":\"name\"}],\"message.reset-warning\":[{\"type\":0,\"value\":\"All statistics for this website will be deleted, but your tracking code will remain intact.\"}],\"message.save-success\":[{\"type\":0,\"value\":\"Saved successfully.\"}],\"message.share-url\":[{\"type\":0,\"value\":\"This is the publicly shared URL for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\".\"}],\"message.track-stats\":[{\"type\":0,\"value\":\"To track stats for \"},{\"type\":1,\"value\":\"target\"},{\"type\":0,\"value\":\", place the following code in the \"},{\"type\":1,\"value\":\"head\"},{\"type\":0,\"value\":\" section of your website.\"}],\"message.type-delete\":[{\"type\":0,\"value\":\"Type \"},{\"type\":1,\"value\":\"delete\"},{\"type\":0,\"value\":\" in the box below to confirm.\"}],\"metrics.actions\":[{\"type\":0,\"value\":\"Actions\"}],\"metrics.average-visit-time\":[{\"type\":0,\"value\":\"Average visit time\"}],\"metrics.bounce-rate\":[{\"type\":0,\"value\":\"Bounce rate\"}],\"metrics.browsers\":[{\"type\":0,\"value\":\"Browsers\"}],\"metrics.countries\":[{\"type\":0,\"value\":\"Countries\"}],\"metrics.device.desktop\":[{\"type\":0,\"value\":\"Desktop\"}],\"metrics.device.laptop\":[{\"type\":0,\"value\":\"Laptop\"}],\"metrics.device.mobile\":[{\"type\":0,\"value\":\"Mobile\"}],\"metrics.device.tablet\":[{\"type\":0,\"value\":\"Tablet\"}],\"metrics.devices\":[{\"type\":0,\"value\":\"Devices\"}],\"metrics.events\":[{\"type\":0,\"value\":\"Events\"}],\"metrics.filter.combined\":[{\"type\":0,\"value\":\"Combined\"}],\"metrics.filter.domain-only\":[{\"type\":0,\"value\":\"Domain only\"}],\"metrics.filter.raw\":[{\"type\":0,\"value\":\"Raw\"}],\"metrics.operating-systems\":[{\"type\":0,\"value\":\"Operating systems\"}],\"metrics.page-views\":[{\"type\":0,\"value\":\"Page views\"}],\"metrics.pages\":[{\"type\":0,\"value\":\"Pages\"}],\"metrics.referrers\":[{\"type\":0,\"value\":\"Referrers\"}],\"metrics.unique-visitors\":[{\"type\":0,\"value\":\"Unique visitors\"}],\"metrics.views\":[{\"type\":0,\"value\":\"Views\"}],\"metrics.visitors\":[{\"type\":0,\"value\":\"Visitors\"}]}");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });