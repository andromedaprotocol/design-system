import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ScreenShare = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'/>
          <path  d='M8 21h8'/>
          <path  d='M12 17v4'/>
          <path  d='M17 8l5-5'/>
          <path  d='M17 3h5v5'/>
        </svg>
    );
  }
);