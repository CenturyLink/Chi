<template>
  <div class="-text--truncate">
    <a :id="`ticket-popover-button-${id}`" href="#" :data-target="`#ticket-popover-${id}`" position="top-start">{{
      id
    }}</a>
    <section
      class="chi-popover"
      :id="`ticket-popover-${id}`"
      aria-modal="true"
      role="dialog"
      aria-label="Popover title"
    >
      <header class="chi-popover__header">
        <h2 class="chi-popover__title">{{ id }}</h2>
      </header>
      <div class="chi-popover__content">
        <p class="chi-popover__text">Content for {{ id }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// eslint-disable-next-line
declare const chi: any;

@Component({
  components: {},
  props: {
    id: String,
  },
})
export default class ExamplePopover extends Vue {
  mounted() {
    const buttonOpenOnHover = document.getElementById(`ticket-popover-button-${this.$props.id}`);
    const popover = chi.popover(buttonOpenOnHover);
    let hoverAnimationTimeout: number;

    if (buttonOpenOnHover) {
      buttonOpenOnHover.addEventListener('mouseenter', function() {
        hoverAnimationTimeout = setTimeout(() => {
          popover.show();
        }, 300);
      });

      buttonOpenOnHover.addEventListener('mouseleave', function() {
        if (hoverAnimationTimeout) {
          clearTimeout(hoverAnimationTimeout);
        }
        popover.hide();
      });
    }
  }
}
</script>
