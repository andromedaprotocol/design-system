import React from "react";

export const SkipForward = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='5 4 15 12 5 20 5 4'/>
          <line  x1='19' y1='5' x2='19' y2='19'/>
        </svg>
    );
  }
);