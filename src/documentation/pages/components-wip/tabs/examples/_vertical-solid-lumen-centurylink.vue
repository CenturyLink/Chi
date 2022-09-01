<template lang="pug">
  <ComponentExample title="Solid" titleSize="h4" :id="exampleId"  :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(slot="example")
      .chi-grid.-no-gutter.-bg--white
        .chi-col.-w--6.-w-sm--4.-p--3
          ul.chi-tabs.-vertical.-solid.-xl.-animated#example-portal-vertical-solid(
            role="tablist"
            aria-label="chi-tabs-portal-vertical-solid")
            li(v-for="item in [1,2,3]" :class="selectedItemId === item ? '-active' : ''" @click.prevent="selectedItemId = item")
              a(
                :href="`#portal-vertical-solid-${item}`"
                role="tab"
                :aria-selected="selectedItemId === item ? 'true' : 'false'"
                :aria-controls="`portal-vertical-solid-${item}`"
                ) {{item === 1 ? 'Active Tab' : 'Tab Link'}}
        .chi-col.-p--3
            .chi-tabs-panel(:class="selectedItemId === item ? '-active' : ''" v-for="item in [1,2,3]" :id="`portal-vertical-solid-${item}`" :key="item" role="tabpanel")
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
export default class VerticalSolidLumenCenturyLink extends Vue {
  _setCodeSnippets() {
    this.$data.exampleTabs[1].codeSnippet = `<ul class="chi-tabs -vertical -solid -xl" id="example-portal-vertical-solid" role="tablist" aria-label="chi-tabs-portal-vertical-solid">
  <li class="-active">
    <a
      href="#portal-vertical-solid-1"
      role="tab"
      aria-selected="true"
      aria-controls="portal-vertical-solid-1">Active Tab</a>
  </li>
  <li>
    <a
      href="#portal-vertical-solid-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="portal-vertical-solid-2">Tab Link</a>
  </li>
  <li>
    <a
      href="#portal-vertical-solid-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="portal-vertical-solid-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="portal-vertical-solid-1" role="tabpanel">
  Tab 1 content
</div>
<div class="chi-tabs-panel" id="portal-vertical-solid-2" role="tabpanel">
  Tab 2 content
</div>
<div class="chi-tabs-panel" id="portal-vertical-solid-3" role="tabpanel">
  Tab 3 content
</div>

<script>chi.tab(document.getElementById('example-portal-vertical-solid'));<\/script>`;
  }

  created() {
    this._setCodeSnippets();
  }
}
</script>