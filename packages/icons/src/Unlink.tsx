import React from "react";

export const Unlink = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71'/>
          <path  d='M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71'/>
          <line  x1='8' y1='2' x2='8' y2='5'/>
          <line  x1='2' y1='8' x2='5' y2='8'/>
          <line  x1='16' y1='19' x2='16' y2='22'/>
          <line  x1='19' y1='16' x2='22' y2='16'/>
        </svg>
    );
  }
);