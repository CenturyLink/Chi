import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from './docs/docs';

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
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        const alertTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define alert title.',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string'
            }
          ],
          optional: false,
          required: false
        };

        const popoverTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define popover title.',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string'
            }
          ],
          optional: false,
          required: false
        };

        const drawerTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define drawer title. Not compatible with headless',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string'
            }
          ],
          optional: false,
          required: false
        };

        docs['components'].find(x => x.tag === 'chi-alert')['props'].push(alertTitleProp);
        docs['components'].find(x => x.tag === 'chi-alert')['props'].sort((a, b) => {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
          return 0
        });

        docs['components'].find(x => x.tag === 'chi-popover')['props'].push(popoverTitleProp);
        docs['components'].find(x => x.tag === 'chi-popover')['props'].sort((a, b) => {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
          return 0
        });

        docs['components'].find(x => x.tag === 'chi-drawer')['props'].push(drawerTitleProp);
        docs['components'].find(x => x.tag === 'chi-drawer')['props'].sort((a, b) => {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
          return 0
        });
      }
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
