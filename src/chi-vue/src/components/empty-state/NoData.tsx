import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { GENERIC_EVENTS } from '@/constants/events';

@Component({})
export default class NoData extends Vue {
  _emitChange(ev: Event) {
    this.$emit(GENERIC_EVENTS.CHANGE, ev);
  }
  testValue = 'test';
  render() {
    return (
      <div class="-d--flex -flex--column -align-items--center -py--10">
        <chi-icon class="-mb--1" icon="circle-plus-outline" size="lg" color="muted"></chi-icon>
        <span>
          <a onClick={(ev: Event) => this._emitChange(ev)}>Add a new or existing service</a>, then manage here.
        </span>
      </div>
    );
  }
}
