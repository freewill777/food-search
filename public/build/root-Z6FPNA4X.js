import {
  GenIcon,
  require_isObject,
  require_isSymbol,
  require_root
} from "/build/_shared/chunk-HCB3OXLI.js";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  require_theme,
  useTheme
} from "/build/_shared/chunk-XZ5BL54A.js";
import {
  AnimatePresence,
  clsx_m_default,
  motion
} from "/build/_shared/chunk-Q7RA7ZAZ.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-YWMPCM2Z.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    init_react();
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    init_react();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    init_react();
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    init_react();
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    init_react();
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    init_react();
    var debounce = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// browser-route-module:root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react9 = __toESM(require_react());
var import_theme = __toESM(require_theme());

// app/components/footer/index.ts
init_react();

// app/components/footer/footer.tsx
init_react();
var Footer = () => {
  return /* @__PURE__ */ React.createElement(motion.footer, {
    variants: footerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    className: "container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex w-1/2 gap-8 md:gap-12 text-xl"
  }, /* @__PURE__ */ React.createElement(motion.a, {
    href: "https://github.com/olivercederborg",
    target: "_blank",
    rel: "noreferrer",
    variants: footerItemVariants,
    className: "nav-link text-xl text-dark-500"
  }, "Github"), /* @__PURE__ */ React.createElement(motion.a, {
    href: "https://dribbble.com/oliver",
    target: "_blank",
    rel: "noreferrer",
    variants: footerItemVariants,
    className: "nav-link text-xl text-dark-500"
  }, "Dribbble"), /* @__PURE__ */ React.createElement(motion.a, {
    href: "https://www.linkedin.com/in/olivercederborg/",
    target: "_blank",
    rel: "noreferrer",
    variants: footerItemVariants,
    className: "nav-link text-xl text-dark-500"
  }, "Linkedin")), /* @__PURE__ */ React.createElement(motion.p, {
    variants: footerItemVariants,
    className: "font-light text-dark-300 dark:text-dark-400"
  }, "\xA9 Oliver Cederborg"));
};

// app/components/footer/footer.motion.ts
init_react();
var footerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5
    }
  }
};
var footerItemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

// app/components/mobile-navigation.tsx
init_react();
var import_react7 = __toESM(require_react());

// node_modules/use-scrollspy/dist/index.mjs
init_react();
var import_react = __toESM(require_react(), 1);
var import_throttle = __toESM(require_throttle(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var useIsomorphicEffect = typeof window !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;
var useWindowSize = () => {
  const [windowSize, setWindowSize] = (0, import_react2.useState)({
    width: 0,
    height: 0
  });
  const handleSize = (0, import_react2.useCallback)(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  useIsomorphicEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [handleSize]);
  useIsomorphicEffect(() => handleSize(), []);
  return windowSize;
};
var useScrollspy = ({
  ids,
  hrefs,
  offset = 0,
  activeClass = "active-scrollspy-item",
  initialId = ids[0],
  throttleMs = 250
}) => {
  const [activeId, setActiveId] = (0, import_react.useState)(initialId);
  const { height } = useWindowSize();
  const applyActiveClass = (href) => {
    const elements = document.querySelectorAll(`a[href="${href}"]`);
    if (!elements)
      return;
    for (const element of elements)
      element.classList.add(activeClass);
  };
  const removeActiveClass = (href) => {
    const elements = document.querySelectorAll(`a[href="${href}"]`);
    if (!elements)
      return;
    for (const element of elements)
      element.classList.remove(activeClass);
  };
  const handleScroll = (0, import_throttle.default)(() => {
    for (const [index, id] of ids.entries()) {
      const section = document.querySelector(`#${id}`);
      const href = hrefs[index];
      if (!(section instanceof Element))
        return;
      if (id !== activeId)
        removeActiveClass(href);
      const { top, bottom } = section.getBoundingClientRect();
      if (typeof offset === "number" && top + offset < 0 && bottom + offset > 0) {
        setActiveId(id);
        applyActiveClass(href);
      }
      if (offset === "topCenter" && top <= height / 2 && bottom > height / 2) {
        setActiveId(id);
        applyActiveClass(href);
      }
    }
  }, throttleMs);
  (0, import_react.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return activeId;
};

// app/hooks/use-click-away.ts
init_react();
var import_react4 = __toESM(require_react());
var defaultEvents = ["mousedown", "touchstart"];
var useClickAway = (references, onClickAway) => {
  const handleClick = (0, import_react4.useCallback)((event) => {
    if (references == null ? void 0 : references.some((ref) => ref.current && ref.current.contains(event.target)))
      return;
    onClickAway(event);
  }, [references, onClickAway]);
  (0, import_react4.useEffect)(() => {
    for (const event of defaultEvents) {
      document.addEventListener(event, handleClick);
    }
    return () => {
      for (const event of defaultEvents) {
        document.removeEventListener(event, handleClick);
      }
    };
  }, [handleClick]);
};

// app/components/logo.tsx
init_react();
var import_react5 = __toESM(require_react());
var Logo = ({ width = 50, height = 50, ...props }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = (0, import_react5.useMemo)(() => theme === "dark", [theme]);
  const imageSize = 70;
  return isDarkMode ? /* @__PURE__ */ React.createElement("img", {
    height: imageSize,
    width: imageSize,
    src: "../assets/Alirom_Logo_Variations-02.png"
  }) : /* @__PURE__ */ React.createElement("img", {
    height: imageSize,
    width: imageSize,
    src: "../assets/Alirom_Logo_Variations-01.png"
  });
};

// app/components/theme-toggle-button.tsx
init_react();
var import_react6 = __toESM(require_react());

// node_modules/react-icons/md/index.esm.js
init_react();
function MdOutlineDarkMode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" } }] })(props);
}
function MdOutlineLightMode(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" } }] })(props);
}

// app/components/theme-toggle-button.tsx
var IconButton = ({ children, ...props }) => /* @__PURE__ */ React.createElement(motion.button, {
  ...props,
  initial: { opacity: 0, rotate: -65, originY: "150%", originX: 0.5 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 65 },
  transition: { duration: 0.4, ease: "backOut" }
}, children);
IconButton.displayName = "IconButton";
var ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = (0, import_react6.useMemo)(() => theme === "dark", [theme]);
  return /* @__PURE__ */ React.createElement(AnimatePresence, {
    exitBeforeEnter: true
  }, isDarkMode ? /* @__PURE__ */ React.createElement(IconButton, {
    key: "light-mode",
    className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
    onClick: toggleTheme
  }, /* @__PURE__ */ React.createElement(MdOutlineLightMode, {
    title: "Light mode",
    size: 24
  })) : /* @__PURE__ */ React.createElement(IconButton, {
    key: "dark-mode",
    className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
    onClick: toggleTheme
  }, /* @__PURE__ */ React.createElement(MdOutlineDarkMode, {
    title: "Dark mode",
    size: 24
  })));
};

// app/components/mobile-navigation.tsx
var navVariants = {
  hidden: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: "afterChildren"
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: "beforeChildren",
      staggerChildren: 0.05
    }
  }
};
var linkVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "circOut"
    }
  }
};
var MotionLink = motion(Link);
var AnimatedLink = motion(Link);
AnimatedLink.defaultProps = { className: "hover:text-primary-brand nav-link" };
function MobileNav() {
  const navRef = (0, import_react7.useRef)(null);
  const navToggleRef = (0, import_react7.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const toggle = () => setIsOpen((open) => !open);
  useClickAway([navRef, navToggleRef], () => setIsOpen(false));
  useScrollspy({
    ids: ["intro", "projects", "about", "contact"],
    hrefs: ["/#intro", "/#projects", "/#about", "/#contact"],
    offset: "topCenter",
    activeClass: "active-nav-link"
  });
  const location = useLocation();
  (0, import_react7.useEffect)(() => setIsOpen(false), [location]);
  (0, import_react7.useEffect)(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(motion.header, {
    variants: navVariants,
    initial: "hidden",
    animate: "visible",
    className: "container fixed dark:text-white md:hidden \n    bg-white\ndark:bg-dark-850 \n    dark:text-dark-50 text-dark-600",
    style: { background: "#ededed", zIndex: 9999999 }
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-between gap-x-14 text-lg p-1 "
  }, /* @__PURE__ */ React.createElement(AnimatedLink, {
    to: "/#",
    variants: linkVariants,
    className: ""
  }, /* @__PURE__ */ React.createElement(Logo, {
    height: 36
  })), /* @__PURE__ */ React.createElement(motion.div, {
    variants: linkVariants
  }, /* @__PURE__ */ React.createElement(ThemeToggleButton, null)))));
}

