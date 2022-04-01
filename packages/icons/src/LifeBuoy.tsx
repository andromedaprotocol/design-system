import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const LifeBuoy = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <circle  cx='12' cy='12' r='10'/>
          <circle  cx='12' cy='12' r='4'/>
          <line  x1='4.93' y1='4.93' x2='9.17' y2='9.17'/>
          <line  x1='14.83' y1='14.83' x2='19.07' y2='19.07'/>
          <line  x1='14.83' y1='9.17' x2='19.07' y2='4.93'/>
          <line  x1='14.83' y1='9.17' x2='18.36' y2='5.64'/>
          <line  x1='4.93' y1='19.07' x2='9.17' y2='14.83'/>
        </svg>
    );
  }
);