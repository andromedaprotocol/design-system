import React from "react";

export const Download = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'/>
          <polyline  points='7 10 12 15 17 10'/>
          <line  x1='12' y1='15' x2='12' y2='3'/>
        </svg>
    );
  }
);