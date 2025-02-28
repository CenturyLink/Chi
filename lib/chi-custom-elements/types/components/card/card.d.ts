import { CardFooterAlignTypes, CardNoBorderTypes } from '../../constants/types';
export declare class Card {
    el: HTMLElement;
    /**
     * To define card title.
     */
    cardTitle?: string;
    /**
     * Remove border from the card, header, and/or footer.
     */
    noBorders?: CardNoBorderTypes[];
    /**
     * Render an active state card.
     */
    active: boolean;
    /**
     * Render a highlighted card.
     */
    highlight: boolean;
    /**
     * Render a widget card.
     */
    widget: boolean;
    /**
     * Center-align the card content.
     */
    center: boolean;
    /**
     * Center-align the title in card header.
     */
    titleCenter: boolean;
    /**
     * Align the footer items.
     */
    footerAlign?: CardFooterAlignTypes;
    /**
     * Animate card on hover.
     */
    animated: boolean;
    /**
     * Render an empty card.
     */
    empty: boolean;
    /**
     * Source URL for the hero image. Display a hero image at the top of the card.
     */
    imgSrc?: string;
    /**
     * Alt text for the hero image.
     */
    alt?: string;
    /**
     * To set header and footer size to -sm
     */
    size?: 'sm';
    sizeValidation(newValue: string): void;
    footerAlignValidation(newValue: CardFooterAlignTypes): void;
    noBordersValidation(newValue: CardNoBorderTypes[]): void;
    componentWillLoad(): void;
    private getHeader;
    private getFooter;
    private getContent;
    private getHeroImage;
    private getCardClasses;
    render(): any;
}
