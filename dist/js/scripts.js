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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(29);
var has = __webpack_require__(4);
var uid = __webpack_require__(31);
var NATIVE_SYMBOL = __webpack_require__(32);
var USE_SYMBOL_AS_UID = __webpack_require__(52);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(34);
var anObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(15);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(18).f;
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(11);
var setGlobal = __webpack_require__(24);
var copyConstructorProperties = __webpack_require__(47);
var isForced = __webpack_require__(39);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(16);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(9);
var has = __webpack_require__(4);
var setGlobal = __webpack_require__(24);
var inspectSource = __webpack_require__(36);
var InternalStateModule = __webpack_require__(28);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(46);
var requireObjectCoercible = __webpack_require__(10);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(13);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var propertyIsEnumerableModule = __webpack_require__(45);
var createPropertyDescriptor = __webpack_require__(16);
var toIndexedObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(15);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(34);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(48);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(10);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(57);
var stickyHelpers = __webpack_require__(78);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(9);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29);
var uid = __webpack_require__(31);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(27);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(63);
var global = __webpack_require__(0);
var isObject = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(9);
var objectHas = __webpack_require__(4);
var sharedKey = __webpack_require__(25);
var hiddenKeys = __webpack_require__(19);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(30);
var store = __webpack_require__(37);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var defineProperties = __webpack_require__(65);
var enumBugKeys = __webpack_require__(27);
var hiddenKeys = __webpack_require__(19);
var html = __webpack_require__(66);
var documentCreateElement = __webpack_require__(35);
var sharedKey = __webpack_require__(25);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(35);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(3);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(37);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(24);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIndexedObject = __webpack_require__(12);
var indexOf = __webpack_require__(49).indexOf;
var hiddenKeys = __webpack_require__(19);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(15);
var definePropertyModule = __webpack_require__(7);
var createPropertyDescriptor = __webpack_require__(16);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(42);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var exec = __webpack_require__(23);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(13);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var ownKeys = __webpack_require__(64);
var getOwnPropertyDescriptorModule = __webpack_require__(18);
var definePropertyModule = __webpack_require__(7);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(12);
var toLength = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(50);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(32);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(38);
var enumBugKeys = __webpack_require__(27);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var isArray = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(2);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(2);
var V8_VERSION = __webpack_require__(41);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var aPossiblePrototype = __webpack_require__(72);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(5);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(10);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(44);
var redefine = __webpack_require__(11);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(2);
var regexpExec = __webpack_require__(23);
var createNonEnumerableProperty = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(58).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(13);
var regexpExec = __webpack_require__(23);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 62 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(36);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);
var getOwnPropertyNamesModule = __webpack_require__(26);
var getOwnPropertySymbolsModule = __webpack_require__(51);
var anObject = __webpack_require__(5);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var definePropertyModule = __webpack_require__(7);
var anObject = __webpack_require__(5);
var objectKeys = __webpack_require__(53);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(7).f;
var has = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(17);
var isObject = __webpack_require__(3);
var toObject = __webpack_require__(22);
var toLength = __webpack_require__(14);
var createProperty = __webpack_require__(40);
var arraySpeciesCreate = __webpack_require__(54);
var arrayMethodHasSpeciesSupport = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(2);
var V8_VERSION = __webpack_require__(41);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var fails = __webpack_require__(1);
var has = __webpack_require__(4);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(6);
var defineProperty = __webpack_require__(7).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(0);
var isForced = __webpack_require__(39);
var redefine = __webpack_require__(11);
var has = __webpack_require__(4);
var classof = __webpack_require__(13);
var inheritIfRequired = __webpack_require__(75);
var toPrimitive = __webpack_require__(15);
var fails = __webpack_require__(1);
var create = __webpack_require__(33);
var getOwnPropertyNames = __webpack_require__(26).f;
var getOwnPropertyDescriptor = __webpack_require__(18).f;
var defineProperty = __webpack_require__(7).f;
var trim = __webpack_require__(76).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var setPrototypeOf = __webpack_require__(56);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(10);
var whitespaces = __webpack_require__(77);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(1);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var global = __webpack_require__(0);
var userAgent = __webpack_require__(42);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

exports.f = wellKnownSymbol;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(48);
var has = __webpack_require__(4);
var wrappedWellKnownSymbolModule = __webpack_require__(80);
var defineProperty = __webpack_require__(7).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(83);
var IndexedObject = __webpack_require__(46);
var toObject = __webpack_require__(22);
var toLength = __webpack_require__(14);
var arraySpeciesCreate = __webpack_require__(54);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(68);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(82).forEach;
var arrayMethodIsStrict = __webpack_require__(85);
var arrayMethodUsesToLength = __webpack_require__(70);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(71);
var classofRaw = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(2);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(12);
var addToUnscopables = __webpack_require__(106);
var Iterators = __webpack_require__(43);
var InternalStateModule = __webpack_require__(28);
var defineIterator = __webpack_require__(88);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var createIteratorConstructor = __webpack_require__(107);
var getPrototypeOf = __webpack_require__(90);
var setPrototypeOf = __webpack_require__(56);
var setToStringTag = __webpack_require__(67);
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(30);
var Iterators = __webpack_require__(43);
var IteratorsCore = __webpack_require__(89);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(90);
var createNonEnumerableProperty = __webpack_require__(9);
var has = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(2);
var IS_PURE = __webpack_require__(30);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toObject = __webpack_require__(22);
var sharedKey = __webpack_require__(25);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(108);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(111);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(112);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(118);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(119);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(122);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(123);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_23__);

























