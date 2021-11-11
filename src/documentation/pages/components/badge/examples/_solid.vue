<template lang="pug">
  <ComponentExample title="Solid" id="solid" :tabs="exampleTabs" padding="-p--0">
    .chi-grid.-no-gutter(slot="example")
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
        .-p--2.-bg--black.-text--center
          chi-badge(class='-m--1', color='secondary')= 'Secondary'
          chi-badge(class='-m--1', color='light')= 'Light'
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | To display a badge, use the tag <code>&lt;chi-badge&gt;</code>.
        | A contextual color (e.g. <code>primary</code>) can be defined on the <code>color</code> attribute to provide alternate styling.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | To display a badge, use the class <code>chi-badge</code>.
        | A contextual class (e.g. <code>-primary</code>) can be applied to provide alternate styling.
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
<chi-badge>Base</chi-badge>
<chi-badge color="primary">Primary</chi-badge>
<chi-badge color="success">Success</chi-badge>
<chi-badge color="warning">Warning</chi-badge>
<chi-badge color="danger">Danger</chi-badge>
<chi-badge color="dark">Dark</chi-badge>
<chi-badge color="muted">Muted</chi-badge>

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

<!-- For dark backgrounds -->
<div class="chi-badge -secondary">
  <span>Secondary</span>
</div>
<div class="chi-badge -light">
  <span>Light</span>
</div>`
      }
    };
  }
})
export default class Solid extends Vue {}
</script>
