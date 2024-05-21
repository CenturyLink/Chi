<template lang="pug">
h2 Examples
p.-text To render a divider, apply the class <code>chi-divider</code> to an <code>hr</code> or <code>div</code> tag.

<DividerBase />
<Vertical />
<Inverse />
<Label />

<SizesLumenCenturyLink v-if="['lumen', 'centurylink', 'lumenrebrand24'].includes(selectedTheme)" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Vertical from './_vertical.vue';
import Inverse from './_inverse.vue';
import Label from './_label.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';

@NuxtComponent({
  components: {
    DividerBase: Base,
    Vertical,
    Inverse,
    Label,
    SizesLumenCenturyLink,
  },
})
export default class Examples extends Vue {
  selectedTheme = useSelectedTheme();
}
</script>
