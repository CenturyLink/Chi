import{V as C,N as y}from"./NAah3XrW.js";import{e as g,c as D}from"./Cq1bO1Ih.js";import{_ as S}from"./onyWiYp2.js";import{_ as T}from"./CAQzZ0uH.js";import{o as A,h as V,w as o,m as n,b as a,a as t,d as r}from"./CEIPSiTs.js";import{_ as B}from"./DlAUqK2U.js";import"./DtNz156Q.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";var O=Object.defineProperty,z=Object.getOwnPropertyDescriptor,I=(e,i,_,l)=>{for(var c=l>1?void 0:l?z(i,_):i,b=e.length-1,s;b>=0;b--)(s=e[b])&&(c=(l?s(i,_,c):s(c))||c);return l&&c&&O(i,_,c),c};let h=class extends C{};h=I([y({data:()=>({toolbar:g,saveView:D,exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{vue:`<!-- Vue component -->
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
};`,htmlblueprint:`<div class="chi-toolbar">
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
            aria-label="Customize columns"
            data-tooltip="Customize columns"
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
<\/script>`}})})],h);const P={class:"chi-form__item"};function F(e,i,_,l,c,b){const s=n("ChiSearchInput"),p=n("ChiDataTableViews"),m=n("ChiDataTableFilters"),v=n("ChiTooltip"),w=n("ChiColumnCustomization"),f=n("ChiDataTableToolbar"),x=n("ChiSaveView"),u=S,k=T;return A(),V(k,{title:"Base with save view and bulk actions",id:"base-with-save-view-and-bulk-actions-portal",additionalStyle:"position: static;",additionalClasses:"-position--relative",tabs:e.exampleTabs},{example:o(()=>[a(f,null,{start:o(()=>[a(s,{dataTableSearch:!0}),i[5]||(i[5]=t("div",{class:"chi-divider -vertical"},null,-1)),a(p,{views:e.toolbar.viewsData},null,8,["views"]),i[6]||(i[6]=t("div",{class:"chi-divider -vertical"},null,-1)),a(m,{class:"-ml--2",filtersData:e.toolbar.filtersData,customItems:e.toolbar.customItemsData},{customAdvanced:o(()=>[t("div",P,[i[3]||(i[3]=t("chi-label",{for:"input-1"},"City",-1)),t("chi-text-input",{id:"input-1","on:chiChange":i[0]||(i[0]=d=>e.inputOneChangeHandler(d))},null,32),i[4]||(i[4]=t("chi-label",{for:"input-2"},"Zip Code",-1)),t("chi-text-input",{id:"input-2","on:chiChange":i[1]||(i[1]=d=>e.inputTwoChangeHandler(d))},null,32)])]),customAdvanced2:o(()=>[t("chi-date-picker",{"on:chiDateChange":i[2]||(i[2]=d=>e.dateChangeHandler(d))},null,32)]),_:1},8,["filtersData","customItems"])]),end:o(()=>[a(v,{message:"Refresh"},{default:o(()=>i[7]||(i[7]=[t("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1)])),_:1}),a(v,{message:"Download"},{default:o(()=>i[8]||(i[8]=[t("button",{class:"chi-button -icon -flat","aria-label":"Download"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1)])),_:1}),a(w,{columnsData:e.toolbar.columnsData},null,8,["columnsData"])]),_:1}),a(x,{config:e.saveView},null,8,["config"]),i[9]||(i[9]=t("div",{class:"chi-bulk-actions"},[t("div",{class:"chi-bulk-actions__start"},[t("div",{class:"chi-bulk-actions__results"},[t("div",{class:"chi-bulk-actions__label"},"Actions (10 Selected)"),t("div",{class:"chi-form__item"},[t("div",{class:"chi-checkbox"},[t("input",{class:"chi-checkbox__input",id:"checkbox-ba1",type:"checkbox"}),t("label",{class:"chi-checkbox__label",for:"checkbox-ba1"},"Show Selected Only")])])]),t("div",{class:"chi-divider -vertical"}),t("div",{class:"chi-bulk-actions__buttons"},[t("div",{class:"chi-bulk-actions__buttons-mobile -position--absolute"},[t("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Edit"},[t("chi-icon",{icon:"edit"})]),t("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Compose"},[t("chi-icon",{icon:"compose"})]),t("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Delete"},[t("chi-icon",{icon:"delete"})]),t("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Print"},[t("chi-icon",{icon:"print"})])]),t("div",{class:"chi-bulk-actions__buttons-desktop"},[t("chi-button",{size:"xs"},[t("chi-icon",{icon:"arrow-to-bottom"}),t("span",null,"Download")]),t("chi-button",{size:"xs"},[t("chi-icon",{icon:"compose"}),t("span",null,"Compose")]),t("chi-button",{size:"xs"},[t("chi-icon",{icon:"delete"}),t("span",null,"Delete")]),t("chi-button",{size:"xs"},[t("chi-icon",{icon:"print"}),t("span",null,"Print")])])])]),t("div",{class:"chi-bulk-actions__end"},[t("chi-button",{type:"close"})])],-1))]),"code-webcomponent":o(()=>[a(u,{code:e.codeSnippets.webcomponent,lang:"html"},null,8,["code"])]),"code-vue":o(()=>[i[10]||(i[10]=t("div",{class:"chi-tab__description"},[r("Use the slots "),t("code",null,"start"),r(" to add elements to the left side area of the Toolbar Header and the "),t("code",null,"end"),r(" - to the right side.")],-1)),a(u,{code:e.codeSnippets.vue,lang:"html"},null,8,["code"])]),"code-htmlblueprint":o(()=>[i[11]||(i[11]=t("div",{class:"chi-tab__description"},[r("To render toolbar, use the class "),t("code",null,"chi-toolbar"),r(".")],-1)),a(u,{class:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=B(h,[["render",F]]);export{J as default};
