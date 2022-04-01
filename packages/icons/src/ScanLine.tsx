import React from "react";

export const ScanLine = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 7V5a2 2 0 012-2h2'/>
          <path  d='M17 3h2a2 2 0 012 2v2'/>
          <path  d='M21 17v2a2 2 0 01-2 2h-2'/>
          <path  d='M7 21H5a2 2 0 01-2-2v-2'/>
          <line  x1='7' y1='12' x2='17' y2='12'/>
        </svg>
    );
  }
);