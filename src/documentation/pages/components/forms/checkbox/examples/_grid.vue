<template lang="pug">
  <ComponentExample title="Grid" id="grid" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text   
        | Use <code>chi-grid</code> to render a group of checkboxes in a responsive grid.
        | In the example below, the checkboxes display in 4 columns on medium screens and up,
        | 2 columns on small screens, and 1 column on x-small screens.
    div(slot="example")
      .chi-grid
        .chi-col.-w--12.-mb--1
          legend.chi-label Select options
        each i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          .chi-col.-w--12.-w-md--3.-w-sm--6.-mb--1
            .chi-form__item
              .chi-checkbox
                input(type="checkbox" class="chi-checkbox__input" id=`checkbox-g${i}`)
                label(for=`checkbox-g${i}` class="chi-checkbox__label")="Option " + i
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
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
  <div class="chi-grid">
    <div class="chi-col -w--12 -mb--1">
      <legend class="chi-label">Select options</legend>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g1">
          <label class="chi-checkbox__label" for="checkbox-g1">Option 1</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g2">
          <label class="chi-checkbox__label" for="checkbox-g2">Option 2</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g3">
          <label class="chi-checkbox__label" for="checkbox-g3">Option 3</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g4">
          <label class="chi-checkbox__label" for="checkbox-g4">Option 4</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g5">
          <label class="chi-checkbox__label" for="checkbox-g5">Option 5</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g6">
          <label class="chi-checkbox__label" for="checkbox-g6">Option 6</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g7">
          <label class="chi-checkbox__label" for="checkbox-g7">Option 7</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g8">
          <label class="chi-checkbox__label" for="checkbox-g8">Option 8</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g9">
          <label class="chi-checkbox__label" for="checkbox-g9">Option 9</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g10">
          <label class="chi-checkbox__label" for="checkbox-g10">Option 10</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g11">
          <label class="chi-checkbox__label" for="checkbox-g11">Option 11</label>
        </div>
      </div>
    </div>
    <div class="chi-col -w--12 -w-md--3 -w-sm--6 -mb--1">
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" type="checkbox" id="checkbox-g12">
          <label class="chi-checkbox__label" for="checkbox-g12">Option 12</label>
        </div>
      </div>
    </div>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Grid extends Vue {
  mounted() {}
}
</script>
