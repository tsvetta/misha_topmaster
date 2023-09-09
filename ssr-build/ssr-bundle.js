module.exports =
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
/******/ 	__webpack_require__.p = "/misha_topmaster/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G9do");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("laFY");


function Footer() {
  return h("footer", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].pageFooter
  }, h("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].pageFooterMain
  }, h(_ContactInfo__WEBPACK_IMPORTED_MODULE_0__[/* ContactInfo */ "a"], null), h("p", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].year
  }, "\xA9 2023")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "G9do":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* unused harmony export ContactIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactInfo; });
function ContactIcon(_ref) {
  var type = _ref.type;
  return h("div", {
    className: "contact-icon ".concat(type)
  });
}
function ContactInfo() {
  return h("address", {
    className: "contact-info"
  }, h("p", {
    className: "contact-info-line contact-info-phone"
  }, h(ContactIcon, {
    type: "phone"
  }), h("a", {
    className: "contact-info-link",
    href: "tel:+995555758598",
    rel: "noreferrer noopenner"
  }, "+995 555 75 85 98")), h("p", {
    className: "contact-info-line contact-info-messenger"
  }, h(ContactIcon, {
    type: "telegram"
  }), h("a", {
    className: "contact-info-link",
    href: "https://t.me/y82ndgaki",
    target: "_blank",
    rel: "noreferrer noopenner"
  }, "Telegram")), h("p", {
    className: "contact-info-line contact-info-messenger"
  }, h(ContactIcon, {
    type: "whatsapp"
  }), h("a", {
    className: "contact-info-link",
    href: "https://wa.me/995555758598",
    target: "_blank",
    rel: "noreferrer noopenner"
  }, "WhatsApp")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "MV5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G9do");

function Header() {
  return h("header", {
    className: "page-header"
  }, h("div", {
    className: "page-header-main"
  }, h("div", {
    className: "page-titles"
  }, h("h1", {
    className: "page-header-name"
  }, "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430, \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430, \u0440\u0435\u043C\u043E\u043D\u0442"), h("p", {
    className: "page-header-location"
  }, "\u0422\u0431\u0438\u043B\u0438\u0441\u0438, \u0413\u0440\u0443\u0437\u0438\u044F"), h("h2", {
    className: "page-header-occupation"
  }, "\u041C\u0438\u0445\u0430\u0438\u043B \u0411\u043E\u0440\u043E\u0434\u0438\u043D, \u0447\u0430\u0441\u0442\u043D\u044B\u0439 \u043C\u0430\u0441\u0442\u0435\u0440")), h("div", {
    className: "page-header-contact-info"
  }, h(_ContactInfo__WEBPACK_IMPORTED_MODULE_0__[/* ContactInfo */ "a"], null))), h("div", {
    className: "page-header-appointment"
  }, h("a", {
    href: "https://calendly.com/plumber-electrician-tbilisi/appointment",
    target: "_blank",
    rel: "noreferrer noopenner",
    className: "page-header-appointment-link"
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D"), h("a", {
    href: "tel:+995555758598",
    className: "page-header-appointment-link call"
  }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ogzj");
/* harmony import */ var _components_ServicesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qs05");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fl18");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MV5A");




function App() {
  return h(Fragment, null, h(_components_Header__WEBPACK_IMPORTED_MODULE_0__[/* Header */ "a"], null), h("main", {
    className: "page-content"
  }, h("section", {
    className: "page-section"
  }, h("h3", {
    className: "page-section-title",
    id: "services-list"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), h("div", {
    className: "section-description"
  }, h("details", null, h("summary", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u043B\u0443\u0433"), h(_components_ServicesTable__WEBPACK_IMPORTED_MODULE_1__[/* ServicesTable */ "a"], {
    hiddenPrices: true
  }), h("div", {
    className: "section-description"
  }, h("p", null, "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442 \u0432\u044B\u0441\u044B\u043B\u0430\u044E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432\u0430\u043C\xA0\u0432\xA0\u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440 \u0438\u043B\u0438\xA0\u043D\u0430\xA0\u043F\u043E\u0447\u0442\u0443."))))), h("section", {
    className: "page-section"
  }, h("h3", {
    className: "page-section-title",
    id: "faq"
  }, "FAQ"), h("div", {
    className: "section-description"
  }, h("dl", null, h("dt", null, h("p", null, "\u0412\u044B \u0432\u044B\u0435\u0437\u0436\u0430\u0435\u0442\u0435 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0422\u0431\u0438\u043B\u0438\u0441\u0438?")), h("dd", null, h("p", null, "\u0414\u0430. \u041F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u044B \u0422\u0431\u0438\u043B\u0438\u0441\u0438. \u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E.")), h("dt", null, h("p", null, "\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0435\u0445\u0430\u0442\u044C?")), h("dd", null, h("p", null, "\u041E\u0431\u044B\u0447\u043D\u043E, \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C. \u0414\u0430\u0442\u0430 \u0438\xA0\u0432\u0440\u0435\u043C\u044F \u0432\u044B\u0435\u0437\u0434\u0430 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u2013 \u043E\u043F\u043B\u0430\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0448\u0435, \u0435\u0441\u043B\u0438 \u0443 \u043C\u0435\u043D\u044F \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u043C.")), h("dt", {
    id: "fixed-prices"
  }, h("p", null, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0446\u0435\u043D\u044B \u043D\u0435 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435?")), h("dd", null, h("p", null, "\u0414\u043B\u044F \u0442\u0438\u043F\u043E\u0432\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u2013 \u0446\u0435\u043D\u044B \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435. \u041D\u043E\xA0\u0431\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E\xA0\u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E\u043F\u0440\u044F\u0436\u0435\u043D\u0430 \u0441 \u043E\u0441\u043B\u043E\u0436\u043D\u0435\u043D\u0438\u044F\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0430\u0440\u0430\u043D\u0435\u0435. \u0412\xA0\u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u044E  \u0441\xA0\u0432\u0430\u043C\u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442 \u043F\u043E\xA0\u043F\u0440\u0438\u0435\u0437\u0434\u0443, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F, \u043A\u0430\u043A\u0438\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438. \u0422\u0430\u043A\u043E\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043D\u0435\xA0\u0447\u0430\u0441\u0442\u043E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430\xA0\u0446\u0435\u043D\u0443 \u0438\u0437\xA0\u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u0430."), h("p", null, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438\xA0\u0437\u0430\u043C\u0435\u043D\u0435 \u0433\u043E\u0444\u0440\u044B \u0443\u043D\u0438\u0442\u0430\u0437\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u043B\u0430\u0432\u043A\u0430, \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0443\u043D\u0438\u0442\u0430\u0437\u0430, \u0435\u0441\u043B\u0438 \u0443 \u043D\u0435\u0433\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u043D\u043E\u0436\u043A\u0430 \u0438\xA0\u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A\xA0\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F\u043C."), h("p", null, "\u0422\u0430\u043A\u0436\u0435, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u043A\u0438\u043F\u0430\u044E\u0442, \u0447\u0442\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u043D\u0435\u0440\u0430\u0437\u0431\u043E\u0440\u043D\u044B\u043C\u0438. \u0412\xA0\u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u043D\u0430 \u0443\u0437\u043B\u0430 (\u0441\u043C\u0435\u0441\u0438\u0442\u0435\u043B\u044C, \u043A\u0440\u0430\u043D \u0438\xA0\u043F\u043E\u0434\u043E\u0431\u043D\u043E\u0435).")), h("dt", null, h("p", null, "\u0414\u043E\u043B\u0436\u043D\u044B \u043B\u0438 \u0432\u044B \u0441\u0430\u043C\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u0440\u0430\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u0438?")), h("dd", null, h("p", null, "\u042D\u0442\u043E \u043D\u0435\xA0\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u043E\u0431\u044B\u0447\u043D\u043E \u044F \u043F\u043E\u043A\u0443\u043F\u0430\u044E\xA0\u0432\u0441\u0451\xA0\u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\xA0\u0432\u0430\u0448\u0435\u043C\u0443 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044E. \u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\xA0\u2013\xA0\u0435\u0441\u043B\u0438\xA0\u0432\u0430\u043C \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0438\xA0\u044D\u0442\u043E\xA0\u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u0439\u0442\u0438. \u0412\xA0\u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u0440\u0430\u0441\u0445\u043E\u0434\u043D\u0438\u043A \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E, \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u0432\u0448\u0438\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439."), h("p", null, "\u041F\u043E\u0438\u0441\u043A \u043C\u043D\u043E\u0439 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u043A\u0440\u0443\u043F\u043D\u043E\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0442\u0440\u0430\u043F\u0435\u0446\u0435\u0432\u0438\u0434\u043D\u0430\u044F \u043F\u0440\u043E\u043A\u043B\u0430\u0434\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u0443\u043D\u0438\u0442\u0430\u0437\u043E\u043C \u0438 \u0441\u043B\u0438\u0432\u043D\u044B\u043C \u0431\u0430\u0447\u043A\u043E\u043C.")), h("dt", null, h("p", null, "\u0415\u0441\u0442\u044C \u043B\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430\xA0\u0440\u0430\u0431\u043E\u0442\u044B?")), h("dd", null, h("p", null, "\u0414\u0430. \u0415\u0441\u043B\u0438 \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0431\u043E\u0442 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0430\u0442\u0441\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441\xA0\u043D\u0435\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u043E\u0439, \u044F\xA0\u043F\u0440\u0438\u0435\u0437\u0436\u0430\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.")), h("dt", null, h("p", null, "\u041D\u0443\u0436\u043D\u043E\xA0\u043B\u0438 \u043A\u0430\u043A-\u0442\u043E\xA0\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A\xA0\u043C\u043E\u0435\u043C\u0443\xA0\u043F\u0440\u0438\u0445\u043E\u0434\u0443?")), h("dd", null, h("p", null, "\u041D\u0435\u0442, \u043D\u043E\xA0\u0432\u0430\u043C\xA0\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0443\u0437\u043D\u0430\u0442\u044C, \u0433\u0434\u0435\xA0\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u0430\u0448 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0449\u0438\u0442\u043E\u043A (\u0432\xA0\u0441\u043B\u0443\u0447\u0430\u0435 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E\xA0\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0435) \u0438\xA0\u0433\u0434\u0435\xA0\u043E\u0442\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u043E\u0434\u0430 \u0432\xA0\u0434\u043E\u043C\u0435 (\u0432\xA0\u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442)."), h("p", null, "\u041F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435 \u043C\u0435\u0431\u0435\u043B\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043E\u0432\u0435\u0441\u0438\u0442\u044C \u043F\u043E\u043B\u043A\u0443 \u0438\u043B\u0438\xA0\u043B\u044E\u0441\u0442\u0440\u0443 \u2013 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u0435, \u0435\u0441\u0442\u044C\xA0\u043B\u0438\xA0\u0443\xA0\u0432\u0430\u0441 \u043A\u0440\u0435\u043F\u0435\u0436. \u0415\u0441\u043B\u0438 \u043D\u0435\u0442, \u044F\xA0\u0437\u0430\u043A\u0443\u043F\u043B\u044E \u0435\u0433\u043E\xA0\u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E.")), h("dt", {
    id: "min-prices"
  }, h("p", null, "\u0426\u0435\u043D\u044B \u043D\u0430\xA0\u0440\u0430\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u0438 \u0432\xA0\u0422\u0431\u0438\u043B\u0438\u0441\u0438:")), h("dd", null, h("ul", {
    className: "text-list"
  }, h("li", null, h("strong", {
    className: "strong-text"
  }, "\u0441\u043C\u0435\u0441\u0438\u0442\u0435\u043B\u044C"), " \u2013 \u043E\u0442\xA030\xA0\u20BE \u0437\u0430\xA0\u0441\u0430\u043C\u044B\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u0438\u043B\u0443\u043C\u0438\u043D\u043E\u0432\u044B\u0439 \u0441\u043C\u0435\u0441\u0438\u0442\u0435\u043B\u044C \u0432\xA0\u0440\u0430\u043A\u043E\u0432\u0438\u043D\u0443 \u0432\xA0\u0441\u0430\u043D\u0443\u0437\u0435\u043B, \u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0439 \u2013\xA0\u043E\u0442\xA050\xA0\u20BE;"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u043A\u0430\u0440\u0442\u0440\u0438\u0434\u0436 \u0432 \u0441\u043C\u0435\u0441\u0438\u0442\u0435\u043B\u044C"), " \u2013 \u043E\u0442\xA06\xA0\u20BE (32, 40\xA0\u043C\u043C);"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u0441\u0438\u0444\u043E\u043D"), " \u2013 \u043E\u0442\xA08\xA0\u20BE \u0431\u0435\u0437\xA0\u043A\u043E\u043B\u0435\u043D\u0430, \u043E\u0442\xA012\xA0\u20BE \u0441 \u043A\u043E\u043B\u0435\u043D\u043E\u043C, \u043E\u0442\xA020\xA0\u20BE \u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0439 \u0434\u0432\u043E\u0439\u043D\u043E\u0439;"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u043F\u043E\u043F\u043B\u0430\u0432\u043E\u043A"), " \u2013 \u043E\u0442\xA010\xA0\u20BE;"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u0440\u043E\u0437\u0435\u0442\u043A\u0430"), " \u2013 \u043E\u0442\xA05\xA0\u20BE;"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C"), " \u2013 \u043E\u0442\xA05\xA0\u20BE;"), h("li", null, h("strong", {
    className: "strong-text"
  }, "\u0433\u0435\u0440\u043C\u0435\u0442\u0438\u043A"), " \u2013 \u043E\u0442\xA010\xA0\u20BE.")), h("p", null, "\u0414\u043B\u044F \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u0446\u0435\u043D, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441\xA0\u0446\u0435\u043D\u0430\u043C\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 ", h("a", {
    href: "https://www.domino.com.ge/ru/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Domino"), " \u0438 ", h("a", {
    href: "https://gorgia.ge/ka/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Gorgia"), ".")), h("dt", null, h("p", null, "\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 \u0443\u0441\u043B\u0443\u0433 \u043D\u0435\u0442 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043C\u0435\u043D\u044F \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442.")), h("dd", null, h("p", null, "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A \u043D\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u0434\u0430\u0447\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\xA0", h("a", {
    href: "https://t.me/y82ndgaki",
    rel: "noreferrer noopenner",
    target: "_blank"
  }, "Telegram"), " \u0438\u043B\u0438 \u0432\xA0", h("a", {
    href: "https://wa.me/995555758598",
    rel: "noreferrer noopenner",
    target: "_blank"
  }, "WhatsApp"), ", ", h("a", {
    href: "tel:+995555758598"
  }, "\u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435"), " \u0438\u043B\u0438\xA0", h("a", {
    href: "https://calendly.com/plumber-electrician-tbilisi/appointment",
    target: "_blank",
    rel: "noreferrer noopenner"
  }, "\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D"), ", \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044F\xA0\u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0441\u043C\u043E\u0433\u0443 \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C \u0438\u043B\u0438\xA0\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043A\xA0\u043A\u043E\u043C\u0443 \u0435\u0449\u0451 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F.")))))), h(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[/* Footer */ "a"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "Qs05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesTable; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yam3");
/* harmony import */ var _data_prices_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("m7uB");
var _data_prices_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("m7uB", 1);


function ServicesTable(_ref) {
  var hiddenPrices = _ref.hiddenPrices;
  return h("table", {
    className: "price-table"
  }, h("tbody", null, _data_prices_json__WEBPACK_IMPORTED_MODULE_1__.map(function (sectionData) {
    return h(Fragment, null, h("tr", null, h("td", {
      colspan: "2",
      className: _index_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].columnWide
    }, sectionData.sectionName)), sectionData.content.map(function (sectionContent) {
      return h("tr", null, h("td", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].column1
      }, sectionContent.name), hiddenPrices ? null : h("td", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].column2
      }, sectionContent.price));
    }));
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "laFY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"pageFooterMain":"pageFooterMain__V+0Zz","pageFooter":"pageFooter__RF9ss","year":"year__vwOxd"});

/***/ }),

/***/ "m7uB":
/***/ (function(module) {

module.exports = JSON.parse("[{\"sectionName\":\"Диагностика\",\"content\":[{\"name\":\"Консультация онлайн или по телефону\",\"price\":\"Бесплатно\"},{\"name\":\"Выезд\",\"price\":\"от 40 ₾\"},{\"name\":\"Выезд за пределы города\",\"price\":\"По договоренности\"}]},{\"sectionName\":\"Сантехника\",\"content\":[{\"name\":\"Монтаж/демонтаж смесителя\",\"price\":\"от 20 ₾\"},{\"name\":\"Замена картриджа смесителя\",\"price\":\"от 20 ₾\"},{\"name\":\"Монтаж/демонтаж ванной\",\"price\":\"от 60 ₾\"},{\"name\":\"Монтаж/демонтаж душевого настенного смесителя без стойки\",\"price\":\"от 50 ₾\"},{\"name\":\"Монтаж/демонтаж душевого настенного смесителя со стойкой\",\"price\":\"от 60 ₾\"},{\"name\":\"Монтаж/демонтаж унитаза\",\"price\":\"от 60 ₾\"},{\"name\":\"Замена поплавка унитаза\",\"price\":\"от 20 ₾\"},{\"name\":\"Монтаж/демонтаж раковины\",\"price\":\"от 60 ₾\"},{\"name\":\"Монтаж/демонтаж кухонной мойки\",\"price\":\"от 50 ₾\"},{\"name\":\"Замена сифона\",\"price\":\"от 30 ₾\"},{\"name\":\"Монтаж/демонтаж полотенцесушителя\",\"price\":\"от 30 ₾\"},{\"name\":\"Монтаж/демонтаж фильтра питьевой воды\",\"price\":\"от 40 ₾\"},{\"name\":\"Монтаж/демонтаж магистрального фильтра предварительной очистки воды\",\"price\":\"от 50 ₾\"},{\"name\":\"Подключение стиральной машинки\",\"price\":\"от 20 ₾\"},{\"name\":\"Подключение посудомойки\",\"price\":\"от 20 ₾\"},{\"name\":\"Герметизация борта ванны герметиком\",\"price\":\"от 20 ₾\"},{\"name\":\"Сварка ПВХ-труб, замена фиттингов\",\"price\":\"от 20 ₾\"}]},{\"sectionName\":\"Электрика\",\"content\":[{\"name\":\"Ремонт/замена розетки\",\"price\":\"от 10 ₾\"},{\"name\":\"Ремонт/замена выключателя\",\"price\":\"от 10 ₾\"},{\"name\":\"Ремонт/замена люстры или светильника\",\"price\":\"от 20 ₾\"},{\"name\":\"Монтаж кабеля (штроба, наружный, кабель-канал)\",\"price\":\"от 5 ₾ за точку\"},{\"name\":\"Полный монтаж электропроводки (от сборки щитка до подрозетников)\",\"price\":\"от 5 ₾ за точку\"},{\"name\":\"Ремонт электроприборов\",\"price\":\"от 5 ₾ за точку\"}]},{\"sectionName\":\"Слесарные работы\",\"content\":[{\"name\":\"Монтаж полки/зеркала/картины/гардины\",\"price\":\"от 30 ₾\"},{\"name\":\"Монтаж карниза\",\"price\":\"от 30 ₾\"},{\"name\":\"Ремонт/замена замка\",\"price\":\"от 40 ₾\"},{\"name\":\"Врезка замка\",\"price\":\"от 60 ₾\"},{\"name\":\"Сборка и установка и ремонт мебели\",\"price\":\"от 10 ₾\"},{\"name\":\"Монтаж вытяжки, воздуховодов\",\"price\":\"от 30 ₾\"},{\"name\":\"Дуговая сварка электродом\",\"price\":\"от 30 ₾\"}]}]");

/***/ }),

/***/ "yam3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"column1":"column1__kc0gn","column2":"column2__Rb43C","columnWide":"columnWide__9hFEK","column-wide":"column-wide__EYiKM"});

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map