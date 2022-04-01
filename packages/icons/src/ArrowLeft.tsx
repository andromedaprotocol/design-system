import React from "react";

export const ArrowLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='19' y1='12' x2='5' y2='12'/>
          <polyline  points='12 19 5 12 12 5'/>
        </svg>
    );
  }
);