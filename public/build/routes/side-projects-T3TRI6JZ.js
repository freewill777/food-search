import {
  AnimatedLetters,
  AnimatedText
} from "/build/_shared/chunk-WRDE3YLM.js";
import {
  AnimatePresence,
  clsx_m_default,
  motion
} from "/build/_shared/chunk-Q7RA7ZAZ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YWMPCM2Z.js";
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
    var useMedia2 = function(query, defaultState) {
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
    exports.default = useMedia2;
  }
});

// browser-route-module:routes\side-projects.tsx?browser
init_react();

// app/routes/side-projects.tsx
init_react();

// app/components/side-project-item.tsx
init_react();
var import_react = __toESM(require_react());
var import_useMedia = __toESM(require_useMedia());
var SideProjectItem = (0, import_react.memo)(({ project, ...props }) => {
  const { id, name, area, url, stars, image, imageAlt, color = "#ededed" } = project;
  const isPhone = (0, import_useMedia.default)("(max-width: 768px)");
  const phoneMotionProps = (0, import_react.useMemo)(() => ({
    variants: { visible: { transition: { staggerChildren: 0.35 } } },
    viewport: { once: true },
    ...isPhone ? { initial: "hidden", whileInView: "visible", exit: "hidden" } : {}
  }), []);
  return /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: clsx_m_default("col-span-12 flex flex-col md:col-span-6 xl:col-span-3", props.className)
  }, /* @__PURE__ */ React.createElement(motion.article, {
    key: id,
    ...phoneMotionProps
  }, /* @__PURE__ */ React.createElement(motion.figure, {
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
  }, /* @__PURE__ */ React.createElement(motion.img, {
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
var meta = () => ({
  title: "Side Projects - Oliver Cederborg",
  description: "I'm a 25 year old self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies."
});
function Sideprojects() {
  const { projects } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "container py-40"
  }, /* @__PURE__ */ React.createElement(motion.article, {
    variants: {
      hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
      visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: true }
  }, /* @__PURE__ */ React.createElement(AnimatePresence, null, /* @__PURE__ */ React.createElement(AnimatedLetters, {
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
  }))), /* @__PURE__ */ React.createElement(motion.section, {
    variants: {
      visible: { transition: { staggerChildren: 0.25 } }
    },
    initial: "hidden",
    whileInView: "visible",
    exit: "hidden",
    viewport: { once: true },
    className: "relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16"
  }, projects.map((project) => /* @__PURE__ */ React.createElement(SideProjectItem, {
    key: project.id,
    project
  }))));
}
export {
  Sideprojects as default,
  meta
};
//# sourceMappingURL=/build/routes/side-projects-T3TRI6JZ.js.map
