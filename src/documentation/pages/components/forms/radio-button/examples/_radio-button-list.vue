<template lang="pug">
  <ComponentExample title="Radio Button List" id="radio_button_list" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Radio button lists are used to wrap a series of radio buttons in a list. 
      | To render a series of radio buttons in a list, apply the class <code>-list</code> to <code>chi-form__item</code>.
    fieldset(slot="example")
      legend(class="chi-label") Select an option
      ul(class="chi-form__item -list")
        li(class="chi-form__item")
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radiobuttonList" id="radio1" required)
            label(class="chi-radio__label" for="radio1") Option 1
        li(class="chi-form__item")
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radiobuttonList" id="radio2" required)
            label(class="chi-radio__label" for="radio2") Option 2
        li(class="chi-form__item")
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radiobuttonList" id="radio3" required)
            label(class="chi-radio__label" for="radio3") Option 3
        li(class="chi-form__item")
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radiobuttonList" id="radio4" required)
            label(class="chi-radio__label" for="radio4") Option 4
        li(class="chi-form__item")
          .chi-radio
            input(class="chi-radio__input" type="radio" name="radiobuttonList" id="radio5" required)
            label(class="chi-radio__label" for="radio5") Option 5
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="radio1">
        <label class="chi-radio__label" for="radio1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="radio2">
        <label class="chi-radio__label" for="radio2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="radio3">
        <label class="chi-radio__label" for="radio3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="radio4">
        <label class="chi-radio__label" for="radio4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radiobuttonList" id="radio5">
        <label class="chi-radio__label" for="radio5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`
      }
    };
  }
})
export default class RadioButtonList extends Vue {}
</script>
