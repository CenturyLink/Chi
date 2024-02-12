<template lang="pug">
h2 Examples
p.-text
  | The Brand component is primarily used in application headers to showcase
  | Lumen brands and function as a home navigation link. Examples below have been
  | placed in a <code>chi-link</code> to facilitate this use case, but note,
  | placing in a <code>chi-link</code> tag is not required.

BaseExample
<Inverse />
<White />
<Black />
<Sizes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Inverse from './_inverse.vue';
import White from './_white.vue';
import Black from './_black.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Inverse,
    White,
    Black,
    Sizes,
  },
})
export default class Examples extends Vue { }
</script>
