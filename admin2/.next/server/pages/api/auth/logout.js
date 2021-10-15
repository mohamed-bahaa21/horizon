module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+B7X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YSmr");
/* harmony import */ var lib_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ghg3");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"])(lib_constants__WEBPACK_IMPORTED_MODULE_1__[/* AUTH_COOKIE_NAME */ "a"], '', {
    path: '/',
    httpOnly: true,
    maxAge: 0
  });
  res.setHeader('Set-Cookie', [cookie]);
  return Object(lib_response__WEBPACK_IMPORTED_MODULE_2__[/* ok */ "d"])(res);
});

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+B7X");


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

/***/ "ghg3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ok; });
/* unused harmony export redirect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return badRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unauthorized; });
/* unused harmony export forbidden */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return notFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return methodNotAllowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return serverError; });
function ok(res, data = {}) {
  return res.status(200).json(data);
}
function redirect(res, url) {
  res.setHeader('Location', url);
  return res.status(303).end();
}
function badRequest(res, msg = '400 Bad Request') {
  return res.status(400).end(msg);
}
function unauthorized(res, msg = '401 Unauthorized') {
  return res.status(401).end(msg);
}
function forbidden(res, msg = '403 Forbidden') {
  return res.status(403).end(msg);
}
function notFound(res, msg = '404 Not Found') {
  return res.status(404).end(msg);
}
function methodNotAllowed(res, msg = '405 Method Not Allowed') {
  res.status(405).end(msg);
}
function serverError(res, msg = '500 Internal Server Error') {
  res.status(500).end(msg);
}

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ })

/******/ });