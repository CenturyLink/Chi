<template lang="pug">
  <ComponentTabExample title="Vertical Subtabs" id="vertical-subtabs-lumen-centurylink" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3.-bg--grey-20(slot="menu-base")
      .-bg--white.-p--3
        ul.chi-tabs.-vertical
          li.-active
            a(href='#') Active tab
            ul.chi-tabs__subtabs
              li.-active
                a(href='#') Subtab Link
              li
                a(href='#') Subtab Link
              li
                a(href='#') Subtab Link
          li
            a(href='#') Tab link
          li
            a(href='#') Tab link

    .-p--3.-bg--grey-20(slot="menu-inverse")
      .-bg--black.-p--3
        ul.chi-tabs.-inverse.-vertical
          li.-active
            a(href='#') Active tab
            ul.chi-tabs__subtabs
              li.-active
                a(href='#') Subtab Link
              li
                a(href='#') Subtab Link
              li
                a(href='#') Subtab Link
          li
            a(href='#') Tab link
          li
            a(href='#') Tab link
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-if="menuId === 'base'" v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      <code v-if="menuId === 'inverse'" v-highlight="$data.codeSnippets.htmlblueprint1" class="html"></code>
    </pre>
  </ComponentTabExample>
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
        menuTabs: [
        {
          active: true,
          id: 'base',
          label: 'Base',
        },
        {
          id: 'inverse',
          label: 'Inverse',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul class="chi-tabs -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`,
          htmlblueprint1: `<ul class="chi-tabs -inverse -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`
      },
    };
  },
})
export default class VerticalSubtabsLumenCenturyLink extends Vue {
   menuId = 'base';

  toggleMenuId(e: string) {
    this.menuId = e;  
  }
}
</script>
