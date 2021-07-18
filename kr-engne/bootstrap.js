/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/kr_engne_bg.wasm": function() {
/******/ 			return {
/******/ 				"./kr_engne_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_alert_4554fde2ad432db9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_alert_4554fde2ad432db9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_86b4b13392c7af56": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_self_86b4b13392c7af56"]();
/******/ 					},
/******/ 					"__wbg_require_f5521a5b85ad2542": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_require_f5521a5b85ad2542"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_crypto_b8c92eaac23d0d80": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_crypto_b8c92eaac23d0d80"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_9ad6677321a08dd8": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_msCrypto_9ad6677321a08dd8"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_dd27e6b0652b3236": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_getRandomValues_dd27e6b0652b3236"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_e57c9b75ddead065": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_getRandomValues_e57c9b75ddead065"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_d2ba53160aec6aba": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_randomFillSync_d2ba53160aec6aba"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_452b4680e8614c81": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_static_accessor_MODULE_452b4680e8614c81"]();
/******/ 					},
/******/ 					"__wbg_instanceof_Window_11e25482011fc506": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_instanceof_Window_11e25482011fc506"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_5aff8cd83ef968f5": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_document_5aff8cd83ef968f5"](p0i32);
/******/ 					},
/******/ 					"__wbg_performance_9d1ecf711183e1d5": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_performance_9d1ecf711183e1d5"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_b180ea4ada06a837": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_getElementById_b180ea4ada06a837"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_data_315524ada7b563f4": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_data_315524ada7b563f4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithu8clampedarrayandsh_d5177e9b24f89848": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_newwithu8clampedarrayandsh_d5177e9b24f89848"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_779e79c4121aa91b": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_779e79c4121aa91b"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_2939ee453716e462": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_setstrokeStyle_2939ee453716e462"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_af790b5baf4d3210": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_setfillStyle_af790b5baf4d3210"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginPath_2378575e37027ad3": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_beginPath_2378575e37027ad3"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_558339447ed6ad43": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_fill_558339447ed6ad43"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_c1e0313c58997dcf": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_stroke_c1e0313c58997dcf"](p0i32);
/******/ 					},
/******/ 					"__wbg_getImageData_b5842f1d6ce40388": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_getImageData_b5842f1d6ce40388"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_putImageData_67091e6c02209309": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_putImageData_67091e6c02209309"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_ellipse_d55913dbf5deff09": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64,p6f64,p7f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_ellipse_d55913dbf5deff09"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64,p6f64,p7f64);
/******/ 					},
/******/ 					"__wbg_lineTo_13bbc57988274391": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_lineTo_13bbc57988274391"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_a7bfe2be52f6286b": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_moveTo_a7bfe2be52f6286b"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_clearRect_e39633ccf4fe4122": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_clearRect_e39633ccf4fe4122"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_fillRect_46ffc8d2cef7e298": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_fillRect_46ffc8d2cef7e298"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_strokeRect_7ea34fad8a7f0fe2": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_strokeRect_7ea34fad8a7f0fe2"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_translate_e34dc200602babf0": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_translate_e34dc200602babf0"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_now_44a034aa2e1d73dd": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_now_44a034aa2e1d73dd"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_fd3cbbe3906d7792": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_fd3cbbe3906d7792"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_813df131fcbd6e91": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_getContext_813df131fcbd6e91"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_9fdd8f3961dd1bee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_newnoargs_9fdd8f3961dd1bee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_ba36642bd901572b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_call_ba36642bd901572b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_bb69a836a72ec6e9": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_self_bb69a836a72ec6e9"]();
/******/ 					},
/******/ 					"__wbg_window_3304fc4b414c9693": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_window_3304fc4b414c9693"]();
/******/ 					},
/******/ 					"__wbg_globalThis_e0d21cabc6630763": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_globalThis_e0d21cabc6630763"]();
/******/ 					},
/******/ 					"__wbg_global_8463719227271676": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_global_8463719227271676"]();
/******/ 					},
/******/ 					"__wbg_buffer_9e184d6f785de5ed": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_buffer_9e184d6f785de5ed"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_e8101319e4cf95fc": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_new_e8101319e4cf95fc"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_e8ae7b27314e8b98": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_set_e8ae7b27314e8b98"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_2d56cb37075fcfb1": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_length_2d56cb37075fcfb1"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_a8d1dbcbe703a5c6": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_newwithlength_a8d1dbcbe703a5c6"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_901ede8318da52a6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbg_subarray_901ede8318da52a6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/kr_engne_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/kr_engne_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/kr_engne_bg.wasm":"a037afbe53e526f9ad9e"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });