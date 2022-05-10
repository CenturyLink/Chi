<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Flag icons support the following sizes: <code>-xs</code>, <code>-sm</code>.
        | By default, flag icons render at 24x16px (<code>-sm</code>).
    div(slot="example")
      .-p--3
        .-d--flex.-align-items--end
          each size in ['xs', 'sm']
            div.-p--2.-m--1
              i(class=`chi-flag-icon icon-us -${size}`, aria-hidden='true')
              p.-text.-text--center.-mb--0= size
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- -xs : 18x12px -->
<i class="chi-flag-icon icon-us -xs" aria-hidden="true"></i>
<!-- -sm : 24x16px -->
<i class="chi-flag-icon icon-us -sm" aria-hidden="true"></i>`
      }
    };
  }
})
export default class Sizes extends Vue {}
</script>
