import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Library = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 6l4 14'/>
          <path  d='M12 6v14'/>
          <path  d='M8 8v12'/>
          <path  d='M4 4v16'/>
        </svg>
    );
  }
);