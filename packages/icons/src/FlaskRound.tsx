import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FlaskRound = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M10 2v7.31'/>
          <path  d='M14 9.3V1.99'/>
          <path  d='M8.5 2h7'/>
          <path  d='M14 9.3a6.5 6.5 0 11-4 0'/>
          <path  d='M5.58 16.5h12.85'/>
        </svg>
    );
  }
);