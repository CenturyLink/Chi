<template lang="pug">
  <ComponentExample title="Horizontal" titleSize="h4" id="small-horizontal" :tabs="exampleTabs">
    <Wrapper slot="example">
      ul.chi-steps.-sm.-pb--4.-p-sm--6
        li(v-for="(step, index) in steps" :key="index" :class="`chi-steps__item ${step.class}`")
          div.chi-steps__icon
            div.chi-steps__content
              a.chi-steps__item-title(href='#') {{ step.title }}
          div.chi-steps__line(v-if="step.title !== 'Step 5'")
      p.-text--center
        | Base
      ul.chi-steps.-horizontal-label.-sm.-labels-sm--hide.-p-sm--5
        li(v-for="(step, index) in steps" :key="index" :class="`chi-steps__item ${step.class}`")
          div.chi-steps__icon
          div.chi-steps__content
            a.chi-steps__item-title(href='#') {{ step.title }}
          div.chi-steps__line(v-if="step.title !== 'Step 5'")
      p.-text--center
        | Horizontal labels
    </Wrapper>
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
        htmlblueprint: `<!-- Base -->
<ul class="chi-steps -sm">
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
</ul>
<!-- Horizontal labels -->
<ul class="chi-steps -horizontal-label -sm">
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
  <li clas="chi-steps__item">
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
export default class SmallHorizontal extends Vue {}
</script>
