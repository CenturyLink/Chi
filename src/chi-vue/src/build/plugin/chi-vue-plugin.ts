import { type Plugin } from 'vue';
import { z } from 'zod';
import { importCss, importJs, importWebComponents } from './utils';
import { CHI_VERSION } from './constants';

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

    importCss(chiVersion, chiTheme);
    importJs(window);
    importWebComponents(chiVersion);
  },
};
