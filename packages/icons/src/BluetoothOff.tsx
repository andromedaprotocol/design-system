import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BluetoothOff = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M17 17l-5 5V12l-5 5'/>
          <path  d='M2 2l20 20'/>
          <path  d='M14.5 9.5L17 7l-5-5v4.5'/>
        </svg>
    );
  }
);