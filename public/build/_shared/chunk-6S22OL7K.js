import {
  useAnimation
} from "/build/_shared/chunk-V375GQIE.js";
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
  const controls = useAnimation();
  const [direction, setDirection] = (0, import_react.useState)(1);
  (0, import_react.useEffect)(() => {
    controls.start({
      rotate: [null, 360 * direction],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    });
    setTimeout(() => {
      setDirection(-1 * direction);
    }, 3e3);
  }, [direction, controls]);
  return /* @__PURE__ */ React.createElement("img", {
    src: "../../../assets/Alirom_Logo_Variations-05.png",
    width: 200,
    style: { position: "absolute" }
  });
};
var Flyingshit_default = FlyingShit;

export {
  Flyingshit_default
};
//# sourceMappingURL=/build/_shared/chunk-6S22OL7K.js.map
