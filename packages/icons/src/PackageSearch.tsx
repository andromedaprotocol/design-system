import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PackageSearch = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14'/>
          <path  d='M16.5 9.4L7.55 4.24'/>
          <path  d='M12 12v10M3.29 7L12 12 3.29 7zM12 12l8.71-5L12 12z'/>
          <circle  cx='18.5' cy='15.5' r='2.5'/>
          <path  d='M20.27 17.27L22 19'/>
        </svg>
    );
  }
);