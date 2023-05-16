<template lang="pug">
    <ComponentExample title="Default" titleSize="h4" id="default" padding="-p--0" :tabs="exampleTabs">
    <Wrapper slot="example">
      .chi-grid.-text.-no-gutter.-text--center
        .-p--5.-m--2.-s--0(style="background:#FFFFFF;") -s--0
        .-p--5.-m--2.-s--1(style="background:#FFFFFF;") -s--1
        .-p--5.-m--2.-s--2(style="background:#FFFFFF;") -s--2
        .-p--5.-m--2.-s--3(style="background:#FFFFFF;") -s--3
        .-p--5.-m--2.-s--4(style="background:#FFFFFF;") -s--4
        .-p--5.-m--2.-s--5(style="background:#FFFFFF;") -s--5
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
        htmlblueprint: `<div class="-s--0"></div>
<div class="-s--1"></div>
<div class="-s--2"></div>
<div class="-s--3"></div>
<div class="-s--4"></div>
<div class="-s--5"></div>`,
      },
    };
  }
})
export default class Default extends Vue {}
</script>
