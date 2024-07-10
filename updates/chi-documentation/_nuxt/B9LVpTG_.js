var u=Object.defineProperty;var p=(t,e,i)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var d=(t,e,i)=>p(t,typeof e!="symbol"?e+"":e,i);import{V as b,N as f}from"./uJTUijt2.js";import{T as m}from"./2EwpEKcw.js";import{o as g,c as v,a as o,d as h,F as _,a3 as c}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";var w=Object.defineProperty,A=Object.getOwnPropertyDescriptor,x=(t,e,i,a)=>{for(var s=a>1?void 0:a?A(e,i):e,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(a?l(e,i,s):l(s))||s);return a&&s&&w(e,i,s),s};let n=class extends b{constructor(){super(...arguments);d(this,"CHI_URL",m)}};n=x([f({})],n);const k=c('<h2>Accessibility</h2><h3>Keyboard Navigation</h3><table class="chi-table"><thead><tr><th>Key</th><th>Function</th></tr></thead><tbody><tr><td><code>Tab</code></td><td>Moves focus to the next focusable element </td></tr><tr><td><code>Shift + Tab</code></td><td>Moves focus to the previous focusable element </td></tr><tr><td><code>Space</code></td><td>Activates the button </td></tr></tbody></table>',3),q={class:"-text"},I=["href"],C=c('<p class="-text">Visit <a href="https://webaim.org/techniques/keyboard/" target="_blank">WebAIM</a> for keyboard techniques.</p><div class="chi-grid"><div class="chi-col -w-sm--12 -w-md--6 -w-lg--6 -mb--3"><div class="chi-card -widget"><div class="chi-card__header"><div class="chi-card__title -text--normal">Guidance for developers</div></div><div class="chi-card__content"><div class="chi-card__caption"><ul class="-text"><li>Simplify forms for better browser compatibility.</li><li>Use labels for inputs, matching <code>for</code> and <code>id</code> attributes.</li><li>Keep IDs unique and pair each form element with one label.</li><li>Mark required fields clearly (e.g., with an asterisk).</li><li>Use <code>aria-describedby</code> for error message accessibility.</li><li>if there&#39;s an error message tagged with <code>id=&quot;my-error-message&quot;</code>, then the corresponding input must include <code>aria-describedby=&quot;my-error-message&quot;</code></li></ul></div></div></div></div><div class="chi-col -w-sm--12 -w-md--6 -w-lg--6 -mb--3"><div class="chi-card -widget"><div class="chi-card__header"><div class="chi-card__title -text--normal">Guidance for designers</div></div><div class="chi-card__content"><div class="chi-card__caption"><ul class="-text"><li>Ensure focus indicators are visible to aid navigation.</li><li>Keep input labels visible, even when fields are focused.</li><li>Use contrasting colors for text and backgrounds to enhance readability.</li><li>Design clear error states and feedback for accessibility.</li><li>Use spacing, typography, and visual cues effectively.</li><li>Maintain consistency in the design of input elements to provide a cohesive user experience.</li></ul></div></div></div></div></div><p class="-text">For hands-on examples, consult the Accessibility <a href="https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-text-fields" target="_blank">(A11y) Style Guide.</a></p><h3>Resources</h3><ul class="-text"><li><a href="https://www.w3.org/WAI/ARIA/apgW3C" target="_blank">ARIA Practices: </a>Detailed ARIA guidance for accessible web content focusing on text inputs.</li><li><a href="https://a11y-style-guide.com/style-guide/" target="_blank">A11y Style Guide: </a>Outlines essential principles for accessible inputs and textareas. </li><li><a href="https://www.w3.org/WAI/tutorials/forms/" target="_blank">W3C Forms Tutorial: </a>Provides guidance on creating accessible forms.</li><li><a href="https://www.digitala11y.com/" target="_blank">DigitalA11y Project: </a>Showcases live examples of accessible inputs of various types.</li></ul><h3>Other recommendations</h3>',6),W={class:"-text"},L=["href"],G=c('<h3>WCAG 2.2 Guidelines</h3><ul class="-text"><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#non-text-content" target="_blank">Non-text Content: </a>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-content-structure-separation-programmatic" target="_blank">Info and Relationships: </a>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-navigation-mechanisms-descriptive" target="_blank">Headings and Labels: </a>Headings and labels describe topic or purpose. (Level AA)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-minimize-error-cues" target="_blank">Labels or Instructions: </a>Labels or instructions are provided when content requires user input. (Level A)</li><li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2#qr-ensure-compat-rsv" target="_blank">Name, Role, Value: </a>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A) </li></ul>',2);function R(t,e,i,a,s,r){return g(),v(_,null,[k,o("p",q,[h("For comprehensive details on keyboard support for input fields, refer to our "),o("a",{href:`${t.CHI_URL}/foundations/accessibility/using-keyboard/`,target:"_blank"},"Keyboard Control Guide.",8,I)]),C,o("p",W,[h("Explore additional accessibility tips in the general "),o("a",{href:`${t.CHI_URL}/foundations/accessibility/links-and-forms`,target:"_blank"},"Accessibility Guide.",8,L)]),G],64)}const E=y(n,[["render",R]]);export{E as default};
