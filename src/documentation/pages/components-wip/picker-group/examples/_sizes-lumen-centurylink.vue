<template lang="pug">
<ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Picker groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.
  template(#example)
    .-d--flex.-flex--column
      template(v-for="size in sizes")
        strong -{{ size }}
        .-py--2
          fieldset
            legend.chi-label Select an option
            .chi-picker-group
              .chi-picker-group__content
                template(v-for="item in pickers")
                  input.chi-picker__input(type='radio', :name="`example__size_${size}`", :id="`example__size_${size}_${item}`" :checked="item === 1")
                  label(:for="`example__size_${size}_${item}`" :class="`-${size}`") Option {{ item }}
          .-py--2
            fieldset
              legend.chi-label Select an option
              .chi-picker-group
                .chi-picker-group__content
                  template(v-for="item in pickers")
                    input.chi-picker__input(type='radio', :name="`example__size_${size}_icon`", :id="`example__size_${size}_icon_${item}`" :checked="item === 1")
                    label(:ref="`tooltip-${item}`" :for="`example__size_${size}_icon_${item}`" :class="`-${size}`" :data-tooltip="`Option ${item}`", data-position="bottom")
                      span.-sr--only Option {{ item }}
                      i.chi-icon.icon-atom(:class="size === 'xs' ? '-xs' : '-sm'" aria-hidden="true")
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class SizesLumenCenturyLink extends Vue {
  pickers = [1, 2, 3]
  sizes = ['xs', 'sm', 'md', 'lg', 'xl']
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
    const snippets = this.sizes.map((size: string) => {
      const iconSize = size === 'xs' ? '-xs' : '-sm';
      let pickerInputs = '';
      let pickerIconsInputs = '';

      this.pickers.forEach((option: number) => {
        const checked = option === 1 ? ' checked' : '';

        pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__size_${size}_icon" id="example__size_${size}_${option}"${checked}>
      <label class="-${size}" for="example__size_${size}_${option}">Option ${option}</label>`;
        pickerIconsInputs += `
      <input class="chi-picker__input" type="radio" name="example__size_${size}_icon" id="example__size_${size}_icon_${option}"${checked}>
      <label class="-${size}" for="example__size_${size}_icon_${option}">
        <span class="-sr--only">Option ${option}</span>
        <i class="chi-icon icon-atom ${iconSize}" aria-hidden="true"></i>
      </label>`;
      });

      return {
        webcomponent: ``,
        htmlblueprint: `<!-- ${size} -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerIconsInputs}
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>

`,
      };
    });

    snippets.forEach((code: any) => {
      this.codeSnippets.webcomponent += code.webcomponent;
      this.codeSnippets.htmlblueprint += code.htmlblueprint;
    });
  }

  beforeDestroy() {
    this.tooltips.forEach((tooltip: any) => {
      tooltip[0].dispose();
    });
  }
}
</script>
