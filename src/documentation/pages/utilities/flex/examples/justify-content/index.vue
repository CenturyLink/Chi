<template lang="pug">
  div
    <ComponentExample title="Justify content" id="justify-content" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text Use justify-content utilities to alter the alignment of flex items on the main axis.
    template(#example)
      .-p--3
        .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="type in types" :class="'-justify-content--' + type")
          .-text.-p--2(v-for="i in 3") Item {{i}}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
    </ComponentExample>
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

const types = ['start', 'end', 'center', 'between', 'around'];

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
export default class JustifyContent extends Vue {
  types = types;

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.types.map((type) => `<div class="-d--flex -justify-content--${type}"></div>`).join('\n');
  }
}
</script>
