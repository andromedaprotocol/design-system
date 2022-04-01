import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Podcast = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='11' r='1'/>
          <path  d='M17.03 18.46a9 9 0 10-10.02.03'/>
          <path  d='M16.06 13.91a5 5 0 10-7.97.2'/>
          <path  d='M11.11 17a.9.9 0 111.78 0l-.52 4.67a.37.37 0 01-.74 0l-.52-4.68z'/>
        </svg>
    );
  }
);