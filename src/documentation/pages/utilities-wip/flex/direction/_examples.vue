<template lang="pug">
  div
    ComponentExample(v-for="direction in directions" :key="direction" :title="setTitle(direction)" :padding="'-p--3'" :id="`direction-${direction}`" :codeSnippetWithoutTabs="true")
      p.-text(v-if="direction === 'row'" slot="example-description")
        | Use <code>-flex--row</code> to display items horizontally. In most cases this class
        | can be omitted as it is the browsers default behavior.
      p.-text(v-else-if="direction === 'row-reverse'" slot="example-description") Use <code>-flex--row-reverse</code> to display the items horizontally in reverse.
      p.-text(v-else-if="direction === 'column'" slot="example-description") Use <code>-flex--column</code> to display items vertically.
      p.-text(v-else-if="direction === 'column-reverse'" slot="example-description") Use <code>-flex--column-reverse</code> to display the items vertically in reverse.
      .-d--flex.-show--example(slot="example" :class="`-flex--${direction}`")
        .-text.-p--2(v-for="item in items") {{ item }}
      pre(class="language-html" :slot="`code-snippet-direction-${direction}`")
        code(v-highlight="setCodeSnippets(direction)" class="html")
    
    p.-text Target specific breakpoints with Direction responsive classes.
    ul.-mb--3
      li(v-for="direction in directions")
        code -flex--{{ direction }}
      li(v-for="responsiveDirection in responsiveDirections")
        code {{ responsiveDirection }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'direction-examples',
      items: ['Item 1', 'Item 2', 'Item 3'],
      sizes: ['sm', 'md', 'lg', 'xl'],
      directions: [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      responsiveDirections: [],
      codeSnippets: ``
    };
  }
})
export default class DirectionExamples extends Vue {
  created() {
    this._generateBreakpoints();
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.directions.forEach((direction: string) => {
        this.$data.responsiveDirections.push(
          `-flex-${size}--${direction}`
        );
      });
    });
  }

  setTitle(direction: string) {
    const defaultTitle = direction === 'row' ? ' (default)' : '';

    if(direction.includes('reverse')) {
      const title = direction.split('-')[0] + ' ' + direction.split('-')[1];

      return title.charAt(0).toUpperCase() + title.slice(1);
    }
    
    return direction.charAt(0).toUpperCase() + direction.slice(1) + defaultTitle;
  }

  setCodeSnippets(direction: string) {
    let codeSnippet = `<div class="-d--flex -flex--${direction}">\n`;

    this.$data.items.forEach((item: string) => {
      codeSnippet += `  <div>${item}</div>\n`;
    });

    return codeSnippet + '</div>';
  }
}
</script>
