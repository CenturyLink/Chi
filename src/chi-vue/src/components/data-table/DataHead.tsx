import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class DataHead extends Vue {
  render() {
    return (
      <div class="chi-data-table__head">
        {this.$slots.default}
      </div>);
  }
}
