type spacingsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type marginAllRange = spacingsRange | "auto";
type marginVerticalRange = spacingsRange | "center";

export interface IMarginProps {
  ma?: marginAllRange;
  mv?: marginVerticalRange;
  mh?: spacingsRange;
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