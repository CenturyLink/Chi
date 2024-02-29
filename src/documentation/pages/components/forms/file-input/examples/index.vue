<template lang="pug">
h2 Examples
p.-text To render a file input, apply the class <code>chi-file-input</code>
    | to an <code>input type="file"</code> and add a label next to it.

<FileInputBase />
<Disabled />
<Sizes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    FileInputBase: Base,
    Disabled,
    Sizes,
  },
})
export default class Examples extends Vue {}
</script>
