<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Picker groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. The default size is <code>-md</code>.
    .-d--flex.-flex--column(slot="example")
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

declare const chi: any;

@Component({
  data: () => {
    return {
      pickers: [1, 2, 3],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class SizesLumenCenturyLink extends Vue {
  tooltips: any[] = [];

  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this.$data.pickers.forEach((item: string) => {
      this.tooltips.push(
        chi.tooltip(this.$refs[`tooltip-${item}`] as HTMLElement)
      );
    });
  }

  _setCodeSnippets() {
    const snippets = this.$data.sizes.map((size: string) => {
      const iconSize = size === 'xs' ? '-xs' : '-sm';
      let pickerInputs = '';
      let pickerIconsInputs = '';

      this.$data.pickers.forEach((option: number) => {
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

`
      };
    });

    snippets.forEach((code: any) => {
      this.$data.codeSnippets.webcomponent += code.webcomponent;
      this.$data.codeSnippets.htmlblueprint += code.htmlblueprint;
    });
  }

  beforeDestroy() {
    this.tooltips.forEach((tooltip: any) => {
      tooltip[0].dispose();
    });
  }
}
</script>
