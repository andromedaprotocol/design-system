import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SmartphoneCharging = React.forwardRef<SVGSVGElement, IconProps>(
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
          <rect  x='5' y='2' width='14' height='20' rx='2' ry='2'/>
          <path  d='M12.667 8L10 12h4l-2.667 4'/>
        </svg>
    );
  }
);