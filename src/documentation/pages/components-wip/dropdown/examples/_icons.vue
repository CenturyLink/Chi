<template lang="pug">
h3 Icons
p.-text
  | Dropdown component has been developed to support Chi icons in the menu items.
<ComponentExample title="Left Aligned" title-size="h4" id="icons-left" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
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
    Copy(lang="html" :code="leftIconCodeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="leftIconCodeSnippets.htmlblueprint" class="html")
</ComponentExample>
<ComponentExample title="Right Aligned" title-size="h4" id="icons-right" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
  template(#example)
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
      .chi-dropdown__menu.-active
        a.chi-dropdown__menu-item(href='#exampleLink')
          = "New"
          i.chi-icon.icon-file-outline.-icon--right(aria-hidden="true")
        a.chi-dropdown__menu-item.-disabled(href='http://www.centurylink.com')
          = "Save"
          i.chi-icon.icon-arrow-to-bottom.-icon--right(aria-hidden="true")
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink')
          = "Send"
          i.chi-icon.icon-mail.-icon--right(aria-hidden="true")
        a.chi-dropdown__menu-item.-active(href='#exampleLink')
          = "Buy"
          i.chi-icon.icon-cart.-icon--right(aria-hidden="true")
        a.chi-dropdown__menu-item(href='#exampleLink')
          = "Share"
          i.chi-icon.icon-users.-icon--right(aria-hidden="true")
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink')
          = "Logout"
          i.chi-icon.icon-logout.-icon--right(aria-hidden="true")
  template(#code-webcomponent)
    Copy(lang="html" :code="rightIconCodeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="rightIconCodeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      leftIconCodeSnippets: {
        webcomponent: `<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>
    New
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
    Save
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-file-outline" aria-hidden="true"></i>
    Send
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    <i class="chi-icon icon-cart" aria-hidden="true"></i>
    Buy
  </a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-users" aria-hidden="true"></i>
    Share
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    <i class="chi-icon icon-logout" aria-hidden="true"></i>
    Logout
  </a>
</chi-dropdown>`,
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
      rightIconCodeSnippets: {
        webcomponent: `<chi-dropdown active>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    New <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#" slot="menu">
    Save <i class="chi-icon icon-arrow-to-bottom -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Send <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#" slot="menu">
    Buy <i class="chi-icon icon-cart -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Share <i class="chi-icon icon-users -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider" slot="menu"></div>
  <a class="chi-dropdown__menu-item" href="#" slot="menu">
    Logout <i class="chi-icon icon-logout -icon--right" aria-hidden="true"></i>
  </a>
</chi-dropdown>`,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">
    New <i class="chi-icon icon-file-outline -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    Save <i class="chi-icon icon-arrow-to-bottom -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    Send <i class="chi-icon icon-mail -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    Buy <i class="chi-icon icon-cart -icon--right" aria-hidden="true"></i>
  </a>
  <a class="chi-dropdown__menu-item" href="#">
    Share <i class="chi-icon icon-users -icon--right" aria-hidden="true"></i>
  </a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">
    Logout <i class="chi-icon icon-logout -icon--right" aria-hidden="true"></i>
  </a>
</div>`,
      },
    };
  },
})
export default class Icons extends Vue {}
</script>
