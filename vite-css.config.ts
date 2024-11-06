import { defineConfig } from 'vite';
import { resolve } from 'path';

import autoprefixer from 'autoprefixer';
import postcssSvg from 'postcss-svg';
import cssnano from 'cssnano';

import banner from 'vite-plugin-banner';

const copyright = `Chi and its documentation are released under the terms of the MIT license.
In addition, Chi uses several 3rd-party libraries,
a list of which can be viewed in the package.json file.
Please review each of their license and user agreements, as well.`;

const themeName = (theme) => (theme === 'lumen' ? 'chi' : `chi-${theme}`);

export default defineConfig({
  plugins: [banner(copyright)],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [resolve(__dirname, 'src/chi')],
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', 'ie >= 10'],
        }),
        postcssSvg({
          dirs: [resolve(__dirname, 'src/chi/assets/icons')],
        }),
        cssnano({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        }),
      ],
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        [themeName(process.env.THEME)]: resolve(__dirname, `src/chi/themes/${process.env.THEME}/index.scss`),
      },
      output: {
        assetFileNames: '[name].css',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
});
