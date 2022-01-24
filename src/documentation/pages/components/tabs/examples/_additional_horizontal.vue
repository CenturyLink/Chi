<template lang="pug">
  <ComponentExample title="Horizontal" id="additional-horizontal" padding="-p--0" :tabs="exampleTabs">
    .-p--3.-pb--4(slot="example")
      p.-text--bold X-small
      .chi-divider.-mb--2
      ul.chi-tabs.-xs
        li.-active
          a(href='#') Active Tab
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--2
      ul.chi-tabs.-sm
        li.-active
          a(href='#') Active Tab
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      ul.chi-tabs
        li.-active
          a(href='#') Active Tab
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      ul.chi-tabs.-lg
        li.-active
          a(href='#') Active Tab
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- X-small -->
<ul class="chi-tabs -xs">
  <li class="-active">
    <a href="#">Active Tab</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- Small -->
<ul class="chi-tabs -sm">
  <li class="-active">
    <a href="#">Active Tab</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- Medium (Base) -->
<ul class="chi-tabs">
  <li class="-active">
    <a href="#">Active Tab</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- Large -->
<ul class="chi-tabs -lg">
  <li class="-active">
    <a href="#">Active Tab</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>`,
      },
    };
  },
})
export default class AdditionalHorizontal extends Vue {}
</script>
