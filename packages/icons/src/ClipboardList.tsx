import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ClipboardList = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2'/>
          <path  d='M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z'/>
          <path  d='M12 11h4'/>
          <path  d='M12 16h4'/>
          <path  d='M8 11h.01'/>
          <path  d='M8 16h.01'/>
        </svg>
    );
  }
);