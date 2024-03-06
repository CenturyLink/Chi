<template lang="pug">
<ComponentExample title="Examples" id="basis-examples" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example)
    .-p--3
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis--25 -flex-basis--25
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis--50 -flex-basis--50
      .-mb--2.-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis-md--75 -flex-basis-md--75
      .-d--flex.-show--example.-bg--grey-10
        .-text.-p--2.-flex-basis-xl--50 -flex-basis-xl--50
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

const htmlSource = [
  {
    comment: '<!-- flex-basis 25% on all breakpoints -->',
    classSuffix: '-25',
  },
  {
    comment: '<!-- flex-basis 50% on all breakpoints -->',
    classSuffix: '-50',
  },
  {
    comment: '<!-- flex-basis 75% from md -->',
    classSuffix: 'md--75',
  },
  {
    comment: '<!-- flex-basis 50% from xl -->',
    classSuffix: 'xl--50',
  },
];
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
export default class Examples extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return htmlSource
      .map(
        ({ comment, classSuffix }) => `${comment}
<div class="-d--flex">
  <div class="-flex-basis-${classSuffix}"></div>
</div>`
      )
      .join('\n');
  }
}
</script>
