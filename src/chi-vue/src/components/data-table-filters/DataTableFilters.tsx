import { Emit, Prop, Watch } from 'vue-property-decorator';
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
  SELECT_CLASSES,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { getElementFilterData } from './FilterUtils';
import { DATA_TABLE_EVENTS } from '@/constants/events';
import AdvancedFilters from './AdvancedFilters';
import Drawer from '../drawer/drawer';
import { useFilterStore } from '@/store';
import './filters.scss';
import { Component, Vue } from '@/build/vue-wrapper';
import { Compare } from '@/utils/Compare';
import { JSX } from 'vue/jsx-runtime';

@Component({})
export default class DataTableFilters extends Vue {
  @Prop() filtersData!: DataTableFiltersData;
  @Prop() customItems?: DataTableCustomItem[];

  name = 'DataTableFilters';

  _filtersData?: DataTableFiltersData;
  _advancedFiltersData?: DataTableFilter[];
  _advancedFilterComponent?: AdvancedFilters;
  _drawerID?: string;
  drawerActive?: boolean = false;
  storeModule?: any;

  @Emit(DATA_TABLE_EVENTS.FILTERS_CHANGE)
  _emitFiltersChanged() {
    return this._getUpdatedFiltersObject();
  }

  @Watch('filtersData')
  filtersDataChanged(newFilterData: DataTableFiltersData, oldFilterData: DataTableFiltersData) {
    if (!Compare.deepEqual(newFilterData, oldFilterData)) {
      newFilterData.filters?.forEach((currentValue: DataTableFilter) => {
        const filterPayload = {
          id: currentValue.id,
          value: currentValue.type === 'checkbox' ? false : currentValue.value || '',
        };

        this.storeModule.updateFilterConfig(filterPayload);
        this.storeModule.updateFilterConfigLive(filterPayload);
      });

      this._filtersData = newFilterData;
    }
  }

  beforeCreate() {
    this._filtersData = {
      filters: [],
    };
    this._advancedFiltersData = [];
  }

  created() {
    this._drawerID = `drawer_${uuid4()}`;

    if (!this.storeModule) {
      this.storeModule = useFilterStore();
    }

    const advancedFilters = this.filtersData.filters?.filter((filter: DataTableFilter) => filter.advanced);

    if (this._filtersData) {
      this._filtersData = {
        filters: copyArrayOfObjects(this.filtersData.filters),
      };
    }

    this._advancedFiltersData = copyArrayOfObjects(advancedFilters);

    this.filtersData.filters?.forEach((currentValue: DataTableFilter) => {
      const filterPayload = {
        id: currentValue.id,
        value: currentValue.type === 'checkbox' ? false : currentValue.value || '',
      };

      this.storeModule.updateFilterConfig(filterPayload);
      this.storeModule.updateFilterConfigLive(filterPayload);
    });
  }

  get filterElementValue() {
    return this.storeModule.filterConfig;
  }

  get filterElementValueLive() {
    return this.storeModule.filterConfigLive;
  }

