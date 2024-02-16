<template lang="pug">
<ComponentExample title="Horizontal Labels" id="horizontal-labels" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | To display steps with horizontal labels, apply the class <code>-horizontal-label</code> to the steps container and
      |  indicate the active link with the class <code>-active</code> and the class <code>-completed</code> in the corresponding div tag.
  template(#example)
    ul.chi-steps.-horizontal-label.-labels-sm--hide.-p-sm--5
      li(v-for="(step, index) in steps" :key="index" :class="`chi-steps__item ${step.class}`")
        div.chi-steps__icon
        div.chi-steps__content
          a.chi-steps__item-title(href='#') {{ step.title }}
        div.chi-steps__line(v-if="step.title !== 'Step 5'")
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
      steps: [
        { title: 'Step 1', class: '-completed' },
        { title: 'Step 2', class: '-completed' },
        { title: 'Step 3', class: '-active' },
        { title: 'Step 4', class: '' },
        { title: 'Step 5', class: '' },
      ],
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul class="chi-steps -horizontal-label">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 1</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 2</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 3</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 4</a>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon"></div>
    <div class="chi-steps__content">
      <a class="chi-steps__item-title" href="#">Step 5</a>
    </div>
  </li>
</ul>`,
      },
    };
  },
})
export default class HorizontalLabels extends Vue { }
</script>
