import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const BluetoothConnected = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 7l10 10-5 5V2l5 5L7 17'/>
          <line  x1='18' y1='12' y2='12' x2='21'/>
          <line  x1='3' y1='12' y2='12' x2='6'/>
        </svg>
    );
  }
);