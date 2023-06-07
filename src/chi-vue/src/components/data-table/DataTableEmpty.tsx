import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { GENERIC_EVENTS } from '@/constants/events';
import { defaultConfig } from './default-config';
import { DataTableEmptyConfig } from '@/constants/types';

@Component({})
export default class DataTableEmpty extends Vue {
  @Prop() config?: DataTableEmptyConfig;

  icon = this.$props.config.icon || defaultConfig.emptyConfig?.icon;
  message = this.$props.config.message || defaultConfig.emptyConfig?.message;

  _emitChange(ev: Event) {
    this.$emit(GENERIC_EVENTS.CHANGE, ev);
  }
  render() {
    return (
      <div class="-d--flex -flex--column -align-items--center -py--10">
        <chi-icon class="-mb--1" icon={this.icon} color="grey" size="md"></chi-icon>
        <span>
          <a onClick={(ev: Event) => this._emitChange(ev)}>{this.message.actionLink}</a>
          {this.message.text}
        </span>
      </div>
    );
  }
}
