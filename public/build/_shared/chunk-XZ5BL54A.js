import {
  useFetcher
} from "/build/_shared/chunk-YWMPCM2Z.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// empty-module:~/utils/theme.server
var require_theme = __commonJS({
  "empty-module:~/utils/theme.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// app/hooks/use-theme.tsx
init_react();
var import_react = __toESM(require_react());
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["DARK"] = "dark";
  Theme2["LIGHT"] = "light";
  return Theme2;
})(Theme || {});
var themes = Object.values(Theme);
var ThemeContext = (0, import_react.createContext)({
  theme: "light" /* LIGHT */,
  toggleTheme: () => {
  }
});
ThemeContext.displayName = "ThemeContext";
var prefersLightMQ = "(prefers-color-scheme: light)";
var getPreferredTheme = () => window.matchMedia(prefersLightMQ).matches ? "light" /* LIGHT */ : "dark" /* DARK */;
var ThemeProvider = ({
  specifiedTheme,
  children
}) => {
  const [theme, setTheme] = (0, import_react.useState)(() => {
    if (specifiedTheme && themes.includes(specifiedTheme))
      return specifiedTheme;
    if (typeof window !== "object")
      return void 0;
    return getPreferredTheme();
  });
  const toggleTheme = (0, import_react.useCallback)(() => theme === "dark" /* DARK */ ? setTheme("light" /* LIGHT */) : setTheme("dark" /* DARK */), [theme]);
  const persistTheme = useFetcher();
  const persistThemeRef = (0, import_react.useRef)(persistTheme);
  (0, import_react.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme)
      return;
    persistThemeRef.current.submit({ theme }, { action: "action/toggle-theme", method: "post" });
  }, [theme]);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "light" /* LIGHT */ : "dark" /* DARK */);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const value = (0, import_react.useMemo)(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value
  }, children);
};
var clientThemeCode = `
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
`;
var useTheme = () => {
  const { theme, toggleTheme } = (0, import_react.useContext)(ThemeContext);
  return { theme, toggleTheme };
};
function NonFlashOfWrongThemeEls({ ssrTheme }) {
  const { theme } = useTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    name: "color-scheme",
    content: theme === "light" ? "light" : "dark"
  }), ssrTheme ? void 0 : /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: clientThemeCode }
  }));
}

export {
  ThemeProvider,
  useTheme,
  NonFlashOfWrongThemeEls,
  require_theme
};
//# sourceMappingURL=/build/_shared/chunk-XZ5BL54A.js.map
