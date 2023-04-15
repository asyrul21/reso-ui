declare module "*.svg" {
  import React from "react";
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default SVG;
}

// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
// https://github.com/gregberge/svgr/issues/546
