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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

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
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(11);
var createPropertyDescriptor = __webpack_require__(17);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(25);
var has = __webpack_require__(2);
var uid = __webpack_require__(26);
var NATIVE_SYMBOL = __webpack_require__(28);
var USE_SYMBOL_AS_UID = __webpack_require__(53);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(19).f;
var createNonEnumerableProperty = __webpack_require__(5);
var redefine = __webpack_require__(22);
var setGlobal = __webpack_require__(15);
var copyConstructorProperties = __webpack_require__(43);
var isForced = __webpack_require__(52);

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
/* 10 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(21);
var anObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(18);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(59);
var stickyHelpers = __webpack_require__(60);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(7);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(5);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var propertyIsEnumerableModule = __webpack_require__(37);
var createPropertyDescriptor = __webpack_require__(17);
var toIndexedObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var has = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(21);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(10);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(38);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(5);
var has = __webpack_require__(2);
var setGlobal = __webpack_require__(15);
var inspectSource = __webpack_require__(23);
var InternalStateModule = __webpack_require__(39);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(15);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(42);
var store = __webpack_require__(24);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(55).forEach;
var arrayMethodIsStrict = __webpack_require__(57);
var arrayMethodUsesToLength = __webpack_require__(58);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var exec = __webpack_require__(13);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(45);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(10);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(7);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(32);
var wellKnownSymbol = __webpack_require__(8);

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
/* 35 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(40);
var global = __webpack_require__(0);
var isObject = __webpack_require__(4);
var createNonEnumerableProperty = __webpack_require__(5);
var objectHas = __webpack_require__(2);
var sharedKey = __webpack_require__(41);
var hiddenKeys = __webpack_require__(27);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(23);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25);
var uid = __webpack_require__(26);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var ownKeys = __webpack_require__(44);
var getOwnPropertyDescriptorModule = __webpack_require__(19);
var definePropertyModule = __webpack_require__(11);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(31);
var getOwnPropertyNamesModule = __webpack_require__(46);
var getOwnPropertySymbolsModule = __webpack_require__(51);
var anObject = __webpack_require__(6);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(50);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIndexedObject = __webpack_require__(14);
var indexOf = __webpack_require__(48).indexOf;
var hiddenKeys = __webpack_require__(27);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(14);
var toLength = __webpack_require__(12);
var toAbsoluteIndex = __webpack_require__(49);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);

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
/* 50 */
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
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(28);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var forEach = __webpack_require__(29);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(56);
var IndexedObject = __webpack_require__(20);
var toObject = __webpack_require__(33);
var toLength = __webpack_require__(12);
var arraySpeciesCreate = __webpack_require__(34);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(35);

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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var has = __webpack_require__(2);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(6);

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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(30);
var redefine = __webpack_require__(22);
var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(8);
var regexpExec = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(5);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(63).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var requireObjectCoercible = __webpack_require__(7);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(10);
var regexpExec = __webpack_require__(13);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(66);
var forEach = __webpack_require__(29);
var createNonEnumerableProperty = __webpack_require__(5);

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
/* 66 */
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
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);






function checkboxChange() {
  var inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
  var attrValueChecked;

  var _loop = function _loop(i) {
    inputsCheckbox[i].addEventListener('change', function () {
      inputsCheckbox[i].parentElement.parentElement.childNodes.forEach(function (elem) {
        if (elem.tagName === 'LABEL') {
          if (elem.firstChild.hasAttribute('checked')) {
            attrValueChecked = elem.firstChild.getAttribute('name');
          }

          elem.firstChild.checked = false;
          elem.firstChild.removeAttribute('checked');
          elem.firstChild.setAttribute('name', 'option');
        }
      });
      this.setAttribute('checked', '');
      this.checked = true;
      this.setAttribute('name', attrValueChecked);
    });
  };

  for (var i = 0; i < inputsCheckbox.length; i++) {
    _loop(i);
  }
}

