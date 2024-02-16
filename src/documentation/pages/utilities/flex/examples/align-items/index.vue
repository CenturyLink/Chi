<template lang="pug">
  div.-mb--3
    <ComponentExample title="Align Items" id="align-items" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
      template(#example-description)
      p.-text Use align-items utilities to alter the alignment of flex items on the cross axis.
      template(#example)
        .-p--3
          .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="type in types" :class="'-align-items--' + type" style="height:7rem;")
            .-text.-p--2 Item 1
            .-text.-p--2 Item 2
            .-text.-p--2 Item 3
      template(#code-htmlblueprint)
        Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
    </ComponentExample>
    <SpecificBreakpoints />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

const types = ['start', 'end', 'center', 'baseline', 'stretch'];

@NuxtComponent({
  components: {
    SpecificBreakpoints,
  },
  data: () => {
    return {
      types,
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
export default class AlignItems extends Vue {
  types = types;

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.types.map((type) => `<div class="-d--flex -align-items--${type}"></div>`).join('\n');
  }
}
</script>
