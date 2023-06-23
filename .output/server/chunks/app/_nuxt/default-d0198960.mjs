import { d as useSession, e as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './composables-1ca9bb4f.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, signOut, signIn } = useSession();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "border-gray-200 px-2 sm:px-4 py-1 bg-gray-900" }, _attrs))}><div class="container flex flex-wrap justify-between items-center mx-auto"><a href="https://bisaxirim.com" target="_blank" class="flex items-center"><img src="https://bisaxirim.com/assets/icon/logo-bisaxirim2-01.png" class="h-9"><span class="self-center text-xl font-semibold whitespace-nowrap text-white mx-2">Support</span></a><div class="w-full md:w-auto" id="navbar-default"><ul class="flex flex-col md:p-4 mt-4 py-2 bg-gray-50 rounded-lg border md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700"><li class="flex items-center">`);
      if (unref(status) === "authenticated") {
        _push(`<h1 class="text-white"> Hi ${ssrInterpolate((_b = (_a = unref(data)) == null ? void 0 : _a.user) == null ? void 0 : _b.name)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(status) === "authenticated") {
        _push(`<button class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg p-2"><span>Logout</span></button>`);
      } else {
        _push(`<button class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg p-2"><i class="fa fa-right-to-bracket pt-0.5"></i><span>Login</span></button>`);
      }
      _push(`</li></ul></div></div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BisaXirim Support"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen h-full relative bg-gray-100 pb-20" }, _attrs))}><div class="fixed top-0 w-full">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`</div><div class="max-w-5xl mx-auto px-5 pt-28">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-d0198960.mjs.map
