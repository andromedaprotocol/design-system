import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const ToggleLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='1' y='5' width='22' height='14' rx='7' ry='7'/>
          <circle  cx='8' cy='12' r='3'/>
        </svg>
    );
  }
);