<template lang="pug">
  div
    <TitleAnchor title="Rules" id="rules" titleSize="h3" />
    ul.-text
      li Components MIGHT have a *.scss file that will import the necessary files from the project
      li All rules but font-face ones MUST be wrapped inside a <code>:host</code> rule to override a possible Chi default stylesheet
      li The default display for Custom Elements is <code>inline</code> so the developer MUST take care of this.

    <Copy id="rules">
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
        htmlblueprint: `@import 'components/icons/webfont-font-face';
:host(chi-icon) {
@import '../../global/styles/common';
@extend %root-typography;
@import 'components/icons/icons';
@import 'components/icons/webfont-icons';

display: inline-block;
}`
      }
    }
  }
})
export default class Rules extends Vue {}
</script>
