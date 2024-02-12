<template lang="pug">
  <ComponentExample title="Vertical Tree Tabs" id="vertical-tree-tabs" titleSize="h4" :tabs="exampleTabs">
    template(#example)
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
                ul.chi-tabs__subtabs(v-if="subLink.subLinks")
                  li(v-for="innerSubLink in subLink.subLinks" :class="[innerSubLink.active ? '-active' : '']")
                    a.chi-tabs_item(href='#')
                      span.chi-tabs_item-title {{innerSubLink.text}}
                      span.chi-tabs_item-text(v-if="innerSubLink.description" ) {{innerSubLink.description}}
                      button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                        .chi-button__content
                          i.chi-icon.icon-more-vert(aria-hidden="true")

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webComponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlBlueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class VerticalTabsWithIconsAndDescription extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  tabLinks = [
    {
      href: '',
      text: 'Active Tab',
      active: true,
    },
    {
      href: '',
      text: 'Tab Link',
      description: 'Tab description',
      subLinks: [
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description',
        },
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description',
          subLinks: [
            {
              href: '',
              text: 'Subtab Link',
              description: 'Subtab description',
            },
            {
              href: '',
              text: 'Subtab Link',
              description: 'Subtab description',
            },
          ],
        },
        {
          href: '',
          text: 'Subtab Link',
          description: 'Subtab description',
        },
      ]
    },
    {
      href: '',
      text: 'Tab Link',
      description: 'Tab description',
    },
  ];

  tabLink = `<a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">Tab Link</span>
      <span class="chi-tabs_item-text">Tab description</span>
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>`;

  subLink = `<a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">Subtab Link</span>
          <span class="chi-tabs_item-text">Subtab description</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>`;

  innerSubLink = `<a class="chi-tabs_item" href="#">
              <span class="chi-tabs_item-title">Subtab Link</span>
              <span class="chi-tabs_item-text">Subtab description</span>
              <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
                <div class="chi-button__content">
                  <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
                </div>
              </button>
            </a>`;

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
    ${this.tabLink}
    <ul class="chi-tabs__subtabs">
      <li>
        ${this.subLink}
      </li>
      <li>
        ${this.subLink}
        <ul class="chi-tabs__subtabs">
          <li>
            ${this.innerSubLink}
          </li>
          <li>
            ${this.innerSubLink}
          </li>
        </ul>
      </li>
      <li>
        ${this.subLink}
      </li>
    </ul>
  </li>
  <li>
    ${this.tabLink}
  </li>
</ul>`,
  };
}
</script>
