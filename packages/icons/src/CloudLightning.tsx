import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CloudLightning = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8'/>
          <path  d='M12 12l-3 5h5l-3 5'/>
        </svg>
    );
  }
);