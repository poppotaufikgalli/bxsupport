// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        origin: process.env.ORIGIN,
        secret: process.env.NUXT_SECRET,
        enableGlobalAppMiddleware: true
    },
    runtimeConfig: {
        public: {
            vapidKey: process.env.vapidKey,
            firebaseConfig:{
                apiKey: process.env.apiKey,
                authDomain: process.env.authDomain,
                projectId: process.env.projectId,
                storageBucket: process.env.storageBucket,
                messagingSenderId: process.env.messagingSenderId,
                appId: process.env.appId,
                measurementId: process.env.measurementId,
            },
            NUXT_SECRET: process.env.NUXT_SECRET,
        },
    },
})
