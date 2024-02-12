<template lang="pug">
  <ComponentExample title="User states" id="user_states" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example)
      .-p--3
        .chi-badge(:class="`-flat -m--1 -${indicator.className}`" v-for="indicator in indicators")
          .chi-badge__content
            i(:class="`chi-icon ${indicator.icon}`" aria-hidden="true")
            span {{ indicator.text }}
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class UserState extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  indicators = [
    {
      icon: 'icon-circle',
      text: 'Online',
      className: 'success',
    },
    {
      icon: 'icon-circle-clock',
      text: 'Away',
      className: 'warning',
    },
    {
      icon: 'icon-circle-minus',
      text: 'Do not disturb',
      className: 'danger',
    },
    {
      icon: 'icon-circle',
      text: 'Offline',
      className: 'muted',
    },
    {
      icon: 'icon-circle-outline',
      text: 'Invisible',
      className: 'muted',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.indicators
      .map(({ icon, text, className }) => {
        return `<!-- ${text} -->
<div class="chi-badge -flat -${className}">
  <div class="chi-badge__content">
    <i class="chi-icon ${icon}" aria-hidden="true"></i>
    <span>${text}</span>
  </div>
</div>`;
      })
      .join('\n');
  }
}
</script>
