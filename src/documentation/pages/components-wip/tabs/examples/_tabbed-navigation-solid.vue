<template lang="pug">
  <ComponentExample title="Solid" id="tabbed-navigation-solid" :tabs="exampleTabs" additionalClasses="-pb--4">
    chi-tabs(slot="example" active-tab='tab-a' id='example__tabbed_navigation_solid' size='lg' solid sliding-border)
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

export default class TabbedNavigationFlat extends Vue {
  tabbedNavigationFlatElement = [
    {
      label: 'Active Tab',
      id: 'tab-a',
      children: [
        {
          label: 'Elem 1',
          id: 'tab-a-1'
        },
        {
          label: 'Elem 2',
          id: 'tab-a-2'
        },
        {
          label: 'Elem 3 more',
          id: 'tab-a-3',
          children: [
            {
              label: 'Elem 3.1',
              id: 'tab-a-3-1'
            },
            {
              label: 'Elem 3.2',
              id: 'tab-a-3-2',
              children: [
                {
                  label: 'Elem 3.2.1',
                  id: 'tab-a-3-2-1'
                },
                {
                  label: 'Elem 3.2.2',
                  id: 'tab-a-3-2-2'
                },
                {
                  label: 'Elem 3.2.3',
                  id: 'tab-a-3-2-3'
                }
              ]
            },
            {
              label: 'Elem 3.3',
              id: 'tab-a-3-3'
            },
            {
              label: 'Elem 3.4',
              id: 'tab-a-3-4'
            }
          ]
        },
        {
          label: 'Elem 4',
          id: 'tab-a-4'
        }
      ]
    },
    {
      label: 'Tab Link',
      id: 'tab-b'
    },
    {
      label: 'Tab Link',
      id: 'tab-c'
    },
    {
      label: 'Tab Link',
      id: 'tab-d'
    },
    {
      label: 'Tab Link',
      id: 'tab-e'
    },
    {
      label: 'Tab Dropdown',
      id: 'tab-f',
      children: [
        {
          label: 'Element 1',
          id: 'tab-f-1'
        },
        {
          label: 'Element 2',
          id: 'tab-f-2',
          children: [
            {
              label: 'Elem 1',
              id: 'tab-f-2-1'
            },
            {
              label: 'Elem 2',
              id: 'tab-f-2-2'
            },
            {
              label: 'Elem 3 more',
              id: 'tab-f-2-3',
              children: [
                {
                  label: 'Elem 3.1',
                  id: 'tab-f-2-3-1'
                },
                {
                  label: 'Elem 3.2',
                  id: 'tab-f-2-3-2'
                },
                {
                  label: 'Elem 3.3',
                  id: 'tab-f-2-3-3'
                }
              ]
            },
            {
              label: 'Elem 4',
              id: 'tab-f-2-4'
            }
          ]
        },
        {
          label: 'Element 3',
          id: 'tab-f-3'
        }
      ]
    }
  ];

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
    webcomponent: `<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_solid" size="lg" solid sliding-border></chi-tabs>

<script>
    const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_solid');

    tabbedNavigationFlatElement.tabs = tabbedNavigationFlatElement.tabs = [
      {
        label: 'Active Tab',
        id: 'tab-a',
        children: [
          {
            label: 'Elem 1',
            id: 'tab-a-1'
          },
          {
            label: 'Elem 2',
            id: 'tab-a-2'
          },
          {
            label: 'Elem 3 more',
            id: 'tab-a-3',
            children: [
              {
                label: 'Elem 3.1',
                id: 'tab-a-3-1'
              },
              {
                label: 'Elem 3.2',
                id: 'tab-a-3-2',
                children: [
                  {
                    label: 'Elem 3.2.1',
                    id: 'tab-a-3-2-1'
                  },
                  {
                    label: 'Elem 3.2.2',
                    id: 'tab-a-3-2-2'
                  },
                  {
                    label: 'Elem 3.2.3',
                    id: 'tab-a-3-2-3'
                  }
                ]
              },
              {
                label: 'Elem 3.3',
                id: 'tab-a-3-3'
              },
              {
                label: 'Elem 3.4',
                id: 'tab-a-3-4'
              }
            ]
          },
          {
            label: 'Elem 4',
            id: 'tab-a-4'
          }
        ]
      },
      {
        label: 'Tab Link',
        id: 'tab-b'
      },
      {
        label: 'Tab Link',
        id: 'tab-c'
      },
      {
        label: 'Tab Link',
        id: 'tab-d'
      },
      {
        label: 'Tab Link',
        id: 'tab-e'
      },
      {
        label: 'Tab Dropdown',
        id: 'tab-f',
        children: [
          {
            label: 'Element 1',
            id: 'tab-f-1'
          },
          {
            label: 'Element 2',
            id: 'tab-f-2',
            children: [
              {
                label: 'Elem 1',
                id: 'tab-f-2-1'
              },
              {
                label: 'Elem 2',
                id: 'tab-f-2-2'
              },
              {
                label: 'Elem 3 more',
                id: 'tab-f-2-3',
                children: [
                  {
                    label: 'Elem 3.1',
                    id: 'tab-f-2-3-1'
                  },
                  {
                    label: 'Elem 3.2',
                    id: 'tab-f-2-3-2'
                  },
                  {
                    label: 'Elem 3.3',
                    id: 'tab-f-2-3-3'
                  }
                ]
              },
              {
                label: 'Elem 4',
                id: 'tab-f-2-4'
              }
            ]
          },
          {
            label: 'Element 3',
            id: 'tab-f-3'
          }
        ]
      }
    ];
<\/script>`,
    htmlblueprint: `<ul id="navigationExample-1" class="chi-tabs -solid -border -lg">
  <li class="chi-dropdown -active">
    <a class="chi-dropdown__trigger" href="#">Active tab</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Elem 1</a>
      <a class="chi-dropdown__menu-item" href="#">Elem 2</a>
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          <a class="chi-dropdown__menu-item" href="#">Elem 3.1</a><a class="chi-dropdown__menu-item" href="#">Elem 3.2</a><a class="chi-dropdown__menu-item" href="#">Elem 3.3</a><a class="chi-dropdown__menu-item" href="#">Elem 3.4</a>
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Element 1</a>
      <a class="chi-dropdown__menu-item" href="#">Element 2</a>
      <a class="chi-dropdown__menu-item" href="#">Element 3</a>
    </div>
  </li>
</ul>

<script>
  const navigationElem = document.getElementById('#navigationExample-1');
  chi.navigation(navigationElem);
<\/script>`
  }

  mounted() {
    const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_solid') as TabsListInterface

    if (tabbedNavigationFlatElement) {
      tabbedNavigationFlatElement.tabs = this.tabbedNavigationFlatElement
    }
  }
}
</script>
