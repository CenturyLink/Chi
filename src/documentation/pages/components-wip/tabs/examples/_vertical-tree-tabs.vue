<template lang="pug">
  <ComponentExample title="Vertical Tree Tabs" id="vertical-tree-tabs"
    | :tabs="exampleTabs">
    div(slot="example")
      .-p--3
        ul.chi-tabs.-vertical.-icons.-list.-tree.-lg(
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
              button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                .chi-button__content
                  i.chi-icon.icon-more-vert(aria-hidden="true")
            ul.chi-tabs__subtabs(v-if="link.subLinks")
              li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title {{subLink.text}}
                  span.chi-tabs_item-text(v-if="subLink.description" ) {{subLink.description}}
                  button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                    .chi-button__content
                      i.chi-icon.icon-more-vert(aria-hidden="true")

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

@Component({})

export default class VerticalTabsWithIconsAndDescription extends Vue {
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
      active: true
    },
    {
      href: '',
      text: 'Tab Link',
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
    },
    {
      href: '',
      text: 'Tab Link',
      description: 'Tab description'
    }
  ]

  codeSnippets = {
    webComponent: '',
    htmlBlueprint: `<ul class="chi-tabs -vertical -icons -list -tree -lg">
  <li class="-active">
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Active Tab</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>
    <ul class="chi-tabs__subtabs">
      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>
      </li>
      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>
        <ul class="chi-tabs__subtabs">
          <li>
            <a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>
          </li>
          <li>
            <a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>
  </li>
</ul>`
  }
}
</script>
