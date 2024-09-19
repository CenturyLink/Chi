import { MarketingIconSizes } from '../../constants/size';
import { ChiMarketingIconModes } from '../../constants/types';
export declare class MarketingIcon {
    el: HTMLElement;
    /**
     * Icon to be rendered.
     */
    icon: string;
    /**
     * OPTIONAL. Size of the Icon { xs, sm, md, lg }.
     */
    size: MarketingIconSizes;
    /**
     * OPTIONAL classes
     */
    extraClass?: string;
    /**
     * To render Marketing icon as filled or outline
     */
    variant?: ChiMarketingIconModes;
    validateSizeAttribute(newValue: MarketingIconSizes): void;
    validateMode(newValue: ChiMarketingIconModes): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private getClass;
    _loadSprite(mode: string): void;
    render(): any;
}
