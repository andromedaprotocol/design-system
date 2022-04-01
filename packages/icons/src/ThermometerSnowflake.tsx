import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ThermometerSnowflake = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 12h10'/>
          <path  d='M9 4v16'/>
          <path  d='M3 9l3 3-3 3'/>
          <path  d='M12 6L9 9 6 6'/>
          <path  d='M6 18l3-3 1.5 1.5'/>
          <path  d='M18 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z'/>
        </svg>
    );
  }
);