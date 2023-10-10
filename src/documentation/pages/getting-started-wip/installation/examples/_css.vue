<template lang="pug">
  div
    <TitleAnchor title="CSS" id="css" titleSize="h2" />
    p.-text Add Chi CSS by copying and pasting the stylesheet below into the header of your project. Chi's stylesheet is hosted on Lumen's Assets Server which is a highly available and performant option for loading assets into your Lumen project.
    <Copy id="stylesheet">
      <pre class="language-html" slot="code">
        <code v-highlight="stylesheet.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text Next, add the <code>chi</code> CSS class to the <code>&lt;html&gt;</code> tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.
    <Copy id="ts-class">
      <pre class="language-html" slot="code">
        <code v-highlight="chiClass.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      stylesheet: {
        htmlblueprint: `<link rel="stylesheet" href="https://assets.ctl.io/chi/5.39.0/chi.css" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`
      },
      chiClass: {
        htmlblueprint: `<html class="chi">
  ...
</html>`
      },
    }
  }
})
export default class CSS extends Vue {}
</script>
