import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BluetoothSearching = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M20.83 14.83a4 4 0 000-5.66'/>
          <path  d='M18 12h.01'/>
        </svg>
    );
  }
);