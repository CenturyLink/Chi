import{V as _,N as h}from"./NAah3XrW.js";import{_ as b}from"./onyWiYp2.js";import{_ as u}from"./CAQzZ0uH.js";import{o as p,h as g,w as v,a,d as o,b as m}from"./CEIPSiTs.js";import{_ as f}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=(s,t,d,c)=>{for(var i=c>1?void 0:c?x(t,d):t,e=s.length-1,l;e>=0;e--)(l=s[e])&&(i=(c?l(t,d,i):l(i))||i);return c&&i&&w(t,d,i),i};let n=class extends _{};n=y([h({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Location"
            data-column="location" data-sort="ascending" data-label="Location">
            Location
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-up" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column High Utilization"
            data-column="highUtilization" data-sort="ascending" data-label="High Utilization">
            High Utilization
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Elevated Utilization"
            data-column="elevatedUtilization" data-sort="ascending" data-label="Elevated Utilization">
            Elevated Utilization
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Highest %"
            data-column="highest" data-sort="ascending" data-label="Highest %">
            Highest %
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
        </div>
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell"></div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell"></div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">1</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">67%</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">2</div>
            <div class="-associated">66</div>
          </div>
          <div class="chi-data-table__cell">
            <div>66%</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">240 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>2</strong>
                <span>of</span>
                <strong>3</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-last" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
            </div>
            <div class="chi-pagination__end"></div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>`}})})],n);function z(s,t,d,c,i,e){const l=b,r=u;return p(),g(r,{title:"Two tier header",id:"two-tier-data-table",tabs:s.exampleTabs},{example:v(()=>t[0]||(t[0]=[a("div",{class:"chi-card -portal -bg--white -bg-md--grey-15"},[a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")]),a("div",{class:"chi-card__content -p--0"},[a("div",{class:"chi-data-table -portal -compact"},[a("div",{class:"chi-data-table__head"},[a("div",{class:"chi-data-table__row"},[a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Location","data-column":"localization","data-sort":"ascending","data-label":"Location"},[o("Location"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-up",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column High Utilization","data-column":"highUtilization","data-sort":"ascending","data-label":"High Utilization"},[o("High Utilization"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Elevated Utilization","data-column":"elevatedUtilization","data-sort":"ascending","data-label":"Elevated Utilization"},[o("Elevated Utilization"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Highest %","data-column":"highest","data-sort":"ascending","data-label":"Highest %"},[o("Highest %"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])])]),a("div",{class:"chi-data-table__row"},[a("div",{class:"chi-data-table__cell"}),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"Total"),a("div",{class:"-associated"},"%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"Total"),a("div",{class:"-associated"},"%")]),a("div",{class:"chi-data-table__cell"})])]),a("div",{class:"chi-data-table__body"},[a("div",{class:"chi-data-table__row -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 1")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"3"),a("div",{class:"-associated"},"98%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"-"),a("div",{class:"-associated"},"-")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"98%")])]),a("div",{class:"chi-data-table__row -striped -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 2")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"1"),a("div",{class:"-associated"},"98%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"3"),a("div",{class:"-associated"},"67%")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"98%")])]),a("div",{class:"chi-data-table__row -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 3")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"-"),a("div",{class:"-associated"},"-")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"2"),a("div",{class:"-associated"},"66")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"66%")])])]),a("div",{class:"chi-data-table__footer"},[a("nav",{class:"chi-pagination -compact",role:"navigation","aria-label":"Pagination"},[a("div",{class:"chi-pagination__content"},[a("div",{class:"chi-pagination__start"},[a("div",{class:"chi-pagination__results -text--xs"},[a("span",{class:"chi-pagination__label"},"240 Results")])]),a("div",{class:"chi-pagination__center"},[a("div",{class:"chi-pagination__button-group chi-button-group"},[a("button",{class:"chi-button -icon -flat -xs","aria-label":"First page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-page-first","aria-hidden":"true"})])]),a("button",{class:"chi-button -icon -flat -xs","aria-label":"Previous page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])])]),a("div",{class:"chi-pagination__label"},[a("strong",null,"2"),a("span",null,"of"),a("strong",null,"3")]),a("div",{class:"chi-pagination__button-group chi-button-group"},[a("button",{class:"chi-button -icon -flat -xs","aria-label":"Next page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-chevron-right","aria-hidden":"true"})])]),a("button",{class:"chi-button -icon -flat -xs","aria-label":"Last page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-page-last","aria-hidden":"true"})])])])]),a("div",{class:"chi-pagination__end"})])])])])])],-1)])),"code-htmlblueprint":v(()=>[m(l,{lang:"html",code:s.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const E=f(n,[["render",z]]);export{E as default};
