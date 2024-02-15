<template lang="pug">
  div
    <TitleAnchor title="Favicon" id="favicon" titleSize="h2" additionalClasses="-lh--4" />
    .chi-badge.-dark.-outline.-xs.-mr--1
      span Optional
    p.-text A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing <code>&lt;head&gt;</code> tag.
    <Copy id="stylesheet" lang="html" :code="stylesheet.htmlblueprint(version, theme)" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Favicon extends Vue {
  stylesheet = {
    htmlblueprint: (
      version: string,
      theme: string
    ) => `<link rel="icon" type="image/svg+xml" href="https://lib.lumen.com/chi/${version}/assets/themes/${theme}/images/favicon.svg" integrity="sha256-s8cfYbPxhcrLj+FL/OxALhZoDmlCwvX2/K3I0hq1PAs=" crossorigin="anonymous">
<link rel="alternate icon" href="https://lib.lumen.com/chi/${version}/assets/themes/${theme}/images/favicon.ico" integrity="sha256-EkKmbH+i/VIQAtUl7NF4bPVaaJZCeBc5xWx8LTcMJp0=" crossorigin="anonymous">`,
  };

  get version() {
    return useChiVersion().value;
  }

  get theme() {
    return useSelectedTheme().value;
  }
}
</script>
