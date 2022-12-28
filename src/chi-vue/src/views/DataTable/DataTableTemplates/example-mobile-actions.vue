<template>
  <div class="chi-data-table__cell-mobile -actions">
    <button id="modal-trigger-1" class="chi-button -icon -flat chi-modal__trigger" data-target="#modal-1">
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>

    <!-- Modal -->
    <div class="chi-backdrop -closed">
      <div class="chi-backdrop__wrapper">
        <section id="modal-1" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
          <header class="chi-modal__header">
            <h2 class="chi-modal__title">Modal Title</h2>
            <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
              <div class="chi-button__content">
                <i class="chi-icon icon-x" aria-hidden="true"></i>
              </div>
            </button>
          </header>
          <div class="chi-modal__content">
            <p class="-text -m--0">Modal content</p>
          </div>
          <footer class="chi-modal__footer">
            <button class="chi-button" data-dismiss="modal">Cancel</button>
            <button class="chi-button -primary">Save</button>
          </footer>
        </section>
      </div>
    </div>
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
export default class ExampleActions extends Vue {
  mounted() {
    chi.dropdown(this.$refs.dropdownTrigger);
  }
}
</script>
