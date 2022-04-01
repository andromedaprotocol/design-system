import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Webcam = React.forwardRef<SVGSVGElement, IconProps>(
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
          <circle  cx='12' cy='10' r='8'/>
          <circle  cx='12' cy='10' r='3'/>
          <path  d='M12 22v-4m-5 4h5-5zm10 0h-5 5z'/>
        </svg>
    );
  }
);