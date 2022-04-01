import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Sun = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='12' r='4'/>
          <path  d='M12 2v2'/>
          <path  d='M12 20v2'/>
          <path  d='M5 5l1.5 1.5'/>
          <path  d='M17.5 17.5L19 19'/>
          <path  d='M2 12h2'/>
          <path  d='M20 12h2'/>
          <path  d='M5 19l1.5-1.5'/>
          <path  d='M17.5 6.5L19 5'/>
        </svg>
    );
  }
);