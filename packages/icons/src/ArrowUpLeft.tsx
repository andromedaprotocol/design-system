import React from "react";

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='17' y1='17' x2='7' y2='7'/>
          <polyline  points='7 17 7 7 17 7'/>
        </svg>
    );
  }
);