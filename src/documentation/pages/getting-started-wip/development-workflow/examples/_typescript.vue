<template lang="pug">
  div
    <TitleAnchor title="TypeScript" id="typescript" titleSize="h2" />
    p.-text
      | Follow <a target="_blank" href="https://github.com/ionic-team/tslint-ionic-rules/blob/master/tslint.js" rel="noopener">tslint-ionic-rules</a>.
      | This file is located in /src/custom-elements/ and has to be configured in your editor.

    p.-text Variable decorators should be inlined.

    <Copy id="variable">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text Method decorator should be multi-line

    <Copy id="method">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint1" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text Use private variables and methods as much as possible; they are useful to detect dead code and enforce encapsulation. Note that this is a feature which TypeScript provides to help hardening your code, but using private, public or protected does not make a difference in the actual JavaScript output.

    p.-text Code with Method/Prop/Event/Component decorators should have <code>jsdocs</code>; this allows documentation generation and for a better user experience in an editor that has TypeScript intellisense. <em>Stencil auto-generated documentation will be included in the Chi documentation pages. </em>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: `@Prop() name: string;
@Element() el: HTMLElement;`,
        htmlblueprint1: `@Listen('click')
onClick() {
  ...
}`
      }
    }
  }
})
export default class Typescript extends Vue {}
</script>
