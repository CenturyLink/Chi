import { defineConfig } from 'vite';
import { resolve } from 'path';

import banner from 'vite-plugin-banner';
import { terser } from 'rollup-plugin-terser';

const copyright = `Chi and its documentation are released under the terms of the MIT license.
In addition, Chi uses several 3rd-party libraries,
a list of which can be viewed in the package.json file.
Please review each of their license and user agreements, as well.`;
const footer = `document.addEventListener('mousedown', function (e) { if (!document.body.classList.contains('-mouse-control')) { document.body.classList.add('-mouse-control'); } }); document.addEventListener('keyup', function (e) { if (e.keyCode === 9 && document.body.classList.contains('-mouse-control')) { document.body.classList.remove('-mouse-control'); } });`;

const outputFormat = process.env.JS === 'amd' ? 'amd' : 'iife';
const outDir = process.env.JS === 'amd' ? 'dist/amd' : 'dist/js';

export default defineConfig({
  plugins: [
    banner(copyright),
    terser({
      format: {
        comments: false,
      },
      compress: {
        warnings: false,
        drop_console: false,
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
    outDir: outDir,
    emptyOutDir: false,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      input: {
        chi: resolve(__dirname, 'src/chi/javascript/index.js'),
      },
      output: {
        name: 'chi',
        format: outputFormat,
        footer: footer,
        entryFileNames: 'chi.js',
        chunkFileNames: '[name].js',
      },
    },
  },
  define: {
    'import.meta.env.MODE': '"production"',
  },
});
