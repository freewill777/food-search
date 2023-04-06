import {
  Ue,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-3S3OJRB3.js";
import {
  useTheme
} from "/build/_shared/chunk-7LFDCB7S.js";
import "/build/_shared/chunk-YWMPCM2Z.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// browser-route-module:routes\FlyingShit.tsx?browser
init_react();

// app/routes/FlyingShit.tsx
init_react();
var import_react = __toESM(require_react());
var spinAnimation = Ue`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
var FlyingShitImage = styled_components_browser_esm_default.img`
  position: absolute;
  width: 20px;
  animation: ${spinAnimation} 2s infinite linear;
  display: inline !important;
`;
var FlyingShit = () => {
  const { theme } = useTheme();
  const isDarkMode = (0, import_react.useMemo)(() => theme === "dark", [theme]);
  return isDarkMode ? /* @__PURE__ */ React.createElement(FlyingShitImage, {
    src: "../../../assets/Alirom_Logo_Variations-06.png"
  }) : /* @__PURE__ */ React.createElement(FlyingShitImage, {
    src: "../../../assets/Alirom_Logo_Variations-05.png"
  });
};
var FlyingShit_default = FlyingShit;
export {
  FlyingShit_default as default
};
//# sourceMappingURL=/build/routes/FlyingShit-AQHZLEUR.js.map
