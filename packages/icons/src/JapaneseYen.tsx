import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const JapaneseYen = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 9.5V21m0-11.5L6 3m6 6.5L18 3'/>
          <path  d='M6 15h12'/>
          <path  d='M6 11h12'/>
        </svg>
    );
  }
);