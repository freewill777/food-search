var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = require("@remix-run/react"), import_config = require("dotenv/config"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_react();
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_clsx = __toESM(require("clsx")), import_framer_motion5 = require("framer-motion"), import_styles = require("@mui/material/styles");

// app/hooks/use-theme.tsx
init_react();
var import_react2 = require("react"), import_remix = __toESM(require_dist()), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), themes = Object.values(Theme), ThemeContext = (0, import_react2.createContext)({
  theme: "light" /* LIGHT */,
  toggleTheme: () => {
  }
});
ThemeContext.displayName = "ThemeContext";
var prefersLightMQ = "(prefers-color-scheme: light)", getPreferredTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */, ThemeProvider = ({
  specifiedTheme,
  children
}) => {
  let [theme, setTheme] = (0, import_react2.useState)(() => {
    if (specifiedTheme && themes.includes(specifiedTheme))
      return specifiedTheme;
    if (typeof window == "object")
      return getPreferredTheme();
  }), toggleTheme = (0, import_react2.useCallback)(() => setTheme(theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */), [theme]), persistTheme = (0, import_remix.useFetcher)(), persistThemeRef = (0, import_react2.useRef)(persistTheme);
  (0, import_react2.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = (0, import_react2.useRef)(!1);
  (0, import_react2.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    !theme || persistThemeRef.current.submit({ theme }, { action: "action/toggle-theme", method: "post" });
  }, [theme]), (0, import_react2.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersLightMQ), handleChange = () => {
      setTheme(mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  let value = (0, import_react2.useMemo)(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value
  }, children);
}, clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
    ? 'light'
    : 'dark';

  const cl = document.documentElement.classList;

  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Kent know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }

  // the <dark-mode> and <light-mode> approach won't work for meta tags,
  // so we have to do it manually.
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Heya, could you let Kent know you're seeing this message? Thanks!",
    );
  }
})();
`, useTheme = () => {
  let { theme, toggleTheme } = (0, import_react2.useContext)(ThemeContext);
  return { theme, toggleTheme };
};
function NonFlashOfWrongThemeEls({ ssrTheme }) {
  let { theme } = useTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    name: "color-scheme",
    content: theme === "light" ? "light" : "dark"
  }), ssrTheme ? void 0 : /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: clientThemeCode }
  }));
}
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}

// app/utils/theme.server.ts
init_react();
var import_remix2 = __toESM(require_dist());
var themeStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "OC_theme",
    secure: !0,
    sameSite: "lax",
    path: "/",
    expires: new Date("2097-07-21"),
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => session.get("theme") || "dark" /* DARK */,
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/components/footer/index.ts
init_react();

// app/components/footer/footer.tsx
init_react();
var import_framer_motion = require("framer-motion");
var Footer = () => /* @__PURE__ */ React.createElement(import_framer_motion.motion.footer, {
  variants: footerVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: !0 },
  className: "container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between"
}, /* @__PURE__ */ React.createElement("section", {
  className: "flex w-1/2 gap-8 md:gap-12 text-xl"
}, /* @__PURE__ */ React.createElement(import_framer_motion.motion.a, {
  href: "#",
  target: "_blank",
  rel: "noreferrer",
  variants: footerItemVariants,
  className: "nav-link text-xl text-dark-500"
}, "Contact"), /* @__PURE__ */ React.createElement(import_framer_motion.motion.a, {
  href: "#",
  target: "_blank",
  rel: "noreferrer",
  variants: footerItemVariants,
  className: "nav-link text-xl text-dark-500"
}, "Get in touch"), /* @__PURE__ */ React.createElement(import_framer_motion.motion.a, {
  href: "#",
  target: "_blank",
  rel: "noreferrer",
  variants: footerItemVariants,
  className: "nav-link text-xl text-dark-500"
}, "Catalog")), /* @__PURE__ */ React.createElement(import_framer_motion.motion.p, {
  variants: footerItemVariants,
  className: "font-light text-dark-300 dark:text-dark-400"
}, "\xA9 Alirom Solutions"));

// app/components/footer/footer.motion.ts
init_react();
var footerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5
    }
  }
}, footerItemVariants = {
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
var import_react5 = require("react"), import_remix3 = __toESM(require_dist()), import_framer_motion2 = require("framer-motion"), import_use_scrollspy = require("use-scrollspy");

// app/hooks/use-click-away.ts
init_react();
var import_react3 = require("react"), defaultEvents = ["mousedown", "touchstart"], useClickAway = (references, onClickAway) => {
  let handleClick = (0, import_react3.useCallback)((event) => {
    (references == null ? void 0 : references.some((ref) => ref.current && ref.current.contains(event.target))) || onClickAway(event);
  }, [references, onClickAway]);
  (0, import_react3.useEffect)(() => {
    for (let event of defaultEvents)
      document.addEventListener(event, handleClick);
    return () => {
      for (let event of defaultEvents)
        document.removeEventListener(event, handleClick);
    };
  }, [handleClick]);
};

// app/components/logo.tsx
init_react();
var import_react4 = require("react"), Logo = (_a) => {
  var _b = _a, { width = 50, height = 50 } = _b, props = __objRest(_b, ["width", "height"]);
  let { theme, toggleTheme } = useTheme(), isDarkMode = (0, import_react4.useMemo)(() => theme === "dark", [theme]), imageSize = 70;
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
}, linkVariants = {
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
}, MotionLink = (0, import_framer_motion2.motion)(import_remix3.Link), AnimatedLink = (0, import_framer_motion2.motion)(import_remix3.Link);
AnimatedLink.defaultProps = { className: "hover:text-primary-brand nav-link" };
function MobileNav() {
  let navRef = (0, import_react5.useRef)(null), navToggleRef = (0, import_react5.useRef)(null), [isOpen, setIsOpen] = (0, import_react5.useState)(!1), toggle = () => setIsOpen((open) => !open);
  useClickAway([navRef, navToggleRef], () => setIsOpen(!1)), (0, import_use_scrollspy.useScrollspy)({
    ids: ["intro", "projects", "about", "contact"],
    hrefs: ["/#intro", "/#projects", "/#about", "/#contact"],
    offset: "topCenter",
    activeClass: "active-nav-link"
  });
  let location = (0, import_remix3.useLocation)();
  return (0, import_react5.useEffect)(() => setIsOpen(!1), [location]), (0, import_react5.useEffect)(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.header, {
    variants: navVariants,
    initial: "hidden",
    animate: "visible",
    className: `container fixed dark:text-white md:hidden 
    bg-white
