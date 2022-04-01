import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Asterisk = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M12 6v12'/>
          <path  d='M17.196 9L6.804 15'/>
          <path  d='M6.804 9l10.392 6'/>
        </svg>
    );
  }
);