import { Component, Vue, Prop } from 'vue-property-decorator';
import Tooltip from '@/components/tooltip/tooltip';
import { TOOLTIP_ANIMATION_DELAY } from '@/constants/constants';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component({})
export default class DataTableTooltip extends Vue {
  @Prop() msg!: string;
  @Prop({ default: false }) header?: boolean;

  tooltip = false;

  onShow() {
    const isTruncated = this._isTruncated();

    this.tooltip = isTruncated;
  }

  onHide() {
    window.setTimeout(() => (this.tooltip = false), TOOLTIP_ANIMATION_DELAY);
  }

  _isTruncated() {
    const wrapper = this.$refs.wrapper as HTMLElement;
    const wrapperClone = wrapper.cloneNode(true) as HTMLElement;

    wrapperClone.style.display = 'inline';
    wrapperClone.style.width = 'auto';
    wrapperClone.style.visibility = 'hidden';
    wrapperClone.style.overflow = 'visible';

    wrapper.parentNode?.appendChild(wrapperClone);

    const isTruncated = wrapperClone.offsetWidth > wrapper.offsetWidth;

    wrapperClone.parentNode?.removeChild(wrapperClone);

    return isTruncated;
  }

  render() {
    return (
      <div
        onMouseenter={() => this.onShow()}
        onFocus={() => this.onShow()}
        onMouseleave={() => this.onHide()}
        onBlur={() => this.onHide()}
        style={`max-width: fit-content; width: ${this.$props.header ? 'calc(100% - 20px)' : '100%'};`}>
        {!this.tooltip ? (
          <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} ref="wrapper">
            {this.msg}
          </div>
        ) : (
          <Tooltip message={this.msg}>
            <div class={UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} ref="wrapper">
              {this.msg}
            </div>
          </Tooltip>
        )}
      </div>
    );
  }
}
