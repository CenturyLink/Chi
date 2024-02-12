<template lang="pug">
  <ComponentExample title="Text transform" id="text_transform" :tabs="exampleTabs" padding="-p--2">
    template(#example)
      chi-badge(text-transform='uppercase', class='-m--1')= 'Badge'
      chi-badge(text-transform='lowercase', class='-m--1')= 'BADGE'
      chi-badge(text-transform='capitalized', class='-m--1')= 'badge'

    template(#code-webcomponent)
      .chi-tab__description
        | Set the <code>text-transform</code> attribute to <code>uppercase</code> to render badges in uppercase,
        | <code>lowercase</code> to render badges in lowercase and <code>capitalized</code> to render badges as capitalized.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      .chi-tab__description
        | Use the <code>-text--uppercase</code> text utility class to render badges in all uppercase. <code>-text--lowercase</code> and <code>-text--capitalized</code> are also supported.
      Copy(lang="html" :code="codeSnippets.htmlblueprint")

  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class TextTransform extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<chi-badge text-transform="uppercase">Badge</chi-badge>
<chi-badge text-transform="lowercase">BADGE</chi-badge>
<chi-badge text-transform="capitalized">badge</chi-badge>`,
    htmlblueprint: `<div class="chi-badge -text--uppercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--lowercase">
  <span>Badge</span>
</div>
<div class="chi-badge -text--capitalized">
  <span>Badge</span>
</div>`,
  };
}
</script>
