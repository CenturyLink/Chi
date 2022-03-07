<template lang="pug">
  div
    h2 Examples
    <Base />
    <Single />
    <DotControllers />
    <Pagination />
    <CustomControllers />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Single from './_single.vue';
import DotControllers from './_dot-controllers.vue';
import Pagination from './_pagination.vue';
import CustomControllers from './_custom-controllers.vue';

@Component({
  components: {
    Base,
    Single,
    DotControllers,
    Pagination,
    CustomControllers
  }
})
export default class Examples extends Vue {}
</script>
