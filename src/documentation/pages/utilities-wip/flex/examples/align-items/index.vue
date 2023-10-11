<template lang="pug">
  div.-mb--3
    <ComponentExample title="Align Items" id="align-items" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
      p.-text(slot="example-description") Use align-items utilities to alter the alignment of flex items on the cross axis.
      .-p--3(slot="example")
        .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="type in types" :class="'-align-items--' + type" style="height:7rem;")
          .-text.-p--2 Item 1
          .-text.-p--2 Item 2
          .-text.-p--2 Item 3
      <pre class="language-html" slot="code-htmlblueprint">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </ComponentExample>
    <SpecificBreakpoints />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecificBreakpoints from "./_specific-breakpoints.vue";

const types = ['start', 'end', 'center', 'baseline', 'stretch'];

@Component({
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
          label: 'HTML Blueprint'
        }
      ],
    };
  }
})
export default class AlignItems extends Vue {
  types = types

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.types.map(type => `<div class="-d--flex -align-items--${type}"></div>`).join('\n');
  }
}
</script>
