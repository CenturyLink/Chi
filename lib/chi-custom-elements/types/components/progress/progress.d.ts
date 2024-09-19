export declare class Progress {
    /**
     *  to set the value of a progress bar.
     */
    value: number;
    /**
     *  to set the max value of a progress bar.
     */
    max: number;
    /**
     *  to indicate a progress bar state { info, warning, danger, success }.
     */
    state: string;
    stateValidation(newValue: string): void;
    componentWillLoad(): void;
    render(): any;
}
