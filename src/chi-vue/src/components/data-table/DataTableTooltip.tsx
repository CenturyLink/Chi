import { Prop } from 'vue-property-decorator';
import Tooltip from '@/components/tooltip/tooltip';
import { DATA_TABLE_CELL_THRESHOLD, TOOLTIP_ANIMATION_DELAY } from '@/constants/constants';
import { UTILITY_CLASSES } from '@/constants/classes';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class DataTableTooltip extends Vue {
  @Prop() msg!: string;
  @Prop() header?: boolean;
  @Prop() textWrap?: boolean;

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
    const isTruncated =
      Math.abs(wrapper.scrollHeight - wrapper.clientHeight) > DATA_TABLE_CELL_THRESHOLD ||
      wrapper.offsetWidth < wrapper.scrollWidth;

    return isTruncated;
  }

  render() {
    const content = (
      <div class={this.textWrap ? '-cell-wrap' : UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} ref="wrapper">
        {this.msg}
      </div>
    );

    return (
      <div
        onMouseenter={() => this.onShow()}
        onFocus={() => this.onShow()}
        onMouseleave={() => this.onHide()}
        onBlur={() => this.onHide()}
        style={`max-width: fit-content; width: ${this.header ? 'calc(100% - 20px)' : '100%'};`}>
        {this.tooltip ? <Tooltip message={this.msg}>{content}</Tooltip> : content}
      </div>
    );
  }
}
