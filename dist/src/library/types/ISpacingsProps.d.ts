type spacingsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type spacingsRangeWithAuto = spacingsRange | "auto";
type spacingsRangeWithCenter = spacingsRange | "center";
export interface IMarginProps {
    ma?: spacingsRangeWithAuto;
    mv?: spacingsRange;
    mh?: spacingsRangeWithCenter;
    mt?: spacingsRange;
    mb?: spacingsRange;
    mr?: spacingsRange;
    ml?: spacingsRange;
}
export interface IPaddingProps {
    pa?: spacingsRange;
    pv?: spacingsRange;
    ph?: spacingsRange;
    pt?: spacingsRange;
    pb?: spacingsRange;
    pr?: spacingsRange;
    pl?: spacingsRange;
}
export type ISpacingsProps = IMarginProps & IPaddingProps;
export default ISpacingsProps;
//# sourceMappingURL=ISpacingsProps.d.ts.map