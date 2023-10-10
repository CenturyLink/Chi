<template lang="pug">
  div
    <TitleAnchor title="Favicon" id="favicon" titleSize="h2" additionalClasses="-mb--0" />
    .-lh--3
      .chi-badge.-dark.-outline.-xs.-mr--1
        span Optional
    p.-text A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing <code>&lt;head&gt;</code> tag.
    <Copy id="stylesheet">
      <pre class="language-html" slot="code">
        <code v-highlight="stylesheet.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      stylesheet: {
        htmlblueprint: `<link rel="icon" type="image/svg+xml" href="https://assets.ctl.io/chi/5.37.0/assets/themes/lumen/images/favicon.svg" integrity="sha256-s8cfYbPxhcrLj+FL/OxALhZoDmlCwvX2/K3I0hq1PAs=" crossorigin="anonymous">
<link rel="alternate icon" href="https://assets.ctl.io/chi/5.37.0/assets/themes/lumen/images/favicon.ico" integrity="sha256-EkKmbH+i/VIQAtUl7NF4bPVaaJZCeBc5xWx8LTcMJp0=" crossorigin="anonymous">`
      },
    }
  }
})
export default class Favicon extends Vue {}
</script>
