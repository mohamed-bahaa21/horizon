module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("abFk");


/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "Mk/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAuthToken; });
/* unused harmony export isValidToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowQuery; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xDR2");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YSmr");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("R9qi");




async function getAuthToken(req) {
  const token = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(req.headers.cookie || '')[_constants__WEBPACK_IMPORTED_MODULE_2__[/* AUTH_COOKIE_NAME */ "a"]];
  return Object(_crypto__WEBPACK_IMPORTED_MODULE_1__[/* parseSecureToken */ "g"])(token);
}
async function isValidToken(token, validation) {
  try {
    const result = await Object(_crypto__WEBPACK_IMPORTED_MODULE_1__[/* parseToken */ "h"])(token);

    if (typeof validation === 'object') {
      return !Object.keys(validation).find(key => result[key] !== validation[key]);
    } else if (typeof validation === 'function') {
      return validation(result);
    }
  } catch (e) {
    return false;
  }

  return false;
}
async function allowQuery(req, skipToken) {
  const {
    id
  } = req.query;
  const token = req.headers[_constants__WEBPACK_IMPORTED_MODULE_2__[/* TOKEN_HEADER */ "B"]];
  const websiteId = +id;
  const website = await Object(_queries__WEBPACK_IMPORTED_MODULE_3__[/* getWebsiteById */ "q"])(websiteId);

  if (website) {
    if (token && token !== 'undefined' && !skipToken) {
      return isValidToken(token, {
        website_id: websiteId
      });
    }

    const authToken = await getAuthToken(req);

    if (authToken) {
      const {
        user_id,
        is_admin
      } = authToken;
      return is_admin || website.user_id === user_id;
    }
  }

  return false;
}

/***/ }),

/***/ "OkUf":
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "R9qi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ getWebsiteById; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ getWebsiteByUuid; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ getWebsiteByShareId; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ getUserWebsites; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createWebsite; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* binding */ updateWebsite; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* binding */ resetWebsite; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ deleteWebsite; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createSession; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ getSessionByUuid; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* binding */ savePageView; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ saveEvent; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getAccounts; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getAccountById; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getAccountByUsername; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* binding */ updateAccount; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ deleteAccount; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createAccount; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ getWebsiteStats; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ getPageviewStats; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ getSessionMetrics; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ getPageviewMetrics; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getActiveVisitors; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ getEventMetrics; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ getRealtimeData; });

// UNUSED EXPORTS: getDatabase, runQuery, rawQuery, getDateQuery, getTimestampInterval, getSessions, getPageviews, getEvents

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__("TXK0");
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__("1N0Q");

// EXTERNAL MODULE: external "chalk"
var external_chalk_ = __webpack_require__("OkUf");
var external_chalk_default = /*#__PURE__*/__webpack_require__.n(external_chalk_);

// CONCATENATED MODULE: ./lib/db.js


const options = {
  log: [{
    emit: 'event',
    level: 'query'
  }]
};

function logQuery(e) {
  if (process.env.LOG_QUERY) {
    console.log(external_chalk_default.a.yellow(e.params), '->', e.query, external_chalk_default.a.greenBright(`${e.duration}ms`));
  }
}

let prisma;

if (true) {
  prisma = new client_["PrismaClient"](options);
  prisma.$on('query', logQuery);
} else {}

/* harmony default export */ var lib_db = (prisma);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__("YSmr");

