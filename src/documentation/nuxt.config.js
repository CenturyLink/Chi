import { CHI_VERSION } from "./constants/configs";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'documentation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: `https://assets.ctl.io/chi/${CHI_VERSION}/chi-portal.css`
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: `https://assets.ctl.io/chi/${CHI_VERSION}/assets/themes/portal/docs.css`
      },
    ],
    script: [
      {
        src: `https://assets.ctl.io/chi/${CHI_VERSION}/js/chi.js`,
      },
      {
        src: `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`,
      },
      {
        src: `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.js`,
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // With Options
    [
      'nuxt-highlightjs',
      {
        style: 'github'
      }
    ],
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:8000',
      pathRewrite: { '^/api/': '' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
