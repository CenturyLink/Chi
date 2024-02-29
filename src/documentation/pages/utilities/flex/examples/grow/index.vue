<template lang="pug">
  div
    <ComponentExample title="Grow" id="grow" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text Use the <code>-flex--grow*</code> class to toggle a flex item's ability to grow and take up all available space.
    template(#example)
      .-mb--2.-p--3.-d--flex.-show--example
        .-text.-p--2.-flex--grow1 Item
        .-text.-p--2 Item
        .-text.-p--2 Item
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
    </ComponentExample>
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@NuxtComponent({
  components: {
    SpecificBreakpoints,
  },
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
export default class Grow extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    const content = Array(3)
      .fill(0)
      .map((_, i) => `  <div${i ? '' : ' class="-flex--grow1"'}>Item</div>`)
      .join('\n');

    return `<div class="-d--flex">
${content}
</div>`;
  }
}
</script>
