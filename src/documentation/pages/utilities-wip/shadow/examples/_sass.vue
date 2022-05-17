<template lang="pug">
  div
    h2(class="-anchor" :id="id") SASS
      span
        a(class="-ml--1" :href="'/utilities/shadow/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Chi defines shadows with Saas maps. The following example will render
      | a shadow equivalent to <code>-s--1</code> / <code>1px</code>.
    pre(class="language-html" :slot="`code-snippet-sass`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'sass-example',
      codeSnippets: `@import '@centurylink/chi/src/chi/_global-variables';

.example {
  box-shadow: map-get($shadow, 1);
}`
    };
  }
})
export default class Sass extends Vue {}
</script>
