import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const FormInput = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='6' width='20' height='12' rx='2'/>
          <path  d='M12 12h.01'/>
          <path  d='M17 12h.01'/>
          <path  d='M7 12h.01'/>
        </svg>
    );
  }
);