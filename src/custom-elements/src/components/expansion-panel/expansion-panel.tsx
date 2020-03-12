import { Component, Prop, Watch, h } from '@stencil/core';

const EP_MODES = ['done', 'active', 'pending', 'disabled'];

@Component({
  tag: 'chi-expansion-panel',
  styleUrl: 'expansion-panel.scss',
  scoped: true
})
export class ExpansionPanel {
  /**
   * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}
   */
  @Prop({ reflect: true }) state = 'pending';

  /**
   * to set a step number next to the title of the panel
   */
  @Prop({ reflect: true }) step: string;

  /**
   * to set the title of the panel
   */
  @Prop({ reflect: true }) heading: string;

  /**
   * is the panel border-styled?
   */
  @Prop({ reflect: true }) bordered: boolean;

  @Watch('state')
  stateValidation(newValue: string) {
    if (newValue && !EP_MODES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for this component. If provided, valid values are 'done', 'active', 'pending' or 'disabled'; if not, 'pending' value will be set. `
      );
    }
  }

  componentWillLoad() {
    this.stateValidation(this.state);
  }

  render() {
    return (
      <div
        class={`chi-epanel ${this.state === 'disabled' ? `-disabled` : ''} ${
          this.state === 'active' ? `-active` : ''
        } ${this.state === 'done' ? `-done` : ''} ${
          this.bordered ? `-bordered` : ''
        }`}
      >
        <div class="chi-epanel__header">
          {this.step ? <span class="chi-epanel__number">{this.step}.</span> : ''}
          <div class="chi-epanel__title">{this.heading}</div>
          <div class={`chi-epanel__content ${this.step ? '' : '-ml--0'}`}>
            <div class="chi-epanel__collapse">
              <div class="-done--only">
                <slot name="done" />
              </div>
            </div>
          </div>
          {this.state === 'done' || this.state === 'active' ? (
            <div class="chi-epanel__action">
              <slot name="change" />
            </div>
          ) : (
            ''
          )}
        </div>
        <div class={`chi-epanel__collapse ${this.step ? '' : '-ml--0'}`}>
          <div class="-active--only">
            <div class="chi-epanel__body">
              <div class="chi-epanel__content">
                <slot name="active" />
              </div>
              <div class="chi-epanel__footer">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
