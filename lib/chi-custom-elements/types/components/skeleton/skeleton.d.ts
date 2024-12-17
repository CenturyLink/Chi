import { SkeletonSizes } from '../../constants/size';
import { SkeletonTypes } from '../../constants/types';
export declare class Skeleton {
    /**
     * Size of the skeleton: { xs, sm, md, lg, xl }.
     */
    size: SkeletonSizes;
    /**
     * Applies type classes to the skeleton.
     */
    type: SkeletonTypes;
    sizeValidation(newValue: SkeletonSizes): void;
    typeValidation(newValue: SkeletonTypes): void;
    componentWillLoad(): void;
    getSkeletonClasses(): string;
    render(): any;
}
