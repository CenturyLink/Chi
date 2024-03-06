<template lang="pug">
<ComponentExample title="Icons" id="icons" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
  template(#example-description)
    p.-text
      | Dropdown component has been developed to support Chi icons in the menu items.
  template(#example)
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
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
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
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
      ],
      codeSnippets: {
        webcomponent: ``,
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
</div>`,
      },
    };
  },
})
export default class Icons extends Vue {}
</script>
