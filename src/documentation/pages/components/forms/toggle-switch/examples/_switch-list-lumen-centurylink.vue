<template lang="pug">
  <ComponentExample title="Switch List" id="switch-list-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Switch lists are used to wrap a series of switches in a list.
      | To render, apply the class <code>-list</code> to <code>chi-form__item</code>.
    .div(slot="example")
      legend.chi-label Select options
      ul.chi-form__item.-list(style="max-width:20rem")
        li.chi-form__item
          label.chi-switch(for="toggle10")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", id="toggle10")
            span(class="chi-switch__content")
              span.chi-switch__thumb
        li.chi-form__item
          label.chi-switch(for="toggle11")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", id="toggle11")
            span(class="chi-switch__content")
              span.chi-switch__thumb
        li.chi-form__item
          label.chi-switch(for="toggle12")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", id="toggle12")
            span(class="chi-switch__content")
              span.chi-switch__thumb
        li.chi-form__item
          label.chi-switch(for="toggle13")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", id="toggle13")
            span(class="chi-switch__content")
              span.chi-switch__thumb
        li.chi-form__item
          label.chi-switch(for="toggle14")
            span.chi-switch__label Label
            input(type="checkbox", class="chi-switch__input", id="toggle14")
            span(class="chi-switch__content")
              span.chi-switch__thumb
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
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
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
