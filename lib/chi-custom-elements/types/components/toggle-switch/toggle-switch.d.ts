import { EventEmitter } from '../../stencil-public-runtime';
export declare class ToggleSwitch {
    /**
     *  to set a label for the toggle switch.
     */
    label: string;
    /**
     *  used to disable the toggle labels.
     */
    hideLabel: boolean;
    /**
     *  used to disable the toggle switch.
     */
    disabled: boolean;
    /**
     *  used to check the toggle switch.
     */
    checked: boolean;
    /**
     * OPTIONAL. Size of the label. { xs, sm }.
     */
    size: string;
    extraClass: string;
    el: HTMLElement;
    /**
     *  emitting a custom event toggle.
     */
    toggle: EventEmitter;
    _toggle(): void;
    sizeValidation(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
