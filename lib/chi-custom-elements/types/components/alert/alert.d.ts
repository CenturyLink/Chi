import { EventEmitter } from '../../stencil-public-runtime';
import { AlertColors } from '../../constants/color';
export declare class Alert {
    el: any;
    /**
     *  to set alert type { bubble, banner, toast }.
     */
    type: string;
    /**
     *  to hide the alert when dismissed.
     */
    mutable: boolean;
    /**
     *  to set alert state.
     */
    color: AlertColors;
    /**
     *  to avoid the necessity of adding <chi-icon> to alert markup.
     */
    icon: string;
    /**
     *  to set alert size { sm, md, lg }.
     */
    size: string;
    /**
     *  to center the alert content.
     */
    center: boolean;
    /**
     *  to make the alert dismissible.
     */
    closable: boolean;
    /**
     *  to set the alert expiration time (seconds).
     */
    expirationTime?: number;
    /**
     * To render alert with Spinner
     */
    spinner: boolean;
    /**
     *  custom event when trying to dismiss an alert.
     */
    dismissAlert: EventEmitter<void>;
    /**
     *  To define alert title
     */
    alertTitle?: string;
    timeoutReference: any;
    typeValidation(newValue: string): void;
    colorValidation(newValue: AlertColors): void;
    sizeValidation(newValue: string): void;
    expirationTimeChanged(newValue: number): void;
    componentWillLoad(): void;
    connectedCallback(): void;
    _hasAlertActions(): boolean;
    _hasClickableIcon(): boolean;
    _dismissAlert(): void;
    _autoCloseAlert(expirationTime: number): void;
    render(): any;
}
