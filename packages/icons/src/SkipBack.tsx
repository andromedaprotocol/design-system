import React from "react";

export const SkipBack = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='19 20 9 12 19 4 19 20'/>
          <line  x1='5' y1='19' x2='5' y2='5'/>
        </svg>
    );
  }
);