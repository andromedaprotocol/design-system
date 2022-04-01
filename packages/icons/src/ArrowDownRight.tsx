import React from "react";

export const ArrowDownRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='7' y1='7' x2='17' y2='17'/>
          <polyline  points='17 7 17 17 7 17'/>
        </svg>
    );
  }
);