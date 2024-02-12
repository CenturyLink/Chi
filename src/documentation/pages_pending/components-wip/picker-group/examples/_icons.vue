<template lang="pug">
  <ComponentExample title="Icons" id="icons" :tabs="exampleTabs">
    template(#example)
      fieldset
        legend.chi-label Select an option
        .chi-picker-group
          .chi-picker-group__content
            template(v-for="item in pickers")
              input.chi-picker__input(type='radio', name='example__icons', :id="`example__icons_${item}`" :checked="item === 1")
              label(:ref="`tooltip-${item}`" :for="`example__icons_${item}`" :data-tooltip="`Option ${item}`" data-position="bottom")
                span.-sr--only Option {{ item }}
                i.chi-icon.icon-atom.-sm(aria-hidden="true")
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
export default class Icons extends Vue {
  pickers = [1, 2, 3]
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
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  }
  tooltips: any[] = [];

  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this.pickers.forEach((item: string) => {
      this.tooltips.push(chi.tooltip(this.$refs[`tooltip-${item}`] as HTMLElement));
    });
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.pickers.forEach((option: number) => {
      const checked = option === 1 ? ' checked' : '';

      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__icons" id="example__icons_${option}"${checked}>
      <label for="example__icons_${option}" data-tooltip="Option ${option}" data-position="bottom">
        <span class="-sr--only">Option ${option}</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>`;
    });

    this.codeSnippets.htmlblueprint = `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>

<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`;
  }

  beforeDestroy() {
    this.tooltips.forEach((tooltip: any) => {
      tooltip[0].dispose();
    });
  }
}
</script>
