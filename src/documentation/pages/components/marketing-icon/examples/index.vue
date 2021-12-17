<template lang="pug">
  div
    h2 Overview
    p.-text
      | Chi Marketing Icons are a collection of high-quality vector icons designed by Lumen for use in consumer, enterprise, and internal applications.
      | All icons have been manually optimized to achieve the fastest load time without compromising visual path and shape quality. For icon requests or
      | feedback, please email <a href="mailto:chi.support@centurylink.com">Chi Support</a>.

    h2 Examples

    <Base />
    <Sizes />
    <Icons />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Sizes from './_sizes.vue';
import Icons from './_icons.vue';

@Component({
  components: {
    Base,
    Sizes,
    Icons
  }
})
export default class Examples extends Vue {}
</script>
