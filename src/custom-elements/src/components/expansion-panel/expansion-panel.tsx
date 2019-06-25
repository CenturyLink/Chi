import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
    tag: 'chi-expansion-panel',
    styleUrl: 'expansion-panel.scss',
    scoped: true
})
export class ExpansionPanel {
    /**
     * to set expansion panel to 'done' state
     */
    @Prop({ reflectToAttr: true }) done?: boolean;

    /**
     * to set expansion panel to 'active' state
     */
    @Prop({ reflectToAttr: true }) active?: boolean;

    /**
     * to set expansion panel to 'disabled' state
     */
    @Prop({ reflectToAttr: true }) disabled?: boolean;

    /**
     * to set a step number next to the title of the panel
     */
    @Prop({ reflectToAttr: true }) step?: string;

    /**
     * to set the title of the panel
     */
    @Prop({ reflectToAttr: true }) eptitle: string;

    /**
     * is the panel border-styled?
     */
    @Prop({ reflectToAttr: true }) bordered?: boolean;

    /**
     * event raised when 'change' button of done mode panel is clicked
     */
    @Event({ eventName: 'chiEpChangeClick' }) chiEpChangeClick: EventEmitter;

    changeClick(): void {
        this.chiEpChangeClick.emit();
    }

    render() {
        return (
            <div
                class={`m-epanel ${this.disabled ? `-disabled` : ''} ${
                    this.active ? `-active` : ''
                    } ${this.done ? `-done` : ''} ${this.bordered ? `-bordered` : ''}`}
            >
                <div class="m-epanel__header">
                    {this.step ? <span class="m-epanel__number">{this.step}.</span> : ''}
                    <h4 class="m-epanel__title">{this.eptitle}</h4>
                    <div class={`m-epanel__content ${this.step ? '' : '-ml--0'}`}>
                        <div class="m-epanel__collapse">
                            <div class="-done--only">
                                <slot name="done" />
                            </div>
                        </div>
                    </div>
                    <div class="m-epanel__action -done--only">
                        <button
                            class="a-btn -brand -flat"
                            onClick={() => this.changeClick()}
                        >
                            Change
                        </button>
                    </div>
                </div>
                <div class={`m-epanel__collapse ${this.step ? '' : '-ml--0'}`}>
                    <div class="-active--only">
                        <div class="m-epanel__body">
                            <div class="m-epanel__content">
                                <slot name="active" />
                            </div>
                            <div class="m-epanel__footer -justify-content--end">
                                <slot name="footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
