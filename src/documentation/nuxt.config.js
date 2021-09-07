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
        href: 'https://assets.ctl.io/chi/5.1.0/chi-portal.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://assets.ctl.io/chi/5.1.0/assets/themes/portal/docs.css'
      },
    ],
    script: [
      {
        src: 'https://assets.ctl.io/chi/5.1.0/js/chi.js'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // With Options
    ['nuxt-highlightjs', {
      style: 'github'
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
};
