<template lang="pug">
<ComponentExample title="Fixed Top" id="fixed-top" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | Use the <code>-position--fixed-top</code> class to position an element at the top of the viewport.
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
export default class FixedTop extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position--fixed-top"></div>`,
    };
  }
}
</script>
