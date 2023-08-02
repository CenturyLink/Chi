<template lang="pug">
  <ComponentExample title="Examples" id="basis-examples" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    .-p--3(slot="example")
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis--25 -flex-basis--25
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis--50 -flex-basis--50
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis-md--75 -flex-basis-md--75
      .-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis-xl--50 -flex-basis-xl--50
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const htmlSource = [
  {
    comment: "<!-- flex-basis 25% on all breakpoints -->",
    classSuffix: "-25",
  },
  {
    comment: "<!-- flex-basis 50% on all breakpoints -->",
    classSuffix: "-50",
  },
  {
    comment: "<!-- flex-basis 75% from md -->",
    classSuffix: "md--75",
  },
  {
    comment: "<!-- flex-basis 50% from xl -->",
    classSuffix: "xl--50",
  },
]
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
export default class Examples extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return htmlSource.map(({ comment, classSuffix }) => `${comment}
<div class="-d--flex">
  <div class="-flex-basis-${classSuffix}"></div>
</div>`).join('\n');
  }
}
</script>
