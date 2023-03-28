import {
  BASE_URL,
  DOCS_ENV,
  NAVIGATION_COMPONENTS_ITEMS,
  TEMP_DEVELOPMENT_FALLBACK_URL,
  DEFAULT_CSS,
  DEFAULT_DOCS_CSS
} from './constants/constants';

const CopyPlugin = require('copy-webpack-plugin');

const CHI_ASSETS_SOURCE_URL =
  DOCS_ENV === 'development' ? `${TEMP_DEVELOPMENT_FALLBACK_URL}/` : BASE_URL;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
      class: 'chi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${CHI_ASSETS_SOURCE_URL}assets/themes/lumen/images/favicon.ico`
      },
      {
        rel: 'stylesheet',
        id: 'chi-css',
        type: 'text/css',
        href: `${CHI_ASSETS_SOURCE_URL}${DEFAULT_CSS}`
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        id: 'chi-docs-css',
        href: `${CHI_ASSETS_SOURCE_URL}${DEFAULT_DOCS_CSS}`
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3'
      }
    ],
    script: [
      {
        src: `${CHI_ASSETS_SOURCE_URL}js/chi.js`
      },
      {
        src: `${CHI_ASSETS_SOURCE_URL}js/ce/ux-chi-ce/ux-chi-ce.esm.js`,
        type: 'module'
      },
      {
        src: `${CHI_ASSETS_SOURCE_URL}js/ce/ux-chi-ce/ux-chi-ce.js`
      },
      {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3'
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
    '@nuxt/typescript-build',
    '@nuxt/image'
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
    postcss: false,
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: '@centurylink/chi-vue/dist',
            context: 'node_modules',
            globOptions: {
              ignore: ['.DS_Store']
            }
          }
        ]
      })
    ]
  },
  router: {
    base: BASE_URL,
    linkExactActiveClass: '-active'
  },

  target: 'static',

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
      '/templates/error-500',
      '/templates/state',
      '/templates/app-layout',
      '/templates/error-404',
      '/components/icon', // To-do, must be removed after full migration
      ...NAVIGATION_COMPONENTS_ITEMS.map(item => {
        return `/${item.href}`;
      })
    ]
  }
};
