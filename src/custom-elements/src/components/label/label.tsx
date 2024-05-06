import { Component, Element, Prop, h, Watch } from '@stencil/core';
import { addMutationObserver } from '../../utils/mutationObserver';
import { LABEL_SIZES, type LabelSizes } from '../../constants/size';
import { uuid4 } from '../../utils/utils';

@Component({
  tag: 'chi-label',
  styleUrl: 'label.scss',
  scoped: true,
})
export class Label {
  @Element() el: HTMLLabelElement;
  /**
   *  To indicate ID of target form control web component.
   */
  @Prop({ reflect: true }) for: string;
  /**
   * OPTIONAL. Size of the label. { xs, sm, md, lg, xl }.
   */
  @Prop({ reflect: true }) size: LabelSizes = 'md';
  /**
   * To indicate which form field is required.
   */
  @Prop({ reflect: true }) required = false;
  /**
   * To indicate which form field is optional.
   */
  @Prop({ reflect: true }) optional = false;
  /**
   * To indicate if info icon should be displayed.
   */
  @Prop({ reflect: true }) infoIcon = false;
  /**
   * To provide message for info icon popover.
   */
  @Prop({ reflect: true }) infoIconMessage = 'Helpful information goes here.';

  private helpButtonId: string;
  private helpPopoverId: string;

  @Watch('size')
  validateSizeAttribute(newValue: LabelSizes) {
    if (newValue && LABEL_SIZES.indexOf(newValue) === -1) {
      throw new Error('Not valid size (' + newValue + '). Valid values are xs, sm, md, lg or xl. ');
    }
  }

  connectedCallback() {
    addMutationObserver.call(this);
  }

  componentWillLoad() {
    this.helpButtonId = `help-button-${uuid4()}`;
    this.helpPopoverId = `help-popover-${uuid4()}`;
  }

  toggleHelpPopover(): void {
    (this.el.querySelector(`#${this.helpPopoverId}`) as any).toggle();
  }

  _getInfoIcon() {
    return this.infoIcon ? (
      <div class="chi-label__help">
        <chi-button
          id={this.helpButtonId}
          onChiClick={() => this.toggleHelpPopover()}
          type="icon"
          size="xs"
          variant="flat"
          alternative-text="Help"
        >
          <chi-icon icon="circle-info-outline" size="xs"></chi-icon>
        </chi-button>
        <chi-popover id={this.helpPopoverId} position="top" variant="text" arrow reference={`#${this.helpButtonId}`}>
          {this.infoIconMessage}
        </chi-popover>
      </div>
    ) : (
      ''
    );
  }

  render() {
    const infoIcon = this._getInfoIcon();

    const required = (
      <abbr class="chi-label__required" aria-label="Required field">
        *
      </abbr>
    );
    const optional = (
      <abbr class="chi-label__optional" aria-label="Optional field">
        (optional)
      </abbr>
    );
    let message = '';

    if (!(this.required && this.optional)) {
      if (this.required) {
        message = required;
      } else if (this.optional) {
        message = optional;
      }
    }

    return (
      <label
        class={`
          chi-label
          ${this.size ? `-${this.size}` : ``}
          `}
        htmlFor={`${this.for}-control`}
      >
        <slot></slot>
        {message}
        {infoIcon}
      </label>
    );
  }
}
