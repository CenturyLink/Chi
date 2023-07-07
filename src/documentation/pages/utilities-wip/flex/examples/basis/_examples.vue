<template lang="pug">
  <ComponentExample title="Examples" id="basis-examples" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    div.-p--3(slot="example")
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
      codeSnippets: {
        htmlblueprint: `<!-- flex-basis 25% on all breakpoints -->
<div class="-d--flex">
  <div class="-flex-basis--25"></div>
</div>
<!-- flex-basis 50% on all breakpoints -->
<div class="-d--flex">
  <div class="-flex-basis--50"></div>
</div>
<!-- flex-basis 75% from md -->
<div class="-d--flex">
  <div class="-flex-basis-md--75"></div>
</div>
<!-- flex-basis 50% from xl -->
<div class="-d--flex">
  <div class="-flex-basis-xl--50"></div>
</div>`
      }
    };
  }
})
export default class Examples extends Vue {}
</script>
