<template lang="pug">
<ComponentExample title="Radio Button List" id="radio-button-list" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Radio button lists are used to wrap a series of radio buttons in a list.
      | To render a series of radio buttons in a list, apply the class <code>-list</code> to <code>chi-form__item</code>.
  template(#example)
    fieldset
      legend(class="chi-label") Select an option
      ul(class="chi-form__item -list")
        li(class="chi-form__item")
          chi-radio-button(id="example__list1" label="Option 1" name="radiobuttonList" required)
        li(class="chi-form__item")
          chi-radio-button(id="example__list2" label="Option 2" name="radiobuttonList" required)
        li(class="chi-form__item")
          chi-radio-button(id="example__list3" label="Option 3" name="radiobuttonList" required)
        li(class="chi-form__item")
          chi-radio-button(id="example__list4" label="Option 4" name="radiobuttonList" required)
        li(class="chi-form__item")
          chi-radio-button(id="example__list5" label="Option 5" name="radiobuttonList" required)
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
      <chi-radio-button id="example__list1" label="Option 1" name="radiobuttonList" required></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list2" label="Option 2" name="radiobuttonList" required></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list3" label="Option 3" name="radiobuttonList" required></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list4" label="Option 4" name="radiobuttonList" required></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list5" label="Option 5" name="radiobuttonList" required></chi-radio-button>
    </li>
  </ul>
</fieldset>`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="example__list1">
        <label class="chi-radio__label" for="example__list1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="example__list2">
        <label class="chi-radio__label" for="example__list2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="example__list3">
        <label class="chi-radio__label" for="example__list3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="example__list4">
        <label class="chi-radio__label" for="example__list4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="example__list5">
        <label class="chi-radio__label" for="example__list5">Option 5</label>
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
