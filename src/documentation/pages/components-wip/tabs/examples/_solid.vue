<template lang="pug">
  <ComponentExample title="Solid" id="solid" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    .-px--3.-pt--2.-bg--white(slot="example")
      chi-tabs(:active-tab='activeTab' id='example__solid' size='lg' solid @chiTabChange='chiTabChange')
      .-py--3
        div(v-for="tabContent in tabsContent" :class="['chi-tabs-panel', activeTab === tabContent.id ? '-active' : '']" role="tabpanel")
          .-text {{tabContent.text}}

    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <JSNeeded />
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TabsListInterface } from '~/models/models';

@Component({})

export default class Solid extends Vue {
  activeTab = 'tab-c'

  tabsContent = [
    {
      id: 'tab-a',
      text: 'Tab 1 content'
    },
    {
      id: 'tab-b',
      text: 'Tab 2 content'
    },
    {
      id: 'tab-c',
      text: 'Tab 3 content'
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

  codeSnippets = {
    webcomponent: `<chi-tabs active-tab="tab-a" id="example__solid" size="lg" solid></chi-tabs>

<div class="chi-tabs-panel -active" id="tab-a_content" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="tab-b_content" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="tab-c_content" role="tabpanel">Tab 3 content</div>

<script>
  const tabsElement = document.querySelector('#example__solid');

  if (tabsElement) {
    tabsElement.tabs = [
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
    ];

    function clearActiveTab () {
      const tabItems = document.querySelectorAll('.chi-tabs-panel');
      tabItems.forEach(tab => {
        tab.classList.remove('-active');
      });
    }

    tabsElement.addEventListener("chiTabChange", function(event) {
      const content = document.getElementById(event.detail.id + '_content');
      clearActiveTab();
      content.classList.add('-active');
    });
  }
<\/script>`,
    htmlblueprint: `<ul class="chi-tabs -solid -lg -border" id="example-horizontal-solid-bordered" role="tablist" aria-label="chi-tabs-horizontal">
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

<script>chi.tab(document.getElementById('example-horizontal-solid-bordered'));<\/script>`
  }

  chiTabChange(tab: any) {
    this.activeTab = tab.detail.id
  }

  mounted() {
    const solidElement = document.querySelector('#example__solid') as TabsListInterface

    if (solidElement) {
      solidElement.tabs = this.tabLinks
    }
  }
}
</script>
