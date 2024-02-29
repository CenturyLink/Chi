<template lang="pug">
.-mb--4
  <TitleAnchor title="SASS" id="sass" titleSize="h2"/>
  p.-text
    | Chi defines shadows with Saas maps. The following example will render a shadow equivalent to <code>-s--1</code> / <code>1px</code>.
  Copy(lang="html" :code="codeSnippets.htmlblueprint")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: '',
        htmlblueprint: `@import '@centurylink/chi/src/chi/_global-variables';

.example {
  box-shadow: map-get($shadow, 1);
}`,
      },
    };
  },
})
export default class SASS extends Vue {}
</script>
