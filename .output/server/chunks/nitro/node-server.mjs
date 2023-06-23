globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, setCookie, appendHeader, parseCookies, getHeaders, getMethod, getQuery, createError, isMethod, readBody, getRequestHeader, getRequestHeaders, setResponseHeader, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { withoutBase, parseURL, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu, { defu as defu$1 } from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { AuthHandler } from 'next-auth/core';
import getURL from 'requrl';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const ERROR_MESSAGES = {
  NO_SECRET: "AUTH_NO_SECRET: No `secret` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development",
  NO_ORIGIN: "AUTH_NO_ORIGIN: No `origin` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development"
};
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const getServerOrigin = (event) => {
  const envOrigin = process.env.AUTH_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  const runtimeConfigOrigin = useRuntimeConfig().auth.origin;
  if (runtimeConfigOrigin) {
    return runtimeConfigOrigin;
  }
  if (event && "production" !== "production") {
    return getURL(event.node.req);
  }
  throw new Error(ERROR_MESSAGES.NO_ORIGIN);
};
const detectHost = (event, { trusted, basePath }) => {
  if (trusted) {
    const forwardedValue = getURL(event.node.req);
    if (forwardedValue) {
      return Array.isArray(forwardedValue) ? forwardedValue[0] : forwardedValue;
    }
  }
  let origin;
  try {
    origin = getServerOrigin(event);
  } catch (error) {
    return void 0;
  }
  return joinURL(origin, basePath);
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      throw new Error(ERROR_MESSAGES.NO_SECRET);
    }
  }
  const options = defu$1(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useRuntimeConfig().auth.trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: detectHost(event, { trusted: useRuntimeConfig().auth.trustHost, basePath: useRuntimeConfig().auth.basePath }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: error || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};

function defineNitroPlugin(def) {
  return def;
}
const _rxLZJVVwEw = defineNitroPlugin(() => {
  try {
    getServerOrigin();
  } catch (error) {
    {
      throw error;
    }
  }
});

const plugins = [
  _rxLZJVVwEw
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/firebase-messaging-sw.js": {
    "type": "application/javascript",
    "etag": "\"45d-yNfTYVl7sXfIJKBLQWJa6sl2NJI\"",
    "mtime": "2023-06-22T17:26:06.086Z",
    "size": 1117,
    "path": "../public/firebase-messaging-sw.js"
  },
  "/_nuxt/api-routes.40484a46.js": {
    "type": "application/javascript",
    "etag": "\"651-Hptm+j1+2UDi/FtO+UcAcIHl9Uk\"",
    "mtime": "2023-06-22T17:26:06.085Z",
    "size": 1617,
    "path": "../public/_nuxt/api-routes.40484a46.js"
  },
  "/_nuxt/composables.83bcaea5.js": {
    "type": "application/javascript",
    "etag": "\"61-UQcuWnnUEevzGTUMCbih+GeIOGA\"",
    "mtime": "2023-06-22T17:26:06.084Z",
    "size": 97,
    "path": "../public/_nuxt/composables.83bcaea5.js"
  },
  "/_nuxt/default.018ccff2.js": {
    "type": "application/javascript",
    "etag": "\"78a-vSpz9yLRdIi+3b+7zSPrxlVCGdQ\"",
    "mtime": "2023-06-22T17:26:06.084Z",
    "size": 1930,
    "path": "../public/_nuxt/default.018ccff2.js"
  },
  "/_nuxt/entry.159b5d64.js": {
    "type": "application/javascript",
    "etag": "\"6a5ab-Ql9HUl7zvqHSn1HSQrZlKIFBcUQ\"",
    "mtime": "2023-06-22T17:26:06.083Z",
    "size": 435627,
    "path": "../public/_nuxt/entry.159b5d64.js"
  },
  "/_nuxt/entry.30997d28.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"19ee2-kZTB5SG0VSmlHXydhpMGNbd3Mgw\"",
    "mtime": "2023-06-22T17:26:06.081Z",
    "size": 106210,
    "path": "../public/_nuxt/entry.30997d28.css"
  },
  "/_nuxt/error-404.1ea5a786.js": {
    "type": "application/javascript",
    "etag": "\"8ca-zNRHlKBwW5RuY/guHDm0vsY92lY\"",
    "mtime": "2023-06-22T17:26:06.080Z",
    "size": 2250,
    "path": "../public/_nuxt/error-404.1ea5a786.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-06-22T17:26:06.080Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-06-22T17:26:06.079Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.d8fa7504.js": {
    "type": "application/javascript",
    "etag": "\"773-5cD7hjvvniUssnEK0HMp9uZLA1Y\"",
    "mtime": "2023-06-22T17:26:06.078Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.d8fa7504.js"
  },
  "/_nuxt/error-component.dcceeb29.js": {
    "type": "application/javascript",
    "etag": "\"49e-iLAg1SjJBfxOtCSmC+ISc4VlZHk\"",
    "mtime": "2023-06-22T17:26:06.077Z",
    "size": 1182,
    "path": "../public/_nuxt/error-component.dcceeb29.js"
  },
  "/_nuxt/fa-brands-400.3fe890d0.woff2": {
    "type": "font/woff2",
    "etag": "\"1a3c4-OAvqTp60hNg12JzGCPKvfDF56KQ\"",
    "mtime": "2023-06-22T17:26:06.076Z",
    "size": 107460,
    "path": "../public/_nuxt/fa-brands-400.3fe890d0.woff2"
  },
  "/_nuxt/fa-brands-400.c7ae37d3.ttf": {
    "type": "font/ttf",
    "etag": "\"2d700-QjUO1QPWauI6nGjTiWbyW8MAcxk\"",
    "mtime": "2023-06-22T17:26:06.074Z",
    "size": 186112,
    "path": "../public/_nuxt/fa-brands-400.c7ae37d3.ttf"
  },
  "/_nuxt/fa-regular-400.fdc1f753.ttf": {
    "type": "font/ttf",
    "etag": "\"f260-kmLqHQcRtli7ddXL6TReCAx96pA\"",
    "mtime": "2023-06-22T17:26:06.073Z",
    "size": 62048,
    "path": "../public/_nuxt/fa-regular-400.fdc1f753.ttf"
  },
  "/_nuxt/fa-regular-400.fe69d948.woff2": {
    "type": "font/woff2",
    "etag": "\"6208-Vr5MKN58Z3R7D+PdYGvosxn21PQ\"",
    "mtime": "2023-06-22T17:26:06.072Z",
    "size": 25096,
    "path": "../public/_nuxt/fa-regular-400.fe69d948.woff2"
  },
  "/_nuxt/fa-solid-900.6d53c706.ttf": {
    "type": "font/ttf",
    "etag": "\"611a0-0sqvXOddDaE6zjJeJPeqcHnvGJE\"",
    "mtime": "2023-06-22T17:26:06.071Z",
    "size": 397728,
    "path": "../public/_nuxt/fa-solid-900.6d53c706.ttf"
  },
  "/_nuxt/fa-solid-900.d27bc752.woff2": {
    "type": "font/woff2",
    "etag": "\"24bc8-p/yldNJOn/pe4OBYn/4XJ3rk7Cc\"",
    "mtime": "2023-06-22T17:26:06.069Z",
    "size": 150472,
    "path": "../public/_nuxt/fa-solid-900.d27bc752.woff2"
  },
  "/_nuxt/fa-v4compatibility.4d73f280.ttf": {
    "type": "font/ttf",
    "etag": "\"2798-sSwrUV+2LDcN4a9MqZY1sAqr/lg\"",
    "mtime": "2023-06-22T17:26:06.067Z",
    "size": 10136,
    "path": "../public/_nuxt/fa-v4compatibility.4d73f280.ttf"
  },
  "/_nuxt/fa-v4compatibility.7d1c2ce5.woff2": {
    "type": "font/woff2",
    "etag": "\"11e8-nh+Ve/MpvSgKuonleEIDAbMSQD0\"",
    "mtime": "2023-06-22T17:26:06.066Z",
    "size": 4584,
    "path": "../public/_nuxt/fa-v4compatibility.7d1c2ce5.woff2"
  },
  "/_nuxt/globally.937c2c4a.js": {
    "type": "application/javascript",
    "etag": "\"2ee-5r0Ygqpy5lKwlZ8CR6kY66uscAY\"",
    "mtime": "2023-06-22T17:26:06.066Z",
    "size": 750,
    "path": "../public/_nuxt/globally.937c2c4a.js"
  },
  "/_nuxt/globally.b6a12266.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e4-aa8N8FyzRb3Eq1tbE9EpSHQ7KW0\"",
    "mtime": "2023-06-22T17:26:06.065Z",
    "size": 228,
    "path": "../public/_nuxt/globally.b6a12266.css"
  },
  "/_nuxt/index.235446c7.js": {
    "type": "application/javascript",
    "etag": "\"3c4-N/qSVYJFV91zdijUn0BXe0CcBwg\"",
    "mtime": "2023-06-22T17:26:06.064Z",
    "size": 964,
    "path": "../public/_nuxt/index.235446c7.js"
  },
  "/_nuxt/index.d5eb94d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"289-dJrXFNIBDV5xieaz0LbJKgDVXb8\"",
    "mtime": "2023-06-22T17:26:06.063Z",
    "size": 649,
    "path": "../public/_nuxt/index.d5eb94d1.css"
  },
  "/_nuxt/locally.2f628f6d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e4-UsCjthwSSQuen+j9MEHpPBfrKVY\"",
    "mtime": "2023-06-22T17:26:06.062Z",
    "size": 228,
    "path": "../public/_nuxt/locally.2f628f6d.css"
  },
  "/_nuxt/locally.361519ee.js": {
    "type": "application/javascript",
    "etag": "\"24f-4Tl9x/daSyX8IJLmcnINSsNTWSo\"",
    "mtime": "2023-06-22T17:26:06.060Z",
    "size": 591,
    "path": "../public/_nuxt/locally.361519ee.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_VKD2ST = () => import('../healthz.mjs');
const _lazy_wFa1nX = () => import('../fcmApi.mjs');
const _lazy_uWypKj = () => import('../_..._.mjs');
const _lazy_n5ZrH2 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/healthz', handler: _lazy_VKD2ST, lazy: true, middleware: false, method: undefined },
  { route: '/api/fcmApi', handler: _lazy_wFa1nX, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/**', handler: _lazy_uWypKj, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_n5ZrH2, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_n5ZrH2, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { NuxtAuthHandler as N, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
