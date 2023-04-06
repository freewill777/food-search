import {
  useTheme
} from "/build/_shared/chunk-7LFDCB7S.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// app/routes/Flyingshit.tsx
init_react();
var import_react = __toESM(require_react());
var FlyingShit = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = (0, import_react.useMemo)(() => theme === "dark", [theme]);
  return isDarkMode ? /* @__PURE__ */ React.createElement("img", {
    src: "../../../assets/Alirom_Logo_Variations-06.png",
    width: 200,
    style: { position: "absolute" }
  }) : /* @__PURE__ */ React.createElement("img", {
    src: "../../../assets/Alirom_Logo_Variations-05.png",
    width: 200,
    style: { position: "absolute" }
  });
};
var Flyingshit_default = FlyingShit;

export {
  Flyingshit_default
};
//# sourceMappingURL=/build/_shared/chunk-6O7OVEUB.js.map
