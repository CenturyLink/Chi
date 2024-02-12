<template lang="pug">
  div
    h2 Examples

    <client-only placeholder="loading...">
      BaseExample
      <Disabled />
      <SizesPortal v-if="selectedTheme === 'portal'" />
      <SizesLumenCenturyLink v-else />
    </client-only>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import SizesPortal from './_portal_sizes.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Disabled,
    SizesLumenCenturyLink,
    SizesPortal,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
