var F=Object.defineProperty;var H=(i,t,s)=>t in i?F(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var w=(i,t,s)=>H(i,typeof t!="symbol"?t+"":t,s);import{v as d,o as g,f as V,w as l,b as o,a as e,d as u,j as E,c as z,F as R,l as L}from"./CRBsHPO5.js";import{V as D,N as k}from"./Bdokak_-.js";import{e as B,c as P}from"./BYS4_xFx.js";import{_ as $}from"./Di-ELn2D.js";import{_ as I}from"./Cx7J_iiN.js";import{_ as T}from"./DlAUqK2U.js";import{_ as W}from"./CcrI_bxZ.js";import"./CioVcaN-.js";import"./Bxs95XXX.js";var j=Object.defineProperty,J=Object.getOwnPropertyDescriptor,N=(i,t,s,n)=>{for(var a=n>1?void 0:n?J(t,s):t,r=i.length-1,c;r>=0;r--)(c=i[r])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&j(t,s,a),a};let S=class extends D{};S=N([k({data:()=>({toolbar:B,exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",vue:`<!-- Vue component -->
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
<\/script>`}})})],S);const Z={class:"chi-form__item"},G={class:"chi-dropdown"},q={class:"chi-button -icon -flat",ref:"dropdownTrigger","aria-label":"Download","data-position":"bottom-end"};function M(i,t,s,n,a,r){const c=d("ChiSearchInput"),v=d("ChiDataTableViews"),m=d("ChiDataTableFilters"),b=d("ChiTooltip"),C=d("ChiColumnCustomization"),x=d("ChiDataTableToolbar"),f=$,h=I;return g(),V(h,{title:"Base",id:"base",tabs:i.exampleTabs,additionalStyle:"position: static;"},{example:l(()=>[o(x,null,{start:l(()=>[o(c,{dataTableSearch:!0}),t[5]||(t[5]=e("div",{class:"chi-divider -vertical"},null,-1)),o(v,{views:i.toolbar.viewsData},null,8,["views"]),t[6]||(t[6]=e("div",{class:"chi-divider -vertical"},null,-1)),o(m,{class:"-ml--2",filtersData:i.toolbar.filtersData,customItems:i.toolbar.customItemsData},{customAdvanced:l(()=>[e("div",Z,[t[3]||(t[3]=e("chi-label",{for:"input-1"},"City",-1)),e("chi-text-input",{id:"input-1","on:chiChange":t[0]||(t[0]=_=>i.inputOneChangeHandler(_))},null,32),t[4]||(t[4]=e("chi-label",{for:"input-2"},"Zip Code",-1)),e("chi-text-input",{id:"input-2","on:chiChange":t[1]||(t[1]=_=>i.inputTwoChangeHandler(_))},null,32)])]),customAdvanced2:l(()=>[e("chi-date-picker",{"on:chiDateChange":t[2]||(t[2]=_=>i.dateChangeHandler(_))},null,32)]),_:1},8,["filtersData","customItems"])]),end:l(()=>[o(b,{message:"Download"},{default:l(()=>[e("div",G,[e("button",q,t[7]||(t[7]=[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})],-1)]),512),t[8]||(t[8]=e("div",{class:"chi-dropdown__menu"},[e("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Data"),e("a",{class:"chi-dropdown__menu-item",href:"#"},"Download All Current Results")],-1))])]),_:1}),o(C,{columnsData:i.toolbar.columnsData},null,8,["columnsData"])]),_:1})]),"code-vue":l(()=>[t[9]||(t[9]=e("div",{class:"chi-tab__description"},[u("Use the slots "),e("code",null,"start"),u(" to add elements to the left side area of the Toolbar Header and the "),e("code",null,"end"),u(" - to the right side.")],-1)),o(f,{lang:"html",code:i.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[t[10]||(t[10]=e("div",{class:"chi-tab__description"},[u("To render toolbar, use the class "),e("code",null,"chi-toolbar"),u(".")],-1)),o(f,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const U=T(S,[["render",M]]);var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(i,t,s,n)=>{for(var a=n>1?void 0:n?Q(t,s):t,r=i.length-1,c;r>=0;r--)(c=i[r])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&K(t,s,a),a};let y=class extends D{constructor(){super(...arguments);w(this,"toolbar",B);w(this,"saveView",P);w(this,"id","base_with_save_view");w(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);w(this,"codeSnippets",{vue:"",htmlblueprint:""})}created(){this._setCodeSnippets()}_setCodeSnippets(){this.codeSnippets.vue=`<!-- Vue component -->
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
          <chi-label for="example__${this.id}_filter_input-1">City</chi-label>
          <chi-text-input id="example__${this.id}_filter_input-1" @chiChange="e => inputOneChangeHandler(e)"></chi-text-input>
          <chi-label for="example__${this.id}_filter_input-2">Zip Code</chi-label>
          <chi-text-input id="example__${this.id}_filter_input-2" @chiChange="e => inputTwoChangeHandler(e)"></chi-text-input>
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
};`,this.codeSnippets.htmlblueprint=`<div class="chi-toolbar">
  <div class="chi-toolbar__header">
    <div class="chi-toolbar__start">
      <div class="chi-toolbar__search">
        <div class="chi-form__item">
          <chi-search-input id="example__${this.id}"></chi-search-input>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-toolbar__views">
        <div class="chi-toolbar__views-desktop">
          <div class="chi-form__item">
            <select class="chi-select" id="example__${this.id}_views-1">
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
            <select class="chi-select" id="example__${this.id}_filter-select-1">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="chi-form__item">
            <select class="chi-select" id="example__${this.id}_filter-select-2">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <button class="chi-button -icon -flat" id="example__${this.id}_filter_button" aria-label="Filters" data-tooltip="Filters" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__filters-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="example__${this.id}_drawer_trigger-1" data-target="#example__${this.id}_drawer-1" aria-label="Button action">
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
          <button class="chi-button -icon -flat" id="example__${this.id}_refresh_button" aria-label="Refresh" data-tooltip="Refresh" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-refresh" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="example__${this.id}_download_button" aria-label="Download" data-tooltip="Download" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="example__${this.id}_column_customization_button" aria-label="Customize columns" data-tooltip="Customize columns" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-table-column-settings" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__actions-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="example__${this.id}_drawer_trigger-2" data-target="#example__${this.id}_drawer-2" aria-label="Button action">
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
    <div class="chi-drawer -left -menu -position--absolute" id="example__${this.id}_drawer-1">
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
          <label class="chi-label" for="example__${this.id}_drawer-1_label-1">Label</label>
          <select class="chi-select" id="example__${this.id}_drawer-1_select-1">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__${this.id}_drawer-1_label-2">Label</label>
          <select class="chi-select" id="example__${this.id}_drawer-1_select-2">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__${this.id}_drawer-1_label-3">Label</label>
          <select class="chi-select" id="example__${this.id}_drawer-1_select-3">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example__${this.id}_drawer-1_label-4">Label</label>
          <select class="chi-select" id="example__${this.id}_drawer-1_select-4">
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
    <div class="chi-drawer -right -menu -position--absolute" id="example__${this.id}_drawer-2">
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
<div class="chi-toolbar__ribbon">
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

<!-- Javascript -->
<script>
  chi.drawer(document.getElementById('example__${this.id}_drawer_trigger-1'));
  chi.drawer(document.getElementById('example__${this.id}_drawer_trigger-2'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`}};y=X([k({})],y);const Y={class:"chi-form__item"};function tt(i,t,s,n,a,r){const c=d("ChiSearchInput"),v=d("ChiDataTableViews"),m=d("ChiDataTableFilters"),b=d("ChiTooltip"),C=d("ChiColumnCustomization"),x=d("ChiDataTableToolbar"),f=d("ChiSaveView"),h=$,_=I;return g(),V(_,{title:"Base with save view",id:i.id,tabs:i.exampleTabs,additionalStyle:"position: static;"},{example:l(()=>[o(x,null,{start:l(()=>[o(c,{dataTableSearch:!0}),t[5]||(t[5]=e("div",{class:"chi-divider -vertical"},null,-1)),o(v,{views:i.toolbar.viewsData},null,8,["views"]),t[6]||(t[6]=e("div",{class:"chi-divider -vertical"},null,-1)),o(m,{class:"-ml--2",filtersData:i.toolbar.filtersData,customItems:i.toolbar.customItemsData},{customAdvanced:l(()=>[e("div",Y,[t[3]||(t[3]=e("chi-label",{for:"input-1"},"City",-1)),e("chi-text-input",{id:"input-1","on:chiChange":t[0]||(t[0]=p=>i.inputOneChangeHandler(p))},null,32),t[4]||(t[4]=e("chi-label",{for:"input-2"},"Zip Code",-1)),e("chi-text-input",{id:"input-2","on:chiChange":t[1]||(t[1]=p=>i.inputTwoChangeHandler(p))},null,32)])]),customAdvanced2:l(()=>[e("chi-date-picker",{"on:chiDateChange":t[2]||(t[2]=p=>i.dateChangeHandler(p))},null,32)]),_:1},8,["filtersData","customItems"])]),end:l(()=>[o(b,{message:"Refresh"},{default:l(()=>t[7]||(t[7]=[e("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1)])),_:1}),o(b,{message:"Download"},{default:l(()=>t[8]||(t[8]=[e("button",{class:"chi-button -icon -flat","aria-label":"Download"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1)])),_:1}),o(C,{columnsData:i.toolbar.columnsData},null,8,["columnsData"])]),_:1}),o(f,{config:i.saveView},null,8,["config"])]),"code-vue":l(()=>[t[9]||(t[9]=e("div",{class:"chi-tab__description"},[u("Use the slots "),e("code",null,"start"),u(" to add elements to the left side area of the Toolbar Header and the "),e("code",null,"end"),u(" - to the right side.")],-1)),o(h,{lang:"html",code:i.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[t[10]||(t[10]=e("div",{class:"chi-tab__description"},[u("To render toolbar, use the class "),e("code",null,"chi-toolbar"),u(".")],-1)),o(h,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["id","tabs"])}const et=T(y,[["render",tt]]);var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ot=(i,t,s,n)=>{for(var a=n>1?void 0:n?at(t,s):t,r=i.length-1,c;r>=0;r--)(c=i[r])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&it(t,s,a),a};let A=class extends D{};A=ot([k({data:()=>({toolbar:B,saveView:P,exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{vue:`<!-- Vue component -->
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
<\/script>`}})})],A);const lt={class:"chi-form__item"};function st(i,t,s,n,a,r){const c=d("ChiSearchInput"),v=d("ChiDataTableViews"),m=d("ChiDataTableFilters"),b=d("ChiTooltip"),C=d("ChiColumnCustomization"),x=d("ChiDataTableToolbar"),f=d("ChiSaveView"),h=$,_=I;return g(),V(_,{title:"Base with save view and bulk actions",id:"base-with-save-view-and-bulk-actions-portal",additionalStyle:"position: static;",additionalClasses:"-position--relative",tabs:i.exampleTabs},{example:l(()=>[o(x,null,{start:l(()=>[o(c,{dataTableSearch:!0}),t[5]||(t[5]=e("div",{class:"chi-divider -vertical"},null,-1)),o(v,{views:i.toolbar.viewsData},null,8,["views"]),t[6]||(t[6]=e("div",{class:"chi-divider -vertical"},null,-1)),o(m,{class:"-ml--2",filtersData:i.toolbar.filtersData,customItems:i.toolbar.customItemsData},{customAdvanced:l(()=>[e("div",lt,[t[3]||(t[3]=e("chi-label",{for:"input-1"},"City",-1)),e("chi-text-input",{id:"input-1","on:chiChange":t[0]||(t[0]=p=>i.inputOneChangeHandler(p))},null,32),t[4]||(t[4]=e("chi-label",{for:"input-2"},"Zip Code",-1)),e("chi-text-input",{id:"input-2","on:chiChange":t[1]||(t[1]=p=>i.inputTwoChangeHandler(p))},null,32)])]),customAdvanced2:l(()=>[e("chi-date-picker",{"on:chiDateChange":t[2]||(t[2]=p=>i.dateChangeHandler(p))},null,32)]),_:1},8,["filtersData","customItems"])]),end:l(()=>[o(b,{message:"Refresh"},{default:l(()=>t[7]||(t[7]=[e("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1)])),_:1}),o(b,{message:"Download"},{default:l(()=>t[8]||(t[8]=[e("button",{class:"chi-button -icon -flat","aria-label":"Download"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1)])),_:1}),o(C,{columnsData:i.toolbar.columnsData},null,8,["columnsData"])]),_:1}),o(f,{config:i.saveView},null,8,["config"]),t[9]||(t[9]=e("div",{class:"chi-bulk-actions"},[e("div",{class:"chi-bulk-actions__start"},[e("div",{class:"chi-bulk-actions__results"},[e("div",{class:"chi-bulk-actions__label"},"Actions (10 Selected)"),e("div",{class:"chi-form__item"},[e("div",{class:"chi-checkbox"},[e("input",{class:"chi-checkbox__input",id:"checkbox-ba1",type:"checkbox"}),e("label",{class:"chi-checkbox__label",for:"checkbox-ba1"},"Show Selected Only")])])]),e("div",{class:"chi-divider -vertical"}),e("div",{class:"chi-bulk-actions__buttons"},[e("div",{class:"chi-bulk-actions__buttons-mobile -position--absolute"},[e("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Edit"},[e("chi-icon",{icon:"edit"})]),e("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Compose"},[e("chi-icon",{icon:"compose"})]),e("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Delete"},[e("chi-icon",{icon:"delete"})]),e("chi-button",{variant:"flat",type:"icon","alternative-text":"Button action","data-tooltip":"Print"},[e("chi-icon",{icon:"print"})])]),e("div",{class:"chi-bulk-actions__buttons-desktop"},[e("chi-button",{size:"xs"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Download")]),e("chi-button",{size:"xs"},[e("chi-icon",{icon:"compose"}),e("span",null,"Compose")]),e("chi-button",{size:"xs"},[e("chi-icon",{icon:"delete"}),e("span",null,"Delete")]),e("chi-button",{size:"xs"},[e("chi-icon",{icon:"print"}),e("span",null,"Print")])])])]),e("div",{class:"chi-bulk-actions__end"},[e("chi-button",{type:"close"})])],-1))]),"code-webcomponent":l(()=>[o(h,{code:i.codeSnippets.webcomponent,lang:"html"},null,8,["code"])]),"code-vue":l(()=>[t[10]||(t[10]=e("div",{class:"chi-tab__description"},[u("Use the slots "),e("code",null,"start"),u(" to add elements to the left side area of the Toolbar Header and the "),e("code",null,"end"),u(" - to the right side.")],-1)),o(h,{code:i.codeSnippets.vue,lang:"html"},null,8,["code"])]),"code-htmlblueprint":l(()=>[t[11]||(t[11]=e("div",{class:"chi-tab__description"},[u("To render toolbar, use the class "),e("code",null,"chi-toolbar"),u(".")],-1)),o(h,{class:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=T(A,[["render",st]]);var ct=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,rt=(i,t,s,n)=>{for(var a=n>1?void 0:n?dt(t,s):t,r=i.length-1,c;r>=0;r--)(c=i[r])&&(a=(n?c(t,s,a):c(a))||a);return n&&a&&ct(t,s,a),a};let O=class extends D{constructor(){super(...arguments);w(this,"selectedTheme",E())}};O=rt([k({components:{BaseExample:U,BaseWithSaveView:et,BaseWithSaveViewAndBulkActionsPortalBrightSpeed:nt}})],O);function ut(i,t,s,n,a,r){const c=d("BaseExample"),v=d("BaseWithSaveView"),m=d("BaseWithSaveViewAndBulkActionsPortalBrightSpeed"),b=W;return g(),z("div",null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),o(b,{placeholder:"loading..."},{default:l(()=>[o(c),o(v),["portal","brightspeed"].includes(i.selectedTheme)?(g(),z(R,{key:0},[],64)):L("",!0),o(m)]),_:1})])}const St=T(O,[["render",ut]]);export{St as default};
