<template lang="pug">
  <ComponentExample title="Stretch (Browser default)" id="stretch" titleSize="h4" padding="-p--3" :tabs="exampleTabs" :showSnippetTabs="false">
    .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example" style="height:7rem;")
      .-text.-p--2 Item
      .-text.-p--2.-align-self--stretch Aligned Item
      .-text.-p--2 Item
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const htmlSource = [
  {
    value: "Item",
  },
  {
    className: "-align-self--stretch",
    value: "Aligned Item",
  },
  {
    value: "Item",
  },
];

@Component({
  data: () => {
    return {
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
export default class Stretch extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    const content = htmlSource.map(({ value, className }) => `  <div${className ? ` class="${className}"` : ""}>${value}</div>`).join('\n');

    return (
      `<div class="-d--flex">
${content}
</div>`)
  }
}
</script>
