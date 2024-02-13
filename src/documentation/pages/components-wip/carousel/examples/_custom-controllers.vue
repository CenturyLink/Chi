<template lang="pug">
  <ComponentExample title="Custom Controllers" id="custom-controllers" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use <code>slot="previous"</code> and <code>slot="next"</code> to provide custom controllers to carousel.
    template(#example)
      chi-carousel(single)
        div(slot="previous")
          button.examplePreviousButton
            i.chi-icon.icon-chevron-left.-sm--2(aria-hidden="true")
        div(slot="next")
          button.exampleNextButton
            i.chi-icon.icon-chevron-right.-sm--2(aria-hidden="true")
        div(slot="items")
          .chi-carousel__item.-text--xl.-d--flex.-align-items--center.-justify-content--center.-bg--grey-10(style="height: 20rem; box-sizing: border-box;", v-for="item in [1,2,3,4,5,6,7,8]" :key="item")
            | {{ item }}
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
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
        htmlblueprint: ``,
      },
    };
  },
})
export default class CustomControllers extends Vue { }
</script>

<style>
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
