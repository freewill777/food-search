import {
  ProjectHeaderMDX
} from "/build/_shared/chunk-KBRKMDO6.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// browser-route-module:routes\project\miinto.mdx?browser
init_react();

// mdx:C:\Users\krs\to-be-continued\oliver\app\routes\project\miinto.mdx
init_react();
var import_react = __toESM(require_react());
var attributes = {
  "meta": {
    "title": "Miinto 2.0 - Alirom Solutions",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  "project": {
    "name": "Miinto 2.0",
    "area": "Design and Development",
    "image": "https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png",
    "imageAlt": "Miinto 2.0 by Alirom Solutions"
  },
  "headers": {
    "Cache-Control": "no-cache"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(ProjectHeaderMDX, {
    project: attributes.project
  }));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var miinto_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
export {
  miinto_default as default,
  meta
};
//# sourceMappingURL=/build/routes/project/miinto-BG26DNDD.js.map
