<template lang="pug">
  <ComponentExample title="Outline" id="outline" :tabs="exampleTabs" padding="-p--0">
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12
        .-p--2.-text--center
          chi-badge(class='-m--1', color='primary', variant='outline')= 'Primary'
          chi-badge(class='-m--1', color='success', variant='outline')= 'Success'
          chi-badge(class='-m--1', color='warning', variant='outline')= 'Warning'
          chi-badge(class='-m--1', color='danger', variant='outline')= 'Danger'
          chi-badge(class='-m--1', color='dark', variant='outline')= 'Dark'
          chi-badge(class='-m--1', color='muted', variant='outline')= 'Muted'
      .chi-col.-w--12
        .-p--2.-bg--black.-text--center
          chi-badge(class='-m--1', color='secondary', variant='outline')= 'Secondary'
          chi-badge(class='-m--1', color='light', variant='outline')= 'Light'

    .chi-tab__description(slot="code-webcomponent")
      | To remove solid background and keep its colored border, set the <code>variant</code> attribute value to <code>outline</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    .chi-tab__description(slot="code-htmlblueprint")
      | To remove solid background and keep its colored border, apply the class <code>-outline</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- For light backgrounds -->
<chi-badge color="primary" variant="outline">Primary</chi-badge>
<chi-badge color="success" variant="outline">Success</chi-badge>
<chi-badge color="warning" variant="outline">Warning</chi-badge>
<chi-badge color="danger" variant="outline">Danger</chi-badge>
<chi-badge color="dark" variant="outline">Dark</chi-badge>
<chi-badge color="muted" variant="outline">Muted</chi-badge>

<!-- For dark backgrounds -->
<chi-badge color="secondary" variant="outline">Secondary</chi-badge>
<chi-badge color="light" variant="outline">Light</chi-badge>`,
        htmlblueprint: `<!-- For light backgrounds -->
<div class="chi-badge -primary -outline">
  <span>Primary</span>
</div>
<div class="chi-badge -success -outline">
  <span>Success</span>
</div>
<div class="chi-badge -warning -outline">
  <span>Success</span>
</div>
<div class="chi-badge -danger -outline">
  <span>Danger</span>
</div>
<div class="chi-badge -dark -outline">
  <span>Dark</span>
</div>
<div class="chi-badge -muted -outline">
  <span>Muted</span>
</div>
<!-- For dark backgrounds -->
<div class="chi-badge -secondary -outline">
  <span>Secondary</span>
</div>
<div class="chi-badge -light -outline">
  <span>Light</span>
</div>`
      }
    };
  }
})
export default class Outline extends Vue {}
</script>
