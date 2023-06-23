import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { defaultConfig } from './default-config';
import { DataTableEmptyActionable } from '@/constants/types';
import { DATA_TABLE_CLASSES } from '@/constants/classes';

@Component({})
export default class DataTableEmpty extends Vue {
  @Prop() config!: DataTableEmptyActionable;

  @Emit(DATA_TABLE_EVENTS.EMPTY_ACTIONABLE)
  _emitEmptyActionable() {
    // this is intentional
  }

  icon = this.$props.config.icon || defaultConfig.emptyConfig?.icon;
  message = this.$props.config.message || defaultConfig.emptyConfig?.message;

  render() {
    return (
      <template>
        <chi-icon icon={this.icon} color="grey"></chi-icon>
        <span>
          <a onClick={() => this._emitEmptyActionable()}>{this.message.actionLink}</a>
          {this.message.text}
        </span>
      </template>
    );
  }
}
