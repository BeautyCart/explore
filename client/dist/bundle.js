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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/benli/Desktop/HR/explore/client/src/index.jsx: Unexpected token (14:8)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m  \\u001b[36mconst\\u001b[39m \\u001b[33mTitle\\u001b[39m \\u001b[33m=\\u001b[39m styled\\u001b[33m.\\u001b[39mh1\\u001b[32m`\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\u001b[32m    font-size: 1.5em;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[32m    test-allign: center;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[32m    color: palevioletred\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:746:17)\\n    at Object.raiseWithData (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:739:17)\\n    at Object.raise (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:733:17)\\n    at Object.unexpected (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:8807:16)\\n    at Object.parseClassMemberWithIsStatic (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:12122:12)\\n    at Object.parseClassMember (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:12015:10)\\n    at withTopicForbiddingContext (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11960:14)\\n    at Object.withTopicForbiddingContext (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11031:14)\\n    at Object.parseClassBody (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11937:10)\\n    at Object.parseClass (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11911:22)\\n    at Object.parseStatementContent (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11198:21)\\n    at Object.parseStatement (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11156:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11731:25)\\n    at Object.parseBlockBody (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11717:10)\\n    at Object.parseTopLevel (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:11087:10)\\n    at Object.parse (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:12768:10)\\n    at parse (/Users/benli/Desktop/HR/explore/node_modules/@babel/parser/lib/index.js:12821:38)\\n    at parser (/Users/benli/Desktop/HR/explore/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/benli/Desktop/HR/explore/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/benli/Desktop/HR/explore/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/benli/Desktop/HR/explore/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/benli/Desktop/HR/explore/node_modules/gensync/index.js:254:32)\\n    at gen.next (/Users/benli/Desktop/HR/explore/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/Users/benli/Desktop/HR/explore/node_modules/gensync/index.js:216:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });