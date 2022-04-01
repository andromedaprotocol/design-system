import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Wand = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M15 4V2'/>
          <path  d='M15 16v-2'/>
          <path  d='M8 9h2'/>
          <path  d='M20 9h2'/>
          <path  d='M17.8 11.8L19 13'/>
          <path  d='M15 9h0'/>
          <path  d='M17.8 6.2L19 5'/>
          <path  d='M3 21l9-9'/>
          <path  d='M12.2 6.2L11 5'/>
        </svg>
    );
  }
);