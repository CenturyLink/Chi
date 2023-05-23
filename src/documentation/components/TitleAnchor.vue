<template>
  <div :class="additionalClasses">
    <h2 v-if="titleSize === 'h2'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="anchor" />
    </h2>
    <h3 v-else-if="titleSize === 'h3'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="anchor" />
    </h3>
    <h4 v-else-if="titleSize === 'h4'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="anchor" />
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})

export default class TitleAnchor extends Vue {
  @Prop() id?: string;
  @Prop({ default: 'h3' }) titleSize?: 'h2' | 'h3' | 'h4';
  @Prop() additionalClasses?: string;

  get anchor() {
    return `<a class="-ml--1" :href="?theme=${this.$store.state.themes.theme}#${this.id}">#</a>`
  }
}
</script>
