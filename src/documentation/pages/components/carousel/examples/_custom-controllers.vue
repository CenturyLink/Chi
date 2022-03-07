<template lang="pug">
  <ComponentExample title="Custom Controllers" id="custom-controllers" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use <code>slot="previous"</code> and <code>slot="next"</code> to provide custom controllers to carousel.
    chi-carousel(single slot="example")
      button.examplePreviousButton(slot="previous")
        i.chi-icon.icon-chevron-left.-sm--2(aria-hidden="true")
      button.exampleNextButton(slot="next")
        i.chi-icon.icon-chevron-right.-sm--2(aria-hidden="true")
        .chi-carousel__item.-text--xl.-d--flex.-align-items--center.-justify-content--center.-bg--grey-10(style="height: 20rem; box-sizing: border-box;", slot="items" v-for="item in [1,2,3,4,5,6,7,8]" :key="item")
          | {{ item }}
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
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-carousel single>
  <button class="examplePreviousButton" slot="previous">
    <i class="chi-icon icon-chevron-left -sm--2" aria-hidden="true"></i>
  </button>
  <button class="exampleNextButton" slot="next">
    <i class="chi-icon icon-chevron-right -sm--2" aria-hidden="true"></i>
  </button>
  <div class="chi-carousel__item" slot="items">View 1</div>
  <div class="chi-carousel__item" slot="items">View 2</div>
  <div class="chi-carousel__item" slot="items">View 3</div>
  <div class="chi-carousel__item" slot="items">View 4</div>
  <div class="chi-carousel__item" slot="items">View 5</div>
  <div class="chi-carousel__item" slot="items">View 6</div>
  <div class="chi-carousel__item" slot="items">View 7</div>
  <div class="chi-carousel__item" slot="items">View 8</div>
</chi-carousel>

<!-- Style custom controllers according to your design requirements -->
<style type="text/css">
  button.examplePreviousButton,
  button.exampleNextButton {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0.5;
    width: 100%;
  }

  button.examplePreviousButton:hover,
  button.exampleNextButton:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class CustomControllers extends Vue {}
</script>

<style scoped>
  button.examplePreviousButton,
  button.exampleNextButton {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    height: 100%;
    width: 100%;
  }

  button.examplePreviousButton:hover,
  button.exampleNextButton:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>
