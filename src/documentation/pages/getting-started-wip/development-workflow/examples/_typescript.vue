<template lang="pug">
<TitleAnchor title="TypeScript" id="typescript" titleSize="h2" />
p.-text
  | Follow <a target="_blank" href="https://github.com/ionic-team/tslint-ionic-rules/blob/master/tslint.js" rel="noopener">tslint-ionic-rules</a>.
  | This file is located in /src/custom-elements/ and has to be configured in your editor.

p.-text Variable decorators should be inlined.

Copy(id="variable" :code="codeSnippets.htmlblueprint" lang="typescript")

p.-text Method decorator should be multi-line

Copy(id="method" :code="codeSnippets.htmlblueprint1" lang="typescript")

p.-text Use private variables and methods as much as possible; they are useful to detect dead code and enforce encapsulation. Note that this is a feature which TypeScript provides to help hardening your code, but using private, public or protected does not make a difference in the actual JavaScript output.

p.-text Code with Method/Prop/Event/Component decorators should have <code>jsdocs</code>; this allows documentation generation and for a better user experience in an editor that has TypeScript intellisense. <em>Stencil auto-generated documentation will be included in the Chi documentation pages. </em>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Typescript extends Vue {
  codeSnippets = {
    htmlblueprint: `@Prop() name: string;
@Element() el: HTMLElement;`,
    htmlblueprint1: `@Listen('click')
onClick() {
  ...
}`,
  };
}
</script>
