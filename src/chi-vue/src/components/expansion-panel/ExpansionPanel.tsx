import { Prop, Watch } from 'vue-property-decorator';
import { EXPANSION_PANEL_STATES, ExpansionPanelState } from '@/constants/types';
import { EPANEL_CLASSES, UTILITY_CLASSES } from '@/constants/classes';
import './expansion-panel.scss';
import { EPANEL } from '@/constants/constants';
import { Component, Vue } from '@/build/vue-wrapper';
import { Transition } from 'vue';

@Component({})
export default class ExpansionPanel extends Vue {
  @Prop({ default: 'pending' }) state!: ExpansionPanelState;
  @Prop() title!: string;
  @Prop() step!: string;
  @Prop() bordered?: boolean;
  @Prop() stateIcon?: boolean;

  @Watch('state')
  stateValidation(newValue: ExpansionPanelState) {
    if (newValue && !EXPANSION_PANEL_STATES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state of Expansion Panel. If provided, valid values are ${EXPANSION_PANEL_STATES.join(
          ', '
        )}`
      );
    }
  }

  render() {
    const slots = {
      active: this.$slots.active ? this.$slots.active({}) : null,
      change: this.$slots.change ? this.$slots.change({}) : null,
      done: this.$slots.done ? this.$slots.done({}) : null,
      footer: this.$slots.footer ? this.$slots.footer({}) : null,
      footerStart: this.$slots.footerStart ? this.$slots.footerStart({}) : null,
      footerEnd: this.$slots.footerEnd ? this.$slots.footerEnd({}) : null,
    };
    const footerStartEnd =
      slots.footerStart || slots.footerEnd ? (
        <div
          class={`${UTILITY_CLASSES.SIZING.W100} ${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.JUSTIFY.CONTENT_BETWEEN}`}>
          <div>{slots.footerStart}</div>
          <div>{slots.footerEnd}</div>
        </div>
      ) : null;

    return (
      <div
        class={`${EPANEL_CLASSES.EPANEL} ${this.state ? `-${this.state}` : ''}
      ${this.bordered ? EPANEL_CLASSES.BORDERED : ''} ${this.stateIcon ? EPANEL_CLASSES.STATE_ICON : ''}`}>
        <div class={EPANEL_CLASSES.HEADER}>
          {this.step ? <span class={EPANEL_CLASSES.NUMBER}>{this.step}.</span> : ''}
          <div class={EPANEL_CLASSES.TITLE}>{this.title}</div>
          <div class={`${EPANEL_CLASSES.CONTENT} ${this.step ? '' : UTILITY_CLASSES.MARGIN.LEFT[0]}`}>
            <Transition name={EPANEL.TRANSITIONS.SLIDE_FADE}>
              <div v-show={this.state === 'done'} class={EPANEL_CLASSES.DONE_ONLY}>
                {slots.done}
              </div>
            </Transition>
          </div>
          <Transition name={EPANEL.TRANSITIONS.SLIDE_FADE}>
            <div v-show={this.state === 'done'} class={EPANEL_CLASSES.ACTION}>
              {slots.change}
            </div>
          </Transition>
        </div>
        <Transition name={EPANEL.TRANSITIONS.SLIDE_FADE}>
          <div v-show={this.state === 'active'}>
            <div class={`${this.step ? '' : UTILITY_CLASSES.MARGIN.LEFT[0]} ${EPANEL_CLASSES.CONTENT_ACTIVE}`}>
              <div class={EPANEL_CLASSES.BODY}>
                <div class={EPANEL_CLASSES.CONTENT}>{slots.active}</div>
                <div class={`${EPANEL_CLASSES.FOOTER} ${UTILITY_CLASSES.JUSTIFY.END}`}>
                  {slots.footer}
                  {footerStartEnd}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}
