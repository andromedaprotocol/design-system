import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Asterisk = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 6v12'/>
          <path  d='M17.196 9L6.804 15'/>
          <path  d='M6.804 9l10.392 6'/>
        </svg>
    );
  }
);