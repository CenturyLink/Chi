import {
  ACCORDION_CLASSES,
  BUTTON_CLASSES,
  ICON_CLASS,
  CHECKBOX_CLASSES,
  FORM_CLASSES,
  INPUT_CLASSES,
  SELECT_CLASSES,
  PORTAL_CLASS,
  UTILITY_CLASSES,
} from '@/constants/classes';
import { DataTableFilter, DataTableFormElementFilters } from '@/constants/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { compareFilters, getElementFilterData } from './FilterUtils';
import { findComponent, uuid4 } from '@/utils/utils';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import { DATA_TABLE_EVENTS } from '@/constants/events';

Vue.config.ignoredElements = ['chi-popover'];

declare const chi: any;
@Component
export default class AdvancedFilters extends Vue {
  @Prop() advancedFiltersData?: DataTableFilter[];
  @Prop() popoverFilterID?: string;
  @Prop() filterUniqueID?: string;
  @Prop() mobile?: boolean;

  _advancedFiltersAccordion?: HTMLElement;
  _advancedFilterAccordionId?: string;
  _advancedFilterUuid?: string;
  _advancedFilterButtonId?: string;
  _advancedFilterPopoverId?: string;
  storeModule?: any;
  _planeAdvancedData = {};

  get filterElementValue() {
    return this.storeModule.filterConfig;
  }

  get filterElementValueLive() {
    return this.storeModule.filterConfigLive;
  }

  async created() {
    this._advancedFilterAccordionId = `accordion__${this.filterUniqueID}`;
    this._advancedFilterUuid = uuid4();
    this._advancedFilterButtonId = `button__${this._advancedFilterUuid}`;
    this._advancedFilterPopoverId = `popover__${this._advancedFilterUuid}`;

    if (!this.storeModule && this.$store) {
      this.storeModule = getModule(store, this.$store);

      if (this.advancedFiltersData) {
        this._planeAdvancedData = this.advancedFiltersData.reduce((accumulator: any, currentValue: any) => {
          return {
            ...accumulator,
            [currentValue.id]: currentValue.type === 'checkbox' ? false : currentValue.value || '',
          };
        }, {});
      }
    }
  }

  async mounted() {
    const dataTableFiltersComponent = findComponent(this, 'DataTableFilters');

    if (this._advancedFilterAccordionId) {
      const advancedFiltersAccordion = this.$refs.advancedFiltersAccordion;

      if (advancedFiltersAccordion) {
        this._advancedFiltersAccordion = chi.accordion(advancedFiltersAccordion);
      }
    }

    if (dataTableFiltersComponent) {
      (dataTableFiltersComponent as DataTableFilters)._advancedFilterComponent = this;
    }
  }

  _calculateFilterId(filterName: string) {
    return `${this.popoverFilterID}_${filterName}`;
  }

  _createSelectFilter(filter: DataTableFilter) {
    const options = filter.options?.map(option => {
      return (
        <option value={option.value} selected={filter.value === option.value}>
          {option.label}
        </option>
      );
    });

    return (
      <div
        id={
          !this.mobile
            ? `${this._calculateFilterId(filter.name)}-desktop`
            : `${this._calculateFilterId(filter.name)}-mobile`
        }
        class={`${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <select
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={this.filterElementValueLive[filter.id]}
          class={`${SELECT_CLASSES.SELECT} ${this.mobile ? '-mb--1' : ''} -lg`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'select')}>
          {options}
        </select>
      </div>
    );
  }

  async _changeFormElementFilter(ev: Event, elementType: DataTableFormElementFilters) {
    if (ev.target) {
      const newFilterData: {
        name: string;
        checked?: boolean;
        value?: string;
        id: string;
      } | null = getElementFilterData(ev, elementType);

      await this.storeModule.updateFilterConfigLive({
        ...this.filterElementValueLive,
        ...{
          [newFilterData?.id.replace(/-desktop|-mobile/gi, '') || 'no-id']:
            elementType !== 'checkbox' ? newFilterData?.value : newFilterData?.checked,
        },
      });
    }
  }

  _createInputFilter(filter: DataTableFilter) {
    return (
      <div
        id={
          !this.mobile
            ? `${this._calculateFilterId(filter.name)}-desktop`
            : `${this._calculateFilterId(filter.name)}-mobile`
        }
        class={`
              ${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <input
          aria-label={`Filter by ${filter.label || filter.name}`}
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          class={`${INPUT_CLASSES.INPUT} ${this.mobile && '-mb--1'} -lg`}
          data-filter={filter.name}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'input')}
          placeholder={filter.placeholder || null}
          type="text"
          value={this.filterElementValueLive[filter.id]}
        />
      </div>
    );
  }

  _createTextareaFilter(filter: DataTableFilter) {
    return (
      <div class={`${FORM_CLASSES.FORM_ITEM}`}>
        {this.mobile && (
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={FORM_CLASSES.LABEL}>
            {filter.label}
          </label>
        )}
        <textarea
          id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
          value={this.filterElementValueLive[filter.id]}
          aria-label={`Filter by ${filter.label || filter.name}`}
          data-filter={filter.name}
          class={`${INPUT_CLASSES.INPUT} ${this.mobile && '-mb--1'} -lg`}
          placeholder={filter.placeholder || null}
          onChange={(ev: Event) => this._changeFormElementFilter(ev, 'textarea')}
        />
      </div>
    );
  }

