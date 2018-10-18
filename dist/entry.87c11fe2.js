// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/riot-observable/dist/observable.js":[function(require,module,exports) {
var define;
;(function(window, undefined) {var observable = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {}

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          (callbacks[event] = callbacks[event] || []).push(fn)
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) callbacks = {}
        else {
          if (fn) {
            var arr = callbacks[event]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[event]
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on)
          fn.apply(el, arguments)
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {

        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i

        for (i = 0; i < arglen; i++) {
          args[i] = arguments[i + 1] // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0)

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args)
        }

        if (callbacks['*'] && event != '*')
          el.trigger.apply(el, ['*', event].concat(args))

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  })

  return el

}
  /* istanbul ignore next */
  // support CommonJS, AMD & browser
  if (typeof exports === 'object')
    module.exports = observable
  else if (typeof define === 'function' && define.amd)
    define(function() { return observable })
  else
    window.observable = observable

})(typeof window != 'undefined' ? window : undefined);
},{}],"../node_modules/riot-route/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _riotObservable = _interopRequireDefault(require("riot-observable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple client-side router
 * @module riot-route
 */
var RE_ORIGIN = /^.+?\/\/+[^/]+/,
    EVENT_LISTENER = 'EventListener',
    REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
    ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
    HAS_ATTRIBUTE = 'hasAttribute',
    POPSTATE = 'popstate',
    HASHCHANGE = 'hashchange',
    TRIGGER = 'trigger',
    MAX_EMIT_STACK_LEVEL = 3,
    win = typeof window != 'undefined' && window,
    doc = typeof document != 'undefined' && document,
    hist = win && history,
    loc = win && (hist.location || win.location),
    // see html5-history-api
prot = Router.prototype,
    // to minify more
clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
    central = (0, _riotObservable.default)();
var started = false,
    routeFound = false,
    debouncedEmit,
    current,
    parser,
    secondParser,
    emitStack = [],
    emitStackLevel = 0;
/**
 * Default parser. You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @returns {array} array
 */

function DEFAULT_PARSER(path) {
  return path.split(/[/?#]/);
}
/**
 * Default parser (second). You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @param {string} filter - filter string (normalized)
 * @returns {array} array
 */


function DEFAULT_SECOND_PARSER(path, filter) {
  var f = filter.replace(/\?/g, '\\?').replace(/\*/g, '([^/?#]+?)').replace(/\.\./, '.*');
  var re = new RegExp("^" + f + "$");
  var args = path.match(re);

  if (args) {
    return args.slice(1);
  }
}
/**
 * Simple/cheap debounce implementation
 * @param   {function} fn - callback
 * @param   {number} delay - delay in seconds
 * @returns {function} debounced function
 */


function debounce(fn, delay) {
  var t;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  };
}
/**
 * Set the window listeners to trigger the routes
 * @param {boolean} autoExec - see route.start
 */


function start(autoExec) {
  debouncedEmit = debounce(emit, 1);
  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
  doc[ADD_EVENT_LISTENER](clickEvent, click);

  if (autoExec) {
    emit(true);
  }
}
/**
 * Router class
 */


function Router() {
  this.$ = [];
  (0, _riotObservable.default)(this); // make it observable

  central.on('stop', this.s.bind(this));
  central.on('emit', this.e.bind(this));
}

function normalize(path) {
  return path.replace(/^\/|\/$/, '');
}

function isString(str) {
  return typeof str == 'string';
}
/**
 * Get the part after domain name
 * @param {string} href - fullpath
 * @returns {string} path from root
 */


function getPathFromRoot(href) {
  return (href || loc.href).replace(RE_ORIGIN, '');
}
/**
 * Get the part after base
 * @param {string} href - fullpath
 * @returns {string} path from base
 */


function getPathFromBase(href) {
  var base = route._.base;
  return base[0] === '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '').replace(base, '');
}

function emit(force) {
  // the stack is needed for redirections
  var isRoot = emitStackLevel === 0;

  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) {
    return;
  }

  emitStackLevel++;
  emitStack.push(function () {
    var path = getPathFromBase();

    if (force || path !== current) {
      central[TRIGGER]('emit', path);
      current = path;
    }
  });

  if (isRoot) {
    var first;

    while (first = emitStack.shift()) {
      first();
    } // stack increses within this call


    emitStackLevel = 0;
  }
}

function click(e) {
  if (e.which !== 1 // not left click
  || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
  || e.defaultPrevented // or default prevented
  ) {
      return;
    }

  var el = e.target;

  while (el && el.nodeName !== 'A') {
    el = el.parentNode;
  }

  if (!el || el.nodeName !== 'A' // not A tag
  || el[HAS_ATTRIBUTE]('download') // has download attr
  || !el[HAS_ATTRIBUTE]('href') // has no href attr
  || el.target && el.target !== '_self' // another window or frame
  || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) === -1 // cross origin
  ) {
      return;
    }

  var base = route._.base;

  if (el.href !== loc.href && (el.href.split('#')[0] === loc.href.split('#')[0] // internal jump
  || base[0] !== '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
  || base[0] === '#' && el.href.split(base)[0] !== loc.href.split(base)[0] // outside of #base
  || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
  )) {
    return;
  }

  e.preventDefault();
}
/**
 * Go to the path
 * @param {string} path - destination path
 * @param {string} title - page title
 * @param {boolean} shouldReplace - use replaceState or pushState
 * @returns {boolean} - route not found flag
 */


