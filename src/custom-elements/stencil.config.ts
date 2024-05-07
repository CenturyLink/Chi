import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { JsonDocs } from './docs/docs';
import { JsonDocsComponent } from '@stencil/core/internal';

const IS_DEV = process.argv?.indexOf('--dev') > -1;

export const config: Config = {
  namespace: 'ux-chi-ce',
  devServer: {
    openBrowser: IS_DEV,
  },
  sourceMap: IS_DEV,
  buildEs5: true,
  plugins: [
    sass({
      // @ts-ignore
      includePaths: ['../chi/'],
      injectGlobalPaths: [],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        const titleAttributeChanges = {
          'chi-alert': 'alertTitle',
        };

        for (let [tag, propName] of Object.entries(titleAttributeChanges)) {
          // @ts-ignore
          const componentProps = docs['components'].find((x) => x.tag === tag)['props'];
          // @ts-ignore
          componentProps.find((prop) => prop.name === propName)['name'] = 'title';
          componentProps.sort((a, b) => a.name.localeCompare(b.name));
        }
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
              type: 'string',
            },
          ],
          optional: false,
          required: false,
        };

        const drawerTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define drawer title. Not compatible with no-header',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string',
            },
          ],
          optional: false,
          required: false,
        };

        const epanelTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define expansion panel title.',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string',
            },
          ],
          optional: false,
          required: false,
        };

        const appLayoutTitleProp = {
          name: 'title',
          type: 'string',
          mutable: false,
          attr: 'title',
          reflectToAttr: true,
          docs: 'to define app layout title.',
          docsTags: [],
          default: false,
          values: [
            {
              type: 'string',
            },
          ],
          optional: false,
          required: false,
        };

        // @ts-ignore
        docs['components'].find((x) => x.tag === 'chi-popover')['props'].push(popoverTitleProp);
        // @ts-ignore
        docs['components']
          .find((x) => x.tag === 'chi-popover')
          ['props'].sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
          });

        // @ts-ignore
        docs['components'].find((x) => x.tag === 'chi-drawer')['props'].push(drawerTitleProp);
        // @ts-ignore
        docs['components']
          .find((x) => x.tag === 'chi-drawer')
          ['props'].sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
          });

        // @ts-ignore
        docs['components'].find((x) => x.tag === 'chi-expansion-panel')['props'].push(epanelTitleProp);
        // @ts-ignore
        docs['components']
          .find((x) => x.tag === 'chi-expansion-panel')
          ['props'].sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
          });

        // @ts-ignore
        docs['components'].find((x) => x.tag === 'chi-main')['props'].push(appLayoutTitleProp);
        // @ts-ignore
        docs['components']
          .find((x) => x.tag === 'chi-main')
          ['props'].sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            return 0;
          });

        // Remove stepped property from chi-time
        const chiTime = docs['components'].find((x) => x.tag === 'chi-time') as JsonDocsComponent;
        chiTime['props'] = chiTime['props'].filter(({ name }) => name !== 'stepped');

        // Add default value for minute-steps and seconds-step properties
        docs['components']
          .filter(({ tag }) => ['chi-time', 'chi-date-picker', 'chi-time-picker'].includes(tag))
          .forEach((component) =>
            component.props.forEach((prop) => {
              if (['minutesStep', 'secondsStep'].includes(prop.name)) {
                prop.default = '15';
              }
            })
          );

        docs['components'].map((component) => {
          const checkIfPrivate = ['props', 'methods', 'events'];

          Array.prototype.forEach.call(checkIfPrivate, (propertyTypeToCheck) => {
            const titleToCheck = propertyTypeToCheck === 'events' ? 'event' : 'name';

            component[propertyTypeToCheck] = component[propertyTypeToCheck].filter((propertyToCheck) => {
              return propertyToCheck[titleToCheck].split('')[0] !== '_';
            });
          });
        });
      },
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  extras: {
    // We want to be able to use this library in Vite projects.
    // https://stenciljs.com/docs/config-extras#experimentalimportinjection
    experimentalImportInjection: true,
  },
};
