<template lang="pug">
  <ComponentExample title="User states" id="user_states" padding="-p--0" :tabs="exampleTabs" :showTabsHead="false">
    .-p--3(slot="example")
      .chi-badge(:class="`-flat -m--1 -${indicator.className}`" v-for="indicator in indicators")
        .chi-badge__content
          i(:class="`chi-icon ${indicator.icon}`" aria-hidden="true")
          span {{ indicator.text }}
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class UserState extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    }
  ]
  indicators = [
    {
      icon: 'icon-circle',
      text: 'Online',
      className: 'success'

    },
    {
      icon: 'icon-circle-clock',
      text: 'Away',
      className: 'warning'
    },
    {
      icon: 'icon-circle-minus',
      text: 'Do not disturb',
      className: 'danger'
    },
    {
      icon: 'icon-circle',
      text: 'Offline',
      className: 'muted'
    },
    {
      icon: 'icon-circle-outline',
      text: 'Invisible',
      className: 'muted'
    },
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.indicators.map(({ icon, text, className }) => {
      return (
        `<!-- ${text} -->
<div class="chi-badge -flat -${className}">
  <div class="chi-badge__content">
    <i class="chi-icon ${icon}" aria-hidden="true"></i>
    <span>${text}</span>
  </div>
</div>`
      )
    }).join('\n');
  }
}
</script>
