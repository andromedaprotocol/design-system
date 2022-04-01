import React from "react";

export const Wifi = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M5 13a10 10 0 0114 0'/>
          <path  d='M8.5 16.5a5 5 0 017 0'/>
          <path  d='M2 8.82a15 15 0 0120 0'/>
          <line  x1='12' y1='20' x2='12.01' y2='20'/>
        </svg>
    );
  }
);