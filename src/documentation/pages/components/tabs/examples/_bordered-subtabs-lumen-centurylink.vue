<template lang="pug">
  <ComponentTabExample title="Bordered" id="bordered-portal" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3(:class="menuId === 'base' ? '' : '-bg--grey-20'" :slot="$data.menuTabs[menuId === 'base' ? 0 : 1].id")
      div(:class="menuId === 'base' ? '-bg--white' : '-bg--black'").-p--3
        ul.chi-tabs(:class="menuId === 'base' ? '' : '-inverse'").-border
          li.-active
            a(href='#') Active tab
          li
            a(href='#') Tab link
          li
            a(href='#') Tab link
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
          base: `<ul class="chi-tabs -border">
  <li class="-active">
    <a href="#">Active tab</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`,
          inverse: `<ul class="chi-tabs -inverse -border">
  <li class="-active">
    <a href="#">Active tab</a>
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
export default class BorderedSubtabsLumenCenturyLink extends Vue {
  menuId = 'base';
  highlightedHTMLBluePrint = '';

  toggleMenuId(toggleTabEvent: string) {
    this.menuId = toggleTabEvent;
    this.highlightedHTMLBluePrint = this.$data.codeSnippets.htmlblueprint[toggleTabEvent];
  }
}
</script>