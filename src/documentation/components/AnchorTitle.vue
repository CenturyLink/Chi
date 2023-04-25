<template>
  <component :is="tag || 'h1'" class="-anchor" :id="id">
    {{ title }}
    <span>
      <a class="-ml--1" :href="anchor">#</a>
    </span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class AnchorTitle extends Vue {
  @Prop() anchor?: string;
  @Prop() title?: string;
  @Prop() id?: string;
  @Prop() tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
</script>
