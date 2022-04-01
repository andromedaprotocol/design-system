import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const HardDrive = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='22' y1='12' x2='2' y2='12'/>
          <path  d='M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'/>
          <line  x1='6' y1='16' x2='6.01' y2='16'/>
          <line  x1='10' y1='16' x2='10.01' y2='16'/>
        </svg>
    );
  }
);