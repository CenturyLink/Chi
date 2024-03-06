<template lang="pug">
<ComponentExample title="Text and icons" id="text-and-icons" :tabs="exampleTabs">
  template(#example)
    fieldset
      legend.chi-label Select an option
      .chi-picker-group.-fluid(style="max-width:21rem;")
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__text_and_icons', :id="`example__text_and_icons_${item}`" :checked="item === 1")
            label(:for="`example__text_and_icons_${item}`")
              i.chi-icon.icon-atom.-sm(v-if="item === 1 || item === 3" aria-hidden="true")
              span Radio{{ item }}
              i.chi-icon.icon-atom.-sm(v-if="item === 2 || item === 3" aria-hidden="true")
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class TextAndIcons extends Vue {
  pickers = [1, 2, 3];
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  };
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.pickers.forEach((option: number) => {
      const checked = option === 1 ? ' checked' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__text_and_icons" id="example__text_and_icons_${option}"${checked}>
      <label for="example__text_and_icons_${option}">${
        option === 1 || option === 3
          ? `
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>`
          : ''
      }
        <span>Radio${option}</span>${
          option === 2 || option === 3
            ? `
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>`
            : ''
        }
      </label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>`;
  }
}
</script>
