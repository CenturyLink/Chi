<template lang="pug">
  <ComponentExample title="Additional Styles" id="additional-styles" :tabs="exampleTabs">
    template(#example-description)
      p.-text The web component accepts the properties <code>color</code>, <code>variant</code>,
      <code>size</code>, <code>uppercase</code> and <code>disabled</code> to modify the underlying chi-button element behavior and style.
    template(#example)
      .-d--flex
        <ClientOnly>
          chi-dropdown(
            v-for="(button, index) in buttons"
            position='bottom'
            :key="button.text"
            :button='button.text'
            :color='button.color'
            :variant='button.variant'
            :disabled='button.disabled'
            :class=`index && '-ml--2'`
          )
            div(slot="menu")
              a.chi-dropdown__menu-item(v-for="i in [1,2,3,4]" :key="`${button.text}-${i}`" href="#")
                span Item {{ i }}
        </ClientOnly>
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class AdditionalStyles extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  buttons = [
    { text: 'Primary', color: 'primary' },
    { text: 'Primary outline', color: 'primary', variant: 'outline' },
    { text: 'Primary flat', color: 'primary', variant: 'flat' },
    { text: 'Flat', variant: 'flat' },
    { text: 'Disabled', disabled: true },
  ]
  codeSnippets = {
    webcomponent: '',
    htmlblueprint: '',
  }
  mounted() {
    this.codeSnippets.webcomponent = this.buttons.map(this.getWebComponentSnippet).join('\n\n');
    this.codeSnippets.htmlblueprint = [
      ...this.buttons.map(this.getHTMLSnippet),
      "<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>",
    ].join('\n\n');
  }

  getDropdownItemsSnippet(indent = 2, addSlot = false) {
    return [1, 2, 3, 4].map(
      (i) =>
        ' '.repeat(indent) + `<a class='chi-dropdown__menu-item' href='#'${addSlot ? ' slot="menu"' : ''}>Item ${i}</a>`
    );
  }

  /**
   * Generates chi-dropdown web component snippet
   */
  getWebComponentSnippet(button: { text: string; color: string; variant: string; disabled: boolean }) {
    const chiDropdown = button.disabled
      ? "<chi-dropdown position='bottom' button='Disabled' disabled>"
      : `<chi-dropdown position='bottom' button='${button.text}'` +
      (button.color ? ` color='${button.color}'` : '') +
      (button.variant ? ` variant='${button.variant}'>` : '>');

    return [
      `<!-- ${button.text} button -->`,
      chiDropdown,
      ...this.getDropdownItemsSnippet(2, true),
      '</chi-dropdown>',
    ].join('\n');
  }

  /**
   * Generates chi-dropdown HTML snippet
   */
  getHTMLSnippet(button: { text: string; color: string; variant: string; disabled: boolean }) {
    const extraClasses = [button.color, button.variant]
      .filter(Boolean)
      .map((i) => ' -' + i)
      .join('');
    const chiDropdown = button.disabled
      ? `  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>${button.text}</button>`
      : `<button id="dropdown-styles-${button.text.replace(' ', '-').toLowerCase()}" ` +
      `class="chi-button chi-dropdown__trigger${extraClasses}">${button.text}</button>`;

    return [
      `<!-- ${button.text} button -->`,
      '<div class="chi-dropdown">',
      chiDropdown,
      '  <div class="chi-dropdown__menu">',
      ...this.getDropdownItemsSnippet(4),
      '  </div>',
      '</div>',
    ].join('\n');
  }
}
</script>
