import {
  __commonJS,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// node_modules/react-use/lib/misc/util.js
var require_util = __commonJS({
  "node_modules/react-use/lib/misc/util.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
    var noop = function() {
    };
    exports.noop = noop;
    function on(obj) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
      }
    }
    exports.on = on;
    function off(obj) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
      }
    }
    exports.off = off;
    exports.isBrowser = typeof window !== "undefined";
    exports.isNavigator = typeof navigator !== "undefined";
  }
});

// node_modules/react-use/lib/useMedia.js
var require_useMedia = __commonJS({
  "node_modules/react-use/lib/useMedia.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var util_1 = require_util();
    var getInitialState = function(query, defaultState) {
      if (defaultState !== void 0) {
        return defaultState;
      }
      if (util_1.isBrowser) {
        return window.matchMedia(query).matches;
      }
      if (true) {
        console.warn("`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.");
      }
      return false;
    };
    var useMedia = function(query, defaultState) {
      var _a = react_1.useState(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];
      react_1.useEffect(function() {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function() {
          if (!mounted) {
            return;
          }
          setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function() {
          mounted = false;
          mql.removeListener(onChange);
        };
      }, [query]);
      return state;
    };
    exports.default = useMedia;
  }
});

export {
  require_useMedia
};
//# sourceMappingURL=/build/_shared/chunk-XGZKOL4T.js.map
