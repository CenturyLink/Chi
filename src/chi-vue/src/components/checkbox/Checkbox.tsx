import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { CHECKBOX_CLASSES, SR_ONLY } from '@/constants/classes';
import { GENERIC_EVENTS } from '@/constants/events';
import { CheckboxState } from '@/constants/types';

@Component({})
export default class Checkbox extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop() label?: string;
  @Prop() name?: string;
  @Prop() selected?: CheckboxState;
  @Prop() disabled?: boolean;

  @Watch('selected')
  dataState(newValue: CheckboxState, oldValue: CheckboxState) {
    if (newValue !== oldValue) {
      this.selected = newValue;
      this._updateCheckboxState();
    }
  }

  _emitChange(ev: Event) {
    this.$emit(GENERIC_EVENTS.CHANGE, ev);
  }

  _updateCheckboxState() {
    const checkbox = this.$refs.checkbox as HTMLInputElement;

    checkbox.indeterminate = this.selected === 'indeterminate';
  }

  mounted() {
    this._updateCheckboxState();
  }

  render() {
    return (
      <div class={CHECKBOX_CLASSES.checkbox} key={this.id}>
        <input
          v-model={this.selected}
          class={`${CHECKBOX_CLASSES.INPUT} ${this.selected === 'indeterminate' && CHECKBOX_CLASSES.INDETERMINATE}`}
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
