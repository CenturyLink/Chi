<template lang="pug">
  <ComponentExample title="Vertical tabs with icons and description" id="vertical-tabs-with-icons-and-description" titleSize="h4" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    .-bg--white(slot="example")
      .-p--3
        ul.chi-tabs.-icons.-vertical.-list(
          id="example-vertical-with-icons-and-description"
          role="tablist"
          aria-label="chi-tabs-vertical")
          li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
            a.chi-tabs_item(
              :href="`#${link.href}`"
              role="tab"
              aria-selected="true"
              :aria-controls="link.href"
            )
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title {{link.text}}
              span.chi-tabs_item-text(v-if="link.description" ) {{link.description}}
            ul.chi-tabs__subtabs(v-if="link.subLinks")
              li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title {{subLink.text}}
                  span.chi-tabs_item-text(v-if="subLink.description" ) {{subLink.description}}

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

@Component({
  data: () => {
    return {
      exampleTabs: [
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
    }
  }
})

export default class VerticalTabsWithIconsAndDescription extends Vue {
  tabLinks = [
    {
      href: '',
      text: 'Tab Link',
      description: 'Tab description',
      active: true,
    },
    {
      href: '',
      text: 'Active Tab',
      description: 'Tab description',
      subLinks: [
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description'
        },
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description'
        },
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description'
        }
      ]
    },
    {
      href: '',
      text: 'Tab Link',
      description: 'Tab description'
    }
  ]

  get codeSnippets() {
    return {
      webComponent: '',
      htmlBlueprint: `<ul class="chi-tabs -vertical -icons -list">
  <li class="-active">
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Active Tab</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
    <ul class="chi-tabs__subtabs">
${this.subTabsLinksHtml}
    </ul>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>
  </li>
</ul>`
    }
  }

  get subTabsLinksHtml() {
    return this.tabLinks.map(() => {
      return (`      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
        </a>
      </li>`
      )
    }).join('\n');
  }
}
</script>
