<template lang="pug">
<ComponentExample title="Static" id="static" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border:none;">
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
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
    };
  },
})
export default class Static extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position--static"></div>`,
    };
  }
}
</script>
