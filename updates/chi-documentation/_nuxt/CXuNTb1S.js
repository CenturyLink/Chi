var u=Object.defineProperty;var g=(t,e,i)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var d=(t,e,i)=>g(t,typeof e!="symbol"?e+"":e,i);import{V as p,N as b}from"./uJTUijt2.js";import{T as v}from"./2EwpEKcw.js";import{o as m,c as f,a as r,d as h,F as w,a3 as n}from"./B5CYXVwa.js";import{_}from"./DlAUqK2U.js";var y=Object.defineProperty,A=Object.getOwnPropertyDescriptor,x=(t,e,i,a)=>{for(var s=a>1?void 0:a?A(e,i):e,o=t.length-1,c;o>=0;o--)(c=t[o])&&(s=(a?c(e,i,s):c(s))||s);return a&&s&&y(e,i,s),s};let l=class extends p{constructor(){super(...arguments);d(this,"CHI_URL",v)}};l=x([b({})],l);const k=n('<h2>Accessibility</h2><h3>Keyboard Navigation</h3><table class="chi-table"><thead><tr><th>Key</th><th>Function</th></tr></thead><tbody><tr><td><code>Tab</code></td><td>Moves keyboard focus to the switch. </td></tr><tr><td><code>Space</code>,<code>Enter</code></td><td>Changes state of the switch to checked or not checked.</td></tr></tbody></table>',3),q={class:"-text"},I=["href"],C=n('<p class="-text">Visit <a href="https://webaim.org/techniques/keyboard/" target="_blank">WebAIM</a> for keyboard techniques.</p><div class="chi-grid"><div class="chi-col -w-sm--12 -w-md--6 -w-lg--6 -mb--3"><div class="chi-card -widget"><div class="chi-card__header"><div class="chi-card__title -text--normal">Guidance for developers</div></div><div class="chi-card__content"><div class="chi-card__caption"><ul class="-text"><li>Ensure each toggle switch is accompanied by a label. Use the <code>aria-labelledby</code> attribute on the toggle switch that matches the id of the label element. This is crucial for screen reader users to understand the purpose of the switch.</li><li>Use <code>aria-checked</code> to indicate whether the toggle switch is in the &quot;on&quot; or &quot;off&quot; state. This attribute should dynamically change as the toggle state changes to keep assistive technologies informed.</li><li>Toggles should be operable using keyboard alone. Ensure that users can tab to the toggle switch and change its state using keyboard keys like <code>Space</code> or <code>Enter</code>.</li><li>Implement the toggle using a <code>button</code> element assigned with a <code>role=&quot;switch&quot;</code>. This approach ensures that the element is recognized correctly by assistive technologies.</li></ul></div></div></div></div><div class="chi-col -w-sm--12 -w-md--6 -w-lg--6 -mb--3"><div class="chi-card -widget"><div class="chi-card__header"><div class="chi-card__title -text--normal">Guidance for designers</div></div><div class="chi-card__content"><div class="chi-card__caption"><ul class="-text"><li>Ensure that the toggle switch includes non-color visual indicators (e.g., text labels or distinctive shapes) to convey its state. This helps users with color vision deficiencies.</li><li>According to WCAG Success Criterion 3.2.2 (On Input), avoid designs where flipping a switch causes immediate changes in context or navigation. If such changes are necessary, provide clear warnings before the switch is used, or offer a way to undo the change.</li><li>Maintain high contrast ratios for all textual and graphical elements of the toggle switch to ensure legibility and visibility under various lighting conditions.</li><li>Ensure that toggle switches are large enough to be easily manipulated by users with limited dexterity, and spaced sufficiently to prevent accidental activation.</li></ul></div></div></div></div></div><p class="-text"> Find live examples in the <a href="https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-toggles" target="_blank">A11y Style Guide</a>. </p><h3>Roles and attributes</h3><p class="-text"> The following list provides essential roles and attributes you should consider to ensure our components are fully accessible across various interface scenarios.</p><table class="chi-table"><thead><tr><th class="-pr--10">Attribute</th><th>Element</th><th>Usage</th></tr></thead><tbody><tr><td><code>aria-label</code></td><td><code>div</code></td><td>Defines a string value that labels an interactive element. It is required props for controls without text content.</td></tr><tr><td><code>aria-labelledby</code></td><td><code>div</code></td><td>The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to. It is required props for controls without text content.</td></tr></tbody></table><h3>Resources</h3><ul class="-text"><li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/" target="_blank">W3 Switch Example: </a>Contains comprehensive details regarding the accessibility behavior of the switch .</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role" target="_blank">Mozilla Resources for Developers: </a>Find examples of accessible switches.</li></ul><h3>Other recommendations</h3>',9),W={class:"-text"},L=["href"],E=n('<h3>WCAG 2.2 Guidelines</h3><ul class="-text"><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#non-text-content" target="_blank">Non-text Content: </a>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-content-structure-separation-programmatic" target="_blank">Info and Relationships: </a>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-navigation-mechanisms-descriptive" target="_blank">Headings and Labels: </a>Headings and labels describe topic or purpose. (Level AA)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-minimize-error-cues" target="_blank">Labels or Instructions: </a>Labels or instructions are provided when content requires user input. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-ensure-compat-rsv" target="_blank">Name, Role, Value: </a>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A) </li></ul>',2);function G(t,e,i,a,s,o){return m(),f(w,null,[k,r("p",q,[h("For comprehensive details on keyboard support for toggle switch, refer to our "),r("a",{href:`${t.CHI_URL}/foundations/accessibility/using-keyboard/`,target:"_blank"},"Keyboard Control Guide.",8,I)]),C,r("p",W,[h("Explore additional accessibility tips in the general "),r("a",{href:`${t.CHI_URL}/foundations/accessibility/overview`,target:"_blank"},"Accessibility Guide.",8,L)]),E],64)}const O=_(l,[["render",G]]);export{O as default};
