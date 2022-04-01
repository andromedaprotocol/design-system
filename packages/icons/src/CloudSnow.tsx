import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const CloudSnow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'/>
          <path  d='M8 15h0'/>
          <path  d='M8 19h0'/>
          <path  d='M12 17h0'/>
          <path  d='M12 21h0'/>
          <path  d='M16 15h0'/>
          <path  d='M16 19h0'/>
        </svg>
    );
  }
);