import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div class="chi">

        <div class="hello -h--100">
          <app-header></app-header>

          <div
            class="-d--flex -w--100 -h--100 -align-items--center -justify-content--center"
          >
            <main>
              <app-home></app-home>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