dark:bg-dark-850 
    dark:text-dark-50 text-dark-600`,
    style: { background: "#ededed", zIndex: 9999999 }
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex items-center justify-between gap-x-14 text-lg",
    style: { padding: "10px" }
  }, /* @__PURE__ */ React.createElement(AnimatedLink, {
    to: "/#",
    variants: linkVariants,
    className: ""
  }, /* @__PURE__ */ React.createElement(Logo, {
    height: 36
  })), /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
    variants: linkVariants
  }, /* @__PURE__ */ React.createElement("button", {
    ref: navToggleRef,
    type: "button",
    "aria-label": isOpen ? "Close menu" : "Open menu",
    onClick: toggle,
    className: "fixed top-8 right-4 z-30 text-dark-100 mix-blend-difference hover:opacity-60 dark:text-white md:hidden"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-8 w-8"
  }, /* @__PURE__ */ React.createElement(import_framer_motion2.AnimatePresence, null, isOpen ? /* @__PURE__ */ React.createElement(import_framer_motion2.motion.path, {
    key: "close",
    initial: { pathLength: 0 },
    animate: { pathLength: 1, pathOffset: 0 },
    exit: { pathOffset: 1 },
    transition: { duration: 1, ease: "circOut" },
    strokeLinecap: "square",
    strokeWidth: 1.5,
    d: "M6 18L18 6M6 6l12 12"
  }) : /* @__PURE__ */ React.createElement(import_framer_motion2.motion.path, {
    key: "open",
    initial: { pathLength: 0 },
    animate: { pathLength: 1, pathOffset: 0 },
    exit: { pathOffset: 1 },
    transition: { duration: 1, ease: "circOut" },
    strokeLinecap: "square",
    strokeWidth: 1.5,
    d: "M4 6h16M4 12h16m-7 6h7"
  }))))))));
}

// app/components/navigation/index.ts
init_react();

// app/components/navigation/navigation.tsx
init_react();
var import_remix4 = __toESM(require_dist()), import_framer_motion4 = require("framer-motion");

// app/components/theme-toggle-button.tsx
init_react();
var import_react6 = require("react"), import_framer_motion3 = require("framer-motion"), import_md = require("react-icons/md");
var IconButton = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement(import_framer_motion3.motion.button, __spreadProps(__spreadValues({}, props), {
    initial: { opacity: 0, rotate: -65, originY: "150%", originX: 0.5 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 65 },
    transition: { duration: 0.4, ease: "backOut" }
  }), children);
};
IconButton.displayName = "IconButton";
var ThemeToggleButton = () => {
  let { theme, toggleTheme } = useTheme(), isDarkMode = (0, import_react6.useMemo)(() => theme === "dark", [theme]);
  return /* @__PURE__ */ React.createElement(import_framer_motion3.AnimatePresence, {
    exitBeforeEnter: !0
  }, isDarkMode ? /* @__PURE__ */ React.createElement(IconButton, {
    key: "light-mode",
    className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
    onClick: toggleTheme
  }, /* @__PURE__ */ React.createElement(import_md.MdOutlineLightMode, {
    title: "Light mode",
    size: 24
  })) : /* @__PURE__ */ React.createElement(IconButton, {
    key: "dark-mode",
    className: "hover:text-primary-brand overflow-hidden text-dark-400 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-200",
    onClick: toggleTheme
  }, /* @__PURE__ */ React.createElement(import_md.MdOutlineDarkMode, {
    title: "Dark mode",
    size: 24
  })));
};

// app/components/navigation/navigation.tsx
var AnimatedLink2 = (0, import_framer_motion4.motion)(import_remix4.Link);
AnimatedLink2.defaultProps = { className: "hover:text-primary-brand nav-link" };
var Navigation = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_framer_motion4.motion.header, {
  variants: navVariants2,
  initial: "hidden",
  animate: "visible",
  className: `container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between 
    md:flex 
    bg-white
    bg-dark-50 dark:bg-dark-850 
    dark:text-dark-50 text-dark-600`
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
}, "Contact"), /* @__PURE__ */ React.createElement(import_framer_motion4.motion.div, {
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
}, linkVariants2 = {
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
], loader = async ({ request }) => ({
  theme: await (await getThemeSession(request)).getTheme()
});
function Document({ children, title }) {
  let { theme: loadedTheme } = (0, import_react7.useLoaderData)(), { theme } = useTheme();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: (0, import_clsx.default)("scroll-p-32 scroll-smooth", theme === "dark" && theme),
    style: { maxWidth: "100%", overflowX: "hidden" }
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : void 0, /* @__PURE__ */ React.createElement(import_react7.Meta, null), /* @__PURE__ */ React.createElement(import_react7.Links, null), /* @__PURE__ */ React.createElement(NonFlashOfWrongThemeEls, {
    ssrTheme: Boolean(loadedTheme)
  })), /* @__PURE__ */ React.createElement("body", {
    className: `
        bg-dark-50 dark:bg-dark-850 
        dark:text-dark-50 text-dark-600 
        transition-colors duration-300 ease-in-out 
      `
  }, children, /* @__PURE__ */ React.createElement(import_react7.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react7.Scripts, null), /* @__PURE__ */ React.createElement(import_react7.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(MobileNav, null), children, /* @__PURE__ */ React.createElement(Footer, null));
}
function App() {
  let { theme } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_react8.StrictMode, null, /* @__PURE__ */ React.createElement(ThemeProvider, {
    specifiedTheme: theme
  }, /* @__PURE__ */ React.createElement(import_framer_motion5.AnimatePresence, {
    exitBeforeEnter: !0
  }, /* @__PURE__ */ React.createElement(import_styles.StyledEngineProvider, {
    injectFirst: !0
  }, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react7.Outlet, null)))))));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_react7.useCatch)(), message;
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

// mdx:C:\Users\krs\experiments\food-oliver\app\routes\project\100-days-of-ui.mdx
var days_of_ui_exports = {};
__export(days_of_ui_exports, {
  attributes: () => attributes,
  default: () => days_of_ui_default,
  filename: () => filename,
  headers: () => headers,
  meta: () => meta
});
init_react();
var import_react9 = __toESM(require("react"));

// app/components/project-header-mdx.tsx
init_react();
var ProjectHeaderMDX = ({ project }) => /* @__PURE__ */ React.createElement("header", {
  className: "flex-col-reverse flex lg:flex-row container mt-40 lg:items-center mb-20"
}, /* @__PURE__ */ React.createElement("section", {
  className: "w-full lg:w-1/2 z-10 break-words"
}, /* @__PURE__ */ React.createElement("div", {
  className: "mb-6 text-xl font-light leading-relaxed text-dark-400 dark:text-dark-200"
}, "Coming soon..."), /* @__PURE__ */ React.createElement("h2", {
  className: "text-4xl font-medium !leading-tight md:text-5xl lg:text-6xl"
}, project.name), /* @__PURE__ */ React.createElement("h4", {
  className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
}, project.area)), /* @__PURE__ */ React.createElement("figure", {
  className: "h-full w-full mb-8 lg:mt-0 lg:w-1/2 aspect-[4/3]"
}, /* @__PURE__ */ React.createElement("img", {
  src: project.image,
  alt: project.imageAlt,
  className: "w-full h-full object-cover"
})));

// mdx:C:\Users\krs\experiments\food-oliver\app\routes\project\100-days-of-ui.mdx
var attributes = {
  meta: {
    title: "100 days of UI - Alirom Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "100 days of UI",
    area: "Design",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/15234356/media/5514ddf67d4ba1ab8e763ceb88254253.png",
    imageAlt: "100 days of UI by Alirom Solutions",
    link: "/project/100-days-of-ui",
    color: null
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(ProjectHeaderMDX, {
    project: attributes.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var days_of_ui_default = MDXContent, filename = "100-days-of-ui.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta;

// app/routes/action/toggle-theme.tsx
var toggle_theme_exports = {};
__export(toggle_theme_exports, {
  action: () => action,
  default: () => MarkRead,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_dist());
var action = async ({ request }) => {
  let themeSession = await getThemeSession(request), requestText = await request.text(), theme = new URLSearchParams(requestText).get("theme");
  return isTheme(theme) ? (themeSession.setTheme(theme), (0, import_remix5.json)({ success: !0 }, {
    headers: { "Set-Cookie": await themeSession.commit() }
  })) : (0, import_remix5.json)({
    success: !1,
    message: `theme value of ${theme} is not a valid theme.`
  });
}, loader2 = () => (0, import_remix5.redirect)("/", { status: 404 });
function MarkRead() {
  return /* @__PURE__ */ React.createElement("div", null, "Oops... You should not see this.");
}

// mdx:C:\Users\krs\experiments\food-oliver\app\routes\project\miinto.mdx
var miinto_exports = {};
__export(miinto_exports, {
  attributes: () => attributes2,
  default: () => miinto_default,
  filename: () => filename2,
  headers: () => headers2,
  meta: () => meta2
});
init_react();
var import_react10 = __toESM(require("react"));
var attributes2 = {
  meta: {
    title: "Miinto 2.0 - Alirom Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "Miinto 2.0",
    area: "Design and Development",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png",
    imageAlt: "Miinto 2.0 by Alirom Solutions"
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent2(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(ProjectHeaderMDX, {
    project: attributes2.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var miinto_default = MDXContent2, filename2 = "miinto.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta2 = typeof attributes2 < "u" && attributes2.meta;

// app/routes/side-projects.tsx
var side_projects_exports = {};
__export(side_projects_exports, {
  default: () => Sideprojects,
  headers: () => headers3,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix6 = __toESM(require_dist()), import_framer_motion8 = require("framer-motion");

// app/components/animated-text/index.ts
init_react();

// app/components/animated-text/animated-text.tsx
init_react();
var import_react11 = require("react"), import_framer_motion6 = require("framer-motion");
var AnimatedText = (_a) => {
  var _b = _a, {
    as: Tag = "p",
    text,
    variants = defaultLetterVariants
  } = _b, rest = __objRest(_b, [
    "as",
    "text",
    "variants"
  ]);
  let words = text.split(" ").map((word) => `${word}\xA0`), renderWords = (0, import_react11.useMemo)(() => words.map((word, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "inline-block overflow-hidden"
  }, /* @__PURE__ */ React.createElement(import_framer_motion6.motion.span, {
    variants,
    className: "inline-block"
  }, word))), [variants, words]);
  return /* @__PURE__ */ React.createElement(Tag, __spreadValues({}, rest), /* @__PURE__ */ React.createElement(import_framer_motion6.motion.span, {
    variants
  }, renderWords));
}, AnimatedLetters = (_a) => {
  var _b = _a, {
    as: Tag = "div",
    text,
    textVariants = defaultTextVariants,
    letterVariants = defaultLetterVariants
  } = _b, rest = __objRest(_b, [
    "as",
    "text",
    "textVariants",
    "letterVariants"
  ]);
  let words = text.split(" ").map((word) => `${word}\xA0`);
  return /* @__PURE__ */ React.createElement(Tag, __spreadValues({}, rest), /* @__PURE__ */ React.createElement(import_framer_motion6.motion.span, {
    variants: textVariants
  }, words.map((_, index) => /* @__PURE__ */ React.createElement("span", {
    key: index,
    className: "inline-block whitespace-nowrap",
    style: { marginTop: "0.35em" }
  }, [...words[index]].flat().map((letter, letterIndex) => /* @__PURE__ */ React.createElement("span", {
    key: letterIndex,
    className: "inline-block overflow-hidden"
  }, /* @__PURE__ */ React.createElement(import_framer_motion6.motion.span, {
    variants: letterVariants,
    className: "inline-block"
  }, letter)))))));
};

// app/components/animated-text/animated-text.motion.ts
init_react();
var defaultTextVariants = {
  visible: {}
}, defaultLetterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "circOut", duration: 0.5 }
  }
};

// app/components/side-project-item.tsx
init_react();
var import_react12 = require("react"), import_clsx2 = __toESM(require("clsx")), import_framer_motion7 = require("framer-motion"), import_useMedia = __toESM(require("react-use/lib/useMedia"));
var SideProjectItem = (0, import_react12.memo)((_a) => {
  var _b = _a, { project } = _b, props = __objRest(_b, ["project"]);
  let { id, name, area, url, stars, image, imageAlt, color = "#ededed" } = project, isPhone = (0, import_useMedia.default)("(max-width: 768px)"), phoneMotionProps = (0, import_react12.useMemo)(() => __spreadValues({
    variants: { visible: { transition: { staggerChildren: 0.35 } } },
    viewport: { once: !0 }
  }, isPhone ? { initial: "hidden", whileInView: "visible", exit: "hidden" } : {}), []);
  return /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: (0, import_clsx2.default)("col-span-12 flex flex-col md:col-span-6 xl:col-span-3", props.className)
  }, /* @__PURE__ */ React.createElement(import_framer_motion7.motion.article, __spreadValues({
    key: id
  }, phoneMotionProps), /* @__PURE__ */ React.createElement(import_framer_motion7.motion.figure, {
    variants: {
      hidden: { scaleX: 0, originX: 0 },
      visible: {
        scaleX: 1,
        originX: [0, 0, 0, 0, 0, 0, 0.5],
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: [0.9, 0.1, 0.3, 0.96],
          when: "beforeChildren",
          delayChildren: 0.15
        }
      }
    },
    whileHover: { scale: 1.05, transition: { duration: 0.5, ease: "circOut" } },
    whileTap: { scale: 0.95 },
    style: { backgroundColor: color },
    className: "aspect-[4/3] w-full"
  }, /* @__PURE__ */ React.createElement(import_framer_motion7.motion.img, {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
      }
    },
    src: image,
    alt: imageAlt,
    className: "object-cover w-full h-full"
  })), /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between items-center mt-6"
  }, /* @__PURE__ */ React.createElement(AnimatedText, {
    text: area,
    className: "text-sm font-light text-dark-300 dark:text-dark-400"
  }), !!stars && /* @__PURE__ */ React.createElement(AnimatedText, {
    as: "span",
    text: `\u2605 ${stars}`,
    className: "text-sm font-light text-dark-300 dark:text-dark-400"
  })), /* @__PURE__ */ React.createElement(AnimatedText, {
    as: "h3",
    text: name || "Untitled",
    className: "mt-3 text-3xl text-dark-400 dark:text-dark-200"
  })));
});
SideProjectItem.displayName = "ProjectItem";

// app/routes/side-projects.tsx
var meta3 = () => ({
  title: "Side Projects - Alirom Solutions",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
}), headers3 = () => ({
  "Cache-Control": "max-age=600, s-maxage=3600"
}), loader3 = async () => {
  let sideProjects = [
    {
      id: 0,
      name: "use-scrollspy",
      area: "React Hook",
      image: "https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png",
      imageAlt: "scrollspy hook by Alirom Solutions",
      repo: "olivercederborg/use-scrollspy",
      url: "https://github.com/olivercederborg/use-scrollspy",
      color: "#4D4E52"
    },
    {
      id: 1,
      name: "Poimandres.nvim",
      area: "Neovim Plugin",
      image: "https://user-images.githubusercontent.com/47901349/180445055-92480553-0652-4155-8d41-835fec27245b.png",
      imageAlt: "Poimandres Neovim color scheme by Alirom Solutions",
      repo: "olivercederborg/poimandres.nvim",
      url: "https://github.com/olivercederborg/poimandres.nvim",
      color: "#23393D"
    },
    {
      id: 2,
      name: "Poimandres-wezterm",
      area: "WezTerm Color Scheme",
      image: "https://user-images.githubusercontent.com/47901349/179416018-ba8e24a6-3590-4eff-93cb-806d41378a0d.png",
      imageAlt: "Poimandres WezTerm color scheme by Alirom Solutions",
      repo: "olivercederborg/poimandres-wezterm",
      url: "https://github.com/olivercederborg/poimandres-wezterm",
      color: "#23393D"
    },
    {
      id: 3,
      name: "Modern Monokai",
      area: "VSCode Color Scheme",
      image: "https://github.com/olivercederborg/modern-monokai/raw/master/assets/screen1.png",
      imageAlt: "Modern Monokai color scheme by Alirom Solutions",
      repo: "olivercederborg/modern-monokai",
      url: "https://marketplace.visualstudio.com/items?itemName=OliverCederborg.modern-monokai",
      color: "#292E36"
    }
  ], projects = [];
  for await (let project of sideProjects)
    if (project.repo) {
      let data = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }), { stargazers_count: stars } = await data.json();
      projects.push(__spreadProps(__spreadValues({}, project), {
        stars
      }));
    } else
      projects.push(project);
  return {
    projects
  };
};
function Sideprojects() {
  let { projects } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container py-40"
  }, /* @__PURE__ */ React.createElement(import_framer_motion8.motion.article, {
    variants: {
      hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
      visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: !0 }
  }, /* @__PURE__ */ React.createElement(import_framer_motion8.AnimatePresence, null, /* @__PURE__ */ React.createElement(AnimatedLetters, {
    key: "title",
    as: "h1",
    text: "Side Projects",
    className: "text-4xl font-medium lg:text-5xl",
    textVariants: {
      hidden: { transition: { staggerChildren: 0.015 } },
      visible: { transition: { staggerChildren: 0.015 } }
    },
    letterVariants: {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
      }
    }
  }), /* @__PURE__ */ React.createElement(AnimatedText, {
    key: "text",
    as: "p",
    className: "mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5",
    text: "This is where I keep my side projects. You will find stuff like web and mobile apps, automation projects and Neovim plugins."
  }))), /* @__PURE__ */ React.createElement(import_framer_motion8.motion.section, {
    variants: {
      visible: { transition: { staggerChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: !0 },
    className: "relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16"
  }, projects.map((project) => /* @__PURE__ */ React.createElement(SideProjectItem, {
    key: project.id,
    project
  }))));
}

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader4
});
init_react();
var loader4 = () => {
  let content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://olivercederborg.com/</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/side-projects</loc>
        <lastmod>2022-07-24T01:46:50+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/miinto</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/tsks</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/100-days-of-ui</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
`;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "utf8"
    }
  });
};

