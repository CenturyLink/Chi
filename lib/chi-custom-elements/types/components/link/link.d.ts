export declare class Link {
    el: HTMLElement;
    /**
     *  to set a link's destination url.
     */
    href: string;
    /**
     *  to set the language of a link's destination url.
     */
    hreflang: string;
    /**
     *  to provide alternative text in case of icon links.
     */
    alternativeText: string;
    /**
     *  to render a link as a prominent call to action.
     */
    cta: boolean;
    /**
     *  to disable a link.
     */
    disabled: boolean;
    /**
     *  to prompt users to save a page or document instead of navigating to it.
     */
    download: string;
    /**
     *  to remove a link's underline.
     */
    noUnderline: boolean;
    /**
     *  to remove a link's underline on hover.
     */
    noHoverUnderline: boolean;
    /**
     *  to set the relationship between the current page and the linked page.
     */
    rel: string;
    /**
     *  to set size of a link { xs, sm, md, lg, xl }.
     */
    size: string;
    /**
     *  to set target of a link.
     */
    target: string;
    /**
     * To set hover state
     */
    _hover: boolean;
    sizeValidation(newValue: string): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    _hasIcon(): boolean;
    _getExtraClassesForTriggerButton(): string;
    render(): any;
}
