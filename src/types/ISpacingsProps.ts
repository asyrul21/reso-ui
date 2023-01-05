type spacingsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type marginAllRange = spacingsRange | "auto";
type marginVerticalRange = spacingsRange | "center";

export interface ISpacingsProps {
  /* margins */
  ma?: marginAllRange;
  mv?: marginVerticalRange;
  mh?: spacingsRange;
  mt?: spacingsRange;
  mb?: spacingsRange;
  mr?: spacingsRange;
  ml?: spacingsRange;
  /* paddings */
  pa?: spacingsRange;
  pv?: spacingsRange;
  ph?: spacingsRange;
  pt?: spacingsRange;
  pb?: spacingsRange;
  pr?: spacingsRange;
  pl?: spacingsRange;
}
