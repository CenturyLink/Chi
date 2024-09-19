import { ChiStates } from '../../constants/states';
export declare class HelperMessage {
    el: HTMLElement;
    /**
     * To define state color of message text
     */
    state?: ChiStates;
    connectedCallback(): void;
    render(): any;
}
