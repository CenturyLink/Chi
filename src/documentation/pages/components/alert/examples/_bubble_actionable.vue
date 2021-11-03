<template lang="pug">
  <ComponentExample title="Actionable" titleSize="h4" id="bubble_actionable" padding="-p--1" :tabs="exampleTabs">
    div(slot='example')
      chi-alert.-m--2(color='success', icon='circle-check', size='lg', title="Success", closable)
        | This is a large closable success alert
        chi-button(slot="chi-alert__actions") Secondary action
        chi-button(slot="chi-alert__actions", color='primary') Primary action
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | Add buttons to an alert by defining <code>slot="chi-alert__actions"</code> on each <code>chi-button</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | While <code>chi-alert__actions</code> can be added to any Alert, alert actions are best suited for default or Titled alerts with the size class <code>-lg</code>.
          br
          | Large Alerts have extra <code>chi-alert</code> padding, a larger <code>chi-alert__icon</code>, and a larger <code>chi-alert__close-button</code>.
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
        webcomponent: `<chi-alert color="success" icon="circle-check" size="lg" title="Success" closable>
  This is a large closable success alert
  <chi-button slot="chi-alert__actions">Secondary action</chi-button>
  <chi-button slot="chi-alert__actions" color="primary">Primary action</chi-button>
</chi-alert>`,
        htmlblueprint: `<div class="chi-alert -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large closable success alert</p>
    <div class="chi-alert__actions">
      <button class="chi-button">Secondary action</button>
      <button class="chi-button -primary">Primary action</button>
    </div>
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
export default class BubbleActionable extends Vue {
  mounted() {}
}
</script>
