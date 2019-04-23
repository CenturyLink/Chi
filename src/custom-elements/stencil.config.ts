import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// @ts-ignore
export const config: Config = {
  namespace: 'ux-chi-ce',
  devServer: {
    openBrowser: false
  },
  plugins: [
    sass(
      {
        includePaths: [
          '../chi/'
        ],
        injectGlobalPaths: [
          '../chi/_variables.scss',
          '../chi/_mixins.scss',
          '../chi/foundations/typography/root-typography.scss'
        ]
      }
    )
  ],
  outputTargets:[
    {
      type: 'dist',
      dir: '../../dist/js/ce/'
    },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
