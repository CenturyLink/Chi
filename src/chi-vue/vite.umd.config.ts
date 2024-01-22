import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
    libInjectCss(),
    checker({
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
    outDir: 'umd',
    target: 'esnext',
    minify: true,
    sourcemap: false,
    copyPublicDir: false,
    lib: {
      name: 'chi-vue',
      entry: fileURLToPath(new URL('./src/build/index.umd.ts', import.meta.url)),
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        globals: {
          pinia: 'Pinia',
          vue: 'Vue',
        },
        entryFileNames: '[name].js',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
    'process.env.NODE_ENV': '"production"',
  },
});
