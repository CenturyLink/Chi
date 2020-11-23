import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class DataBody extends Vue {
  render() {
    return (
      <div class="chi-data-table__body">
        {this.$slots.default}
      </div>);
  }
}
