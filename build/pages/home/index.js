(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
/******/ })
/************************************************************************/
/******/ ({

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(341)
var $app_template$ = __webpack_require__(345)
var $app_style$ = __webpack_require__(346)
var $app_script$ = __webpack_require__(347)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92)
var $app_template$ = __webpack_require__(342)
var $app_style$ = __webpack_require__(343)
var $app_script$ = __webpack_require__(344)

$app_define$('@app-component/w-list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = {
  "type": "refresh",
  "attr": {
    "refreshing": function () {return this.refreshing}
  },
  "events": {
    "refresh": "onRefresh"
  },
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "list-wrapper"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.list},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "common-item"
              },
              "classList": [
                "list-item"
              ],
              "events": {
                "click": function (evt) {this.gotoDetail(this.item,evt)}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-wrap"
                  ],
                  "children": [
                    {
                      "type": "avatar-info",
                      "attr": {
                        "avatar": function () {return this.item.member.avatar_normal},
                        "username": function () {return this.item.member.username},
                        "created": function () {return this.item.created},
                        "relies": function () {return this.item.replies},
                        "node": function () {return this.item.node.title}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.title}
                      },
                      "classList": [
                        "item-title"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = {
  ".list-item": {
    "width": "100%",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f7f7f7",
    "backgroundColor:active": "#f4f4f4"
  },
  ".list-item .item-wrap": {
    "flex": 1,
    "width": "100%",
    "paddingTop": "25px",
    "paddingRight": "25px",
    "paddingBottom": "25px",
    "paddingLeft": "25px",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-wrap"
        }
      ]
    }
  },
  ".list-item .item-title": {
    "color": "#616161",
    "lineHeight": "44px",
    "lines": 2,
    "textOverflow": "ellipsis",
    "fontSize": "32px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-title"
        }
      ]
    }
  }
}

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    list: {
      type: Array
    },
    refreshing: {
      type: Boolean,
      default: false
    }
  },
  onRefresh: function onRefresh() {
    this.$dispatch('reload');
  },
  gotoDetail: function gotoDetail(item) {
    console.log(JSON.stringify(item, null, 2));
    _system2.default.push({
      uri: 'pages/post-detail',
      params: {
        id: item.id,
        title: item.title,
        url: item.url,
        content: item.content,
        replies: item.replies,
        username: item.member.username,
        avatar_normal: item.member.avatar_normal,
        nodeTitle: item.node.title,
        created: item.created
      }
    });
  }
};}

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "tutorial-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "V2EX"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "flexible-tabs"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "flexible-tabbar"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.topicList},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.label}
                  },
                  "classList": function () {return [this.currentIndex===this.index?'active':'']},
                  "events": {
                    "click": function (evt) {this.clickTabBar(this.index,this.item,evt)}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "tabs",
          "attr": {
            "index": function () {return this.currentIndex}
          },
          "events": {
            "change": "changeTabactive"
          },
          "children": [
            {
              "type": "tab-content",
              "attr": {},
              "classList": [
                "flexible-tab-content"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-container"
                  ],
                  "repeat": {
                    "exp": function () {return this.topicList},
                    "key": "index",
                    "value": "item"
                  },
                  "children": [
                    {
                      "type": "w-list",
                      "attr": {
                        "list": function () {return this.item.list},
                        "refreshing": function () {return !this.item.render}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = {
  ".tutorial-page": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".tutorial-page .title-bar": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "64px",
    "textAlign": "center",
    "backgroundColor": "#f4f4f4",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar"
        }
      ]
    }
  },
  ".tutorial-page .title-bar text": {
    "color": "#555555",
    "fontSize": "40px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs": {
    "flex": 1,
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs .flexible-tabbar": {
    "height": "100px",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
    "backgroundColor": "#f4f4f4",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabbar"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs .flexible-tabbar text": {
    "flexGrow": 1,
    "height": "100px",
    "marginTop": "0px",
    "marginRight": "30px",
    "marginBottom": "0px",
    "marginLeft": "30px",
    "textAlign": "center",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "#f1f1f1",
    "borderRightColor": "#f1f1f1",
    "borderBottomColor": "#f1f1f1",
    "borderLeftColor": "#f1f1f1",
    "color": "#a2a2a2",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabbar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs .flexible-tabbar .active": {
    "color": "#616161",
    "borderBottomColor": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabbar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs .flexible-tab-content": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tab-content"
        }
      ]
    }
  },
  ".tutorial-page .flexible-tabs .flexible-tab-content .tab-content-section": {
    "flex": 1,
    "backgroundColor": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tutorial-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tabs"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "flexible-tab-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-content-section"
        }
      ]
    }
  },
  ".tab-container": {
    "flex": 1,
    "flexDirection": "column"
  }
}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.storage');

var _system4 = _interopRequireDefault(_system3);

var _api = __webpack_require__(96);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiMap = ['getHotList', 'getLatestList'];

