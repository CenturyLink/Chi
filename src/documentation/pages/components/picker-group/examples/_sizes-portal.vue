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
                  input.chi-picker__input(type='radio', :name="`unique-name-${size}`", :id="`unique-id-${size}${item}`" :checked="item === 1")
                  label(:for="`unique-id-${size}${item}`" :class="`-${size}`") Option {{ item }}
          .-py--2
            fieldset
              legend.chi-label Select an option
              .chi-picker-group
                .chi-picker-group__content
                  template(v-for="item in pickersIcons")
                    input.chi-picker__input(type='radio', :name="`unique-name-${size}-icon`", :id="`unique-id-icon-${size}${item}`" :checked="item === 4")
                    label(:ref="`tooltip-${item}`" :for="`unique-id-icon-${size}${item}`" :class="`-${size}`" :data-tooltip="`Option ${item}`", data-position="bottom")
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
        webcomponent: ``,
        htmlblueprint: `<!-- xs -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs1" checked>
      <label class="-xs" for="unique-id-xs1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs2">
      <label class="-xs" for="unique-id-xs2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs3">
      <label class="-xs" for="unique-id-xs3">Option 3</label>
    </div>
  </div>
</fieldset>

<!-- sm -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm1" checked>
      <label class="-sm" for="unique-id-sm1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm2">
      <label class="-sm" for="unique-id-sm2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm3">
      <label class="-sm" for="unique-id-sm3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm4" checked>
      <label class="-sm" for="unique-id-sm4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm5">
      <label class="-sm" for="unique-id-sm5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm6">
      <label class="-sm" for="unique-id-sm6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>

<!-- md -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md1" checked>
      <label class="-md" for="unique-id-md1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md2">
      <label class="-md" for="unique-id-md2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md3">
      <label class="-md" for="unique-id-md3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md4" checked>
      <label class="-md" for="unique-id-md4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md5">
      <label class="-md" for="unique-id-md5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md6">
      <label class="-md" for="unique-id-md6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>

<!-- lg -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg1" checked>
      <label class="-lg" for="unique-id-lg1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg2">
      <label class="-lg" for="unique-id-lg2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg3">
      <label class="-lg" for="unique-id-lg3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg4" checked>
      <label class="-lg" for="unique-id-lg4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg5">
      <label class="-lg" for="unique-id-lg5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg6">
      <label class="-lg" for="unique-id-lg6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`
      }
    };
  }
})
export default class SizesPortal extends Vue {
  tooltips: any[] = [];

  mounted() {
    this.$data.pickersIcons.forEach((item: string) => {
      this.tooltips.push(chi.tooltip(this.$refs[`tooltip-${item}`] as HTMLElement));
    });
  }

  beforeDestroy() {
    this.tooltips.forEach((tooltip: any) => {
      tooltip[0].dispose();
    });
  }
}
</script>
