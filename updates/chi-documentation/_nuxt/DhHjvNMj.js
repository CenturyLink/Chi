import{V as D,N as v}from"./uJTUijt2.js";import{P as C,D as w}from"./Ct4FjHIf.js";import{_ as N}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as _,f as x,w as l,r as m,a,b as d,n as O,t as G}from"./B5CYXVwa.js";import{_ as T}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var E=Object.defineProperty,P=Object.getOwnPropertyDescriptor,k=(e,i,s,o)=>{for(var n=o>1?void 0:o?P(i,s):i,c=e.length-1,r;c>=0;c--)(r=e[c])&&(n=(o?r(i,s,n):r(n))||n);return o&&n&&E(i,s,n),n};let u=class extends D{};u=k([v({components:{ChiPopoverExample:C,ChiDropdownExample:w},methods:{printTable(){var e;(e=this.$refs.dataTableComplex)==null||e.print("Data table - Complex")}},mounted(){chi.tab(document.getElementById("example-vertical-portal"))},data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],config:{columnResize:!1,selectable:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3,defaultSort:{key:"name",sortBy:"string",direction:"ascending"},showExpandAll:!0,showSelectAllDropdown:!0},table:{head:{name:{label:"Name",sortable:!0,sortBy:"name",sortDataType:"string",key:!0,bold:!0},status:{label:"Status",sortable:!0,sortBy:"status",sortDataType:"string",description:"Helpful information goes here."},userID:{label:"User ID",key:!0,icon:"user"},lastLogin:{label:"Last Login",key:!0},actions:{label:"Actions",align:"right",isPrintDisabled:!0}},body:[{expanded:!0,id:"name-1",data:[{template:"name",payload:{name:"Name 1",id:"name-1"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-1"}}],nestedContent:{table:{data:[{id:"child-1-name-1",data:["Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-1",data:["Grand Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-1"}}]},{id:"grandchild-2-name-1",data:["Grand Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-1"}}]}]}}},{id:"child-2-name-1",data:["Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-1",data:["Grand Child 3 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-1"}}]},{id:"grandchild-4-name-1",data:["Grand Child 4 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-1"}}]}]}}}]}}},{id:"name-2",data:[{template:"name",payload:{name:"Name 2",id:"name-2"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-2"}}],nestedContent:{table:{data:[{id:"child-1-name-2",data:["Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-2",data:["Grand Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-2"}}]},{id:"grandchild-2-name-2",data:["Grand Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-2"}}]}]}}},{id:"child-2-name-2",data:["Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-2",data:["Grand Child 3 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-2"}}]},{id:"grandchild-4-name-2",data:["Grand Child 4 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-2"}}]}]}}}]}}},{id:"name-3",data:[{template:"name",payload:{name:"Name 3",id:"name-3"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-3"}}],nestedContent:{table:{data:[{id:"child-1-name-3",data:["Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-3",data:["Grand Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-3"}}]},{id:"grandchild-2-name-3",data:["Grand Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-3"}}]}]}}},{id:"child-2-name-3",data:["Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-3",data:["Grand Child 3 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-3"}}]},{id:"grandchild-4-name-3",data:["Grand Child 4 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-3"}}]}]}}}]}}},{id:"name-4",data:[{template:"name",payload:{name:"Name 4",id:"name-4"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-4"}}],nestedContent:{table:{data:[{id:"child-1-name-4",data:["Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-4",data:["Grand Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-4"}}]},{id:"grandchild-2-name-4",data:["Grand Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-4"}}]}]}}},{id:"child-2-name-4",data:["Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-4",data:["Grand Child 3 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-4"}}]},{id:"grandchild-4-name-4",data:["Grand Child 4 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-4"}}]}]}}}]}}},{id:"name-5",data:[{template:"name",payload:{name:"Name 5",id:"name-5"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-5"}}],nestedContent:{table:{data:[{id:"child-1-name-5",data:["Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-5",data:["Grand Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-5"}}]},{id:"grandchild-2-name-5",data:["Grand Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-5"}}]}]}}},{id:"child-2-name-5",data:["Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-5",data:["Grand Child 3 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-5"}}]},{id:"grandchild-4-name-5",data:["Grand Child 4 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-5"}}]}]}}}]}}},{id:"name-6",data:[{template:"name",payload:{name:"Name 6",id:"name-6"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-6"}}],nestedContent:{table:{data:[{id:"child-1-name-6",data:["Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-6",data:["Grand Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-6"}}]},{id:"grandchild-2-name-6",data:["Grand Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-6"}}]}]}}},{id:"child-2-name-6",data:["Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-6",data:["Grand Child 3 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-6"}}]},{id:"grandchild-4-name-6",data:["Grand Child 4 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-6"}}]}]}}}]}}}]},codeSnippets:{dataTableExample:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table" ref="dataTableComplex">
  <template #status="payload">
    <i :class="\`chi-icon icon-\${payload.icon} -icon--\${payload.color}\`" aria-hidden="true"></i>
    <span class="-text--truncate" style="padding-left: 0.5rem;">
      {{ payload.status }}
    </span>
  </template>
  <template #name="payload">
    <ExamplePopover :name="payload.name" :id="payload.id" />
  </template>
  <template #actions="payload">
    <ExampleDropdown :id="payload.id" />
  </template>
  <template #toolbar>
    <ChiDataTableToolbar>
      <template v-slot:start></template>
      <template v-slot:end>
        <chi-button @chiClick="printTable" variant="flat" type="icon"
         aria-label="Print data table complex example">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </template>
    </ChiDataTableToolbar>
  </template>
  <template #bulk-actions>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile -z--40">
        <chi-button variant="flat" type="icon" aria-label="Edit">
          <chi-icon icon="edit"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Compose">
          <chi-icon icon="compose"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Delete">
          <chi-icon icon="delete"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Print">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <chi-button size="xs" aria-label="Download">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Download </span>
        </chi-button>
        <chi-button size="xs" aria-label="Compose">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Compose </span>
        </chi-button>
        <chi-button size="xs" aria-label="Delete">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Delete </span>
        </chi-button>
        <chi-button size="xs" aria-label="Print">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Print </span>
        </chi-button>
      </div>
    </div>
  </template>
</ChiDataTable>

<!-- imports -->
import ExamplePopover from './ExamplePopover.vue';
import ExampleDropdown from './ExampleDropdown.vue';

<!-- Config and Data -->
data: {
  config: {
    columnResize: false,
    selectable: true,
    style: {
      portal: true,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: true,
      firstLast: true,
      pageJumper: false,
    },
    resultsPerPage: 3,
    defaultSort: {
      key: 'name',
      sortBy: 'string',
      direction: 'ascending',
    },
    showExpandAll: true,
    showSelectAllDropdown: true
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
      status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
      userID: { label: 'User ID', key: true, icon: 'user' },
      lastLogin: { label: 'Last Login', key: true },
      actions: { label: 'Actions', align: 'right', isPrintDisabled: true }
    },
    body: [
      {
        expanded: true,
        id: "name-1",
        data: [
          { template: "name", payload: { name: "Name 1", id: "name-1" } },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-1",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-1" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-1",
                data: [
                  "Child 1 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-1",
                        data: [
                          "Grand Child 1 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-1",
                        data: [
                          "Grand Child 2 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-1",
                data: [
                  "Child 2 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-1",
                        data: [
                          "Grand Child 3 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-1",
                        data: [
                          "Grand Child 4 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-2",
        data: [
          { template: "name", payload: { name: "Name 2", id: "name-2" } },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-2",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-2" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-2",
                data: [
                  "Child 1 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-2",
                        data: [
                          "Grand Child 1 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-2",
                        data: [
                          "Grand Child 2 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-2",
                data: [
                  "Child 2 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-2",
                        data: [
                          "Grand Child 3 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-2",
                        data: [
                          "Grand Child 4 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-3",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 3",
              id: "name-3",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-3",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-3" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-3",
                data: [
                  "Child 1 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-3",
                        data: [
                          "Grand Child 1 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-3",
                        data: [
                          "Grand Child 2 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-3",
                data: [
                  "Child 2 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-3",
                        data: [
                          "Grand Child 3 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-3",
                        data: [
                          "Grand Child 4 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-4",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 4",
              id: "name-4",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-4",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-4" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-4",
                data: [
                  "Child 1 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-4",
                        data: [
                          "Grand Child 1 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-4",
                        data: [
                          "Grand Child 2 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-4",
                data: [
                  "Child 2 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-4",
                        data: [
                          "Grand Child 3 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-4",
                        data: [
                          "Grand Child 4 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-5",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 5",
              id: "name-5",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-5",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-5" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-5",
                data: [
                  "Child 1 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-5",
                        data: [
                          "Grand Child 1 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-5",
                        data: [
                          "Grand Child 2 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-5",
                data: [
                  "Child 2 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-5",
                        data: [
                          "Grand Child 3 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-5",
                        data: [
                          "Grand Child 4 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-6",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 6",
              id: "name-6",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-6",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-6" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-6",
                data: [
                  "Child 1 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-6",
                        data: [
                          "Grand Child 1 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-6",
                        data: [
                          "Grand Child 2 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-6",
                data: [
                  "Child 2 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-6",
                        data: [
                          "Grand Child 3 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-6",
                        data: [
                          "Grand Child 4 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
},
methods: {
  printTable() {
    this.$refs.dataTableComplex.print('Data table - Complex')
  }
}`,popoverExample:`<!-- Template -->
<template>
  <div class="-text--truncate">
    <a
      :id="\`name-popover-button-\${id}\`"
      href="#"
      :data-target="\`#name-popover-\${id}\`"
      position="top-start">
      {{id}}
    </a>
    <section
      class="chi-popover"
      :id="\`name-popover-\${id}\`"
      aria-modal="true"
      role="dialog"
      :aria-label="name"
    >
      <div class="chi-popover__content">
        {{ name }}
      </div>
    </section>
  </div>
</template>

<!-- Mounted -->
mounted() {
  let hoverAnimationTimeout: ReturnType<typeof setTimeout> | undefined;
  const buttonOpenOnHover = document.getElementById(\`ticket-popover-button-\${this.$props.id}\`);
  const popover = chi.popover(buttonOpenOnHover);

  if (buttonOpenOnHover) {
    buttonOpenOnHover.addEventListener('mouseenter', function() {
      hoverAnimationTimeout = setTimeout(() => {
        popover.show();
      }, 300);
    });

    buttonOpenOnHover.addEventListener('mouseleave', function() {
      if (hoverAnimationTimeout) {
        clearTimeout(hoverAnimationTimeout);
      }
      popover.hide();
    });
  }
}
beforeDestroy() {
  this.popover.dispose();
}`,dropdownExample:`<!-- Template -->
<template>
  <div class="chi-dropdown -position--absolute">
    <button
      :id="'action-button-' + id"
      class="chi-button -icon -primary -flat"
      aria-label="More options"
      data-position="left-start"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#" v-for="action in actions">
        <span><chi-icon :icon="action.icon" size="sm" color="primary"></chi-icon></span>
        <span>{{ action.name }}</span>
      </a>
    </div>
  </div>
</template>

<!-- Config and data -->
data: {
  actions: [
    {name: 'View', icon: 'check-alt'},
    {name: 'Edit', icon: 'edit'},
    {name: 'Delete', icon: 'delete'}
  ]
}

<!-- mounted -->
mounted() {
  this.dropdown = chi.dropdown(document.getElementById(\`action-button-\${this.id}\`));
}
beforeDestroy() {
  this.dropdown.dispose();
}`}})})],u);const z={class:"chi-card -portal -bg--white"},$=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1),B={class:"chi-card__content -p--0"},L={class:"-text--truncate",style:{"padding-left":"0.5rem"}},S=a("chi-icon",{icon:"print"},null,-1),A=[S],H=a("div",{class:"chi-bulk-actions__buttons"},[a("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[a("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[a("chi-icon",{icon:"edit"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[a("chi-icon",{icon:"compose"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[a("chi-icon",{icon:"delete"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[a("chi-icon",{icon:"print"})])]),a("div",{class:"chi-bulk-actions__buttons-desktop"},[a("chi-button",{size:"xs","aria-label":"Download"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Download")]),a("chi-button",{size:"xs","aria-label":"Compose"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Compose")]),a("chi-button",{size:"xs","aria-label":"Delete"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Delete")]),a("chi-button",{size:"xs","aria-label":"Print"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Print")])])],-1),V=a("div",{class:"chi-tab__description -p--2"},"Create reusable Vue components based on your needs and use them as custom templates for Data Table cells and row accordions",-1),I={class:"-d--flex -no-gutter -bt--1"},M=a("div",{class:"-bg--grey-15 -pt--3 -br--1",style:{width:"14rem"}},[a("ul",{class:"chi-tabs -vertical",id:"example-vertical-portal",role:"tablist","aria-label":"chi-tabs-vertical-portal"},[a("li",{class:"-active"},[a("a",{href:"#vertical-portal-1",role:"tab","aria-selected":"true","aria-controls":"vertical-portal-1"},"ExampleDataTable.vue")]),a("li",null,[a("a",{href:"#vertical-portal-2",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-portal-2"},"ExamplePopover.vue")]),a("li",null,[a("a",{href:"#vertical-portal-3",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-portal-3"},"ExampleDropdown.vue")]),a("li",{class:"chi-sliding-border"})])],-1),R={class:"-flex--grow1"},j={class:"chi-tabs-panel -active",id:"vertical-portal-1",role:"tabpanel"},J={class:"chi-tabs-panel",id:"vertical-portal-2",role:"tabpanel"},U={class:"chi-tabs-panel",id:"vertical-portal-3",role:"tabpanel"};function W(e,i,s,o,n,c){const r=m("ChiPopoverExample"),h=m("ChiDropdownExample"),g=m("ChiDataTableToolbar"),y=m("ChiDataTable"),p=N,b=f;return _(),x(b,{title:"Complex",id:"complex-data-table",tabs:e.exampleTabs},{example:l(()=>[a("div",z,[$,a("div",B,[d(y,{config:e.config,dataTableData:e.table,ref:"dataTableComplex"},{status:l(t=>[a("i",{class:O(`chi-icon icon-${t.icon} -icon--${t.color}`),"aria-hidden":"true"},null,2),a("span",L,G(t.status),1)]),name:l(t=>[d(r,{name:t.name,id:t.id},null,8,["name","id"])]),actions:l(t=>[d(h,{id:t.id},null,8,["id"])]),toolbar:l(()=>[d(g,null,{end:l(()=>[a("chi-button",{onClick:i[0]||(i[0]=(...t)=>e.printTable&&e.printTable(...t)),variant:"flat",type:"icon","aria-label":"Print data table complex example"},A)]),_:1})]),"bulk-actions":l(()=>[H]),_:1},8,["config","dataTableData"])])])]),"code-vue":l(()=>[V,a("div",I,[M,a("div",R,[a("div",j,[d(p,{lang:"html",code:e.codeSnippets.dataTableExample},null,8,["code"])]),a("div",J,[d(p,{lang:"html",code:e.codeSnippets.popoverExample},null,8,["code"])]),a("div",U,[d(p,{lang:"html",code:e.codeSnippets.dropdownExample},null,8,["code"])])])])]),_:1},8,["tabs"])}const ta=T(u,[["render",W]]);export{ta as default};
