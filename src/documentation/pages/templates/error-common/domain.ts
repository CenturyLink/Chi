export interface SvgPathData {
    path: string,
    fill: string
}
  
export interface LogoData {
    viewBox: string,
    dataBrandType?: string,
    svgPathDataList: SvgPathData[]
}