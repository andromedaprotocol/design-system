import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Cloud = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z'/>
        </svg>
    );
  }
);