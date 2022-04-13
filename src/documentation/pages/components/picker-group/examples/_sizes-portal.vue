<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-portal" :tabs="exampleTabs">
    p.-text(slot="example-description") Picker groups support the following sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>. The default size is <code>-md</code>.
    .-d--flex.-flex--column(slot="example")
      template(v-for="size in sizes")
        strong -{{ size }}
        .-py--2
          fieldset
            legend.chi-label Select an option
            .chi-picker-group
              .chi-picker-group__content
                template(v-for="item in pickers")
                  input.chi-picker__input(type='radio', :name="`example__size_${size}_portal`", :id="`example__size_${size}_${item}_portal`" :checked="item === 1")
                  label(:for="`example__size_${size}_${item}_portal`" :class="`-${size}`") Option {{ item }}
          .-py--2
            fieldset
              legend.chi-label Select an option
              .chi-picker-group
                .chi-picker-group__content
                  template(v-for="item in pickersIcons")
                    input.chi-picker__input(type='radio', :name="`example__size_${size}_icon_portal`", :id="`example__size_${size}_icon_${item}_portal`" :checked="item === 4")
                    label(:ref="`tooltip-${item}`" :for="`example__size_${size}_icon_${item}_portal`" :class="`-${size}`", :data-tooltip="`Option ${item}`" data-position="bottom")
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
      pickersIcons: [4, 5, 6],
      sizes: ['xs', 'sm', 'md', 'lg'],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class SizesPortal extends Vue {
  tooltips: any[] = [];

  mounted() {
    this.$data.pickersIcons.forEach((item: string) => {
      this.tooltips.push(
        chi.tooltip(this.$refs[`tooltip-${item}`] as HTMLElement)
      );
    });

    this.setCodeSnippets();
  }

  setCodeSnippets() {
    const snippets = this.$data.sizes.map((size: string) => {
      const iconSize = size === 'xs' ? '-xs' : '-sm';

      return {
        webcomponent: ``,
        htmlblueprint: `<!-- ${size} -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example__size_${size}_portal" id="example__size_${size}_1_portal" checked>
      <label class="-${size}" for="example__size_${size}_1_portal">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example__size_${size}_portal" id="example__size_${size}_2_portal">
      <label class="-${size}" for="example__size_${size}_2_portal">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example__size_${size}_portal" id="example__size_${size}_3_portal">
      <label class="-${size}" for="example__size_${size}_3_portal">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example__size_${size}_icon_portal" id="example__size_${size}_icon_4_portal" checked>
      <label class="-${size}" for="example__size_${size}_icon_4_portal">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom ${iconSize}" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="example__size_${size}_icon_portal" id="example__size_${size}_icon_5_portal">
      <label class="-${size}" for="example__size_${size}_icon_5_portal">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom ${iconSize}" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="example__size_${size}_icon_portal" id="example__size_${size}_icon_6_portal">
      <label class="-${size}" for="example__size_${size}_icon_6_portal">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom ${iconSize}" aria-hidden="true"></i>
      </label>
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
