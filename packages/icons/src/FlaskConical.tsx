import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FlaskConical = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10 2v8L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45L14 10V2'/>
          <path  d='M8.5 2h7'/>
          <path  d='M7 16h10'/>
        </svg>
    );
  }
);