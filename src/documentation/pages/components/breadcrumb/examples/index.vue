<template lang="pug">
h2 Examples
p.-text To render a breadcrumb, use the class <code>chi-breadcrumb</code>.
<BreadcrumBase />
<AlternateSeparator />
<AdditionalSizes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import AlternateSeparator from './_alternate-separator.vue';
import AdditionalSizes from './_additional-sizes.vue';

@NuxtComponent({
  components: {
    BreadcrumBase: Base,
    AlternateSeparator,
    AdditionalSizes,
  },
})
export default class Examples extends Vue {}
</script>
