<template lang="pug">
h2 Examples
div
  BaseExample
  ModalExample
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Modal from './_modal.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    ModalExample: Modal
  },
})
export default class Examples extends Vue {}
</script>
