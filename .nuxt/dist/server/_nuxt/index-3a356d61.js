import { u as useRuntimeConfig, b as useNuxtApp, d as useSession, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import { getToken, onMessage } from "firebase/messaging";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
import "requrl";
function useFcm() {
  const config = useRuntimeConfig();
  const { $messaging } = useNuxtApp();
  async function getToken$1() {
    return $messaging && getToken($messaging, {
      vapidKey: config.vapidKey
    });
  }
  function onMessage$1(cb) {
    $messaging && onMessage($messaging, cb);
  }
  return { getToken: getToken$1, onMessage: onMessage$1 };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, status, getCsrfToken, getProviders } = useSession();
    const { getToken: getToken2, onMessage: onMessage2, sendMessage } = useFcm();
    const msg = ref("");
    [__temp, __restore] = withAsyncContext(() => getProviders()), __temp = await __temp, __restore(), __temp;
    [__temp, __restore] = withAsyncContext(() => getCsrfToken()), __temp = await __temp, __restore(), __temp;
    [__temp, __restore] = withAsyncContext(() => getToken2()), __temp = await __temp, __restore(), __temp;
    onMessage2((payload) => msg.value = payload);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-85a776f0><h3 class="text-xl font-bold" data-v-85a776f0>BisaXirim Support</h3><p class="text-sm" data-v-85a776f0>Available Soon</p>`);
      if (unref(msg)) {
        _push(`<pre data-v-85a776f0><span data-v-85a776f0>Message :</span> ${ssrInterpolate(unref(msg))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_85a776f0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85a776f0"]]);
export {
  index as default
};
//# sourceMappingURL=index-3a356d61.js.map
