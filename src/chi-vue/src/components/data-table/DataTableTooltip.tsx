import { Component, Vue, Prop } from 'vue-property-decorator';
import Tooltip from '@/components/tooltip/tooltip';
import { UTILITY_CLASSES } from '@/constants/classes';
import { TOOLTIP_ANIMATION_DELAY } from '@/constants/constants';

@Component({})
export default class DataTableTooltip extends Vue {
  @Prop() msg!: string;

  tooltip = false;

  onShow() {
    this.tooltip = true;
  }

  onHide() {
    window.setTimeout(() => (this.tooltip = false), TOOLTIP_ANIMATION_DELAY);
  }

  render() {
    return (
      <div
        onMouseenter={() => this.onShow()}
        onFocus={() => this.onShow()}
        onMouseleave={() => this.onHide()}
        onBlur={() => this.onHide()}>
        {!this.tooltip ? (
          <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{this.msg}</div>
        ) : (
          <Tooltip message={this.msg} class="-w--100">
            <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE}>{this.msg}</div>
          </Tooltip>
        )}
      </div>
    );
  }
}
