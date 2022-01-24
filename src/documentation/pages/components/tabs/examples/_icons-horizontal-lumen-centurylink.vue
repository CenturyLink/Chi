<template lang="pug">
  <ComponentTabExample title="Horizontal tabs with icons" id="icons-horizontal-lumen-centurylink" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3(:slot="$data.menuTabs[menuId === 'base' ? 0 : 1].id")
      div(:class="`-bg--${menuId === 'base' ? 'white' : 'black'} -px--3`")
        ul(:class="`chi-tabs ${menuId === 'base' ? '' : '-inverse'} -icons`")
          li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in ['Active Tab', 'Tab Link', 'Tab Link']")
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span {{tab}}
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
          base: `<ul class="chi-tabs -icons">
  <li class="-active">
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Active Tab</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
</ul>`,
          inverse: `<ul class="chi-tabs -inverse -icons">
  <li class="-active">
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Active Tab</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
</ul>`,
        },
      },
    };
  },
})
export default class IconsHorizontalLumenCenturyLink extends Vue {
  menuId = 'base';
  highlightedHTMLBluePrint = '';

  toggleMenuId(toggleTabEvent: string) {
    this.menuId = toggleTabEvent;
    this.highlightedHTMLBluePrint = this.$data.codeSnippets.htmlblueprint[toggleTabEvent];
  }
}
</script>
