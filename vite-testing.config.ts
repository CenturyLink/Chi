import { mergeConfig } from 'vite';
import viteJsConfig from './vite-js.config';
import istanbul from 'vite-plugin-istanbul';

export default mergeConfig(viteJsConfig, {
  plugins: [
    istanbul({
      cypress: true,
      forceBuildInstrument: true,
      nycrcPath: './.nycrc',
    }),
  ],
});
