<template lang="pug">
<ComponentExample title="Fixed Bottom" id="target-fixed-bottom" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { SIZES } from '~/constants/constants';

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
export default class TargetFixedBottom extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return SIZES.map((size: string) => `<div class="-position-${size}--fixed-bottom"></div>`).join('\n');
  }
}
</script>
