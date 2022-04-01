import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Banknote = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='6' width='20' height='12' rx='2'/>
          <circle  cx='12' cy='12' r='2'/>
          <path  d='M6 12h.01M18 12h.01'/>
        </svg>
    );
  }
);