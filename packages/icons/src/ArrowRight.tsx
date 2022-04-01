import React from "react";

export const ArrowRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='5' y1='12' x2='19' y2='12'/>
          <polyline  points='12 5 19 12 12 19'/>
        </svg>
    );
  }
);