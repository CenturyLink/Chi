<template lang="pug">
  div
    div(v-if="['lumen', 'portal'].includes(selectedTheme)")
      BaseExample

    div(v-if="selectedTheme === 'centurylink'")
      <BaseCenturylink />

    div(v-if="selectedTheme === 'brightspeed'")
      <BaseBrightspeed />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import BaseCenturylink from './_centurylink/_base_centurylink.vue';
import BaseBrightspeed from './_brightspeed/_base_brightspeed.vue';
import Base from './_base.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    BaseCenturylink,
    BaseBrightspeed,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
