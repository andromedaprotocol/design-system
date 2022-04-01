import React from "react";

export const ArrowUp = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='12' y1='19' x2='12' y2='5'/>
          <polyline  points='5 12 12 5 19 12'/>
        </svg>
    );
  }
);