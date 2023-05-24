<template lang="pug">
    <ComponentExample title="Responsive" titleSize="h4" id="responsive" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
      p.-text(slot="example-description")
        | Change viewport size to view the effect. You can do it by resizing your browser window.
      <Wrapper slot="example">
        .chi-grid.-text.-no-gutter.-text--center.-p--2(style="background:#F5F5F5;")
          .-p--5.-m--2.-s--5.-s-md--0(style="background:#FFFFFF;") -s--5 -s-md--0
          .-p--5.-m--2.-s-md--5.-s-xl--0(style="background:#FFFFFF;") -s-md--5 -s-xl--0
          .-p--5.-m--2.-s-xl--5(style="background:#FFFFFF;") -s-xl--5
      </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
        htmlblueprint: `<div class="-s--5 -s-md--0"></div>
<div class="-s-md--5 -s-xl--0"></div>
<div class="-s-xl--5"></div>`,
      },
    };
  }
})
export default class Responsive extends Vue {}
</script>
