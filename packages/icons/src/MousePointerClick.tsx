import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const MousePointerClick = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M9 9l5 12 1.774-5.226L21 14 9 9z'/>
          <path  d='M16.071 16.071l4.243 4.243'/>
          <path  d='M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'/>
        </svg>
    );
  }
);