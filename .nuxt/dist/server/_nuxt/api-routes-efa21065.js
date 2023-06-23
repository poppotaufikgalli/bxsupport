import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
import "requrl";
const _sfc_main$1 = {
  props: {
    route: String,
    method: String,
    link: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<tr${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 border-gray-700" }, _attrs))}><th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">${ssrInterpolate($props.route)}</th><td class="py-4 px-6 uppercase">${ssrInterpolate($props.method)}</td><td class="py-4 px-6">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: $props.link,
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Route <i class="fa fa-external-link"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" View Route "),
          createVNode("i", { class: "fa fa-external-link" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/api/APITableRow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "api-routes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_APITableRow = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto mt-5 px-5" }, _attrs))}><div class="overflow-x-auto relative rounded"><table class="w-full text-sm text-left text-gray-400"><thead class="text-xs uppercase bg-gray-700 text-gray-400"><tr><th scope="col" class="py-3 px-6"> Route </th><th scope="col" class="py-3 px-6"> Method </th><th scope="col" class="py-3 px-6"> Link </th></tr></thead><tbody>`);
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/session",
        method: "get",
        link: "/api/auth/session"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/csrf",
        method: "get",
        link: "/api/auth/csrf"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/providers",
        method: "get",
        link: "/api/auth/providers"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/signin",
        method: "get",
        link: "/api/auth/signin"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/signin/:provider",
        method: "post",
        link: "/api/auth/signin/github"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/callback/:provider",
        method: "get & post",
        link: "/api/auth/callback/github"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/signout",
        method: "get & post",
        link: "/api/auth/signout"
      }, null, _parent));
      _push(`</tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/api-routes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=api-routes-efa21065.js.map
