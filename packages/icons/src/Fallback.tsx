import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Fallback = React.forwardRef<SVGSVGElement, IconProps>(
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
          <g  stroke='currentColor'/>
          <path  fill='none' d='M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'/>
          <path  fill='currentColor' d='M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'/>
          <circle  fill='none' cx='12' cy='12' r='11.25'/>
        </svg>
    );
  }
);