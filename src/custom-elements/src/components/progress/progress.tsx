import { Component, Prop, Watch } from '@stencil/core';
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
  @Prop({ reflectToAttr: true }) value: number;

  /**
   *  to set the min value of a progress bar.
   */
  @Prop({ reflectToAttr: true }) min = 0;

  /**
   *  to set the max value of a progress bar.
   */
  @Prop({ reflectToAttr: true }) max = 100;

  /**
   *  to indicate a progress bar state { info, warning, danger, success }.
   */
  @Prop({ reflectToAttr: true }) state = 'success';

  @Watch('state')
  stateValidation(newValue: string) {
    if (newValue && !SEMANTIC_COLORS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for progress. If provided, valid values are: info, warning, danger or success. If not, success will be set. `
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
        aria-valuemin={this.min || 0}
      ></progress>
    );
  }
}
