<template lang="pug">
  <ComponentExample title="Dot controllers" id="dot-controllers" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use the attribute <code>dots</code> to render carousel with dot controller.
    template(#example)
      chi-carousel(dots)
        template(#items)
          .-d--flex
            .chi-carousel__item.-p--1(style="width: 18.1rem; height: 7rem;" v-for="item in [1,2,3,4,5,6,7,8]" :key="item")
              .-w--100.-h--100.-bg--grey-10.-d--flex.-align-items--center.-justify-content--center
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
        webcomponent: `<chi-carousel dots>
  <div class="-d--flex" slot="items">
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 1 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 2 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 3 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 4 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 5 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 6 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 7 -->
    </div>
    <div class="chi-carousel__item -p--1">
      <!-- Custom item 8 -->
    </div>
  </div>
</chi-carousel>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DotControllers extends Vue { }
</script>
