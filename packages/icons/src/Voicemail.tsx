import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Voicemail = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='5.5' cy='11.5' r='4.5'/>
          <circle  cx='18.5' cy='11.5' r='4.5'/>
          <line  x1='5.5' y1='16' x2='18.5' y2='16'/>
        </svg>
    );
  }
);