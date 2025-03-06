import{_ as m}from"./C_gFFCTR.js";import{_ as g}from"./CmWk2xIH.js";import{e as d,f as _,o as p,w as n,b as s,a as e,c as u,d as i,F as b}from"./CmP53kv-.js";const x=d({__name:"_base",setup(r){const a={webComponent:'<chi-tags placeholder="Add tag"></chi-tags>',htmlBlueprint:`<ul class="chi-tags">
  <li class="-flex--grow1">
    <input class="chi-tags__input" type="text" placeholder="Add tag" />
  </li>
</ul>
`};return(t,o)=>{const l=m,c=g;return p(),_(c,{title:"Base",id:"base-tags"},{example:n(()=>o[0]||(o[0]=[e("div",{class:"p--3"},[e("chi-tags",{placeholder:"Add tag"})],-1)])),"code-webcomponent":n(()=>[s(l,{class:"html",lang:"html",code:a.webComponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(l,{class:"html",lang:"html",code:a.htmlBlueprint},null,8,["code"])]),_:1})}}}),f=d({__name:"_predefined-tags",setup(r){const a=[{name:"First tag"},{name:"Second tag"}],t={webComponent:`<chi-tags id="predefined-tags" placeholder="Add tag"></chi-tags>

<script>
document.getElementById('predefined-tags').tags = [
  { name: 'First tag' },
  { name: 'Second tag' },
];
<\/script>`,htmlBlueprint:`<ul class="chi-tags">
  <li>
    <div class="chi-tag">
      <div class="chi-badge">
        <span>
          First tag
        </span>
        <button class="chi-button -icon -close -xs">
          <div class="chi-button__content">
            <i class="chi-icon -xs icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
  </li>
  <li>
    <div class="chi-tag">
      <div class="chi-badge">
        <span>
          Second tag
        </span>
        <button class="chi-button -icon -close -xs">
          <div class="chi-button__content">
            <i class="chi-icon -xs icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
  </li>
  <li class="-flex--grow1">
    <input class="chi-tags__input" type="text" placeholder="Add tag" />
  </li>
</ul>`};return(o,l)=>{const c=m,h=g;return p(),_(h,{title:"With predefined tags",id:"tags-predefined"},{example:n(()=>[e("div",{class:"p--3"},[e("chi-tags",{placeholder:"Add tag",tags:a})])]),"code-webcomponent":n(()=>[s(c,{class:"html",lang:"html",code:t.webComponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[s(c,{class:"html",lang:"html",code:t.htmlBlueprint},null,8,["code"])]),_:1})}}}),C=d({__name:"index",setup(r){return(a,t)=>(p(),u(b,null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),t[1]||(t[1]=e("p",{class:"-text"},[i("Tag input element allows the user to define one or more tags. A tag can be confirmed with "),e("code",null,"Tab"),i(" or "),e("code",null,"Enter"),i(" key.")],-1)),s(x),s(f)],64))}});export{C as _};
