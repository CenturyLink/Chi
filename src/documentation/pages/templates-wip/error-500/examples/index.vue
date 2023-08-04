<template lang="pug">
  div
    div(v-if="$store.state.themes.theme === 'lumen' || $store.state.themes.theme === 'portal'")
      <Base />

    div(v-if="$store.state.themes.theme === 'centurylink'")
      <BaseCenturylink />

    div(v-if="$store.state.themes.theme === 'brightspeed'")
      <BaseBrightspeed />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCenturylink from './_centurylink/_base_centurylink.vue';
import BaseBrightspeed from './_brightspeed/_base_brightspeed.vue';
import Base from './_base.vue';

@Component({
  components: {
    Base,
    BaseCenturylink,
    BaseBrightspeed,
  }
})
export default class Examples extends Vue {}
</script>
