<template lang="pug">
  <ComponentExample title="Responsive background-color examples" id="responsive-background-examples" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    .-text.-b--1.-p--3.-m--1(
      slot="example"
      v-for="example in examples"
      :class="generateClassName(example.className, example.additionalClassName)"
      :style="`color:${example.textColor ? example.textColor : 'white'}`") {{ generateClassName(example.className, example.additionalClassName) }}
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})
export default class ResponsiveBackgroundExamples extends Vue {
  examples = [
    {
      className: 'primary',
      size: 'on all breakpoints',
      additionalClassName: ''
    },
    {
      className: 'secondary',
      textColor: 'black',
      additionalClassName: 'sm',
      size: 'from sm'
    },
    {
      className: 'warning',
      additionalClassName: 'md',
      size: 'from md'
    },
    {
      className: 'danger',
      additionalClassName: 'lg',
      size: 'from lg'
    },
    {
      className: 'black',
      additionalClassName: 'xl',
      size: 'from xl'
    },
    {
      className: 'none',
      textColor: 'black',
      size: 'on all breakpoints',
      additionalClassName: '',
      noColor: true
    }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.examples.map(({ className, size, additionalClassName, noColor }) => {
      return (
        `<!-- background${noColor ? '' : '-color'} ${className} ${size} -->
<div class="${this.generateClassName(className, additionalClassName)}"></div>`
      )
    }).join('\n');
  }

  generateClassName(base = '', additional = '') {
    return `-bg${additional ? `-${additional}` : ''}--${base}`
  }
}
</script>
