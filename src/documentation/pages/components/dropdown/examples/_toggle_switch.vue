<template lang="pug">
  <ComponentExample title="Toggle Switch" id="toggle_switch" :tabs="exampleTabs" backgroundColor="#eee">
    .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4(slot="example")
      .chi-dropdown__menu.-active
        legend.chi-dropdown__menu-item Configure options
        .chi-dropdown__menu-item
          .chi-form__item
            label.chi-switch.-xs(for="toggle-mail")
              input(type="checkbox", class="chi-switch__input", id="toggle-mail")
              span(class="chi-switch__content")
                span.chi-switch__thumb
              span.chi-switch__label Email notifications
        .chi-dropdown__menu-item
          .chi-form__item
            label.chi-switch.-xs(for="toggle-tlf")
              input(type="checkbox", class="chi-switch__input", id="toggle-tlf")
              span(class="chi-switch__content")
                span.chi-switch__thumb
              span.chi-switch__label Phone notifications
        .chi-dropdown__menu-item
          .chi-form__item
            label.chi-switch.-xs(for="toggle-app")
              input(type="checkbox", class="chi-switch__input", id="toggle-app")
              span(class="chi-switch__content")
                span.chi-switch__thumb
              span.chi-switch__label App notifications
    <Wrapper slot="code-webcomponent">      
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <fieldset>
    <legend class="chi-dropdown__menu-item">Configure options</legend>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-mail">
          <input type="checkbox" class="chi-switch__input" id="toggle-mail">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Email notifications</span>
        </label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-tlf">
          <input type="checkbox" class="chi-switch__input" id="toggle-tlf">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Phone notifications</span>
        </label>
      </div>
    </div>
    <div class="chi-dropdown__menu-item">
      <div class="chi-form__item">
        <label class="chi-switch -xs" for="toggle-app">
          <input type="checkbox" class="chi-switch__input" id="toggle-mail">
          <span class="chi-switch__content">
            <span class="chi-switch__thumb"></span>
          </span>
          <span class="chi-switch__label">Email notifications</span>
        </label>
      </div>
    </div>
  </fieldset>
</div>`
      }
    };
  }
})
export default class ToggleSwitch extends Vue {}
</script>
