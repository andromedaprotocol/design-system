import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const SwissFranc = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10 21V3h8'/>
          <path  d='M6 16h9'/>
          <path  d='M10 9.5h7'/>
        </svg>
    );
  }
);