/**
 * PLUGIN TO USE HIGHTLIGHTED CODE IN THE APPLICATION
 * Can only be used in client side
 * https://stackoverflow.com/questions/77007969/how-to-create-highlightjs-plugin-on-nuxt3
 */
import 'highlight.js/styles/github.css';

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';

import hljsVuePlugin from '@highlightjs/vue-plugin';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('typescript', typescript);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(hljsVuePlugin);
});
