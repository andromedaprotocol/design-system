import React from "react";

export const BatteryCharging = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-3'/>
          <path  d='M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h2'/>
          <polyline  points='11 7 8 12 12 12 9 17'/>
          <line  x1='22' x2='22' y1='11' y2='13'/>
        </svg>
    );
  }
);