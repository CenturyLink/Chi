<template lang="pug">
  div
    h4 Extra small
    <ComponentExample id="extrasmall_size_lumen_centurylink" :tabs="exampleTabs" :padding="'-p--0'">
      div(slot="example")
        .-p--2
          chi-badge(size='xs', class='-m--1')= 'Badge'
          chi-badge(size='xs', class='-m--1', variant='flat')
            chi-icon(icon='atom')
            span Badge
      div(slot="code-webcomponent").chi-tab__description
        | Set the attribute <code>size</code> to <code>xs</code> to render even smaller badges.
        <pre class="language-html">
          <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
        </pre>
      div(slot="code-htmlblueprint").chi-tab__description
        | Use the <code>-xs</code> modifier class to render even smaller badges.
        <pre class="language-html">
          <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
        </pre>
    </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-badge size="xs">Badge</chi-badge>
<chi-badge size="xs" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,
        htmlblueprint: `<div class="chi-badge -xs">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -xs">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`
      }
    };
  }
})
export default class ExtraSmall extends Vue {
  mounted() {
    chi.tab(document.querySelectorAll('.chi-tabs-panel .chi-tabs'));
  }
}
</script>
