import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Library = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 6l4 14'/>
          <path  d='M12 6v14'/>
          <path  d='M8 8v12'/>
          <path  d='M4 4v16'/>
        </svg>
    );
  }
);