import{V as x,N as g}from"./uJTUijt2.js";import{e as D}from"./DAzwSQBh.js";import{_ as T}from"./D8GK0F__.js";import{_ as A}from"./DKu8Jd2y.js";import{o as O,f as y,w as o,r as s,b as l,a as e,d as r}from"./B5CYXVwa.js";import{_ as S}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var I=Object.defineProperty,V=Object.getOwnPropertyDescriptor,B=(t,i,p,n)=>{for(var a=n>1?void 0:n?V(i,p):i,u=t.length-1,c;u>=0;u--)(c=t[u])&&(a=(n?c(i,p,a):c(a))||a);return n&&a&&I(i,p,a),a};let _=class extends x{};_=B([g({data:()=>({toolbar:D,exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",vue:`<!-- Vue component -->
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
          <chi-label for="example__base_filter_input-1">City</chi-label>
          <chi-text-input id="example__base_filter_input-1" @chiChange="e => inputOneChangeHandler(e)"></chi-text-input>
          <chi-label for="example__base_filter_input-2">Zip Code</chi-label>
          <chi-text-input id="example__base_filter_input-2" @chiChange="e => inputTwoChangeHandler(e)"></chi-text-input>
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

  const columns = [
    {
      name: 'columnA',
      label: 'Column A',
    },
    {
      name: 'columnB',
      label: 'Column B',
    },
    {
      name: 'columnC',
      label: 'Column C',
      locked: true,
      selected: true,
    },
    {
      name: 'columnD',
      label: 'Column D',
      locked: true,
      selected: true,
    },
    {
      name: 'columnE',
      label: 'Column E',
      selected: true,
    },
    {
      name: 'columnF',
      label: 'Column F',
      selected: true,
    },
    {
      name: 'columnG',
      label: 'Column G',
    },
    {
      name: 'columnH',
      label: 'Column H',
    },
    {
      name: 'columnI',
      label: 'Column I',
    },
    {
      name: 'columnJ',
      label: 'Column J',
    },
  ];

  return {
    toolbar: {
      customItemsData: customItems,
      filtersData: {
        filters: filters
      },
      columnsData: {
        columns: columns
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
          <chi-search-input id="example__base"></chi-search-input>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-toolbar__views">
        <div class="chi-toolbar__views-desktop">
          <div class="chi-form__item">
            <select class="chi-select" id="example__base_views-1">
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
            <select class="chi-select" id="example__base_filter-select-1">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="chi-form__item">
            <select class="chi-select" id="example__base_filter-select-2">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <button class="chi-button -icon -flat" id="example__base_filter_button" aria-label="Filters" data-tooltip="Filters" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__filters-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="example__base_drawer_trigger-1" data-target="#example__base_drawer-1" aria-label="Button action">
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
          <button class="chi-button -icon -flat" id="example__base_refresh_button" aria-label="Refresh" data-tooltip="Refresh" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-refresh" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="example__base_download_button" aria-label="Download" data-tooltip="Download" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="example__base_column_customization_button" aria-label="Customize columns" data-tooltip="Customize columns" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-table-column-settings" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__actions-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="example__base_drawer_trigger-2" data-target="#example__base_drawer-2" aria-label="Button action">
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
    <div class="chi-drawer -left -menu -position--absolute" id="example__base_drawer-1">
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
          <label class="chi-label" for="example__base_drawer-1_label-1">Label</label>
          <select class="chi-select" id="example__base_drawer-1_select-1">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__base_drawer-1_label-2">Label</label>
          <select class="chi-select" id="example__base_drawer-1_select-2">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__base_drawer-1_label-3">Label</label>
          <select class="chi-select" id="example__base_drawer-1_select-3">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__base_drawer-1_label-4">Label</label>
          <select class="chi-select" id="example__base_drawer-1_select-4">
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
    <div class="chi-drawer -right -menu -position--absolute" id="example__base_drawer-2">
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

<!-- Javascript -->
<script>
  chi.drawer(document.getElementById('example__base_drawer_trigger-1'));
  chi.drawer(document.getElementById('example__base_drawer_trigger-2'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`}})})],_);const k=e("div",{class:"chi-divider -vertical"},null,-1),F=e("div",{class:"chi-divider -vertical"},null,-1),H={class:"chi-form__item"},z=e("chi-label",{for:"input-1"},"City",-1),P=e("chi-label",{for:"input-2"},"Zip Code",-1),E={class:"chi-dropdown"},L={class:"chi-button -icon -flat",ref:"dropdownTrigger","aria-label":"Download","data-position":"bottom-end"},R=e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})],-1),N=[R],$=e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Data"),e("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Current Results")],-1),j=e("div",{class:"chi-tab__description"},[r("Use the slots "),e("code",null,"start"),r(" to add elements to the left side area of the Toolbar Header and the "),e("code",null,"end"),r(" - to the right side.")],-1),J=e("div",{class:"chi-tab__description"},[r("To render toolbar, use the class "),e("code",null,"chi-toolbar"),r(".")],-1);function G(t,i,p,n,a,u){const c=s("ChiSearchInput"),m=s("ChiDataTableViews"),h=s("ChiDataTableFilters"),v=s("ChiTooltip"),f=s("ChiColumnCustomization"),w=s("ChiDataTableToolbar"),b=T,C=A;return O(),y(C,{title:"Base",id:"base",tabs:t.exampleTabs,additionalStyle:"position: static;"},{example:o(()=>[l(w,null,{start:o(()=>[l(c,{dataTableSearch:!0}),k,l(m,{views:t.toolbar.viewsData},null,8,["views"]),F,l(h,{class:"-ml--2",filtersData:t.toolbar.filtersData,customItems:t.toolbar.customItemsData},{customAdvanced:o(()=>[e("div",H,[z,e("chi-text-input",{id:"input-1","on:chiChange":i[0]||(i[0]=d=>t.inputOneChangeHandler(d))},null,32),P,e("chi-text-input",{id:"input-2","on:chiChange":i[1]||(i[1]=d=>t.inputTwoChangeHandler(d))},null,32)])]),customAdvanced2:o(()=>[e("chi-date-picker",{"on:chiDateChange":i[2]||(i[2]=d=>t.dateChangeHandler(d))},null,32)]),_:1},8,["filtersData","customItems"])]),end:o(()=>[l(v,{message:"Download"},{default:o(()=>[e("div",E,[e("button",L,N,512),$])]),_:1}),l(f,{columnsData:t.toolbar.columnsData},null,8,["columnsData"])]),_:1})]),"code-vue":o(()=>[j,l(b,{lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[J,l(b,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=S(_,[["render",G]]);export{te as default};