// app/components/navigation/index.ts
init_react();

// app/components/navigation/navigation.tsx
init_react();
var AnimatedLink2 = motion(Link);
AnimatedLink2.defaultProps = { className: "hover:text-primary-brand nav-link" };
var Navigation = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(motion.header, {
  variants: navVariants2,
  initial: "hidden",
  animate: "visible",
  className: "container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between \n    md:flex \n    bg-white\n    bg-dark-50 dark:bg-dark-850 \n    dark:text-dark-50 text-dark-600"
}, /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#",
  variants: linkVariants2,
  className: ""
}, /* @__PURE__ */ React.createElement(Logo, {
  height: 36
})), /* @__PURE__ */ React.createElement("nav", {
  className: "flex items-center justify-center gap-x-14 text-lg "
}, /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#intro",
  variants: linkVariants2
}, "Home"), /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#projects",
  variants: linkVariants2
}, "Calculator"), /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#projects",
  variants: linkVariants2
}, "Projects"), /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#about",
  variants: linkVariants2
}, "About"), /* @__PURE__ */ React.createElement(AnimatedLink2, {
  to: "/#contact",
  variants: linkVariants2
}, "Contact"), /* @__PURE__ */ React.createElement(motion.div, {
  variants: linkVariants2
}, /* @__PURE__ */ React.createElement(ThemeToggleButton, null)))));

// app/components/navigation/navigation.motion.ts
init_react();
var navVariants2 = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1
    }
  }
};
var linkVariants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FJRVTVTW.css";

// app/root.tsx
var links = () => [
  {
    rel: "icon",
    href: "/assets/logo.svg",
    type: "image/svg"
  },
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap"
  }
];
function Document({ children, title }) {
  const { theme: loadedTheme } = useLoaderData();
  const { theme } = useTheme();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: clsx_m_default("scroll-p-32 scroll-smooth", theme === "dark" && theme),
    style: { maxWidth: "100%", overflowX: "hidden" }
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : void 0, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement(NonFlashOfWrongThemeEls, {
    ssrTheme: Boolean(loadedTheme)
  })), /* @__PURE__ */ React.createElement("body", {
    className: "\n        bg-dark-50 dark:bg-dark-850 \n        dark:text-dark-50 text-dark-600 \n        transition-colors duration-300 ease-in-out \n      "
  }, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(MobileNav, null), children, /* @__PURE__ */ React.createElement(Footer, null));
}
function App() {
  const { theme } = useLoaderData();
  return /* @__PURE__ */ React.createElement(import_react9.StrictMode, null, /* @__PURE__ */ React.createElement(ThemeProvider, {
    specifiedTheme: theme
  }, /* @__PURE__ */ React.createElement(AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null))))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mt-40"
  }, caught.status, ": ", caught.statusText), message)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-Z6FPNA4X.js.map
