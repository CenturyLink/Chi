<template lang="pug">
  div
    <TitleAnchor title="Favicon" id="favicon" titleSize="h2" additionalClasses="-lh--4" />
    .chi-badge.-dark.-outline.-xs.-mr--1
      span Optional
    p.-text A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing <code>&lt;head&gt;</code> tag.
    <Copy id="stylesheet">
      <pre class="language-html" slot="code">
        <code v-highlight="stylesheet.htmlblueprint(version, theme)" lang='bash' class="html"></code>
      </pre>
    </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      stylesheet: {
        htmlblueprint: (version: string, theme: string) => `<link rel="icon" type="image/svg+xml" href="https://assets.ctl.io/chi/${version}/assets/themes/${theme}/images/favicon.svg" integrity="sha256-s8cfYbPxhcrLj+FL/OxALhZoDmlCwvX2/K3I0hq1PAs=" crossorigin="anonymous">
<link rel="alternate icon" href="https://assets.ctl.io/chi/${version}/assets/themes/${theme}/images/favicon.ico" integrity="sha256-EkKmbH+i/VIQAtUl7NF4bPVaaJZCeBc5xWx8LTcMJp0=" crossorigin="anonymous">`
      },
    }
  }
})
export default class Favicon extends Vue {
  get version() {
    return this.$store.state.themes.version;
  }

  get theme() {
    return this.$store.state.themes.theme;
  }
}
</script>
