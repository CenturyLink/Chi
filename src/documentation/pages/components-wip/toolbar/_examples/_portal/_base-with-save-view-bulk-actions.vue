<template lang="pug">
  <ComponentExample title="Base with save view and bulk actions" id="base-with-save-view-and-bulk-actions-portal" additionalStyle="position: static;" additionalClasses="-position--relative" :tabs="exampleTabs">
    div(slot="example")
      chi-data-table-toolbar
        template(v-slot:start)
          chi-search-input(:data-table-search='true')
          .chi-divider.-vertical
          chi-data-table-views(:views='toolbar.viewsData')
          .chi-divider.-vertical
          chi-data-table-filters(:filters-data='toolbar.filtersData', :custom-items='toolbar.customItemsData')
            template(v-slot:custom-one)
              chi-label(for='example__base_with_save_view_and_bulk_actions_input-1') City
              chi-text-input#example__base_with_save_view_and_bulk_actions_input-1
              chi-label(for='example__base_with_save_view_and_bulk_actions_input-2') Zip Code
              chi-text-input#example__base_with_save_view_and_bulk_actions_input-2
            template(v-slot:custom-two)
              chi-date-picker
        template(v-slot:end)
          chi-tooltip(message="Refresh")
            button.chi-button.-icon.-flat(aria-label="Refresh")
              .chi-button__content
                i.chi-icon.icon-refresh(aria-hidden="true")
          chi-tooltip(message="Download")
            button.chi-button.-icon.-flat(aria-label="Download")
              .chi-button__content
                i.chi-icon.icon-arrow-to-bottom(aria-hidden="true")
          chi-column-customization(:columns-data='toolbar.columnsData')
      chi-save-view(:active="saveView.active" :default="saveView.default" :mode="saveView.mode" :results="saveView.results" :title="saveView.title")
      .chi-bulk-actions
        .chi-bulk-actions__top.-position--absolute
          button.chi-button.-flat.-px--1 Select all
          button.chi-button.-flat.-px--1 Cancel
        .chi-bulk-actions__start
          .chi-bulk-actions__results
            .chi-bulk-actions__label Actions (10 Selected)
            .chi-form__item
              .chi-checkbox
                input#checkbox-ba1.chi-checkbox__input(type='checkbox')
                label.chi-checkbox__label(for='checkbox-ba1') Show Selected Only
          .chi-divider.-vertical
          .chi-bulk-actions__buttons
            .chi-bulk-actions__buttons-mobile.-position--absolute
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Edit')
                chi-icon(icon='edit')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Compose')
                chi-icon(icon='compose')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Delete')
                chi-icon(icon='delete')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Print')
                chi-icon(icon='print')
            .chi-bulk-actions__buttons-desktop
              chi-button(size='xs')
                chi-icon(icon='arrow-to-bottom')
                span Download
              chi-button(size='xs')
                chi-icon(icon='compose')
                span Compose
              chi-button(size='xs')
                chi-icon(icon='delete')
                span Delete
              chi-button(size='xs')
                chi-icon(icon='print')
                span Print
        .chi-bulk-actions__end
          chi-button(type='close')
    pre(class="language-html" slot="code-webcomponent")
      code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    <Wrapper slot="code-vue">
      .chi-tab__description
        | Use the slots <code>start</code> to add elements to the left side area of the Toolbar Header and the <code>end</code> - to the right side.
      pre(class="language-html")
        code(v-highlight="$data.codeSnippets.vue" class="html")
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | To render toolbar, use the class <code>chi-toolbar</code>.
      pre(class="language-html")
        code(v-highlight="$data.codeSnippets.htmlblueprint" class="html")
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  exampleToolbar,
  exampleSaveView
} from '../../../../../fixtures/fixtures';

