import { EventEmitter } from '../../stencil-public-runtime';
import { AccordionSizes } from '../../constants/size';
import { AccordionItem } from '../../constants/types';
export declare class Accordion {
    el: HTMLElement;
    /**
     *  to set accordion size { sm, md, lg, xl }. Size sm is not supported in Card
     */
    size: AccordionSizes;
    /**
     *  to set card layout
     */
    card: boolean;
    /**
     *  to set portal layout (temporary)
     */
    portal: boolean;
    /**
     *  to truncate long accordion titles
     */
    truncated: boolean;
    /**
     * To provide data for accordions
     */
    accordions: AccordionItem[];
    /**
     * Custom event when accordion is shown from accordion trigger
     */
    chiAccordionShow: EventEmitter<AccordionItem>;
    /**
     * Custom event when accordion is hidden from accordion trigger
     */
    chiAccordionHide: EventEmitter<AccordionItem>;
    /**
     * Custom event when accordions change. Emits all accordions in accordion.
     */
    chiAccordionsChanged: EventEmitter<AccordionItem[]>;
    connectedCallback(): void;
    /**
     * To show one accordion (index), more than one (array of indexes) or all (no argument)
     */
    show(accordions?: number | number[]): Promise<void>;
    /**
     * To hide one accordion (index), more than one (array of indexes) or all (no argument)
     */
    hide(accordions?: number | number[]): Promise<void>;
    /**
     * To toggle one accordion (index), more than one (array of indexes) or all (no argument)
     */
    toggle(accordions?: number | number[]): Promise<void>;
    sizeValidation(newValue: AccordionSizes): void;
    updateItems(accordions: number | number[], show?: boolean, toggle?: boolean): void;
    /**
     * Toggles an accordion and emits event
     */
    toggleAccordion(index: number): void;
    getAccordionClasses(): string;
    /**
     * TODO: chi-icon cannot be used because styles apply only to .chi-icon.icon-chevron-down
     */
    getItemTrigger(accordion: AccordionItem, index: any): any;
    getAccordionContent(accordion: AccordionItem): any;
    getAccordionItem(accordion: AccordionItem, index: number): any;
    render(): any;
}
