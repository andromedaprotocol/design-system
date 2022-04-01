import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Gamepad2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          <line  x1='6' y1='11' x2='10' y2='11'/>
          <line  x1='8' y1='9' x2='8' y2='13'/>
          <line  x1='15' y1='12' x2='15.01' y2='12'/>
          <line  x1='18' y1='10' x2='18.01' y2='10'/>
          <path  d='M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z'/>
        </svg>
    );
  }
);