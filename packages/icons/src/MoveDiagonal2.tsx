import React from "react";

export const MoveDiagonal2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='5 11 5 5 11 5'/>
          <polyline  points='19 13 19 19 13 19'/>
          <line  x1='5' y1='5' x2='19' y2='19'/>
        </svg>
    );
  }
);