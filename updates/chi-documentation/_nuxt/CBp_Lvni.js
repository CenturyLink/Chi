var D=Object.defineProperty;var T=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var c=(e,t,o)=>T(e,typeof t!="symbol"?t+"":t,o);import{V as S,N as $}from"./uJTUijt2.js";import{e as V,c as O}from"./DAzwSQBh.js";import{_ as y}from"./D8GK0F__.js";import{_ as A}from"./DKu8Jd2y.js";import{o as I,f as B,w as l,r as n,b as a,a as i,d as h}from"./B5CYXVwa.js";import{_ as k}from"./DlAUqK2U.js";import"./2EwpEKcw.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,z=(e,t,o,d)=>{for(var s=d>1?void 0:d?H(t,o):t,u=e.length-1,r;u>=0;u--)(r=e[u])&&(s=(d?r(t,o,s):r(s))||s);return d&&s&&F(t,o,s),s};let _=class extends S{constructor(){super(...arguments);c(this,"toolbar",V);c(this,"saveView",O);c(this,"id","base_with_save_view");c(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}]);c(this,"codeSnippets",{vue:"",htmlblueprint:""})}created(){this._setCodeSnippets()}_setCodeSnippets(){this.codeSnippets.vue=`<!-- Vue component -->
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
<\/script>`}};_=z([$({})],_);const R=i("div",{class:"chi-divider -vertical"},null,-1),P=i("div",{class:"chi-divider -vertical"},null,-1),E={class:"chi-form__item"},L=i("chi-label",{for:"input-1"},"City",-1),N=i("chi-label",{for:"input-2"},"Zip Code",-1),W=i("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1),j=i("button",{class:"chi-button -icon -flat","aria-label":"Download"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1),J=i("div",{class:"chi-tab__description"},[h("Use the slots "),i("code",null,"start"),h(" to add elements to the left side area of the Toolbar Header and the "),i("code",null,"end"),h(" - to the right side.")],-1),G=i("div",{class:"chi-tab__description"},[h("To render toolbar, use the class "),i("code",null,"chi-toolbar"),h(".")],-1);function Z(e,t,o,d,s,u){const r=n("ChiSearchInput"),b=n("ChiDataTableViews"),f=n("ChiDataTableFilters"),v=n("ChiTooltip"),w=n("ChiColumnCustomization"),C=n("ChiDataTableToolbar"),x=n("ChiSaveView"),m=y,g=A;return I(),B(g,{title:"Base with save view",id:e.id,tabs:e.exampleTabs,additionalStyle:"position: static;"},{example:l(()=>[a(C,null,{start:l(()=>[a(r,{dataTableSearch:!0}),R,a(b,{views:e.toolbar.viewsData},null,8,["views"]),P,a(f,{class:"-ml--2",filtersData:e.toolbar.filtersData,customItems:e.toolbar.customItemsData},{customAdvanced:l(()=>[i("div",E,[L,i("chi-text-input",{id:"input-1","on:chiChange":t[0]||(t[0]=p=>e.inputOneChangeHandler(p))},null,32),N,i("chi-text-input",{id:"input-2","on:chiChange":t[1]||(t[1]=p=>e.inputTwoChangeHandler(p))},null,32)])]),customAdvanced2:l(()=>[i("chi-date-picker",{"on:chiDateChange":t[2]||(t[2]=p=>e.dateChangeHandler(p))},null,32)]),_:1},8,["filtersData","customItems"])]),end:l(()=>[a(v,{message:"Refresh"},{default:l(()=>[W]),_:1}),a(v,{message:"Download"},{default:l(()=>[j]),_:1}),a(w,{columnsData:e.toolbar.columnsData},null,8,["columnsData"])]),_:1}),a(x,{config:e.saveView},null,8,["config"])]),"code-vue":l(()=>[J,a(m,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[G,a(m,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["id","tabs"])}const oe=k(_,[["render",Z]]);export{oe as default};
