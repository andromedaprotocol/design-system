import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Tent = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M19 20L10 4'/>
          <path  d='M5 20l9-16'/>
          <path  d='M3 20h18'/>
          <path  d='M12 15l-3 5'/>
          <path  d='M12 15l3 5'/>
        </svg>
    );
  }
);