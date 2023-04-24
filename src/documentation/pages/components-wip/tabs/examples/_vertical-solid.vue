<template lang="pug">
  <ComponentExample title="Solid" id="vertical-solid" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    .-bg--white(slot="example")
      .chi-grid.-no-gutter.-bg--white
        .chi-col.-w--6.-w-sm--4.-p--3
          chi-tabs(:active-tab='activeTab' id='example__vertical-solid' size='xl' vertical solid @chiTabChange='chiTabChange')
        .chi-col.-p--3
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

export default class VerticalSolid extends Vue {
  activeTab = 'tab-a'

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
    webcomponent: `<chi-tabs active-tab="tab-a" id="example__vertical-solid" size="xl" vertical solid></chi-tabs>

<div class="chi-tabs-panel -active" id="tab-a_content" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="tab-b_content" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="tab-c_content" role="tabpanel">Tab 3 content</div>

<script>
  const tabsElement = document.querySelector('#example__vertical-solid');

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
    htmlblueprint: `<ul class="chi-tabs -vertical -solid -xl" id="example-vertical-solid" role="tablist" aria-label="chi-tabs-portal-vertical-solid">
  <li class="-active">
    <a
      href="#vertical-solid-1"
      role="tab"
      aria-selected="true"
      aria-controls="vertical-solid-1">Active Tab</a>
  </li>
  <li>
    <a
      href="#vertical-solid-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-solid-2">Tab Link</a>
  </li>
  <li>
    <a
      href="#vertical-solid-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-solid-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="vertical-solid-1" role="tabpanel">
  Tab 1 content
</div>
<div class="chi-tabs-panel" id="vertical-solid-2" role="tabpanel">
  Tab 2 content
</div>
<div class="chi-tabs-panel" id="vertical-solid-3" role="tabpanel">
  Tab 3 content
</div>

<script>chi.tab(document.getElementById('example-vertical-solid'));<\/script>`
  }

  chiTabChange(tab: any) {
    this.activeTab = tab.detail.id
  }

  mounted() {
    const solidElement = document.querySelector('#example__vertical-solid') as TabsListInterface

    if (solidElement) {
      solidElement.tabs = this.tabLinks
    }
  }
}
</script>
