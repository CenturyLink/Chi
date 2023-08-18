import { Component, Vue } from '@/build/vue-wrapper';
import { DataTableAction, DataTableColumnProps, DataTableActionItemResponsiveness } from '@/constants/types';
import { Prop } from 'vue-property-decorator';

declare const chi: any;

@Component({
  methods: {
    showOnDesktop(value: DataTableActionItemResponsiveness[] = []) {
      return !value.includes(DataTableActionItemResponsiveness.DESKTOP);
    },
  },
})
export default class DatatableDesktopActions extends Vue {
  dropdown: any;
  showOnDesktop: any;

  @Prop() actions?: DataTableAction[];
  @Prop() rowData?: DataTableColumnProps;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs.dropdownTrigger);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }

  render() {
    return (
      <div class="chi-data-table__cell-desktop">
        <div class="chi-dropdown">
          <button
            ref="dropdownTrigger"
            class="chi-button -icon -flat"
            aria-label="More options"
            data-position="left-start">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
          <div class="chi-dropdown__menu">
            {this.actions?.map((button, index) => {
              if (this.showOnDesktop(button.hide)) {
                return (
                  <a key={index} onClick={() => button.onClick(this.rowData)} class="chi-dropdown__menu-item">
                    <i class={`chi-icon -sm -icon--primary ${button.icon}`} aria-hidden="true" />
                    {button.label}
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
