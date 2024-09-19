export declare class ExpansionPanel {
    el: any;
    /**
     * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}
     */
    state: string;
    /**
     * to set a step number next to the title of the panel
     */
    step: string;
    /**
     * to set the panel style to bordered
     */
    bordered: boolean;
    /**
     * to set the title of the panel
     */
    epanelTitle: string;
    /**
     * to render a state icon within the panel
     */
    stateIcon: boolean;
    /**
     * to render a state tooltip
     */
    stateIconTooltip: string;
    private tooltip;
    stateValidation(newValue: string): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
