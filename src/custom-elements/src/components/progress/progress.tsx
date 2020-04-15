import { Component, Prop, Watch, h } from '@stencil/core';
import { SEMANTIC_COLORS } from '../../constants/color';

@Component({
  tag: 'chi-progress',
  styleUrl: 'progress.scss',
  scoped: true
})
export class Progress {
  /**
   *  to set the value of a progress bar.
   */
  @Prop({ reflect: true }) value: number;

  /**
   *  to set the max value of a progress bar.
   */
  @Prop({ reflect: true }) max = 100;

  /**
   *  to indicate a progress bar state { info, warning, danger, success }.
   */
  @Prop({ reflect: true }) state = 'info';

  @Watch('state')
  stateValidation(newValue: string) {
    if (newValue && !SEMANTIC_COLORS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for progress. If provided, valid values are: info, warning, danger or success. If not, info will be set. `
      );
    }
  }

  componentWillLoad() {
    this.stateValidation(this.state);
  }

  render() {
    return (
      <progress
        value={this.value || undefined}
        class={this.state ? `-${this.state}` : ''}
        max={this.max || undefined}
        role="progressbar"
        aria-valuenow={this.value || undefined}
        aria-valuemax={this.max || undefined}
        aria-valuemin={0}
      ></progress>
    );
  }
}
