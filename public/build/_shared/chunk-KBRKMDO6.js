import {
  React,
  init_react
} from "/build/_shared/chunk-BNRLY3XL.js";

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

export {
  ProjectHeaderMDX
};
//# sourceMappingURL=/build/_shared/chunk-KBRKMDO6.js.map
