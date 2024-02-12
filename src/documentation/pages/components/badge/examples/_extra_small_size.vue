<template lang="pug">
<ComponentExample title="Extra small" titleSize="h4" id="extrasmall_size" :tabs="exampleTabs" padding="-p--2">
  template(#example)
    chi-badge(size='xs', class='-m--1')= 'Badge'
    chi-badge(size='xs', class='-m--1', variant='flat')
      chi-icon(icon='atom')
      span Badge

  template(#code-webcomponent)
    .chi-tab__description
      | Set the attribute <code>size</code> to <code>xs</code> to render even smaller badges.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Use the <code>-xs</code> modifier class to render even smaller badges.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")

</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ExtraSmall extends Vue {
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
    webcomponent: `<chi-badge size="xs">Badge</chi-badge>
<chi-badge size="xs" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,
    htmlblueprint: `<div class="chi-badge -xs">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -xs">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`,
  };
}
</script>
