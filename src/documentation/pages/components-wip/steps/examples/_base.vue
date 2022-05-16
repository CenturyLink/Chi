<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    ul.chi-steps.-pb--2.-p-sm--6(slot="example")
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
        htmlblueprint: `<ul class="chi-steps">
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 1</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -completed">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 2</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item -active">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 3</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 4</a>
      </div>
    </div>
    <div class="chi-steps__line"></div>
  </li>
  <li class="chi-steps__item">
    <div class="chi-steps__icon">
      <div class="chi-steps__content">
        <a class="chi-steps__item-title" href="#">Step 5</a>
      </div>
    </div>
  </li>
</ul>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
