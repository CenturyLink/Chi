<template lang="pug">
  div
    <TitleAnchor title="Properties" id="properties" titleSize="h3" />

    p.-text It is considered a good practice and SHOULD be configured to Reflect public properties to attributes.
    <Copy id="reflect">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text
      | Properties SHOULDN'T be configured as mutable and, once a value is set by a user, the component should not update
      | it internally. Use it only if strictly necessary.
    <Copy id="mutable">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint1" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text
      | Properties SHOULD have a default value and MUST be validated.

    p.-text Sometimes it is enough validation the use of a definition type:
    <Copy id="bordered">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint2" lang='bash' class="html"></code>
      </pre>
    </Copy>

    p.-text Other times a function with a @Watch decorator is necessary:
    <Copy id="validate-name">
      <pre class="language-html" slot="code">
       <code v-highlight="codeSnippets.htmlblueprint3" lang='bash' class="html"></code>
      </pre>
    </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: '@Prop({ reflect: true }) color: string;',
        htmlblueprint1: '@Prop({ mutable: true}) color: string;',
        htmlblueprint2: '@Prop() bordered: boolean = false;',
        htmlblueprint3: `@Watch('name')
  validateName(newValue: string, oldValue: string) {
    const isBlank = typeof newValue == null;
    const has2chars = typeof newValue === 'string' && newValue.length >= 2;
    if (isBlank) { throw new Error('name: required') };
    if (!has2chars ) { throw new Error('name: has2chars') };
  }`,
      }
    }
  }
})
export default class Properties extends Vue {}
</script>
