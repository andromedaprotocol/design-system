import React from "react";

export const AlertTriangle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z'/>
          <line  x1='12' y1='9' x2='12' y2='13'/>
          <line  x1='12' y1='17' x2='12.01' y2='17'/>
        </svg>
    );
  }
);