  _createCheckboxFilter(filter: DataTableFilter) {
    return (
      <div
        class={`
              ${FORM_CLASSES.FORM_ITEM}
              ${UTILITY_CLASSES.DISPLAY.FLEX}
              ${UTILITY_CLASSES.JUSTIFY.CENTER}`}>
        <div
          class={[
            CHECKBOX_CLASSES.checkbox,
            this.mobile ? `${UTILITY_CLASSES.ALIGN_SELF.LEFT} -mb--1` : UTILITY_CLASSES.ALIGN_SELF.CENTER,
          ]}>
          <input
            id={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`}
            aria-label={`Filter by ${filter.label || filter.name}`}
            data-filter={filter.name}
            type="checkbox"
            class={`${CHECKBOX_CLASSES.INPUT} ${this.mobile && '-mb--1'}`}
            checked={this.filterElementValueLive[filter.id]}
            onChange={(ev: Event) => this._changeFormElementFilter(ev, 'checkbox')}
          />
          <label for={this.mobile ? `${filter.id}-mobile` : `${filter.id}-desktop`} class={CHECKBOX_CLASSES.LABEL}>
            {filter.label}
          </label>
        </div>
      </div>
    );
  }

  render() {
    const advancedFilters: JSX.Element[] = [];
    this.advancedFiltersData &&
      this.advancedFiltersData.forEach((filter: DataTableFilter) => {
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

        if (filterElement) {
          const accordionItem = (
            <div class={ACCORDION_CLASSES.ITEM}>
              <button class={ACCORDION_CLASSES.TRIGGER}>
                <i class={`${ICON_CLASS} icon-chevron-down`} aria-hidden="true" />
                <div class={`${ACCORDION_CLASSES.TITLE}`}>{filter.label || filter.name}</div>
              </button>
              <div class={ACCORDION_CLASSES.CONTENT}>{filterElement}</div>
            </div>
          );
          this.mobile ? advancedFilters.push(filterElement) : advancedFilters.push(accordionItem);
        }
      });

    const advancedFiltersButton = (
      <button
        id={this._advancedFilterButtonId}
        onclick={() => this._toggleAdvancedFiltersPopover()}
        class={`${BUTTON_CLASSES.BUTTON} ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.PRIMARY} ${BUTTON_CLASSES.FLAT}`}>
        <div class={BUTTON_CLASSES.CONTENT}>
          <i class={`${ICON_CLASS} icon-filter`} aria-hidden="true" />
        </div>
      </button>
    );

    const advancedFiltersRender = (
      <div>
        {!this.mobile && [
          advancedFiltersButton,
          <chi-popover
            ref="popover"
            position="bottom"
            reference={`#${this._advancedFilterButtonId}`}
            title="Filters"
            portal
            drag
            closable>
            <div class={`${ACCORDION_CLASSES.ACCORDION} -sm`} ref="advancedFiltersAccordion">
              {advancedFilters}
            </div>
            <div class={`advanced-filters__actions -mt--2`}>
              <button
                onclick={() => this._applyAdvancedFiltersChange()}
                class={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.PRIMARY}`}
                ref="advancedFiltersApplyButton"
                disabled={
                  this.filterElementValueLive && compareFilters(this.filterElementValue, this.filterElementValueLive)
                }>
                APPLY
              </button>
              <button onclick={() => this._toggleAdvancedFiltersPopover()} class={`${BUTTON_CLASSES.BUTTON} -ml--2`}>
                CANCEL
              </button>
              <button
                class={`
                    ${BUTTON_CLASSES.BUTTON} 
                    ${PORTAL_CLASS} ${BUTTON_CLASSES.ICON_BUTTON}
                    ${BUTTON_CLASSES.PRIMARY} 
                    ${BUTTON_CLASSES.FLAT} ${UTILITY_CLASSES.MARGIN.LEFT[1]} -bl--1`}
                aria-label="Reset advanced filters"
                onclick={() => this._resetAdvancedFilters()}>
                <div class={BUTTON_CLASSES.CONTENT}>
                  <i class={`${ICON_CLASS} icon-reload`} aria-hidden="true" />
                </div>
              </button>
            </div>
          </chi-popover>,
        ]}
        {this.mobile && advancedFilters}
      </div>
    );

    return advancedFiltersRender;
  }

  _emitAdvancedFiltersChange() {
    this.$emit(DATA_TABLE_EVENTS.ADVANCED_FILTERS_CHANGE);
  }

  async _applyAdvancedFiltersChange() {
    await this.storeModule.updateFilterConfig(this.filterElementValueLive);
    this._emitAdvancedFiltersChange();
  }

  _toggleAdvancedFiltersPopover() {
    if (this._advancedFilterPopoverId) {
      const popover = this.$refs.popover;

      if (popover) {
        // eslint-disable-next-line
        // @ts-ignore
        popover.toggle();
      }
    }
  }

  async _resetAdvancedFilters() {
    await this.storeModule.updateFilterConfig({ ...this.filterElementValue, ...this._planeAdvancedData });
    await this.storeModule.updateFilterConfigLive({ ...this.filterElementValueLive, ...this._planeAdvancedData });
    this._emitAdvancedFiltersChange();
  }
}
