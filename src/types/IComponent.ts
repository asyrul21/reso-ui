import React from "react";
import Theme from "./Theme";

// shared props
interface IComponent {
  theme?: Theme;
  className?: string;
  styles?: React.CSSProperties;
}

export default IComponent;
