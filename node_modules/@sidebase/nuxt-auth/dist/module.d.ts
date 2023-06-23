import * as _nuxt_schema from '@nuxt/schema';
import { BuiltInProviderType } from 'next-auth/providers';

/**
 * Utility type that allows autocompletion for a mix of literal, primitiva and non-primitive values.
 * @source https://github.com/microsoft/TypeScript/issues/29729#issuecomment-832522611
 */
type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
type SupportedProviders = LiteralUnion<BuiltInProviderType>;

interface GlobalMiddlewareOptions {
    /**
     * Whether to enforce authentication if the target-route does not exist. Per default the middleware redirects
     * to Nuxts' default 404 page instead of forcing a sign-in if the target does not exist. This is to avoid a
     * user-experience and developer-experience of having to sign-in only to see a 404 page afterwards.
     *
     * Note: Setting this to `false` this may lead to `vue-router` + node related warnings like: "Error [ERR_HTTP_HEADERS_SENT] ...",
     * this may be related to https://github.com/nuxt/framework/issues/9438.
     *
     * @example false
     * @default true
     */
    allow404WithoutAuth?: boolean;
}
interface ModuleOptions {
    /**
     * Whether the module is enabled at all
     */
    isEnabled: boolean;
    /**
     * Full url at which the app will run and path to authentication.
     *
     * Can be `undefined` during development but _must_ be set for production. This is the origin-part of the NEXTAUTH_URL. The origin consists out of:
     * - `scheme`: http / https
     * - `host`: e.g., localhost, example.org, google.com
     * - `port`: _empty_ (implies `:80`), :3000, :8888
     *
     * See https://next-auth.js.org/configuration/options#nextauth_url for more on this. Note that nextauth uses the full url as one.
     *
     * @example undefined
     * @example http://localhost:3000
     * @example https://example.org
     * @default http://localhost:3000
     */
    origin: string | undefined;
    /**
     * The path to the endpoint that you've added `NuxtAuth` at via `export default NuxtAuthHandler({ ... })`. See the getting started for more: https://github.com/sidebase/nuxt-auth#quick-start
     *
     * @default /api/auth
     */
    basePath: string | undefined;
    /**
     * If set to `true`, `NuxtAuth` will use either the `x-forwarded-host` or `host` headers,
     * instead of `auth.origin`
     * Make sure that reading `x-forwarded-host` on your hosting platform can be trusted.
     * - ⚠ **This is an advanced option.** Advanced options are passed the same way as basic options,
     * but **may have complex implications** or side effects.
     * You should **try to avoid using advanced options** unless you are very comfortable using them.
     * @default false
     */
    trustHost: boolean;
    /**
     * Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
     *
     * Setting this to `true` will refresh the session every second.
     * Setting this to `false` will turn off session refresh.
     * Setting this to a number `X` will refresh the session every `X` milliseconds.
     *
     * @example 1000
     * @default false
     *
     */
    enableSessionRefreshPeriodically: number | boolean;
    /**
     * Whether to refresh the session every time the browser window is refocused.
     *
     * @example false
     * @default true
     */
    enableSessionRefreshOnWindowFocus: boolean;
    /**
     * Whether to add a global authentication middleware that protects all pages.
     *
     * @example true
     * @default false
     */
    enableGlobalAppMiddleware: boolean;
    /**
     * Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page.
     *
     * @example "github"
     * @default undefined
     */
    defaultProvider: SupportedProviders | undefined;
    /**
     * Options of the global middleware. They will only apply if `enableGlobalAppMiddleware` is set to `true`.
     */
    globalMiddlewareOptions: GlobalMiddlewareOptions;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { _default as default };
