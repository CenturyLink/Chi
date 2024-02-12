<template lang="pug">
<ComponentExample title="Flat" id="flat" :tabs="exampleTabs" padding="-p--0">
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12
        .-p--2.-text--center
          chi-badge(class='-m--1', color='primary', variant='flat')= 'Primary'
          chi-badge(class='-m--1', color='success', variant='flat')= 'Success'
          chi-badge(class='-m--1', color='warning', variant='flat')= 'Warning'
          chi-badge(class='-m--1', color='danger', variant='flat')= 'Danger'
          chi-badge(class='-m--1', color='dark', variant='flat')= 'Dark'
          chi-badge(class='-m--1', color='muted', variant='flat')= 'Muted'
      .chi-col.-w--12
        .-p--2.-text--center
          chi-badge(class='-m--1', color='accent-1', variant='flat')= 'Accent-1'
          chi-badge(class='-m--1', color='accent-2', variant='flat')= 'Accent-2'
          chi-badge(class='-m--1', color='accent-3', variant='flat')= 'Accent-3'
          chi-badge(class='-m--1', color='accent-4', variant='flat')= 'Accent-4'
          chi-badge(class='-m--1', color='accent-5', variant='flat')= 'Accent-5'
      .chi-col.-w--12
        .-p--2.-bg--black.-text--center
          chi-badge(class='-m--1', color='secondary', variant='flat')= 'Secondary'
          chi-badge(class='-m--1', color='light', variant='flat')= 'Light'
  template(#code-webcomponent)
    .chi-tab__description
      | To render a badge without background and border, set the <code>variant</code> attribute value to <code>flat</code>.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | To render a badge without background and border, apply the class <code>-flat</code>.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Flat extends Vue {
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
    webcomponent: `<!-- For light backgrounds -->
<chi-badge color="primary" variant="flat">Primary</chi-badge>
<chi-badge color="success" variant="flat">Success</chi-badge>
<chi-badge color="warning" variant="flat">Warning</chi-badge>
<chi-badge color="danger" variant="flat">Danger</chi-badge>
<chi-badge color="dark" variant="flat">Dark</chi-badge>
<chi-badge color="muted" variant="flat">Muted</chi-badge>

<chi-badge color="accent-1" variant="flat">Accent-1</chi-badge>
<chi-badge color="accent-2" variant="flat">Accent-2</chi-badge>
<chi-badge color="accent-3" variant="flat">Accent-3</chi-badge>
<chi-badge color="accent-4" variant="flat">Accent-4</chi-badge>
<chi-badge color="accent-5" variant="flat">Accent-5</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary" variant="flat">Secondary</chi-badge>
<chi-badge color="light" variant="flat">Light</chi-badge>`,
    htmlblueprint: `<!-- For light backgrounds -->
<div class="chi-badge -primary -flat">
  <span>Primary</span>
</div>
<div class="chi-badge -success -flat">
  <span>Success</span>
</div>
<div class="chi-badge -warning -flat">
  <span>Warning</span>
</div>
<div class="chi-badge -danger -flat">
  <span>Danger</span>
</div>
<div class="chi-badge -dark -flat">
  <span>Dark</span>
</div>
<div class="chi-badge -muted -flat">
  <span>Muted</span>
</div>

<div class="chi-badge -accent-1 -flat">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2 -flat">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3 -flat">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4 -flat">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5 -flat">
  <span>Accent-5</span>
</div>

<!-- For dark backgrounds -->
<div class="chi-badge -secondary -flat">
  <span>Secondary</span>
</div>
<div class="chi-badge -light -flat">
  <span>Light</span>
</div>`,
  };
}
</script>
