<template lang="pug">
<ComponentExample title="Solid" id="solid" :tabs="exampleTabs" padding="-p--0">
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12
        .-p--2.-text--center
          chi-badge(class='-m--1')= 'Base'
          chi-badge(class='-m--1', color='primary')= 'Primary'
          chi-badge(class='-m--1', color='success')= 'Success'
          chi-badge(class='-m--1', color='warning')= 'Warning'
          chi-badge(class='-m--1', color='danger')= 'Danger'
          chi-badge(class='-m--1', color='dark')= 'Dark'
          chi-badge(class='-m--1', color='muted')= 'Muted'
      .chi-col.-w--12
        .-p--2.-text--center
          chi-badge(class='-m--1', color='accent-1')= 'Accent-1'
          chi-badge(class='-m--1', color='accent-2')= 'Accent-2'
          chi-badge(class='-m--1', color='accent-3')= 'Accent-3'
          chi-badge(class='-m--1', color='accent-4')= 'Accent-4'
          chi-badge(class='-m--1', color='accent-5')= 'Accent-5'
      .chi-col.-w--12
        .-p--2.-bg--black.-text--center
          chi-badge(class='-m--1', color='secondary')= 'Secondary'
          chi-badge(class='-m--1', color='light')= 'Light'
  template(#code-webcomponent)
    .chi-tab__description
      | To display a badge, use the tag <code>&lt;chi-badge&gt;</code>.
      | A contextual color (e.g. <code>primary</code>) can be defined on the <code>color</code> attribute to provide alternate styling.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | To display a badge, use the class <code>chi-badge</code>.
      | A contextual class (e.g. <code>-primary</code>) can be applied to provide alternate styling.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")

</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Solid extends Vue {
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
<chi-badge>Base</chi-badge>
<chi-badge color="primary">Primary</chi-badge>
<chi-badge color="success">Success</chi-badge>
<chi-badge color="warning">Warning</chi-badge>
<chi-badge color="danger">Danger</chi-badge>
<chi-badge color="dark">Dark</chi-badge>
<chi-badge color="muted">Muted</chi-badge>

<chi-badge color="accent-1">Accent-1</chi-badge>
<chi-badge color="accent-2">Accent-2</chi-badge>
<chi-badge color="accent-3">Accent-3</chi-badge>
<chi-badge color="accent-4">Accent-4</chi-badge>
<chi-badge color="accent-5">Accent-5</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary">Secondary</chi-badge>
<chi-badge color="light">Light</chi-badge>`,
    htmlblueprint: `<!-- For light backgrounds -->
<div class="chi-badge">
  <span>Base</span>
</div>
<div class="chi-badge -primary">
  <span>Primary</span>
</div>
<div class="chi-badge -success">
  <span>Success</span>
</div>
<div class="chi-badge -warning">
  <span>Warning</span>
</div>
<div class="chi-badge -danger">
  <span>Danger</span>
</div>
<div class="chi-badge -dark">
  <span>Dark</span>
</div>
<div class="chi-badge -muted">
  <span>Muted</span>
</div>

<div class="chi-badge -accent-1">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5">
  <span>Accent-5</span>
</div>

<!-- For dark backgrounds -->
<div class="chi-badge -secondary">
  <span>Secondary</span>
</div>
<div class="chi-badge -light">
  <span>Light</span>
</div>`,
  };
}
</script>
