import { Component, Prop, Watch, h, Element, State } from '@stencil/core';
import { EPANEL_CLASSES, GENERIC_SIZE_CLASSES, ICON_CLASS, ICONS, UTILITY_CLASSES } from '../../constants/classes';
import { EPANEL_TOOLTIP_CONTENT } from '../../constants/constants';
import { addMutationObserver } from '../../utils/mutationObserver';

const EP_MODES = ['done', 'active', 'pending', 'disabled'];

declare const chi: any;

@Component({
  tag: 'chi-expansion-panel',
  styleUrl: 'expansion-panel.scss',
  scoped: true,
})
export class ExpansionPanel {
  @Element() el;
  /**
   * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}
   */
  @Prop({ reflect: true }) state = 'pending';

  /**
   * to set a step number next to the title of the panel
   */
  @Prop({ reflect: true }) step: string;

  /**
   * to set the panel style to bordered
   */
  @Prop({ reflect: true }) bordered: boolean;

  /**
   * to set the title of the panel
   */
  @State() epanelTitle: string;

  /**
   * to render a state icon within the panel
   */
  @Prop({ reflect: true }) stateIcon = false;

  /**
   * to render a state tooltip
   */
  @Prop({ reflect: true }) stateIconTooltip = EPANEL_TOOLTIP_CONTENT;

  private tooltip: any;

  @Watch('state')
  stateValidation(newValue: string) {
    if (newValue && !EP_MODES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for this component. If provided, valid values are 'done', 'active', 'pending' or 'disabled'; if not, 'pending' value will be set. `
      );
    }
  }

  connectedCallback() {
    addMutationObserver.call(this, () => 
      {
        this.epanelTitle = this.el.title;
      },
      { 
        attributes: true, 
        attributeOldValue: true, 
        attributeFilter: ['title'], 
        childList: true 
      }
    );
  }

  componentWillLoad() {
    if (this.el.getAttribute('title')) {
      this.epanelTitle = this.el.getAttribute('title');
    }

    this.stateValidation(this.state);
  }

  componentDidLoad() {
    this.tooltip = chi.tooltip(document.getElementById('state-icon-tooltip'));
  }

  disconnectedCallback() {
    if (this.tooltip) {
      this.tooltip.dispose();
      this.tooltip = null;
    }
  }

  render() {
    return (
      <div
        class={`${EPANEL_CLASSES.EPANEL} 
        ${this.state === 'disabled' ? `-disabled` : ''}
        ${this.state === 'active' ? `-active` : ''}
        ${this.state === 'done' ? `-done` : ''}
        ${this.bordered ? EPANEL_CLASSES.BORDERED : ''}
        ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}
        ${this.step ? '' : '-no-step'}`}
      >
        <div class={EPANEL_CLASSES.HEADER}>
          {this.stateIcon && (
            <i
              class={`${ICON_CLASS} ${ICONS.SUCCESS} icon-circle-check ${GENERIC_SIZE_CLASSES.SM_2} ${EPANEL_CLASSES.STATE}`}
              id="state-icon-tooltip"
              data-tooltip={this.stateIconTooltip}
            />
          )}
          {this.step ? <span class={EPANEL_CLASSES.NUMBER}>{this.step}.</span> : ''}
          <div class={EPANEL_CLASSES.TITLE}>{this.epanelTitle}</div>
          <div class={EPANEL_CLASSES.CONTENT}>
            <div class={EPANEL_CLASSES.COLLAPSE}>
              <div class={EPANEL_CLASSES.DONE_ONLY}>
                <slot name="done" />
              </div>
            </div>
          </div>
          {this.state === 'done' || this.state === 'active' ? (
            <div class={EPANEL_CLASSES.ACTION}>
              <slot name="change" />
            </div>
          ) : (
            ''
          )}
        </div>
        <div class={EPANEL_CLASSES.COLLAPSE}>
          <div class={EPANEL_CLASSES.ACTIVE_ONLY}>
            <div class={EPANEL_CLASSES.BODY}>
              <div class={EPANEL_CLASSES.CONTENT}>
                <slot name="active" />
              </div>
              <div class={`${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}`}>
                <slot name="footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
