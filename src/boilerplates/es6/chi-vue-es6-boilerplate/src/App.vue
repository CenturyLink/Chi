<template>
  <div id="app">
    <div class="hello -h--100">
      <Header />
      <div
        class="-d--flex -w--100 -h--100 -align-items--center -justify-content--center"
      >
        <button
          id="modal-trigger-1"
          class="chi-button chi-modal__trigger"
          data-target="#modal-1"
        >
          Launch demo modal
        </button>

        <div class="chi-backdrop -closed">
          <div class="chi-backdrop__wrapper">
            <section
              id="modal-1"
              class="chi-modal"
              role="dialog"
              aria-label="Modal description"
              aria-modal="true"
            >
              <header class="chi-modal__header">
                <h2 class="chi-modal__title">Modal Title</h2>
                <button
                  class="chi-button -icon -close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
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
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import { Modal } from './es6/components/modal';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {
  mounted() {
    const modal = new Modal(document.getElementById('modal-trigger-1'));
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
