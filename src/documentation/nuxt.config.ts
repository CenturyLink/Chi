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
import { defineNuxtConfig } from 'nuxt/config';

const DOCS_ENV = process.env.DOCS_ENV || '';
const IS_DEV = DOCS_ENV === 'development';
const IS_PR = DOCS_ENV === 'pr';
const BASE_URL = BASE_URLS_FOR_ENVS[DOCS_ENV] || '/';
const DOCS_JSON_URL = BASE_URL + (IS_DEV ? 'docs.json' : 'js/ce/docs.json');
const CHI_ASSETS_SOURCE_URL = IS_DEV ? `${TEMP_DEVELOPMENT_FALLBACK_URL}/` : BASE_URL;

const IGNORED_ROUTES = [
  ...NAVIGATION_GETTING_STARTED_ITEMS,
  ...NAVIGATION_FOUNDATIONS,
  ...NAVIGATION_FOUNDATIONS_ACCESIBILITY,
  ...NAVIGATION_COMPONENTS_ITEMS,
  ...NAVIGATION_TEMPLATE_ITEMS,
]
  .filter((i) => i.source === 'pug')
  .map((i) => `${BASE_URL}${i.href}`);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {},
  // https://nuxt.com/docs/api/nuxt-config#app
  app: {
    baseURL: BASE_URL,
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
  css: [],
  devtools: { enabled: IS_DEV },
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
    },
    // Watch files to hot reload.
    server: {
      watch: {
        ignored: ['!./pages/**/*.vue', '!./**/*.ts']
      }
    },
  },
  nitro: {
    // https://nitro.unjs.io/config#prerender
    prerender: {
      // uses regex or begins with to match routes
      ignore: [
        ...IGNORED_ROUTES,
        // should be removed once getting-started has been migrated
        '/getting-started',
        '/installation',
        '/getting-started',
        '../',
        `^(?!${BASE_URL.replace('/', '\/').replace(".", "\.")}).*`
      ],
    },
    esbuild: {
      options: {
        // keep console.logs in pr instances
        // https://github.com/nuxt/nuxt/issues/19702
        ...(IS_PR ? { drop: [] } : {}),
      },
    },
  },
  // error with chivue
  // imports css https://github.com/nuxt/nuxt/issues/12215
  build: {
    transpile: ['@centurylink/chi-vue'],
  },
  modules: ['@nuxt/image', 'nuxt3-class-component', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      docsJsonUrl: DOCS_JSON_URL,
      baseUrl: BASE_URL,
      isDev: IS_DEV,
    },
  },
});
