<template>
  <div>
    <a :id="`ticket-popover-button-${id}`" href="#" :data-target="`#ticket-popover-${id}`" position="top-start">{{ id }}</a>
    <section class="chi-popover" :id="`ticket-popover-${id}`" aria-modal="true" role="dialog" aria-label="Popover title">
      <header class="chi-popover__header">
        <h2 class="chi-popover__title">{{id}}</h2>
      </header>
      <div class="chi-popover__content">
        <p class="chi-popover__text">Content for {{id}}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  components: {},
  props: {
    id: String
  }
})
export default class Actions extends Vue {
  mounted() {
    const buttonOpenOnHover = document.getElementById(`ticket-popover-button-${this.$props.id}`);
    const popover = chi.popover(buttonOpenOnHover);

    buttonOpenOnHover!.addEventListener("mouseenter", function() {
      popover.show();
    });

    buttonOpenOnHover!.addEventListener("mouseleave", function() {
      popover.hide();
    });
  }
}
</script>