function go(path, title, shouldReplace) {
  // Server-side usage: directly execute handlers for the path
  if (!hist) {
    return central[TRIGGER]('emit', getPathFromBase(path));
  }

  path = route._.base + normalize(path);
  title = title || doc.title; // browsers ignores the second parameter `title`

  shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path); // so we need to set it manually

  doc.title = title;
  routeFound = false;
  emit();
  return routeFound;
}
/**
 * Go to path or set action
 * a single string:                go there
 * two strings:                    go there with setting a title
 * two strings and boolean:        replace history with setting a title
 * a single function:              set an action on the default route
 * a string/RegExp and a function: set an action on the route
 * @param {(string|function)} first - path / action / filter
 * @param {(string|RegExp|function)} second - title / action
 * @param {boolean} third - replace flag
 */


prot.m = function (first, second, third) {
  if (isString(first) && (!second || isString(second))) {
    go(first, second, third || false);
  } else if (second) {
    this.r(first, second);
  } else {
    this.r('@', first);
  }
};
/**
 * Stop routing
 */


prot.s = function () {
  this.off('*');
  this.$ = [];
};
/**
 * Emit
 * @param {string} path - path
 */


prot.e = function (path) {
  this.$.concat('@').some(function (filter) {
    var args = (filter === '@' ? parser : secondParser)(normalize(path), normalize(filter));

    if (typeof args != 'undefined') {
      this[TRIGGER].apply(null, [filter].concat(args));
      return routeFound = true; // exit from loop
    }
  }, this);
};
/**
 * Register route
 * @param {string} filter - filter for matching to url
 * @param {function} action - action to register
 */


prot.r = function (filter, action) {
  if (filter !== '@') {
    filter = '/' + normalize(filter);
    this.$.push(filter);
  }

  this.on(filter, action);
};

var mainRouter = new Router();
var route = mainRouter.m.bind(mainRouter); // adding base and getPathFromBase to route so we can access them in route.tag's script

route._ = {
  base: null,
  getPathFromBase: getPathFromBase
};
/**
 * Create a sub router
 * @returns {function} the method of a new Router object
 */

route.create = function () {
  var newSubRouter = new Router(); // assign sub-router's main method

  var router = newSubRouter.m.bind(newSubRouter); // stop only this sub-router

  router.stop = newSubRouter.s.bind(newSubRouter);
  return router;
};
/**
 * Set the base of url
 * @param {(str|RegExp)} arg - a new base or '#' or '#!'
 */


route.base = function (arg) {
  route._.base = arg || '#';
  current = getPathFromBase(); // recalculate current path
};
/** Exec routing right now **/


route.exec = function () {
  emit(true);
};
/**
 * Replace the default router to yours
 * @param {function} fn - your parser function
 * @param {function} fn2 - your secondParser function
 */


route.parser = function (fn, fn2) {
  if (!fn && !fn2) {
    // reset parser for testing...
    parser = DEFAULT_PARSER;
    secondParser = DEFAULT_SECOND_PARSER;
  }

  if (fn) {
    parser = fn;
  }

  if (fn2) {
    secondParser = fn2;
  }
};
/**
 * Helper function to get url query as an object
 * @returns {object} parsed query
 */


route.query = function () {
  var q = {};
  var href = loc.href || current;
  href.replace(/[?&](.+?)=([^&]*)/g, function (_, k, v) {
    q[k] = v;
  });
  return q;
};
/** Stop routing **/


route.stop = function () {
  if (started) {
    if (win) {
      win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
      win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
      doc[REMOVE_EVENT_LISTENER](clickEvent, click);
    }

    central[TRIGGER]('stop');
    started = false;
  }
};
/**
 * Start routing
 * @param {boolean} autoExec - automatically exec after starting if true
 */


route.start = function (autoExec) {
  if (!started) {
    if (win) {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        start(autoExec);
      } else {
        document.onreadystatechange = function () {
          if (document.readyState === 'interactive') {
            // the timeout is needed to solve
            // a weird safari bug https://github.com/riot/route/issues/33
            setTimeout(function () {
              start(autoExec);
            }, 1);
          }
        };
      }
    }

    started = true;
  }
};
/** Prepare the router **/


route.base();
route.parser();
var _default = route;
exports.default = _default;
},{"riot-observable":"../node_modules/riot-observable/dist/observable.js"}],"lib/js/myQuery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;

var _riotRoute = _interopRequireDefault(require("riot-route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function log(message) {
  console.log(message);
}
},{"riot-route":"../node_modules/riot-route/lib/index.js"}],"entry.js":[function(require,module,exports) {
"use strict";

var _myQuery = require("./lib/js/myQuery.js");

(0, _myQuery.log)('works awesome');
},{"./lib/js/myQuery.js":"lib/js/myQuery.js"}],"../../../Users/ionuts/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63746" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../Users/ionuts/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","entry.js"], null)
//# sourceMappingURL=/entry.87c11fe2.map