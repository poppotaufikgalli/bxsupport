import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
    protectionType: String,
    href: String
  }
};
const Secret_vue_vue_type_style_index_0_scoped_8cb07eca_lang = "";
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-10" }, _attrs))} data-v-8cb07eca><h1 class="text-2xl font-bold" data-v-8cb07eca>I&#39;m a secret!</h1><h3 data-v-8cb07eca>My protection works via an <a${ssrRenderAttr("href", $props.href)} target="_blank" data-v-8cb07eca>${ssrInterpolate($props.protectionType)} middleware</a>.</h3></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Secret.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8cb07eca"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Secret = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Secret, mergeProps({
    "protection-type": "global",
    href: "https://sidebase.io/nuxt-auth/application-side/protecting-pages#global-middleware"
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/protected/globally.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const globally = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  globally as default
};
//# sourceMappingURL=globally-6e9ce824.js.map
