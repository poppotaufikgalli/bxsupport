import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import 'requrl';
import '../../nitro/config.mjs';
import 'destr';
import 'scule';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "locally",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-10" }, _attrs))} data-v-94b7a25b><h1 class="text-2xl font-bold" data-v-94b7a25b>I am publicly available!</h1><h3 data-v-94b7a25b>The global protecting is disabled via <a href="https://github.com/sidebase/nuxt-auth#disabling-the-global-middleware-locally" target="_blank" data-v-94b7a25b>local middleware</a>.</h3></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/protected/locally.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const locally = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94b7a25b"]]);

export { locally as default };
//# sourceMappingURL=locally-dd7b0ce6.mjs.map
