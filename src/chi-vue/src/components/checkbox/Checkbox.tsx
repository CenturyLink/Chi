import { Emit, Prop, Watch } from 'vue-property-decorator';
import { CHECKBOX_CLASSES, SR_ONLY } from '@/constants/classes';
import { GENERIC_EVENTS } from '@/constants/events';
import { CheckboxState } from '@/constants/types';
import { Component, Vue } from '@/build/vue-wrapper';
import { JSX } from 'vue/jsx-runtime';

@Component({})
export default class Checkbox extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop() label?: string;
  @Prop() name?: string;
  @Prop() selected!: CheckboxState;
  @Prop() disabled?: boolean;

  state: CheckboxState = false;

  @Watch('selected')
  watchSelected(newValue: CheckboxState, oldValue: CheckboxState): void {
    if (newValue !== oldValue) {
      this.state = newValue;
    }
  }

  @Watch('state')
  watchState(newValue: CheckboxState, oldValue: CheckboxState): void {
    if (newValue !== oldValue) {
      const isCheckboxIndeterminate = oldValue === 'indeterminate' && this.selected === 'indeterminate';

      this.state = isCheckboxIndeterminate ? false : newValue;
    }
  }

  @Emit(GENERIC_EVENTS.CHANGE)
  _emitChange(ev: Event) {
    return ev;
  }

  beforeMount(): void {
    this.state = this.selected;
  }

  render(): JSX.Element {
    return (
      <div class={CHECKBOX_CLASSES.CHECKBOX} key={this.id}>
        <input
          class={`${CHECKBOX_CLASSES.INPUT} ${this.state === 'indeterminate' && CHECKBOX_CLASSES.INDETERMINATE}`}
          v-model={this.state}
          indeterminate={this.state === 'indeterminate'}
          disabled={this.disabled}
          id={this.id}
          name={this.name}
          onChange={(ev: Event) => this._emitChange(ev)}
          ref="checkbox"
          type="checkbox"
        />
        <label class={CHECKBOX_CLASSES.LABEL} for={this.id}>
          {this.label}
          <div class={SR_ONLY}>
            Select {this.label || this.name} {this.id}
          </div>
        </label>
      </div>
    );
  }
}
