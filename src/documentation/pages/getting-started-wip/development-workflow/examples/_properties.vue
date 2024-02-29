<template lang="pug">
<TitleAnchor title="Properties" id="properties" titleSize="h3" />

p.-text It is considered a good practice and SHOULD be configured to Reflect public properties to attributes.
Copy(id="reflect" :code="codeSnippets.htmlblueprint")

p.-text
  | Properties SHOULDN'T be configured as mutable and, once a value is set by a user, the component should not update
  | it internally. Use it only if strictly necessary.
Copy(id="mutable" :code="codeSnippets.htmlblueprint1")

p.-text
  | Properties SHOULD have a default value and MUST be validated.

p.-text Sometimes it is enough validation the use of a definition type:
Copy(id="bordered" :code="codeSnippets.htmlblueprint2")

p.-text Other times a function with a @Watch decorator is necessary:
Copy(id="validate-name" :code="codeSnippets.htmlblueprint3")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {
  codeSnippets = {
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
  };
}
</script>
