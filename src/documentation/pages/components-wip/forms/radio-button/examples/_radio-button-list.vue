<template lang="pug">
<ComponentExample title="Radio Button List" id="radio-button-list" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Radio button lists are used to wrap a series of radio buttons in a list.
      | To render a series of radio buttons in a list, apply the class <code>-list</code> to <code>chi-form__item</code>.
  template(#example)
    fieldset
      legend.chi-label Select an option
      ul.chi-form__item.-list(style="max-width:20rem")
        li.chi-form__item
          chi-radio-button(id="example__list_opt_1" label="Option 1" name="radio-button-list")
        li.chi-form__item
          chi-radio-button(id="example__list_opt_2" label="Option 2" name="radio-button-list")
        li.chi-form__item
          chi-radio-button(id="example__list_opt_3" label="Option 3" name="radio-button-list")
        li.chi-form__item
          chi-radio-button(id="example__list_opt_4" label="Option 4" name="radio-button-list")
        li.chi-form__item
          chi-radio-button(id="example__list_opt_5" label="Option 5" name="radio-button-list")
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
      webcomponent: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_1" label="Option 1" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_2" label="Option 2" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_3" label="Option 3" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_4" label="Option 4" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_5" label="Option 5" name="radio-button-list"></chi-radio-button>
    </li>
  </ul>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_1">
        <label class="chi-radio__label" for="example__list_opt_1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_2">
        <label class="chi-radio__label" for="example__list_opt_2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_3">
        <label class="chi-radio__label" for="example__list_opt_3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_4">
        <label class="chi-radio__label" for="example__list_opt_4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_5">
        <label class="chi-radio__label" for="example__list_opt_5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`,
      },
    };
  },
})
export default class RadioButtonList extends Vue {}
</script>
