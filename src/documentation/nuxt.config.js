import { CHI_VERSION } from './constants/configs';
import { NAVIGATION_COMPONENTS_ITEMS, CHI_ROOT_URL } from './constants/constants';

const CopyPlugin = require('copy-webpack-plugin');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: `${CHI_ROOT_URL}/assets/themes/lumen/images/favicon.ico` }],
    script: [
      {
        src: `${CHI_ROOT_URL}/js/chi.js`
      },
      {
        src: `${CHI_ROOT_URL}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`,
        type: 'module'
      },
      {
        src: `${CHI_ROOT_URL}/js/ce/ux-chi-ce/ux-chi-ce.js`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/chi-vue-components.js'],

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
    proxy: true,
    baseURL: 'http://localhost:3000'
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:8000',
      pathRewrite: { '^/api/': '' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new CopyPlugin([{ from: '@centurylink/chi-vue/dist' }], {
        context: 'node_modules',
        ignore: ['.DS_Store']
      })
    ]
  },
  target: 'static', // To be set conditionally based on process.env.NODE_ENV
  generate: {
    exclude: [
      '/',
      '/getting-started',
      '/getting-started/installation',
      '/getting-started/development-workflow',
      '/getting-started/browsers-devices',
      '/getting-started/whats-new',
      '/foundations/design-tokens',
      '/foundations/grid',
      '/foundations/color',
      '/foundations/accessibility/other',
      '/foundations/accessibility/overview',
      '/foundations/accessibility/color-sensory',
      '/foundations/accessibility/using-keyboard',
      '/foundations/accessibility/text',
      '/foundations/accessibility/page-structure',
      '/foundations/accessibility/images',
      '/foundations/accessibility/tables',
      '/foundations/accessibility/links-and-forms',
      '/installation',
      '/utilities/display',
      '/utilities/flex',
      '/utilities/border',
      '/utilities/overflow',
      '/utilities/image',
      '/utilities/position',
      '/utilities/opacity',
      '/utilities/shadow',
      '/utilities/text',
      '/utilities/sizing',
      '/utilities/spacing',
      '/utilities/vertical-align',
      '/utilities/zindex',
      '/utilities/color',
      ...NAVIGATION_COMPONENTS_ITEMS.filter(item => item.href).map(
        item => item.href
      )
    ]
  }
};
