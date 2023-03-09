<template lang="pug">
  div
    <TitleBar title="Card" description="A collection of templates built with responsive Cards." />
    .chi-grid__container.-pt--3
        <MarketingFeatureCards />
        <CategoryCards />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MarketingFeatureCards from './_marketing-feature-cards.vue';
import CategoryCards from './_category-cards.vue';

@Component({
  head() {
    return {
      title: 'Chi - Card'
    }
  },
  components: {
    MarketingFeatureCards,
    CategoryCards
  },
  layout() {
    return 'wide';
  }
})
export default class Card extends Vue {}
</script>