  _createSelectFilter(filter: DataTableFilter, mobile?: boolean) {
    const options = filter.options?.map((option) => {
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
      <div class={FORM_CLASSES.FORM_ITEM}>
        {label}
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          class={`
            ${SELECT_CLASSES.SELECT}
            ${mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}
          `}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select', mobile || false)}
        >
          {options}
        </select>
      </div>
    );
  }

  _createInputFilter(filter: DataTableFilter, mobile?: boolean) {
    return (
      <div class={FORM_CLASSES.FORM_ITEM}>
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
            ${mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]}
            `}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input', mobile || false)}
          placeholder={filter.placeholder || ''}
          type="text"
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter, mobile?: boolean) {
    return (
      <div class={FORM_CLASSES.FORM_ITEM}>
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
          class={`${INPUT_CLASSES.INPUT} ${mobile && UTILITY_CLASSES.MARGIN.BOTTOM[1]} ${GENERIC_SIZE_CLASSES.LG}`}
          placeholder={filter.placeholder || ''}
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
        ${UTILITY_CLASSES.JUSTIFY.CENTER}`}
      >
        <div
          class={[
            CHECKBOX_CLASSES.CHECKBOX,
            mobile
              ? `${UTILITY_CLASSES.ALIGN_SELF.LEFT} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]}`
              : UTILITY_CLASSES.ALIGN_SELF.CENTER,
          ]}
        >
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

  _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters, mobile: boolean) {
    if (ev.target) {
      const newFilterData = getElementFilterData(ev, elementType);
      const filterPayload = {
        id: newFilterData?.id?.replace(/-desktop|-mobile/gi, '') || 'no-id',
        value: elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
      };

      if (!mobile) {
        this.storeModule.updateFilterConfig(filterPayload);
        this.storeModule.updateFilterConfigLive(filterPayload);

        if (this._filtersData && newFilterData) {
          this._emitFiltersChanged();
        }
      } else {
        this.storeModule.updateFilterConfigLive(filterPayload);
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

  getCustomItemsSlots() {
    return this.customItems?.reduce(
      (accumulator, currentValue) => {
        if (this.$slots[currentValue.template]) {
          return {
            ...accumulator,
            [currentValue.template]: this.$slots[currentValue.template],
          };
        }
      },
      {} as { [key: string]: any } | undefined
    );
  }

  _advancedFiltersPopOver() {
    if (this._advancedFiltersData) {
      const customItemsSlots = this.getCustomItemsSlots();

      return (
        <AdvancedFilters
          onChiAdvancedFiltersChange={() => this._emitFiltersChanged()}
          mobile={false}
          advancedFiltersData={this._advancedFiltersData}
          customItems={this.customItems}
        >
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
          customItems={this.customItems}
        >
          {customItemsSlots}
        </AdvancedFilters>
      );
    }
    return null;
  }

  applyChanges() {
    this._emitFiltersChanged();
  }

  toggleDrawer() {
    this.drawerActive = !this.drawerActive;
  }

  render() {
    const standardFilters: JSX.Element[] = [];
    const standardFiltersMobile: JSX.Element[] = [];
    const advancedFiltersPopOver =
      this._advancedFiltersData && this._advancedFiltersData.length > 0 ? this._advancedFiltersPopOver() : null;
    const advancedFilters =
      this._advancedFiltersData && this._advancedFiltersData.length > 0 ? this._advancedFiltersFields() : null;

    this.filtersData.filters.forEach((filter: DataTableFilter) => {
      const filterTypes = {
        select: this._createSelectFilter,
        input: this._createInputFilter,
        checkbox: this._createCheckboxFilter,
        textarea: this._createTextareaFilter,
      };
      const filterElement = filterTypes[filter.type] ? filterTypes[filter.type](filter) : null;
      const filterElementMobile = filterTypes[filter.type] ? filterTypes[filter.type](filter, true) : null;

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
            class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT} ${DRAWER_CLASSES.TRIGGER}`}
            onClick={(event: MouseEvent) => {
              event.stopPropagation();

              this.toggleDrawer();
            }}
            data-target={this._drawerID}
            aria-label="Open Drawer"
            type="button"
          >
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
          onChiDrawerClickOutside={() => (this.drawerActive = false)}
        >
          <div class={[UTILITY_CLASSES.PADDING.X[2], UTILITY_CLASSES.PADDING.Y[3]]}>
            {standardFiltersMobile}
            {advancedFilters}
            <div
              class={`${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.JUSTIFY.CENTER} ${UTILITY_CLASSES.PADDING.Y[2]}`}
            >
              <button onClick={() => this.toggleDrawer()} class={BUTTON_CLASSES.BUTTON}>
                Cancel
              </button>
              <button
                onClick={() => this.applyChanges()}
                disabled={
                  this.filterElementValueLive && Compare.deepEqual(this.filterElementValue, this.filterElementValueLive)
                }
                class={`
                  ${BUTTON_CLASSES.BUTTON}
                  ${BUTTON_CLASSES.PRIMARY}
                  ${UTILITY_CLASSES.MARGIN.LEFT[2]}
                `}
              >
                Apply
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
