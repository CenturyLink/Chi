import{_ as sa}from"./8Rn8z3Rm.js";import{_ as L}from"./Cr4Krhex.js";import{_ as C}from"./Zvpnuh4B.js";import{e as y,f as k,o as u,w as s,b as t,a,d as g,B as D,j as H,c as $,F as I,i as R,k as F,r as K,n as Q,t as X,l as na}from"./BnvmtQYM.js";import{_ as Y}from"./DD5d-mQ_.js";import{_ as Z}from"./CtNiOt5b.js";import{c as G,_ as aa,b as ia,h as ea,a as oa}from"./XzazPaSj.js";const V=c=>d=>" ".repeat(d*c),E=(c,d,o)=>({id:`name-${d}`,data:[c,`name-${d}`,o]}),w=(c,d,o)=>({name:c,id:d,date:o}),j=(c,d,o,r,b)=>{const v=V(r);return`[
${v(b+1)}'${d}',
${v(b+1)}'${c}',
${v(b+1)}'${o}',
${v(b)}]`},ta=(c,d,o,r,b)=>{const v=V(r);return`{
${v(b)}id: '${c}-${o}',
${v(b)}data: ${j(d.id,d.name,d.date,r,b)},
${v(b-1)}},`},x=(c,d,o,r=[],b=!1,v=!1,n=!1,e=!1,l="Accordion content")=>{const i=V(2),h=[b?`${i(4)}active: true,`:"",v?`${i(4)}state: 'danger',`:"",n?`${i(4)}expandable: true,`:""].filter(Boolean).join(`
`),_=e?`${i(4)}nestedContent: {
${i(5)}${l}
${i(4)}}`:"";return`{
${h?h+`
`:""}${i(4)}id: '${c}',${_?`
`+_:""}
${i(4)}data: ${j(c,d,o,2,4)},
${i(3)}},`},A=(c,d,o,r,b=!1,v=2)=>{const n=V(v),e=r.map((l,i)=>ta(c,l,i,v,8)).join(`
${n(7)}`);return`{
${b?`${n(4)}expanded: true,
`:""}${n(4)}id: '${c}',
${n(4)}nestedContent: {
${n(5)}table: {
${n(6)}data: [
${n(7)}${e}
${n(6)}],
${n(5)}},
${n(4)}},
${n(4)}data: ${j(c,d,o,v,4)},
${n(3)}},`},va=(c,d,o,r)=>ta(c,d,o,r,12),B=(c,d,o,r,b=!1,v=!1,n=2)=>{const e=V(n),l=(h,_)=>{const T=r.map((p,M)=>va(c,p,M,n)).join(`
${e(11)}`);return`{
${v&&_===0?`${e(8)}expanded: true,
`:""}${e(8)}id: '${c}-${_}',
${e(8)}data: ${j(h.id,h.name,h.date,n,8)},
${e(8)}nestedContent: {
${e(9)}table: {
${e(10)}data: [
${e(11)}${T}
${e(10)}],
${e(9)}},
${e(8)}},
${e(7)}},`},i=r.map((h,_)=>l(h,_)).join(`
${e(7)}`);return`{
${b?`${e(4)}expanded: true,
`:""}${e(4)}id: '${c}',
${e(4)}nestedContent: {
${e(5)}table: {
${e(6)}data: [
${e(7)}${i}
${e(6)}],
${e(5)}},
${e(4)}},
${e(4)}data: ${j(c,d,o,n,4)},
${e(3)}},`},m={columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},f={name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},S=[E("Name 1","1","18 Dec 2020 3:26 p.m."),E("Name 2","2","18 Dec 2020 2:38 a.m."),E("Name 3","3","5 Nov 2020 10:15 a.m."),E("Name 4","4","18 Dec 2020 3:26 p.m."),E("Name 5","5","18 Dec 2020 2:38 a.m."),E("Name 6","6","5 Nov 2020 10:15 a.m.")],W=(c=!1)=>`config: {
    columnResize: true,
    style: {
      portal: ${c?"true":"false"},
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: ${c?"true":"false"},
    },
    pagination: {
      activePage: 1,
      compact: ${c?"true":"false"},
      firstLast: ${c?"true":"false"},
      pageJumper: ${c?"false":"true"},
    },
    resultsPerPage: 3,
  },`,P=`head: {
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
    },`,q=`head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },`,ra=`head: {
      name: { label: 'Name', sortable: true, sortDataType: 'string' },
      id: { label: 'ID', sortable: true, sortDataType: 'string' },
      lastLogin: { label: 'Last Login', sortable: true, sortDatatype: 'date' },
    },`,z=(c=!1,d=!1)=>`body: [
      ${x("name-1","Name 1","18 Dec 2020 3:26 p.m.")}
      ${x("name-2","Name 2","18 Dec 2020 2:38 a.m.",[],c,d)}
      ${x("name-3","Name 3","5 Nov 2020 10:15 a.m.")}
      ${x("name-4","Name 4","18 Dec 2020 3:26 p.m.")}
      ${x("name-5","Name 5","18 Dec 2020 2:38 a.m.")}
      ${x("name-6","Name 6","5 Nov 2020 10:15 a.m.")}
    ]`,la=c=>`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row${c?" -active":""}">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-1">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-1" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,ba=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell">
            <div>Name</div>
          </div>
          <div class="chi-data-table__cell">
            <div>ID</div>
          </div>
          <div class="chi-data-table__cell">
            <div>Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 1</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 2</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div>5 Nov 2020 10:15 a.m.</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,_a=`config: {
    columnResize: true,
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
    selectable: 'radio',
    resultsPerPage: 3,
  },`,ha=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -selectable"></div>
          <div class="chi-data-table__cell">
            <div>Name</div>
          </div>
          <div class="chi-data-table__cell">
            <div>ID</div>
          </div>
          <div class="chi-data-table__cell">
            <div>Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <fieldset>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba2" name="radios">
                <label class="chi-radio__label" for="radio-ba2"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 1</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-1</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -striped -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba3" name="radios">
                <label class="chi-radio__label" for="radio-ba3"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 2</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-2</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba4" name="radios">
                <label class="chi-radio__label" for="radio-ba4"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 3</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-3</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,pa=S.map(c=>c.id==="name-1"?{...c,data:["This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines",...c.data.slice(1)]}:c.id==="name-2"?{...c,data:["This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell",...c.data.slice(1)]}:c),ua=`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
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
    cellWrap: true,
  },
  table: {
    head: {
      name: { label: 'This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },
    body: [
      ${x("name-1","This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines","18 Dec 2020 3:26 p.m.")}
      ${x("name-2","This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell","18 Dec 2020 2:38 a.m.")}
      ${x("name-3","Name 3","5 Nov 2020 10:15 a.m.")}
      ${x("name-4","Name 4","18 Dec 2020 3:26 p.m.")}
      ${x("name-5","Name 5","18 Dec 2020 2:38 a.m.")}
      ${x("name-6","Name 6","5 Nov 2020 10:15 a.m.")}
    ]
  }
}`,ma=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell" data-label="This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell">
            <div class="-cell-wrap">This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell" data-label="ID">
            <div class="-cell-wrap">ID</div>
          </div>
          <div class="chi-data-table__cell" data-label="Last Login">
            <div class="-cell-wrap">Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">5 Nov 2020 10:15 a.m.</div>
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
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page" >
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
</div>`,ga=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell">
            <div>Name</div>
          </div>
          <div class="chi-data-table__cell">
            <div>ID</div>
          </div>
          <div class="chi-data-table__cell">
            <div>Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 1</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -row--danger -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 2</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div>5 Nov 2020 10:15 a.m.</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,wa=`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1">
          <label class="chi-checkbox__label" for="checkbox-ba1">
            <div class="-sr--only">Label</div>
          </label>
        </div>
        <div class="chi-dropdown">
          <button aria-label="Select All Dropdown" data-position="bottom-start" class="chi-button -icon -flat -has-active">
            <div class="chi-button__content">
              <i aria-hidden="true" class="chi-icon icon-chevron-down -xs"></i>
            </div>
          </button>
          <div class="chi-dropdown__menu" x-placement="bottom-start">
            <a class="chi-dropdown__menu-item">Select all items, this page</a>
            <a class="chi-dropdown__menu-item">Select all items, all pages</a>
            <a class="chi-dropdown__menu-item">Deselect all</a>
          </div>
        </div>
      </div>
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba2">
          <label class="chi-checkbox__label" for="checkbox-ba2">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row -selected">
      <div class="chi-data-table__cell -lh--1 -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba3">
          <label class="chi-checkbox__label" for="checkbox-ba3">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -lh--1 -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba4">
          <label class="chi-checkbox__label" for="checkbox-ba4">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-7">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-7">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-7" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,U=(c,d,o)=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  ${c}
  table: {
    ${d}
    ${o}
  }
}`,fa=`head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
    },`,da=`body: [
      ${x("name-1","Name 1","18 Dec 2020 3:26 p.m.",[],!1,!1,!0,!0)}
      ${x("name-2","Name 2","18 Dec 2020 2:38 a.m.",[],!1,!1,!1,!0)}
      ${x("name-3","Name 3","5 Nov 2020 10:15 a.m.",[],!1,!1,!1,!0)}
      ${x("name-4","Name 4","18 Dec 2020 3:26 p.m.",[],!1,!1,!1,!0)}
      ${x("name-5","Name 5","18 Dec 2020 2:38 a.m.",[],!1,!1,!1,!0)}
      ${x("name-6","Name 6","5 Nov 2020 10:15 a.m.",[],!1,!1,!1,!0)}
    ]`,xa=`body: [
      ${A("name-1","Name 1","18 Dec 2020 3:26 p.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")],!0)}
      ${A("name-2","Name 2","18 Dec 2020 2:38 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${A("name-3","Name 3","5 Nov 2020 10:15 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${A("name-4","Name 4","18 Dec 2020 3:26 p.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${A("name-5","Name 5","18 Dec 2020 2:38 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${A("name-6","Name 6","5 Nov 2020 10:15 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
    ]`,Da=`body: [
      ${B("name-1","Name 1","18 Dec 2020 3:26 p.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")],!0,!0)}
      ${B("name-2","Name 2","18 Dec 2020 2:38 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${B("name-3","Name 3","5 Nov 2020 10:15 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${B("name-4","Name 4","18 Dec 2020 3:26 p.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${B("name-5","Name 5","18 Dec 2020 3:26 p.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
      ${B("name-6","Name 6","5 Nov 2020 10:15 a.m.",[w("Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."),w("Child Name 2","child-name-2","18 Dec 2020 2:38 a.m.")])}
    ]`,ca=[{expanded:!0,id:"name-1",nestedContent:{value:"Accordion content"},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{value:"Accordion content"},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{value:"Accordion content"},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{value:"Accordion content"},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{value:"Accordion content"},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{value:"Accordion content"},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}],ya=[{expanded:!0,id:"name-1",nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{table:{data:[{id:"name-2-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-2-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{table:{data:[{id:"name-3-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-3-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{table:{data:[{id:"name-4-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-4-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{table:{data:[{id:"name-5-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-5-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{table:{data:[{id:"name-6-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-6-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}],Na=[{expanded:!0,id:"name-1",nestedContent:{table:{data:[{expanded:!0,id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{table:{data:[{id:"name-2-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-2-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{table:{data:[{id:"name-3-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-3-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{table:{data:[{id:"name-4-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-4-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{table:{data:[{id:"name-5-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-5-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{table:{data:[{id:"name-6-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-6-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}],Ca=`config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    showExpandAll: true,
    resultsPerPage: 3,
  },`,O=`config: {
    columnResize: true,
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
    showExpandAll: true,
    resultsPerPage: 3,
  },`,La=`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable -position--relative">
        <button class="chi-button -icon -flat -expand -sm">
          <div class="chi-button__content">
            <i class="chi-icon icon-squares-plus-outline"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row -expanded">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-minus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m. </div>
      </div>
    </div>
    <div class="chi-data-table__row-child -p--2">
      <div>Accordion content</div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-plus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m. </div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-plus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">240 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-9">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-9">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-9" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,$a=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div role="row" class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -expandable -position--relative">
            <div>
              <button aria-label="Expand All Rows" class="chi-button -icon -flat -expand -sm">
                <div class="chi-button__content">
                  <i class="chi-icon icon-squares-minus-outline"></i>
                </div>
                <span class="-sr--only">Expand All Rows</span>
              </button>
              <div class="chi-tooltip " data-popper-placement="top">
                <span>Collapse All</span>
              </div>
            </div>
            <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Name" class="chi-data-table__cell -justify-content-md--start -position--relative">
              Name <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="ID" class="chi-data-table__cell -justify-content-md--start -position--relative">
              ID <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Last Login" class="chi-data-table__cell -justify-content-md--start -position--relative">
              Last Login <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div id="row-dt-1-name-1" data-rownumber="0" data-rowlevel="0" role="row" class="chi-data-table__row -md -expanded">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-1-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-minus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 1</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-1</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-1-content">
          <div role="row" class="chi-data-table__row-child -p--2">Accordion content</div>
        </div>
        <div id="row-dt-1-name-2" data-rownumber="1" data-rowlevel="0" role="row" class="chi-data-table__row -striped -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-2-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 2</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-2</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-2-content" style="display: none;">
          <div role="row" class="chi-data-table__row-child -p--2">Accordion content</div>
        </div>
        <div id="row-dt-1-name-3" data-rownumber="2" data-rowlevel="0" role="row" class="chi-data-table__row -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-3-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 3</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-3</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-3-content" style="display: none;">
          <div role="row" class="chi-data-table__row-child -p--2">Accordion content</div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,ka=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -expandable -position--relative">
            <button class="chi-button -icon -flat -expand -sm">
              <div class="chi-button__content">
                <i class="chi-icon icon-squares-minus-outline"></i>
              </div>
            </button>
          </div>
          <div class="chi-data-table__cell">
            <div>Name</div>
          </div>
          <div class="chi-data-table__cell">
            <div>ID</div>
          </div>
          <div class="chi-data-table__cell">
            <div>Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div id="row-dt-1-name-1" data-rownumber="0" data-rowlevel="0" role="row" class="chi-data-table__row -md -expanded">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-1-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-minus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 1</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-1</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-1-content">
          <div id="row-dt-1-name-1-0" data-rownumber="0-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1" data-rownumber="0-2" data-rowlevel="1" role="row" class="chi-data-table__row-child -md">
            <div role="cell" class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
        </div>
      <div id="row-dt-1-name-2" data-rownumber="1" data-rowlevel="0" role="row" class="chi-data-table__row -striped -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-2-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 2</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-2</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-2-content" style="display: none;">
          <div id="row-dt-1-name-2-0" data-rownumber="2-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1" data-rownumber="2-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
            <div role="cell" class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
        </div>
      <div id="row-dt-1-name-3" data-rownumber="2-0" data-rowlevel="1" role="row" class="chi-data-table__row -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-3-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 3</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-3</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-3-content" style="display: none;">
          <div id="row-dt-1-name-3-0" data-rownumber="2-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1" data-rownumber="2-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
            <div role="cell" class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,Ta=`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div role="row" class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -expandable -position--relative">
            <div>
              <button aria-label="Expand All Rows" class="chi-button -icon -flat -expand -sm">
                <div class="chi-button__content">
                  <i class="chi-icon icon-squares-minus-outline"></i>
                </div>
                <span class="-sr--only">Expand All Rows</span>
              </button>
              <div class="chi-tooltip " data-popper-placement="top">
                <span>Collapse All</span>
              </div>
            </div>
            <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Name" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Name <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="ID" class="chi-data-table__cell -justify-content-md--start -position--relative">
            ID <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Last Login" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Last Login <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
        </div>
      </div>

      <div class="chi-data-table__body">
        <div id="row-dt-1-name-1" data-rownumber="0" data-rowlevel="0" role="row" class="chi-data-table__row -md -expanded">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-1-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-minus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 1</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-1</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-1-content">
          <div id="row-dt-1-name-1-0" data-rownumber="0-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -expanded">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-minus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-0-content">
            <div id="row-dt-1-name-1-0" data-rownumber="0-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1" data-rownumber="0-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="0-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="row-dt-1-name-2" data-rownumber="1" data-rowlevel="0" role="row" class="chi-data-table__row -striped -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-2-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 2</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-2</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-2-content" style="display: none;">
          <div id="row-dt-1-name-2-0" data-rownumber="1-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1" data-rownumber="1-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="row-dt-1-name-3" data-rownumber="2" data-rowlevel="0" role="row" class="chi-data-table__row -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-3-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 3</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-3</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-3-content" style="display: none;">
          <div id="row-dt-1-name-3-0" data-rownumber="2-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1" data-rownumber="2-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
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
</div>`,J=(c,d,o)=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  ${c}
  table: {
    ${d}
    ${o}
  }
}`,Ia=J(Ca,P,da),Sa=J(O,P,da),Pa=J(O,fa,xa),za=J(O,q,Da),Ea=y({__name:"_accordion",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,showExpandAll:!0},r={head:f,body:ca},b={vue:Ia,htmlblueprint:La};return(v,n)=>{const e=D("ChiDataTable"),l=L,i=C;return u(),k(i,{title:"Accordion",id:"accordion-data-table",tabs:d},{example:s(()=>[t(e,{config:o,dataTableData:r})]),"code-vue":s(()=>[n[0]||(n[0]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"nestedContent"),g(" property to provide data for the accordion content.")],-1)),t(l,{lang:"html",code:b.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(l,{lang:"html",code:b.htmlblueprint},null,8,["code"])]),_:1})}}}),Aa=y({__name:"_active",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o=m,r=S.map(e=>e.id==="name-2"?{...e,active:!0}:e),b={head:f,body:r},n={vue:U(W(),P,z(!0)),htmlblueprint:la(!0)};return(e,l)=>{const i=D("ChiDataTable"),h=L,_=C;return u(),k(_,{title:"Active",id:"active-data-table",tabs:d},{example:s(()=>[t(i,{config:H(o),dataTableData:b},null,8,["config"])]),"code-vue":s(()=>[l[0]||(l[0]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"active"),g(" property to achieve active state of rows")],-1)),t(h,{lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(h,{lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),Ba=y({__name:"_base",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o=m,r={head:f,body:S},v={vue:U(W(),P,z()),htmlblueprint:la(!1)};return(n,e)=>{const l=D("ChiDataTable"),i=L,h=C;return u(),k(h,{title:"Base",id:"base-data-table",tabs:d},{example:s(()=>[t(l,{config:H(o),dataTableData:r},null,8,["config"])]),"code-vue":s(()=>[t(i,{code:v.vue,lang:"html"},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(i,{lang:"html",code:v.htmlblueprint},null,8,["code"])]),_:1})}}}),Ra=["innerHTML"],Ma=y({__name:"_empty",setup(c){const d=[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message.",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r=m,b={head:f,body:[]},v=i=>({...r,...i.noFiltersMessage?{noResultsMessage:i.noFiltersMessage}:i}),n=i=>i.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search"></i>
      <div>${i.noFiltersMessage||i.noResultsMessage}</div>`,e=i=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${i.noFiltersMessage?`
    noFiltersMessage: '${i.noFiltersMessage}',`:""}${i.noResultsMessage?`
    noResultsMessage: '${i.noResultsMessage}',`:""}
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },${i.emptyActionable?`
    emptyActionable: {
      isActionable: true,
    },`:""}
    resultsPerPage: 3,
  },
  table: {
    ${P}
    body: []
  }
}`,l=i=>`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row-empty${i.emptyActionable?" -actionable":""}">
      ${n(i)}
    </div>
  </div>
</div>`;return(i,h)=>{const _=Y,T=D("ChiDataTable"),p=L,M=C;return u(),$(I,null,[t(_,{title:"Empty",id:"empty-data-table"}),(u(),$(I,null,R(d,N=>t(M,{title:N.title,titleSize:"h4",id:N.id,key:N.id,tabs:o},{example:s(()=>[t(T,{config:v(N.config),dataTableData:b},null,8,["config"])]),"code-htmlblueprint":s(()=>[t(p,{lang:"html",code:l(N.config)},null,8,["code"])]),"code-vue":s(()=>[N.description?(u(),$("div",{key:0,class:"chi-tab__description",innerHTML:N.description},null,8,Ra)):F("",!0),t(p,{lang:"html",code:e(N.config)},null,8,["code"])]),_:2},1032,["title","id"])),64))],64)}}}),Ha=["innerHTML"],ja=y({__name:"_config-styled",setup(c){const d=[{title:"No Border",id:"no-border-data-table",description:"Use <code>noBorder</code> config to remove the borders",style:{noBorder:!0}},{title:"Striped",id:"striped-data-table",description:"Use <code>striped</code> config to achieve striped styles",style:{striped:!0}},{title:"Hover",id:"hover-data-table",description:"Use <code>hover</code> config to achieve hover styles",style:{hover:!0}},{title:"Bordered",id:"bordered-data-table",description:"Use <code>bordered</code> config to achieve bordered styles",style:{bordered:!0}}],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r=m,b={head:f,body:S},v=l=>({...r,style:{...r.style,...l}}),n=l=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: ${!!l.noBorder},
      bordered: ${!!l.bordered},
      hover: ${!!l.hover},
      size: 'md',
      striped: ${!!l.striped},
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    resultsPerPage: 3,
  },
  table: {
    ${P}
    ${z()}
  }
}`,e=l=>`<div class="chi-data-table${l.noBorder?" -no-border":""}${l.bordered?" -bordered":""}${l.hover?" -hover":""}">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row${l.striped?" -striped":""}">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-2">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-2">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-2" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`;return(l,i)=>{const h=D("ChiDataTable"),_=L,T=C;return u(),$(I,null,R(d,p=>t(T,{title:p.title,key:p.id,id:p.id,tabs:o},{example:s(()=>[(u(),k(h,{config:v(p.style),key:p.id,dataTableData:b},null,8,["config"]))]),"code-vue":s(()=>[a("div",{class:"chi-tab__description",innerHTML:p.description},null,8,Ha),t(_,{lang:"html",code:n(p.style)},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(_,{lang:"html",code:e(p.style)},null,8,["code"])]),_:2},1032,["title","id"])),64)}}}),Va=y({__name:"_selectable",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,selectable:!0,showSelectAllDropdown:!0},r={head:f,body:S},b={htmlblueprintRadio:`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable"></div>
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <fieldset>
      <div class="chi-data-table__row">
        <div class="chi-data-table__cell -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba2" name="radios">
            <label class="chi-radio__label" for="radio-ba2"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
          <div>Name 1</div>
        </div>
        <div class="chi-data-table__cell" data-label="ID">
          <div>name-1</div>
        </div>
        <div class="chi-data-table__cell" data-label="Last Login">
          <div>18 Dec 2020 3:26 p.m.</div>
        </div>
      </div>
      <div class="chi-data-table__row -selected">
        <div class="chi-data-table__cell -lh--1 -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba3" name="radios">
            <label class="chi-radio__label" for="radio-ba3"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
          <div>Name 2</div>
        </div>
        <div class="chi-data-table__cell" data-label="ID">
          <div>name-2</div>
        </div>
        <div class="chi-data-table__cell" data-label="Last Login">
          <div>18 Dec 2020 2:38 a.m.</div>
        </div>
      </div>
      <div class="chi-data-table__row">
        <legend class="-sr--only">Select a Row</legend>
        <div class="chi-data-table__cell -lh--1 -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba4" name="radios">
            <label class="chi-radio__label" for="radio-ba4"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
          <div>Name 3</div>
        </div>
        <div class="chi-data-table__cell" data-label="ID">
          <div>name-3</div>
        </div>
        <div class="chi-data-table__cell" data-label="Last Login">
          <div>5 Nov 2020 10:15 a.m.</div>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-7">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-7">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-7" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,htmlblueprintCheckbox:wa},v=()=>({...o,selectable:"radio"}),n=e=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    selectable: ${e==="radio"?"'radio'":`${e},
    showSelectAllDropdown: true`},
    resultsPerPage: 3,
  },
  table: {
    ${P}
    ${z()}
  }
}`;return(e,l)=>{const i=D("ChiDataTable"),h=L,_=C;return u(),$(I,null,[t(_,{title:"Selectable",id:"selectable-data-table",tabs:d},{example:s(()=>[t(i,{config:o,dataTableData:r})]),"code-vue":s(()=>[l[0]||(l[0]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"selectable"),g(" config to render rows with selectable checkboxes")],-1)),t(h,{lang:"html",code:n(!0)},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(h,{lang:"html",code:b.htmlblueprintCheckbox},null,8,["code"])]),_:1}),t(_,{title:"Radio Selection",id:"radio-selection-data-table",tabs:d},{example:s(()=>[t(i,{config:v(),dataTableData:r},null,8,["config"])]),"code-vue":s(()=>[l[1]||(l[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"selectable"),g(" config to render rows with radio buttons")],-1)),t(h,{lang:"html",code:n("radio")},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(h,{lang:"html",code:b.htmlblueprintRadio},null,8,["code"])]),_:1})],64)}}}),Ua=y({__name:"_sizes",setup(c){const d=["xs","sm","md","lg","xl"],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r={...m,style:{...m.style,size:"lg"}},b={head:f,body:S},v=l=>({...r,style:{...r.style,size:l}}),n=l=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: '${l}',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    resultsPerPage: 3,
  },
  table: {
    ${P}
    ${z()}
  }
}`,e=l=>`<div class="chi-data-table -${l}">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-16">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-16">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-16" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`;return(l,i)=>{const h=D("ChiDataTable"),_=L,T=C;return u(),$(I,null,R(d,p=>t(T,{key:p,title:`Size -${p}`,id:`size-${p}-data-table`,tabs:o},{example:s(()=>[t(h,{config:v(p),dataTableData:b},null,8,["config"])]),"code-vue":s(()=>[t(_,{lang:"html",code:n(p)},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(_,{code:e(p),lang:"html"},null,8,["code"])]),_:2},1032,["title","id"])),64)}}}),Fa=y({__name:"_sorting",setup(c){const d=[{title:"Sorting",id:"sorting-data-table",defaultSort:null},{title:"Default Sorting -- Ascending",id:"sorting-ascending-data-table",defaultSort:{key:"name",direction:"ascending"}},{title:"Default Sorting -- Descending",id:"sorting-descending-data-table",defaultSort:{key:"name",direction:"descending"}}],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r=m,b={head:{name:{label:"Name",sortable:!0,sortDataType:"string"},id:{label:"ID",sortable:!0,sortDataType:"string"},lastLogin:{label:"Last Login",sortable:!0,sortDatatype:"date"}},body:S},v=l=>({...r,...l?{defaultSort:l}:{}}),n=l=>`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <button class="chi-data-table__cell -sorting${l?" -active":""}${(l==null?void 0:l.direction)==="descending"?" -descending":""}">
        <div class="-mr--1">Name</div>
        <i class="chi-icon -xs ${l?"icon-arrow-up":"icon-arrow-sort"}" aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">ID</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">Last Login</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-10">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-10">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-10" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,e=l=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },${l?`
    defaultSort: {
      key: 'name',
      direction: '${l.direction}',
    },`:""}
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    resultsPerPage: 3,
  },
  table: {
    ${ra}
    ${z()}
  }
}`;return(l,i)=>{const h=D("ChiDataTable"),_=L,T=C;return u(),$(I,null,R(d,p=>t(T,{key:p.id,title:p.title,id:p.id,tabs:o},{example:s(()=>[t(h,{config:v(p.defaultSort),dataTableData:b},null,8,["config"])]),"code-vue":s(()=>[i[0]||(i[0]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"sortBy"),g(" and "),a("code",null,"sortDataType"),g(" properties to make the column sortable")],-1)),t(_,{code:e(p.defaultSort),lang:"html"},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(_,{code:n(p.defaultSort),lang:"html"},null,8,["code"])]),_:2},1032,["title","id"])),64)}}}),Wa={class:"-text--truncate",style:{"padding-left":"0.5rem"}},Ja=y({__name:"_complex",setup(c){const d=K(null),o=()=>{var n;(n=d.value)==null||n.print("Data table - Complex")},r=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],b={...G,style:{...G.style,portal:!1},pagination:{...G.pagination,pageJumper:!0}},v={head:ea,body:ia};return(n,e)=>{const l=D("ChiDataTableToolbar"),i=D("ChiDataTable"),h=C;return u(),k(h,{title:"Complex",id:"complex-data-table",tabs:r},{example:s(()=>[t(i,{config:b,dataTableData:v,ref_key:"dataTableComplex",ref:d},{status:s(_=>[a("i",{class:Q(`chi-icon icon-${_.icon} -icon--${_.color}`),"aria-hidden":"true"},null,2),a("span",Wa,X(_.status),1)]),name:s(_=>[(u(),k(Z,{name:_.name,id:_.id,key:_.id},null,8,["name","id"]))]),toolbar:s(()=>[t(l,null,{end:s(()=>[a("chi-button",{onClick:o,variant:"flat",type:"icon","aria-label":"Print data table complex example"},e[0]||(e[0]=[a("chi-icon",{icon:"print"},null,-1)]))]),_:1})]),"bulk-actions":s(()=>e[1]||(e[1]=[a("div",{class:"chi-bulk-actions__buttons"},[a("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[a("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[a("chi-icon",{icon:"edit"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[a("chi-icon",{icon:"compose"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[a("chi-icon",{icon:"delete"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[a("chi-icon",{icon:"print"})])]),a("div",{class:"chi-bulk-actions__buttons-desktop"},[a("chi-button",{size:"xs","aria-label":"Download"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Download")]),a("chi-button",{size:"xs","aria-label":"Compose"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Compose")]),a("chi-button",{size:"xs","aria-label":"Delete"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Delete")]),a("chi-button",{size:"xs","aria-label":"Print"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Print")])])],-1)])),_:1},512)]),"code-vue":s(()=>[t(aa)]),_:1})}}}),Ga={class:"chi-card -portal -bg--white"},qa={class:"chi-card__content -p--0"},Oa=y({__name:"_accordion",setup(c){const d=[{title:"Accordion",id:"accordion-portal-data-table",table:{head:f,body:ca},codeSnippetVue:Sa,codeSnippetHtml:$a},{title:"Accordion Child",id:"accordion-child-data-table",table:{head:{...f,name:{...f.name,key:!0,bold:!0}},body:ya},codeSnippetVue:Pa,codeSnippetHtml:ka},{title:"Accordion Grand Child",id:"accordion-grand-child-data-table",table:{head:{...f,name:{...f.name,key:!0,bold:!0}},body:Na},codeSnippetVue:za,codeSnippetHtml:Ta}],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1},showExpandAll:!0};return(b,v)=>{const n=D("ChiDataTable"),e=L,l=C;return u(),$(I,null,R(d,i=>t(l,{title:i.title,id:i.id,tabs:o},{example:s(()=>[a("div",Ga,[v[0]||(v[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",qa,[t(n,{config:r,dataTableData:i.table},null,8,["dataTableData"])])])]),"code-vue":s(()=>[v[1]||(v[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"nestedContent"),g(" property to provide data of row accordion content")],-1)),t(e,{lang:"html",code:i.codeSnippetVue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(e,{lang:"html",code:i.codeSnippetHtml},null,8,["code"])]),_:2},1032,["title","id"])),64)}}}),Ka={class:"chi-card -portal -bg--white"},Qa={class:"chi-card__content -p--0"},Xa=y({__name:"_base",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1}},r={head:{...f,name:{...f.name,key:!0,bold:!0}},body:S},v={vue:U(W(!0),q,z()),htmlblueprint:ba};return(n,e)=>{const l=D("ChiDataTable"),i=L,h=C;return u(),k(h,{title:"Base",id:"base-portal-data-table",tabs:d},{example:s(()=>[a("div",Ka,[e[0]||(e[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",Qa,[t(l,{config:o,dataTableData:r})])])]),"code-vue":s(()=>[e[1]||(e[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"portal"),g(" config to achieve portal styling")],-1)),t(i,{lang:"html",code:v.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(i,{lang:"html",code:v.htmlblueprint},null,8,["code"])]),_:1})}}}),Ya={class:"chi-card -portal -bg--white"},Za={class:"chi-card__content -p--0"},ai=["innerHTML"],ii=y({__name:"_empty",setup(c){const d=[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],o=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],r={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1}},b={head:f,body:[]},v=i=>({...r,...i.noFiltersMessage?{noResultsMessage:i.noFiltersMessage}:i}),n=i=>i.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search -icon--dark"></i>
      <div>${i.noFiltersMessage||i.noResultsMessage}</div>`,e=i=>`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${i.noFiltersMessage?`
    noFiltersMessage: '${i.noFiltersMessage}',`:""}${i.noResultsMessage?`
    noResultsMessage: '${i.noResultsMessage}',`:""}
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
    },${i.emptyActionable?`
    emptyActionable: {
      isActionable: true,
    },`:""}
    resultsPerPage: 3,
  },
  table: {
    ${P}
    body: []
  }
}`,l=i=>`<div class="chi-data-table -portal -compact">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row-empty${i.emptyActionable?" -actionable":""}">
      ${n(i)}
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
        <div class="chi-pagination__content">
          <div class="chi-pagination__start">
          </div>
          <div class="chi-pagination__center">
            <div class="chi-pagination__button-group chi-button-group">
              <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                </div>
              </button>
              <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-pagination__label">
              <strong>1</strong>
              <span>of</span>
              <strong>1</strong>
            </div>
            <div class="chi-pagination__button-group chi-button-group">
              <button class="chi-button -icon -flat -xs" aria-label="Next page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                </div>
              </button>
              <button class="chi-button -icon -flat -xs" aria-label="Last page" disabled>
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
</div>`;return(i,h)=>{const _=Y,T=D("ChiDataTable"),p=L,M=C;return u(),$(I,null,[t(_,{title:"Empty",id:"empty-data-table-portal"}),(u(),$(I,null,R(d,N=>t(M,{title:N.title,titleSize:"h4",id:N.id,key:N.id,tabs:o},{example:s(()=>[a("div",Ya,[h[0]||(h[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",Za,[t(T,{config:v(N.config),dataTableData:b},null,8,["config"])])])]),"code-vue":s(()=>[N.description?(u(),$("div",{key:0,class:"chi-tab__description",innerHTML:N.description},null,8,ai)):F("",!0),t(p,{lang:"html",code:e(N.config)},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(p,{lang:"html",code:l(N.config)},null,8,["code"])]),_:2},1032,["title","id"])),64))],64)}}}),ei={class:"chi-card -portal -bg--white"},ti={class:"chi-card__content -p--0"},li=y({__name:"_radio-selection",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1},selectable:"radio"},r={head:f,body:S},v={vue:U(_a,P,z()),htmlblueprint:ha};return(n,e)=>{const l=D("ChiDataTable"),i=L,h=C;return u(),k(h,{title:"Radio selection",id:"radio-selection-portal-data-table",tabs:d},{example:s(()=>[a("div",ei,[e[0]||(e[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",ti,[t(l,{config:o,dataTableData:r})])])]),"code-vue":s(()=>[e[1]||(e[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"selectable"),g(" config to render rows with radio buttons")],-1)),t(i,{lang:"html",code:v.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(i,{lang:"html",code:v.htmlblueprint},null,8,["code"])]),_:1})}}}),di={class:"chi-card -portal -bg--white"},ci={class:"chi-card__content -p--0"},si=y({__name:"_second-line-wrapping",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1},cellWrap:!0},r={head:{name:{label:"This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:pa},b={vue:ua,htmlblueprint:ma};return(v,n)=>{const e=D("ChiDataTable"),l=L,i=C;return u(),k(i,{title:"Second line wrapping",id:"second-line-wrapping-data-table",tabs:d},{example:s(()=>[a("div",di,[n[0]||(n[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",ci,[t(e,{config:o,dataTableData:r})])])]),"code-vue":s(()=>[n[1]||(n[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"cellWrap"),g(" config to achieve the two line wrapping")],-1)),t(l,{lang:"html",code:b.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(l,{lang:"html",code:b.htmlblueprint},null,8,["code"])]),_:1})}}}),ni={class:"chi-card -portal -bg--white"},oi={class:"chi-card__content -p--0"},vi=y({__name:"_state",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],o={...m,style:{...m.style,portal:!0,striped:!0},pagination:{...m.pagination,compact:!0,firstLast:!0,pageJumper:!1}},r=S.map(e=>e.id==="name-2"?{...e,state:"danger"}:e),b={head:{...f,name:{...f.name,key:!0,bold:!0},id:{...f.id,key:!0}},body:r},n={vue:U(W(!0),q,z(!1,!0)),htmlblueprint:ga};return(e,l)=>{const i=D("ChiDataTable"),h=L,_=C;return u(),k(_,{title:"State",id:"state-data-table",tabs:d},{example:s(()=>[a("div",ni,[l[0]||(l[0]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",oi,[t(i,{config:o,dataTableData:b})])])]),"code-vue":s(()=>[l[1]||(l[1]=a("div",{class:"chi-tab__description"},[g("Use "),a("code",null,"state"),g(" config to achieve state styling")],-1)),t(h,{lang:"html",code:n.vue},null,8,["code"])]),"code-htmlblueprint":s(()=>[t(h,{lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),ri=y({__name:"_two-tier",setup(c){const d=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
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
</div>`};return(r,b)=>{const v=L,n=C;return u(),k(n,{title:"Two tier header",id:"two-tier-data-table",tabs:d},{example:s(()=>b[0]||(b[0]=[a("div",{class:"chi-card -portal -bg--white -bg-md--grey-15"},[a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")]),a("div",{class:"chi-card__content -p--0"},[a("div",{class:"chi-data-table -portal -compact"},[a("div",{class:"chi-data-table__head"},[a("div",{class:"chi-data-table__row"},[a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Location","data-column":"localization","data-sort":"ascending","data-label":"Location"},[g("Location"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-up",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column High Utilization","data-column":"highUtilization","data-sort":"ascending","data-label":"High Utilization"},[g("High Utilization"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Elevated Utilization","data-column":"elevatedUtilization","data-sort":"ascending","data-label":"Elevated Utilization"},[g("Elevated Utilization"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])]),a("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Highest %","data-column":"highest","data-sort":"ascending","data-label":"Highest %"},[g("Highest %"),a("chi-button",{variant:"flat",type:"icon"},[a("chi-icon",{icon:"arrow-sort",size:"xs"})])])]),a("div",{class:"chi-data-table__row"},[a("div",{class:"chi-data-table__cell"}),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"Total"),a("div",{class:"-associated"},"%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"Total"),a("div",{class:"-associated"},"%")]),a("div",{class:"chi-data-table__cell"})])]),a("div",{class:"chi-data-table__body"},[a("div",{class:"chi-data-table__row -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 1")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"3"),a("div",{class:"-associated"},"98%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"-"),a("div",{class:"-associated"},"-")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"98%")])]),a("div",{class:"chi-data-table__row -striped -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 2")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"1"),a("div",{class:"-associated"},"98%")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"3"),a("div",{class:"-associated"},"67%")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"98%")])]),a("div",{class:"chi-data-table__row -md"},[a("div",{class:"chi-data-table__cell -key -bold"},[a("div",null,"Location 3")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"-"),a("div",{class:"-associated"},"-")]),a("div",{class:"chi-data-table__cell"},[a("div",{class:"-associated"},"2"),a("div",{class:"-associated"},"66")]),a("div",{class:"chi-data-table__cell"},[a("div",null,"66%")])])]),a("div",{class:"chi-data-table__footer"},[a("nav",{class:"chi-pagination -compact",role:"navigation","aria-label":"Pagination"},[a("div",{class:"chi-pagination__content"},[a("div",{class:"chi-pagination__start"},[a("div",{class:"chi-pagination__results -text--xs"},[a("span",{class:"chi-pagination__label"},"240 Results")])]),a("div",{class:"chi-pagination__center"},[a("div",{class:"chi-pagination__button-group chi-button-group"},[a("button",{class:"chi-button -icon -flat -xs","aria-label":"First page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-page-first","aria-hidden":"true"})])]),a("button",{class:"chi-button -icon -flat -xs","aria-label":"Previous page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])])]),a("div",{class:"chi-pagination__label"},[a("strong",null,"2"),a("span",null,"of"),a("strong",null,"3")]),a("div",{class:"chi-pagination__button-group chi-button-group"},[a("button",{class:"chi-button -icon -flat -xs","aria-label":"Next page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-chevron-right","aria-hidden":"true"})])]),a("button",{class:"chi-button -icon -flat -xs","aria-label":"Last page"},[a("div",{class:"chi-button__content"},[a("i",{class:"chi-icon icon-page-last","aria-hidden":"true"})])])])]),a("div",{class:"chi-pagination__end"})])])])])])],-1)])),"code-htmlblueprint":s(()=>[t(v,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),bi={class:"chi-card -portal -bg--white"},_i={class:"chi-card__content -p--0"},hi={class:"-text--truncate",style:{"padding-left":"0.5rem"}},pi=y({__name:"_complex",setup(c){const d=K(null),o=()=>{var n;(n=d.value)==null||n.print("Data table - Complex")},r=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],b=oa,v={head:ea,body:ia};return(n,e)=>{const l=D("ChiDataTableToolbar"),i=D("ChiDataTable"),h=C;return u(),k(h,{title:"Complex",id:"complex-data-table",tabs:r},{example:s(()=>[a("div",bi,[e[2]||(e[2]=a("div",{class:"chi-card__header -sm"},[a("div",{class:"chi-card__title"},"Title")],-1)),a("div",_i,[t(i,{config:H(b),dataTableData:v,ref_key:"dataTableComplex",ref:d},{status:s(_=>[a("i",{class:Q(`chi-icon icon-${_.icon} -icon--${_.color}`),"aria-hidden":"true"},null,2),a("span",hi,X(_.status),1)]),name:s(_=>[(u(),k(Z,{name:_.name,id:_.id,key:_.id},null,8,["name","id"]))]),toolbar:s(()=>[t(l,null,{end:s(()=>[a("chi-button",{onClick:o,variant:"flat",type:"icon","aria-label":"Print data table complex example"},e[0]||(e[0]=[a("chi-icon",{icon:"print"},null,-1)]))]),_:1})]),"bulk-actions":s(()=>e[1]||(e[1]=[a("div",{class:"chi-bulk-actions__buttons"},[a("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[a("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[a("chi-icon",{icon:"edit"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[a("chi-icon",{icon:"compose"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[a("chi-icon",{icon:"delete"})]),a("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[a("chi-icon",{icon:"print"})])]),a("div",{class:"chi-bulk-actions__buttons-desktop"},[a("chi-button",{size:"xs","aria-label":"Download"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Download")]),a("chi-button",{size:"xs","aria-label":"Compose"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Compose")]),a("chi-button",{size:"xs","aria-label":"Delete"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Delete")]),a("chi-button",{size:"xs","aria-label":"Print"},[a("chi-icon",{icon:"arrow-to-bottom"}),a("span",null,"Print")])])],-1)])),_:1},8,["config"])])])]),"code-vue":s(()=>[t(aa)]),_:1})}}}),ui={key:0},mi={key:1},Ci=y({__name:"index",setup(c){const d=na();return(o,r)=>{const b=sa;return u(),$(I,null,[r[0]||(r[0]=a("h2",null,"Examples",-1)),t(b,null,{default:s(()=>[["lumen","centurylink"].includes(H(d))?(u(),$("div",ui,[t(Ja),t(Ba),t(Ma),t(ja),t(Aa),t(Va),t(Ea),t(Fa),t(Ua)])):F("",!0),["portal","brightspeed","colt"].includes(H(d))?(u(),$("div",mi,[t(pi),t(Xa),t(si),t(vi),t(ii),t(li),t(Oa),t(ri)])):F("",!0)]),_:1})],64)}}});export{Ci as _};
