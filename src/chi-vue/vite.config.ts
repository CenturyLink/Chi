import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { checker } from 'vite-plugin-checker';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('chi-'),
        },
      },
    }),
    vueJsx({
      isCustomElement: (tag) => tag.startsWith('chi-'),
      babelPlugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-transform-class-properties',
      ],
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
      staticImport: true,
    }),
    libInjectCss(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
      vueTsc: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      name: 'ChiVue',
      entry: [
        fileURLToPath(new URL('./src/build/index.ts', import.meta.url)),
        fileURLToPath(new URL('./src/build/components.ts', import.meta.url)),
        fileURLToPath(new URL('./src/build/plugin/chi-vue-plugin.ts', import.meta.url)),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'vue-class-component'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
          'vue-class-component': 'VueClassComponent',
        },
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
});
