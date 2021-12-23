import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  DataTableCustomItem,
  DataTableFilter,
  DataTableFiltersData,
  DataTableFormElementFilters,
} from '@/constants/types';
import { copyArrayOfObjects, findComponent, uuid4 } from '@/utils/utils';
import {
  BUTTON_CLASSES,
  CHECKBOX_CLASSES,
  DATA_TABLE_CLASSES,
  DRAWER_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZE_CLASSES,
  ICON_CLASS,
  INPUT_CLASSES,
  PORTAL_CLASS,
  SELECT_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { compareFilters, getElementFilterData } from './FilterUtils';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import DataTableToolbar from '@/components/data-table-toolbar/DataTableToolbar';
import AdvancedFilters from './AdvancedFilters';
import Drawer from '../drawer/drawer';
import store, { STORE_KEY } from '@/store';
import { getModule } from 'vuex-module-decorators';
import { detectMajorChiVersion } from '@/utils/utils';
import { ScopedSlotChildren } from 'vue/types/vnode';
import './filters.scss';

@Component
export default class DataTableFilters extends Vue {
  @Prop() filtersData?: DataTableFiltersData;
  @Prop() customItems?: DataTableCustomItem[];
  @Prop() portal?: boolean;

  _filtersData?: DataTableFiltersData;
  _advancedFiltersData?: DataTableFilter[];
  _advancedFilterComponent?: AdvancedFilters;
  _drawerID?: string;
  drawerActive?: boolean = false;
  storeModule?: any;
  _chiMajorVersion = 5;

  beforeCreate() {
    this._filtersData = {
      filters: [],
    };
    this._advancedFiltersData = [];
  }

  async created() {
    const isModuleRegistered = Object.keys(this.$store.state).includes(STORE_KEY);
    this._drawerID = `drawer_${uuid4()}`;

    if (!isModuleRegistered) {
      this.$store.registerModule(STORE_KEY, store);
    }

    if (!this.storeModule && this.$store) {
      this.storeModule = getModule(store, this.$store);
    }

    const advancedFilters = this.$props.filtersData.filter((filter: DataTableFilter) => filter.advanced);

    if (this._filtersData) {
      this._filtersData = {
        filters: copyArrayOfObjects(this.$props.filtersData),
      };
    }

    this._advancedFiltersData = copyArrayOfObjects(advancedFilters);

    const plainFiltersData = this.$props.filtersData.reduce((accumulator: any, currentValue: any) => {
      return { ...accumulator, [currentValue.id]: currentValue.type === 'checkbox' ? false : currentValue.value || '' };
    }, {});

    await this.storeModule.updateFilterConfig(plainFiltersData);
    await this.storeModule.updateFilterConfigLive(plainFiltersData);
  }

  get filterElementValue() {
    return this.storeModule.filterConfig;
  }

  get filterElementValueLive() {
    return this.storeModule.filterConfigLive;
  }

  _createSelectFilter(filter: DataTableFilter, mobile?: boolean) {
    const options = filter.options?.map(option => {
      return (
        <option value={option.value} selected={filter.value === option.value}>
          {option.label}
        </option>
      );
    });

    const label = mobile && (
      <label for={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
        {filter.label}
      </label>
    );

    return (
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM}`}>
        {label}
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={!mobile ? this.filterElementValue[filter.id] : this.filterElementValueLive[filter.id]}
          class={`
            ${SELECT_CLASSES.SELECT}
            ${mobile && '-mb--1'}
            ${this._chiMajorVersion === 4 ? `${GENERIC_SIZE_CLASSES.LG} ${this.portal && PORTAL_CLASS}` : ''}
          `}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select', mobile || false)}>
          {options}
        </select>
      </div>
    );
  }

  _createInputFilter(filter: DataTableFilter, mobile?: boolean) {
    return (
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM}`}>
        {mobile && (
          <label for={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <input
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={!mobile ? this.filterElementValue[filter.id] : this.filterElementValueLive[filter.id]}
          class={`
            ${INPUT_CLASSES.INPUT}
            ${mobile && '-mb--1'}
            ${this._chiMajorVersion === 4 ? GENERIC_SIZE_CLASSES.LG : ''}`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input', mobile || false)}
          placeholder={filter.placeholder || null}
          type="text"
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter, mobile?: boolean) {
    return (
      <div class={`${FORM_CLASSES.FORM_ITEM}`}>
        {mobile && (
          <label for={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <textarea
          aria-label={`Filter by ${filter.label || filter.name}`}
          value={!mobile ? this.filterElementValue[filter.id] : this.filterElementValueLive[filter.id]}
          id={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          data-filter={filter.name}
          class={`${INPUT_CLASSES.INPUT} ${mobile && '-mb--1'} ${GENERIC_SIZE_CLASSES.LG}`}
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea', mobile || false)}
        />
      </div>
    );
  }

  _createCheckboxFilter(filter: DataTableFilter, mobile?: boolean) {
    return (
      <div
        class={`
          ${FORM_CLASSES.FORM_ITEM}
          ${UTILITY_CLASSES.DISPLAY.FLEX}
        ${UTILITY_CLASSES.JUSTIFY.CENTER}`}>
        <div
          class={[
            CHECKBOX_CLASSES.checkbox,
            mobile ? `${UTILITY_CLASSES.ALIGN_SELF.LEFT} -mb--1` : UTILITY_CLASSES.ALIGN_SELF.CENTER,
          ]}>
          <input
            id={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
            aria-label={`Filter by ${filter.label || filter.name}`}
            data-filter={filter.name}
            type="checkbox"
            class={CHECKBOX_CLASSES.INPUT}
            checked={!mobile ? this.filterElementValue[filter.id] : this.filterElementValueLive[filter.id]}
            onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox', mobile || false)}
          />
          <label for={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={CHECKBOX_CLASSES.LABEL}>
            {filter.label}
          </label>
        </div>
      </div>
    );
  }

  async _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters, mobile: boolean) {
    if (ev.target) {
      const newFilterData = getElementFilterData(ev, elementType);

      if (!mobile) {
        await this.storeModule.updateFilterConfig({
          ...this.filterElementValue,
          ...{
            [newFilterData?.id?.replace(/-desktop|-mobile/gi, '') || 'no-id']:
              elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
          },
        });

        await this.storeModule.updateFilterConfigLive({
          ...this.filterElementValueLive,
          ...{
            [newFilterData?.id?.replace(/-desktop|-mobile/gi, '') || 'no-id']:
              elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
          },
        });

        if (this._filtersData && newFilterData) {
          this._emitFiltersChanged();
        }
      } else {
        await this.storeModule.updateFilterConfigLive({
          ...this.filterElementValueLive,
          ...{
            [newFilterData?.id?.replace(/-desktop|-mobile/gi, '') || 'no-id']:
              elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
          },
        });
      }
    }
  }

  _getUpdatedFiltersObject() {
    const filters = this.filterElementValue;
    return this._filtersData
      ? this._filtersData.filters.map((filter: DataTableFilter) => {
          if (filter.id) {
            const value = filters[filter.id];
            return { ...filter, ...{ value: value } };
          }
          return filter;
        })
      : {};
  }

  mounted() {
    const dataTableToolbarComponent = findComponent(this, 'DataTableToolbar');

    if (dataTableToolbarComponent) {
      (dataTableToolbarComponent as DataTableToolbar)._filters = this;
    }
  }

  _emitFiltersChanged() {
    this.$emit(DATA_TABLE_EVENTS.FILTERS_CHANGE, this._getUpdatedFiltersObject());
  }

  getCustomItemsSlots() {
    return this.customItems?.reduce((accumulator, currentValue) => {
      if (this.$slots[currentValue.template]) {
        return {
          ...accumulator,
          [currentValue.template]: this.$slots[currentValue.template],
        };
      }
    }, {} as { [key: string]: ScopedSlotChildren } | undefined);
  }

  _advancedFiltersPopOver() {
    if (this._advancedFiltersData) {
      const customItemsSlots = this.getCustomItemsSlots();

      return (
        <AdvancedFilters
          onChiAdvancedFiltersChange={() => this._emitFiltersChanged()}
          mobile={false}
          advancedFiltersData={this._advancedFiltersData}
          customItems={this.customItems}>
          {customItemsSlots}
        </AdvancedFilters>
      );
    }
    return null;
  }

  _advancedFiltersFields() {
    if (this._advancedFiltersData) {
      const customItemsSlots = this.getCustomItemsSlots();

      return (
        <AdvancedFilters
          onChiAdvancedFiltersChange={() => this._emitFiltersChanged()}
          mobile={true}
          advancedFiltersData={this._advancedFiltersData}
          customItems={this.customItems}>
          {customItemsSlots}
        </AdvancedFilters>
      );
    }
    return null;
  }

  async applyChanges() {
    await this.storeModule.updateFilterConfig({
      ...this.filterElementValueLive,
    });
    this._emitFiltersChanged();
  }

  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }

  beforeMount() {
    this._chiMajorVersion = detectMajorChiVersion();
  }

  render() {
    const standardFilters: JSX.Element[] = [];
    const standardFiltersMobile: JSX.Element[] = [];
    const advancedFiltersPopOver =
      this._advancedFiltersData && this._advancedFiltersData.length > 0 ? this._advancedFiltersPopOver() : null;
    const advancedFilters =
      this._advancedFiltersData && this._advancedFiltersData.length > 0 ? this._advancedFiltersFields() : null;

    this.$props.filtersData.forEach((filter: DataTableFilter) => {
      const filterElement =
        filter.type === 'select'
          ? this._createSelectFilter(filter)
          : filter.type === 'input'
          ? this._createInputFilter(filter)
          : filter.type === 'checkbox'
          ? this._createCheckboxFilter(filter)
          : filter.type === 'textarea'
          ? this._createTextareaFilter(filter)
          : null;

      const filterElementMobile =
        filter.type === 'select'
          ? this._createSelectFilter(filter, true)
          : filter.type === 'input'
          ? this._createInputFilter(filter, true)
          : filter.type === 'checkbox'
          ? this._createCheckboxFilter(filter, true)
          : filter.type === 'textarea'
          ? this._createTextareaFilter(filter, true)
          : null;

      if (filterElement && filterElementMobile) {
        if (!filter.advanced) {
          standardFilters.push(filterElement);
          standardFiltersMobile.push(filterElementMobile);
        }
      }
    });

    return (
      <div class={DATA_TABLE_CLASSES.FILTERS}>
        <div class={`${DATA_TABLE_CLASSES.FILTERS}-desktop`}>
          {standardFilters}
          {advancedFiltersPopOver}
        </div>
        <div class={`${DATA_TABLE_CLASSES.FILTERS}-mobile`}>
          <button
            class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT} ${DRAWER_CLASSES.TRIGGER}`}
            onclick={() => this.toggleDrawer()}
            data-target={this._drawerID}
            aria-label="Open Drawer">
            <div class={BUTTON_CLASSES.CONTENT}>
              <i class={`${ICON_CLASS} icon-filter`} aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <Drawer
          class={UTILITY_CLASSES.POSITION.ABSOLUTE}
          id={this._drawerID}
          position="left"
          backdrop={true}
          portal={true}
          active={this.drawerActive}
          onChiDrawerHide={() => (this.drawerActive = false)}
          onChiDrawerClickOutside={() => (this.drawerActive = false)}>
          <div class={[UTILITY_CLASSES.PADDING.X[2], UTILITY_CLASSES.PADDING.Y[3]]}>
            {standardFiltersMobile}
            {advancedFilters}
            <div
              class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.JUSTIFY.CENTER} ${UTILITY_CLASSES.PADDING.Y[2]}`}>
              <button
                onClick={() => this.toggleDrawer()}
                class={`
                ${BUTTON_CLASSES.BUTTON}
                ${
                  this._chiMajorVersion === 4
                    ? `${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.OUTLINE} ${BUTTON_CLASSES.SIZES.LG} ${UTILITY_CLASSES.PADDING.X[4]} -bg--white -uppercase`
                    : ''
                }
                `}>
                Cancel
              </button>
              <button
                onClick={() => this.applyChanges()}
                disabled={
                  this.filterElementValueLive && compareFilters(this.filterElementValue, this.filterElementValueLive)
                }
                class={`
                ${BUTTON_CLASSES.BUTTON}
                ${BUTTON_CLASSES.PRIMARY}
                ${UTILITY_CLASSES.MARGIN.LEFT[2]}
                ${
                  this._chiMajorVersion === 4
                    ? `${BUTTON_CLASSES.SIZES.LG} ${UTILITY_CLASSES.PADDING.X[4]} -uppercase`
                    : ''
                }
                `}>
                Apply
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