function selectChange() {
  var tabIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var selectArray = document.querySelectorAll('.slide_type');
  var fieldProductArray = document.querySelectorAll('.field-product');
  var fieldInfoArray = document.querySelectorAll('.field-info');

  function choiceProduct() {
    for (var i = 0; i < fieldProductArray.length; i++) {
      fieldProductArray[i].style.display = '';
    }

    for (var _i = 0; _i < fieldInfoArray.length; _i++) {
      fieldInfoArray[_i].style.display = 'none';
    }
  }

  function choiceInfo() {
    for (var i = 0; i < fieldInfoArray.length; i++) {
      fieldInfoArray[i].style.display = '';
    }

    for (var _i2 = 0; _i2 < fieldProductArray.length; _i2++) {
      fieldProductArray[_i2].style.display = 'none';
    }
  }

  function setChoice(indexSelectedOption) {
    switch (indexSelectedOption) {
      case 0:
        choiceProduct();
        break;

      case 1:
        choiceInfo();
        break;
    }
  }

  try {
    setChoice(selectArray[tabIndex].selectedIndex);
  } catch (error) {
    console.error(error);
  }

  for (var i = 0; i < selectArray.length; i++) {
    selectArray[i].addEventListener('change', function () {
      try {
        setChoice(selectArray[tabIndex].selectedIndex);
      } catch (error) {
        console.error(error);
      }
    });
  }
}

function tabsSwitch() {
  var tabButtonArray = document.querySelectorAll('.sliderStart__tab-button');
  var tabContentArray = document.querySelectorAll('.sliderStart__tab-content');
  var inputArrayCheckbox = document.querySelectorAll('input[type="checkbox"]');
  var addTab = document.querySelector('.sliderStart__addtab-button');
  var delTab = document.querySelector('.sliderStart__deltab-button');
  var numberSlides = 0;
  var slideDisablePosition = 0;

  (function () {
    for (var i = inputArrayCheckbox.length - 1; i > 0; i--) {
      if (inputArrayCheckbox[i].name.match(/slide_active_/) && inputArrayCheckbox[i].checked) {
        numberSlides++;

        label: if (inputArrayCheckbox[i].value === 'false') {
          slideDisablePosition++;
        } else {
          break label;
        }
      }
    }
  })();

  var slidesCount = numberSlides - slideDisablePosition;

  function activeSlide() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var fieldActiveSlideArray = document.querySelectorAll('.field-active-slide');

    function findInput(elements) {
      elements.forEach(function (elem) {
        if (elem.tagName === 'INPUT') {
          switch (action) {
            case 'active':
              elem.checked = false;
              elem.removeAttribute('checked');

              if (elem.getAttribute('value') === 'true') {
                elem.checked = true;
                elem.setAttribute('checked', '');
              }

              break;

            case 'disable':
              elem.checked = false;
              elem.removeAttribute('checked');

              if (elem.getAttribute('value') === 'false') {
                elem.checked = true;
                elem.setAttribute('checked', '');
              }

              break;
          }

          return false;
        } else {
          findInput(elem.childNodes);
        }
      });
    }

    try {
      findInput(fieldActiveSlideArray[i].childNodes);
    } catch (error) {
      console.error(error);
    }
  }

  function regulateNumberSlides() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'close';

    if (action === 'close') {
      for (var i = value; i < tabButtonArray.length; i++) {
        tabButtonArray[i].style.display = 'none';
      }
    }

    if (action === 'add') tabButtonArray[value].style.display = '';
    if (action === 'del') tabButtonArray[value].style.display = 'none';
  }

  regulateNumberSlides(slidesCount, 'close');
  delTab.addEventListener('click', function () {
    if (slidesCount > 1) {
      slidesCount--;
      regulateNumberSlides(slidesCount, 'del');
      activeSlide(slidesCount, 'disable');
    }
  });
  addTab.addEventListener('click', function () {
    if (slidesCount < tabButtonArray.length) {
      regulateNumberSlides(slidesCount, 'add');
      activeSlide(slidesCount, 'active');
      slidesCount++;
    }
  });

  function removeActive() {
    for (var i = 0; i < tabButtonArray.length; i++) {
      tabButtonArray[i].className = 'sliderStart__tab-button';
      tabContentArray[i].className = 'sliderStart__tab-content';
    }
  }

  var _loop2 = function _loop2(i) {
    tabButtonArray[i].addEventListener('click', function () {
      removeActive();
      selectChange(i);
      this.className += ' sliderStart__tab-button_active';
      tabContentArray[i].className += ' sliderStart__tab-content_active';
    });
  };

  for (var i = 0; i < tabButtonArray.length; i++) {
    _loop2(i);
  }
}

