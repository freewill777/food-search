import {
  motion
} from "/build/_shared/chunk-Q7RA7ZAZ.js";
import {
  React,
  __commonJS,
  __toESM,
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

// app/components/animated-text/animated-text.tsx
init_react();
var import_react = __toESM(require_react());

// app/components/animated-text/index.ts
init_react();

// app/components/animated-text/animated-text.motion.ts
init_react();
var defaultTextVariants = {
  visible: {}
};
var defaultLetterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "circOut", duration: 0.5 }
  }
};

// app/components/animated-text/animated-text.tsx
var AnimatedText = ({
  as: Tag = "p",
  text,
  variants = defaultLetterVariants,
  ...rest
}) => {
  const words = text.split(" ").map((word) => `${word}\xA0`);
  const renderWords = (0, import_react.useMemo)(() => words.map((word, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "inline-block overflow-hidden"
  }, /* @__PURE__ */ React.createElement(motion.span, {
    variants,
    className: "inline-block"
  }, word))), [variants, words]);
  return /* @__PURE__ */ React.createElement(Tag, {
    ...rest
  }, /* @__PURE__ */ React.createElement(motion.span, {
    variants
  }, renderWords));
};
var AnimatedLetters = ({
  as: Tag = "div",
  text,
  textVariants = defaultTextVariants,
  letterVariants = defaultLetterVariants,
  ...rest
}) => {
  const words = text.split(" ").map((word) => `${word}\xA0`);
  return /* @__PURE__ */ React.createElement(Tag, {
    ...rest,
    style: { backgroundColor: "white" }
  }, /* @__PURE__ */ React.createElement(motion.span, {
    variants: textVariants
  }, words.map((_, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "inline-block whitespace-nowrap",
    style: { marginTop: "0.35em" }
  }, [...words[index]].flat().map((letter, letterIndex) => /* @__PURE__ */ React.createElement("span", {
    key: letterIndex,
    className: "inline-block overflow-hidden"
  }, /* @__PURE__ */ React.createElement(motion.span, {
    variants: letterVariants,
    className: "inline-block"
  }, letter)))))));
};

export {
  AnimatedText,
  AnimatedLetters,
  require_useMedia
};
//# sourceMappingURL=/build/_shared/chunk-B2LJPMM7.js.map