function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StartSlider = function StartSlider(props) {
  _classCallCheck(this, StartSlider);

  this.slider = document.querySelector(props.selector);
  this.sliderNumber = Number(props.sliderNumber);
  this.windowWidth = document.documentElement.clientWidth;
  this.buttonsSwitchPos = props.buttonsSwitchPos;
  this.buttonsSwitchView = props.buttonsSwitchView;
  this.arrowsSwitchView = props.arrowsSwitchView;
  this.sliderWidth = props.sliderWidth;
  this.sliderHeight = props.sliderHeight;
  this.sliderMinHeight = props.sliderMinHeight;
  this.fontSize = props.fontSize;
  this.settings = props.slideSettings;
  this.borderRadius = props.borderRadius;
  this.marginTop = props.marginTop;
  this.marginRight = props.marginRight;
  this.marginLeft = props.marginLeft;
  this.marginBottom = props.marginBottom;
  this.slideAllArray = this.settings;
  this.slideIndex = 0;
  this.slidePosition = 0;
  this.slidesWidth = 0;
  this.slidesCount = 0;
  this.slideCountCopy = 0;
  this.slidesCountWithCopy = 0;
  this.slidesWidthCopy = 0;
  this.arrows = props.arrows;
  this.slidesAnimation = props.slidesAnimation;
  this.buttonsSwitches = props.buttonsSwitches;
  this.supportWebp = false;
  this.buttonClass = props.buttonClass;
  this.slideAutoPlay = props.autoPlay;
  this.slideAutoPlaySpeed = props.autoPlaySpeed;
  this.sliderElems = {
    slidesElem: '',
    slidesArr: [],
    buttonsSwitches: '',
    arrowsSwitches: '',
    indicatorElem: ''
  };
  this.view = {
    addElemSlider: function addElemSlider(slider, elem) {
      slider.appendChild(elem);
    }
  }, this.model = {
    createSlide: function createSlide(slider, settings) {
      var _this = this;

      // return default value
      this.slideCountCopy = 0;
      this.slidesCountWithCopy = 0;
      this.slidesCount = 0;
      this.slideCountCopy = 0;
      this.sliderElems.slidesArr = [];
      this.sliderElems.slidesElem = [];
      this.slidePosition = 0;
      this.sliderWidth = this.slider.offsetWidth;
      this.slidePosition = 0 - this.sliderWidth;
      var tagSlides = document.createElement('div');
      tagSlides.className = 'slider-start__slides';
      var procentSlidesHeight = this.sliderHeight / 1500;
      var slidesHeight = document.documentElement.clientWidth * procentSlidesHeight;

      if (document.documentElement.clientWidth < 1500) {
        tagSlides.style.height = "".concat(slidesHeight, "px");
      } else {
        tagSlides.style.height = "".concat(this.sliderHeight, "px");
      }

      tagSlides.style.minHeight = "".concat(this.sliderMinHeight, "px");
      var slideNumber = 1;

      var createSlidesElems = function createSlidesElems(slideIndex, copySlide) {
        _this.slidesCountWithCopy++;
        var tagSlide = document.createElement('div');
        tagSlide.className = copySlide ? 'slider-start__slide slider-start__slide-cloned' : 'slider-start__slide';
        tagSlide.setAttribute('data-slide-number', slideNumber);
        tagSlide.setAttribute('data-slide-type', settings[slideIndex].slideType);
        tagSlide.style.width = _this.sliderWidth + 'px';
        if (_this.borderRadius) tagSlide.style.borderRadius = "".concat(_this.borderRadius, "px");
        if (slideIndex === 0 && !copySlide) tagSlides.style.transform = "translate3d(".concat(_this.slidePosition, "px, 0, 0)");
        if (slideIndex === 0 && !copySlide) setTimeout(function () {
          return tagSlide.className += ' active';
        }, 10);
        tagSlides.appendChild(tagSlide);
        var tagSliderBackground = document.createElement('div');
        tagSliderBackground.className = 'slider-start__bg';
        if (settings[slideIndex].slideEffect) tagSliderBackground.setAttribute('data-animation', settings[slideIndex].slideEffect);
        if (settings[slideIndex].backgroundImage) tagSliderBackground.style.backgroundImage = "url(".concat(settings[slideIndex].backgroundImage, ")");
        if (settings[slideIndex].backgroundColor) tagSliderBackground.style.backgroundColor = settings[slideIndex].backgroundColor;
        tagSlide.appendChild(tagSliderBackground);

        if (copySlide) {
          _this.slideCountCopy++;
        } else {
          slideNumber = slideIndex + 1;
          _this.slidesCount++;

          _this.sliderElems.slidesArr.push(tagSlide);
        }

        var tagContainerSlide = document.createElement('div');
        tagContainerSlide.className = 'slider-start__container';
        tagSlide.appendChild(tagContainerSlide);
        var tagSlideContent = document.createElement('div');
        tagSlideContent.className = 'slider-start__content';
        tagContainerSlide.appendChild(tagSlideContent);
        var tagSlideInfo = document.createElement('div');
        tagSlideInfo.className = "slider-start__info ".concat(settings[slideIndex].slideType);
        if (settings[slideIndex].titleAnimation && /info-(1|2)/.test(settings[slideIndex].slideType)) tagSlideInfo.className += ' title-animation';
        tagSlideContent.appendChild(tagSlideInfo);

        switch (true) {
          case /info-(1|2)/.test(settings[slideIndex].slideType):
            if (settings[slideIndex].textAccent) {
              var tagSlideTextAccent = document.createElement('span');
              tagSlideTextAccent.className = 'slider-start__text-accent';
              tagSlideTextAccent.style.color = settings[slideIndex].textAccentColor;
              tagSlideTextAccent.innerHTML = settings[slideIndex].textAccent;
              tagSlideInfo.appendChild(tagSlideTextAccent);
            }

            if (settings[slideIndex].timer) {
              _this.supportFunctions.createTimer(tagSlideInfo, '', settings, slideIndex);
            }

            if (settings[slideIndex].title) {
              var tagSlideTitle = document.createElement(_this.settings[slideIndex].titleTag ? _this.settings[slideIndex].titleTag : 'div');
              tagSlideTitle.className = 'slider-start__title';
              tagSlideTitle.style.color = settings[slideIndex].titleColor;
              tagSlideTitle.innerHTML = settings[slideIndex].title;
              tagSlideInfo.appendChild(tagSlideTitle);
            }

            if (settings[slideIndex].text) {
              var tagSlideText = document.createElement('p');
              tagSlideText.className = 'slider-start__text';
              tagSlideText.style.color = settings[slideIndex].textColor;
              tagSlideText.innerHTML = settings[slideIndex].text;
              tagSlideInfo.appendChild(tagSlideText);
            }

            if (settings[slideIndex].buttonText1) {
              var tagSlideButtonBox = document.createElement('div');
              tagSlideButtonBox.className = 'slider-start__button-box';
              tagSlideInfo.appendChild(tagSlideButtonBox);
              var tagSlideButton1 = document.createElement('a');
              tagSlideButton1.className = _this.settings[slideIndex].buttonClass1 ? "slider-start__button ".concat(settings[slideIndex].buttonClass1) : 'slider-start__button start-slider-button-1';
              tagSlideButton1.setAttribute('href', settings[slideIndex].buttonLink1);
              tagSlideButton1.innerHTML = settings[slideIndex].buttonText1;
              tagSlideButtonBox.appendChild(tagSlideButton1);

              if (settings[slideIndex].buttonText2) {
                var tagSlideButton2 = document.createElement('a');
                tagSlideButton2.className = settings[slideIndex].buttonClass2 ? "slider-start__button ".concat(settings[slideIndex].buttonClass2) : 'slider-start__button start-slider-button-2';
                tagSlideButton2.setAttribute('href', settings[slideIndex].buttonLink2);
                tagSlideButton2.innerHTML = settings[slideIndex].buttonText2;
                tagSlideButtonBox.appendChild(tagSlideButton2);
              }
            }

            break;

          case /video/.test(settings[slideIndex].slideType):
            var tagInfoLeft = document.createElement('div');
            tagInfoLeft.className = 'slider-start__info-left';
            tagSlideInfo.appendChild(tagInfoLeft);
            var tagInfoRight = document.createElement('div');
            tagInfoRight.className = 'slider-start__info-right';
            tagSlideInfo.appendChild(tagInfoRight);
            var tagInfoVideoDesk = document.createElement('div');
            tagInfoVideoDesk.className = 'slider-start__info-video slider-start__info-video_desktop';
            tagInfoRight.appendChild(tagInfoVideoDesk);
            var tagInfoVideoMobile = document.createElement('div');
            tagInfoVideoMobile.className = 'slider-start__info-video slider-start__info-video_mobile';
            tagInfoLeft.appendChild(tagInfoVideoMobile);

            if (settings[slideIndex].videoIframe) {
              tagInfoVideoDesk.innerHTML = settings[slideIndex].videoIframe;
              tagInfoVideoMobile.innerHTML = settings[slideIndex].videoIframe;
            }

            if (settings[slideIndex].textAccent) {
              var _tagSlideTextAccent = document.createElement('span');

              _tagSlideTextAccent.className = 'slider-start__text-accent';
              _tagSlideTextAccent.style.color = settings[slideIndex].textAccentColor;
              _tagSlideTextAccent.innerHTML = settings[slideIndex].textAccent;
              tagInfoLeft.appendChild(_tagSlideTextAccent);
            }

            if (settings[slideIndex].title) {
              var _tagSlideTitle = document.createElement(_this.settings[slideIndex].titleTag ? _this.settings[slideIndex].titleTag : 'div');

              _tagSlideTitle.className = 'slider-start__title';
              _tagSlideTitle.style.color = settings[slideIndex].titleColor;
              _tagSlideTitle.innerHTML = settings[slideIndex].title;
              tagInfoLeft.appendChild(_tagSlideTitle);
            }

            if (settings[slideIndex].text) {
              var _tagSlideText = document.createElement('p');

              _tagSlideText.className = 'slider-start__text';
              _tagSlideText.style.color = settings[slideIndex].textColor;
              _tagSlideText.innerHTML = settings[slideIndex].text;
              tagInfoLeft.appendChild(_tagSlideText);
            }

            if (settings[slideIndex].buttonText1) {
              var _tagSlideButtonBox = document.createElement('div');

              _tagSlideButtonBox.className = 'slider-start__button-box';
              tagInfoLeft.appendChild(_tagSlideButtonBox);

              var _tagSlideButton = document.createElement('a');

              _tagSlideButton.className = _this.settings[slideIndex].buttonClass1 ? "slider-start__button ".concat(_this.settings[slideIndex].buttonClass1) : 'slider-start__button start-slider-button-1';

              _tagSlideButton.setAttribute('href', settings[slideIndex].buttonLink1);

              _tagSlideButton.innerHTML = settings[slideIndex].buttonText1;

              _tagSlideButtonBox.appendChild(_tagSlideButton);

              if (settings[slideIndex].buttonText2) {
                var _tagSlideButton2 = document.createElement('a');

                _tagSlideButton2.className = settings[slideIndex].buttonClass2 ? "slider-start__button ".concat(settings[slideIndex].buttonClass2) : 'slider-start__button start-slider-button-2';

                _tagSlideButton2.setAttribute('href', settings[slideIndex].buttonLink2);

                _tagSlideButton2.innerHTML = settings[slideIndex].buttonText2;

                _tagSlideButtonBox.appendChild(_tagSlideButton2);
              }
            }

            break;

          case /product/.test(settings[slideIndex].slideType):
            if (settings[slideIndex].labelText) {
              var tagLabel = document.createElement('div');
              tagLabel.className = 'slider-start__label';
              tagLabel.innerHTML = settings[slideIndex].labelText;
              if (settings[slideIndex].labelColorText) tagLabel.style.color = settings[slideIndex].labelColorText;
              if (settings[slideIndex].labelBackgroundColor) tagLabel.style.backgroundColor = settings[slideIndex].labelBackgroundColor;
              tagSlideInfo.appendChild(tagLabel);
            }

            var tagSlideProductImgBox = document.createElement('div');
            tagSlideProductImgBox.className = 'slider-start__product-imgbox';
            tagSlideInfo.appendChild(tagSlideProductImgBox);
            var tagSlideProductImglink = document.createElement('a');
            tagSlideProductImglink.setAttribute('href', settings[slideIndex].productLink);
            tagSlideProductImgBox.appendChild(tagSlideProductImglink);
            var tagSlideProductPicture = document.createElement('picture');
            tagSlideProductImglink.appendChild(tagSlideProductPicture);

            if (settings[slideIndex].productImgWebp) {
              var tagSource = document.createElement('source');
              tagSource.setAttribute('type', 'image/webp');
              tagSource.setAttribute('srcset', settings[slideIndex].productImgWebp);
              tagSlideProductPicture.appendChild(tagSource);
            }

            var tagSlideProductImg = document.createElement('img');
            tagSlideProductImg.className = 'slider-start__product-imgbox_img';
            tagSlideProductImg.setAttribute('src', settings[slideIndex].productImg);
            tagSlideProductPicture.appendChild(tagSlideProductImg);
            var tagSlideProductInfo = document.createElement('div');
            tagSlideProductInfo.className = 'slider-start__product-info';
            tagSlideInfo.appendChild(tagSlideProductInfo);
            var tagSlideProductTitleLink = document.createElement('a');
            tagSlideProductTitleLink.className = 'slider-start__product-link';
            tagSlideProductTitleLink.setAttribute('href', settings[slideIndex].productLink);
            tagSlideProductInfo.appendChild(tagSlideProductTitleLink);
            var tagSlideProductTitle = document.createElement('div');
            tagSlideProductTitle.className = 'slider-start__product-title';
            tagSlideProductTitle.style.color = settings[slideIndex].titleColor;
            tagSlideProductTitle.innerHTML = settings[slideIndex].productTitle;
            tagSlideProductTitleLink.appendChild(tagSlideProductTitle);
            var tagStars = document.createElement('div');
            tagStars.className = 'slider-start__stars';
            tagSlideProductInfo.appendChild(tagStars);

            for (var starIndex = 0; starIndex < 5; starIndex++) {
              var tagStar = document.createElement('span');
              tagStar.className = starIndex >= Number(settings[slideIndex].valueStar) ? 'slider-start__star startwebsite-icon-star' : 'slider-start__star startwebsite-icon-star-active';
              if (settings[slideIndex].colorStar) tagStar.style.color = settings[slideIndex].colorStar;
              tagStars.appendChild(tagStar);
            }

            var tagSlideProductDescription = document.createElement('div');
            tagSlideProductDescription.className = 'slider-start__product-description';
            tagSlideProductDescription.style.color = settings[slideIndex].textColor;
            tagSlideProductDescription.innerHTML = settings[slideIndex].productDescription;
            tagSlideProductInfo.appendChild(tagSlideProductDescription);
            var tagSlideProductPrices = document.createElement('div');
            tagSlideProductPrices.className = 'slider-start__product-prices';
            tagSlideProductInfo.appendChild(tagSlideProductPrices);
            var tagSlideProductPrice = document.createElement('div');
            tagSlideProductPrice.className = 'slider-start__product-prices_current';
            tagSlideProductPrice.style.color = settings[slideIndex].productPriceColor;
            tagSlideProductPrice.innerHTML = settings[slideIndex].productPrice;
            tagSlideProductPrices.appendChild(tagSlideProductPrice);

            if (settings[slideIndex].productPriceNew) {
              var tagSlideProductPriceNew = document.createElement('div');
              tagSlideProductPriceNew.className = 'slider-start__product-prices_new';
              tagSlideProductPriceNew.style.color = settings[slideIndex].productPriceNewColor;
              tagSlideProductPriceNew.innerHTML = settings[slideIndex].productPriceNew;
              tagSlideProductPrices.appendChild(tagSlideProductPriceNew);
              var tagSlideProductPriceNewBlacken = document.createElement('span');
              tagSlideProductPriceNewBlacken.className = 'slider-start__product-prices_new-blacken';
              tagSlideProductPriceNewBlacken.style.backgroundColor = settings[slideIndex].productPriceNewColorBlacken;
              tagSlideProductPriceNew.appendChild(tagSlideProductPriceNewBlacken);
            }

            if (settings[slideIndex].buttonText1) {
              var tagSlideProductButttonBox = document.createElement('div');
              tagSlideProductButttonBox.className = 'slider-start__product-buttonbox';
              tagSlideProductInfo.appendChild(tagSlideProductButttonBox);
              var tagSlideProductButtton = document.createElement('a');
              tagSlideProductButtton.className = _this.settings[slideIndex].buttonClass ? "slider-start__button slider-start__product-button ".concat(_this.settings[slideIndex].buttonClass) : 'slider-start__button slider-start__product-button start-slider-button-1';
              tagSlideProductButtton.setAttribute('href', settings[slideIndex].productLink);
              tagSlideProductButtton.innerHTML = settings[slideIndex].buttonText1;
              tagSlideProductButttonBox.appendChild(tagSlideProductButtton);
            }

            if (settings[slideIndex].timer) {
              _this.supportFunctions.createTimer(tagSlideProductPrices, '', settings, slideIndex);
            }

            break;

          case /banner/.test(settings[slideIndex].slideType):
            var tagBannerLink = document.createElement('a');
            tagBannerLink.className = 'slider-start__banner-link';

            if (settings[slideIndex].buttonLink1) {
              tagBannerLink.href = settings[slideIndex].buttonLink1;
              var startX;
              var endX;
              tagBannerLink.addEventListener('click', function (e) {
                e.preventDefault();
              });
              tagBannerLink.addEventListener('mousedown', function (e) {
                startX = e.clientX;
              });
              tagBannerLink.addEventListener('mouseup', function (e) {
                endX = e.clientX;
              });
              tagBannerLink.addEventListener('click', function (e) {
                if (startX == endX) {
                  window.location.href = settings[slideIndex].buttonLink1;
                }
              });
            }

            tagSlideInfo.appendChild(tagBannerLink);
            break;
        }
      };

      settings.reverse();

      for (var slideIndex = 0; slideIndex < this.slideAllArray.length; slideIndex++) {
        if (settings[slideIndex].slideActive) {
          createSlidesElems(slideIndex, true);
          break;
        }
      }

      settings.reverse();

      for (var _slideIndex = 0; _slideIndex < this.slideAllArray.length; _slideIndex++) {
        if (settings[_slideIndex].slideActive) {
          createSlidesElems(_slideIndex, false);
        }
      }

      for (var _slideIndex2 = 0; _slideIndex2 < this.slideAllArray.length; _slideIndex2++) {
        if (settings[_slideIndex2].slideActive) {
          createSlidesElems(_slideIndex2, true);
          break;
        }
      }

      this.slidesWidth = this.sliderWidth * this.slidesCountWithCopy;
      this.slidesWidthCopy = this.sliderWidth * this.slideCountCopy;
      tagSlides.style.width = this.slidesWidth + 'px';
      this.slideIndex = 0;
      this.sliderElems.slidesElem = tagSlides;
      return tagSlides;
    },
    addEvent: function addEvent(elem, event, fn) {
      elem.addEventListener(event, function (e) {
        fn(elem, e.target);
      });
    },
    createArrows: function createArrows() {
      var tagArrows = document.createElement('div');
      tagArrows.className = 'slider-start__arrows';
      tagArrows.setAttribute('data-arrow-view', this.arrowsSwitchView);
      var tagArrowPrev = document.createElement('span');
      tagArrowPrev.className = 'slider-start__arrows_prev start-icon-arrow-prev';
      var tagArrowNext = document.createElement('span');
      tagArrowNext.className = 'slider-start__arrows_next start-icon-arrow-next';
      tagArrows.appendChild(tagArrowPrev);
      tagArrows.appendChild(tagArrowNext);
      return tagArrows;
    },
    switchSlideArrow: function switchSlideArrow(arrows, target) {
      if (/slider-start__arrows_prev/.test(target.className)) {
        this.supportFunctions.switchSlide('left');
      }

      if (/slider-start__arrows_next/.test(target.className)) {
        this.supportFunctions.switchSlide('right');
      }
    },
    createButtonsSwitches: function createButtonsSwitches(slider, slideCount) {
      var tagButtonsSwitches = document.createElement('div');
      tagButtonsSwitches.className = 'slider-start__buttons-switches';
      tagButtonsSwitches.setAttribute('data-buttons-view', this.buttonsSwitchView);

      function getButtonSwitchSize() {
        var widthButtonsSwitches = slider.offsetWidth;
        var buttonSwitchPaddindSide = slideCount * (5 * 2);
        var buttonSwitchSize = (widthButtonsSwitches - buttonSwitchPaddindSide) / slideCount;
        if (buttonSwitchSize > 60) buttonSwitchSize = 60;
        return buttonSwitchSize;
      }

      var buttonSwitchSize = getButtonSwitchSize();

      for (var i = 0; i < slideCount; i++) {
        var tagButtonSwitch = document.createElement('button');
        tagButtonSwitch.setAttribute('role', 'button');
        tagButtonSwitch.className = 'slider-start__button-switch';

        if (/3|4/.test(this.buttonsSwitchView)) {
          tagButtonSwitch.innerHTML = "<span style=\"max-width: ".concat(buttonSwitchSize, "px\">").concat(i + 1, "</span>");
        } else {
          tagButtonSwitch.innerHTML = "<span style=\"max-width: ".concat(buttonSwitchSize, "px\"></span>");
        }

        tagButtonsSwitches.appendChild(tagButtonSwitch);
        if (i === 0) tagButtonSwitch.className = 'slider-start__button-switch slider-start__button-switch_active';
      }

      return tagButtonsSwitches;
    },
    switchSlideButton: function switchSlideButton(buttons, target) {
      var buttonsArr = _toConsumableArray(buttons.children);

      var indexButton;

      if (/slider-start__button-switch/.test(target.className)) {
        indexButton = buttonsArr.indexOf(target);
        this.supportFunctions.switchSlide('index', indexButton);
      }

      if (target.tagName && target.tagName === 'SPAN') {
        indexButton = buttonsArr.indexOf(target.parentElement);
        this.supportFunctions.switchSlide('index', indexButton);
      }
    },
    changeToWebp: function changeToWebp() {
      var _this2 = this;

      function checkWebp(feature, callback) {
        var kTestImages = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        var img = new Image();

        img.onload = function () {
          var result = img.width > 0 && img.height > 0;
          callback(feature, result);
        };

        img.onerror = function () {
          callback(feature, false);
        };

        img.src = "data:image/webp;base64," + kTestImages[feature];
      }

      checkWebp('lossy', function (feature, result) {
        if (result) {
          var _loop = function _loop(i) {
            if (_this2.settings[i].backgroundImageWebp) {
              _this2.sliderElems.slidesArr[i].children.forEach(function (child, index, array) {
                if (/slider-start__bg/.test(child.className)) {
                  child.style.backgroundImage = "url(".concat(_this2.settings[i].backgroundImageWebp, ")");
                }
              });
            }
          };

          for (var i = 0; i < _this2.sliderElems.slidesArr.length; i++) {
            _loop(i);
          }

          _this2.supportWebp = result;
        }
      });
    },
    switchDrag: function switchDrag(elems, slides) {
      var _this3 = this;

      var startX;
      var changeX;
      elems.forEach(function (elem) {
        var move = function move(e) {
          elem.style.cursor = 'grabbing';
          changeX = _this3.slidePosition + (e.clientX - startX);
          slides.style.transform = "translate3d(".concat(changeX, "px, 0, 0)");
        };

        elem.addEventListener('mousedown', function (e) {
          e.preventDefault();
          startX = e.clientX;
          elem.addEventListener('mousemove', move);
        });
        elem.addEventListener('mouseup', function () {
          var canSwitch = true;
          elem.style.cursor = 'grab';
          slides.style.transform = "translate3d(".concat(_this3.slidePosition, "px, 0, 0)");

          if (changeX > _this3.slidePosition + _this3.sliderWidth / 7) {
            canSwitch = false;

            _this3.supportFunctions.switchSlide('left');
          }

          if (changeX < _this3.slidePosition - _this3.sliderWidth / 7 && canSwitch) {
            _this3.supportFunctions.switchSlide('right');
          }

          elem.removeEventListener('mousemove', move);
        });
        elem.addEventListener('mouseenter', function () {
          elem.style.cursor = 'grab';
        });
        elem.addEventListener('mouseleave', function () {
          slides.style.transform = "translate3d(".concat(_this3.slidePosition, "px, 0, 0)");
          elem.removeEventListener('mousemove', move);
        });
      });
    },
    switchSwipe: function switchSwipe(elem) {
      var _this4 = this;

      var touchStartX;
      var touchChangeX;
      var touchStartY;
      var touchChangeY;
      elem.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      });
      elem.addEventListener('touchmove', function (e) {
        touchChangeX = touchStartX - e.touches[0].clientX;
        touchChangeY = Math.ceil(touchStartY - e.touches[0].clientY);
      });
      elem.addEventListener('touchend', function (e) {
        if (touchChangeY < 30 && touchChangeY > -30) {
          if (touchChangeX > 15) {
            _this4.supportFunctions.switchSlide('right');
          }

          if (touchChangeX < -15) {
            _this4.supportFunctions.switchSlide('left');
          }
        }

        touchChangeX = 0;
      });
    },
    controllSize: function controllSize(elem) {
      var elemWidth = elem.offsetWidth;
      var replaceClass = elem.className.replace(/ (small|middle|large)-start-slider/gi, '');
      elem.className = replaceClass;

      if (elemWidth <= 400) {
        elem.className += ' small-start-slider';
      } else if (elemWidth <= 800 && elemWidth > 400) {
        elem.className += ' middle-start-slider';
      } else {
        elem.className += ' large-start-slider';
      }
    }
  }, this.supportFunctions = {
    switchSlide: function switchSlide(where, index, action) {
      var _this5 = this;

      var leftSwitch = false;
      var rightSwitch = false;

      if (where === 'left') {
        leftSwitch = true;

        if (this.slideIndex == 0) {
          this.slideIndex = this.slidesCount;
        }

        this.slideIndex--;
        var leftSlidePosition = this.slidePosition + this.sliderWidth;
        this.slidePosition = leftSlidePosition;

        if (leftSlidePosition > 0 - this.sliderWidth) {
          this.slidePosition = 0 - this.slidesWidth + this.slidesWidthCopy;
        }
      }

      if (where === 'right') {
        rightSwitch = true;
        this.slideIndex++;

        if (this.slideIndex > this.slidesCount - 1) {
          this.slideIndex = 0;
        }

        var rightSlidePosition = this.slidePosition - this.sliderWidth;
        this.slidePosition = rightSlidePosition;

        if (rightSlidePosition < 0 - this.slidesWidth + this.slidesWidthCopy) {
          this.slidePosition = 0 - this.sliderWidth;
        }
      }

      if (where === 'index') {
        this.slideIndex = index;
        this.slidePosition = 0 - this.sliderWidth * (index + 1);
      } // Remove and show buttons


      if (this.sliderElems.buttonsSwitches) {
        var buttonsSwitchesArray = _toConsumableArray(this.sliderElems.buttonsSwitches.children);

        for (var i = 0; i < buttonsSwitchesArray.length; i++) {
          buttonsSwitchesArray[i].className = 'slider-start__button-switch';
        }

        buttonsSwitchesArray[this.slideIndex].className += ' slider-start__button-switch_active';
      } // Remove and show active slides


      for (var _i = 0; _i < this.sliderElems.slidesArr.length; _i++) {
        var classWithOutActive = this.sliderElems.slidesArr[_i].className.replace(/(\s|)active/gi, '');

        this.sliderElems.slidesArr[_i].className = classWithOutActive;
      }

      this.sliderElems.slidesArr[this.slideIndex].className += ' active';
      this.sliderElems.slidesElem.style.transform = "translate3d(".concat(this.slidePosition, "px, 0, 0)");
      this.sliderElems.slidesElem.setAttribute('data-slides-animation', this.slidesAnimation);

      if (this.slideIndex == 0 && rightSwitch) {
        this.sliderElems.slidesElem.style.transition = 'none';
      }

      if (this.slideIndex == this.slidesCount - 1 && leftSwitch) {
        this.sliderElems.slidesElem.style.transition = 'none';
      }

      this.sliderElems.slidesElem.addEventListener('transitionend', function () {
        _this5.sliderElems.slidesElem.style.transition = '';

        _this5.sliderElems.slidesElem.removeAttribute('data-slides-animation');
      });
      if (this.arrows) this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'arrows');
      if (this.buttonsSwitches) this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'buttons');

      if (this.slideAutoPlay) {
        this.supportFunctions.addSlideAutoPlay();
        this.supportFunctions.changeColorElemsNavigation(this.slideIndex, 'indicator');
      }

      this.supportFunctions.addSliderEffects();
    },
    changeColorElemsNavigation: function changeColorElemsNavigation() {
      var _this6 = this;

      var slideIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var elem = arguments.length > 1 ? arguments[1] : undefined;
      var arrowsSwitches = this.sliderElems.arrowsSwitches;
      var buttonsSwitchesArr = this.sliderElems.buttonsSwitches.children;
      var currentIndexSlide = this.sliderElems.slidesArr.indexOf(this.sliderElems.slidesArr[slideIndex]);

      if (currentIndexSlide == slideIndex) {
        if (elem === 'arrows') arrowsSwitches.style.color = this.settings[slideIndex].colorNavigation;

        if (elem === 'buttons') {
          buttonsSwitchesArr.forEach(function (button) {
            button.lastChild.style.backgroundColor = _this6.settings[slideIndex].colorNavigation;

            if (_this6.buttonsSwitchView === '4') {
              button.lastChild.style.color = _this6.settings[slideIndex].colorNavigation;
              button.lastChild.style.borderColor = _this6.settings[slideIndex].colorNavigation;
            }
          });
        }

        if (elem === 'indicator') {
          this.sliderElems.indicatorElem.firstChild.firstChild.style.backgroundColor = this.settings[slideIndex].colorNavigation;
        }
      }
    },
    addSliderEffects: function addSliderEffects() {
      var _this7 = this;

      var _loop2 = function _loop2(i) {
        if (_this7.settings[i].slideActive) {
          setTimeout(function () {
            if (/parallax-text/gi.test(_this7.settings[i].slideEffect) && /active/gi.test(_this7.sliderElems.slidesArr[i].className)) _this7.supportFunctions.addParallaxInfo(i);
            if (/background-movement-()/gi.test(_this7.settings[i].slideEffect) && /active/gi.test(_this7.sliderElems.slidesArr[i].className)) _this7.supportFunctions.addBackgroundMovement(i);
            if (_this7.settings[i].slideEffect === 'pallaxMouseMove' && /active/gi.test(_this7.sliderElems.slidesArr[i].className)) _this7.supportFunctions.addParallaxMouseMove(i);
            if (_this7.settings[i].slideEffect === 'backgroundVideo' && /active/gi.test(_this7.sliderElems.slidesArr[i].className)) _this7.supportFunctions.addBackgroundVideo(i);
            if (/info-/gi.test(_this7.settings[i].slideType) && _this7.settings[i].titleAnimation && /active/gi.test(_this7.sliderElems.slidesArr[i].className)) _this7.supportFunctions.addTitleAnimation(i);
          }, 11);
        }
      };

      for (var i = 0; i < this.settings.length; i++) {
        _loop2(i);
      }
    },
    addSlideAutoPlay: function addSlideAutoPlay() {
      var _this8 = this;

      var indicatorElem = this.sliderElems.indicatorElem;
      var indicatorSize = 0;

      if (indicatorElem) {
        this.slider.removeChild(indicatorElem);
      }

      var tagIndicator = document.createElement('div');
      tagIndicator.className = 'slider-start__indicator';
      var tagIndicatorLines = document.createElement('div');
      tagIndicatorLines.className = 'slider-start__indicator-lines';
      var tagIndicatorLineTop = document.createElement('div');
      tagIndicatorLineTop.className = 'slider-start__indicator-lines_top';
      var tagIndicatorLineBottom = document.createElement('div');
      tagIndicatorLineBottom.className = 'slider-start__indicator-lines_bottom';
      this.slider.appendChild(tagIndicator);
      tagIndicator.appendChild(tagIndicatorLines);
      tagIndicatorLines.appendChild(tagIndicatorLineTop);
      tagIndicatorLines.appendChild(tagIndicatorLineBottom);
      this.sliderElems.indicatorElem = tagIndicator;
      var timeIndicator = setInterval(function () {
        if (indicatorSize < 100) {
          indicatorSize += 100 / (_this8.slideAutoPlaySpeed * 10);
        }

        _this8.sliderElems.indicatorElem.lastChild.firstChild.style.width = "".concat(indicatorSize, "%");

        if (_this8.sliderElems.buttonsSwitches) {
          _this8.sliderElems.buttonsSwitches.children.forEach(function (button) {
            button.addEventListener('click', function () {
              clearInterval(timeIndicator);
            });
          });
        }

        window.addEventListener('resize', function () {
          var windowWidthNow = document.documentElement.clientWidth;

          if (_this8.windowWidth !== windowWidthNow) {
            clearInterval(timeIndicator);
          }
        });

        if (_this8.arrows) {
          _this8.sliderElems.arrowsSwitches.children.forEach(function (arrow) {
            arrow.addEventListener('click', function () {
              clearInterval(timeIndicator);
            });
          });
        }

        _this8.slider.addEventListener('touchend', function () {
          clearInterval(timeIndicator);
        });

        _this8.slider.addEventListener('mouseup', function () {
          clearInterval(timeIndicator);
        });

        if (indicatorSize >= 100) {
          clearInterval(timeIndicator);

          _this8.supportFunctions.switchSlide('right', '', timeIndicator);
        }
      }, 100);
    },
    addParallaxInfo: function addParallaxInfo() {
      var slideIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var sliderInfoArray = [];

      var findInfo = function findInfo(elems) {
        elems.forEach(function (elem) {
          if (/slider-start__info/gi.test(elem.className)) {
            sliderInfoArray.push(elem);
            return true;
          } else {
            findInfo(elem.children);
          }
        });
      };

      findInfo(this.sliderElems.slidesArr);

      var changeTransformSliderInfo = function changeTransformSliderInfo(fn) {
        sliderInfoArray[slideIndex].style.transform = '';
        fn();
      };

      changeTransformSliderInfo(function () {
        window.addEventListener('scroll', function () {
          var translateSize = window.pageYOffset * 0.09;

          if (window.pageYOffset > 1500) {
            translateSize = 0;
            sliderInfoArray[slideIndex].style.transform = '';
          }

          if (translateSize > 69) {
            translateSize = 70;
          }

          sliderInfoArray[slideIndex].style.transform = "translateY(".concat(translateSize, "px)");
        });
      });
    },
    addBackgroundMovement: function addBackgroundMovement(slideIndex) {
      var _this9 = this;

      var slideBG;
      this.sliderElems.slidesArr[slideIndex].children.forEach(function (slideChild) {
        if (slideChild.getAttribute('data-animation')) {
          slideBG = slideChild;
          slideBG.removeAttribute('data-animation');
        }
      });
      setTimeout(function () {
        slideBG.setAttribute('data-animation', _this9.settings[slideIndex].slideEffect);
      }, 10);
    },
    addParallaxMouseMove: function addParallaxMouseMove(slideIndex) {
      var _this10 = this;

      var viewportLarge = window.innerWidth > 950 ? true : false;
      var slideBG;
      this.sliderElems.slidesArr[slideIndex].children.forEach(function (child, index, array) {
        if (/slider-start__bg/.test(child.className)) {
          slideBG = child;
        }
      });

      var BGmove = function BGmove(e) {
        slideBG.style.backgroundPosition = "-".concat(e.pageX * 0.06, "px -").concat(e.pageY * 0.06, "px");
      };

      var changeSliderBackground = function changeSliderBackground(fn) {
        slideBG.style.backgroundSize = '';
        slideBG.style.backgroundPosition = '0 0';
        fn();
      };

      if (viewportLarge) {
        changeSliderBackground(function () {
          slideBG.style.backgroundSize = 'calc(100% + 150px)';

          _this10.sliderElems.slidesArr[slideIndex].addEventListener('mousemove', BGmove);
        });
      }
    },
    addBackgroundVideo: function addBackgroundVideo(slideIndex) {
      var sliderBackgroundVideo;
      var sliderBG;
      this.sliderElems.slidesArr[slideIndex].children.forEach(function (elem) {
        if (/slider-start__bg/gi.test(elem.className)) sliderBG = elem;
        sliderBG.children.forEach(function (child) {
          if (/slider-start__video-bg/.test(child.className)) {
            sliderBackgroundVideo = child;
            sliderBG.removeChild(sliderBackgroundVideo);
          }
        });
      });
      var tagVideoMinHeight = this.slider.offsetHeight * 2;
      var tagVideo = document.createElement('video');
      tagVideo.className = 'slider-start__video-bg';
      tagVideo.style.minWidth = "".concat(tagVideoMinHeight, "px");
      tagVideo.setAttribute('autoplay', '');
      tagVideo.setAttribute('preload', 'metadata');
      tagVideo.setAttribute('muted', '');
      tagVideo.setAttribute('loop', '');
      sliderBG.appendChild(tagVideo);
      tagVideo.setAttribute('src', this.settings[slideIndex].backgroundVideo);
    },
    addTitleAnimation: function addTitleAnimation(slideIndex) {
      var titleText = this.settings[slideIndex].title;
      var titleElem;
      var slideLettersArray = [];

      var fintTitleELem = function fintTitleELem(elems) {
        elems.forEach(function (elem, index, array) {
          if (/slider-start__title/gi.test(elem.className)) {
            titleElem = elem;
          } else {
            fintTitleELem(elem.children);
          }
        });
      };

      fintTitleELem(this.sliderElems.slidesArr[slideIndex].children);

      var titleAnimation = function titleAnimation() {
        titleElem.innerHTML = '';
        var titleWords = titleText.split(' ');

        for (var i = 0; i < titleWords.length; i++) {
          var tagTitleWord = document.createElement('div');
          tagTitleWord.className = 'slider-start__title-word';
          titleElem.appendChild(tagTitleWord);

          for (var k = 0; k < titleWords[i].length; k++) {
            var tagTitleLetter = document.createElement('span');
            tagTitleLetter.className = 'slider-start__title-letter';
            tagTitleLetter.innerText = titleWords[i][k];
            slideLettersArray.push(tagTitleLetter);
            tagTitleWord.appendChild(tagTitleLetter);
          }
        }

        slideLettersArray.forEach(function (elem, index) {
          if (index & 1) {
            elem.style.top = '100px';
            elem.style.transition = 'top 1.2s ease';
            setTimeout(function () {
              elem.style.top = 0;
            }, 10);
          }

          if (index % 2 === 0) {
            elem.style.bottom = '100px';
            elem.style.transition = 'bottom 1.5s ease';
            setTimeout(function () {
              elem.style.bottom = 0;
            }, 10);
          }
        });
      };

      titleAnimation();
    },
    createTimer: function createTimer(elem, addClass, settings, slideIndex) {
      var distanceEndHtml = '<span class="slider-start__timer_days">' + '00' + '</span>' + '<span class="slider-start__timer_hours">' + '00' + '</span>' + '<span class="slider-start__timer_minutes">' + '00' + '</span>' + '<span class="slider-start__timer_seconds">' + '00';
      var tagTimer = document.createElement('div');
      tagTimer.className = addClass ? "slider-start__timer ".concat(addClass) : 'slider-start__timer';
      tagTimer.innerHTML = distanceEndHtml;
      if (settings[slideIndex].timerColor) tagTimer.style.color = settings[slideIndex].timerColor;
      elem.appendChild(tagTimer);
      var countDowndate = new Date(settings[slideIndex].timer).getTime();
      var countDownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDowndate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);
        var htmlDays = '<span class="slider-start__timer_days">' + days + '</span>';
        var htmlHours = '<span class="slider-start__timer_hours">' + hours + '</span>';
        var htmlMinutes = '<span class="slider-start__timer_minutes">' + minutes + '</span>';
        var htmlSeconds = '<span class="slider-start__timer_seconds">' + seconds;
        if (days < 10) htmlDays = '<span class="slider-start__timer_days">' + '0' + days + '</span>';
        if (hours < 10) htmlHours = '<span class="slider-start__timer_hours">' + '0' + hours + '</span>';
        if (minutes < 10) htmlMinutes = '<span class="slider-start__timer_minutes">' + '0' + minutes + '</span>';
        if (seconds < 10) htmlSeconds = '<span class="slider-start__timer_seconds">' + '0' + seconds;
        tagTimer.innerHTML = htmlDays + htmlHours + htmlMinutes + htmlSeconds;

        if (distance < 0) {
          clearInterval(countDownFunction);
          tagTimer.innerHTML = distanceEndHtml;
        }
      }, 1000);
    }
  }, this.controller = {
    addSliderElements: function addSliderElements() {
      var _this11 = this;

      if (this.slider) {
        if (this.sliderWidth) {
          this.slider.style.maxWidth = this.sliderWidth + 'px';
        }

        if (this.buttonsSwitchPos) this.slider.setAttribute('data-buttonswitch-position', this.buttonsSwitchPos);
        if (this.marginTop) this.slider.style.marginTop = "".concat(this.marginTop, "px");
        if (this.marginLeft) this.slider.style.marginLeft = "".concat(this.marginLeft, "px");
        if (this.marginRight) this.slider.style.marginRight = "".concat(this.marginRight, "px");
        if (this.marginBottom) this.slider.style.marginBottom = "".concat(this.marginBottom, "px");
        if (this.fontSize) this.slider.style.fontSize = "".concat(this.fontSize, "px");
        var slides = this.model.createSlide(this.slider, this.settings);
        this.view.addElemSlider(this.slider, slides);
        window.addEventListener('resize', function () {
          var windowWidthNow = document.documentElement.clientWidth;

          if (_this11.windowWidth !== windowWidthNow) {
            _this11.slider.removeChild(slides);

            slides = _this11.model.createSlide(_this11.slider, _this11.settings);

            _this11.slider.appendChild(slides);
          }
        });
      }

      if (this.buttonsSwitches) {
        var buttonsSwitches = this.model.createButtonsSwitches(this.slider, this.slidesCount);
        this.view.addElemSlider(this.slider, buttonsSwitches);
        this.sliderElems.buttonsSwitches = buttonsSwitches;
        this.model.addEvent(this.sliderElems.buttonsSwitches, 'click', this.model.switchSlideButton);
        this.supportFunctions.changeColorElemsNavigation(0, 'buttons');
        window.addEventListener('resize', function () {
          var windowWidthNow = document.documentElement.clientWidth;

          if (_this11.windowWidth !== windowWidthNow) {
            _this11.slider.removeChild(buttonsSwitches);

            buttonsSwitches = _this11.model.createButtonsSwitches(_this11.slider, _this11.slidesCount);
            _this11.sliderElems.buttonsSwitches = buttonsSwitches;

            _this11.slider.appendChild(_this11.sliderElems.buttonsSwitches);

            _this11.supportFunctions.changeColorElemsNavigation(0, 'buttons');

            _this11.model.addEvent(_this11.sliderElems.buttonsSwitches, 'click', _this11.model.switchSlideButton);
          }
        });
      }

      if (this.arrows) {
        var arrowsSwitches = this.model.createArrows(this.slider);
        this.view.addElemSlider(this.slider, arrowsSwitches);
        this.sliderElems.arrowsSwitches = arrowsSwitches;
        this.model.addEvent(this.sliderElems.arrowsSwitches, 'click', this.model.switchSlideArrow);
        this.supportFunctions.changeColorElemsNavigation(0, 'arrows');
        window.addEventListener('resize', function () {
          var windowWidthNow = document.documentElement.clientWidth;

          if (_this11.windowWidth !== windowWidthNow) {
            _this11.supportFunctions.changeColorElemsNavigation(0, 'arrows');
          }
        });
      }

      if (this.slideAutoPlay) {
        this.supportFunctions.addSlideAutoPlay();
        this.supportFunctions.changeColorElemsNavigation(0, 'indicator');
      }
    },
    sliderСontrol: function sliderOntrol() {
      var _this12 = this;

      this.model.switchDrag(this.sliderElems.slidesArr, this.sliderElems.slidesElem);
      this.model.switchSwipe(this.slider);
      this.supportFunctions.addSliderEffects();
      this.model.controllSize(this.slider);
      window.addEventListener('resize', function () {
        var windowWidthNow = document.documentElement.clientWidth;

        if (_this12.windowWidth !== windowWidthNow) {
          _this12.model.switchDrag(_this12.sliderElems.slidesArr, _this12.sliderElems.slidesElem);

          _this12.supportFunctions.addSliderEffects();

          _this12.model.controllSize(_this12.slider);
        }
      });
    },
    changeSlider: function changeSlider() {
      var _this13 = this;

      this.model.changeToWebp();
      window.addEventListener('resize', function () {
        var windowWidthNow = document.documentElement.clientWidth;

        if (_this13.windowWidth !== windowWidthNow) {
          _this13.model.changeToWebp();
        }
      });
    }
  }, this.app = {
    init: function init() {
      this.app.context.call(this);
      this.app.main.call(this);
    },
    context: function context() {
      for (var key in this.view) {
        if (typeof this.view[key] == 'function') {
          this.view[key] = this.view[key].bind(this);
        }
      }

      for (var _key in this.model) {
        if (typeof this.model[_key] == 'function') {
          this.model[_key] = this.model[_key].bind(this);
        }
      }

      for (var _key2 in this.supportFunctions) {
        if (typeof this.supportFunctions[_key2] == 'function') {
          this.supportFunctions[_key2] = this.supportFunctions[_key2].bind(this);
        }
      }

      for (var _key3 in this.controller) {
        if (typeof this.controller[_key3] == 'function') {
          this.controller[_key3] = this.controller[_key3].bind(this);
        }
      }
    },
    main: function main() {
      var preload = document.querySelector("[data-slider-preloader=\"".concat(this.sliderNumber, "\"]"));
      this.slider.removeChild(preload);
      this.controller.addSliderElements();
      this.controller.sliderСontrol();
      this.controller.changeSlider();
    }
  };
  this.app.init.call(this);
};

