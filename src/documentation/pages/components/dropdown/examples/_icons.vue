<template lang="pug">
  <ComponentExample title="Icons" id="icons" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    p.-text(slot="example-description")
      | Dropdown component has been developed to support Chi icons in the menu items.
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3(slot="example")
      .chi-dropdown__menu.-active
        a.chi-dropdown__menu-item(href='#exampleLink')
          i.chi-icon.icon-file-outline(aria-hidden="true")
          = "New"
        a.chi-dropdown__menu-item.-disabled(href='http://www.centurylink.com')
          i.chi-icon.icon-arrow-to-bottom(aria-hidden="true")
          = "Save"
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink')
          i.chi-icon.icon-mail(aria-hidden="true")
          = "Send"
        a.chi-dropdown__menu-item.-active(href='#exampleLink')
          i.chi-icon.icon-cart(aria-hidden="true")
          = "Buy"
        a.chi-dropdown__menu-item(href='#exampleLink')
          i.chi-icon.icon-users(aria-hidden="true")
          = "Share"
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink')
          i.chi-icon.icon-logout(aria-hidden="true")
          = "Logout"
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
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>New
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>Save
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-mail" aria-hidden="true"></i>Send
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    <i class="chi-icon icon-cart" aria-hidden="true"></i>Buy
  </a>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-users" aria-hidden="true"></i>Share
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    <i class="chi-icon icon-logout" aria-hidden="true"></i>Logout
  </a>
</div>`
      }
    };
  }
})
export default class Icons extends Vue {}
</script>
