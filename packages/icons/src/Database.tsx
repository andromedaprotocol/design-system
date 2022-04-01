import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Database = React.forwardRef<SVGSVGElement, IconProps>(
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
          <ellipse  cx='12' cy='5' rx='9' ry='3'/>
          <path  d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/>
          <path  d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/>
        </svg>
    );
  }
);