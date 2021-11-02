<template lang="pug">
  <ComponentExample title="Default" titleSize="h4" id="bubble_default" padding="-p--1" :tabs="exampleTabs">
    div(slot='example')
      chi-alert.-m--2(icon='circle-info')
        | This is a base alert
      each val, type in {success:'circle-check', danger:'circle-warning', warning:'warning', info:'circle-info', muted:'circle-info'}
        chi-alert.-m--2(color=type, icon=val)
          = `This is ${type === "info" ? "an" : "a"} ${type} alert`
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | To render an alert use the tag <code>chi-alert</code>.
          | Use the color attribute to define a semantic color that corresponds to the meaning
          | or value state of your alert. Supported colors include <code>success</code>, <code>danger</code>, <code>warning</code>,
          | <code>info</code>, and <code>muted</code>. If no color is defined, alerts will default to the base style which uses the body
          | text color. This is useful for displaying neutral alerts with no specific value state.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | To render an alert, use the class <code>chi-alert</code>. Apply a semantic color class that corresponds to the meaning
          | or value state of your alert. Supported classes include <code>-success</code>, <code>-danger</code>, <code>-warning</code>,
          | <code>-info</code>, and <code>-muted</code>. If no class is defined, alerts will default to the base style which uses the body
          | text color. This is useful for displaying neutral alerts with no specific value state.
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
        webcomponent: `<!-- Base - No semantic color defined -->
<chi-alert icon="circle-info">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-warning">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info">
  This is a muted alert
</chi-alert>`,
        htmlblueprint: `<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`
      }
    };
  }
})
export default class BubbleDefault extends Vue {
  mounted() {}
}
</script>