// mdx:C:\Users\krs\experiments\food-oliver\app\routes\project\tsks.mdx
var tsks_exports = {};
__export(tsks_exports, {
  attributes: () => attributes3,
  default: () => tsks_default,
  filename: () => filename3,
  headers: () => headers4,
  meta: () => meta4
});
init_react();
var import_react13 = __toESM(require("react"));
var attributes3 = {
  meta: {
    title: "Tsks.app - Alirom Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  project: {
    name: "Tsks.app",
    area: "Design and Development",
    image: "https://cdn.dribbble.com/users/1858541/screenshots/15209401/media/5781bdac4f41c65f58ea597cad62c2ce.png",
    imageAlt: "Tsks task manager app by Alirom Solutions",
    color: null
  },
  headers: {
    "Cache-Control": "no-cache"
  }
};
function MDXContent3(props = {}) {
  let _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(ProjectHeaderMDX, {
    project: attributes3.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var tsks_default = MDXContent3, filename3 = "tsks.mdx", headers4 = typeof attributes3 < "u" && attributes3.headers, meta4 = typeof attributes3 < "u" && attributes3.meta;

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader5
});
init_react();
var loader5 = () => {
  let robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/

    User-agent: *
    Allow: /
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader6,
  meta: () => meta5,
  validator: () => validator
});
init_react();
var import_react16 = require("react"), import_remix8 = __toESM(require_dist()), import_with_zod = require("@remix-validated-form/with-zod"), import_remix_validated_form2 = require("remix-validated-form"), import_zod = require("zod");

