<template lang="pug">
  <ComponentExample titleSize="h4" title="Switch List" id="switch-list-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Switch lists are used to wrap a series of switches in a list.
        | To render, apply the class <code>-list</code> to <code>chi-form__item</code>.
    template(#example)
      legend.chi-label Select options
      ul.chi-form__item.-list(style="max-width:20rem")
        li.chi-form__item(v-for="toggle in toggleList")
          label.chi-switch(:for="`${toggle}`")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", :id="`${toggle}`")
            span(class="chi-switch__content")
              span.chi-switch__thumb

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
      toggleList: ['toggle10', 'toggle11', 'toggle12', 'toggle13', 'toggle14'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle10">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle10">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle11">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle11">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle12">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle12">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle13">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle13">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item" for="toggle14">
      <label class="chi-switch">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle14">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
  </ul>
</fieldset>`,
      },
    };
  },
})
export default class SwitchListLumenCenturyLink extends Vue {}
</script>
