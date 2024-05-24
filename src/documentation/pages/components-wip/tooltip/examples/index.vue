<template lang="pug">
  div
    h2 Examples

    BaseExample
    <LightLumenCenturyLink v-if="['lumen', 'centurylink', 'lumenrebrand24'].includes(selectedTheme)" />
    <Disabled />
    <Positioning />
    <Long />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Long from './_long.vue';
import Disabled from './_disabled.vue';
import LightLumenCenturyLink from './_light-lumen-centurylink.vue';
import Positioning from './_positioned.vue';
import Base from './_base.vue';

@NuxtComponent({
  components: {
    Long,
    Disabled,
    LightLumenCenturyLink,
    Positioning,
    BaseExample: Base,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
