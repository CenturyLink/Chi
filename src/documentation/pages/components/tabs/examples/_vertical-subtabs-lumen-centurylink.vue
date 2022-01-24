<template lang="pug">
  <ComponentTabExample title="Vertical Subtabs" id="vertical-subtabs-lumen-centurylink" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3(:slot="$data.menuTabs[menuId === 'base' ? 0 : 1].id")
      div(:class="`-bg--${menuId === 'base' ? 'white' : 'black'} -p--3`")
        ul(:class="`chi-tabs ${menuId === 'base' ? '' : '-inverse'} -vertical`")
          li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in ['Active Tab', 'Tab Link', 'Tab Link']")
            a(href='#') {{tab}}
            ul.chi-tabs__subtabs(v-if="index === 0")
              li(:class="subTabindex === 0 ? '-active' : ''" v-for="(subTab, subTabindex) in ['Subtab Link', 'Subtab Link', 'Subtab Link']")
                a(href='#') {{subTab}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="highlightedHTMLBluePrint ? highlightedHTMLBluePrint : $data.codeSnippets.htmlblueprint.base" class="html"></code>
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
        htmlblueprint: {
          base: `<ul class="chi-tabs -vertical">
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
          inverse: `<ul class="chi-tabs -inverse -vertical">
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
      },
    };
  },
})
export default class VerticalSubtabsLumenCenturyLink extends Vue {
  menuId = 'base';
  highlightedHTMLBluePrint = '';

  toggleMenuId(toggleTabEvent: string) {
    this.menuId = toggleTabEvent;
    this.highlightedHTMLBluePrint = this.$data.codeSnippets.htmlblueprint[toggleTabEvent];
  }
}
</script>
