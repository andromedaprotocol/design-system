import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Haze = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M5.2 6.2l1.4 1.4'/>
          <path  d='M2 13h2'/>
          <path  d='M20 13h2'/>
          <path  d='M17.4 7.6l1.4-1.4'/>
          <path  d='M22 17H2'/>
          <path  d='M22 21H2'/>
          <path  d='M16 13a4 4 0 00-8 0'/>
          <path  d='M12 5V2.5'/>
        </svg>
    );
  }
);