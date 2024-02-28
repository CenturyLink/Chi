import { ref, type Plugin } from 'vue';
import { z } from 'zod';
import { importCss, importJs, importWebComponents } from './utils';
import { CHI_LIB_LUMEN, CHI_VERSION } from './constants';

const pluginOptionsSchema = z.object({
  chiOptions: z
    .object({
      forceVersion: z.string().optional(),
      theme: z.enum(['lumen', 'portal', 'brightspeed', 'centuryLink', 'colt']).optional(),
    })
    .optional(),
});

type ChiVueOptions = z.infer<typeof pluginOptionsSchema>;

export const ChiVue: Plugin<ChiVueOptions> = {
  install(app, opt?: unknown) {
    const options = pluginOptionsSchema.parse(opt);
    const chiVersion = options.chiOptions?.forceVersion ?? CHI_VERSION;
    const chiTheme = options.chiOptions?.theme ?? 'portal';

    /**
     * Method to change the theme of the application
     * @param theme
     */
    const changeTheme = (theme: 'lumen' | 'portal' | 'brightspeed' | 'centuryLink' | 'colt') => {
      const themeElement = document.getElementById('chi-theme') as HTMLLinkElement;

      if (themeElement) {
        const themeToUse = theme !== 'lumen' ? `chi-${theme}.css` : 'chi.css';

        themeElement.href = `${CHI_LIB_LUMEN}/${chiVersion}/${themeToUse}`;
      }
    };

    importCss(chiVersion, chiTheme);
    importJs(window);
    importWebComponents(chiVersion);

    app.provide('changeTheme', changeTheme);
  },
};
