<template lang="pug">
<TitleAnchor title="Component (TS class)" id="component-ts-class" titleSize="h3" />
p.-text The name of the ES6 class of the component SHOULD NOT have a prefix since classes are scoped. There is no risk of collision.

Copy(id="ts-class" :code="codeSnippets.htmlblueprint" lang="typescript")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ComponentTsClass extends Vue {
  codeSnippets = {
    htmlblueprint: `@Component({
  tag: 'chi-button'
})
export class Button { ... }

@Component({
  tag: 'chi-icon'
})
export class Icon { ... }`,
  };
}
</script>
