import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { defaultConfig } from './default-config';
import { DataTableEmptyActionable } from '@/constants/types';

@Component({})
export default class DataTableEmpty extends Vue {
  @Prop() config!: DataTableEmptyActionable;

  @Emit(DATA_TABLE_EVENTS.EMPTY_ACTIONABLE)
  _emitEmptyActionable() {
    // This is intentional
  }

  icon = this.$props.config.icon || defaultConfig.emptyActionable?.icon;
  message = this.$props.config.message || defaultConfig.emptyActionable?.message;

  render() {
    return (
      <div>
        <chi-icon icon={this.icon} color="grey"></chi-icon>
        <span>
          <a onClick={() => this._emitEmptyActionable()}>{this.message.actionLink}</a>
          {this.message.text}
        </span>
      </div>
    );
  }
}
