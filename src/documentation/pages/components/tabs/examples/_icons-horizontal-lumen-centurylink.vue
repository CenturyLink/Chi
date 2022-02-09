<template lang="pug">
  <ComponentTabExample title="Horizontal tabs with icons" id="icons-horizontal-lumen-centurylink" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3.-bg--grey-20(:slot="$data.menuTabs[0].id")
      .-bg--white.-px--3
        ul.chi-tabs.-icons
          li.-active
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Active Tab
          li
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Tab Link
          li
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Tab Link
    .-p--3.-bg--grey-20(:slot="$data.menuTabs[1].id")
      .-bg--black.-px--3
         ul.chi-tabs.-inverse.-icons
          li.-active
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Active Tab
          li
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Tab Link
          li
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span Tab Link
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-if="menuId === $data.menuTabs[0].id" v-highlight="$data.codeSnippets.htmlblueprintBase" class="html"></code>
      <code v-if="menuId === $data.menuTabs[1].id" v-highlight="$data.codeSnippets.htmlblueprintInverse" class="html"></code>
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
        htmlblueprintBase: `<ul class="chi-tabs -icons">
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
        htmlblueprintInverse: `<ul class="chi-tabs -inverse -icons">
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
    };
  },
})
export default class IconsHorizontalLumenCenturyLink extends Vue {
   menuId = 'base';

  toggleMenuId(e: string) {
    this.menuId = e;  
  }
}
</script>
