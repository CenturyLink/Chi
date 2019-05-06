import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ux-chi-ce',
  devServer: {
    openBrowser: false
  },
  plugins: [
    sass(
      {
        // @ts-ignore
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
  outputTargets: [
    {
      type: 'dist'
    },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
