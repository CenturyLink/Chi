<template lang="pug">
  <ComponentExample title="Viewport-Specific Column Offsets" id="viewport-specific-column-offset" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    template(#example-description)
      p.-text
        | You may also use offsets on a per-viewport basis. For example, it
        | may make sense to offset content on a desktop, but where space is
        | limited on a mobile device you may want to have the content occupy
        | more space. In the following example, the column will be offset by
        | 50% when on medium viewports, but will not be offset on extra small
        | or small viewports.
    template(#example)
      .chi-grid.-show--example.-mb--3()
        .chi-col.-o-md--6

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
export default class ColumnOffset extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return `<div class="chi-grid">
  <div class="chi-col -o-md--6"></div>
</div>`;
  }
}
</script>
