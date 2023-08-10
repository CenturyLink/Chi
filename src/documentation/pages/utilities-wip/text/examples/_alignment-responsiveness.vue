<template lang="pug">
  <ComponentExample padding="-p--0" title="Text alignment" id="text-alignment-responsiveness" :tabs="exampleTabs" :showSnippetTabs="false">
    div(slot="example-description")
      p.-text
        | Text utility classes can be align using the format <code>-text[-{breakpoint}]--{alignment}</code>.
      <TitleAnchor title="{breakpoint}" id="text-breakpoint" titleSize="h4"/>
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li blank - leave blank to apply <code>alignment</code> to all breakpoints.
        li(v-for="({ name, value }) in breakpoints") <code>{{ name }}</code> - use to apply <code>alignment</code> to {{ value }} breakpoints.
      <TitleAnchor title="{alignment}" id="text-sizes-inner" titleSize="h4"/>
      ul.-text
        li(v-for="alignment in alignments") <code>{{ alignment }}</code> - use to set <code>{{ alignment }}</code> the <code>text</code>
    .-mb--3(slot="example")
      .-m--3
        p.-text(v-for="({ className, value }) in classNames" :class="`-text-${ className }`") This text will render as {{ value }} breakpoints
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { breakpoints } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      breakpoints
    };
  }
})
export default class AlignmentResponsiveness extends Vue {
  classNames = [
    { className: 'md--justify', value: 'justified from md and larger' },
    { className: 'lg--left', value: 'left aligned from lg and larger' },
    { className: 'sm--center', value: 'center aligned from sm and larger' },
    { className: 'xl--right', value: 'right aligned from xl and larger' }
  ]

  alignments = ['justify', 'center', 'left', 'right']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.classNames
      .map(({ className, value }) => `<p class="-text-${ className }">This text will render as ${ value } breakpoints</p>`)
      .join('\n');
  }
}
</script>
