import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Building = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='2' width='16' height='20' rx='2' ry='2'/>
          <path  d='M9 22v-4h6v4'/>
          <path  d='M8 6h.01'/>
          <path  d='M16 6h.01'/>
          <path  d='M12 6h.01'/>
          <path  d='M12 10h.01'/>
          <path  d='M12 14h.01'/>
          <path  d='M16 10h.01'/>
          <path  d='M16 14h.01'/>
          <path  d='M8 10h.01'/>
          <path  d='M8 14h.01'/>
        </svg>
    );
  }
);