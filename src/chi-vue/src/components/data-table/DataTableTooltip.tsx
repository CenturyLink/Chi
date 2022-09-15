import { Component, Vue, Prop } from 'vue-property-decorator';
import Tooltip from '@/components/tooltip/tooltip';
import { TOOLTIP_ANIMATION_DELAY } from '@/constants/constants';
import { UTILITY_CLASSES } from '@/constants/classes';

@Component({})
export default class DataTableTooltip extends Vue {
  @Prop() msg!: string;
  @Prop() header?: boolean;
  @Prop() wrapText?: boolean;

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
    const isTruncated = wrapper.scrollHeight > wrapper.clientHeight || wrapper.scrollWidth > wrapper.clientWidth;

    return isTruncated;
  }

  render() {
    const content = (
      <div class={this.wrapText ? '-wrap-cells' : UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} ref="wrapper">
        {this.msg}
      </div>
    );

    return (
      <div
        onMouseenter={() => this.onShow()}
        onFocus={() => this.onShow()}
        onMouseleave={() => this.onHide()}
        onBlur={() => this.onHide()}
        style={`max-width: fit-content; width: ${this.$props.header ? 'calc(100% - 20px)' : '100%'};`}>
        {!this.tooltip ? content : <Tooltip message={this.msg}>{content}</Tooltip>}
      </div>
    );
  }
}
