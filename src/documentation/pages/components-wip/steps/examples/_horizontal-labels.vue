<template lang="pug">
  <ComponentExample title="Horizontal Labels" id="horizontal-labels" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | To display steps with horizontal labels, apply the class <code>-horizontal-label</code> to the steps container and
      |  indicate the active link with the class <code>-active</code> and the class <code>-completed</code> in the corresponding div tag.
    ul.chi-steps.-horizontal-label.-labels-sm--hide.-p-sm--5(slot="example")
      li(v-for="(step, index) in steps" :key="index" :class="`chi-steps__item ${step.class}`")
        div.chi-steps__icon
        div.chi-steps__content
          a.chi-steps__item-title(href='#') {{ step.title }}
        div.chi-steps__line(v-if="step.title !== 'Step 5'")
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
      steps: [
        { title: 'Step 1', class: '-completed' },
        { title: 'Step 2', class: '-completed' },
        { title: 'Step 3', class: '-active' },
        { title: 'Step 4', class: '' },
        { title: 'Step 5', class: '' }
      ],
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
</ul>`
      }
    };
  }
})
export default class HorizontalLabels extends Vue {}
</script>
