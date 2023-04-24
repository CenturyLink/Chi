<template lang="pug">
  <ComponentExample title="Horizontal" id="additional-sizes-horizontal"
    | :tabs="exampleTabs" additionalClasses="-pb--4">
    div(slot="example")
      p.-text--bold X-small
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-xs' size='xs')
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-sm' size='sm')
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-md')
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      chi-tabs(active-tab='tab-a' id='example__additional-sizes-horizontal-lg' size='lg')
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webComponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlBlueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TabsListInterface } from '~/models/models';

@Component({})

export default class AdditionalSizesHorizontal extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component'
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint'
    }
  ]

  tabLinks = [
    {
      label: 'Active Tab',
      id: 'tab-a'
    },
    {
      label: 'Tab Link',
      id: 'tab-b'
    },
    {
      label: 'Tab Link',
      id: 'tab-c'
    }
  ]

  codeSnippets = {
    webComponent: `<!-- X-small -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-xs" size="xs"></chi-tabs>

<!-- Small -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-sm" size="sm"></chi-tabs>

<!-- Medium (Base) -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-md"></chi-tabs>

<!-- Large -->
<chi-tabs active-tab="tab-a" id="example__additional-sizes-horizontal-lg" size="lg"></chi-tabs>`,
    htmlBlueprint: `<!-- X-small -->
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
</ul>`
  }

  mounted() {
    const elementXs = document.querySelector('#example__additional-sizes-horizontal-xs') as TabsListInterface;
    const elementSm = document.querySelector('#example__additional-sizes-horizontal-sm') as TabsListInterface;
    const elementMd = document.querySelector('#example__additional-sizes-horizontal-md') as TabsListInterface;
    const elementLg = document.querySelector('#example__additional-sizes-horizontal-lg') as TabsListInterface;

    if (elementXs) elementXs.tabs = this.tabLinks;
    if (elementSm) elementSm.tabs = this.tabLinks;
    if (elementMd) elementMd.tabs = this.tabLinks;
    if (elementLg) elementLg.tabs = this.tabLinks;
  }
}
</script>
