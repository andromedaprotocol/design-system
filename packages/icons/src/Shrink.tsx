import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Shrink = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 15l6 6m-6-6v4.8m0-4.8h4.8'/>
          <path  d='M9 19.8V15m0 0H4.2M9 15l-6 6'/>
          <path  d='M15 4.2V9m0 0h4.8M15 9l6-6'/>
          <path  d='M9 4.2V9m0 0H4.2M9 9L3 3'/>
        </svg>
    );
  }
);