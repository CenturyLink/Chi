<template lang="pug">
  div
    h2 Examples
    p.-text To render application layout, use the tag <code>chi-main</code>.

    <Base />
    <BaseHelp />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHelp from './_base-help.vue';
import Base from './_base.vue';

@Component({
  components: {
    Base,
    BaseHelp
  },
})
export default class Examples extends Vue {}
</script>
