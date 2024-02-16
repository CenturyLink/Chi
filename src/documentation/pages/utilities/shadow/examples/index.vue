<template lang="pug">
.chi-grid__container
  <Notation />
  <TitleAnchor title="Examples" id="examples" titleSize="h2" />
  <Default />
  <Responsive />
  <SASS />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Default from './_default.vue';
import Responsive from './_responsive.vue';
import SASS from './_sass.vue';
import Notation from './_notation.vue';

@NuxtComponent({
  components: {
    Default,
    Responsive,
    SASS,
    Notation,
  },
})
export default class Examples extends Vue {}
</script>