// CONCATENATED MODULE: ./lib/queries.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getDatabase() {
  const type = process.env.DATABASE_TYPE || process.env.DATABASE_URL && process.env.DATABASE_URL.split(':')[0];

  if (type === 'postgres') {
    return 'postgresql';
  }

  return type;
}
async function runQuery(query) {
  return query.catch(e => {
    throw e;
  });
}
async function rawQuery(query, params = []) {
  const db = getDatabase();

  if (db !== constants["u" /* POSTGRESQL */] && db !== constants["s" /* MYSQL */]) {
    return Promise.reject(new Error('Unknown database.'));
  }

  const sql = db === constants["s" /* MYSQL */] ? query.replace(/\$[0-9]+/g, '?') : query;
  return lib_db.$queryRaw.apply(lib_db, [sql, ...params]);
}
function getDateQuery(field, unit, timezone) {
  const db = getDatabase();

  if (db === constants["u" /* POSTGRESQL */]) {
    if (timezone) {
      return `to_char(date_trunc('${unit}', ${field} at time zone '${timezone}'), '${constants["v" /* POSTGRESQL_DATE_FORMATS */][unit]}')`;
    }

    return `to_char(date_trunc('${unit}', ${field}), '${constants["v" /* POSTGRESQL_DATE_FORMATS */][unit]}')`;
  }

  if (db === constants["s" /* MYSQL */]) {
    if (timezone) {
      const tz = external_moment_timezone_default.a.tz(timezone).format('Z');
      return `DATE_FORMAT(convert_tz(${field},'+00:00','${tz}'), '${constants["t" /* MYSQL_DATE_FORMATS */][unit]}')`;
    }

    return `DATE_FORMAT(${field}, '${constants["t" /* MYSQL_DATE_FORMATS */][unit]}')`;
  }
}
function getTimestampInterval(field) {
  const db = getDatabase();

  if (db === constants["u" /* POSTGRESQL */]) {
    return `floor(extract(epoch from max(${field}) - min(${field})))`;
  }

  if (db === constants["s" /* MYSQL */]) {
    return `floor(unix_timestamp(max(${field})) - unix_timestamp(min(${field})))`;
  }
}
async function getWebsiteById(website_id) {
  return runQuery(lib_db.website.findUnique({
    where: {
      website_id
    }
  }));
}
async function getWebsiteByUuid(website_uuid) {
  return runQuery(lib_db.website.findUnique({
    where: {
      website_uuid
    }
  }));
}
async function getWebsiteByShareId(share_id) {
  return runQuery(lib_db.website.findUnique({
    where: {
      share_id
    }
  }));
}
async function getUserWebsites(user_id) {
  return runQuery(lib_db.website.findMany({
    where: {
      user_id
    },
    orderBy: {
      name: 'asc'
    }
  }));
}
async function createWebsite(user_id, data) {
  return runQuery(lib_db.website.create({
    data: _objectSpread({
      account: {
        connect: {
          user_id
        }
      }
    }, data)
  }));
}
async function updateWebsite(website_id, data) {
  return runQuery(lib_db.website.update({
    where: {
      website_id
    },
    data
  }));
}
async function resetWebsite(website_id) {
  return runQuery(lib_db.$queryRaw`delete from session where website_id=${website_id}`);
}
async function deleteWebsite(website_id) {
  return runQuery(
  /* Prisma bug, does not cascade on non-nullable foreign keys
  prisma.website.delete({
    where: {
      website_id,
    },
  }),
   */
  lib_db.$queryRaw`delete from website where website_id=${website_id}`);
}
async function createSession(website_id, data) {
  return runQuery(lib_db.session.create({
    data: _objectSpread({
      website_id
    }, data),
    select: {
      session_id: true
    }
  }));
}
async function getSessionByUuid(session_uuid) {
  return runQuery(lib_db.session.findUnique({
    where: {
      session_uuid
    }
  }));
}
async function savePageView(website_id, session_id, url, referrer) {
  return runQuery(lib_db.pageview.create({
    data: {
      website_id,
      session_id,
      url: url === null || url === void 0 ? void 0 : url.substr(0, constants["C" /* URL_LENGTH */]),
      referrer: referrer === null || referrer === void 0 ? void 0 : referrer.substr(0, constants["C" /* URL_LENGTH */])
    }
  }));
}
async function saveEvent(website_id, session_id, url, event_type, event_value) {
  return runQuery(lib_db.event.create({
    data: {
      website_id,
      session_id,
      url: url === null || url === void 0 ? void 0 : url.substr(0, constants["C" /* URL_LENGTH */]),
      event_type: event_type === null || event_type === void 0 ? void 0 : event_type.substr(0, 50),
      event_value: event_value === null || event_value === void 0 ? void 0 : event_value.substr(0, 50)
    }
  }));
}
async function getAccounts() {
  return runQuery(lib_db.account.findMany());
}
async function getAccountById(user_id) {
  return runQuery(lib_db.account.findUnique({
    where: {
      user_id
    }
  }));
}
async function getAccountByUsername(username) {
  return runQuery(lib_db.account.findUnique({
    where: {
      username
    }
  }));
}
async function updateAccount(user_id, data) {
  return runQuery(lib_db.account.update({
    where: {
      user_id
    },
    data
  }));
}
async function deleteAccount(user_id) {
  return runQuery(
  /* Prisma bug, does not cascade on non-nullable foreign keys
  prisma.account.delete({
    where: {
      user_id,
    },
  }),
   */
  lib_db.$queryRaw`delete from account where user_id=${user_id}`);
}
async function createAccount(data) {
  return runQuery(lib_db.account.create({
    data
  }));
}
async function getSessions(websites, start_at) {
  return runQuery(lib_db.session.findMany({
    where: {
      website: {
        website_id: {
          in: websites
        }
      },
      created_at: {
        gte: start_at
      }
    }
  }));
}
async function getPageviews(websites, start_at) {
  return runQuery(lib_db.pageview.findMany({
    where: {
      website: {
        website_id: {
          in: websites
        }
      },
      created_at: {
        gte: start_at
      }
    }
  }));
}
async function getEvents(websites, start_at) {
  return runQuery(lib_db.event.findMany({
    where: {
      website: {
        website_id: {
          in: websites
        }
      },
      created_at: {
        gte: start_at
      }
    }
  }));
}
function getWebsiteStats(website_id, start_at, end_at, filters = {}) {
  const params = [website_id, start_at, end_at];
  const {
    url
  } = filters;
  let urlFilter = '';

  if (url) {
    urlFilter = `and url=$${params.length + 1}`;
    params.push(decodeURIComponent(url));
  }

  return rawQuery(`
      select sum(t.c) as "pageviews",
        count(distinct t.session_id) as "uniques",
        sum(case when t.c = 1 then 1 else 0 end) as "bounces",
        sum(t.time) as "totaltime"
      from (
         select session_id,
           ${getDateQuery('created_at', 'hour')},
           count(*) c,
           ${getTimestampInterval('created_at')} as "time"
         from pageview
         where website_id=$1
         and created_at between $2 and $3
         ${urlFilter}
         group by 1, 2
     ) t
    `, params);
}
function getPageviewStats(website_id, start_at, end_at, timezone = 'utc', unit = 'day', count = '*', url) {
  const params = [website_id, start_at, end_at];
  let urlFilter = '';

  if (url) {
    urlFilter = `and url=$${params.length + 1}`;
    params.push(decodeURIComponent(url));
  }

  return rawQuery(`
    select ${getDateQuery('created_at', unit, timezone)} t,
      count(${count}) y
    from pageview
    where website_id=$1
    and created_at between $2 and $3
    ${urlFilter}
    group by 1
    order by 1
    `, params);
}
function getSessionMetrics(website_id, start_at, end_at, field, filters = {}) {
  const params = [website_id, start_at, end_at];
  const {
    url
  } = filters;
  let urlFilter = '';

  if (url) {
    urlFilter = `and url=$${params.length + 1}`;
    params.push(decodeURIComponent(url));
  }

  return rawQuery(`
    select ${field} x, count(*) y
    from session
    where session_id in (
      select session_id
      from pageview
      where website_id=$1
      and created_at between $2 and $3
      ${urlFilter}
    )
    group by 1
    order by 2 desc
    `, params);
}
function getPageviewMetrics(website_id, start_at, end_at, field, table, filters = {}) {
  const params = [website_id, start_at, end_at];
  const {
    domain,
    url
  } = filters;
  let domainFilter = '';
  let urlFilter = '';

  if (domain) {
    domainFilter = `and referrer not like $${params.length + 1} and referrer not like '/%'`;
    params.push(`%://${domain}/%`);
  }

  if (url) {
    urlFilter = `and url=$${params.length + 1}`;
    params.push(decodeURIComponent(url));
  }

  return rawQuery(`
    select ${field} x, count(*) y
    from ${table}
    where website_id=$1
    and created_at between $2 and $3
    ${domainFilter}
    ${urlFilter}
    group by 1
    order by 2 desc
    `, params);
}
function getActiveVisitors(website_id) {
  const date = Object(external_date_fns_["subMinutes"])(new Date(), 5);
  const params = [website_id, date];
  return rawQuery(`
    select count(distinct session_id) x
    from pageview
    where website_id=$1
    and created_at >= $2
    `, params);
}
function getEventMetrics(website_id, start_at, end_at, timezone = 'utc', unit = 'day', filters = {}) {
  const params = [website_id, start_at, end_at];
  const {
    url,
    event_type
  } = filters;
  let urlFilter = '';
  let eventTypeFilter = '';

  if (url) {
    urlFilter = `and url=$${params.length + 1}`;
    params.push(decodeURIComponent(url));
  }

  if (event_type) {
    eventTypeFilter = `and event_type=$${params.length + 1}`;
    params.push(event_type);
  }

  return rawQuery(`
    select
      event_value x,
      ${getDateQuery('created_at', unit, timezone)} t,
      count(*) y
    from event
    where website_id=$1
    and created_at between $2 and $3
    ${urlFilter}
    ${eventTypeFilter}
    group by 1, 2
    order by 2
    `, params);
}
async function getRealtimeData(websites, time) {
  const [pageviews, sessions, events] = await Promise.all([getPageviews(websites, time), getSessions(websites, time), getEvents(websites, time)]);
  return {
    pageviews: pageviews.map((_ref) => {
      let {
        view_id
      } = _ref,
          props = _objectWithoutProperties(_ref, ["view_id"]);

      return _objectSpread({
        __id: `p${view_id}`,
        view_id
      }, props);
    }),
    sessions: sessions.map((_ref2) => {
      let {
        session_id
      } = _ref2,
          props = _objectWithoutProperties(_ref2, ["session_id"]);

      return _objectSpread({
        __id: `s${session_id}`,
        session_id
      }, props);
    }),
    events: events.map((_ref3) => {
      let {
        event_id
      } = _ref3,
          props = _objectWithoutProperties(_ref3, ["event_id"]);

      return _objectSpread({
        __id: `e${event_id}`,
        event_id
      }, props);
    }),
    timestamp: Date.now()
  };
}

