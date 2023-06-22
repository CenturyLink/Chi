import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { defaultConfig } from './default-config';
import { DataTableEmptyConfig } from '@/constants/types';
import { DATA_TABLE_CLASSES } from '@/constants/classes';

@Component({})
export default class DataTableEmpty extends Vue {
  @Prop() config!: DataTableEmptyConfig;

  @Emit(DATA_TABLE_EVENTS.EMPTY_LINK)
  _emitEmptyLink() {
    // this is intentional
  }

  icon = this.$props.config.icon || defaultConfig.emptyConfig?.icon;
  message = this.$props.config.message || defaultConfig.emptyConfig?.message;

  render() {
    return (
      <div class={DATA_TABLE_CLASSES.EMPTY_DATA}>
        <chi-icon icon={this.icon} color="grey"></chi-icon>
        <span>
          <a onClick={() => this._emitEmptyLink()}>{this.message.actionLink}</a>
          {this.message.text}
        </span>
      </div>
    );
  }
}
