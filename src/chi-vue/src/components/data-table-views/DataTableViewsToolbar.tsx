import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import { DataTableView, ViewFormData } from '@/constants/types';
import { VIEW_EVENTS } from '@/constants/events';

@Component
export default class DataTableViewsToolbar extends Vue {
  @Prop() view?: DataTableView;
  @Prop() defaultViewId?: string;
  @Prop() search?: string;

  storeModule?: any;
  isRibbonVisible = true;

  saveMode = false;
  modifyMode = false;

  formValue: ViewFormData = {
    text: '',
    checkbox: false,
  };

  get views() {
    return this.storeModule.viewsData;
  }

  get currentViewId() {
    return this.storeModule.currentViewId;
  }

  created() {
    if (!this.storeModule && this.$store) {
      this.storeModule = getModule(store, this.$store);
    }
  }

  get isDefault() {
    return this.view?.id === this.defaultViewId;
  }

  resetForm() {
    (this.$refs.defaultView as HTMLInputElement).checked = this.formValue.checkbox = false;
    (this.$refs.nameOfView as HTMLInputElement).value = this.formValue.text = '';
  }

  toggleSave() {
    this.saveMode = !this.saveMode;
  }

  close() {
    this.$emit(VIEW_EVENTS.CLOSE);
  }

  viewNameChanges(e: Event & { target: HTMLInputElement }) {
    (this.formValue as any)[e.target.type] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  }

  isApplyDisabled() {
    return (
      JSON.stringify(this.formValue) ===
      JSON.stringify({
        text: this.view !== undefined ? this.view?.label : '',
        checkbox: this.defaultViewId && this.view !== undefined ? this.defaultViewId === this.view.id : false,
      })
    );
  }

  save() {
    const view = {
      id: this.formValue.text.replace(/\s/g, '').toLowerCase(),
      label: this.formValue.text,
      searchString: this.storeModule.searchString,
      filters: this.storeModule.filters,
      columns: this.storeModule.columns,
    };

    this.$emit(VIEW_EVENTS.NEW_VIEW, { ...view, default: this.formValue.checkbox });
    this.resetForm();
  }

  modify() {
    this.modifyMode = false;
    this.$emit(VIEW_EVENTS.MODIFY_VIEW, {
      currentView: {
        id: this.view?.id,
        label: (this.$refs.nameOfView as HTMLInputElement).value,
        searchString: this.storeModule.searchString,
        filters: this.storeModule.filters,
        columns: this.storeModule.columns,
      },
      default: (this.$refs.defaultView as HTMLInputElement).checked,
      odlView: this.view,
    });
  }

  saveView() {
    return [
      <div class="chi-toolbar__start">
        <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
        <div class="chi-toolbar__results">
          <div class="chi-form__item -row">
            <label class="chi-label" for="name_of_view">
              View
            </label>
            <input
              onInput={(e: any) => this.viewNameChanges(e)}
              class="chi-input -sm"
              ref="nameOfView"
              value={this.formValue.text}
              type="text"
              id="name_of_view-label"
            />
          </div>
        </div>
        <div class="chi-divider -vertical"></div>
        <div class="chi-form__item">
          <div class="chi-checkbox">
            <input
              onInput={(e: any) => this.viewNameChanges(e)}
              ref="defaultView"
              checked={this.formValue.checkbox}
              type="checkbox"
              class="chi-checkbox__input"
              id="default_view"
            />
            <label class="chi-checkbox__label" for="default_view">
              Default
            </label>
          </div>
        </div>
      </div>,
      <div class="chi-toolbar__end">
        <button class={`chi-button -sm -mr--2 ${this.isApplyDisabled() && '-disabled'}`} onClick={this.save}>
          APPLY
        </button>
        <button class="chi-button -sm" onClick={this.toggleSave}>
          CANCEL
        </button>
        <div class="chi-divider -vertical -ml--3"></div>
        <button class="chi-button -icon -flat" aria-label="reset button" onClick={this.resetForm}>
          <div class="chi-button__content">
            <i class="chi-icon icon-reload" aria-hidden="true"></i>
          </div>
        </button>
      </div>,
    ];
  }

  modifyView() {
    return [
      <div class="chi-toolbar__start">
        <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
        <div class="chi-toolbar__results">
          <div class="chi-form__item -row">
            <label class="chi-label" for="name_of_view">
              {this.view?.label}
            </label>
            <input
              class="chi-input -sm"
              ref="nameOfView"
              value={this.view?.label}
              type="text"
              id="name_of_view-label"
            />
          </div>
        </div>
        <div class="chi-divider -vertical"></div>
        <div class="chi-form__item">
          <div class="chi-checkbox">
            <input
              ref="defaultView"
              checked={this.isDefault}
              type="checkbox"
              class="chi-checkbox__input"
              id="default_view"
            />
            <label class="chi-checkbox__label" for="default_view">
              Default
            </label>
          </div>
        </div>
      </div>,
      <div class="chi-toolbar__end">
        <button class={`chi-button -sm -mr--2 ${this.isApplyDisabled() && '-disabled'}`} onClick={this.modify}>
          APPLY
        </button>
        <button class="chi-button -sm" onClick={() => (this.modifyMode = false)}>
          CANCEL
        </button>
        <div class="chi-divider -vertical -ml--3"></div>
        <button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
          <div class="chi-button__content">
            <i class="chi-icon icon-reload" aria-hidden="true"></i>
          </div>
        </button>
      </div>,
    ];
  }

  existingView() {
    return (
      <div class="chi-toolbar__start">
        <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
        <div class="chi-toolbar__results">
          <div class="chi-form__item -row">
            <div class="chi-toolbar__results">
              <span class="chi-toolbar__label">{this.view?.label}</span>
            </div>
          </div>
        </div>
        <div class="chi-divider -vertical"></div>
        <button
          class="chi-button -icon -primary -flat -no-hover"
          aria-label="Button action"
          onClick={() => {
            this.modifyMode = true;
          }}>
          <div class="chi-button__content">
            <i class="chi-icon icon-compose" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -primary -flat -no-hover" aria-label="Button action">
          <div class="chi-button__content">
            <i class="chi-icon icon-delete" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    );
  }

  newView() {
    return [
      <div class="chi-toolbar__start">
        <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
        <div class="chi-toolbar__results">
          <span class="chi-toolbar__label">Search Results </span>
          <span>{this.search}</span>
        </div>
        <div class="chi-divider -vertical"></div>
        <a onclick={this.toggleSave} href="#" size="md">
          Save View
        </a>
      </div>,
      <div class="chi-toolbar__end">
        <button onclick={this.close} class="chi-button -icon -primary -flat -no-hover" aria-label="Button action">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>,
    ];
  }

  render() {
    let currentView = null;

    if (this.modifyMode) {
      currentView = this.modifyView();
    } else if (this.saveMode) {
      currentView = this.saveView();
    } else if (this.view !== undefined) {
      currentView = this.existingView();
    } else {
      currentView = this.newView();
    }

    return this.isRibbonVisible && <div class="chi-toolbar__ribbon">{currentView}</div>;
  }
}
