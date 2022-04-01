import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Bookmark = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z'/>
        </svg>
    );
  }
);