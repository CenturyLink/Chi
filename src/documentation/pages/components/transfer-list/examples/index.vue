<template lang="pug">
h2 Examples
div
  BaseExample
  ModalExample
  ModalConfigExample
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Modal from './_modal.vue';
import ModalConfig from './_modal-config.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    ModalExample: Modal,
    ModalConfigExample: ModalConfig
  },
})
export default class Examples extends Vue {}
</script>
