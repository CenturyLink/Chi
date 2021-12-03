<template lang="pug">
  <ComponentExample title="Checkbox List" id="checkbox_list" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Checkbox lists are used to wrap a series of checkboxes in a list.
      | To render a series of checkboxes in a list, apply the class <code>-list</code> to <code>chi-form__item</code>.
    <Wrapper slot="example">
      legend.chi-label Select options
      ul.chi-form__item.-list(style="max-width:20rem")
        li.chi-form__item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox-li1")
            label(for="checkbox-li1", class="chi-checkbox__label") Option 1
        li.chi-form__item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox-li2")
            label(for="checkbox-li2", class="chi-checkbox__label") Option 2
        li.chi-form__item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox-li3")
            label(for="checkbox-li3", class="chi-checkbox__label") Option 3
        li.chi-form__item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox-li4")
            label(for="checkbox-li4", class="chi-checkbox__label") Option 4
        li.chi-form__item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox-li5")
            label(for="checkbox-li5", class="chi-checkbox__label") Option 5
    </Wrapper>
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li1">
        <label class="chi-checkbox__label" for="checkbox-li1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li2">
        <label class="chi-checkbox__label" for="checkbox-li2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li3">
        <label class="chi-checkbox__label" for="checkbox-li3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li4">
        <label class="chi-checkbox__label" for="checkbox-li4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-checkbox">
        <input type="checkbox" class="chi-checkbox__input" id="checkbox-li5">
        <label class="chi-checkbox__label" for="checkbox-li5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`
      }
    };
  }
})
export default class CheckboxList extends Vue {
  mounted() {}
}
</script>
