import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PenTool = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 19l7-7 3 3-7 7-3-3z'/>
          <path  d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'/>
          <path  d='M2 2l7.586 7.586'/>
          <circle  cx='11' cy='11' r='2'/>
        </svg>
    );
  }
);