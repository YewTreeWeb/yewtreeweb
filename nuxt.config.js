export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YewTree Web',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover, user-scalable=0',
      },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { 'http-equiv': 'Accept-CH', content: 'DPR, Viewport-Width, Widths' },
      {
        hid: 'description',
        name: 'description',
        content:
          'YewTreeWeb is a portfolio website showing projects and information about Mathew Teague',
      },
      {
        name: 'keywords',
        content:
          'Developer, JavaScript Developer, Front-end Developer, Vue, React, Shopify, TypeScript',
      },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Mathew Teague' },
    ],
    link: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/inter-v11-latin-regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/red-hat-display-v12-latin-700.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/red-hat-display-v12-latin-900.woff2',
        crossorigin: true,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/styles/main'],

  // Environment variables},
  publicRuntimeConfig: {
    ctfID: process.env.CTF_SPACE_ID,
    ctfToken: process.env.CTF_CDA_ACCESS_TOKEN,
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.BASE_URL,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/preview.client', '@/plugins/contentful'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescriptw
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    // Google Tag Manager Module for Nuxt.js
    '@nuxtjs/gtm',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Image optimization configuration
  image: {
    dir: '@/assets/images',
  },

  // Google Tag Manager Module for Nuxt.js
  gtm: {
    debug: process.env.NODE_ENV !== 'production',

    id: 'GTM-XXXXXXX',
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },
}
