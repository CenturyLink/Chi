export declare class CacheLoader {
    /**
     *  to set type of cache loader { pulse, bar }.
     */
    type: string;
    /**
     *  to visually de-emphasize by muting colors.
     */
    muted: boolean;
    /**
     *  to disable user interaction.
     */
    noInteraction: boolean;
    typeValidation(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
