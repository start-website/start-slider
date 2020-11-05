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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(68);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(31);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('load', function () {
  var StartSlider = /*#__PURE__*/function () {
    function StartSlider(props) {
      _classCallCheck(this, StartSlider);

      this.slider = document.querySelector(props.selector);
      this.settings = props.slideSettings;
      this.slideAllArray = this.settings;
      this.slideActiveArray = [];
      this.sliderFontsList = props.fonts;
      this.fontNameTitle = props.fontNameTitle;
      this.fontNameTextAccent = props.fontNameTextAccent;
      this.fontNameText = props.fontNameText;
      this.fontNameButton = props.fontNameButton;
      this.slideIndex = 0;
      this.arrows = props.arrows;
      this.buttonsSwitches = props.buttonsSwitches;
      this.supportWebp = false;
      this.slideAutoPlay = props.autoPlay;
      this.slideAutoPlaySpeed = props.autoPlaySpeed;
    }

    _createClass(StartSlider, [{
      key: "addSlide",
      value: function addSlide() {
        var _this = this;

        var _loop = function _loop(i) {
          if (_this.settings[i].slideActive) {
            var tagSlide = document.createElement('div');
            tagSlide.className = 'slider-start__slide';
            if (_this.settings[i].backgroundImage) tagSlide.style.backgroundImage = "url(".concat(_this.settings[i].backgroundImage, ")");
            if (_this.settings[i].backgroundColor) tagSlide.style.backgroundColor = _this.settings[i].backgroundColor;

            _this.slider.appendChild(tagSlide);

            if (i === 0) setTimeout(function () {
              return tagSlide.className += ' slider-start__slide_active';
            }, 10);
            var tagContainerSlide = document.createElement('div');
            tagContainerSlide.className = 'slider-start__container container';
            tagSlide.appendChild(tagContainerSlide);
            var tagSlideContent = document.createElement('div');
            tagSlideContent.className = 'slider-start__content';
            tagContainerSlide.appendChild(tagSlideContent);
            var tagSlideInfo = document.createElement('div');
            tagSlideInfo.className = 'slider-start__info';
            tagSlideContent.appendChild(tagSlideInfo);

            var buttonHover = function buttonHover(button) {
              button.addEventListener('mouseover', function () {
                button.style.backgroundColor = _this.settings[i].buttonBackgroundHover;
                button.style.setProperty('color', _this.settings[i].buttonTextColorHover, 'important');
              });
              button.addEventListener('mouseout', function () {
                button.style.setProperty('color', _this.settings[i].buttonTextColor, 'important');
                button.style.backgroundColor = _this.settings[i].buttonBackground;
              });
            };

            switch (_this.settings[i].slideType) {
              case 'info':
                if (_this.settings[i].textAccent) {
                  var tagSlideTextAccent = document.createElement('span');
                  tagSlideTextAccent.className = 'slider-start__text-accent';
                  tagSlideTextAccent.style.fontFamily = _this.fontNameTextAccent;
                  tagSlideTextAccent.style.color = _this.settings[i].textAccentColor;
                  tagSlideTextAccent.innerHTML = _this.settings[i].textAccent;
                  tagSlideInfo.appendChild(tagSlideTextAccent);
                }

                if (_this.settings[i].title) {
                  var tagSlideTitle = document.createElement(_this.settings[i].titleTag ? _this.settings[i].titleTag : 'div');
                  tagSlideTitle.className = 'slider-start__title';
                  tagSlideTitle.style.fontFamily = _this.fontNameTitle;
                  tagSlideTitle.style.color = _this.settings[i].titleColor;
                  tagSlideTitle.innerHTML = _this.settings[i].title;
                  tagSlideInfo.appendChild(tagSlideTitle);
                }

                if (_this.settings[i].text) {
                  var tagSlideText = document.createElement('p');
                  tagSlideText.className = 'slider-start__text';
                  tagSlideText.style.fontFamily = _this.fontNameText;
                  tagSlideText.style.color = _this.settings[i].textColor;
                  tagSlideText.innerHTML = _this.settings[i].text;
                  tagSlideInfo.appendChild(tagSlideText);
                }

                if (_this.settings[i].button) {
                  var tagSlideButtonBox = document.createElement('div');
                  tagSlideButtonBox.className = 'slider-start__button-box';
                  tagSlideInfo.appendChild(tagSlideButtonBox);
                  var tagSlideButton = document.createElement('a');
                  tagSlideButton.className = 'slider-start__button';
                  tagSlideButton.setAttribute('href', _this.settings[i].buttonLink);
                  tagSlideButton.style.setProperty('font-family', _this.fontNameButton, 'important');
                  tagSlideButton.style.setProperty('color', _this.settings[i].buttonTextColor, 'important');
                  tagSlideButton.style.setProperty('background-color', _this.settings[i].buttonBackground, 'important');
                  tagSlideButton.style.setProperty('border', _this.settings[i].buttonBorder, 'important');
                  tagSlideButton.innerHTML = _this.settings[i].buttonText;
                  tagSlideButtonBox.appendChild(tagSlideButton);

                  if (_this.settings[i].buttonBackgroundHover) {
                    buttonHover(tagSlideButton);
                  }
                }

                break;

              case 'product':
                var tagSlideProductImgBox = document.createElement('div');
                tagSlideProductImgBox.className = 'slider-start__product-imgbox';
                tagSlideInfo.appendChild(tagSlideProductImgBox);
                var tagSlideProductImglink = document.createElement('a');
                tagSlideProductImglink.setAttribute('href', _this.settings[i].productLink);
                tagSlideProductImgBox.appendChild(tagSlideProductImglink);
                var tagSlideProductPicture = document.createElement('picture');
                tagSlideProductImglink.appendChild(tagSlideProductPicture);

                if (_this.settings[i].productImgWebp) {
                  var tagSource = document.createElement('source');
                  tagSource.setAttribute('type', 'image/webp');
                  tagSource.setAttribute('srcset', _this.settings[i].productImgWebp);
                  tagSlideProductPicture.appendChild(tagSource);
                }

                var tagSlideProductImg = document.createElement('img');
                tagSlideProductImg.className = 'slider-start__product-imgbox_img';
                tagSlideProductImg.setAttribute('src', _this.settings[i].productImg);
                tagSlideProductPicture.appendChild(tagSlideProductImg);
                var tagSlideProductInfo = document.createElement('div');
                tagSlideProductInfo.className = 'slider-start__product-info';
                tagSlideInfo.appendChild(tagSlideProductInfo);
                var tagSlideProductTitleLink = document.createElement('a');
                tagSlideProductTitleLink.className = 'slider-start__product-link';
                tagSlideProductTitleLink.setAttribute('href', _this.settings[i].productLink);
                tagSlideProductInfo.appendChild(tagSlideProductTitleLink);
                var tagSlideProductTitle = document.createElement('div');
                tagSlideProductTitle.className = 'slider-start__product-title';
                tagSlideProductTitle.style.fontFamily = _this.fontNameTitle;
                tagSlideProductTitle.style.color = _this.settings[i].titleColor;
                tagSlideProductTitle.innerHTML = _this.settings[i].productTitle;
                tagSlideProductTitleLink.appendChild(tagSlideProductTitle);
                var tagSlideProductDescription = document.createElement('div');
                tagSlideProductDescription.className = 'slider-start__product-description';
                tagSlideProductDescription.style.fontFamily = _this.fontNameText;
                tagSlideProductDescription.style.color = _this.settings[i].textColor;
                tagSlideProductDescription.innerHTML = _this.settings[i].productDescription;
                tagSlideProductInfo.appendChild(tagSlideProductDescription);
                var tagSlideProductPrices = document.createElement('div');
                tagSlideProductPrices.className = 'slider-start__product-prices';
                tagSlideProductInfo.appendChild(tagSlideProductPrices);
                var tagSlideProductPrice = document.createElement('div');
                tagSlideProductPrice.className = 'slider-start__product-prices_current';
                tagSlideProductPrice.style.fontFamily = _this.fontNameText;
                tagSlideProductPrice.style.color = _this.settings[i].productPriceColor;
                tagSlideProductPrice.innerHTML = _this.settings[i].productPrice;
                tagSlideProductPrices.appendChild(tagSlideProductPrice);

                if (_this.settings[i].productPriceNew) {
                  var tagSlideProductPriceNew = document.createElement('div');
                  tagSlideProductPriceNew.className = 'slider-start__product-prices_new';
                  tagSlideProductPriceNew.style.fontFamily = _this.fontNameText;
                  tagSlideProductPriceNew.style.color = _this.settings[i].productPriceNewColor;
                  tagSlideProductPriceNew.innerHTML = _this.settings[i].productPriceNew;
                  tagSlideProductPrices.appendChild(tagSlideProductPriceNew);
                  var tagSlideProductPriceNewBlacken = document.createElement('span');
                  tagSlideProductPriceNewBlacken.className = 'slider-start__product-prices_new-blacken';
                  tagSlideProductPriceNewBlacken.style.backgroundColor = _this.settings[i].productPriceNewColorBlacken;
                  tagSlideProductPriceNew.appendChild(tagSlideProductPriceNewBlacken);
                }

                var tagSlideProductButttonBox = document.createElement('div');
                tagSlideProductButttonBox.className = 'slider-start__product-buttonbox';
                tagSlideProductInfo.appendChild(tagSlideProductButttonBox);
                var tagSlideProductButtton = document.createElement('a');
                tagSlideProductButtton.className = 'slider-start__button slider-start__product-button';
                tagSlideProductButtton.setAttribute('href', _this.settings[i].productLink);
                tagSlideProductButtton.style.setProperty('font-family', _this.fontNameButton, 'important');
                tagSlideProductButtton.style.setProperty('color', _this.settings[i].buttonTextColor, 'important');
                tagSlideProductButtton.style.setProperty('background-color', _this.settings[i].buttonBackground, 'important');
                tagSlideProductButtton.style.setProperty('border', _this.settings[i].buttonBorder, 'important');
                tagSlideProductButtton.innerHTML = _this.settings[i].buttonText;
                tagSlideProductButttonBox.appendChild(tagSlideProductButtton);
                buttonHover(tagSlideProductButtton);
                break;
            }
          }

          _this.slideActiveArray = document.querySelectorAll('.slider-start__slide');
        };

        for (var i = 0; i < this.slideAllArray.length; i++) {
          _loop(i);
        }
      }
    }, {
      key: "addSliderFonts",
      value: function addSliderFonts() {
        var sliderFontsArray = this.sliderFontsList.split(',');

        for (var i = 0; i < sliderFontsArray.length; i++) {
          document.querySelector('head').insertAdjacentHTML('beforeend', "<link href=\"".concat(sliderFontsArray[i], "\" rel=\"stylesheet\">"));
        }
      }
    }, {
      key: "addArrows",
      value: function addArrows() {
        var tagArrows = document.createElement('div');
        tagArrows.className = 'slider-start__arrows';
        var tagArrowPrev = document.createElement('span');
        tagArrowPrev.className = 'slider-start__arrows_prev start-icon-arrow-prev';
        var tagArrowNext = document.createElement('span');
        tagArrowNext.className = 'slider-start__arrows_next start-icon-arrow-next';
        this.slider.appendChild(tagArrows);
        tagArrows.appendChild(tagArrowPrev);
        tagArrows.appendChild(tagArrowNext);
      }
    }, {
      key: "addButtonsSwitches",
      value: function addButtonsSwitches() {
        var slideCount = this.slideActiveArray.length;
        var tagButtonsSwitches = document.createElement('div');
        tagButtonsSwitches.className = 'slider-start__buttons-switches';
        this.slider.appendChild(tagButtonsSwitches);

        function getButtonSwitchSize() {
          var widthButtonsSwitches = tagButtonsSwitches.offsetWidth;
          var buttonSwitchPaddindSide = slideCount * (5 * 2);
          var buttonSwitchSize = (widthButtonsSwitches - buttonSwitchPaddindSide) / slideCount;
          if (buttonSwitchSize > 60) buttonSwitchSize = 60;
          return buttonSwitchSize + 'px';
        }

        var buttonSwitchSize = getButtonSwitchSize();

        for (var i = 0; i < slideCount; i++) {
          var tagButtonSwitch = document.createElement('button');
          tagButtonSwitch.setAttribute('role', 'button');
          tagButtonSwitch.className = 'slider-start__button-switch';
          tagButtonSwitch.innerHTML = '<span style="max-width:' + buttonSwitchSize + '"></span>';
          tagButtonsSwitches.appendChild(tagButtonSwitch);
          if (i === 0) tagButtonSwitch.className = 'slider-start__button-switch slider-start__button-switch_active';
        }
      }
    }, {
      key: "_removeActiveSliders",
      value: function _removeActiveSliders() {
        for (var i = 0; i < this.slideActiveArray.length; i++) {
          this.slideActiveArray[i].className = 'slider-start__slide';
        }
      }
    }, {
      key: "_addActiveSliders",
      value: function _addActiveSliders(n) {
        this.slideActiveArray[n].className += ' slider-start__slide_active';

        if (this.settings[n].productId === 'product') {
          var slidersInfoArray = document.querySelectorAll('.slider-start__info');
          slidersInfoArray[n].style.maxWidth = 'none';
        }
      }
    }, {
      key: "_removeClassButtonsSwitchActive",
      value: function _removeClassButtonsSwitchActive() {
        var buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');

        for (var i = 0; i < buttonsSwitchesArray.length; i++) {
          buttonsSwitchesArray[i].className = 'slider-start__button-switch';
        }
      }
    }, {
      key: "_addClassButtonsSwitchActive",
      value: function _addClassButtonsSwitchActive(n) {
        var buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
        buttonsSwitchesArray[n].className += ' slider-start__button-switch_active';
      }
    }, {
      key: "_addSlideEffects",
      value: function _addSlideEffects(n) {
        if (this.settings[n].parallaxInfo) this.addParallaxInfo(n);
        if (this.settings[n].slideEffect === 'backgroundMovement') this.addBackgroundMovement(n);
        if (this.settings[n].slideEffect === 'pallaxMouseMove') this.addParallaxMouseMove(n);
        if (this.settings[n].slideEffect === 'backgroundVideo') this.addBackgroundVideo(n);

        if (this.settings[n].slideType == 'info' && this.settings[n].titleAnimation) {
          this.addTitleAnimation(n, false);
          this.addTitleAnimation(n, true);
        }

        if (this.slideAutoPlay) this.addSlideAutoPlay();
        if (this.arrows) this.changeColorElemsNavigation(n);
      }
    }, {
      key: "slideEffects",
      value: function slideEffects() {
        var _this2 = this;

        var _loop2 = function _loop2(i) {
          setTimeout(function () {
            if (_this2.slideAutoPlay && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addSlideAutoPlay(i);
            if (_this2.settings[i].parallaxInfo && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addParallaxInfo(i);
            if (_this2.settings[i].slideEffect === 'backgroundMovement' && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addBackgroundMovement(i);
            if (_this2.settings[i].slideEffect === 'pallaxMouseMove' && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addParallaxMouseMove(i);
            if (_this2.settings[i].slideEffect === 'backgroundVideo' && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addBackgroundVideo(i);
            if (!_this2.settings[i].slideType === 'info' && _this2.settings[i].titleAnimation && _this2.slideActiveArray[i].className === 'slider-start__slide slider-start__slide_active') _this2.addTitleAnimation(i);
          }, 11);
        };

        for (var i = 0; i < this.slideActiveArray.length; i++) {
          _loop2(i);
        }

        if (this.arrows || this.buttonsSwitches) this.changeColorElemsNavigation();
      }
    }, {
      key: "changeToWebp",
      value: function changeToWebp() {
        var _this3 = this;

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
            //document.querySelector('html').className = 'start-slider-webp');
            for (var i = 0; i < _this3.slideActiveArray.length; i++) {
              if (_this3.settings[i].backgroundImageWebp) {
                _this3.slideActiveArray[i].style.backgroundImage = "url(".concat(_this3.settings[i].backgroundImageWebp, ")");
              }
            }

            _this3.supportWebp = result;
          }
        });
      }
    }, {
      key: "toggleArrowsSliders",
      value: function toggleArrowsSliders() {
        var _this4 = this;

        this.slider.addEventListener('click', function (e) {
          if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
            _this4._removeActiveSliders();

            if (_this4.buttonsSwitches) _this4._removeClassButtonsSwitchActive();

            if (_this4.slideIndex === 0) {
              _this4.slideIndex = _this4.slideActiveArray.length;
            }

            _this4.slideIndex--;

            _this4._addActiveSliders(_this4.slideIndex);

            if (_this4.buttonsSwitches) _this4._addClassButtonsSwitchActive(_this4.slideIndex);

            _this4._addSlideEffects(_this4.slideIndex);
          }

          if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
            _this4._removeActiveSliders();

            _this4._removeClassButtonsSwitchActive();

            _this4.slideIndex++;

            if (_this4.slideIndex > _this4.slideActiveArray.length - 1) {
              _this4.slideIndex = 0;
            }

            _this4._addActiveSliders(_this4.slideIndex);

            if (_this4.buttonsSwitches) _this4._addClassButtonsSwitchActive(_this4.slideIndex);

            _this4._addSlideEffects(_this4.slideIndex);
          }
        });
      }
    }, {
      key: "toogleButtonsSwitchesSliders",
      value: function toogleButtonsSwitchesSliders() {
        var _this5 = this;

        var buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');

        var _loop3 = function _loop3(i) {
          buttonsSwitchesArray[i].addEventListener('click', function () {
            _this5.slideIndex = i;

            if (_this5.buttonsSwitches) {
              _this5._removeClassButtonsSwitchActive();

              _this5._addClassButtonsSwitchActive(_this5.slideIndex);
            }

            _this5._removeActiveSliders();

            _this5._addActiveSliders(_this5.slideIndex);

            _this5._addSlideEffects(_this5.slideIndex);
          });
        };

        for (var i = 0; i < buttonsSwitchesArray.length; i++) {
          _loop3(i);
        }
      }
    }, {
      key: "sliderSwipe",
      value: function sliderSwipe() {
        var touchStartX;
        var touchChangeX;
        var touchStartY;
        var touchChangeY;
        var self = this;
        this.slider.addEventListener('touchstart', function (e) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        });
        this.slider.addEventListener('touchmove', function (e) {
          touchChangeX = touchStartX - e.touches[0].clientX;
          touchChangeY = Math.ceil(touchStartY - e.touches[0].clientY);
        });
        this.slider.addEventListener('touchend', function (e) {
          if (touchChangeY < 30 && touchChangeY > -30) {
            if (touchChangeX > 0) {
              // swipe right
              self._removeActiveSliders();

              self._removeClassButtonsSwitchActive();

              self.slideIndex++;

              if (self.slideIndex > self.slideActiveArray.length - 1) {
                self.slideIndex = 0;
              }

              self._addActiveSliders(self.slideIndex);

              if (self.buttonsSwitches) self._addClassButtonsSwitchActive(self.slideIndex);

              self._addSlideEffects(self.slideIndex);
            } else if (touchChangeX < 0) {
              // swipe left
              self._removeActiveSliders();

              if (self.buttonsSwitches) self._removeClassButtonsSwitchActive();

              if (self.slideIndex === 0) {
                self.slideIndex = self.slideActiveArray.length;
              }

              self.slideIndex--;

              self._addActiveSliders(self.slideIndex);

              if (self.buttonsSwitches) self._addClassButtonsSwitchActive(self.slideIndex);

              self._addSlideEffects(self.slideIndex);
            }
          }
        });
      }
    }, {
      key: "addParallaxInfo",
      value: function addParallaxInfo(slideIndex) {
        var sliderInfoArray = document.querySelectorAll('.slider-start__info');

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
      }
    }, {
      key: "addBackgroundMovement",
      value: function addBackgroundMovement(slideIndex) {
        var _this6 = this;

        var buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
        var positionX = 0;
        var timePositionX = setInterval(function () {
          positionX += 0.1;
          _this6.slideActiveArray[slideIndex].style.backgroundPosition = "-".concat(positionX, "px center");
        }, 1);
        setTimeout(function () {
          clearInterval(timePositionX);
        }, 20000);
        this.slideActiveArray[slideIndex].style.backgroundSize = 'calc(100% + 600px)';

        for (var i = 0; i < buttonsSwitchesArray.length; i++) {
          buttonsSwitchesArray[i].addEventListener('click', function () {
            clearInterval(timePositionX);
          });
        }

        this.slider.addEventListener('click', function (e) {
          if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
            clearInterval(timePositionX);
          }

          if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
            clearInterval(timePositionX);
          }
        });

        if (this.slideAutoPlay && this.slideActiveArray[slideIndex].className === 'slider-start__slide slider-start__slide_active') {
          setTimeout(function () {
            clearInterval(timePositionX);
          }, "".concat(this.slideAutoPlaySpeed, "000"));
        }

        this.slider.addEventListener('touchend', function (e) {
          clearInterval(timePositionX);
        });
      }
    }, {
      key: "addParallaxMouseMove",
      value: function addParallaxMouseMove(slideIndex) {
        var _this7 = this;

        var viewportLarge = window.innerWidth > 950 ? true : false;

        var BGmove = function BGmove(e) {
          _this7.slideActiveArray[slideIndex].style.backgroundPosition = "-".concat(e.pageX * 0.06, "px -").concat(e.pageY * 0.06, "px");
        };

        var changeSliderBackground = function changeSliderBackground(fn) {
          //this.slideActiveArray[slideIndex].removeEventListener('mousemove', BGmove);
          _this7.slideActiveArray[slideIndex].style.backgroundSize = '';
          _this7.slideActiveArray[slideIndex].style.backgroundPosition = '0 0';
          fn();
        };

        if (viewportLarge) {
          changeSliderBackground(function () {
            _this7.slideActiveArray[slideIndex].style.backgroundSize = 'calc(100% + 150px)';

            _this7.slideActiveArray[slideIndex].addEventListener('mousemove', BGmove);
          });
        }
      }
    }, {
      key: "addBackgroundVideo",
      value: function addBackgroundVideo(slideIndex) {
        var sliderBackground = document.querySelector('.slider-start__bg');

        if (!sliderBackground) {
          var tagSliderBackground = document.createElement('div');
          tagSliderBackground.className = 'slider-start__bg';
          this.slideActiveArray[slideIndex].appendChild(tagSliderBackground);
          var tagVideo = document.createElement('video');
          tagVideo.className = 'slider-start__video-bg';
          tagVideo.setAttribute('src', this.settings[slideIndex].backgroundVideo);
          tagVideo.setAttribute('autoplay', '');
          tagVideo.setAttribute('preload', 'metadata');
          tagVideo.setAttribute('muted', '');
          tagVideo.setAttribute('loop', '');
          tagSliderBackground.appendChild(tagVideo);
        }
      }
    }, {
      key: "addTitleAnimation",
      value: function addTitleAnimation(slideIndex, returnDefaultValue) {
        var _this8 = this;

        var title;

        var findTitleElem = function findTitleElem(childs) {
          childs.forEach(function (elem) {
            if (elem.className === 'slider-start__title') {
              title = elem;
              return false;
            } else {
              findTitleElem(elem.childNodes);
            }
          });
          return title;
        };

        var defaultTitle = findTitleElem(this.slideActiveArray[slideIndex].childNodes).innerText;

        var titleAnimation = function titleAnimation(fn) {
          findTitleElem(_this8.slideActiveArray[slideIndex].childNodes).innerHTML = _this8.settings[slideIndex].title;
          if (returnDefaultValue) fn();
        };

        titleAnimation(function () {
          findTitleElem(_this8.slideActiveArray[slideIndex].childNodes).innerHTML = '';
          var titleWords = defaultTitle.split(' ');

          for (var i = 0; i < titleWords.length; i++) {
            var tagTitleWord = document.createElement('div');
            tagTitleWord.className = 'slider-start__title-word';
            findTitleElem(_this8.slideActiveArray[slideIndex].childNodes).appendChild(tagTitleWord);

            for (var k = 0; k < titleWords[i].length; k++) {
              var tagTitleLetter = document.createElement('span');
              tagTitleLetter.className = 'slider-start__title-letter';
              tagTitleLetter.style.setProperty('font-family', _this8.fontNameTitle, 'important');
              tagTitleLetter.innerText = titleWords[i][k];
              tagTitleWord.appendChild(tagTitleLetter);
            }
          }

          var slideLettersArray = document.querySelectorAll('.slider-start__title-letter');
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
        });
      }
    }, {
      key: "addSlideAutoPlay",
      value: function addSlideAutoPlay() {
        var _this9 = this;

        var indicatorElem = document.querySelector('.slider-start__indicator');
        var buttonsSwitchesArray = document.querySelectorAll('.slider-start__button-switch');
        var indicatorSize = 0;

        if (!indicatorElem) {
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
        }

        var timeIndicator = setInterval(function () {
          if (indicatorSize < 100) {
            indicatorSize += 100 / (_this9.slideAutoPlaySpeed * 10);
          }

          document.querySelector('.slider-start__indicator-lines_top').style.width = "".concat(indicatorSize, "%");

          for (var i = 0; i < buttonsSwitchesArray.length; i++) {
            buttonsSwitchesArray[i].addEventListener('click', function () {
              clearInterval(timeIndicator);
            });
          }

          _this9.slider.addEventListener('click', function (e) {
            if (e.target.className === 'slider-start__arrows_prev start-icon-arrow-prev') {
              clearInterval(timeIndicator);
            }

            if (e.target.className === 'slider-start__arrows_next start-icon-arrow-next') {
              clearInterval(timeIndicator);
            }
          });

          _this9.slider.addEventListener('touchend', function (e) {
            clearInterval(timeIndicator);
          });

          if (indicatorSize >= 100) {
            clearInterval(timeIndicator);

            if (_this9.slideIndex < _this9.slideActiveArray.length) {
              _this9.slideIndex++;
            }

            if (_this9.slideIndex === _this9.slideActiveArray.length) {
              _this9.slideIndex = 0;
            }

            if (_this9.buttonsSwitches) {
              _this9._removeClassButtonsSwitchActive();

              _this9._addClassButtonsSwitchActive(_this9.slideIndex);
            }

            _this9._removeActiveSliders();

            _this9._addActiveSliders(_this9.slideIndex);

            _this9._addSlideEffects(_this9.slideIndex);
          }
        }, 100);
      }
    }, {
      key: "changeColorElemsNavigation",
      value: function changeColorElemsNavigation() {
        var slideIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var sliderArrows = document.querySelector('.slider-start__arrows');
        var sliderButtonsSwithes = document.querySelectorAll('.slider-start__button-switch > span');

        switch (typeof this.settings[slideIndex].colorNavigation === 'string') {
          case true:
            if (this.buttonsSwitches) {
              for (var i = 0; i < this.slideActiveArray.length; i++) {
                sliderButtonsSwithes[i].style.backgroundColor = this.settings[slideIndex].colorNavigation;
              }
            }

            if (this.arrows) sliderArrows.style.color = this.settings[slideIndex].colorNavigation;
            break;

          case false:
            if (this.buttonsSwitches) {
              for (var _i = 0; _i < this.slideActiveArray.length; _i++) {
                sliderButtonsSwithes[_i].style.backgroundColor = '';
              }
            }

            if (this.arrows) sliderArrows.style.color = '';
            break;
        }
      }
    }, {
      key: "active",
      value: function active() {
        var preload = document.querySelector('.slider-start__preloader');
        this.slider.removeChild(preload);

        if (this.settings) {
          this.addSlide();
          this.sliderSwipe();
          this.addSliderFonts();
          this.changeToWebp();
        }

        if (this.settings[0].slideType === 'product') {
          var slidersInfoArray = document.querySelectorAll('.slider-start__info');
          slidersInfoArray[0].style.maxWidth = 'none';
        }

        if (this.arrows) {
          this.addArrows();
          this.toggleArrowsSliders();
        }

        if (this.buttonsSwitches) {
          this.addButtonsSwitches();
          this.toogleButtonsSwitchesSliders();
        }

        if (this.settings) {
          this.slideEffects();
        }
      }
    }]);

    return StartSlider;
  }();

  var startSliderWebasyst = new StartSlider({
    selector: '.slider-start',
    arrows: true,
    buttonsSwitches: true,
    autoPlay: true,
    autoPlaySpeed: 15,
    fonts: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap, https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap, https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
    fontNameTitle: '"Roboto Condensed", sans-serif',
    fontNameText: '"Open Sans Condensed", sans-serif',
    fontNameTextAccent: '"Pacifico", cursive',
    fontNameButton: '"Roboto Condensed", sans-serif',
    slideSettings: [{
      slideType: 'product',
      // product, info
      slideActive: true,
      productTitle: 'Demo item',
      productDescription: 'Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description',
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
      textAccentColor: '#fff',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem veritatis? Dicta hic voluptatum natus vitae dolor. Animi harum molestiae debitis earum dignissimos exercitationem dolorum laboriosam, veritatis omnis a dolore?',
      textColor: '#fff',
      backgroundColor: '#000',
      backgroundImage: './images/slide-bg-apple.jpg',
      backgroundImageWebp: '',
      backgroundVideo: '',
      button: true,
      buttonLink: '#link',
      buttonText: 'Button',
      buttonTextColor: '#fff',
      buttonBackground: 'transparent',
      buttonBorder: '2px solid #fff',
      buttonBackgroundHover: '#fff',
      buttonTextColorHover: '#000',
      parallaxInfo: false,
      colorNavigation: '#fff',
      slideEffect: '' // backgroundMovement, pallaxMouseMove, backgroundVideo

    }, {
      slideType: 'info',
      // product, info
      slideActive: true,
      productTitle: '',
      productDescription: '',
      productPrice: '',
      productPriceNew: '',
      productPriceColor: '',
      productPriceNewColor: '',
      productPriceNewColorBlacken: '',
      productImg: '',
      productImgWebp: '',
      productLink: '#',
      title: 'BACKGROUND MOVEMENT',
      titleTag: 'h2',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: '#58E000',
      text: 'Parallax effect of background image movement',
      textColor: '#fff',
      backgroundImage: './images/sunset.jpg',
      backgroundImageWebp: './images/sunset.webp',
      backgroundVideo: '',
      button: true,
      buttonLink: '#link',
      buttonText: 'Button',
      buttonTextColor: '#fff',
      buttonBackground: 'transparent',
      buttonBorder: '2px solid #fff',
      buttonBackgroundHover: '#fff',
      buttonTextColorHover: '#000',
      parallaxInfo: false,
      colorNavigation: '#fff',
      slideEffect: 'backgroundMovement' // backgroundMovement, pallaxMouseMove, backgroundVideo

    }, {
      slideType: 'info',
      // product, info
      slideActive: true,
      productTitle: '',
      productDescription: '',
      productPrice: '',
      productPriceNew: '',
      productPriceColor: '',
      productPriceNewColor: '',
      productPriceNewColorBlacken: '',
      productImg: '',
      productImgWebp: '',
      productLink: '#',
      title: 'BACKGROUND MOVEMENT',
      titleTag: 'h2',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: '',
      textAccentColor: '',
      text: 'Parallax effect of moving the background image when moving the cursor on desktop',
      textColor: '#fff',
      backgroundImage: './images/space.jpg',
      backgroundImageWebp: './images/space.webp',
      backgroundVideo: '',
      button: true,
      buttonLink: '#link',
      buttonText: 'Button',
      buttonTextColor: '#fff',
      buttonBackground: 'transparent',
      buttonBorder: '2px solid #fff',
      buttonBackgroundHover: '#fff',
      buttonTextColorHover: '#000',
      parallaxInfo: false,
      colorNavigation: '#fff',
      slideEffect: 'pallaxMouseMove' // backgroundMovement, pallaxMouseMove, backgroundVideo

    }, {
      slideType: 'info',
      // product, info
      slideActive: true,
      productTitle: '',
      productDescription: '',
      productPrice: '',
      productPriceNew: '',
      productPriceColor: '',
      productPriceNewColor: '',
      productPriceNewColorBlacken: '',
      productImg: '',
      productImgWebp: '',
      productLink: '#',
      title: 'VIDEO BACKGROUND',
      titleTag: 'h2',
      titleColor: '#fff',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: 'yellow',
      text: 'Video slide background',
      textColor: '#fff',
      backgroundImage: '',
      backgroundImageWebp: '',
      backgroundVideo: './images/cover-video2.mp4',
      button: true,
      buttonLink: '#link',
      buttonText: 'Button',
      buttonTextColor: '#fff',
      buttonBackground: 'transparent',
      buttonBorder: '2px solid #fff',
      buttonBackgroundHover: '#fff',
      buttonTextColorHover: '#000',
      parallaxInfo: false,
      colorNavigation: '#fff',
      slideEffect: 'backgroundVideo' // backgroundMovement, pallaxMouseMove, backgroundVideo

    }, {
      slideType: 'info',
      // product, info
      slideActive: true,
      productTitle: '',
      productDescription: '',
      productPrice: '',
      productPriceNew: '',
      productPriceColor: '',
      productPriceNewColor: '',
      productPriceNewColorBlacken: '',
      productImg: '',
      productImgWebp: '',
      productLink: '#',
      title: 'Parallax effect',
      titleTag: 'h2',
      titleColor: '#000',
      titleAnimation: true,
      textAccent: 'Super!',
      textAccentColor: 'red',
      text: 'Parallax effect when scrolling a page',
      textColor: '#000',
      backgroundImage: './images/iphone.jpg',
      backgroundImageWebp: './images/iphone.webp',
      backgroundVideo: '',
      button: true,
      buttonLink: '#link',
      buttonText: 'Button',
      buttonTextColor: '#000',
      buttonBackground: 'transparent',
      buttonBorder: '2px solid #000',
      buttonBackgroundHover: '#000',
      buttonTextColorHover: '#fff',
      parallaxInfo: true,
      colorNavigation: '#000',
      slideEffect: '' // backgroundMovement, pallaxMouseMove, backgroundVideo

    }]
  });
  startSliderWebasyst.active();
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(9);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(32);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(33);
var toLength = __webpack_require__(12);
var createProperty = __webpack_require__(71);
var arraySpeciesCreate = __webpack_require__(34);
var arrayMethodHasSpeciesSupport = __webpack_require__(72);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(67);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(18);
var definePropertyModule = __webpack_require__(11);
var createPropertyDescriptor = __webpack_require__(17);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(67);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(3);
var objectDefinePropertyModile = __webpack_require__(11);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(61);
var isRegExp = __webpack_require__(75);
var anObject = __webpack_require__(6);
var requireObjectCoercible = __webpack_require__(7);
var speciesConstructor = __webpack_require__(76);
var advanceStringIndex = __webpack_require__(62);
var toLength = __webpack_require__(12);
var callRegExpExec = __webpack_require__(64);
var regexpExec = __webpack_require__(13);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var classof = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(9);
var global = __webpack_require__(0);
var userAgent = __webpack_require__(68);

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


/***/ })
/******/ ]);