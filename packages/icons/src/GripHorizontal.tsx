import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const GripHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='9' r='1'/>
          <circle  cx='19' cy='9' r='1'/>
          <circle  cx='5' cy='9' r='1'/>
          <circle  cx='12' cy='15' r='1'/>
          <circle  cx='19' cy='15' r='1'/>
          <circle  cx='5' cy='15' r='1'/>
        </svg>
    );
  }
);