exports.default = {
  private: {
    topicList: [{
      id: 'latest',
      label: '最新',
      list: [],
      render: false
    }, {
      id: 'hot',
      label: '最热',
      list: [],
      render: false
    }],
    currentIndex: 0
  },
  onInit: function onInit() {
    var _this = this;

    console.log(this.$app.network);
    _system4.default.get({
      key: 'latesList',
      success: function success(data) {
        if (!data) return;

        _this.topicList[_this.currentIndex].list = JSON.parse(data);
      }
    });
    this.getListData(this.currentIndex);
    this.$on('reload', this.onReload);
  },
  changeTabactive: function changeTabactive(evt) {
    console.log('changeTabactive');
    this.currentIndex = evt.index;
    this.getListData(this.currentIndex);
  },
  clickTabBar: function clickTabBar(index, item) {
    console.log('clickTabBar');
    this.getListData(index);
    this.currentIndex = index;
  },
  getListData: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(index) {
      var _this2 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var res, key;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!force && this.topicList[index].render)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return _api2.default[apiMap[index]](this);

            case 5:
              res = _context.sent;

              if (res.data.code === 200) {
                key = index === 0 ? 'latestList' : 'hotList';

                _system4.default.set({
                  key: key,
                  value: res.data.data
                });

                this.topicList[index].list = JSON.parse(res.data.data);
                setTimeout(function () {
                  _this2.topicList[index].render = true;
                  _system2.default.showToast({
                    message: '成功'
                  });
                }, 300);
              }
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);

              console.error(_context.t0);
              _system2.default.showToast({
                message: '出错了'
              });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 9]]);
    }));

    function getListData(_x2) {
      return _ref.apply(this, arguments);
    }

    return getListData;
  }(),
  renderTabContent: function renderTabContent(index) {
    return !!this.topicList[index].render;
  },
  onReload: function onReload(e, index) {
    this.topicList[this.currentIndex].render = false;
    this.getListData(this.currentIndex, true);
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * 网络请求 
 * @param options 
 * @return {Promise} 
 */
var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options, vmInst) {
    var p1;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            p1 = new Promise(function (resolve, reject) {
              options.success = function (data, code) {
                resolve({
                  data: data,
                  code: code
                });
              }.bindPage(vmInst);
              options.fail = function (data, code) {
                resolve({
                  data: data,
                  code: code
                });
              }.bindPage(vmInst);
              var defaultConfig = {
                header: {
                  'Content-Type': 'application/json'
                }
              };
              _system2.default.fetch(Object.assign({}, defaultConfig, options));
            });
            return _context.abrupt('return', p1);

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function request(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Function.prototype.bindPage = function (vmInst) {
  var fn = this;
  return function () {
    if (!vmInst) {
      throw new Error('\u4F7F\u7528\u9519\u8BEF\uFF1A\u8BF7\u4F20\u9012VM\u5BF9\u8C61');
    }
    if (vmInst.$valid) {
      return fn.apply(vmInst, arguments);
    } else {
      console.info('\u9875\u9762\u9500\u6BC1\u65F6\uFF0C\u4E0D\u6267\u884C\u56DE\u8C03\u51FD\u6570');
    }
  };
};exports.default = request;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  formatTime: function formatTime(dateTimeStamp) {
    var result = void 0;
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp * 1000;
    if (diffValue < 0) return;
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
      result = ' ' + parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
      result = ' ' + parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
      result = ' ' + parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
      result = ' ' + parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
      result = ' ' + parseInt(minC) + '分钟前';
    } else result = '刚刚';
    return result;
  }
};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(93)
var $app_style$ = __webpack_require__(94)
var $app_script$ = __webpack_require__(95)

$app_define$('@app-component/avatar-info', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "item-info"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return 'https:' + (this.avatar)}
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "inner-info"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.username}
          },
          "classList": [
            "inner-username"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "inner-time"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.formatTime(this.created)}
              }
            },
            {
              "type": "slot",
              "attr": {}
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '评论' + (this.relies)}
              },
              "classList": [
                "inner-common"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "inner-theme"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.node}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {
  ".item-info": {
    "flex": 1,
    "width": "100%",
    "paddingBottom": "6px"
  },
  ".item-info image": {
    "width": "80px",
    "height": "80px",
    "marginRight": "14px",
    "borderRadius": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".item-info .inner-info": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-info"
        }
      ]
    }
  },
  ".item-info .inner-info .inner-username": {
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#555555",
    "paddingLeft": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-username"
        }
      ]
    }
  },
  ".item-info .inner-info .inner-time text": {
    "color": "#cccccc",
    "fontSize": "26px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-time"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".item-info .inner-common": {
    "marginLeft": "10px",
    "paddingLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-common"
        }
      ]
    }
  },
  ".item-info .inner-theme": {
    "alignItems": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-theme"
        }
      ]
    }
  },
  ".item-info .inner-theme text": {
    "backgroundColor": "#f5f5f5",
    "paddingTop": "6px",
    "paddingRight": "10px",
    "paddingBottom": "6px",
    "paddingLeft": "10px",
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "inner-theme"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(65);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['avatar', 'username', 'created', 'relies', 'node'],
  formatTime: _index2.default.formatTime
};}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(49);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'https://www.v2ex.com/';

exports.default = {
  /**
   * 获取最热主题列表
   * @param {*} vmIns 
   */
  getHotList: function getHotList(vmIns) {
    return (0, _fetch2.default)({
      url: BASE_URL + 'api/topics/hot.json'
    }, vmIns);
  },

  /**
   * 获取最新最提列表
   * @param {*} vmIns 
   */
  getLatestList: function getLatestList(vmIns) {
    return (0, _fetch2.default)({
      url: BASE_URL + 'api/topics/latest.json'
    }, vmIns);
  },
  getPostReply: function getPostReply(topic_id, vmIns) {
    return (0, _fetch2.default)({
      url: BASE_URL + 'api/replies/show.json',
      data: {
        topic_id: topic_id
      }
    }, vmIns);
  }
};

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map