/***/ }),

/***/ "TXK0":
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

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

/***/ "abFk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R9qi");
/* harmony import */ var lib_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ghg3");
/* harmony import */ var lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Mk/8");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'GET') {
    if (!(await Object(lib_auth__WEBPACK_IMPORTED_MODULE_2__[/* allowQuery */ "a"])(req))) {
      return Object(lib_response__WEBPACK_IMPORTED_MODULE_1__[/* unauthorized */ "f"])(res);
    }

    const {
      id
    } = req.query;
    const websiteId = +id;
    const result = await Object(lib_queries__WEBPACK_IMPORTED_MODULE_0__[/* getActiveVisitors */ "i"])(websiteId);
    return Object(lib_response__WEBPACK_IMPORTED_MODULE_1__[/* ok */ "d"])(res, result);
  }

  return Object(lib_response__WEBPACK_IMPORTED_MODULE_1__[/* methodNotAllowed */ "b"])(res);
});

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

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "uuU6":
/***/ (function(module, exports) {

module.exports = require("jose");

/***/ }),

/***/ "xDR2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hash */
/* unused harmony export secret */
/* unused harmony export salt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isValidUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRandomChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hashPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSecureToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseSecureToken; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PJMN");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uuU6");
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);





const SALT_ROUNDS = 10;
const KEY = jose__WEBPACK_IMPORTED_MODULE_3__["JWK"].asKey(Buffer.from(secret()));
const ROTATING_SALT = hash(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfMonth"])(new Date()).toUTCString());
const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function hash(...args) {
  return crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha512').update(args.join('')).digest('hex');
}
function secret() {
  return hash(process.env.HASH_SALT);
}
function salt() {
  return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v5"])([secret(), ROTATING_SALT].join(''), uuid__WEBPACK_IMPORTED_MODULE_1__["v5"].DNS);
}
function uuid(...args) {
  if (!args.length) return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
  return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v5"])(args.join(''), salt());
}
function isValidUuid(s) {
  return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["validate"])(s);
}
function getRandomChars(n) {
  let s = '';

  for (let i = 0; i < n; i++) {
    s += CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  return s;
}
function hashPassword(password) {
  return bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.hashSync(password, SALT_ROUNDS);
}
function checkPassword(password, hash) {
  return bcryptjs__WEBPACK_IMPORTED_MODULE_2___default.a.compareSync(password, hash);
}
async function createToken(payload) {
  return jose__WEBPACK_IMPORTED_MODULE_3__["JWT"].sign(payload, KEY);
}
async function parseToken(token) {
  try {
    return jose__WEBPACK_IMPORTED_MODULE_3__["JWT"].verify(token, KEY);
  } catch {
    return null;
  }
}
async function createSecureToken(payload) {
  return jose__WEBPACK_IMPORTED_MODULE_3__["JWE"].encrypt(await createToken(payload), KEY);
}
async function parseSecureToken(token) {
  try {
    const result = await jose__WEBPACK_IMPORTED_MODULE_3__["JWE"].decrypt(token, KEY);
    return parseToken(result.toString());
  } catch {
    return null;
  }
}

/***/ }),

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ })

/******/ });