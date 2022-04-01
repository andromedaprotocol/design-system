import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FilePlus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'/>
          <polyline  points='14 2 14 8 20 8'/>
          <line  x1='12' y1='18' x2='12' y2='12'/>
          <line  x1='9' y1='15' x2='15' y2='15'/>
        </svg>
    );
  }
);