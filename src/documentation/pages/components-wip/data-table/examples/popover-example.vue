<template>
  <div class="-text--truncate">
    <a :id="'name-popover-button-' + id" href="#" :data-target="'#name-popover-' + id" position="top-start">{{
      name
    }}</a>
    <section class="chi-popover" :id="'name-popover-' + id" aria-modal="true" role="dialog" :aria-label="name">
      <div class="chi-popover__content">
        {{ name }}
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-facing-decorator';
declare const chi: any;

@NuxtComponent({})
export default class PopoverExample extends Vue {
  @Prop() name!: string;
  @Prop() id!: number;

  popover: any;

  mounted() {
    let hoverAnimationTimeout: ReturnType<typeof setTimeout> | undefined;
    const buttonOpenOnHover = document.getElementById(`name-popover-button-` + this.id);

    this.popover = chi.popover(buttonOpenOnHover);

    if (buttonOpenOnHover) {
      buttonOpenOnHover.addEventListener('mouseenter', () => {
        hoverAnimationTimeout = setTimeout(() => {
          this.show();
        }, 300);
      });

      buttonOpenOnHover.addEventListener('mouseleave', () => {
        if (hoverAnimationTimeout) {
          clearTimeout(hoverAnimationTimeout);
        }
        this.hide();
      });
    }
  }

  beforeDestroy() {
    this.popover?.dispose();
  }

  show() {
    this.popover?.show();
  }

  hide() {
    this.popover?.hide();
  }
}
</script>
