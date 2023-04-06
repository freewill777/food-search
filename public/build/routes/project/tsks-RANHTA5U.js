import {
  ProjectHeaderMDX
} from "/build/_shared/chunk-KBRKMDO6.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// browser-route-module:routes\project\tsks.mdx?browser
init_react();

// mdx:C:\Users\krs\to-be-continued\oliver\app\routes\project\tsks.mdx
init_react();
var import_react = __toESM(require_react());
var attributes = {
  "meta": {
    "title": "Tsks.app - Oliver Cederborg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  "project": {
    "name": "Tsks.app",
    "area": "Design and Development",
    "image": "https://cdn.dribbble.com/users/1858541/screenshots/15209401/media/5781bdac4f41c65f58ea597cad62c2ce.png",
    "imageAlt": "Tsks task manager app by Oliver Cederborg",
    "color": null
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
var tsks_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
export {
  tsks_default as default,
  meta
};
//# sourceMappingURL=/build/routes/project/tsks-RANHTA5U.js.map
