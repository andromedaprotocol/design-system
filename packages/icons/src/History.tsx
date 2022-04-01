import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const History = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M3 3v5h5'/>
          <path  d='M3.05 13A9 9 0 106 5.3L3 8'/>
          <path  d='M12 7v5l4 2'/>
        </svg>
    );
  }
);