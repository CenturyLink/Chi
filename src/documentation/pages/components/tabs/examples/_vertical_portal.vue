<template lang="pug">
  <ComponentExample title="Vertical Tree Tabs" id="vertical-portal" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      .-p--3
        ul.chi-tabs.-vertical.-icons.-list.-tree.-lg
          li.-active
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Active Tab
              button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                .chi-button__content
                  i.chi-icon.icon-more-vert(aria-hidden="true")
          li
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Tab Link
              span.chi-tabs_item-text Tab description
              button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                .chi-button__content
                  i.chi-icon.icon-more-vert(aria-hidden="true")
            ul.chi-tabs__subtabs
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
                  button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                    .chi-button__content
                      i.chi-icon.icon-more-vert(aria-hidden="true")
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
                  button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                    .chi-button__content
                      i.chi-icon.icon-more-vert(aria-hidden="true")
                ul.chi-tabs__subtabs
                  li
                    a.chi-tabs_item(href='#')
                      span.chi-tabs_item-title Subtab Link
                      span.chi-tabs_item-text Subtab description
                      button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                        .chi-button__content
                          i.chi-icon.icon-more-vert(aria-hidden="true")
                  li
                    a.chi-tabs_item(href='#')
                      span.chi-tabs_item-title Subtab Link
                      span.chi-tabs_item-text Subtab description
                      button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                        .chi-button__content
                          i.chi-icon.icon-more-vert(aria-hidden="true")
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
                  button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                    .chi-button__content
                      i.chi-icon.icon-more-vert(aria-hidden="true")
          li
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Tab Link
              span.chi-tabs_item-text Tab description
              button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                .chi-button__content
                  i.chi-icon.icon-more-vert(aria-hidden="true")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul class="chi-tabs -vertical -icons -list -tree -lg">
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
</ul>`,
      },
    };
  },
})
export default class VerticalPortal extends Vue {}
</script>
