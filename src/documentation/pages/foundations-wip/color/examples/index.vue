<template lang="pug">
.chi-grid__container.-pt--3
  p.-text
    | Chi colors are designed to comply with U.S. <a href="https://www.section508.gov/">Section 508</a> federal requirements.
    | Section 508 follows the Web Content Accessibility Guidelines (<a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0</a>) Level AA
    | standards which require text and background color contrast ratios of 4.5:1 or higher.
    | All Chi colors either meet (AA) or exceed (AAA) these standards and have been marked below accordingly.
  div(v-if="theme !== 'colt'")
    <Brand />
    .chi-divider.-mt--3.-mb--5
    <Neutral />
    .chi-divider.-mt--3.-mb--5
    <Semantic />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Brand from './_brand.vue';
import Neutral from './_neutral.vue';
import Semantic from './_semantic.vue';

@NuxtComponent({
  components: {
    Brand,
    Neutral,
    Semantic,
  },
})
export default class Examples extends Vue {
  theme = useSelectedTheme();
}
</script>
