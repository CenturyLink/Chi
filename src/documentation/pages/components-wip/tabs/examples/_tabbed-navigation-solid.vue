<template lang="pug">
<ComponentExample title="Solid" id="tabbed-navigation-solid" :tabs="exampleTabs" titleSize="h4" additionalClasses="-pb--4">
  template(#example)
    chi-tabs(active-tab='tab-tns-a' id='example__tabbed_navigation_solid' size='lg' solid sliding-border)
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type TabsListInterface } from '~/models/models';

@NuxtComponent({})
export default class TabbedNavigationFlat extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  tabLinks = [
    {
      label: 'Active Tab',
      id: 'tab-tns-a',
      children: [
        {
          label: 'Elem 1',
          id: 'tab-tns-a-1',
        },
        {
          label: 'Elem 2',
          id: 'tab-tns-a-2',
        },
        {
          label: 'Elem 3 more',
          id: 'tab-tns-a-3',
          children: [
            {
              label: 'Elem 3.1',
              id: 'tab-tns-a-3-1',
            },
            {
              label: 'Elem 3.2',
              id: 'tab-tns-a-3-2',
              children: [
                {
                  label: 'Elem 3.2.1',
                  id: 'tab-tns-a-3-2-1',
                },
                {
                  label: 'Elem 3.2.2',
                  id: 'tab-tns-a-3-2-2',
                },
                {
                  label: 'Elem 3.2.3',
                  id: 'tab-tns-a-3-2-3',
                },
              ],
            },
            {
              label: 'Elem 3.3',
              id: 'tab-tns-a-3-3',
            },
            {
              label: 'Elem 3.4',
              id: 'tab-tns-a-3-4',
            },
          ],
        },
        {
          label: 'Elem 4',
          id: 'tab-tns-a-4',
        },
      ],
    },
    {
      label: 'Tab Link',
      id: 'tab-tns-b',
    },
    {
      label: 'Tab Link',
      id: 'tab-tns-c',
    },
    {
      label: 'Tab Link',
      id: 'tab-tns-d',
    },
    {
      label: 'Tab Link',
      id: 'tab-tns-e',
    },
    {
      label: 'Tab Dropdown',
      id: 'tab-tns-f',
      children: [
        {
          label: 'Element 1',
          id: 'tab-tns-f-1',
        },
        {
          label: 'Element 2',
          id: 'tab-tns-f-2',
          children: [
            {
              label: 'Elem 1',
              id: 'tab-tns-f-2-1',
            },
            {
              label: 'Elem 2',
              id: 'tab-tns-f-2-2',
            },
            {
              label: 'Elem 3 more',
              id: 'tab-tns-f-2-3',
              children: [
                {
                  label: 'Elem 3.1',
                  id: 'tab-tns-f-2-3-1',
                },
                {
                  label: 'Elem 3.2',
                  id: 'tab-tns-f-2-3-2',
                },
                {
                  label: 'Elem 3.3',
                  id: 'tab-tns-f-2-3-3',
                },
              ],
            },
            {
              label: 'Elem 4',
              id: 'tab-tns-f-2-4',
            },
          ],
        },
        {
          label: 'Element 3',
          id: 'tab-tns-f-3',
        },
      ]
    },
  ];

  codeSnippets = {
    webcomponent: `<chi-tabs active-tab="tab-a" id="example__tabbed_navigation_solid" size="lg" solid sliding-border></chi-tabs>

<script>
  const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_solid');

  tabbedNavigationFlatElement.tabs = [
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
${this.generateTabsNestedLinksHtml([1, 2])}
      <div>
        <a class="chi-dropdown__menu-item chi-dropdown__trigger" href="#">Elem 3 more</a>
        <div class="chi-dropdown__menu">
          ${this.generateTabsDropdownLinksHtml()}
        </div>
      </div>
      <a class="chi-dropdown__menu-item" href="#">Elem 4</a>
    </div>
  </li>
${this.generateTabsLinksHtml()}
  <li class="chi-dropdown">
    <a class="chi-dropdown__trigger" href="#">Tab Dropdown</a>
    <div class="chi-dropdown__menu">
${this.generateTabsNestedLinksHtml([1, 2, 3])}
    </div>
  </li>
</ul>

<script>
  const navigationElem = document.getElementById('#navigationExample-1');
  chi.navigation(navigationElem);
<\/script>`,
  };

  generateTabsLinksHtml() {
    return [1, 2, 3, 4, 5, 6]
      .map(() => {
        return `  <li>
    <a href="#">Tab Link</a>
  </li>`;
      })
      .join('\n');
  }

  generateTabsNestedLinksHtml(array: number[]) {
    return array
      .map((item: number) => {
        return `      <a class="chi-dropdown__menu-item" href="#">Element ${item}</a>`;
      })
      .join('\n');
  }

  generateTabsDropdownLinksHtml() {
    return [1, 2, 3, 4]
      .map((item: number) => {
        return `<a class="chi-dropdown__menu-item" href="#">Elem 3.${item}</a>`;
      })
      .join('');
  }

  mounted() {
    const element = document.querySelector('#example__tabbed_navigation_solid') as TabsListInterface;

    if (element) {
      element.tabs = this.tabLinks;
    }
  }
}
</script>