@Component({
  data: () => {
    return {
      toolbar: exampleToolbar,
      saveView: exampleSaveView,
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'vue',
          label: 'Vue'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        vue: `<!-- Vue component -->
<ChiDataTableToolbar>
  <template v-slot:start>
    <ChiSearchInput :dataTableSearch="true" />
    <div class="chi-divider -vertical"></div>
    <!-- To render views, use Views sub-module of Toolbar -->
    <ChiDataTableViews :views="toolbar.viewsData" />
    <div class="chi-divider -vertical"></div>
    <!-- To render filters, use Filters sub-module of Toolbar by providing it with respective data -->
    <ChiDataTableFilters :filtersData="toolbar.filtersData" :customItems="toolbar.customItemsData" class="-ml--2">
      <template v-slot:customAdvanced>
        <div class="chi-form__item">
          <chi-label for="example__base_with_save_view_and_bulk_actions_filter_input-1">City</chi-label>
          <chi-text-input id="example__base_with_save_view_and_bulk_actions_filter_input-1" @chiChange="e => inputOneChangeHandler(e)"></chi-text-input>
          <chi-label for="example__base_with_save_view_and_bulk_actions_filter_input-2">Zip Code</chi-label>
          <chi-text-input id="example__base_with_save_view_and_bulk_actions_filter_input-2" @chiChange="e => inputTwoChangeHandler(e)"></chi-text-input>
        </div>
      </template>
      <template v-slot:customAdvanced2>
        <chi-date-picker @chiDateChange="e => dateChangeHandler(e)" />
      </template>
    </ChiDataTableFilters>
  </template>
  <template v-slot:end>
   <ChiTooltip message="Refresh">
      <button class="chi-button -icon -flat" aria-label="Refresh">
        <div class="chi-button__content">
          <i class="chi-icon icon-refresh" aria-hidden="true"></i>
        </div>
      </button>
    </ChiTooltip>
    <ChiTooltip message="Download">
      <button class="chi-button -icon -flat" aria-label="Download">
        <div class="chi-button__content">
          <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
        </div>
      </button>
    </ChiTooltip>
    <!-- To enable customization of columns, use Column Customization sub-module of Toolbar by providing it with respective data -->
    <ChiColumnCustomization :columnsData="toolbar.columnsData" />
  </template>
</ChiDataTableToolbar>
<ChiSaveView :active="saveView.active" :default="saveView.default" :mode="saveView.mode" :results="saveView.results" :title="saveView.title"></ChiSaveView>
<div class="chi-bulk-actions">
  <div class="chi-bulk-actions__top -position--absolute">
    <button class="chi-button -flat -px--1">Select all</button
    ><button class="chi-button -flat -px--1">Cancel</button>
  </div>
  <div class="chi-bulk-actions__start">
    <div class="chi-bulk-actions__results">
      <div class="chi-bulk-actions__label">Actions (10 Selected)</div>
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" id="checkbox-ba1" type="checkbox" /><label
            class="chi-checkbox__label"
            for="checkbox-ba1"
            >Show Selected Only</label
          >
        </div>
      </div>
    </div>
    <div class="chi-divider -vertical"></div>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile -position--absolute">
        <chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Edit">
          <chi-icon icon="edit"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Compose">
          <chi-icon icon="compose"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Delete">
          <chi-icon icon="delete"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Print">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <chi-button size="xs"> <chi-icon icon="arrow-to-bottom"></chi-icon><span>Download</span> </chi-button>
        <chi-button size="xs"> <chi-icon icon="compose"></chi-icon><span>Compose</span> </chi-button>
        <chi-button size="xs"> <chi-icon icon="delete"></chi-icon><span>Delete</span> </chi-button>
        <chi-button size="xs"> <chi-icon icon="print"></chi-icon><span>Print</span> </chi-button>
      </div>
    </div>
  </div>
  <div class="chi-bulk-actions__end">
    <chi-button type="close"></chi-button>
  </div>
</div>

<!-- Example Data -->
data: () => {
  const customItems = [
    {
      template: 'customAdvanced',
      label: 'Custom 1',
    },
    {
      template: 'customAdvanced2',
      label: 'Custom 2',
    },
  ];
  const filters = [
    {
      name: 'status',
      type: 'select',
      id: 'myoption1',
      label: 'Selector',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      value: 'active',
    },
    {
      name: 'input',
      placeholder: 'Input filter',
      type: 'input',
      value: '',
      id: 'myoption2',
      label: 'Input Filter',
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      checked: false,
      id: 'myoption3',
      label: 'Checkbox',
    },
    {
      name: 'statusAdvanced',
      label: 'Status',
      type: 'select',
      id: 'myoption4',
      options: [
        {
          label: 'Active',
          value: 'active',
          selected: false,
        },
        {
          label: 'Inactive',
          value: 'inactive',
          selected: false,
        },
      ],
      advanced: true,
      value: 'active',
    },
    {
      name: 'inputAdvanced',
      label: 'Label',
      id: 'myoption5',
      advanced: true,
    },
    {
      name: 'textareaAdvanced',
      label: 'textarea',
      id: 'myoption6',
      type: 'textarea',
      advanced: true,
    },
    {
      name: 'checkboxAdvanced',
      id: 'myoption7',
      label: 'Advanced Checkbox',
      type: 'checkbox',
      advanced: true,
    },
  ];
  const filters = [
    {
      name: 'status',
      type: 'select',
      id: 'myoption1',
      options: [
        {
          label: 'Pending Active',
          value: 'pending',
          selected: true
        },
        {
          label: 'Active',
          value: 'active',
          selected: false
        },
        {
          label: 'Inactive',
          value: 'inactive',
          selected: false
        }
      ],
      advanced: false,
      value: 'pending'
    },
    {
      name: 'statusAdvanced',
      label: 'Status',
      type: 'select',
      id: 'myoption1',
      options: [
        {
          label: 'Pending Active',
          value: 'pending',
          selected: false
        },
        {
          label: 'Active',
          value: 'active',
          selected: false
        },
        {
          label: 'Inactive',
          value: 'inactive',
          selected: false
        }
      ],
      advanced: true,
      value: 'pending'
    },
    {
      name: 'inputAdvanced',
      label: 'Label',
      id: 'myoption2',
      advanced: true
    },
    {
      name: 'textareaAdvanced',
      label: 'textarea',
      id: 'myoption3',
      type: 'textarea',
      advanced: true
    },
    {
      name: 'checkboxAdvanced',
      id: 'myoption4',
      label: 'Advanced Checkbox',
      type: 'checkbox',
      advanced: true
    }
  ];

  return {
    toolbar: {
      customItemsData: customItems,
      filtersData: filters,
      columnsData: {
        columns: columns
      },
      saveView: {
        title: 'Search Results',
        results: '(1-40 of 78)',
        mode: 'base',
        active: true,
        default: true
      },
      viewsData: [
        {
          id: 'view-1',
          label: 'View 1',
          columns: columns,
          searchString: 'abc',
          filters: filters
        },
        {
          id: 'view-2',
          label: 'View 2',
          columns: [],
          searchString: 'abcde',
          filters: [],
        },
      ],
    };
  };
};`,
        htmlblueprint: `<div class="chi-toolbar">
  <div class="chi-toolbar__header">
    <div class="chi-toolbar__start">
      <div class="chi-toolbar__search">
        <div class="chi-form__item">
          <chi-search-input
            id="example__base_with_save_view_and_bulk_actions"
          ></chi-search-input>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-toolbar__views">
        <div class="chi-toolbar__views-desktop">
          <div class="chi-form__item">
            <select
              class="chi-select"
              id="example__base_with_save_view_and_bulk_actions_views-1"
            >
              <option>View 1</option>
              <option>View 2</option>
            </select>
          </div>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-form__item -ml--1>
        <select class="chi-select">
          <option>Pending Active</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div class="chi-toolbar__filters">
        <div class="chi-toolbar__filters-desktop">
          <div class="chi-form__item">
            <select
              class="chi-select"
              id="example__base_with_save_view_and_bulk_actions_filter-select-1"
            >
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="chi-form__item">
            <select
              class="chi-select"
              id="example__base_with_save_view_and_bulk_actions_filter-select-2"
            >
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <button
            class="chi-button -icon -flat"
            id="example__base_with_save_view_and_bulk_actions_filter_button"
            aria-label="Filters"
            data-tooltip="Filters"
            data-position="top"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__filters-mobile">
          <button
            class="chi-button -icon -flat chi-drawer__trigger"
            id="example__base_with_save_view_and_bulk_actions_drawer_trigger-1"
            data-target="#example__base_with_save_view_and_bulk_actions_drawer-1"
            aria-label="Button action"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="chi-toolbar__end">
      <div class="chi-toolbar__actions">
        <div class="chi-toolbar__actions-desktop">
          <button
            class="chi-button -icon -flat"
            id="example__base_with_save_view_and_bulk_actions_refresh_button"
            aria-label="Refresh"
            data-tooltip="Refresh"
            data-position="top"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-refresh" aria-hidden="true"></i>
            </div>
          </button>
          <button
            class="chi-button -icon -flat"
            id="example__base_with_save_view_and_bulk_actions_download_button"
            aria-label="Download"
            data-tooltip="Download"
            data-position="top"
          >
            <div class="chi-button__content">
              <i
                class="chi-icon icon-arrow-to-bottom"
                aria-hidden="true"
              ></i>
            </div>
          </button>
          <button
            class="chi-button -icon -flat"
            id="example__base_with_save_view_and_bulk_actions_column_customization_button"
            aria-label="Customize Columns"
            data-tooltip="Customize Columns"
            data-position="top"
          >
            <div class="chi-button__content">
              <i
                class="chi-icon icon-table-column-settings"
                aria-hidden="true"
              ></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__actions-mobile">
          <button
            class="chi-button -icon -flat chi-drawer__trigger"
            id="example__base_with_save_view_and_bulk_actions_drawer_trigger-2"
            data-target="#example__base_with_save_view_and_bulk_actions_drawer-2"
            aria-label="Button action"
          >
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>

  <!-- Drawer -->
  <div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div
      class="chi-drawer -left -menu -position--absolute"
      id="example__base_with_save_view_and_bulk_actions_drawer-1"
    >
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">Filters</span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content -px--2 -py--3">
        <div class="chi-form__item -mb--2">
          <label
            class="chi-label"
            for="example__base_with_save_view_and_bulk_actions_drawer-1_label-1"
            >Label</label
          >
          <select
            class="chi-select"
            id="example__base_with_save_view_and_bulk_actions_drawer-1_select-1"
          >
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label
            class="chi-label"
            for="example__base_with_save_view_and_bulk_actions_drawer-1_label-2"
            >Label</label
          >
          <select
            class="chi-select"
            id="example__base_with_save_view_and_bulk_actions_drawer-1_select-2"
          >
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label
            class="chi-label"
            for="example__base_with_save_view_and_bulk_actions_drawer-1_label-3"
            >Label</label
          >
          <select
            class="chi-select"
            id="example__base_with_save_view_and_bulk_actions_drawer-1_select-3"
          >
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label
            class="chi-label"
            for="example__base_with_save_view_and_bulk_actions_drawer-1_label-4"
            >Label</label
          >
          <select
            class="chi-select"
            id="example__base_with_save_view_and_bulk_actions_drawer-1_select-4"
          >
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
      <div class="-d--flex -justify-content--center -pb--2">
        <button class="chi-button -primary">Apply</button>
        <button class="chi-button -ml--2">Cancel</button>
      </div>
    </div>
  </div>
  </div>
  <div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div
      class="chi-drawer -right -menu -position--absolute"
      id="example__base_with_save_view_and_bulk_actions_drawer-2"
    >
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">Actions</span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content -px--2">
        <ul class="-no-style">
          <li class="-text--md">Download data</li>
          <div class="chi-divider"></div>
          <li class="-text--md">Refresh results</li>
          <div class="chi-divider"></div>
        </ul>
      </div>
    </div>
  </div>
  </div>
  <div class="chi-toolbar__save_view">
  <div class="chi-toolbar__start">
    <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
    <div class="chi-toolbar__results">
      <span class="chi-toolbar__label">Search Results </span>
      <span>(1-40 of 78)</span>
    </div>
    <div class="chi-divider -vertical"></div>
    <chi-link href="#" size="md">Save View</chi-link>
  </div>
  <div class="chi-toolbar__end">
    <button class="chi-button -icon -flat" aria-label="Button action">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
  </div>
  <div class="chi-bulk-actions">
  <div class="chi-bulk-actions__top -position--absolute">
    <button class="chi-button -flat -px--1">Select all</button
    ><button class="chi-button -flat -px--1">Cancel</button>
  </div>
  <div class="chi-bulk-actions__start">
    <div class="chi-bulk-actions__results">
      <div class="chi-bulk-actions__label">Actions (10 Selected)</div>
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input
            class="chi-checkbox__input"
            id="checkbox-ba1"
            type="checkbox"
          /><label class="chi-checkbox__label" for="checkbox-ba1"
            >Show Selected Only</label
          >
        </div>
      </div>
    </div>
    <div class="chi-divider -vertical"></div>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile -position--absolute">
        <chi-button
          variant="flat"
          type="icon"
          alternative-text="Button action"
          data-tooltip="Edit"
        >
          <chi-icon icon="edit"></chi-icon>
        </chi-button>
        <chi-button
          variant="flat"
          type="icon"
          alternative-text="Button action"
          data-tooltip="Compose"
        >
          <chi-icon icon="compose"></chi-icon>
        </chi-button>
        <chi-button
          variant="flat"
          type="icon"
          alternative-text="Button action"
          data-tooltip="Delete"
        >
          <chi-icon icon="delete"></chi-icon>
        </chi-button>
        <chi-button
          variant="flat"
          type="icon"
          alternative-text="Button action"
          data-tooltip="Print"
        >
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <chi-button size="xs">
          <chi-icon icon="arrow-to-bottom"></chi-icon
          ><span>Download</span>
        </chi-button>
        <chi-button size="xs">
          <chi-icon icon="compose"></chi-icon><span>Compose</span>
        </chi-button>
        <chi-button size="xs">
          <chi-icon icon="delete"></chi-icon><span>Delete</span>
        </chi-button>
        <chi-button size="xs">
          <chi-icon icon="print"></chi-icon><span>Print</span>
        </chi-button>
      </div>
    </div>
  </div>
  <div class="chi-bulk-actions__end">
    <chi-button type="close"></chi-button>
  </div>
</div>

<!-- Javascript -->
<script>
  chi.drawer(document.getElementById('example__base_with_save_view_and_bulk_actions_drawer_trigger-1'));
  chi.drawer(document.getElementById('example__base_with_save_view_and_bulk_actions_drawer_trigger-2'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`
      }
    };
  }
})
export default class BaseWithSaveViewAndBulkActionsPortalBrightSpeed extends Vue {}
</script>