window.addEventListener('load', function () {
  var startSliderSettings = {
    selector: '[data-slider-number="1"]',
    buttonsSwitchPos: 'out',
    // out, right, left, bottom
    buttonsSwitchView: '5',
    // 1-4
    arrowsSwitchView: '2',
    // 1-2
    sliderNumber: '1',
    sliderWidth: '',
    sliderHeight: '600',
    sliderMinHeight: '600',
    fontSize: '16',
    arrows: true,
    buttonsSwitches: true,
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '0',
    autoPlay: false,
    autoPlaySpeed: 10,
    slidesAnimation: 'transition',
    borderRadius: '',
    slideSettings: [{
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'START SLIDER',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '2022-1-04 23:55',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Slider with many parallax effects',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/bg11.jpeg',
      //backgroundImageWebp: './images/slide-bg2.webp',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#ccc',
      slideEffect: '' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'BACKGROUND MOVEMENT',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Parallax effect of background image movement',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/sunset.jpg',
      backgroundImageWebp: './images/sunset.webp',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: '',
      buttonClass2: '',
      colorNavigation: '#ccc',
      slideEffect: 'background-movement-left' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, backgroundVideo

    }, {
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'PARALLAX MOUSE',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Parallax effect of moving the background image when moving the cursor on desktop',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/space.jpg',
      backgroundImageWebp: './images/space.webp',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: '',
      buttonClass2: '',
      colorNavigation: '#ccc',
      slideEffect: 'pallaxMouseMove' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'BACKGROUND VIDEO',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Video slide background',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      // backgroundImage: './images/space.jpg',
      // backgroundImageWebp: './images/space.webp',
      backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: '',
      buttonClass2: '',
      colorNavigation: '#ccc',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'Parallax text',
      titleTag: 'h1',
      titleColor: '#111',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: 'red',
      timer: '',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Parallax effect when scrolling a page',
      textColor: '#111',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/iphone.jpg',
      backgroundImageWebp: './images/iphone.webp',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: '',
      buttonClass2: '',
      colorNavigation: '#111',
      slideEffect: 'parallax-text' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'info-1',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'CHANGE BACKGROUND COLOR',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      //textAccent: 'Super!',
      textAccentColor: 'red',
      timer: '',
      timerColor: '',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      //text: 'Parallax effect when scrolling a page',
      textColor: '#111',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      // backgroundImage: './images/iphone.jpg',
      // backgroundImageWebp: './images/iphone.webp',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: '',
      buttonClass2: '',
      colorNavigation: '#ccc',
      slideEffect: 'background-movement-color-change' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }]
  };
  new StartSlider(startSliderSettings);
  var startSliderSettings2 = {
    selector: '[data-slider-number="2"]',
    buttonsSwitchPos: 'left',
    // out, right, left, bottom
    buttonsSwitchView: '2',
    // 1-4
    arrowsSwitchView: '1',
    // 1-2
    sliderNumber: '2',
    sliderWidth: '900',
    sliderHeight: '500',
    sliderMinHeight: '360',
    fontSize: '16',
    arrows: true,
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '20',
    buttonsSwitches: true,
    autoPlay: false,
    autoPlaySpeed: 10,
    slidesAnimation: 'transition',
    borderRadius: '10',
    fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    slideSettings: [{
      slideType: 'info-2',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      // productImg: './images/bg33.jpeg',
      // productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#fff',
      //timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/bg33.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: 'https://yandex.ru/',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#999',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'info-2',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      // productImg: './images/bg33.jpeg',
      // productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#fff',
      //timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/bg33.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: 'https://yandex.ru/',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#999',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }]
  };
  new StartSlider(startSliderSettings2);
  var startSliderSettings3 = {
    selector: '[data-slider-number="3"]',
    buttonsSwitchPos: 'left',
    // out, right, left, bottom
    buttonsSwitchView: '4',
    // 1-4
    arrowsSwitchView: '1',
    // 1-2
    sliderNumber: '3',
    sliderWidth: '400',
    sliderHeight: '500',
    sliderMinHeight: '360',
    fontSize: '16',
    arrows: true,
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '0',
    buttonsSwitches: true,
    autoPlay: false,
    autoPlaySpeed: 10,
    slidesAnimation: 'transition',
    borderRadius: '10',
    fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    slideSettings: [{
      slideType: 'product',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo product',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#111',
      productPriceNewColor: '#777',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'div',
      titleColor: '#333',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '2021-12-04 23:55',
      timerColor: '#333',
      labelText: 'New',
      labelColorText: '',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '#333',
      colorStar: '#24ee35',
      valueStar: '5',
      backgroundColor: '#333',
      backgroundImage: './images/bg44.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#000',
      slideEffect: '' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'product',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo product',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#111',
      productPriceNewColor: '#777',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'div',
      titleColor: '#333',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '2021-12-04 23:55',
      timerColor: '#333',
      labelText: 'New',
      labelColorText: '',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '#333',
      colorStar: '#24ee35',
      valueStar: '5',
      backgroundColor: '#333',
      backgroundImage: './images/bg44.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#000',
      slideEffect: '' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }]
  };
  new StartSlider(startSliderSettings3);
  var startSliderSettings4 = {
    selector: '[data-slider-number="4"]',
    buttonsSwitchPos: 'center',
    // out, right, left, bottom
    buttonsSwitchView: '3',
    // 1-4
    arrowsSwitchView: '1',
    // 1-2
    sliderNumber: '4',
    sliderWidth: '',
    sliderHeight: '600',
    sliderMinHeight: '600',
    fontSize: '16',
    arrows: true,
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '0',
    buttonsSwitches: true,
    autoPlay: false,
    autoPlaySpeed: 10,
    slidesAnimation: 'transition',
    borderRadius: '',
    fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    slideSettings: [{
      slideType: 'video',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'YOUTUBE VIDEO',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: 'red',
      timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '',
      colorStar: '#24ee35',
      valueStar: '4',
      backgroundColor: '#ccc',
      backgroundImage: './images/bg55.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: 'https://yandex.ru/',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#A0E7E5',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'video',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'YOUTUBE VIDEO',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: 'red',
      timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '',
      colorStar: '#24ee35',
      valueStar: '4',
      backgroundColor: '#ccc',
      backgroundImage: './images/bg55.jpeg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: '#',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#A0E7E5',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }]
  };
  new StartSlider(startSliderSettings4);
  var startSliderSettings5 = {
    selector: '[data-slider-number="5"]',
    buttonsSwitchPos: 'bottom',
    // out, right, left, bottom
    buttonsSwitchView: '1',
    // 1-4
    arrowsSwitchView: '1',
    // 1-2
    sliderNumber: '5',
    sliderWidth: '',
    sliderHeight: '200',
    sliderMinHeight: '200',
    fontSize: '16',
    arrows: true,
    marginTop: '0',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '0',
    buttonsSwitches: true,
    autoPlay: false,
    autoPlaySpeed: 10,
    slidesAnimation: 'transition',
    borderRadius: '',
    fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    slideSettings: [{
      slideType: 'banner',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: 'red',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/banner.jpg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: 'https://yandex.ru/',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#333',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }, {
      slideType: 'banner',
      // product, info-1, info-2, banner, video
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description',
      productPrice: '12000$',
      productPriceNew: '9000$',
      productPriceColor: '#58E000',
      productPriceNewColor: '#ccc',
      productPriceNewColorBlacken: 'red',
      productImg: './images/iphone12.png',
      productImgWebp: './images/iphone12.webp',
      productLink: '#',
      title: 'SLIDER HEADER',
      titleTag: 'h1',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#24ee35',
      timer: '2021-12-04 23:55',
      timerColor: 'red',
      labelText: 'New',
      labelColorText: 'white',
      labelBackgroundColor: 'black',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: 'red',
      colorStar: 'blue',
      valueStar: '4',
      backgroundColor: '#000',
      backgroundImage: './images/banner.jpg',
      backgroundImageWebp: '',
      //backgroundVideo: './images/cover-video.mp4',
      videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CyL__LjV8vg?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      buttonLink1: 'https://yandex.ru/',
      buttonText1: 'Button',
      buttonClass1: '',
      buttonLink2: '#link',
      buttonText2: 'Button',
      buttonClass2: '',
      colorNavigation: '#333',
      slideEffect: 'backgroundVideo' // parallax-text, background-movement-top, background-movement-left, background-movement-top-right, background-movement-top-left, background-movement-bottom-right, background-movement-right, background-movement-bottom, background-movement-bottom-left, background-movement-color-change, pallaxMouseMove, 

    }]
  };
  new StartSlider(startSliderSettings5);
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var global = __webpack_require__(0);
var getBuiltIn = __webpack_require__(20);
var IS_PURE = __webpack_require__(30);
var DESCRIPTORS = __webpack_require__(6);
var NATIVE_SYMBOL = __webpack_require__(32);
var USE_SYMBOL_AS_UID = __webpack_require__(52);
var fails = __webpack_require__(1);
var has = __webpack_require__(4);
var isArray = __webpack_require__(17);
var isObject = __webpack_require__(3);
var anObject = __webpack_require__(5);
var toObject = __webpack_require__(22);
var toIndexedObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(15);
var createPropertyDescriptor = __webpack_require__(16);
var nativeObjectCreate = __webpack_require__(33);
var objectKeys = __webpack_require__(53);
var getOwnPropertyNamesModule = __webpack_require__(26);
var getOwnPropertyNamesExternal = __webpack_require__(94);
var getOwnPropertySymbolsModule = __webpack_require__(51);
var getOwnPropertyDescriptorModule = __webpack_require__(18);
var definePropertyModule = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(45);
var createNonEnumerableProperty = __webpack_require__(9);
var redefine = __webpack_require__(11);
var shared = __webpack_require__(29);
var sharedKey = __webpack_require__(25);
var hiddenKeys = __webpack_require__(19);
var uid = __webpack_require__(31);
var wellKnownSymbol = __webpack_require__(2);
var wrappedWellKnownSymbolModule = __webpack_require__(80);
var defineWellKnownSymbol = __webpack_require__(81);
var setToStringTag = __webpack_require__(67);
var InternalStateModule = __webpack_require__(28);
var $forEach = __webpack_require__(82).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(12);
var nativeGetOwnPropertyNames = __webpack_require__(26).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(6);
var global = __webpack_require__(0);
var has = __webpack_require__(4);
var isObject = __webpack_require__(3);
var defineProperty = __webpack_require__(7).f;
var copyConstructorProperties = __webpack_require__(47);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(81);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var forEach = __webpack_require__(84);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var from = __webpack_require__(99);
var checkCorrectnessOfIteration = __webpack_require__(103);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(83);
var toObject = __webpack_require__(22);
var callWithSafeIterationClosing = __webpack_require__(100);
var isArrayIteratorMethod = __webpack_require__(101);
var toLength = __webpack_require__(14);
var createProperty = __webpack_require__(40);
var getIteratorMethod = __webpack_require__(102);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var Iterators = __webpack_require__(43);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(86);
var Iterators = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $indexOf = __webpack_require__(49).indexOf;
var arrayMethodIsStrict = __webpack_require__(85);
var arrayMethodUsesToLength = __webpack_require__(70);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var isArray = __webpack_require__(17);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(2);
var create = __webpack_require__(33);
var definePropertyModule = __webpack_require__(7);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(89).IteratorPrototype;
var create = __webpack_require__(33);
var createPropertyDescriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(67);
var Iterators = __webpack_require__(43);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var isArray = __webpack_require__(17);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var isObject = __webpack_require__(3);
var isArray = __webpack_require__(17);
var toAbsoluteIndex = __webpack_require__(50);
var toLength = __webpack_require__(14);
var toIndexedObject = __webpack_require__(12);
var createProperty = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(2);
var arrayMethodHasSpeciesSupport = __webpack_require__(55);
var arrayMethodUsesToLength = __webpack_require__(70);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(11);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var bind = __webpack_require__(113);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(68);
var isObject = __webpack_require__(3);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(71);
var redefine = __webpack_require__(11);
var toString = __webpack_require__(115);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(71);
var classof = __webpack_require__(86);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(11);
var anObject = __webpack_require__(5);
var fails = __webpack_require__(1);
var flags = __webpack_require__(57);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(58).charAt;
var InternalStateModule = __webpack_require__(28);
var defineIterator = __webpack_require__(88);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(59);
var anObject = __webpack_require__(5);
var toObject = __webpack_require__(22);
var toLength = __webpack_require__(14);
var toInteger = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(10);
var advanceStringIndex = __webpack_require__(60);
var regExpExec = __webpack_require__(61);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(59);
var isRegExp = __webpack_require__(120);
var anObject = __webpack_require__(5);
var requireObjectCoercible = __webpack_require__(10);
var speciesConstructor = __webpack_require__(121);
var advanceStringIndex = __webpack_require__(60);
var toLength = __webpack_require__(14);
var callRegExpExec = __webpack_require__(61);
var regexpExec = __webpack_require__(23);
var fails = __webpack_require__(1);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var classof = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(2);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(68);
var wellKnownSymbol = __webpack_require__(2);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(91);
var forEach = __webpack_require__(84);
var createNonEnumerableProperty = __webpack_require__(9);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(91);
var ArrayIteratorMethods = __webpack_require__(87);
var createNonEnumerableProperty = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(2);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ })
/******/ ]);