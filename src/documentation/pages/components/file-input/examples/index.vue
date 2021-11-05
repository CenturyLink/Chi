<template lang="pug">
  div
    h2 Examples
    div(slot="example-description")
      p.-text To render a file input, apply the class <code>chi-file-input</code>
        | to an <code>input type="file"</code> and add a label next to it.

    div(v-if="$store.state.themes.theme === 'portal'")
      <Base />
      <Disabled />
      <SizesPortal />

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <Base />
      <Disabled />  
      <Sizes />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Sizes from './_sizes.vue';
import SizesPortal from './_portal/_sizes_portal.vue'

@Component({
  components: {
    Base,
    Disabled,
    Sizes,
    SizesPortal
  }
})
export default class Examples extends Vue {}
</script>
