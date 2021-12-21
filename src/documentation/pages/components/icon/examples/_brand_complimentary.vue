<template lang="pug">
<ComponentExample title="Brand complimentary" titleSize="h4" padding="-p--0" id="brand-complimentary" :tabs="exampleTabs">
  p.-text(slot="example-description")
    | More icon colors that can be used to compliment the primary brand palette.
  .chi-grid.-no-gutter(slot="example")
    .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
      each color in ['icon--navy', 'icon--orange']
        div(class=`chi-icon -${color} -m--1`)
          svg
            use(xlink:href='#icon-atom')
  <Wrapper slot="code-webcomponent">
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
  </Wrapper>
  <Wrapper slot="code-htmlblueprint">
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </Wrapper>          
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
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-icon icon="atom" color="navy"></chi-icon>
<chi-icon icon="atom" color="orange"></chi-icon>`,
        htmlblueprint: `<i class="chi-icon icon-atom -icon--navy" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--orange" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class BrandComplimentary extends Vue {}
</script>
