<template lang="pug">
  div
    <TitleAnchor title="CSS" id="css" titleSize="h2" additionalClasses="-lh--4" />
    p.-text Add Chi CSS by copying and pasting the stylesheet below into the header of your project. Chi's stylesheet is hosted on Lumen's Assets Server which is a highly available and performant option for loading assets into your Lumen project.
    <Copy id="stylesheet" :code="stylesheet.htmlblueprint(version)" lang="html"/>

    p.-text Next, add the <code>chi</code> CSS class to the <code>&lt;html&gt;</code> tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.
    <Copy id="ts-class" :code="chiClass.htmlblueprint" lang="html" />

    p.-text  At this point you can now start using Chi. The documentation includes a wealth of templates and code samples to get you started.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class CSS extends Vue {
  version = useChiVersion();
  stylesheet = {
    htmlblueprint: (version: string) =>
      `<link rel="stylesheet" href="https://lib.lumen.com/chi/${version}/chi.css" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`,
  };
  chiClass = {
    htmlblueprint: `<html class="chi">
  ...
</html>`,
  };
}
</script>
