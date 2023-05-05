<template lang="pug">
  <ComponentExample title="Border Sizes" id="border-sizes" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Control an element's border size by adjusting the size from <code>0</code> - <code>4</code>.
    <Wrapper slot="example">
      .-mb--3
        .-p--2
          .chi-grid.-text.-no-gutter.-text--center
            .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="index in 5" :key="index")
              .-m--1.-p--1.-py--5.-b--0.-bg--grey-10(:class="`-b--${index - 1}`") -b--{{ index - 1 }}
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
        htmlblueprint: `<div class="-b--0"></div>
<div class="-b--1"></div>
<div class="-b--2"></div>
<div class="-b--3"></div>
<div class="-b--4"></div>`
      }
    };
  }
})
export default class BorderSizes extends Vue {}
</script>
