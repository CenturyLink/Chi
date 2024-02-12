import {
  NAVIGATION_COMPONENTS_ITEMS,
  NAVIGATION_TEMPLATE_ITEMS,
  TEMP_DEVELOPMENT_FALLBACK_URL,
  DEFAULT_CSS,
  DEFAULT_DOCS_CSS,
  BASE_URLS_FOR_ENVS,
  NAVIGATION_FOUNDATIONS,
  NAVIGATION_FOUNDATIONS_ACCESIBILITY,
  NAVIGATION_GETTING_STARTED_ITEMS,
} from './constants/constants';

const DOCS_ENV = process.env.DOCS_ENV || '';
const IS_DEV = DOCS_ENV === 'development';
const IS_PR = DOCS_ENV === 'pr';
const BASE_URL = BASE_URLS_FOR_ENVS[DOCS_ENV] || '/';
const DOCS_JSON_URL = BASE_URL + (IS_DEV
  ? 'docs.json'
  : 'js/ce/docs.json');
const CHI_ASSETS_SOURCE_URL = IS_DEV
  ? `${TEMP_DEVELOPMENT_FALLBACK_URL}/`
  : BASE_URL;


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {},
  // https://nuxt.com/docs/api/nuxt-config#app
  app: {
    // Global page headers: https://nuxt.com/docs/api/nuxt-config#head
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Chi is Lumen's design system for building consistent digital products and experiences.",
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'chi',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${CHI_ASSETS_SOURCE_URL}assets/themes/lumen/images/favicon.ico`,
        },
        {
          rel: 'stylesheet',
          id: 'chi-css',
          type: 'text/css',
          href: `${CHI_ASSETS_SOURCE_URL}${DEFAULT_CSS}`,
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          id: 'chi-docs-css',
          href: `${CHI_ASSETS_SOURCE_URL}${DEFAULT_DOCS_CSS}`,
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
        },
      ],
      script: [
        {
          src: `${CHI_ASSETS_SOURCE_URL}js/chi.js`,
        },
        {
          src: `${CHI_ASSETS_SOURCE_URL}js/ce/ux-chi-ce/ux-chi-ce.esm.js`,
          type: 'module',
        },
        {
          src: `${CHI_ASSETS_SOURCE_URL}js/ce/ux-chi-ce/ux-chi-ce.js`,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
        },
      ],
    },
  },
  css: [
    // 'highlight.js/styles/github.css'
  ],
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('chi-'),
    },
  },
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
      // keep console.logs in pr instances
      // https://github.com/nuxt/nuxt/issues/19702
      ...(IS_PR ? {drop: []} : {})
    },
    server: {
      watch: [
        "./pages/**/*.vue",
        "./**/*.ts" ,
      ]
    }
  },
  nitro: {
    output: {
      // publicDir: 'dist'
    },
    prerender: {
      ignore: [
        '/',
        ...NAVIGATION_GETTING_STARTED_ITEMS.map(item => `/${item.href}`),
        ...NAVIGATION_FOUNDATIONS.map(item => `/${item.href}`),
        ...NAVIGATION_FOUNDATIONS_ACCESIBILITY.map(item => `/${item.href}`),
        '/installation',
        '/components/icon', // To-do, must be removed after full migration
        ...NAVIGATION_COMPONENTS_ITEMS.map(item => `/${item.href}`),
        ...NAVIGATION_TEMPLATE_ITEMS.map(item => `/${item.href}`),
      ]
    },
    esbuild: {
      options: {
        // keep console.logs in pr instances
        // https://github.com/nuxt/nuxt/issues/19702
        ...(IS_PR ? {drop: []} : {})
      }
    }
  },
  // imports css https://github.com/nuxt/nuxt/issues/12215
  // error with chivue
  // build: {
  //   transpile: [
  //     '@centurylink/chi-vue'
  //   ]
  // },
  modules: ['@nuxt/image', 'nuxt3-class-component'],
  // dev server config https://nitro.unjs.io/config
  typescript: {
    // TODO: fix this errors
    // typeCheck: true
  },
  runtimeConfig: {
    public: {
      docsJsonUrl: DOCS_JSON_URL,
      baseUrl: BASE_URL,
      isDev: IS_DEV
    }
  }
});
