<template>
  <div :class="[padding || 'example-wrapper', additionalClasses]" class="" :style="additionalStyle">
    <h2 v-if="titleSize === 'h2'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="getAnchor(id)" />
    </h2>
    <h3 v-else-if="titleSize === 'h3'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="getAnchor(id)" />
    </h3>
    <h4 v-else-if="titleSize === 'h4'" class="-anchor" :id="id">
      <slot></slot>
      <span v-html="getAnchor(id)" />
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})

export default class TitleAnchor extends Vue {
  @Prop() id?: string;
  @Prop({ default: 'h3' }) titleSize?: 'h2' | 'h3' | 'h4';
  @Prop() padding?: string;
  @Prop() additionalClasses?: string;
  @Prop() additionalStyle?: string;

  getAnchor(id: string) {
    return `<a class="-ml--1" :href="?theme=${this.$store.state.themes.theme}#${id}">#</a>`
  }
}
</script>
