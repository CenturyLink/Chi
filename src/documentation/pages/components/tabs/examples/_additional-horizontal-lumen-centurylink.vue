<template lang="pug">
  <ComponentExample title="Horizontal" id="additional-horizontal-lumen-centurylink" :tabs="exampleTabs">
    .-pb--4(slot="example")
      p.-text--bold X-small
      .chi-divider.-mb--2
      ul.chi-tabs.-xs
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--2
      ul.chi-tabs.-sm
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      ul.chi-tabs
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      ul.chi-tabs.-lg
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
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
      tabLinks: ['Active Tab', 'Tab Link', 'Tab Link'],
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
export default class AdditionalHorizontalLumenCenturyLink extends Vue {}
</script>
