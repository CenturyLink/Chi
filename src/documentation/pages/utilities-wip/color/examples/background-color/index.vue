<template lang="pug">
  div
    h2(class="-anchor" :id="id") Background-color
      span
        a(class="-ml--1" :href="'/utilities/color/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | Define background-color classes using the format <code>-bg-{breakpoint}--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    Brand(v-if="!['centurylink'].includes($store.state.themes.theme)")
    BrandCenturyLink(v-if="['centurylink'].includes($store.state.themes.theme)")
    BrandComplimentary 
    Neutral 
    Semantic(v-if="!['centurylink'].includes($store.state.themes.theme)")
    SemanticCenturyLink(v-if="['centurylink'].includes($store.state.themes.theme)")
    None 
    TargetSpecificBreakpoints 
    ResponsiveExamples 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Brand from './_brand.vue';
import BrandCenturyLink from './_brand_centuryLink.vue';
import BrandComplimentary from './_brand-complimentary.vue';
import Neutral from './_neutral.vue';
import Semantic from './_semantic.vue';
import SemanticCenturyLink from './_semantic_centuryLink.vue';
import None from './_none.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import ResponsiveExamples from './_resposive-examples.vue';

@Component({
  data: () => {
    return {
      id: 'background-color'
    };
  },
  components: {
    Brand,
    BrandCenturyLink,
    BrandComplimentary,
    Neutral,
    Semantic,
    SemanticCenturyLink,
    None,
    TargetSpecificBreakpoints,
    ResponsiveExamples
  }
})
export default class BackgroundColor extends Vue {}
</script>
