import destr from 'destr';
import { snakeCase } from 'scule';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{"vapidKey":"BOowKrru4ab_7kK0fOoqIrmaexpTNEobmTT__ebwqpJj0BqIYvAaOqR5Ul_aVA08lmaqV30QRnDXo4SA4ZqBX5w","firebaseConfig":{"apiKey":"AIzaSyBbROTCoZaiQo8CMDHJF8x57zEXwpb6w_4","authDomain":"bisaxirim2022.firebaseapp.com","projectId":"bisaxirim2022","storageBucket":"bisaxirim2022.appspot.com","messagingSenderId":"578400270318","appId":"1:578400270318:web:bded61db1e6e168d6800ff","measurementId":"G-SSRPQDXKDE"},"NUXT_SECRET":"fb978eb05d5701e9be21ac2e5c4cd7d5","auth":{"isEnabled":true,"origin":"http://localhost:3000","basePath":"/api/auth","trustHost":false,"enableSessionRefreshPeriodically":false,"enableSessionRefreshOnWindowFocus":true,"enableGlobalAppMiddleware":true,"defaultProvider":"","globalMiddlewareOptions":{"allow404WithoutAuth":true},"secret":"fb978eb05d5701e9be21ac2e5c4cd7d5"}},"auth":{"isEnabled":true,"origin":"http://localhost:3000","basePath":"/api/auth","trustHost":false,"enableSessionRefreshPeriodically":false,"enableSessionRefreshOnWindowFocus":true,"enableGlobalAppMiddleware":true,"defaultProvider":"","globalMiddlewareOptions":{"allow404WithoutAuth":true},"secret":"fb978eb05d5701e9be21ac2e5c4cd7d5","isOriginSet":true}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

export { useRuntimeConfig as u };
//# sourceMappingURL=config.mjs.map
