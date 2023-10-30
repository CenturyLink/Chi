<template lang="pug">
  div
    <TitleAnchor title="Styling" id="styling" titleSize="h2" />
    p.-text Chi components will have scoped CSS, to prevent collisions when using in non-chi compatible environments.
    <Copy id="styling">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>
    p.-text
      | As of now, there is no support for per-version scoped CSS. This means that rules from two different
      | versions of chi components will collide, so it should be avoided.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: `@Component({
  tag: 'chi-icon',
  styleUrl: 'icon.scss',
  scoped: true
})`,
      }
    }
  }
})
export default class Styling extends Vue {}
</script>
