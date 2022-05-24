<template lang="pug">
  <ComponentExample title="Base with help icon" id="base-help" :tabs="exampleTabs">
    chi-main(title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      chi-button(id='example__help-button2' type='icon' size='sm' variant='flat' alternative-text="Help" slot="help-icon" class="-ml--1")
        chi-icon(icon='circle-question-outline')
      chi-popover(id='example__help-popover2' position='top' variant='text' arrow reference='#example__help-button2')
        | Popover content.
      footer.chi-footer(slot="footer")
        .chi-footer__content
          .chi-footer__internal
            .chi-footer__internal-content.-mw--1200
              .chi-dropdown.chi-footer__language
                a.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(id="language-dropdown-button3" ref="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language")
                  .chi-button__content
                    i.chi-icon.icon-globe-network
                    span English
                .chi-dropdown__menu.-w--sm.-text--body
                  a.chi-dropdown__menu-item(v-for="(lang, index) in languages" :key="index" href="#" :class="index === 0 ? '-active' : ''")
                    | {{lang}}
              .chi-footer__links
                ul
                  li(v-for="(item, index) in footerLinks" :key="index")
                  a(:href="item.link" :target="item.target" :class="item.class") {{item.label}}
                .chi-footer__copyright
                  | &copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.
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
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

declare const chi: any;

@Component({
  data: () => {
    return {
      pickers: [1, 2, 3],
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
  dropdown: any;
//   created() {
//     this._setCodeSnippets();
//   }

//   _setCodeSnippets() {
//     let pickerInputs = '';

//     this.$data.pickers.forEach((option: number) => {
//       const checked = option === 1 ? ' checked' : '';

//       pickerInputs += `
//       <input class="chi-picker__input" type="radio" name="example__checked" id="example__checked_${option}"${checked}>
//       <label for="example__checked_${option}">Option ${option}</label>`;
//     });

//     this.$data.codeSnippets.htmlblueprint = `<fieldset>
//   <legend class="chi-label">Select an option</legend>
//   <div class="chi-picker-group">
//     <div class="chi-picker-group__content">${pickerInputs}
//     </div>
//   </div>
// </fieldset>`;
//   }

  mounted() {
    this.dropdown = chi.dropdown(this.$refs[`language-dropdown-button`] as HTMLElement);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>
