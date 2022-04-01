import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Binary = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10 4H6v6h4V4z'/>
          <path  d='M18 14h-4v6h4v-6z'/>
          <path  d='M14 4h2v6m-2 0h4'/>
          <path  d='M6 14h2v6m-2 0h4'/>
        </svg>
    );
  }
);