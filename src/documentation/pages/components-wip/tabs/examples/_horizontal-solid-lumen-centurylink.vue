<template lang="pug">
  <ComponentExample title="Solid" titleSize="h4" :id="exampleId"  :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    div(slot="example").-bg--white.-px--3.-pt--2
      ul.chi-tabs.-solid.-lg.-border#example-portal-horizontal-solid-bordered(
        role="tablist"
        aria-label="chi-tabs-portal-horizontal")
        li(v-for="item in [1,2,3]" :class="selectedItemId === item ? '-active' : ''" @click.prevent="selectedItemId = item")
          a(
            :href="`#portal-horizontal-solid-bordered-${item}`"
            role="tab"
            :aria-selected="selectedItemId === item ? 'true' : 'false'"
            :aria-controls="`portal-horizontal-solid-bordered-${item}`"
            ) {{item === 1 ? 'Active Tab' : 'Tab Link'}}
      .-p--3
        .chi-tabs-panel(:class="selectedItemId === item ? '-active' : ''" v-for="item in [1,2,3]" :id="`portal-horizontal-solid-bordered-${item}`" :key="item" role="tabpanel")
          .-text Tab {{item}} content
    <Wrapper v-for="tab in exampleTabs" :slot="`code-${tab.id}`" :key="tab.id">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="tab.codeSnippet" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      tabs: [1,2,3],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
          codeSnippet: ''
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
          codeSnippet: ''
        },
      ],
      selectedItemId: 1,
      exampleId: 'horizontal-solid-lumen-centurylink'
    };
  },
})
export default class HorizontalSolidLumenCenturyLink extends Vue {
  _setCodeSnippets() {
    this.$data.exampleTabs[1].codeSnippet = `<ul class="chi-tabs -solid -lg -border" id="example-horizontal-solid-bordered" role="tablist" aria-label="chi-tabs-horizontal">
  <li class="-active">
    <a
      href="#horizontal-solid-bordered-1"
      role="tab"
      aria-selected="true"
      aria-controls="horizontal-solid-bordered-1">Active Tab</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-solid-bordered-2"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-solid-bordered-2">Tab Link</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-solid-bordered-3"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-solid-bordered-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-solid-bordered-1" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="horizontal-solid-bordered-2" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="horizontal-solid-bordered-3" role="tabpanel">Tab 3 content</div>

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`;
  }

  created() {
    this._setCodeSnippets();
  }
}
</script>