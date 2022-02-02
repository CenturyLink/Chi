<template lang="pug">
  <ComponentExample title="Vertical" id="additional-vertical-lumen-centurylink" padding="-p--0" :tabs="exampleTabs">
    .-p--3.-pb--4(slot="example")
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--3
      ul.chi-tabs.-vertical.-sm
        li.-active
          a(href='#') Active Tab
          ul.chi-tabs__subtabs
            li.-active
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--3
      ul.chi-tabs.-vertical
        li.-active
          a(href='#') Active Tab
          ul.chi-tabs__subtabs
            li.-active
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--3
      ul.chi-tabs.-vertical.-lg
        li.-active
          a(href='#') Active Tab
          ul.chi-tabs__subtabs
            li.-active
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
        li
          a(href='#') Tab Link
        li
          a(href='#') Tab Link
      p.-text--bold.-mt--6 X-Large
      .chi-divider.-mb--3
      ul.chi-tabs.-vertical.-xl
        li.-active
          a(href='#') Active Tab
          ul.chi-tabs__subtabs
            li.-active
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
            li
              a(href='#') Subtab Link
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
        htmlblueprint: `<!-- Small -->
<ul class="chi-tabs -vertical -sm">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- Medium (Base) -->
<ul class="chi-tabs -vertical">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- Large -->
<ul class="chi-tabs -vertical -lg">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>

<!-- X-Large -->
<ul class="chi-tabs -vertical -xl">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
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
export default class AdditionalVerticalLumenCenturyLink extends Vue {}
</script>
