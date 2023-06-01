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
        .-p--2.-text--center
          chi-badge(class='-m--1', color='accent-1', variant='outline')= 'Accent-1'
          chi-badge(class='-m--1', color='accent-2', variant='outline')= 'Accent-2'
          chi-badge(class='-m--1', color='accent-3', variant='outline')= 'Accent-3'
          chi-badge(class='-m--1', color='accent-4', variant='outline')= 'Accent-4'
          chi-badge(class='-m--1', color='accent-5', variant='outline')= 'Accent-5'
      .chi-col.-w--12
        .-p--2.-bg--black.-text--center
          chi-badge(class='-m--1', color='secondary', variant='outline')= 'Secondary'
          chi-badge(class='-m--1', color='light', variant='outline')= 'Light'

    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | To remove solid background and keep its colored border, set the <code>variant</code> attribute value to <code>outline</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | To remove solid background and keep its colored border, apply the class <code>-outline</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
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

<chi-badge color="accent-1" variant="outline">Accent-1</chi-badge>
<chi-badge color="accent-2" variant="outline">Accent-2</chi-badge>
<chi-badge color="accent-3" variant="outline">Accent-3</chi-badge>
<chi-badge color="accent-4" variant="outline">Accent-4</chi-badge>
<chi-badge color="accent-5" variant="outline">Accent-5</chi-badge>

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

<div class="chi-badge -accent-1 -outline">
  <span>Accent-1</span>
</div>
<div class="chi-badge -accent-2 -outline">
  <span>Accent-2</span>
</div>
<div class="chi-badge -accent-3 -outline">
  <span>Accent-3</span>
</div>
<div class="chi-badge -accent-4 -outline">
  <span>Accent-4</span>
</div>
<div class="chi-badge -accent-5 -outline">
  <span>Accent-5</span>
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
