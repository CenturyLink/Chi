<template lang="pug">
  <ComponentExample title="Base with help icon" id="base-help" padding="-p--0" :tabs="exampleTabs">
    chi-main(title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      chi-button(id='example__help-button2' type='icon' size='sm' variant='flat' alternative-text="Help" slot="help-icon" class="-ml--1"  @click="$refs.example__help_popover2.toggle()")
        chi-icon(icon='circle-question-outline')
      chi-popover(id='example__help-popover2' ref='example__help_popover2' position='top' variant='text' arrow reference='#example__help-button2')
        | Popover content.
      <AppLayoutFooter />
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
import AppLayoutFooter from './_app-layout-footer.vue';
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

declare const chi: any;

@Component({
  components: {
    AppLayoutFooter
  },
  data: () => {
    return {
      languages: BASE_HELP_LANGUAGES,
      footerLinks: FOOTER_LINKS,
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
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class BaseHelp extends Vue {
  popover: any;

  mounted() {
    //this.popover = chi.popover(this.$refs[`example__help_popover`] as HTMLElement);
  }
}
</script>
