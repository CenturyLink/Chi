<template lang="pug">
  .chi-grid__container.-pt--3
    <MarketingFeatureCards />
    <CategoryCards />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import MarketingFeatureCards from '~/pages/templates-wip/card/examples/_marketing-feature-cards.vue';
import CategoryCards from '~/pages/templates-wip/card/examples/_category-cards.vue';

@NuxtComponent({
  components: {
    MarketingFeatureCards,
    CategoryCards,
  },
})
export default class Examples extends Vue {}
</script>
