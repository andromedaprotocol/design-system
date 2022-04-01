import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FileDigit = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'/>
          <path  d='M14 2v6h6'/>
          <path  d='M10 12h2v6'/>
          <rect  x='2' y='12' width='4' height='6'/>
          <path  d='M10 18h4'/>
        </svg>
    );
  }
);