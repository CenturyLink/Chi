<template lang="pug">
  div
    <TitleAnchor title="Component (TS class)" id="component-ts-class" titleSize="h3" />
    p.-text The name of the ES6 class of the component SHOULD NOT have a prefix since classes are scoped. There is no risk of collision.

    <Copy id="ts-class">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: `@Component({
  tag: 'chi-button'
})
export class Button { ... }

@Component({
  tag: 'chi-icon'
})
export class Icon { ... }`
      }
    }
  }
})
export default class ComponentTsClass extends Vue {}
</script>
