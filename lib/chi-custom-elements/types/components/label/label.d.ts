import { type LabelSizes } from '../../constants/size';
export declare class Label {
    el: HTMLLabelElement;
    /**
     *  To indicate ID of target form control web component.
     */
    for: string;
    /**
     * OPTIONAL. Size of the label. { xs, sm, md, lg, xl }.
     */
    size: LabelSizes;
    /**
     * To indicate which form field is required.
     */
    required: boolean;
    /**
     * To indicate which form field is optional.
     */
    optional: boolean;
    /**
     * To indicate if info icon should be displayed.
     */
    infoIcon: boolean;
    /**
     * To provide message for info icon popover.
     */
    infoIconMessage: string;
    private helpButtonId;
    private helpPopoverId;
    validateSizeAttribute(newValue: LabelSizes): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    toggleHelpPopover(): void;
    _getInfoIcon(): any;
    render(): any;
}
