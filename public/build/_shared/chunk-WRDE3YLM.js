import {
  motion
} from "/build/_shared/chunk-Q7RA7ZAZ.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

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
    ...rest
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
  AnimatedLetters
};
//# sourceMappingURL=/build/_shared/chunk-WRDE3YLM.js.map
