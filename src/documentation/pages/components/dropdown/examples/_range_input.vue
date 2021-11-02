<template lang="pug">
  <ComponentExample title="Range Input" id="range_input" :tabs="exampleTabs" backgroundColor="#eee">
    div(slot="example")
      .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4
        .chi-dropdown__menu.-active
          .chi-dropdown__menu-item
            span.-text.-mr--2 200GB
            input.chi-input(type="range", aria-label="Range description")
            span.-text.-ml--2 5TB
          .chi-divider
          legend.chi-dropdown__menu-item Select range
          .chi-dropdown__menu-item
            input.chi-input(type="range", aria-label="Range description")
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
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-item">
    <span class="-text -mr--2">200GB</span>
    <input class="chi-input" type="range" aria-label="Range description">
    <span class="-text -ml--2">5TB</span>
  </div>
  <div class="chi-divider"></div>
  <legend class="chi-dropdown__menu-item">Select range</legend>
  <div class="chi-dropdown__menu-item">
    <input class="chi-input" type="range" aria-label="Range description">
  </div>
</div>`
      }
    };
  }
})
export default class RangeInput extends Vue {
  mounted() {}
}
</script>
