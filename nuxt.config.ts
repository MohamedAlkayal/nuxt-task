// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'https://api.example.com/',
        },
    },
    app: {
        head: {
            htmlAttrs: { dir: 'rtl', lang: 'ar' },
        },
    },
    plugins: [],
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@formkit/nuxt'],
    formkit: {
        autoImport: true,
    },
})
