import React from "react";

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='17' y1='7' x2='7' y2='17'/>
          <polyline  points='17 17 7 17 7 7'/>
        </svg>
    );
  }
);