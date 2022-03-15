<template lang="pug">
  <ComponentExample title="Single element per view" id="single" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use the attribute <code>single</code> to render single item per view.
    chi-carousel(single slot="example")
      .chi-carousel__item.-p--1(style="height: 10rem;" slot="items" v-for="item in [1,2,3,4,5,6,7,8]" :key="item")
        .-w--100.-h--100.-bg--grey-10.-d--flex.-align-items--center.-justify-content--center
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
          label: 'Web component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-carousel single>
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
      }
    }
  }
})
export default class Single extends Vue {}
</script>
