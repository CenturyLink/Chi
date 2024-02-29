<template lang="pug">
<ComponentExample title="Radio Buttons" id="radio_buttons" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
  template(#example)
    .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4
      .chi-dropdown__menu.-active
        fieldset
          legend.chi-dropdown__menu-item Select an option
          .chi-dropdown__menu-item
            .chi-radio
              input(class="chi-radio__input", type="radio", name="radios", id="radio1")
              label.chi-radio__label(for="radio1") Radio Button 1
          .chi-dropdown__menu-item
            .chi-radio
              input(class="chi-radio__input", type="radio", name="radios", id="radio2", disabled)
              label.chi-radio__label(for="radio2") Disabled Radio Button 2
          .chi-dropdown__menu-item
            .chi-radio
              input(class="chi-radio__input", type="radio", name="radios", id="radio3")
              label.chi-radio__label(for="radio3") Radio Button 3
          .chi-dropdown__menu-item
            .chi-radio
              input(class="chi-radio__input", type="radio", name="radios", id="radio4")
              label.chi-radio__label(for="radio4") Radio Button 4
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
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
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <fieldset>
    <legend class="chi-dropdown__menu-item">Select an option</legend>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio1">
        <label class="chi-radio__label" for="radio1">Radio Button 1</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio2" disabled>
        <label class="chi-radio__label" for="radio2">Disabled Radio Button 2</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio3">
        <label class="chi-radio__label" for="radio3">Radio Button 3</label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-radio">
        <input class="chi-radio__input" type="radio" name="radios" id="radio4">
        <label class="chi-radio__label" for="radio4">Radio Button 4</label>
      </div>
    </div>
  </fieldset>
</div>`,
      },
    };
  },
})
export default class RadioButtons extends Vue {}
</script>
