import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ScreenShare = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3'/>
          <path  d='M8 21h8'/>
          <path  d='M12 17v4'/>
          <path  d='M17 8l5-5'/>
          <path  d='M17 3h5v5'/>
        </svg>
    );
  }
);