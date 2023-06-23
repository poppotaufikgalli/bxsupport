import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["auth"]?: typeof import("@sidebase/nuxt-auth").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", NuxtConfig["tailwindcss"]] | ["@sidebase/nuxt-auth", NuxtConfig["auth"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   auth: {
      isEnabled: boolean,

      origin: string,

      basePath: string,

      trustHost: boolean,

      enableSessionRefreshPeriodically: boolean,

      enableSessionRefreshOnWindowFocus: boolean,

      enableGlobalAppMiddleware: boolean,

      defaultProvider: any,

      globalMiddlewareOptions: {
         allow404WithoutAuth: boolean,
      },

      secret: string,

      isOriginSet: boolean,
   },
  }
  interface PublicRuntimeConfig {
   vapidKey: string,

   firebaseConfig: {
      apiKey: string,

      authDomain: string,

      projectId: string,

      storageBucket: string,

      messagingSenderId: string,

      appId: string,

      measurementId: string,
   },

   NUXT_SECRET: string,

   auth: {
      isEnabled: boolean,

      origin: string,

      basePath: string,

      trustHost: boolean,

      enableSessionRefreshPeriodically: boolean,

      enableSessionRefreshOnWindowFocus: boolean,

      enableGlobalAppMiddleware: boolean,

      defaultProvider: any,

      globalMiddlewareOptions: {
         allow404WithoutAuth: boolean,
      },

      secret: string,
   },
  }
}