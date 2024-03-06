<template lang="pug">
<TitleAnchor title="Styling" id="styling" titleSize="h2" />
p.-text Chi components will have scoped CSS, to prevent collisions when using in non-chi compatible environments.
Copy(id="styling" :code="codeSnippets.htmlblueprint")
p.-text
  | As of now, there is no support for per-version scoped CSS. This means that rules from two different
  | versions of chi components will collide, so it should be avoided.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Styling extends Vue {
  codeSnippets = {
    htmlblueprint: `@NuxtComponent({
  tag: 'chi-icon',
  styleUrl: 'icon.scss',
  scoped: true
})`,
  };
}
</script>
