<template lang="pug">
  <ComponentExample title="Application states" id="application_states" padding="-p--0" :tabs="exampleTabs" :showTabsHead="false">
  .-p--3(slot="example")
    .chi-badge(:class="`-flat -m--1${indicator.className && ' -'}${indicator.className}`" v-for="indicator in indicators")
      .chi-badge__content
        i(v-if="!indicator.svgIcon" :class="`chi-icon ${indicator.icon}`" aria-hidden="true")
        div(v-else v-html="indicator.svgIcon")
        span {{ indicator.text }}
  <pre class="language-html" slot="code-htmlblueprint">
  <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
  </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ApplicationState extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  indicators = [
    {
      icon: 'icon-circle',
      text: 'Running',
      className: 'success'
    },
    {
      svgIcon: (
        `<svg class="chi-spinner -sm" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>`
      ),
      text: 'Processing',
      className: '',
    },
    {
      icon: 'icon-warning',
      text: 'Unavailable',
      className: 'warning'
    },
    {
      icon: 'icon-circle',
      text: 'Stopped',
      className: 'danger'
    },
    {
      icon: 'icon-circle',
      text: 'Terminated',
      className: 'muted'
    },
    {
      icon: 'icon-circle-outline',
      text: 'Unknown',
      className: 'muted'
    }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.indicators.map(({ icon, text, className, svgIcon }) => {
      return (
        `<!-- ${text} -->
<div class="chi-badge -flat${className && ' -'}${className}">
  <div class="chi-badge__content">
    ${this.chooseIcon(svgIcon, icon)}
    <span>${text}</span>
  </div>
</div>`
      )
    }).join('\n');
  }
  chooseIcon(svgIcon?: string , icon?: string) {
    if (svgIcon) return svgIcon;
    return `<i class="chi-icon ${icon}" aria-hidden="true"></i>`;
  }
}
</script>
