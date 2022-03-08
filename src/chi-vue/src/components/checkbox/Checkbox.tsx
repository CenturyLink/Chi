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

  state = this.selected;

  @Watch('selected')
  dataState(newValue: CheckboxState, oldValue: CheckboxState) {
    if (newValue !== oldValue) {
      this.state = newValue;
    }
  }

  _emitChange(ev: Event) {
    this.$emit(GENERIC_EVENTS.CHANGE, ev);
  }

  _updateCheckboxState() {
    const checkbox = this.$refs.checkbox as HTMLInputElement;

    if (this.state === 'indeterminate') {
      checkbox.indeterminate = true;
      checkbox.classList.add(CHECKBOX_CLASSES.INDETERMINATE);
    } else {
      checkbox.indeterminate = false;
      checkbox.classList.remove(CHECKBOX_CLASSES.INDETERMINATE);
    }
  }

  mounted() {
    this._updateCheckboxState();
  }

  updated() {
    this._updateCheckboxState();
  }

  render() {
    return (
      <div class={CHECKBOX_CLASSES.checkbox} key={this.id}>
        <input
          v-model={this.state}
          class={`${CHECKBOX_CLASSES.INPUT} ${this.state === 'indeterminate' && CHECKBOX_CLASSES.INDETERMINATE}`}
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
