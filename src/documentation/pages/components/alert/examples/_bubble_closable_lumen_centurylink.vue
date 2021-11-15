<template lang="pug">
  <ComponentExample title="Closable" titleSize="h4" id="bubble_closable_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text To allow users to dismiss an alert.
    div(slot='example')
      chi-alert.-m--2(color='warning', icon='warning', closable)
        | This is a closable warning alert
      chi-alert.-m--2(color='warning', icon='warning', title="Warning", closable)
        | This is a closable warning alert
      chi-alert.-m--2(color='warning', icon='warning', size='lg', title="Warning", closable)
        | This is a large closable warning alert
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | Use attribute <code>closable</code> to render a close button that allows users to dismiss an alert.
          br
          | Use attribute <code>mutable</code> to remove alert once close buttons is clicked.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | Use the class <code>-close</code>
          | and insert a close button <code>chi-alert__close-button</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.htmlblueprint" class="html")
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
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- closable -->
<chi-alert color="warning" icon="warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- closable Titled -->
<chi-alert color="warning" icon="warning" title="Warning" closable>
  This is a closable warning alert
</chi-alert>
<!-- Large closable Titled -->
<chi-alert color="warning" icon="warning" size="lg" title="Warning" closable>
  This is a large closable warning alert
</chi-alert>`,
        htmlblueprint: `<!-- Closable -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- closable Titled -->
<div class="chi-alert -warning -close" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Large closable Titled -->
<div class="chi-alert -warning -close -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a large closable warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`
      }
    };
  }
})
export default class BubbleClosableLumenCenturyLink extends Vue {
  mounted() {}
}
</script>
