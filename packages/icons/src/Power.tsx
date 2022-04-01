import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Power = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18.36 6.64a9 9 0 11-12.73 0'/>
          <line  x1='12' y1='2' x2='12' y2='12'/>
        </svg>
    );
  }
);