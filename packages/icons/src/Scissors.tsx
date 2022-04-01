import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Scissors = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='6' cy='6' r='3'/>
          <circle  cx='6' cy='18' r='3'/>
          <line  x1='20' y1='4' x2='8.12' y2='15.88'/>
          <line  x1='14.47' y1='14.48' x2='20' y2='20'/>
          <line  x1='8.12' y1='8.12' x2='12' y2='12'/>
        </svg>
    );
  }
);