import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Sunrise = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M12 2v8'/>
          <path  d='M5.2 11.2l1.4 1.4'/>
          <path  d='M2 18h2'/>
          <path  d='M20 18h2'/>
          <path  d='M17.4 12.6l1.4-1.4'/>
          <path  d='M22 22H2'/>
          <path  d='M8 6l4-4 4 4'/>
          <path  d='M16 18a4 4 0 00-8 0'/>
        </svg>
    );
  }
);