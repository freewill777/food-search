import {
  ProjectHeaderMDX
} from "/build/_shared/chunk-KBRKMDO6.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-BNRLY3XL.js";

// browser-route-module:routes\project\100-days-of-ui.mdx?browser
init_react();

// mdx:C:\Users\krs\to-be-continued\oliver\app\routes\project\100-days-of-ui.mdx
init_react();
var import_react = __toESM(require_react());
var attributes = {
  "meta": {
    "title": "100 days of UI - Oliver Cederborg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  "project": {
    "name": "100 days of UI",
    "area": "Design",
    "image": "https://cdn.dribbble.com/users/1858541/screenshots/15234356/media/5514ddf67d4ba1ab8e763ceb88254253.png",
    "imageAlt": "100 days of UI by Oliver Cederborg",
    "link": "/project/100-days-of-ui",
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
var days_of_ui_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
export {
  days_of_ui_default as default,
  meta
};
//# sourceMappingURL=/build/routes/project/100-days-of-ui-NZZNXVDE.js.map
