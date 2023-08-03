<template lang="pug">
  <ComponentExample title="Vertical" id="additional-sizes-vertical" :tabs="exampleTabs" additionalClasses="-pb--4" titleSize="h4">
    div(slot="example")
      p.-text--bold Small
      .chi-divider.-mb--2
      ul.chi-tabs.-vertical.-sm
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.href}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.href"
          ) {{link.text}}
          ul.chi-tabs__subtabs(v-if="link.subLinks")
            li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
              a(href='#') {{subLink.text}}
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      ul.chi-tabs.-vertical
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.href}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.href"
          ) {{link.text}}
          ul.chi-tabs__subtabs(v-if="link.subLinks")
            li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
              a(href='#') {{subLink.text}}
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      ul.chi-tabs.-vertical.-lg
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.href}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.href"
          ) {{link.text}}
          ul.chi-tabs__subtabs(v-if="link.subLinks")
            li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
              a(href='#') {{subLink.text}}
      p.-text--bold.-mt--6 X-Large
      .chi-divider.-mb--2
      ul.chi-tabs.-vertical.-xl
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.href}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.href"
          ) {{link.text}}
          ul.chi-tabs__subtabs(v-if="link.subLinks")
            li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
              a(href='#') {{subLink.text}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="codeSnippets.webComponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlBlueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class AdditionalSizesVertical extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component'
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint'
    }
  ]

  tabLinks = [
    {
      href: '',
      text: 'Active Tab',
      active: true,
      subLinks: [
        {
          href: '',
          text: 'Subtab Link',
          active: true
        },
        {
          href: '',
          text: 'Subtab Link'
        },
        {
          href: '',
          text: 'Subtab Link'
        }
      ]
    },
    {
      href: '',
      text: 'Tab Link'
    },
    {
      href: '',
      text: 'Tab Link'
    }
  ]

  sizes = [
    {
      name: 'Small',
      value: 'sm'
    },
    {
      name: 'Medium (Base)',
      value: 'md'
    },
    {
      name: 'Large',
      value: 'lg'
    },
    {
      name: 'X-Large',
      value: 'xl'
    },
  ]

  get codeSnippets() {
    return {
      webComponent: '',
      htmlBlueprint: this.tabsHtml
    }
  }

  get subTabsHtml() {
    return this.tabLinks.map((_, index) => {
      const isFirstItem = index === 0;
      return (`      <li${isFirstItem ? ' class="-active"' : ''}>
        <a href="#">Subtab Link</a>
      </li>`
      )
    }).join('\n');
  }

  get tabsHtml() {
    return this.sizes.map(({ name, value }) => {
      return (
        `<!-- ${name} -->
<ul class="chi-tabs -vertical${value === 'md' ? '' : ` -${value}`}">
  <li class="-active">
    <a href="#">Active Tab</a>
    <ul class="chi-tabs__subtabs">
${this.subTabsHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
  <li>
    <a href="#">Tab Link</a>
  </li>
</ul>`
      )
    }).join('\n\n');
  }
}
</script>
