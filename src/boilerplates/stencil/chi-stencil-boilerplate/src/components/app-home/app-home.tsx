import { Component, h } from '@stencil/core';

declare const chi: any;
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  componentDidLoad() {
    chi.modal(document.getElementById('modal-trigger-1'));
  }

  render() {
    return (
      <div class="app-home">
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
                    <i class="chi-icon icon-x"></i>
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
    );
  }
}
