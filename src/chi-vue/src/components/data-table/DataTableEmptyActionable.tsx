import { Prop, Emit } from 'vue-property-decorator';
import { Component, Vue } from '@/build/vue-wrapper';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import { defaultConfig } from './default-config';
import { DataTableEmptyActionableContent } from '@/constants/types';

@Component({})
export default class DataTableEmptyActionable extends Vue {
  @Prop() content!: DataTableEmptyActionableContent;

  @Emit(DATA_TABLE_EVENTS.EMPTY_ACTIONABLE_LINK)
  _emitEmptyActionableLink() {
    // This is intentional
  }

  icon = defaultConfig.emptyActionable?.icon;
  message = defaultConfig.emptyActionable?.message;

  beforeMount(): void {
    this.icon = this.content.icon || defaultConfig.emptyActionable?.icon;
    this.message = this.content.message || defaultConfig.emptyActionable?.message;
  }

  render() {
    return (
      <div>
        <chi-icon icon={this.icon} color="grey"></chi-icon>
        <span>
          <a onClick={() => this._emitEmptyActionableLink()}>{this.message?.actionLink}</a>
          {this.message?.text}
        </span>
      </div>
    );
  }
}
