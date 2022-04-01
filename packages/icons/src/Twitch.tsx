import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Twitch = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
          <path  d='M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'/>
        </svg>
    );
  }
);