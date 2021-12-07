<template lang="pug">
  div
    h3 Overview
    p.-text 
      | Chi icons are a collection of high-quality vector icons designed by Lumen for use in consumer, enterprise, and internal applications.
      | All icons have been manually optimized to achieve the fastest load time without compromising visual path and shape quality. For icon requests or
      | feedback, please email <a href="mailto:chi.support@centurylink.com">Chi Support</a>.
    h3 Using Icons
    p.-text
      | Chi icons can be added to projects in one of two ways: Web Component (SVG) or HTML Blueprint (Web Font).
      | The Web Component approach is dependent on your project using Chi's <a href="../../getting-started/installation">Web Components</a>.
      | The HTML Blueprint approach has no dependencies and all icons come pre-packaged in <a href="../../getting-started/installation">Chi CSS</a>.

    <Wrapper v-if="$store.state.themes.theme === 'lumen'">
      <Base />
      <Sizes />
    </Wrapper>

    <Wrapper v-if="$store.state.themes.theme === 'centurylink'">
      <Base />
      <Sizes />
    </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    Sizes,
  }
})
export default class Examples extends Vue {}
</script>
