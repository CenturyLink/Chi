<template lang="pug">
TitleAnchor(title="Web Components" id="web-components" titleSize="h2" additionalClasses="-lh--4")
.chi-badge.-dark.-outline.-xs.-mr--1
  span Optional
p.-text
  | Chi Web Components are <a target="_blank" href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements" rel="noopener">Custom Elements</a>
  | designed to Lumen's specifications and built according to the HTML Living Standard.
  | They are written in vanilla Javascript for compatibility with major frameworks including
  | AngularJS, ReactJS, VueJS, or no framework at all.
p.-text
  | Add Chi Web Components by copying and pasting the JavaScript files below into the header of your
  | web application. Placing the files in the header is important as it will load any Polyfill if the browser
  | doesn't support Web Components.

<Copy id="stylesheet" :code="stylesheet.htmlblueprint(version)" lang='html' class="html" />

p.-text.-mb--3
  | After placing the files in your header, you are now ready to use the Web Components described in this documentation.

.chi-expansion-panel.-web-components
  .chi-epanel.-no-step(data-chi-epanel-group="web-component-details")
    .chi-epanel__header
      .chi-epanel__title.-w--100(data-chi-epanel-action="toggle")
        i.chi-icon.icon-chevron-right.-mr--2(aria-hidden="true")
        | HTML attributes and DOM properties
    .chi-epanel__collapse
      .-active--only
        .chi-epanel__body
          .chi-epanel__content
            .chi-epanel__text
              p.-text
                | Chi Web Components can be used in several different ways. The most common are the HTML attributes
                | and the DOM properties. In most cases, we keep them synchronized. For example, the <code>chi-button</code> element has
                | a <code>size</code> attribute that can be accessed and modified in two ways.
              h3.-text--h5.-mt--3 Modifying the HTML attribute
              <Copy id="stylesheet" :code="stylesheet.HTMLAttribute" lang='html' class="html" />
              h3.-text--h5.-mt--3 Setting the DOM property
              <Copy id="stylesheet" :code="stylesheet.DOMProperty" lang='html' class="html" />
  .chi-epanel.-no-step(data-chi-epanel-group="web-component-details")
    .chi-epanel__header
      .chi-epanel__title.-w--100(data-chi-epanel-action="toggle")
        i.chi-icon.icon-chevron-right.-mr--2(aria-hidden="true")
        | Boolean attributes and properties
    .chi-epanel__collapse
      .-active--only
        .chi-epanel__body
          .chi-epanel__content
            .chi-epanel__text
              p.-text
                | Some Chi components have boolean attributes which function the same way as the well known <code>disabled</code>
                | attribute. Boolean attributes are <code>true</code> when the HTML element has the attribute and <code>false</code> when not.
              p.-text
                | Boolean attributes can be set to true this way:
              <Copy id="stylesheet" :code="stylesheet.booleanAttributes.example1" lang='html' class="html" />
              p.-text
                | And set to false this way:
              <Copy id="stylesheet" :code="stylesheet.booleanAttributes.example2" lang='html' class="html" />
              p.-text
                | Some components, like <code>chi-drawer</code>, have helper methods in order to change the state of commonly modified attributes:
              <Copy id="stylesheet" :code="stylesheet.booleanAttributes.example3" lang='html' class="html" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class WebComponents extends Vue {
  stylesheet = {
    htmlblueprint: (
      version: string
    ) => `<script type="module" src="https://lib.lumen.com/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="sha256-sjGS/0v1TobGl9rMXlni36WXTnT7J6sMysVcZ5nxUZw=" crossorigin="anonymous">\x3C/script>
<script nomodule="" src="https://lib.lumen.com/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.js" integrity="sha256-YrDiIH91dWgnfQRTLsWYoxQj7LGxf7PHV4TIZcazh5M=" crossorigin="anonymous">\x3C/script>`,
    HTMLAttribute: `<chi-button id="close-btn" size="md">Close</chi-button>
<script>
  document.getElementById("close-btn").setAttribute("size", "xl");
\x3C/script>`,
    DOMProperty: `<chi-button id="close-btn" size="md">Close</chi-button>
<script>
  document.getElementById("close-btn").size="xl";
\x3C/script>`,
    booleanAttributes: {
      example1: `<input type="text" disabled />
<chi-drawer id="drawer" active />
<script>
  document.getElementById("drawer").active = true;
  document.getElementById("drawer").setAttribute("active", "active");
\x3C/script>`,
      example2: `<input type="text"  />
<chi-drawer id="drawer" />
<script>
  document.getElementById("drawer").active = false;
  document.getElementById("drawer").removeAttribute("active");
\x3C/script>`,
      example3: `<chi-drawer id="drawer" />
<script>
  document.getElementById("drawer").show();   // This sets the active property to true
  document.getElementById("drawer").hide();   // This sets the active property to false
  document.getElementById("drawer").toggle(); // This toggles the state of the active property
\x3C/script>`,
    },
  };
  mounted() {
    chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'), {
      mode: 'accordion',
    });
  }

  version = useChiVersion();
}
</script>
