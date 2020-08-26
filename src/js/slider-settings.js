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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/_slider-settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_slider-settings.js":
/*!************************************!*\
  !*** ./src/js/_slider-settings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var webasyst = new StartSlider({\n  selector: '.my-slider',\n  arrows: true,\n  buttonsSwitches: true,\n  autoPlay: false,\n  autoPlaySpeed: 5,\n  fonts: ['<link href=\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap\" rel=\"stylesheet\">', '<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap\" rel=\"stylesheet\">', '<link href=\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\" rel=\"stylesheet\">'],\n  fontNameTitle: '\"Roboto Condensed\", sans-serif',\n  fontNameText: '\"Open Sans Condensed\", sans-serif',\n  fontNameTextAccent: '\"Pacifico\", cursive',\n  fontNameButton: '\"Roboto Condensed\", sans-serif',\n  contentSize: false,\n  settingsSliders: [{\n    productId: true,\n    productTitle: 'Велосипед Forward Sporting 3.0 Disc (2020) горный рам',\n    productDescription: 'Купить Велосипед Forward Sporting 3.0 Disc (2020) горный рам.:19\" кол.:27.5\" черный 16.5кг (RBKW0MN7Q006) в интернет-магазине Ситилинк по доступной цене.',\n    productPrice: '12000 ₽',\n    productPriceNew: '9000 ₽',\n    productPriceColor: 'rgb(36, 238, 53)',\n    productPriceNewColor: '#111',\n    productPriceNewColorBlacken: 'red',\n    productImg: './images/bike.jpg',\n    productImgWebp: './images/bike.webp',\n    productLink: '#',\n    title: 'ЗАГОЛОВОК СЛАЙДЕРА СЛАЙДЕРА',\n    titleTag: 'h1',\n    titleColor: '#fff',\n    titleAnimation: true,\n    textAccent: 'Супер!',\n    textAccentColor: '#fff',\n    text: 'Далеко–далеко разносилась весенняя песня жаворонка по полям, по лугам и даже по лесным чащам. Заслышав эту весеннюю песню, из своих норок.',\n    textColor: '#fff',\n    backgroundImage: './images/slide-bg.jpg',\n    backgroundImageWebp: '',\n    backgroundVideo: '',\n    button: true,\n    buttonLink: '#link',\n    buttonText: 'Кнопка',\n    buttonTextColor: '#fff',\n    buttonBackground: 'transparent',\n    buttonBorder: '2px solid #fff',\n    buttonBackgroundHover: '#fff',\n    buttonTextColorHover: '#000',\n    parallaxInfo: true,\n    colorNavigation: '#000',\n    slideEffect: '' // backgroundMovement, pallaxMouseMove, backgroundVideo\n\n  }, {\n    productId: false,\n    productTitle: 'Велосипед Forward Sporting 3.0 Disc (2020) горный рам',\n    productDescription: 'Купить Велосипед Forward Sporting 3.0 Disc (2020) горный рам.:19\" кол.:27.5\" черный 16.5кг (RBKW0MN7Q006) в интернет-магазине Ситилинк по доступной цене.',\n    productPrice: '12000₽',\n    productPriceColor: 'red',\n    productImg: './images/bike.jpg',\n    productLink: '#',\n    title: 'ЗАГОЛОВОК СЛАЙДЕРА',\n    titleTag: 'h1',\n    titleColor: '#fff',\n    titleAnimation: true,\n    textAccent: 'Супер!',\n    textAccentColor: 'rgb(36, 238, 53)',\n    text: 'Далеко–далеко разносилась весенняя песня жаворонка по полям, по лугам и даже по лесным чащам. Заслышав эту весеннюю песню, из своих норок.',\n    textColor: '#fff',\n    backgroundImage: './images/slide-bg2.jpg',\n    backgroundImageWebp: '',\n    backgroundVideo: '',\n    button: true,\n    buttonLink: '#link',\n    buttonText: 'Кнопка',\n    buttonTextColor: '#fff',\n    buttonBackground: 'transparent',\n    buttonBorder: '2px solid #fff',\n    buttonBackgroundHover: '#fff',\n    buttonTextColorHover: '#000',\n    parallaxInfo: true,\n    colorNavigation: false,\n    slideEffect: 'pallaxMouseMove' // backgroundMovement, pallaxMouseMove, backgroundVideo\n\n  }]\n});\nwebasyst.active();\n\n//# sourceURL=webpack:///./src/js/_slider-settings.js?");

/***/ })

/******/ });