function checkInputs() {
  var inputArray = document.querySelectorAll('input');
  var inputSumbit = document.querySelector('input[type="submit"]');
  var messageError;

  var _loop3 = function _loop3(i) {
    switch (inputArray[i].name) {
      case 'shop_start_slider[selector]':
        inputArray[i].addEventListener('change', function () {
          if (this.value === '') {
            this.value = '.slider-start';
          }
        });
        break;

      case 'shop_start_slider[autoPlaySpeed]':
        inputArray[i].addEventListener('change', function () {
          if (this.value === '') {
            this.value = 7;
          }
        });
        break;

      case inputArray[i].name.match(/slide_product_img_file_jpg_/) ? inputArray[i].name : true:
        var arrayInputTypeFileNameJpg = [];
        var arrayInputTypeHiddenNameJpg = [];
        arrayInputTypeFileNameJpg.push(inputArray[i].name);
        arrayInputTypeHiddenNameJpg.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          });

          if (!/(png|jpe?g|gif|svg)/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        });
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);

                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';
                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }
                  });
                });
                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameJpg[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameJpg[0];
                });
              }
            });
          }
        });
        break;

      case inputArray[i].name.match(/slide_product_img_file_webp_/) ? inputArray[i].name : true:
        var arrayInputTypeFileNameWebp = [];
        var arrayInputTypeHiddenNameWebp = [];
        arrayInputTypeFileNameWebp.push(inputArray[i].name);
        arrayInputTypeHiddenNameWebp.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          });

          if (!/webp/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        });
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);

                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';
                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }
                  });
                });
                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameWebp[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameWebp[0];
                });
              }
            });
          }
        });
        break;

      case inputArray[i].name.match(/slide_background_img_file_/) ? inputArray[i].name : true:
        var arrayInputTypeFileNameBgJpg = [];
        var arrayInputTypeHiddenNameBgJpg = [];
        arrayInputTypeFileNameBgJpg.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgJpg.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          });

          if (!/(png|jpe?g|gif|svg)/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        });
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);

                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';
                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }
                  });
                });
                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgJpg[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgJpg[0];
                });
              }
            });
          }
        });
        break;

      case inputArray[i].name.match(/slide_background_webp_img_file_/) ? inputArray[i].name : true:
        var arrayInputTypeFileNameBgWebp = [];
        var arrayInputTypeHiddenNameBgWebp = [];
        arrayInputTypeFileNameBgWebp.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgWebp.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          });

          if (!/webp/i.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        });
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);

                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';
                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }
                  });
                });
                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgWebp[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgWebp[0];
                });
              }
            });
          }
        });
        break;

      case inputArray[i].name.match(/slide_background_video_/) ? inputArray[i].name : true:
        var arrayInputTypeFileNameBgVideo = [];
        var arrayInputTypeHiddenNameBgVideo = [];
        arrayInputTypeFileNameBgVideo.push(inputArray[i].name);
        arrayInputTypeHiddenNameBgVideo.push(inputArray[i].parentElement.childNodes[1].name);
        inputArray[i].addEventListener('change', function () {
          this.parentElement.childNodes.forEach(function (elem) {
            if (/hint-error/gi.test(elem.className)) messageError = elem;
          });

          if (!/(.ogv|.oga|.ogx|.ogg|.mp4|.webm|.mkv)/gi.test(this.value)) {
            messageError.style.display = 'block';
            inputSumbit.disabled = true;
          } else {
            messageError.style.display = '';
            inputSumbit.disabled = false;
          }
        });
        inputArray[i].parentElement.childNodes.forEach(function (elem) {
          if (elem.className === 'image') {
            elem.childNodes.forEach(function (imageChild) {
              if (/delete-image/gi.test(imageChild.className)) {
                imageChild.addEventListener('click', function (e) {
                  e.preventDefault();
                  this.parentElement.parentElement.childNodes.forEach(function (valueChild) {
                    if (valueChild.className === 'image') valueChild.parentNode.removeChild(valueChild);

                    if (valueChild.tagName === 'INPUT' && valueChild.type === 'file') {
                      valueChild.type = '';
                      valueChild.type = 'file';
                      valueChild.parentElement.childNodes[1].name = valueChild.name;
                      valueChild.name = '';
                    }
                  });
                });
                inputArray[i].addEventListener('click', function () {
                  this.name = arrayInputTypeFileNameBgVideo[0];
                  inputArray[i].parentElement.childNodes[1].name = arrayInputTypeHiddenNameBgVideo[0];
                });
              }
            });
          }
        });
        break;
    }
  };

  for (var i = 0; i < inputArray.length; i++) {
    _loop3(i);
  }
}

checkboxChange();
selectChange();
tabsSwitch();
checkInputs();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var defineProperty = __webpack_require__(11).f;

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(61);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(12);
var requireObjectCoercible = __webpack_require__(7);
var advanceStringIndex = __webpack_require__(62);
var regExpExec = __webpack_require__(64);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ })
/******/ ]);