// app/utils/get-error-message.ts
init_react();
var getErrorMessage = (error) => error instanceof Error ? error.message : String(error);

// app/utils/send-email.ts
init_react();
var import_mail = __toESM(require("@sendgrid/mail")), sendEmail = async (data) => {
  import_mail.default.setApiKey(process.env.SENDGRID_API_KEY);
  let { name, email, company, message } = data, emailToFrom = {
    to: "hey@olivercederborg.com",
    from: "hey@olivercederborg.com"
  }, content = {
    to: emailToFrom.to,
    from: emailToFrom.from,
    replyTo: email,
    subject: `New Message From: ${name}`,
    text: message,
    html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          Message: ${message}
          </p>`
  };
  try {
    if (company)
      throw new Error("Bot detected, company name not allowed.");
    await import_mail.default.send(content);
  } catch (error) {
    throw new Error(error);
  }
};

// app/templates/hero/index.ts
init_react();

// app/templates/hero/hero.tsx
init_react();
var React5 = __toESM(require("react")), import_framer_motion11 = require("framer-motion"), import_Autocomplete = __toESM(require("@mui/material/Autocomplete")), import_CircularProgress = __toESM(require("@mui/material/CircularProgress")), import_Snackbar = __toESM(require("@mui/material/Snackbar"));

// app/components/link-button.tsx
init_react();
var import_react14 = require("react"), import_remix7 = __toESM(require_dist()), import_clsx3 = __toESM(require("clsx")), import_framer_motion9 = require("framer-motion"), import_vsc = require("react-icons/vsc"), LinkButton = (0, import_react14.forwardRef)((_a, ref) => {
  var _b = _a, { children = "Button", icon: Icon } = _b, rest = __objRest(_b, ["children", "icon"]);
  return /* @__PURE__ */ React.createElement(import_remix7.Link, __spreadProps(__spreadValues({
    ref
  }, rest), {
    className: (0, import_clsx3.default)("group flex gap-3 text-3xl font-light text-dark-400 transition duration-300 ease-in-out hover:text-dark-500 dark:text-dark-200", rest.className)
  }), children, Icon ?? /* @__PURE__ */ React.createElement(import_vsc.VscArrowRight, {
    size: 36,
    className: "rotate-45 text-dark-200 transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-dark-300 dark:text-dark-400"
  }));
}), MotionLinkButton = (0, import_react14.forwardRef)((_a, ref) => {
  var _b = _a, { children, motionProps } = _b, rest = __objRest(_b, ["children", "motionProps"]);
  return /* @__PURE__ */ React.createElement(import_framer_motion9.motion.div, __spreadProps(__spreadValues({}, motionProps), {
    ref,
    className: rest.className,
    style: rest.style
  }), /* @__PURE__ */ React.createElement(LinkButton, __spreadValues({}, rest), children));
});

// app/components/input.tsx
init_react();
var import_react15 = require("react"), import_clsx4 = __toESM(require("clsx")), import_framer_motion10 = require("framer-motion"), import_vsc2 = require("react-icons/vsc"), import_remix_validated_form = require("remix-validated-form"), Input = (0, import_react15.forwardRef)(({ name, label, placeholder, required = !1, onChange }, ref) => {
  let { error, getInputProps, touched } = (0, import_remix_validated_form.useField)(name);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_framer_motion10.motion.label, {
    htmlFor: name,
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
    },
    className: (0, import_clsx4.default)("relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200", required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']")
  }, label), /* @__PURE__ */ React.createElement(import_framer_motion10.motion.input, __spreadProps(__spreadValues({
    ref
  }, getInputProps({ id: name, placeholder })), {
    className: (0, import_clsx4.default)("focus-within:border-primary-brand mt-2 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500", error && "border-red-500 dark:border-red-400", touched && !error && "border-green-500 dark:border-green-400"),
    onChange: (a) => {
      onChange(a.currentTarget.value), console.log(a.currentTarget.value);
    }
  })), error && /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 block font-light text-red-500 dark:text-red-400"
  }, error));
});
Input.displayName = "Input";
var Textarea = ({ name, label, placeholder, required }) => {
  let { error, getInputProps, touched } = (0, import_remix_validated_form.useField)(name);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_framer_motion10.motion.label, {
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
    },
    htmlFor: name,
    className: (0, import_clsx4.default)("relative inline-flex flex-col text-xl font-light text-dark-400 dark:text-dark-200 ", required && "after:absolute after:-right-4 after:text-dark-300 after:content-['*']")
  }, label), /* @__PURE__ */ React.createElement(import_framer_motion10.motion.textarea, __spreadProps(__spreadValues({
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
    }
  }, getInputProps({ id: name, placeholder })), {
    className: (0, import_clsx4.default)("focus-within:border-primary-brand mt-2 h-40 w-full appearance-none rounded-none border-b-[1px] border-dark-200 bg-transparent py-4 px-3 text-2xl font-light text-dark-400 outline-none placeholder:text-dark-200 dark:border-dark-600 dark:text-dark-200 dark:placeholder:text-dark-500", error && "border-red-500 dark:border-red-400", touched && !error && "border-green-500 dark:border-green-400")
  })), error && /* @__PURE__ */ React.createElement("span", {
    className: "mt-4 block font-light text-red-500 dark:text-red-400"
  }, error));
};
Textarea.displayName = "Textarea";

// app/templates/hero/hero.tsx
var Hero = () => {
  let [options, setOptions] = React5.useState([]), [open, setOpen] = React5.useState(!1), [loading, setLoading] = React5.useState(!1), [openSnackbar, setOpenSnackbar] = React5.useState(!1), [option, setOption] = React5.useState(""), [prompt, setPrompt] = React5.useState("");
  return /* @__PURE__ */ React5.createElement("header", {
    id: "intro",
    style: { height: "100vh" },
    className: `pt-40 
      shadow-[inset_0_-40px_15px_-10px_#ededed] 
      transition duration-300 ease-in-out 
      dark:shadow-[inset_0_-40px_15px_-10px_#171717] 
      md:bg-auto lg:pt-20 lg:pb-36 xl:py-36
      overflow-hidden`
  }, /* @__PURE__ */ React5.createElement(import_Snackbar.default, {
    open: openSnackbar,
    autoHideDuration: 2500,
    message: `${option} added to list!`,
    onClose: () => setOpenSnackbar(!1)
  }), /* @__PURE__ */ React5.createElement(import_framer_motion11.motion.section, {
    variants: {
      hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
      visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: !0 },
    className: "container relative"
  }, /* @__PURE__ */ React5.createElement(import_framer_motion11.AnimatePresence, null, /* @__PURE__ */ React5.createElement("article", {
    className: "lg:max-w-[60%]"
  }, /* @__PURE__ */ React5.createElement(AnimatedLetters, {
    as: "h1",
    text: "ALIROM Solutions ",
    className: "text-5xl font-medium md:text-6xl lg:text-7xl",
    textVariants: {
      hidden: { transition: { staggerChildren: 0.015 } },
      visible: { transition: { staggerChildren: 0.015 } }
    },
    letterVariants: {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
      }
    }
  }), /* @__PURE__ */ React5.createElement(AnimatedText, {
    as: "h1",
    className: "text-3xl font-light leading-relaxed text-dark-400 dark:text-dark-200",
    text: "Sweet answers for your food industry development"
  }))), /* @__PURE__ */ React5.createElement("div", {
    style: { paddingBottom: "1em" }
  }, /* @__PURE__ */ React5.createElement("div", {
    style: { justifyContent: "space-between", alignItems: "flex-end", position: "relative" },
    className: "block md:flex"
  }, /* @__PURE__ */ React5.createElement("div", {
    style: { width: "100%", marginRight: "50px", position: "relative", display: "flex" }
  }, /* @__PURE__ */ React5.createElement(import_Autocomplete.default, {
    open,
    onChange: (_, b) => {
      setOpen(!open), setOpenSnackbar(!0), setOption(b);
    },
    renderOption: (props, option2) => /* @__PURE__ */ React5.createElement("li", __spreadProps(__spreadValues({}, props), {
      style: { fontFamily: "Epilogue" }
    }), option2.charAt(0).toUpperCase() + option2.slice(1).toLowerCase()),
    getOptionLabel: (option2) => option2.name || "",
    fullWidth: !0,
    id: "custom-input-demo",
    options,
    renderInput: (params) => /* @__PURE__ */ React5.createElement("div", {
      ref: params.InputProps.ref,
      style: { width: "100%", marginRight: "50px" }
    }, /* @__PURE__ */ React5.createElement(Input, __spreadProps(__spreadValues({
      type: "text"
    }, params.inputProps), {
      name: "email",
      label: "Find Nutritional Value of a Product: ",
      placeholder: "Search among 500,000 foods. Ex: apple, cheese, beef ",
      onChange: (e) => setPrompt(e)
    }))),
    style: { width: "100%" }
  })), /* @__PURE__ */ React5.createElement(MotionLinkButton, {
    to: "#",
    motionProps: {
      variants: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { ease: "circOut", duration: 0.5 } }
      }
    },
    className: "col-span-full md:col-start-7 xl:col-start-9 sm:py-2",
    style: { float: "right", paddingBlockStart: "0.4em", position: "relative" },
    onClick: async () => {
      setLoading(!0), await updatePrompt(() => setLoading(!0), () => setLoading(!1), setOptions, options, prompt, () => setOpen(!open)), setLoading(!1);
    }
  }, loading ? /* @__PURE__ */ React5.createElement("div", {
    style: { width: "100px", paddingInlineStart: "20px", paddingTop: "1px" }
  }, /* @__PURE__ */ React5.createElement(import_CircularProgress.default, {
    size: 22,
    style: { visibility: loading ? "visible" : "hidden", color: "#805b50" }
  })) : /* @__PURE__ */ React5.createElement("span", null, "Search"))))));
};
async function updatePrompt(setTrue, setFalse, setSearchResults, searchResults, prompt, openModal) {
  let url = `http://127.0.0.1:13004/search/food?name=${prompt}`;
  setTrue();
  let names = (await (await fetch(url)).json()).map((element) => element == null ? void 0 : element.description);
  openModal(), setSearchResults([...new Set(names)]), setFalse();
}

// app/routes/index.tsx
var validator = (0, import_with_zod.withZod)(import_zod.z.object({
  name: import_zod.z.string().nonempty("Please enter your name"),
  email: import_zod.z.string().nonempty("I need to know where to reach you!").email("Uh oh, that doesn't look like an email address..."),
  company: import_zod.z.string(),
  message: import_zod.z.string().nonempty("You need to send me a message!")
})), loader6 = () => ({
  defaultValues: {
    name: "",
    email: "",
    company: "",
    message: ""
  }
}), action2 = async ({ request }) => {
  let fieldValues = validator.validate(await request.formData());
  if (fieldValues.error)
    return (0, import_remix_validated_form2.validationError)(fieldValues.error);
  let fields = __objRest(fieldValues.data, []);
  try {
    return await sendEmail(fieldValues.data), (0, import_remix8.json)({
      fields,
      status: "success",
      errors: {}
    });
  } catch (error) {
    return (0, import_remix8.json)({
      fields,
      status: "error",
      errors: {
        sendError: getErrorMessage(error) ?? `Sorry ${fields.name}, something went wrong. Please try again. \u{1F622}`
      }
    });
  }
}, meta5 = () => ({
  title: "Alirom Solutions - Frontend developer",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
});
function Index() {
  let { defaultValues } = (0, import_remix8.useLoaderData)(), actionData = (0, import_remix8.useActionData)(), transition = (0, import_remix8.useTransition)(), formRef = (0, import_react16.useRef)(null), nameInputRef = (0, import_react16.useRef)(null), emailSent = transition.state === "loading" && transition.type === "actionReload";
  return (0, import_react16.useEffect)(() => {
    var _a, _b;
    emailSent && ((_a = formRef.current) == null || _a.reset(), (_b = nameInputRef.current) == null || _b.focus());
  }, [emailSent]), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "c5ecd5c2", entry: { module: "/build/entry.client-YPAW7UIX.js", imports: ["/build/_shared/chunk-VIU3M2OR.js", "/build/_shared/chunk-CVRRDQYH.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GHC6XPVD.js", imports: ["/build/_shared/chunk-UUAPXT62.js", "/build/_shared/chunk-S4EXBNYH.js", "/build/_shared/chunk-Q7RA7ZAZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-H7SPRVSZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-GYCNYJLA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/toggle-theme": { id: "routes/action/toggle-theme", parentId: "root", path: "action/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/toggle-theme-2RQG6VY5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-P6FSN2EN.js", imports: ["/build/_shared/chunk-WRDE3YLM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/100-days-of-ui": { id: "routes/project/100-days-of-ui", parentId: "root", path: "project/100-days-of-ui", index: void 0, caseSensitive: void 0, module: "/build/routes/project/100-days-of-ui-C6OEFMN6.js", imports: ["/build/_shared/chunk-KBRKMDO6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/miinto": { id: "routes/project/miinto", parentId: "root", path: "project/miinto", index: void 0, caseSensitive: void 0, module: "/build/routes/project/miinto-UR6RCSS4.js", imports: ["/build/_shared/chunk-KBRKMDO6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/project/tsks": { id: "routes/project/tsks", parentId: "root", path: "project/tsks", index: void 0, caseSensitive: void 0, module: "/build/routes/project/tsks-BBGYCN3C.js", imports: ["/build/_shared/chunk-KBRKMDO6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/side-projects": { id: "routes/side-projects", parentId: "root", path: "side-projects", index: void 0, caseSensitive: void 0, module: "/build/routes/side-projects-RRCLTLPF.js", imports: ["/build/_shared/chunk-WRDE3YLM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-C5ECD5C2.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/project/100-days-of-ui": {
    id: "routes/project/100-days-of-ui",
    parentId: "root",
    path: "project/100-days-of-ui",
    index: void 0,
    caseSensitive: void 0,
    module: days_of_ui_exports
  },
  "routes/action/toggle-theme": {
    id: "routes/action/toggle-theme",
    parentId: "root",
    path: "action/toggle-theme",
    index: void 0,
    caseSensitive: void 0,
    module: toggle_theme_exports
  },
  "routes/project/miinto": {
    id: "routes/project/miinto",
    parentId: "root",
    path: "project/miinto",
    index: void 0,
    caseSensitive: void 0,
    module: miinto_exports
  },
  "routes/side-projects": {
    id: "routes/side-projects",
    parentId: "root",
    path: "side-projects",
    index: void 0,
    caseSensitive: void 0,
    module: side_projects_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/project/tsks": {
    id: "routes/project/tsks",
    parentId: "root",
    path: "project/tsks",
    index: void 0,
    caseSensitive: void 0,
    module: tsks_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.6.7
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.6.7
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.6.7
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
