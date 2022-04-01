import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BluetoothConnected = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7 7l10 10-5 5V2l5 5L7 17'/>
          <line  x1='18' y1='12' y2='12' x2='21'/>
          <line  x1='3' y1='12' y2='12' x2='6'/>
        </svg>
    );
  }
);