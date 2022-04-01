import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const PlugZap = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M13 2l-2 2.5h3L12 7'/>
          <path  d='M12 22v-3'/>
          <path  d='M10 13v-2.5'/>
          <path  d='M10 12.5v-2'/>
          <path  d='M14 12.5v-2'/>
          <path  d='M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z'/>
        </svg>
    );
  }
);