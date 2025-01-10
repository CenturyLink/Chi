import{_ as N}from"./CLVGr10x.js";import{_ as y}from"./D6TR492o.js";import{_ as I}from"./BQdGHRz_.js";import{e as z,t as H,c as A,d as B,f as E,h as F,i as L,s as M,j as O,k as W}from"./DWRA7w3j.js";import{e as T,s as a,o as x,f as P,w as n,b as o,a as t,k as r,d as s,r as R,c as U,F as Z}from"./C2nwJ2gl.js";const j={class:"chi-form__item"},V="toolbar_base",J=T({__name:"_base",setup(k){const c=z(),l=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],p={webcomponent:"",vue:`${H(V)}

${A}`,htmlblueprint:`${B(V)}

${E(V)}

${F(V)}`};return(d,e)=>{const i=a("ChiSearchInput"),u=a("ChiDataTableViews"),v=a("ChiDataTableFilters"),m=a("ChiTooltip"),h=a("ChiColumnCustomization"),C=a("ChiDataTableToolbar"),f=y,w=I;return x(),P(w,{title:"Base",id:"base",tabs:l,additionalStyle:"position: static;"},{example:n(()=>[o(C,null,{start:n(()=>[o(i,{dataTableSearch:!0}),e[5]||(e[5]=t("div",{class:"chi-divider -vertical"},null,-1)),o(u,{views:r(c).viewsData},null,8,["views"]),e[6]||(e[6]=t("div",{class:"chi-divider -vertical"},null,-1)),o(v,{filtersData:r(c).filtersData,customItems:r(c).customItemsData},{customAdvanced:n(()=>[t("div",j,[e[3]||(e[3]=t("chi-label",{for:"input-1"},"City",-1)),t("chi-text-input",{id:"input-1","on:chiChange":e[0]||(e[0]=b=>d.inputOneChangeHandler(b))},null,32),e[4]||(e[4]=t("chi-label",{for:"input-2"},"Zip Code",-1)),t("chi-text-input",{id:"input-2","on:chiChange":e[1]||(e[1]=b=>d.inputTwoChangeHandler(b))},null,32)])]),customAdvanced2:n(()=>[t("chi-date-picker",{"on:chiDateChange":e[2]||(e[2]=b=>d.dateChangeHandler(b))},null,32)]),_:1},8,["filtersData","customItems"])]),end:n(()=>[o(m,{message:"Refresh"},{default:n(()=>e[7]||(e[7]=[t("chi-button",{type:"icon",variant:"flat"},[t("chi-icon",{icon:"refresh"})],-1)])),_:1}),e[8]||(e[8]=t("chi-dropdown",{icon:"arrow-to-bottom",variant:"flat","icon-tooltip-message":"Download",position:"left-start"},[t("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#"},"Download All Data"),t("a",{class:"chi-dropdown__menu-item",slot:"menu",href:"#"},"Download All Current Results")],-1)),o(h,{columnsData:r(c).columnsData},null,8,["columnsData"])]),_:1})]),"code-vue":n(()=>[e[9]||(e[9]=t("div",{class:"chi-tab__description"},[s("Use the slots "),t("code",null,"start"),s(" to add elements to the left side area of the Toolbar Header and the "),t("code",null,"end"),s(" - to the right side.")],-1)),o(f,{lang:"html",code:p.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[e[10]||(e[10]=t("div",{class:"chi-tab__description"},[s("To render toolbar, use the class "),t("code",null,"chi-toolbar"),s(".")],-1)),o(f,{lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),q={class:"chi-form__item"},D="base_with_save_view",G=T({__name:"_base-with-save-view",setup(k){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],l=z(),p=L(),d={vue:`${H(D)}
${M}

${A}
${O}`,htmlblueprint:`${B(D)}

${W}

${E(D)}

${F(D)}`};return(e,i)=>{const u=a("ChiSearchInput"),v=a("ChiDataTableViews"),m=a("ChiDataTableFilters"),h=a("ChiTooltip"),C=a("ChiColumnCustomization"),f=a("ChiDataTableToolbar"),w=a("ChiSaveView"),b=y,S=I;return x(),P(S,{title:"Base with save view",id:D,tabs:c,additionalStyle:"position: static;"},{example:n(()=>[o(f,null,{start:n(()=>[o(u,{dataTableSearch:!0}),i[5]||(i[5]=t("div",{class:"chi-divider -vertical"},null,-1)),o(v,{views:r(l).viewsData},null,8,["views"]),i[6]||(i[6]=t("div",{class:"chi-divider -vertical"},null,-1)),o(m,{filtersData:r(l).filtersData,customItems:r(l).customItemsData},{customAdvanced:n(()=>[t("div",q,[i[3]||(i[3]=t("chi-label",{for:"input-1"},"City",-1)),t("chi-text-input",{id:"input-1","on:chiChange":i[0]||(i[0]=_=>e.inputOneChangeHandler(_))},null,32),i[4]||(i[4]=t("chi-label",{for:"input-2"},"Zip Code",-1)),t("chi-text-input",{id:"input-2","on:chiChange":i[1]||(i[1]=_=>e.inputTwoChangeHandler(_))},null,32)])]),customAdvanced2:n(()=>[t("chi-date-picker",{"on:chiDateChange":i[2]||(i[2]=_=>e.dateChangeHandler(_))},null,32)]),_:1},8,["filtersData","customItems"])]),end:n(()=>[o(h,{message:"Refresh"},{default:n(()=>i[7]||(i[7]=[t("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1)])),_:1}),o(h,{message:"Download"},{default:n(()=>i[8]||(i[8]=[t("button",{class:"chi-button -icon -flat","aria-label":"Download"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1)])),_:1}),o(C,{columnsData:r(l).columnsData},null,8,["columnsData"])]),_:1}),o(w,{config:r(p)},null,8,["config"])]),"code-vue":n(()=>[i[9]||(i[9]=t("div",{class:"chi-tab__description"},[s("Use the slots "),t("code",null,"start"),s(" to add elements to the left side area of the Toolbar Header and the "),t("code",null,"end"),s(" - to the right side.")],-1)),o(b,{lang:"html",code:d.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[i[10]||(i[10]=t("div",{class:"chi-tab__description"},[s("To render toolbar, use the class "),t("code",null,"chi-toolbar"),s(".")],-1)),o(b,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"-w--100"},Q=["active"],X="save_view_interaction",Y=`<div class="-w--100" id="save-view">
  <button class="chi-button" @click="toggleSaveView">Toggle Save View</button>
  <ChiSaveView class="-mt--2" :config="config" @chiViewSave="saveView" @chiViewDelete="deleteView">
    <template v-slot:info-icon>
      <button class="chi-button -light -icon -flat -xs" id="chi-save-view__info-trigger" aria-label="Edit" @click="() => toggleInfoPopover()" slot="info-icon">
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </button>
    </template>
    <template v-slot:info-popover>
      <chi-popover :active="isInfoPopoverActive" position="right-start" title="Popover title" variant="text" arrow="" reference="#chi-save-view__info-trigger" @chiPopoverHidden="() => (isInfoPopoverActive = false)">Popover content</chi-popover>
    </template>
  </ChiSaveView>
</div>

<!-- Example Data -->
const config = ref({
  active: false,
  results: '(1-40 of 78)',
});

const isInfoPopoverActive = ref(false);

const toggleInfoPopover = () => {
  isInfoPopoverActive.value = !isInfoPopoverActive.value;
};
const toggleSaveView = () => {
  config.value = {
    ...config.value,
    active: !config.value.active,
  };
};`,tt=T({__name:"_save-view-interaction",setup(k){const c=R({active:!1,results:"(1-40 of 78)"}),l=R(!1),p=()=>{l.value=!l.value},d=()=>{c.value={...c.value,active:!c.value.active}},e=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}];return(i,u)=>{const v=a("ChiSaveView"),m=y,h=I;return x(),P(h,{title:"Save view interaction",id:X,tabs:e,additionalStyle:"position: static;"},{example:n(()=>[t("div",K,[t("chi-button",{onClick:d},"Toggle Save View"),o(v,{class:"-mt--2",config:c.value},{"info-icon":n(()=>[t("chi-button",{color:"light",type:"icon",variant:"flat",size:"xs","aria-label":"Edit",onClick:u[0]||(u[0]=()=>p()),slot:"info-icon"},u[2]||(u[2]=[t("chi-icon",{icon:"circle-info-outline","aria-hidden":"true"},null,-1)]))]),"info-popover":n(()=>[t("chi-popover",{active:l.value,position:"right-start",title:"Popover title",variant:"text",arrow:"",reference:"#chi-save-view__info-trigger","on:chiPopoverHidden":u[1]||(u[1]=()=>l.value=!1)},"Popover content",40,Q)]),_:1},8,["config"])])]),"code-vue":n(()=>[o(m,{lang:"html",code:Y})]),_:1})}}}),it={class:"chi-form__item"},$="toolbar-example-bulk-actions",ot=T({__name:"_base-with-save-view-bulk-actions",setup(k){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],l=z(),p=L(),d={vue:`${H($)}
${M}
<ChiDataTableBulkActions uuid="toolbar-example-bulk-actions" selected-rows="10">
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
</ChiDataTableBulkActions>

${A}
${O}`,htmlblueprint:`${B($)}

${W}

${E($)}

<!-- bulk actions -->
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

${F($)}`};return(e,i)=>{const u=a("ChiSearchInput"),v=a("ChiDataTableViews"),m=a("ChiDataTableFilters"),h=a("ChiTooltip"),C=a("ChiColumnCustomization"),f=a("ChiDataTableToolbar"),w=a("ChiSaveView"),b=a("ChiDataTableBulkActions"),S=y,_=I;return x(),P(_,{title:"Base with save view and bulk actions",id:"base-with-save-view-and-bulk-actions",additionalStyle:"position: static;",additionalClasses:"-position--relative",tabs:c},{example:n(()=>[o(f,null,{start:n(()=>[o(u,{dataTableSearch:!0}),i[5]||(i[5]=t("div",{class:"chi-divider -vertical"},null,-1)),o(v,{views:r(l).viewsData},null,8,["views"]),i[6]||(i[6]=t("div",{class:"chi-divider -vertical"},null,-1)),o(m,{filtersData:r(l).filtersData,customItems:r(l).customItemsData},{customAdvanced:n(()=>[t("div",it,[i[3]||(i[3]=t("chi-label",{for:"input-1"},"City",-1)),t("chi-text-input",{id:"input-1","on:chiChange":i[0]||(i[0]=g=>e.inputOneChangeHandler(g))},null,32),i[4]||(i[4]=t("chi-label",{for:"input-2"},"Zip Code",-1)),t("chi-text-input",{id:"input-2","on:chiChange":i[1]||(i[1]=g=>e.inputTwoChangeHandler(g))},null,32)])]),customAdvanced2:n(()=>[t("chi-date-picker",{"on:chiDateChange":i[2]||(i[2]=g=>e.dateChangeHandler(g))},null,32)]),_:1},8,["filtersData","customItems"])]),end:n(()=>[o(h,{message:"Refresh"},{default:n(()=>i[7]||(i[7]=[t("button",{class:"chi-button -icon -flat","aria-label":"Refresh"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-refresh","aria-hidden":"true"})])],-1)])),_:1}),o(h,{message:"Download"},{default:n(()=>i[8]||(i[8]=[t("button",{class:"chi-button -icon -flat","aria-label":"Download"},[t("div",{class:"chi-button__content"},[t("i",{class:"chi-icon icon-arrow-to-bottom","aria-hidden":"true"})])],-1)])),_:1}),o(C,{columnsData:r(l).columnsData},null,8,["columnsData"])]),_:1}),o(w,{config:r(p)},null,8,["config"]),o(b,{uuid:"toolbar-example-bulk-actions","selected-rows":"10"},{default:n(()=>i[9]||(i[9]=[t("div",{class:"chi-bulk-actions__buttons"},[t("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[t("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[t("chi-icon",{icon:"edit"})]),t("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[t("chi-icon",{icon:"compose"})]),t("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[t("chi-icon",{icon:"delete"})]),t("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[t("chi-icon",{icon:"print"})])]),t("div",{class:"chi-bulk-actions__buttons-desktop"},[t("chi-button",{size:"xs","aria-label":"Download"},[t("chi-icon",{icon:"arrow-to-bottom"}),t("span",null," Download ")]),t("chi-button",{size:"xs","aria-label":"Compose"},[t("chi-icon",{icon:"arrow-to-bottom"}),t("span",null," Compose ")]),t("chi-button",{size:"xs","aria-label":"Delete"},[t("chi-icon",{icon:"arrow-to-bottom"}),t("span",null," Delete ")]),t("chi-button",{size:"xs","aria-label":"Print"},[t("chi-icon",{icon:"arrow-to-bottom"}),t("span",null," Print ")])])],-1)])),_:1})]),"code-vue":n(()=>[i[10]||(i[10]=t("div",{class:"chi-tab__description"},[s("Use the slots "),t("code",null,"start"),s(" to add elements to the left side area of the Toolbar Header and the "),t("code",null,"end"),s(" - to the right side.")],-1)),o(S,{lang:"html",code:d.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[i[11]||(i[11]=t("div",{class:"chi-tab__description"},[s("To render toolbar, use the class "),t("code",null,"chi-toolbar"),s(".")],-1)),o(S,{code:d.htmlblueprint,lang:"html"},null,8,["code"])]),_:1})}}}),ct=T({__name:"index",setup(k){return(c,l)=>{const p=N;return x(),U(Z,null,[l[0]||(l[0]=t("h2",null,"Examples",-1)),o(p,{placeholder:"loading..."},{default:n(()=>[o(J),o(G),o(tt),o(ot)]),_:1})],64)}}});export{ct as _};
