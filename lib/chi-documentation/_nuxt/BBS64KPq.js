import{V as x,N as g}from"./NAah3XrW.js";import{e as D}from"./Cq1bO1Ih.js";import{_ as T}from"./onyWiYp2.js";import{_ as A}from"./CAQzZ0uH.js";import{o as O,h as y,w as o,m as s,b as l,a as t,d as r}from"./CEIPSiTs.js";import{_ as S}from"./DlAUqK2U.js";import"./DtNz156Q.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";var I=Object.defineProperty,V=Object.getOwnPropertyDescriptor,B=(i,e,p,n)=>{for(var a=n>1?void 0:n?V(e,p):e,u=i.length-1,c;u>=0;u--)(c=i[u])&&(a=(n?c(e,p,a):c(a))||a);return n&&a&&I(e,p,a),a};let b=class extends x{};b=B([g({data:()=>({toolbar:D,exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",vue:`<!-- Vue component -->
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
<\/script>`}})})],b);const k={class:"chi-form__item"},F={class:"chi-dropdown"},H={class:"chi-button -icon -flat",ref:"dropdownTrigger","aria-label":"Download","data-position":"bottom-end"};function z(i,e,p,n,a,u){const c=s("ChiSearchInput"),_=s("ChiDataTableViews"),v=s("ChiDataTableFilters"),h=s("ChiTooltip"),f=s("ChiColumnCustomization"),w=s("ChiDataTableToolbar"),m=T,C=A;return O(),y(C,{title:"Base",id:"base",tabs:i.exampleTabs,additionalStyle:"position: static;"},{example:o(()=>[l(w,null,{start:o(()=>[l(c,{dataTableSearch:!0}),e[5]||(e[5]=t("div",{class:"chi-divider -vertical"},null,-1)),l(_,{views:i.toolbar.viewsData},null,8,["views"]),e[6]||(e[6]=t("div",{class:"chi-divider -vertical"},null,-1)),l(v,{class:"-ml--2",filtersData:i.toolbar.filtersData,customItems:i.toolbar.customItemsData},{customAdvanced:o(()=>[t("div",k,[e[3]||(e[3]=t("chi-label",{for:"input-1"},"City",-1)),t("chi-text-input",{id:"input-1","on:chiChange":e[0]||(e[0]=d=>i.inputOneChangeHandler(d))},null,32),e[4]||(e[4]=t("chi-label",{for:"input-2"},"Zip Code",-1)),t("chi-text-input",{id:"input-2","on:chiChange":e[1]||(e[1]=d=>i.inputTwoChangeHandler(d))},null,32)])]),customAdvanced2:o(()=>[t("chi-date-picker",{"on:chiDateChange":e[2]||(e[2]=d=>i.dateChangeHandler(d))},null,32)]),_:1},8,["filtersData","customItems"])]),end:o(()=>[l(h,{message:"Download"},{default:o(()=>[t("div",F,[t("button",H,e[7]||(e[7]=[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})],-1)]),512),e[8]||(e[8]=t("div",{class:"chi-dropdown__menu"},[t("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Data"),t("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Current Results")],-1))])]),_:1}),l(f,{columnsData:i.toolbar.columnsData},null,8,["columnsData"])]),_:1})]),"code-vue":o(()=>[e[9]||(e[9]=t("div",{class:"chi-tab__description"},[r("Use the slots "),t("code",null,"start"),r(" to add elements to the left side area of the Toolbar Header and the "),t("code",null,"end"),r(" - to the right side.")],-1)),l(m,{lang:"html",code:i.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[e[10]||(e[10]=t("div",{class:"chi-tab__description"},[r("To render toolbar, use the class "),t("code",null,"chi-toolbar"),r(".")],-1)),l(m,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const q=S(b,[["render",z]]);export{q as default};
