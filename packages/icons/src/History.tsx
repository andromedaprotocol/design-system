import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const History = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 3v5h5'/>
          <path  d='M3.05 13A9 9 0 106 5.3L3 8'/>
          <path  d='M12 7v5l4 2'/>
        </svg>
    );
  }
);