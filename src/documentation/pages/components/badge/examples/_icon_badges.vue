<template lang="pug">
<ComponentExample title="Icon badges" id="icon_badges" :tabs="exampleTabs" padding="-p--2">
  template(#example-description)
  p.-text Icons can be placed before, after, or on both sides of text.
  template(#example)
    chi-badge(class='-m--1')
      chi-icon(icon='plus', size='xs')
      span Badge
    chi-badge(class='-m--1')
      span Badge
      chi-icon(icon='x', size='xs')
    chi-badge(class='-m--1', variant='flat', color='success')
      chi-icon(icon='circle')
      span Active
    chi-badge(class='-m--1', variant='flat', color='warning')
      chi-icon(icon='circle-clock')
      span Away
    chi-badge(class='-m--1', variant='flat', color='danger')
      chi-icon(icon='circle-minus')
      span Do not Disturb
    chi-badge(class='-m--1', variant='flat', color='muted')
      chi-icon(icon='circle')
      span Offline

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class IconBadges extends Vue {
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
    webcomponent: `<chi-badge>
  <chi-icon icon="plus" size="xs"></chi-icon>
  <span>Badge</span>
</chi-badge>
<chi-badge>
  <span>Badge</span>
  <chi-icon icon="x" size="xs"></chi-icon>
</chi-badge>
<chi-badge variant="flat" color="success">
  <chi-icon icon="circle"></chi-icon>
  <span>Active</span>
</chi-badge>
<chi-badge variant="flat" color="warning">
  <chi-icon icon="circle-clock"></chi-icon>
  <span>Away</span>
</chi-badge>
<chi-badge variant="flat" color="danger">
  <chi-icon icon="circle-minus"></chi-icon>
  <span>Do not Disturb</span>
</chi-badge>
<chi-badge variant="flat" color="muted">
  <chi-icon icon="circle"></chi-icon>
  <span>Offline</span>
</chi-badge>`,
    htmlblueprint: `<div class="chi-badge">
  <div class="chi-badge__content">
    <i class="chi-icon -xs icon-plus" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>
<div class="chi-badge">
  <div class="chi-badge__content">
    <span>Badge</span>
    <i class="chi-icon -xs icon-x" aria-hidden="true"></i>
  </div>
</div>
<div class="chi-badge -flat -success">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle" aria-hidden="true"></i>
    <span>Active</span>
  </div>
</div>
<div class="chi-badge -flat -warning">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle-clock" aria-hidden="true"></i>
    <span>Away</span>
  </div>
</div>
<div class="chi-badge -flat -danger">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle-minus" aria-hidden="true"></i>
    <span>Do not disturb</span>
  </div>
</div>
<div class="chi-badge -flat -muted">
  <div class="chi-badge__content">
    <i class="chi-icon icon-circle" aria-hidden="true"></i>
    <span>Offline</span>
  </div>
</div>`,
  };
}
</script>
