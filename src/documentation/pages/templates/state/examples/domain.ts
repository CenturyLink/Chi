interface CircleData {
    cx: string,
    cy: string,
    radius: string,
    fill: string,
    strokeWidth: string
}

export interface StateData {
    class: string,
    label: string,
    icon: string,
    svgViewBox?: string,
    circle?: CircleData
}