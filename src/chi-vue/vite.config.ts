import { resolve } from 'path';
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
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      staticImport: true,
    }),
    libInjectCss(),
    checker({
      typescript: {
        tsconfigPath: './tsconfig.json',
      },
      vueTsc: {
        tsconfigPath: './tsconfig.json',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
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
        resolve(__dirname, './src/build/index.ts'),
        resolve(__dirname, './src/build/components.ts'),
        resolve(__dirname, './src/build/plugin/chi-vue-plugin.ts'),
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
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
});
