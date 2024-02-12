<template lang="pug">
  <ComponentExample title="Small" titleSize="h4" id="small_size" :tabs="exampleTabs" padding="-p--2">
    template(#example)
      chi-badge(size='sm', class='-m--1')= 'Badge'
      chi-badge(size='sm', class='-m--1', variant='flat')
        chi-icon(icon='atom')
        span Badge

    template(#code-webcomponent)
      .chi-tab__description
        | Set the attribute <code>size</code> to <code>sm</code> to render small badges.
      Copy(lang="html" :code="codeSnippets.webcomponent")

    template(#code-htmlblueprint)
      .chi-tab__description
        | Use the <code>-sm</code> modifier class to render small badges.
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SmallSize extends Vue {
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
    webcomponent: `<chi-badge size="sm">Badge</chi-badge>
<chi-badge size="sm" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,
    htmlblueprint: `<div class="chi-badge -sm">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -sm">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`,
  };
}
</script>
