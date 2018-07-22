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
/******/ 	return __webpack_require__(__webpack_require__.s = 348);
/******/ })
/************************************************************************/
/******/ ({

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92)
__webpack_require__(349)
var $app_template$ = __webpack_require__(353)
var $app_style$ = __webpack_require__(354)
var $app_script$ = __webpack_require__(355)

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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(350)
var $app_style$ = __webpack_require__(351)
var $app_script$ = __webpack_require__(352)

$app_define$('@app-component/user-reply', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "comment-wrapper"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return 'https:' + (this.data.member.avatar_normal)}
      },
      "classList": [
        "comment-avatar"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "comment-main"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.data.member.username}
          },
          "classList": [
            "comment-username"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.formatTime(this.data.created)}
          },
          "classList": [
            "comment-time"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.data.content}
          },
          "classList": [
            "comment-content"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.index+1) + '楼'}
          },
          "classList": [
            "comment-time",
            "divider"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = {
  ".comment-wrapper": {
    "paddingTop": "25px",
    "paddingRight": "25px",
    "paddingBottom": "0px",
    "paddingLeft": "25px"
  },
  ".comment-avatar": {
    "width": "60px",
    "height": "60px",
    "marginRight": "14px",
    "marginTop": "10px",
    "borderRadius": "30px"
  },
  ".comment-main": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".comment-main .comment-username": {
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
          "v": "comment-main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-username"
        }
      ]
    }
  },
  ".comment-main .comment-time": {
    "color": "#cccccc",
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-time"
        }
      ]
    }
  },
  ".comment-main .comment-content": {
    "color": "#616161",
    "lineHeight": "44px",
    "fontSize": "32px",
    "paddingBottom": "20px",
    "paddingTop": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-main"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-content"
        }
      ]
    }
  },
  ".divider": {
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f7f7f7",
    "paddingBottom": "20px"
  }
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(65);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    index: {
      type: Number
    }
  },
  formatTime: _index2.default.formatTime
};}

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "detail-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "info-wrapper"
      ],
      "children": [
        {
          "type": "avatar-info",
          "attr": {
            "avatar": function () {return this.avatar_normal},
            "username": function () {return this.username},
            "created": function () {return this.created},
            "relies": function () {return this.replies},
            "node": function () {return this.nodeTitle}
          }
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.title}
          },
          "classList": [
            "item-title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.content},
      "classList": [
        "content-wrap"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.content}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.isLoading},
      "classList": [
        "loading-wrap"
      ],
      "children": [
        {
          "type": "progress",
          "attr": {
            "type": "circular",
            "show": function () {return this.isLoading}
          }
        }
      ]
    },
    {
      "type": "list",
      "attr": {
        "scrollpage": "true"
      },
      "shown": function () {return !(this.isLoading)},
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.replyList},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "reply-item"
              },
              "children": [
                {
                  "type": "user-reply",
                  "attr": {
                    "data": function () {return this.item},
                    "index": function () {return this.index}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "is-bottom"
          },
          "classList": [
            "list-end"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "全部加载完成"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = {
  ".divider": {
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f7f7f7",
    "paddingBottom": "30px"
  },
  ".detail-container": {
    "flexDirection": "column"
  },
  ".detail-container .info-wrapper": {
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
          "v": "detail-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info-wrapper"
        }
      ]
    }
  },
  ".detail-container .item-title": {
    "color": "#616161",
    "lineHeight": "44px",
    "fontSize": "32px",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f7f7f7",
    "paddingBottom": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail-container"
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
  },
  ".detail-container .content-wrap": {
    "marginTop": "0px",
    "marginRight": "25px",
    "marginBottom": "25px",
    "marginLeft": "25px",
    "borderStyle": "solid",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#f7f7f7",
    "paddingBottom": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-wrap"
        }
      ]
    }
  },
  ".detail-container .content-wrap text": {
    "lineHeight": "44px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "detail-container"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-wrap"
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
  ".list-end": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100px"
  },
  ".loading-wrap": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".loading-wrap progress": {
    "color": "#000000",
    "width": "60px",
    "height": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "loading-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "progress"
        }
      ]
    }
  }
}

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.share');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

var _api = __webpack_require__(96);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  protected: {
    text: '欢迎打开详情页',
    id: '',
    title: '',
    url: '',
    content: '',
    replies: '',
    username: '',
    avatar_normal: '',
    nodeTitle: '',
    created: ''
  },
  public: {
    replyList: [],
    isLoading: true
  },
  onInit: function onInit() {
    this.getReplies();
  },
  getReplies: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api2.default.getPostReply(this.id, this);

            case 3:
              res = _context.sent;

              if (res.data.code === 200) {
                this.replyList = JSON.parse(res.data.data);
                this.isLoading = false;
                console.log(JSON.stringify(this.replyList, null, 2));
              }
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);
              _system4.default.showToast({
                message: '出错了'
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    }));

    function getReplies() {
      return _ref.apply(this, arguments);
    }

    return getReplies;
  }(),
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu([this.shareTo(this)]);
  },
  shareTo: function shareTo(vmIns) {
    var _vmIns = vmIns;
    return function () {
      _system2.default.share({
        type: 'text/plain',
        data: _vmIns.url,
        success: function success(data) {
          console.log('handling success');
        },
        fail: function fail(data, code) {
          console.log('handling fail, code = ' + code);
        }
      });
    };
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