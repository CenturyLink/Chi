<template lang="pug">
  <ComponentExample title="Flat" id="flat_lumen_centurylink" :tabs="exampleTabs" :padding="'-p--0'">
    div(slot="example")
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
          .-p--2.-bg--black.-text--center
            chi-badge(class='-m--1', color='secondary', variant='flat')= 'Secondary'
            chi-badge(class='-m--1', color='light', variant='flat')= 'Light'
    div(slot="code-webcomponent").chi-tab__description
      | To render a badge without background and border, set the <code>variant</code> attribute value to <code>flat</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint").chi-tab__description
      | To render a badge without background and border, apply the class <code>-flat</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

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
<chi-badge color="primary" variant="flat">Primary</chi-badge>
<chi-badge color="success" variant="flat">Success</chi-badge>
<chi-badge color="warning" variant="flat">Warning</chi-badge>
<chi-badge color="danger" variant="flat">Danger</chi-badge>
<chi-badge color="dark" variant="flat">Dark</chi-badge>
<chi-badge color="muted" variant="flat">Muted</chi-badge>

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

<!-- For dark backgrounds -->
<div class="chi-badge -secondary -flat">
  <span>Secondary</span>
</div>
<div class="chi-badge -light -flat">
  <span>Light</span>
</div>`
      }
    };
  }
})
export default class Flat extends Vue {}
</script>
