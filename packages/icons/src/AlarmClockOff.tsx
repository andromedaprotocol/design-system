import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const AlarmClockOff = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19.94 14A8 8 0 0010 5.25m8.13 12.89A8 8 0 116.87 6.86'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M2 2l20 20'/>
          <path  d='M4 4L2 6'/>
        </svg>
    );
  }
);